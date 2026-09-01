<!-- MAGI -->
# 練習問題 - 第7章 多変数微積分

> 対応: [`../docs/index.md`](../docs/index.md)
>
> 各問の解答では、答えだけでなく条件と途中計算も確認してください。

---

## 問1

$z=e^{xy}$, $x=s+t$, $y=s-t$ とする。$\partial z/\partial s$ と $\partial z/\partial t$ を求めなさい。

<details><summary>解答</summary>

**答: $\displaystyle \frac{\partial z}{\partial s}=2s e^{s^2-t^2},\quad \frac{\partial z}{\partial t}=-2t e^{s^2-t^2}$**

$f_x=ye^{xy}$, $f_y=xe^{xy}$ です。$x_s=y_s=1$, $x_t=1$, $y_t=-1$ なので、

$$
z_s=(x+y)e^{xy}=2s e^{s^2-t^2},
$$

$$
z_t=(y-x)e^{xy}=-2t e^{s^2-t^2}.
$$

</details>

## 問2

$f(x,y)=x^2y^3+\sin(xy)$ の $f_x,f_y,f_{xx},f_{xy},f_{yx},f_{yy}$ を求めなさい。

<details><summary>解答</summary>

**答: $f_x=2xy^3+y\cos(xy)$, $f_y=3x^2y^2+x\cos(xy)$, $f_{xx}=2y^3-y^2\sin(xy)$, $f_{xy}=6xy^2+\cos(xy)-xy\sin(xy)$, $f_{yx}=6xy^2+\cos(xy)-xy\sin(xy)$, $f_{yy}=6x^2y-x^2\sin(xy)$**

各1階偏導関数をもう一度それぞれの変数で偏微分します。$f$ は滑らかなので混合偏導関数は一致します。例えば

$$
\frac{\partial}{\partial y}\{y\cos(xy)\}
=\cos(xy)-xy\sin(xy)
$$

であることに注意します。

</details>

## 問3

$f(x,y)=x^3-3x+y^2$ の臨界点をすべて求め、ヘッセ行列を用いて分類しなさい。

<details><summary>解答</summary>

**答: $(-1,0)$ は鞍点、$(1,0)$ は局所最小点**

$f_x=3x^2-3$, $f_y=2y$ より臨界点は $(\pm1,0)$ です。また

$$
f_{xx}=6x,\qquad f_{xy}=0,\qquad f_{yy}=2,
$$

したがって $D=12x$ です。$(1,0)$ では $D>0,f_{xx}>0$ なので局所最小、$(-1,0)$ では $D=-12<0$ なので鞍点です。

</details>

## 問4

長方形 $R=[-1,1]\times[0,2]$ 上で $f(x,y)=x^2+y^2-2y$ の絶対最大値と絶対最小値を求めなさい。

<details><summary>解答</summary>

**答: 絶対最小値 $-1$（点 $(0,1)$）、絶対最大値 $1$（4頂点 $(\pm1,0),(\pm1,2)$）**

平方完成すると

$$
f=x^2+(y-1)^2-1.
$$

領域内で $x^2+(y-1)^2$ は $(0,1)$ で最小値0、中心から最も遠い4頂点で最大値2をとります。したがって $f$ の最小値は $-1$、最大値は $1$ です。内部臨界点だけでなく境界と頂点を含めた比較になっています。

</details>

## 問5

$D=\{(x,y)\mid0\le x\le1,\ x^2\le y\le x\}$ とする。$\iint_D xy\,dA$ を累次積分に直して求めなさい。

<details><summary>解答</summary>

**答: $\displaystyle \frac{1}{24}$**

領域の記述から $y$ を先に積分して

$$
\begin{aligned}
\iint_Dxy\,dA
&=\int_0^1\int_{x^2}^{x}xy\,dy\,dx\\
&=\int_0^1\frac{x}{2}(x^2-x^4)\,dx\\
&=\frac12\left[\frac{x^4}{4}-\frac{x^6}{6}\right]_0^1
=\frac{1}{24}.
\end{aligned}
$$

</details>

## 問6

立体 $0\le z\le x^2+y^2$ のうち、円環 $1\le x^2+y^2\le4$ の上にある部分の体積を求めなさい。

<details><summary>解答</summary>

**答: $\displaystyle \frac{15\pi}{2}$**

極座標では $1\le r\le2$, $0\le\theta\le2\pi$ です。高さは $r^2$、面積要素は $r\,dr\,d\theta$ なので、

$$
V=\int_0^{2\pi}\int_1^2r^3\,dr\,d\theta
=2\pi\left[\frac{r^4}{4}\right]_1^2
=\frac{15\pi}{2}.
$$

</details>
<!-- /MAGI -->
