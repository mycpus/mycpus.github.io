---
title:  "487是什么？简谈英特尔的“黑历史”"
categories: history
permalink: what_is_487.html
tags: [history]
summary: "487是给486SX准备的协处理器，和387类似，用来弥补486SX没有浮点单元的问题。但是，你真的以为英特尔会开发单独的浮点计算器吗？"
---

80387是什么，大家知道吗？也许有很多人都知道，它是协处理器，主要负责浮点运算——80386没有专门的浮点单元，所以遇到浮点运算的时候就只能靠386的整数运算单元来模拟浮点计算，因此效率很低。所以，386一般搭配387来使用，其中387是专门的浮点计算器，可以弥补386浮点能力差的问题。

{% include image.html file="blogs/386_mainboard.jpg" alt="主板" caption="主板" %}

但是，在之后的80486中，浮点单元已经整合到486中了，所以，买了486DX的人就不必单独去买浮点计算协处理器了，因为486DX已经集成了浮点计算器（可以理解为整合了“487”）。但是，单独的487又是怎么回事呢？

首先要了解一款产品——80486SX，这款产品虽然和486DX只差一个字母，但是实际上差别很大——486SX将DX中集成的浮点单元屏蔽掉了（英特尔的神刀法），只留下整数单元，所以和386很相似。这样的话，486SX价格就相对便宜一些，可以当作低端产品来卖。

所以，大家应该可以猜到了，487是给486SX准备的协处理器，和387类似，用来弥补486SX没有浮点单元的问题。

{% include image.html file="blogs/intel_486_487.jpg" alt="Intel 486 和 487" caption="Intel 486 和 487" %}

但是，你真的以为英特尔会开发单独的浮点计算器吗？

当然不是，实际上，487本身就是一颗完整的486DX，当其插入到主板上时，计算机会屏蔽掉原来主板上的486SX，由487接管所有计算任务。可以看出英特尔是多么“顽皮”了吧。

因此，可以看出，80487的价格肯定也不便宜，英特尔这么做完全就是想给已经有486SX的人的一个心理安慰——你看，当初没买完整版，这次给你补上了。当然，原来那颗486SX就被浪费掉了的事也不会有太多人在意的。 

---------

作者：SasugaSetsuna

出处：<https://www.bilibili.com/read/cv690373>

{% include links.html %}
