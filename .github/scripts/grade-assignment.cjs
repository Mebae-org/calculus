// MAGI
const ANSWER_KEYS = {
  '01': [6, 10, -3],
  '02': [28, 0, 0],
  '03': [-2, 9, 3 / 8],
  '04': [31 / 10, 1, Math.PI / 4],
  '05': [27 / 2, 3 / 4 + Math.log(2) / 2, 64 * Math.PI / 15],
  '06': [1.0488125, 2, 16],
  '07': [1, 8, 82.71231905663171],
  '08': [3 * Math.E, 1, -4],
};

const TOLERANCE = 1e-6;
const COMMENT_MARKER = '<!-- calculus-auto-grader -->';

function parseNumber(value) {
  const normalized = value.trim();
  const numericPattern = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)$/;
  if (!numericPattern.test(normalized)) return null;

  const number = Number(normalized);
  return Number.isFinite(number) ? number : null;
}

function parseAnswers(body) {
  const answers = new Map();
  const headings = [...body.matchAll(/^###\s*問([1-3])\s*\r?\n/gm)];

  for (const [index, heading] of headings.entries()) {
    const question = Number(heading[1]);
    const sectionEnd = headings[index + 1]?.index ?? body.length;
    const value = parseNumber(body.slice(heading.index + heading[0].length, sectionEnd));
    answers.set(question, answers.has(question) ? null : value);
  }

  return [1, 2, 3].map((number) => answers.get(number) ?? null);
}

function gradeSubmission(title, body) {
  const assignmentMatch = title.match(/^\[課題(0[1-8])\]/);
  if (!assignmentMatch) return null;

  const assignment = assignmentMatch[1];
  const submitted = parseAnswers(body);
  const results = submitted.map((value, index) => ({
    valid: value !== null,
    correct: value !== null && Math.abs(value - ANSWER_KEYS[assignment][index]) <= TOLERANCE,
  }));

  return {
    assignment,
    results,
    score: results.filter((result) => result.correct).length * 10,
  };
}

function formatComment(grade) {
  const rows = grade.results.map((result, index) => {
    const status = !result.valid ? '数値を入力してください' : result.correct ? '正解' : '不正解';
    return `| 問${index + 1} | ${status} | ${result.correct ? 10 : 0} / 10 |`;
  });

  const guidance = grade.score === 30
    ? '全問正解です。'
    : 'Issueの解答を編集すると再採点されます。解答欄には単位や数式を含めず、整数または小数だけを入力してください。';

  return [
    COMMENT_MARKER,
    '## 自動採点結果',
    '',
    '| 問題 | 判定 | 得点 |',
    '|------|------|------|',
    ...rows,
    '',
    `**合計: ${grade.score} / 30点**`,
    '',
    guidance,
  ].join('\n');
}

async function ensureLabel(github, context, name, color, description) {
  try {
    await github.rest.issues.getLabel({ ...context.repo, name });
  } catch (error) {
    if (error.status !== 404) throw error;
    try {
      await github.rest.issues.createLabel({ ...context.repo, name, color, description });
    } catch (createError) {
      if (createError.status !== 422) throw createError;
    }
  }
}

async function removeLabelIfPresent(github, context, issueNumber, labels, name) {
  if (!labels.includes(name)) return;
  await github.rest.issues.removeLabel({
    ...context.repo,
    issue_number: issueNumber,
    name,
  });
}

async function run({ github, context, core }) {
  const { data: issue } = await github.rest.issues.get({
    ...context.repo,
    issue_number: context.issue.number,
  });
  const grade = gradeSubmission(issue.title, issue.body || '');
  if (!grade) {
    const labels = issue.labels.map((label) => typeof label === 'string' ? label : label.name);
    await removeLabelIfPresent(github, context, issue.number, labels, 'grade-passed');
    await removeLabelIfPresent(github, context, issue.number, labels, 'grade-needs-revision');
    core.info('現在のタイトルが課題提出形式ではないため、採点状態を解除しました。');
    return;
  }

  const passed = grade.score === 30;
  const statusLabel = passed ? 'grade-passed' : 'grade-needs-revision';
  await ensureLabel(github, context, 'assignment', '1d76db', '自動採点対象の課題');
  await ensureLabel(github, context, 'grade-passed', '2da44e', '自動採点で満点');
  await ensureLabel(github, context, 'grade-needs-revision', 'd93f0b', '再提出が必要');

  const labels = issue.labels.map((label) => typeof label === 'string' ? label : label.name);
  const oldStatus = passed ? 'grade-needs-revision' : 'grade-passed';
  await removeLabelIfPresent(github, context, issue.number, labels, oldStatus);
  await github.rest.issues.addLabels({
    ...context.repo,
    issue_number: issue.number,
    labels: ['assignment', statusLabel],
  });

  const comments = await github.paginate(github.rest.issues.listComments, {
    ...context.repo,
    issue_number: issue.number,
    per_page: 100,
  });
  const previous = comments.find((comment) =>
    comment.user?.type === 'Bot' && comment.body?.includes(COMMENT_MARKER));
  const body = formatComment(grade);

  if (previous) {
    await github.rest.issues.updateComment({
      ...context.repo,
      comment_id: previous.id,
      body,
    });
  } else {
    await github.rest.issues.createComment({
      ...context.repo,
      issue_number: issue.number,
      body,
    });
  }

  core.info(`課題${grade.assignment}: ${grade.score}/30点`);
}

module.exports = { ANSWER_KEYS, TOLERANCE, formatComment, gradeSubmission, parseAnswers, parseNumber, run };
// /MAGI
