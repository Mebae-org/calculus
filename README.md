<!-- MAGI -->
# 微分積分

大学初年次の微分積分を学ぶための教材リポジトリです。提示されたモデルコアカリキュラムの到達目標を8章で扱い、各章に解説、解答付き練習問題、提出課題を収録しています。

## 対象

- 対象者: 大学初年次の学生、微分積分を学び直す人
- 前提知識: 高等学校数学の式計算、関数、三角関数、指数・対数、複素数、数列・級数の基礎
- 到達目標: 一変数・多変数の微積分と基本的な常微分方程式について、計算の根拠を説明しながら標準問題を解けること

## 使い方

1. 各章の `README.md` で前提知識と学習目標を確認します。
2. `docs/index.md` を読み、例題を解答を見ずに計算します。
3. `exercises/index.md` の問題を解き、折りたたまれた解答で確認します。
4. `assignments/index.md` の課題を解き、リンク先のIssueフォームへ数値解答を入力します。
5. GitHub Actionsの採点コメントを確認し、不正解ならIssueを編集して再提出します。
6. 各章末のチェック項目で理解が不十分な節へ戻ります。

## 章一覧

| 章 | タイトル | 主な内容 |
|----|----------|----------|
| 1 | [極限と導関数](./ch01-limits-derivatives/) | 関数の極限、微分係数、導関数、べき関数 |
| 2 | [微分法の公式](./ch02-differentiation-rules/) | 積・商・合成関数、初等関数、逆三角関数 |
| 3 | [微分の応用](./ch03-derivative-applications/) | グラフ、極値、接線、凹凸、媒介変数表示 |
| 4 | [積分](./ch04-integration/) | 不定積分、基本定理、置換積分、部分積分、初等関数の積分 |
| 5 | [定積分の応用](./ch05-integration-applications/) | 面積、曲線の長さ、体積 |
| 6 | [Taylor級数と複素数](./ch06-series-complex/) | Taylor展開、剰余項、Eulerの公式 |
| 7 | [多変数微積分](./ch07-multivariable-calculus/) | 偏微分、二変数関数の極値、二重積分、極座標、体積 |
| 8 | [微分方程式](./ch08-differential-equations/) | 変数分離形、1階線形、定数係数2階同次線形方程式 |

## モデルコアカリキュラム対応表

提示された到達目標を教材内で次のように扱います。正式なMCCコードは提示されていないため、コードを独自に付与せず、到達目標の文言で対応付けています。

