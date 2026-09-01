<!-- MAGI -->
# 練習問題 - 第4章 積分

> 対応: [`../docs/index.md`](../docs/index.md)

不定積分では定義域と積分定数を、定積分では端点の扱いを明記してください。

---

## 問1

次の不定積分を求めなさい。

$$
\int\left(4x^3-\frac{2}{x}+3e^x\right)dx
$$

<details><summary>解答</summary>

**答: $x^4-2\ln|x|+3e^x+C$**

$x\neq0$ の各区間で項別に積分します。微分すると $4x^3-2/x+3e^x$ に戻ります。定義域は $x=0$ で分かれるため、積分定数は各区間で独立です。

</details>

## 問2

$$
F(x)=\int_0^{\sin x}\frac{dt}{1+t^2}
$$

の導関数を求めなさい。

<details><summary>解答</summary>

**答: $F'(x)=\dfrac{\cos x}{1+\sin^2x}$**

被積分関数 $1/(1+t^2)$ は実数全体で連続です。微積分学の基本定理と連鎖律から

$$
F'(x)=\frac{1}{1+(\sin x)^2}\frac{d}{dx}(\sin x)
=\frac{\cos x}{1+\sin^2x}.
$$

</details>

## 問3

置換積分を用いて次を求めなさい。

$$
\int_0^{\pi/4}\tan x\,dx
$$

<details><summary>解答</summary>

**答: $\dfrac12\ln2$**

区間 $[0,\pi/4]$ では $\cos x>0$ です。$u=\cos x$、$du=-\sin x\,dx$ とすると、端点は $u=1$ から $u=1/\sqrt2$ へ変わります。

$$
\int_0^{\pi/4}\frac{\sin x}{\cos x}dx
=-\int_1^{1/\sqrt2}\frac{du}{u}
=-\left[\ln u\right]_1^{1/\sqrt2}
=\frac12\ln2.
$$

</details>

## 問4

部分積分を用いて $\int x^2e^x\,dx$ を求めなさい。

<details><summary>解答</summary>

**答: $e^x(x^2-2x+2)+C$**

まず $u=x^2$、$dv=e^x dx$ とすると

$$
\int x^2e^x dx=x^2e^x-2\int xe^x dx.
$$

残りにもう一度部分積分を使い、$\int xe^x dx=xe^x-e^x$ を得ます。したがって

$$
\int x^2e^x dx
=x^2e^x-2xe^x+2e^x+C
=e^x(x^2-2x+2)+C.
$$

</details>

## 問5

次の有理関数を積分しなさい。

$$
\int\frac{2x+3}{x^2+x-2}\,dx
$$

<details><summary>解答</summary>

**答: $\dfrac53\ln|x-1|+\dfrac13\ln|x+2|+C$**

$x^2+x-2=(x-1)(x+2)$ であり、

$$
\frac{2x+3}{(x-1)(x+2)}
=\frac{A}{x-1}+\frac{B}{x+2}
$$

とおくと、$A+B=2$、$2A-B=3$ です。よって $A=5/3$、$B=1/3$ となります。各項を積分して答を得ます。この原始関数は $x\neq-2,1$ の各区間で成り立ちます。

</details>

## 問6

三角置換を用いて次を求めなさい。ただし $a>0$ とします。

$$
\int_0^a\sqrt{a^2-x^2}\,dx
$$

<details><summary>解答</summary>

**答: $\dfrac{\pi a^2}{4}$**

$x=a\sin\theta$ と置きます。$0\leq x\leq a$ に対して $0\leq\theta\leq\pi/2$ なので、$dx=a\cos\theta\,d\theta$ かつ $\sqrt{a^2-x^2}=a\cos\theta$ です。したがって

$$
\int_0^a\sqrt{a^2-x^2}\,dx
=a^2\int_0^{\pi/2}\cos^2\theta\,d\theta.
$$

$\cos^2\theta=(1+\cos2\theta)/2$ より

$$
a^2\left[\frac\theta2+\frac{\sin2\theta}{4}\right]_0^{\pi/2}
=\frac{\pi a^2}{4}.
$$

これは半径 $a$ の円の4分の1の面積とも一致します。

</details>
<!-- /MAGI -->
