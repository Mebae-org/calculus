<!-- MAGI -->
# 第6章 Taylor級数と複素数

> **注記:** このファイルは AI により保守されます。

## 6.1 Taylor 多項式

関数 $f$ の値と最初の $n$ 階までの導関数を $x=a$ で一致させる高々 $n$ 次の多項式は

$$
T_n(x)=\sum_{k=0}^n\frac{f^{(k)}(a)}{k!}(x-a)^k
$$

です。実際、$(x-a)^k$ を $j$ 回微分して $x=a$ を代入すると、$j=k$ の項だけが $k!$ を残します。このため $T_n^{(j)}(a)=f^{(j)}(a)$ が $0\le j\le n$ で成り立ちます。$a=0$ の場合を特に Maclaurin 多項式といいます。

> **例題 6.1** $f(x)=\log x$ の $a=1$ における3次 Taylor 多項式を求めます。
>
> <details><summary>解答</summary>
>
> $f(1)=0$ であり、$f'(x)=x^{-1}$、$f''(x)=-x^{-2}$、$f'''(x)=2x^{-3}$ です。したがって
>
> $$
> T_3(x)=(x-1)-\frac{(x-1)^2}{2}+\frac{(x-1)^3}{3}.
> $$
> </details>

## 6.2 Taylor の定理と剰余項

$f$ が $a$ と $x$ を含む区間で $n+1$ 回微分可能で、必要な導関数が連続であるとします。Taylor の定理によれば、$a$ と $x$ の間のある点 $\xi$ が存在して

$$
f(x)=T_n(x)+R_n(x),\qquad
R_n(x)=\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-a)^{n+1}
$$

となります。$R_n$ を Lagrange 剰余項といいます。区間内で $|f^{(n+1)}(t)|\le M$ なら、未知の $\xi$ を求めなくても

$$
|R_n(x)|\le\frac{M}{(n+1)!}|x-a|^{n+1}
$$

と評価できます。これは単なる近似記号ではなく、誤差の保証です。

> **例題 6.2** $e^{0.2}$ を3次 Maclaurin 多項式で近似し、誤差を評価します。
>
> <details><summary>解答</summary>
>
> 指数関数の導関数はすべて $e^x$ なので、
>
> $$
> T_3(0.2)=1+0.2+\frac{0.2^2}{2}+\frac{0.2^3}{6}
> =1.221333\ldots.
> $$
>
> $0\le t\le0.2$ では $e^t\le e^{0.2}$ です。よって
>
> $$
> |R_3(0.2)|\le\frac{e^{0.2}}{4!}(0.2)^4
> <8.2\times10^{-5}.
> $$
>
> したがって真値は、この近似値から $8.2\times10^{-5}$ 未満しか離れません。
> </details>

### Taylor 級数と関数の一致

形式的に $n\to\infty$ として得る

$$
\sum_{k=0}^{\infty}\frac{f^{(k)}(a)}{k!}(x-a)^k
$$

が Taylor 級数です。ただし、導関数が何階でも存在することだけでは、この級数が $f(x)$ に一致するとは限りません。Taylor の定理から分かる十分条件は

$$
\lim_{n\to\infty}R_n(x)=0
$$

です。このとき初めて $f(x)=\lim_{n\to\infty}T_n(x)$ と結論できます。

例えば $f(x)=e^{-1/x^2}$（$x\ne0$）、$f(0)=0$ と定めた関数は $x=0$ で何階でも微分可能で、すべての導関数値が 0 です。その Maclaurin 級数は恒等的に 0 ですが、$x\ne0$ では $f(x)>0$ です。したがって「無限回微分可能」と「Taylor 級数に一致する」は同義ではありません。

## 6.3 代表的な Maclaurin 展開

以下の展開は頻繁に用います。

$$
e^x=\sum_{n=0}^{\infty}\frac{x^n}{n!}
=1+x+\frac{x^2}{2!}+\frac{x^3}{3!}+\cdots
\qquad(x\in\mathbb R),
$$

$$
\sin x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n+1}}{(2n+1)!}
=x-\frac{x^3}{3!}+\frac{x^5}{5!}-\cdots
\qquad(x\in\mathbb R),
$$

$$
\cos x=\sum_{n=0}^{\infty}(-1)^n\frac{x^{2n}}{(2n)!}
=1-\frac{x^2}{2!}+\frac{x^4}{4!}-\cdots
\qquad(x\in\mathbb R),
$$

$$
\frac{1}{1-x}=\sum_{n=0}^{\infty}x^n
\qquad(|x|<1),
$$

$$
\log(1+x)=\sum_{n=1}^{\infty}(-1)^{n+1}\frac{x^n}{n}
=x-\frac{x^2}{2}+\frac{x^3}{3}-\cdots
\qquad(-1<x\le1).
$$

最後の式は幾何級数 $1/(1+x)=1-x+x^2-\cdots$ を $0$ から $x$ まで項別積分して得られます。項別微分・積分は収束半径の内側では正当化できますが、端点は別に調べる必要があります。$x=1$ では交代調和級数として収束し、$x=-1$ では調和級数となって発散します。

## 6.4 べき級数の収束半径

べき級数

$$
\sum_{n=0}^{\infty}c_n(x-a)^n
$$

には収束半径 $R$ があり、$|x-a|<R$ で絶対収束し、$|x-a|>R$ で発散します。$R$ が有限で比の極限が存在する場合、比の判定から

$$
R=\lim_{n\to\infty}\left|\frac{c_n}{c_{n+1}}\right|
$$

です。根の判定では $1/R=\limsup_{n\to\infty}|c_n|^{1/n}$ と書けます。境界 $x=a\pm R$ では一般則がないため、それぞれ元の数項級数に代入して判定します。

