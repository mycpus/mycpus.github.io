---
title: Motorola PowerPC Processor
tags: [Motorola, PowerPC]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Sep 5, 2022
summary: "PowerPC 是 1991 年 Apple - IBM - Motorola 联盟 (AIM) 创建的 RISC 微处理器架构。"
sidebar: mydoc_sidebar
permalink: Motorola_PowerPC.html
folder: cpus
---

## 关于 Motorola PowerPC

PowerPC 是 1991 年 Apple - IBM - Motorola 联盟 (AIM) 创建的 RISC 微处理器架构。

'Power'（Performance Optimization With Enhanced RISC）采用了 IBM RS/6000 系列的 Power 架构。 PowerPC 是按照 RISC 原则设计的，并允许超标量实现。该设计的版本存在于 32 位和 64 位的实现中。从基本的 POWER 规范开始，PowerPC 添加了：
 - 大端或小端模式（需要重置）
 - 单精度浮点除了双精度
 - 应 Apple 要求的额外浮点指令
 - 完整的 64 位规范，向后兼容 32 位模式
 - 删除一些更深奥的 POWER 指令，这些指令在微码中模拟

该设计的第一个单芯片实现是 MCP601，并于 1994 年 3 月在 [Apple 的 PowerMac](http://www.apple-history.com/noframes/body.php?page=gallery&model=6100) 中发布。有关使用特定 PowerPC CPU 的 Apple 计算机列表，请参阅 [Apple-History.com](http://www.apple-history.com/noframes/body.php?sort=processor)

第四代 PowerPC 处理器 PPC G4 用于 Apple Macintosh 计算机，例如 G4 PowerBook、第二代“平板”iMac、eMac、第三代 iBook 和桌面 G4 Power Mac。

G4 的大部分设计都是由摩托罗拉与苹果公司密切合作完成的。AIM 联盟的第三个成员 IBM 选择不参与 G4 的设计，部分原因是微处理器在芯片上的矢量处理单元方面存在设计分歧。最终，G4 架构设计包含一个名为 AltiVec 的 128 位矢量处理单元。

使用 AltiVec 单元，G4 微处理器可以在一个周期内进行四路单精度浮点数学运算或 16 路字节数学运算。此外，G4 上的向量处理单元是超标量的，可以同时进行两个向量运算。与当时的英特尔 x86 微处理器相比，如果应用程序被编码为利用 AltiVec 单元，则此功能可显着提升性能。

## Introduction

PowerPC is a RISC microprocessor architecture created by the 1991 Apple-IBM-Motorola alliance (AIM).
 
'Power' (Performance Optimization With Enhanced RISC) and was adopted from IBM's POWER architecture from their RS/6000 series.
 
The PowerPC is designed along RISC principles, and allows for a superscalar implementation. Versions of the design exist in both 32-bit and 64-bit implementations. Starting with the basic POWER specification, the PowerPC added:
 - big or little-endian modes (requiring a reset)
 - single-precision floating point in addition to double-precision
 - additional floating point instructions at the behest of Apple
 - a complete 64-bit specification, which is backward compatible with the 32-bit mode
 - removal of some of the more esoteric POWER instructions, which are emulated in microcode

The first single-chip implementation of the design was the MCP601 and released in [Apple's PowerMac](http://www.apple-history.com/noframes/body.php?page=gallery&model=6100) in March 1994. For a list of Apple computers using a specific PowerPC CPU please refer to [Apple-History.com](http://www.apple-history.com/noframes/body.php?sort=processor)

The fourth generation of PowerPC processors, the PPC G4, is used in Apple Macintosh computers such as the G4 PowerBook, the 2nd generation "Flat Panel" iMac, the eMac, the 3rd generation iBook, and the desktop G4 Power Mac.
 
Most of the G4 design was done by Motorola in close cooperation with Apple. IBM, the third member of the AIM alliance, chose not to participate in the design of the G4 in part owing to microprocessor design disagreements concerning a Vector Processing Unit on the chip. Ultimately, the G4 architecture design contained a 128-bit vector processing unit called AltiVec.
 
With the AltiVec unit, the G4 microprocessor can do four-way single precision floating point math, or 16-way byte math in a single cycle. Furthermore, the vector processing unit on the G4 is superscalar, and can do two vector operations at the same time. Compared to Intel's x86 microprocessors at the time, this feature offered a substantial performance boost, if the application was coded to take advantage of the AltiVec unit.

## 我的收藏

### MOTOROLA PowerPC 7440(G4) XC7445B RX1250BF

| 参数 | 数值 |
| ------ | ------ |
| 处理器类型 | PowerPC G4 7445 |
| 核心 | 7440 |
| Socket | BGA360 |
| 主频 | 1250 MHz |
| 外频 | 100 MHz |
| 倍频 | x 12.5 |

![MOTOROLA PowerPC 7440(G4) XC7445B RX1250BF 正面](/images/cpus/Motorola/MOTOROLA_PowerPC_7440(G4)_XC7445B_RX1250BF_1.jpg)
![MOTOROLA PowerPC 7440(G4) XC7445B RX1250BF 反面](/images/cpus/Motorola/MOTOROLA_PowerPC_7440(G4)_XC7445B_RX1250BF_2.jpg)

---------

### MOTOROLA PowerPC 7450(G4) XPC7451 RX800PE

| 参数 | 数值 |
| ------ | ------ |
| 处理器类型 | PowerPC G4 7451 |
| 核心 | 7450 |
| Socket | CBGA483 |
| 主频 | 800 MHz |
| 外频 | 100 MHz |
| 倍频 | x 8 |

![MOTOROLA PowerPC 7450(G4) XPC7451 RX800PE 正面](/images/cpus/Motorola/MOTOROLA_PowerPC_7450(G4)_XPC7451_RX800PE_1.jpg)
![MOTOROLA PowerPC 7450(G4) XPC7451 RX800PE 反面](/images/cpus/Motorola/MOTOROLA_PowerPC_7450(G4)_XPC7451_RX800PE_2.jpg)

---------

### MOTOROLA PowerPC 7450(G4) XC7455A RX1000PF

| 参数 | 数值 |
| ------ | ------ |
| 处理器类型 | PowerPC G4 7455 |
| 核心 | 7450 |
| Socket | CBGA483 |
| 主频 | 1000 MHz |
| 外频 | 100 MHz |
| 倍频 | x 10 |

![MOTOROLA PowerPC 7450(G4) XC7455A RX1000PF 正面](/images/cpus/Motorola/MOTOROLA_PowerPC_7450(G4)_XC7455A_RX1000PF_1.jpg)
![MOTOROLA PowerPC 7450(G4) XC7455A RX1000PF 反面](/images/cpus/Motorola/MOTOROLA_PowerPC_7450(G4)_XC7455A_RX1000PF_2.jpg)

{% include links.html %}
