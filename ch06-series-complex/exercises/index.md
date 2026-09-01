<!-- MAGI -->
# 練習問題 - 第6章 Taylor級数と複素数

> 対応: [`../docs/index.md`](../docs/index.md)

近似問題では、多項式だけでなく誤差評価に用いた条件も示してください。

## 問1

$\sin x$ の5次 Maclaurin 多項式を求め、それを使って $\sin(0.5)$ を近似してください。さらに Lagrange 剰余項により誤差の上界を求めてください。

<details><summary>解答</summary>

**答: $T_5(x)=x-\frac{x^3}{6}+\frac{x^5}{120}$、$\sin(0.5)\approx0.47942708$、誤差は $1.6\times10^{-6}$ 未満**

$\sin x$ の導関数は周期4で繰り返すため、

$$
T_5(x)=x-\frac{x^3}{3!}+\frac{x^5}{5!}.
$$

したがって

$$
T_5(0.5)=0.5-\frac{0.5^3}{6}+\frac{0.5^5}{120}
=0.47942708\ldots.
$$

6次の係数は $f^{(6)}(0)/6!=0$ なので、$T_6=T_5$ です。7階導関数の絶対値は 1 以下であることを使うと、Lagrange 剰余項は

$$
|R_6(0.5)|\le\frac{0.5^7}{7!}
=\frac{1}{645120}<1.6\times10^{-6}
$$

です。したがって、同じ多項式を6次 Taylor 多項式とみなすことでこの上界を保証できます。

</details>

## 問2

$\log x$ の $a=1$ における3次 Taylor 多項式を用いて $\log(1.2)$ を近似し、Lagrange 剰余項で誤差を評価してください。

<details><summary>解答</summary>

**答: $\log(1.2)\approx0.182666\ldots$、誤差は $0.0004$ 以下**

$f^{(k)}(x)=(-1)^{k-1}(k-1)!/x^k$（$k\ge1$）なので、

$$
T_3(x)=(x-1)-\frac{(x-1)^2}{2}+\frac{(x-1)^3}{3}.
$$

$x=1.2$ を代入すると

$$
T_3(1.2)=0.2-\frac{0.2^2}{2}+\frac{0.2^3}{3}
=0.182666\ldots.
$$

$f^{(4)}(t)=-6/t^4$ であり、$1\le t\le1.2$ では $|f^{(4)}(t)|\le6$ です。よって

$$
|R_3(1.2)|\le\frac{6}{4!}(0.2)^4=0.0004.
$$

</details>

## 問3

べき級数

$$
\sum_{n=0}^{\infty}\frac{(x-2)^n}{3^n(n+1)}
$$

の収束半径と収束区間を求め、各端点での判定理由を示してください。

<details><summary>解答</summary>

**答: 収束半径は $3$、収束区間は $[-1,5)$**

一般項の絶対値の比は

$$
\left|\frac{(x-2)^{n+1}}{3^{n+1}(n+2)}
\frac{3^n(n+1)}{(x-2)^n}\right|
=\frac{|x-2|}{3}\frac{n+1}{n+2}
\longrightarrow\frac{|x-2|}{3}.
$$

したがって $|x-2|<3$ で絶対収束し、収束半径は $R=3$ です。$x=5$ では $\sum_{n=0}^{\infty}1/(n+1)$ となり発散します。$x=-1$ では $\sum_{n=0}^{\infty}(-1)^n/(n+1)$ となり、項の絶対値が単調に 0 へ減少するので交代級数として収束します。よって $[-1,5)$ です。

</details>

## 問4

任意の実数 $x$ に対して

$$
e^x=\sum_{k=0}^{\infty}\frac{x^k}{k!}
$$

が成り立つことを、Lagrange 剰余項を用いて示してください。

<details><summary>解答</summary>

**答: 固定した任意の $x$ で剰余項が 0 に収束するため成立する**

$e^x$ の $n$ 次 Maclaurin 多項式は $T_n(x)=\sum_{k=0}^n x^k/k!$ です。$0$ と固定した $x$ の間では $e^t\le e^{|x|}$ なので、Lagrange 剰余項は

$$
|R_n(x)|\le e^{|x|}\frac{|x|^{n+1}}{(n+1)!}.
$$

$a_n=|x|^{n+1}/(n+1)!$ と置くと

$$
\frac{a_{n+1}}{a_n}=\frac{|x|}{n+2}\longrightarrow0.
$$

したがって $a_n\to0$ であり、定数 $e^{|x|}$ を掛けても $R_n(x)\to0$ です。Taylor の定理の $e^x=T_n(x)+R_n(x)$ で極限を取れば、任意の実数 $x$ について所望の等式が得られます。

</details>

## 問5

次の問いに答えてください。

1. $(1-i)^6$ を計算してください。
2. 方程式 $z^4=-16$ の複素数解をすべて極形式で求めてください。

<details><summary>解答</summary>

**答: (1) $8i$、(2) $z_k=2e^{i(\pi/4+k\pi/2)}\ (k=0,1,2,3)$**

$1-i=\sqrt2e^{-i\pi/4}$ なので、

$$
(1-i)^6=(\sqrt2)^6e^{-3\pi i/2}
=8i.
$$

また $-16=16e^{i(\pi+2\pi m)}$ です。絶対値の4乗根は $2$、偏角は $(\pi+2\pi k)/4$ なので、異なる4解は

$$
z_k=2e^{i(\pi/4+k\pi/2)},\qquad k=0,1,2,3
$$

です。偏角は $\pi/4,3\pi/4,5\pi/4,7\pi/4$ で、円周上に等間隔で並びます。

</details>

## 問6

Euler の公式と指数法則を使い、余弦の加法定理を導いてください。さらに $u(t)=\cos(3t)$ が微分方程式 $u''+9u=0$ を満たすことを複素指数関数から説明してください。

<details><summary>解答</summary>

**答: $\cos(\alpha+\beta)=\cos\alpha\cos\beta-\sin\alpha\sin\beta$、かつ $u''+9u=0$**

指数法則より

$$
e^{i(\alpha+\beta)}=e^{i\alpha}e^{i\beta}.
$$

Euler の公式を右辺へ代入すると

$$
(\cos\alpha+i\sin\alpha)(\cos\beta+i\sin\beta)
=\cos\alpha\cos\beta-\sin\alpha\sin\beta
+i(\sin\alpha\cos\beta+\cos\alpha\sin\beta).
$$

左辺 $\cos(\alpha+\beta)+i\sin(\alpha+\beta)$ と実部を比較すれば、余弦の加法定理を得ます。

次に $w(t)=e^{3it}$ とすると、$w''(t)=(3i)^2e^{3it}=-9w(t)$ です。よって $w''+9w=0$ であり、実部を取っても等式は保たれます。$\operatorname{Re}w(t)=\cos(3t)=u(t)$ なので、$u''+9u=0$ です。

</details>
<!-- /MAGI -->
