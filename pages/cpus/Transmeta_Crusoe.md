---
title: Transmeta Crusoe Processor
tags: [Transmeta, Crusoe]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Sep 5, 2022
summary: "Crusoe 是一款具有强大实力，应用于笔记本电脑和 Internet 设备的新处理器，采用硬件引擎核心和软件核心的合成结构。"
sidebar: mydoc_sidebar
permalink: Transmeta_Crusoe.html
folder: cpus
---

## 关于 Transmeta Crusoe

Crusoe 是一款具有强大实力，应用于笔记本电脑和 Internet 设备的新处理器。Transmeta 在研发过程中采用了一种革命性的微处理器设计方案。与主流的 x86 处理器完全使用硬件设计不同，Crusoe 处理器的解决方案是采用软硬兼施办法，即硬件引擎核心和软件核心的合成结构。硬件核心组成部分非常简单，采用高性能低功耗的 VLIW （Very Long Instruction Word，超长指令）引擎，其核心指令与普通的 x86 处理器的指令没有相同之处。这种 VLIW 结构的处理器逻辑控制芯片，采用非常简单的设计和软件的指令时序安排。它允许一个简单和非常直接的硬件执行流程，包括 7 条整数管道流水线和 10 条浮点管道流水线，使得处理器逻辑控制的晶体管数量大为减少。

软件核心是包围的软件层构造，使得 Crusoe 能与 x86 硬件结构的处理器运行指令相同。这个具有全新定义的的软件层称为 “Code Morphing” （代码融合）软件，它可以动态 “Morphing（融合）” x86 指令进入本地硬件引擎。在指令执行时，Cruose 编译 x86 指令块一次，就将编译的结果保存到编译缓冲区中，下一次（已经编译）的代码执行时，系统跳过编译这一步，以全速直接运行现有的编译过的指令。这个独特设计，可以使处理器的结构比 x86 体系的处理器少数百万个晶体管，数百万个晶体管的功能被一个软件取而代之。这样 Crusoe 处理器在执行相同操作时，逻辑晶体管只需要四分之一就可达到传统全硬件引擎的 x86 处理器相似的效能。这样带来的好外包括以下几点：

 - 处理器的硬件核心能够比传统的芯片做得更小和更有效。
 - 代码融合软件能够独立开发而不受硬件影响。这意味着处理器的软件升级，可以独立于芯片硬件部分进行。
 - 代码融合技术并不局限于对 x86 系列处理器的指令实现。同时它还指出了一种微处理器的未来设计构想。

Crusoe TM5400 是第一款有益于延长电池使用寿命，并提供同等性能的便携式计算机解决方案的处理器，主频时钟达到 700MHz。内置 64 KB 指令 L1 缓存、64KB 数据 L1 缓存和 256KB 的 L2 回写缓存。Crusoe TM5400 提供良好的应用程序执行效能，比一些桌面处理器运行地还要好，但功耗却更低。同时采用 Long Run 技术，允许处理器调整运行时钟频率和电压，以符合应用程序的要求。这种途径将提供更多的电源储备，Crusoe TM5400 使用这个技术后，运行普通的办公应用程序时候功耗小于 1W，而停止键盘操作后功耗甚至小于 8mW。使用大数据量应用程序，平均功耗也不超过 2W 。Crusoe TM5400 同样完全兼容基于 x86 体系的操作系统，包括 Linux、微软主流的 Windows98、Windows NT 和 Windows2000 操作系统。

它的主要特征包括： VLIW 处理器和 x86 Code Morphing（代码融合）技术提供 x86 兼容平台解决方案；处理器工作主频为 500MHz ～ 700MHz，核心电压为 1.2v - 1.6v。

```
全美达（Transmeta）是一家设计超长指令字（VLIW）程式码转译微处理器的美国有限公司，集中于开发减低电子设备功秏的运算技术，于 1995 年由 Bob Cmelik、Dave Ditzel、Colin Hunter、Ed Kelly、Doug Laird、Malcolm Wing 与 Grzegorz Zynerlo 创立，共出产了两款兼容 x86 架构的处理器：Crusoe 与 Efficeon， 这些处理器用于非常重视低功秏与散热能力的超便携式笔记型电脑、刀锋伺服器、平板电脑与安静型桌上电脑上。
```


## 我的收藏

### Transmeta Crusoe TM5400-13

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 474-ball ceramic BGA |
| Socket | BGA474 |
| 主频 | 533 MHz |
| 外频 | 66 MHz |
| 一级缓存 | 64 + 64 KB |
| 二级缓存 | 256 KB |

```
TM5400-13  300765  CBB000  B08J18N4  A43078N4 00 44AD
```

![Transmeta Crusoe TM5400-13 正面](/images/cpus/Transmeta/Transmeta_Crusoe_TM5400-13_1.jpg)
![Transmeta Crusoe TM5400-13 反面](/images/cpus/Transmeta/Transmeta_Crusoe_TM5400-13_2.jpg)

---------

### Transmeta Crusoe TM5800

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 474-ball ceramic BGA |
| Socket | BGA474 |
| 主频 | 1000 MHz |
| 外频 | 125 MHz |
| 一级缓存 | 64 + 64 KB |
| 二级缓存 | 512 KB |

```
5800U080021  301514 1N668 0536  A1D23  6507F-1  NGH9621.1A  TAIWAN
```

![Transmeta Crusoe TM5800 正面](/images/cpus/Transmeta/Transmeta_Crusoe_TM5800_1.jpg)
![Transmeta Crusoe TM5800 反面](/images/cpus/Transmeta/Transmeta_Crusoe_TM5800_2.jpg)

{% include links.html %}