> **例題 6.3** $\sum_{n=0}^{\infty}\frac{(x-2)^n}{3^n(n+1)}$ の収束区間を求めます。
>
> <details><summary>解答</summary>
>
> 係数比から収束半径は $R=3$ です。したがってまず $-1<x<5$ で絶対収束します。
>
> $x=5$ では $\sum 1/(n+1)$ となり発散します。$x=-1$ では $\sum(-1)^n/(n+1)$ となり交代級数として収束します。よって収束区間は
>
> $$
> [-1,5)
> $$
>
> です。左端では条件収束です。
> </details>

## 6.5 Euler の公式

指数関数の級数を複素数 $z$ に対して

$$
e^z=\sum_{n=0}^{\infty}\frac{z^n}{n!}
$$

で定義します。この級数はすべての複素数で絶対収束します。$z=i\theta$ とし、$i^2=-1$ を使って偶数次と奇数次を分けると、

$$
\begin{aligned}
e^{i\theta}
&=1+i\theta+\frac{(i\theta)^2}{2!}+\frac{(i\theta)^3}{3!}+\cdots\\
&=\left(1-\frac{\theta^2}{2!}+\frac{\theta^4}{4!}-\cdots\right)
+i\left(\theta-\frac{\theta^3}{3!}+\frac{\theta^5}{5!}-\cdots\right)\\
&=\cos\theta+i\sin\theta.
\end{aligned}
$$

これが Euler の公式です。特に $\theta=\pi$ では $e^{i\pi}+1=0$ です。また

$$
\cos\theta=\frac{e^{i\theta}+e^{-i\theta}}{2},\qquad
\sin\theta=\frac{e^{i\theta}-e^{-i\theta}}{2i}
$$

も得られます。

## 6.6 極形式と応用

### 極形式、積、べき乗

零でない複素数 $z=x+iy$ は、$r=|z|=\sqrt{x^2+y^2}>0$ と偏角 $\theta$ を用いて

$$
z=r(\cos\theta+i\sin\theta)=re^{i\theta}
$$

と表せます。偏角は $2\pi$ の整数倍だけ不定です。極形式では

$$
(r_1e^{i\theta_1})(r_2e^{i\theta_2})
=r_1r_2e^{i(\theta_1+\theta_2)}
$$

となるので、絶対値は掛け、偏角は足します。整数 $n$ に対して

$$
(re^{i\theta})^n=r^ne^{in\theta}
=r^n(\cos n\theta+i\sin n\theta)
$$

が成り立ちます。これは de Moivre の公式です。

> **例題 6.4** $(1+i)^8$ を計算します。
>
> <details><summary>解答</summary>
>
> $1+i=\sqrt2e^{i\pi/4}$ なので、
>
> $$
> (1+i)^8=(\sqrt2)^8e^{2\pi i}=16.
> $$
> </details>

### 複素数の $n$ 乗根

$z^n=Re^{i\phi}$（$R>0$）を満たす解は、偏角の $2\pi$ の不定性から

$$
z_k=R^{1/n}\exp\left(i\frac{\phi+2\pi k}{n}\right),
\qquad k=0,1,\ldots,n-1
$$

です。これらは半径 $R^{1/n}$ の円周上に等間隔で並びます。

> **例題 6.5** $z^3=8$ の解を求めます。
>
> <details><summary>解答</summary>
>
> $8=8e^{2\pi i m}$ より、
>
> $$
> z_k=2e^{2\pi ik/3}\qquad(k=0,1,2).
> $$
>
> 直交形式では $2$、$-1+i\sqrt3$、$-1-i\sqrt3$ です。
> </details>

### 三角関数と振動

$e^{i(\alpha+\beta)}=e^{i\alpha}e^{i\beta}$ の実部と虚部を比較すると、加法定理

$$
\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta
$$

などを一度に導けます。また

$$
\frac{d}{dt}e^{i\omega t}=i\omega e^{i\omega t}
$$

であり、$e^{i\omega t}$ の実部と虚部はどちらも $u''+\omega^2u=0$ を満たします。実際の振動 $A\cos(\omega t+\phi)$ を複素数 $Ae^{i(\omega t+\phi)}$ の実部として扱うと、微分や位相の計算を指数法則に帰着できます。

## 6.7 よくある誤り

1. Taylor 多項式で $k!$ や中心 $(x-a)^k$ を落とす。係数は $f^{(k)}(a)/k!$ です。
2. 高次項を省略しただけで誤差が十分小さいと判断する。剰余項または交代級数の誤差評価で保証します。
3. 無限回微分可能なら Taylor 級数に一致すると考える。$R_n(x)\to0$ の確認が必要です。
4. 収束半径だけ求めて端点を含める。端点は個別に級数へ代入します。
5. $e^{i\theta}=\cos\theta+\sin\theta$ として虚数単位 $i$ を落とす。
6. 複素数の根を主偏角から1つだけ求める。$2\pi k$ を加えて異なる $n$ 個の解を列挙します。
7. 偏角を一意な実数と思う。$\theta$ と $\theta+2\pi k$ は同じ複素数を表します。

## 章末まとめ

- [ ] 中心 $a$ の Taylor 多項式を導関数から構成できる
- [ ] Lagrange 剰余項で数値近似の誤差を上から評価できる
- [ ] 級数の収束と元の関数への一致を区別できる
- [ ] 基本的な Maclaurin 級数と収束範囲を説明できる
- [ ] 収束半径を求め、両端点を別々に判定できる
- [ ] Euler の公式を級数から導出できる
- [ ] 極形式で積、べき乗、$n$ 乗根、振動を扱える

練習は [`../exercises/`](../exercises/) に進みます。
<!-- /MAGI -->
