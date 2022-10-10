---
title:  "OverDrive 的始祖 Intel RapidCAD"
categories: history
permalink: intel_RapidCAD_the_ancestor_of_OverDrive.html
tags: [history]
summary: "Intel RapidCAD是英特尔有史以来第一款为旧款个人计算机所提供的升级套件（也就是OverDrive的始祖）。原386的使用者不需要更换主板，只要把RapidCAD买回来将主板上旧有的中央处理器替换掉，就可以享受接近486的运算能力。"
---

Intel RapidCAD是英特尔有史以来第一款为旧款个人计算机所提供的升级套件（也就是OverDrive的始祖）。原386的使用者不需要更换主板，只要把RapidCAD买回来将主板上旧有的中央处理器芯片（CPU）替换掉，就可以享受接近486的运算能力。RapidCAD其实就是把486 DX芯片去掉内部高速缓存然后装入386的封装里面，RapidCAD也不支持486增加的新指令。不过由于386封装的带宽限制，RapidCAD对整体的效能提升比不上直接升级到486 DX。相同频率下，486 DX可以有比386/387快上两倍的速度，而RapidCAD在整数运算方面最多只能提升35%，在浮点运算方面，则可以提升将近70%。

Intel RapidCAD特殊的地方在于，它是由两颗芯片组成，缺一不可。这归咎于486 DX内建浮点运算器（FPU），而386则是将浮点运算器分开（就是387）。由于RapidCAD-1本身就含有浮点运算器（因为它就是486 DX阉割版），根本不需要387，所以RapidCAD-2就是用来替代原来主板上的387芯片。RapidCAD-1负责所有的运算，而RapidCAD-2则是负责假装浮点运算器，以防止旧有主板以为没有安装浮点运算功能（尤其在执行286/287的程序时）。市面上有时候把RapidCAD-1与RapidCAD-2分开卖，这是就是不了解RapidCAD运作方式的结果。

![Intel RapidCAD](/images/blogs/intel_RapidCAD_1.jpg)

```Intel RapidCAD 正面```

![CPU 背面](/images/blogs/intel_RapidCAD_2.jpg)

```Intel RapidCAD 背面```

![康柏386主板](/images/blogs/intel_RapidCAD_3.jpg)

```在康柏386主板，没想到正常点亮了。```

![](/images/blogs/intel_RapidCAD_4.jpg)

```康柏386主板局部特写。```

![](/images/blogs/intel_RapidCAD_5.jpg)

```进入BIOS，被识别为386、387。```

![](/images/blogs/intel_RapidCAD_6.jpg)

```这个测试软件也一样呆，没有正确识别。```

![](/images/blogs/intel_RapidCAD_7.jpg)

```换HWINFO软件成功识别。```

![](/images/blogs/intel_RapidCAD_8.jpg)

```SYSCHK软件也成功识别。```

![](/images/blogs/intel_RapidCAD_9.jpg)

```CPU频率33MHZ```

---------

作者：古董电脑梦cxw2008  

出处：<https://www.bilibili.com/read/cv8786619>

{% include links.html %}