| 分野 | 到達目標 | 対応箇所 |
|------|----------|----------|
| 微分法 | 関数の極限を求めることができる | [1.1](./ch01-limits-derivatives/docs/index.md#11-関数の極限) |
| 微分法 | 微分係数・導関数の意味を理解し、べき関数の導関数を求めることができる | [1.2-1.3](./ch01-limits-derivatives/docs/index.md#12-微分係数と導関数) |
| 微分法 | 積及び商の導関数を求めることができる | [2.1](./ch02-differentiation-rules/docs/index.md#21-積と商の微分法) |
| 微分法 | 合成関数の微分法を利用した計算ができる | [2.2](./ch02-differentiation-rules/docs/index.md#22-合成関数と連鎖律) |
| 微分法 | 三角・指数・対数・逆三角関数を含む関数の導関数を求めることができる | [2.3-2.6](./ch02-differentiation-rules/docs/index.md#23-三角関数の微分) |
| 微分法の応用 | 導関数からグラフの概形を把握し、極値や最大値・最小値を求めることができる | [3.1](./ch03-derivative-applications/docs/index.md#31-増減極値最大値最小値) |
| 微分法の応用 | 接線の方程式を求めることができる | [3.2](./ch03-derivative-applications/docs/index.md#32-接線の方程式) |
| 微分法の応用 | 第2次導関数からグラフの凹凸を判定できる | [3.3](./ch03-derivative-applications/docs/index.md#33-2階導関数凹凸変曲点) |
| 微分法の応用 | 媒介変数表示された関数の導関数を計算できる | [3.4](./ch03-derivative-applications/docs/index.md#34-媒介変数表示された曲線の微分) |
| 積分法 | 導関数の公式を利用して不定積分を求めることができる | [4.1](./ch04-integration/docs/index.md#41-原始関数と不定積分) |
| 積分法 | 微積分学の基本定理を理解し、不定積分から定積分を求めることができる | [4.2](./ch04-integration/docs/index.md#42-定積分と微積分学の基本定理) |
| 積分法 | 置換積分及び部分積分を利用して不定積分や定積分を求めることができる | [4.3-4.4](./ch04-integration/docs/index.md#43-置換積分) |
| 積分法 | 三角・指数・対数・分数・無理関数などの不定積分・定積分を求めることができる | [4.5-4.8](./ch04-integration/docs/index.md#45-三角関数を含む積分) |
| 積分法の応用 | 定積分を利用して面積を求めることができる | [5.1](./ch05-integration-applications/docs/index.md#51-定積分と面積) |
| 積分法の応用 | 定積分を利用して曲線の長さを求めることができる | [5.2](./ch05-integration-applications/docs/index.md#52-曲線の長さ) |
| 積分法の応用 | 定積分を利用して体積を求めることができる | [5.3-5.5](./ch05-integration-applications/docs/index.md#53-断面積による体積) |
| 級数 | 一変数関数のTaylor展開を求めることができる | [6.1-6.4](./ch06-series-complex/docs/index.md#61-taylor-多項式) |
| 級数 | Eulerの公式を利用できる | [6.5-6.6](./ch06-series-complex/docs/index.md#65-euler-の公式) |
| 偏微分 | 合成関数の偏微分法などから第2次までの偏導関数を求めることができる | [7.1-7.2](./ch07-multivariable-calculus/docs/index.md#71-偏導関数と連鎖律) |
| 偏微分 | 二変数関数の極値を求めることができる | [7.3](./ch07-multivariable-calculus/docs/index.md#73-二変数関数の極値) |
| 重積分 | 累次積分による二重積分の計算ができる | [7.4](./ch07-multivariable-calculus/docs/index.md#74-二重積分と累次積分) |
| 重積分 | 極座標変換を利用して二重積分の計算ができる | [7.5](./ch07-multivariable-calculus/docs/index.md#75-極座標変換とヤコビアン) |
| 重積分 | 二重積分を利用して体積を求めることができる | [7.6](./ch07-multivariable-calculus/docs/index.md#76-二重積分による体積) |
| 微分方程式 | 変数分離形の微分方程式を解くことができる | [8.2](./ch08-differential-equations/docs/index.md#82-変数分離形) |
| 微分方程式 | 1階線形微分方程式を解くことができる | [8.3](./ch08-differential-equations/docs/index.md#83-1階線形方程式と積分因子) |
| 微分方程式 | 定数係数2階同次線形微分方程式を解くことができる | [8.4](./ch08-differential-equations/docs/index.md#84-定数係数2階同次線形方程式) |

## 自動採点

課題Issueを作成または編集すると、[課題の自動採点Workflow](./.github/workflows/grade-assignments.yml) が実行されます。3問を各10点で採点し、絶対誤差 $10^{-6}$ 以内を正解とします。結果はIssueコメントと `grade-passed` または `grade-needs-revision` ラベルで通知されます。

## ディレクトリ構成

```text
calculus/
├── README.md
├── CONTRIBUTING.md
└── chNN-short-name/
    ├── README.md
    ├── docs/index.md
    ├── exercises/index.md
    └── assignments/index.md
```

## ライセンス

- **教材・文章・図版**: [CC BY 4.0](./LICENSE)
- **サンプルコード**: [MIT](./LICENSE-CODE)

## 貢献・誤り報告

執筆・修正の手順は [`CONTRIBUTING.md`](./CONTRIBUTING.md) を参照してください。
<!-- /MAGI -->
