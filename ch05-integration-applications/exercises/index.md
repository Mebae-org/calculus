<!-- MAGI -->
# 練習問題 - 第5章 定積分の応用

> 対応: [`../docs/index.md`](../docs/index.md)

各問で、積分区間と被積分関数を明記してから計算してください。

## 問1

$f(x)=x^2-1$ について、符号付き積分 $\int_{-2}^2f(x)\,dx$ と、グラフと $x$ 軸の間の幾何学的面積をそれぞれ求めてください。

<details><summary>解答</summary>

**答: 符号付き積分は $\frac43$、幾何学的面積は $4$**

まず、

$$
\int_{-2}^2(x^2-1)\,dx
=\left[\frac{x^3}{3}-x\right]_{-2}^2
=\frac43.
$$

零点は $x=\pm1$ です。偶関数であることを使うと、幾何学的面積は

$$
2\left\{\int_0^1(1-x^2)\,dx+\int_1^2(x^2-1)\,dx\right\}
=2\left(\frac23+\frac43\right)=4
$$

です。負の部分を相殺する符号付き積分とは区別します。

</details>

## 問2

曲線 $y=x$ と $y=x^3$ に挟まれる有限な領域すべての合計面積を求めてください。

<details><summary>解答</summary>

**答: $\frac12$**

交点は $x=x^3$、すなわち $x=-1,0,1$ です。$(0,1)$ では $x>x^3$ であり、図形は原点対称なので、

$$
S=2\int_0^1(x-x^3)\,dx
=2\left[\frac{x^2}{2}-\frac{x^4}{4}\right]_0^1
=\frac12.
$$

$[-1,0]$ では $x^3$ が上側であり、区間分割なしに $x-x^3$ を積分すると相殺されます。

</details>

## 問3

曲線

$$
y=\frac13(x^2+2)^{3/2}
$$

の $0\le x\le1$ における長さを求めてください。

<details><summary>解答</summary>

**答: $\frac43$**

微分すると $y'=x\sqrt{x^2+2}$ です。したがって

$$
1+(y')^2=1+x^2(x^2+2)=(x^2+1)^2.
$$

$0\le x\le1$ では $x^2+1>0$ なので、

$$
L=\int_0^1\sqrt{(x^2+1)^2}\,dx
=\int_0^1(x^2+1)\,dx
=\frac13+1=\frac43.
$$

</details>

## 問4

$0\le x\le1$ で $y=x$ と $y=x^2$ に挟まれた領域を $x$ 軸のまわりに回転します。ワッシャー法で体積を求めてください。

<details><summary>解答</summary>

**答: $\frac{2\pi}{15}$**

$0<x<1$ では $x>x^2$ なので、外半径は $R=x$、内半径は $r=x^2$ です。断面積は

$$
A(x)=\pi(R^2-r^2)=\pi(x^2-x^4)
$$

となります。よって

$$
V=\pi\int_0^1(x^2-x^4)\,dx
=\pi\left(\frac13-\frac15\right)
=\frac{2\pi}{15}.
$$

</details>

## 問5

問4と同じ領域を $y$ 軸のまわりに回転します。円筒殻法で体積を求めてください。

<details><summary>解答</summary>

**答: $\frac{\pi}{6}$**

殻の半径は $x$、高さは上側と下側の差 $x-x^2$ です。したがって

$$
\begin{aligned}
V&=2\pi\int_0^1x(x-x^2)\,dx\\
&=2\pi\int_0^1(x^2-x^3)\,dx
=2\pi\left(\frac13-\frac14\right)
=\frac{\pi}{6}.
\end{aligned}
$$

</details>

## 問6

底面が $y=4-x^2$ と $y=0$ に挟まれた領域で、$x$ 軸に垂直な断面が、その底面内の線分を直径とする半円である立体の体積を求めてください。

<details><summary>解答</summary>

**答: $\frac{64\pi}{15}$**

底面は $-2\le x\le2$ にあります。半円の直径は $d=4-x^2$、半径は $d/2$ なので、断面積は

$$
A(x)=\frac12\pi\left(\frac{4-x^2}{2}\right)^2
=\frac{\pi}{8}(4-x^2)^2.
$$

よって

$$
\begin{aligned}
V&=\frac{\pi}{8}\int_{-2}^2(16-8x^2+x^4)\,dx\\
&=\frac{\pi}{8}\cdot\frac{512}{15}
=\frac{64\pi}{15}.
\end{aligned}
$$

</details>
<!-- /MAGI -->
