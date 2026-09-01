// MAGI
const test = require('node:test');
const assert = require('node:assert/strict');
const { ANSWER_KEYS, gradeSubmission, parseNumber } = require('./grade-assignment.cjs');

function issueBody(values) {
  return values.map((value, index) => `### 問${index + 1}\n${value}`).join('\n\n');
}

test('全課題の正答を満点として採点する', () => {
  const expected = {
    '01': [6, 10, -3],
    '02': [28, 0, 0],
    '03': [-2, 9, 0.375],
    '04': [3.1, 1, Math.PI / 4],
    '05': [13.5, 0.75 + Math.log(2) / 2, 64 * Math.PI / 15],
    '06': [1.0488125, 2, 16],
    '07': [1, 8, 82.71231905663171],
    '08': [3 * Math.E, 1, -4],
  };
  assert.deepEqual(ANSWER_KEYS, expected);

  for (const [assignment, answers] of Object.entries(expected)) {
    const grade = gradeSubmission(`[課題${assignment}] test`, issueBody(answers));
    assert.equal(grade.score, 30);
    assert.ok(grade.results.every((result) => result.correct));
  }
});

test('許容誤差内の小数を正答とする', () => {
  const grade = gradeSubmission('[課題04] 積分', issueBody([3.1000009, 1, 0.785398]));
  assert.equal(grade.score, 30);
});

test('数式、単位、非有限値を数値として受理しない', () => {
  for (const value of ['1/2', '3 m', 'NaN', 'Infinity', '1e1', '']) {
    assert.equal(parseNumber(value), null);
  }
});

test('欠落と誤答を0点として扱う', () => {
  const grade = gradeSubmission('[課題01] 極限と導関数', '### 問1\n5\n\n### 問2\n10');
  assert.equal(grade.score, 10);
  assert.deepEqual(grade.results.map((result) => result.correct), [false, true, false]);
});

test('課題以外のIssueは採点しない', () => {
  assert.equal(gradeSubmission('質問', issueBody([1, 2, 3])), null);
});

test('解答欄の余分な文字と重複した見出しを拒否する', () => {
  const extraText = gradeSubmission('[課題01] test', '### 問1\n6\n補足\n\n### 問2\n10\n\n### 問3\n-3');
  assert.equal(extraText.score, 20);

  const duplicate = gradeSubmission('[課題01] test', '### 問1\n6\n\n### 問1\n6\n\n### 問2\n10\n\n### 問3\n-3');
  assert.equal(duplicate.score, 20);
});
// /MAGI
