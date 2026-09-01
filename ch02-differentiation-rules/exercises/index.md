<!-- MAGI -->
# 練習問題 - 第2章 微分法の公式

> 対応: [`../docs/index.md`](../docs/index.md)

各問を解いた後、解答を開いて適用した公式と定義域を確認してください。

---

## 問1

$f(x)=(x^2+1)e^x$ を微分してください。

<details><summary>解答</summary>

**答: $f'(x)=e^x(x+1)^2$**

積の微分法より、

$$
f'(x)=2xe^x+(x^2+1)e^x
=e^x(x^2+2x+1)=e^x(x+1)^2.
$$

どちらの因子もすべての実数で微分可能です。

</details>

## 問2

$\displaystyle g(x)=\frac{\sin x}{x^2+1}$ を微分してください。

<details><summary>解答</summary>

**答: $\displaystyle g'(x)=\frac{(x^2+1)\cos x-2x\sin x}{(x^2+1)^2}$**

商の微分法から

$$
g'(x)=\frac{\cos x(x^2+1)-\sin x\cdot2x}{(x^2+1)^2}.
$$

$x^2+1$ は常に正なので、$g$ と $g'$ はすべての実数で定義されます。

</details>

## 問3

$h(x)=\cos^3(2x-1)$ を微分してください。ここで $\cos^3u$ は $(\cos u)^3$ を表します。

<details><summary>解答</summary>

**答: $h'(x)=-6\cos^2(2x-1)\sin(2x-1)$**

外側から順に $u^3$、$\cos v$、$2x-1$ の三層です。連鎖律より

$$
h'(x)=3\cos^2(2x-1)\{-\sin(2x-1)\}\cdot2,
$$

これを整理すると答えを得ます。

</details>

## 問4

$p(x)=\log(x^2+3x+2)$ を微分し、$p$ と $p'$ が実数として定義される範囲を区間で示してください。

<details><summary>解答</summary>

**答: $\displaystyle p'(x)=\frac{2x+3}{x^2+3x+2}$、定義域は $(-\infty,-2)\cup(-1,\infty)$**

連鎖律より

$$
p'(x)=\frac{2x+3}{x^2+3x+2}.
$$

対数の中身には

$$
x^2+3x+2=(x+1)(x+2)>0
$$

が必要です。符号を調べると $x<-2$ または $x>-1$ です。この範囲では分母も $0$ でないため、$p'$ も同じ範囲で定義されます。

</details>

## 問5

$q(x)=e^{-x^2}\arctan x$ を微分してください。

<details><summary>解答</summary>

**答: $\displaystyle q'(x)=e^{-x^2}\left(\frac{1}{1+x^2}-2x\arctan x\right)$**

積の微分法と連鎖律を使います。

$$
\begin{aligned}
q'(x)
&=(-2x)e^{-x^2}\arctan x+e^{-x^2}\frac{1}{1+x^2}\\
&=e^{-x^2}\left(\frac{1}{1+x^2}-2x\arctan x\right).
\end{aligned}
$$

$e^{-x^2}$ と $\arctan x$ はともにすべての実数で定義されます。

</details>

## 問6

$r(x)=\arcsin(1-2x)$ を微分し、元の関数の定義域と導関数の定義域をそれぞれ示してください。

<details><summary>解答</summary>

**答: $\displaystyle r'(x)=\frac{-2}{\sqrt{1-(1-2x)^2}}$、関数の定義域は $[0,1]$、導関数の定義域は $(0,1)$**

$\arcsin$ の引数には $-1\le1-2x\le1$ が必要です。これを解くと $0\le x\le1$ です。連鎖律より

$$
r'(x)=\frac{-2}{\sqrt{1-(1-2x)^2}}.
$$

$x=0,1$ では分母が $0$ になるため、有限な導関数は存在しません。したがって導関数の定義域は $(0,1)$ です。

</details>
<!-- /MAGI -->
