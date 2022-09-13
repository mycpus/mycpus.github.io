---
title:  "Cyrix CPU 发展史"
categories: history
permalink: history_of_cyrix_cpu.html
tags: [blog]
summary: "Cyrix 成立于 1988 年，最初是一家为 286 和 386 系统提供高性能数学协处理器的专业制造商。该公司由前德州仪器员工创立。Cyrix 一直是无晶圆制造商。早期，他们使用德州仪器和SGS Thomson的生产设施。1994 年，Cyrix 转向IBM微电子。Cyrix 生产了他们自己设计的 CPU，例如 486 级处理器（部分采用 Pentium 技术和 486 引脚，称为 5x86）和 Pentium Pro 级 CPU，带有 Pentium 引脚 (6x86)，使用带有 x86 转换的 RISC 内核。众所周知，6x86 的 FPU 速度较慢。与AMD不同，Cyrix 从未制造或销​​售过英特尔在许可下进行设计，但在内部设计了一切，从头开始。1997 年 8 月 Cyrix与 National Semiconductor合并。 1999 年 6 月，威盛收购了 Cyrix 的剩余部分。到了这个时候，原来的开发团队已经不复存在，产品已经过时了，唯一有价值的就是 Cyrix 的名字。"
---

## 1 Cyrix
Cyrix公司由JerryRogers和Tom Brightman于1988年创立，最初是制造用于286和386 CPU的高速x87数学协处理器。期间一顿操作，和前期的AMD一样，从一个小弟变成推出正面竞争的对手，后来打官司获得了x86指令集的授权。鼎盛时期发布了M2芯片，加入了mmx指令集，可惜遇到的对手是intel的奔腾II，浮点能力薄弱，1997年被NS收购，1999年NS把它卖给via威盛公司（之前做主板芯片的台湾企业），后来兜兜转转，合资成立成立兆芯，那又是另外一个目前正在上演的故事了。

### 1.1 Cyrix 486
1992年，Cyrix推出了其第一代CPU， 486SLC和486DLC，旨在与英特尔的486SX和486DX竞争。它们还与386SX和386DX管脚兼容，这意味着它们可以作为老化的386主板的直接升级，制造商也用它们来销售廉价笔记本电脑。32位芯片，有1KB的L1缓存，性能都略低于英特尔486 CPU。以下是PC104规格单板，早期在工业控制领域比较常见。

![](/images/blogs/Cyrix-486SLC.jpg)

图1 采用Cyrix 486SLC单板

Tips：PC104的小尺寸结构模块，标准模块的机械尺寸是3.6X3.8英寸，即96X90mm，PC104有两个版本，8位和16位，分别与PC和PC/AT相对应。PC104PLUS 则与PCI总线相对应，在PC104总线的两个版本中，8位PC104共有64个总线管脚，单列双排插针和插孔，P1：64针，P2：40针，合计104个总线信号，PC104因此得名。NUC平台的两款主板的体积都很小，仅100*100mm大，介于Nano-ITX（120*120mm）与Pico-ITX（100*72mm）规范之间。

### 1.2 Cyrix 5x86
1995年8月推出，在75MHz下提供了许多五代处理器的功能，比如奔腾和AMD的K5，当时填补空缺。

![](/images/blogs/Cyrix-5x86.jpg)

图2 Cx5x86（自带散热器）

即使三个月后推出的6x86，也是在夹缝中求生存。

### 1.3 Cyrix 6x86
1995年10月推出了80MHz的「6x86 PR90」，命名中的PR全称是Pentium Rate，意味着性能相当于Intel的Pentium 90MHz，和后面都熟悉的AMD Athlon XP的「几千+」的命名模式如出一辙。

6x86之后又发布了100MHz（PR120）、133MHz（PR166）、150MHz（PR200）的型号。

![](/images/blogs/Cyrix-6x86.jpg)

图3 Cyrix 6x86

### 1.4 6x86 Ｍ2
1997年，Cyrix发布了核心代号为Ｍ2的「6x86MX」，与前面的6x86最大的区别是内置了MMX指令集。频率从133MHz（PR166）到233MHz（PR266）。最终版本发行时间为1998年2月。Cyrix是无晶圆厂芯片设计公司，制造交由三家完成，分别为IBM、SGS汤姆逊（现意法半导体）、美国国家半导体（NS）, 制程的改进导致初版到最终版相隔一年。

![](/images/blogs/Cyrix-6x86-M2.jpg)

图4 Cyrix 6x86 M2

6x86MX进一步将频率提升至300MHz（PR433），同时更名为「Cyrix MII」，以表示竞争对手为Pentium II。但由于推出较晚，Intel的P6（Pentium Pro、Pentium II）和AMD的K6在整数性能上已经追上Cyrix，浮点能力本来就弱，Cyrix MII失去竞争力。

1997年3月，Cyrix被NS收购；1999年年中，NS把Cyrix卖给了VIA。

### 1.5 6x86 Ｍ3
VIA收购Cyrix后，上面说的已经基本开发得差不多了的Gobi，改名Joshua，于2000年2月，差一点儿就上市。VIA在收购了Cyrix之后没俩月，又收了一家x86处理器公司Centaur（WinChip），以Cyrix III为名发售，而Cyrix Gobi的CPU设计，完全没有被使用。

![](/images/blogs/Cyrix-6x86-MIII.jpg)

图5 Cyrix 6x86 MIII


## 2 Centaur
Centaur是IDT（Integrated Device Technology, Inc.，现已被瑞萨收购）的子公司，设计x86处理器。CEO是曾在IBM设计大型机System/360的Glenn Henry。Centaur设计开发采用顺序执行、单管线精简指令集（RISC）的CPU，致力于低能耗的x86兼容实现。CPU并不直接执行x86指令，而是将x86指令集转换成精简指令集后执行。实际上这种做法在Intel Pentium Pro和AMD K6上已经广泛使用，但Intel和AMD采用的是乱序执行管线，很适用于高性能地执行拆分后的精简指令。而Centaur选择精简指令集的理由是精简指令集适宜实现低耗电。

![](/images/blogs/WinChip-C6.jpg)

图6 Centaur于1997年10月发布了「WinChip C6」

采用IDT的0.35μm工艺制造，首先推出了180/200MHz的产品。转年的1998年4月，推出了225/240MHz的型号。频率最高的240MHz型号仅有11W～13W的低耗电，但整数性能平平，且因为FPU跑在半速上，浮点性能也绝对谈不上高。

接下来推出的C6＋，改善了劣势的FPU部分，跑在了全速上，同时加入了MMX/3DNow!单元。改进制程，提高频率，最终实现了在频率提高到250MHz的同时，耗电维持不变。

![](/images/blogs/WinChip-2.jpg)
图7 Winchip 2两种规格CPU

改进后的C6＋，以WinChip 2和WinChip 2A的名称发售。其中WinChip 2是0.35μm制程，WinChip 2A是0.25μm。WinChip 2于1998年9月发售，WinChip 2A为1999年3月。

![](/images/blogs/CyrixIII-Socket370.jpg)

图8 CyrixIII， Socket 370，台积电生产

VIA这颗名为CyrixIII的CPU，1级指令缓存和数据缓存各64KB，与W3相同，但依然没有加入2级缓存（两年前的Celeron 300A已经有2级缓存了），频率也仅为533～677MHz，性能相对较低。

{% include links.html %}
