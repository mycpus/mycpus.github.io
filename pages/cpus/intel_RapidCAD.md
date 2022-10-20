---
title: Intel RapidCAD*
tags: [Intel, RapidCAD]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 3002, 4004, 4040, 8008, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples, RapidCAD
last_updated: Oct 20, 2022
summary: "英特尔 RapidCAD 处理器于 1992 年推出。这些处理器包括一套 RapidCad-1（在 386 插槽中）和 RapidCad-2（在协处理器插槽中），主要加速 CAD 和渲染领域的应用程序。"
sidebar: cpu_sidebar
permalink: intel_RapidCAD.html
folder: cpus
---

## 关于 Intel RapidCAD

Intel RapidCAD 是英特尔有史以来第一款为旧款个人计算机所提供的升级套件（也就是 OverDrive 的始祖）。原 386 的使用者不需要更换主板，只要把 RapidCAD 买回来将主板上旧有的中央处理器（CPU）替换掉，就可以享受接近 486 的运算能力。RapidCAD 其实就是把 486 DX 芯片去掉内部高速缓存然后装入 386 的封装里面，RapidCAD 也不支持 486 增加的新指令。不过由于 386 封装的带宽限制，RapidCAD 对整体的效能提升比不上直接升级到 486 DX。相同频率下，486 DX 可以有比 386/387 快上两倍的速度，而 RapidCAD 在整数运算方面最多只能提升 35%，在浮点运算方面，则可以提升将近 70%。

Intel RapidCAD 特殊的地方在于，它是由两颗芯片组成，缺一不可。这归咎于 486 DX 内建浮点运算器（FPU），而 386 则是将浮点运算器分开（就是387）。由于 RapidCAD-1 本身就含有浮点运算器（因为它就是 486 DX 阉割版），根本不需要 387，所以 RapidCAD-2 就是用来替代原来主板上的 387 芯片。RapidCAD-1 负责所有的运算，而 RapidCAD-2 则是负责假装浮点运算器，以防止旧有主板以为没有安装浮点运算功能（尤其在执行286/287的程序时）。市面上有时候把 RapidCAD-1 与 RapidCAD-2 分开卖，这是就是不了解 RapidCAD 运作方式的结果。

## 型号展示

### Intel RapidCAD-1

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 132-pin CPGA |
| 主频 | 33 MHz |
| 数据宽度 | 32 Bit |
| 晶体管 | ~ 800,000 |
| 技术 | CHMOS |
| 电压 | 5 Volt |
| 产地 | USA |

### Intel RapidCAD-2

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 68-pin CPGA |
| 主频 | 33 MHz |
| 数据宽度 | 32 Bit |
| 晶体管 | ~ 275,000 |
| 技术 | CHMOS |
| 电压 | 5 Volt |
| 产地 | USA |

![Intel RapidCAD](/images/cpus/Intel/Intel_RapidCAD-23.jpg)
![Intel RapidCAD](/images/cpus/Intel/Intel_RapidCAD-25.jpg)

{% include links.html %}
