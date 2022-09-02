---
title: Intel Pentium Processor
tags: [Intel, Pentium]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Aug 28, 2022
summary: "第一批具有 60 MHz 和 66 MHz的 Pentium P5 处理器于 1993 年 3 月推出。成为了非常成功的 i486 继承者。"
sidebar: mydoc_sidebar
permalink: intel_Pentium.html
folder: cpus
---

## 关于 Intel Pentium

1993年，英特尔发布了Pentium（俗称586）中央处理器晶片（CPU）。本来按照惯常的命名规律是80586，但是因为实际上「586」这样的数字不能注册成为商标使用，因此任何竞争对手都可以用586来扰乱消费市场。事实上在486发展末期，就已经有公司将486等级的产品标识成586来销售了。因此英特尔决定使用自创的品牌来作为新产品的商标——Pentium。第一代Pentium（50~60MHz）的工作电压仍然是5V，并使用Socket 4插槽介面。第二代Pentium(75MHz~)则把十年未变的工作电压降至3.3V，并使用Socket 5插槽介面。这也是英特尔第一次在同一产品线使用两种不同的插槽介面，当然这也造成旧插槽使用者升级的不便。Pentium是x86系列一大革新。其中电晶体数大幅提高并增强了浮点运算功能，不过Pentium刚推出的时候拥有浮点数除法不正确的错误（FDIV Bug），导致英特尔大量回收第一代产品（1994年十二月之前的产品）。Pentium 50Mhz也有这个FDIV错误，不过A80501-50 只是业界样本，从来没有在市场上出现过。

Intel Pentium P5是英特尔的第 5 代 80x86 处理器。它于 1993 年 3 月 22 日上市。主板接口是专门开发的socket 4。从 Pentium P5 开始，所有 Intel 处理器都具有片上集成浮点单元。

Intel Pentium P54 处理器于 1994 年 3 月 7 日推出。这些是 Pentium P5 的进一步发展，时钟频率从 75 MHz 到 200 MHz。P54使用socket 5作为主板接口，后来也使用了新的socket 7。

关键数据：
- P5 超标量微架构
- 3,300,000 个晶体管
- 64 位数据总线
- 32 位地址总线
- MMU（内存管理单元）
- 16 KB L1 高速缓存（指令和数据高速缓存各 8 KB）
- 支持至 4 GB 内存

## Introduction

The Intel Pentium is a fifth-generation x86 architecture microprocessor, introduced on March 22, 1993. It is the successor to the 486 line. The Pentium was originally to be named 80586 or i586, but the name was changed to Pentium because numbers could not be trademarked. 586 is however, used in programming referring to all the early Pentium processors, and Pentium-like processors made by the Intel competition.
 
The original Pentium microprocessor had the internal code name P5, and was a pipelined in-order superscalar microprocessor, produced using a 0.8 µm process. It was followed by the second generation Pentium P54, a shrink of the P5 to a 0.6 µm process, which was dual-processor ready and had an internal clock speed different from the front side bus (it's much more difficult to increase the bus speed than to increase the internal clock). In turn, the P54 was followed by the 3rd generation P54C, which used a 0.35 µm process - a pure CMOS process, as opposed to the Bipolar CMOS process that was used for the earlier Pentiums.
 
The early versions of 60-100 MHz Pentiums had a problem in the floating point unit that, in rare cases, resulted in reduced precision of division operations. This bug, discovered in 1994, became known as the Pentium FDIV bug and caused great embarrassment for Intel, which created an exchange program to replace the faulty processors with corrected ones. The 60 and 66 Mhz 0.8 µm versions of the Pentium processors were also known for their fragility and their (for the time) high levels of heat production.
 
FDIV-Bug
Following S-Spec numbers are affected:

|  | 步进 |
| ------ | ------ |
| P5-50:	| Q0399 |
| P5-60:	| Q0352, Q0394, Q0400, Q0412, Q0466, SX753, SX835, SZ949 |
| P5-66:	| Q0353, Q0395, Q0413, Q0467, SX754, SX837, SZ950 |
| P54-75:	| Q0540, Q0541, Q0601, Q0606, SX951 |
| P54-90:	| Q0542, Q0543, Q0611, Q0612, Q0613, Q0628, SX679, SX874, SX885, SX909, SX921, SX922, SX923, SX942, SX943, SX944, SZ951 |
| P54-100:	| Q0563, Q0587, Q0614, Q0677, SX886, SX910, SX960 |

## 我的收藏

### Intel Pentium A80502-75 Goldcap

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 296-pin SPGA |
| 核心 | P54C |
| Socket | 5/7 |
| CPU 时钟 | 75 MHz |
| Board Frequency | 50 MHz |
| Clock multiplier | x 1.5 |
| 外部总线宽度 | 64 Bit |
| 地址总线宽度 | 32 Bit |
| Level1 Cache | 8+8 KB |
| 晶体管 | 3,300,000 |
| 技术 | Bi-CMOS 0.6 µm |
| 电压 | 3.3 V |
| 步进 | SX961 |
| 生产日期 | 49/1994 |

![Intel Pentium A80502-75 Goldcap 正面](/images/cpus/Intel/Intel_Pentium_A80502-75_Goldcap_1.jpg)
![Intel Pentium A80502-75 Goldcap 反面](/images/cpus/Intel/Intel_Pentium_A80502-75_Goldcap_2.jpg)

### Intel Pentium A8050275

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 296-pin SPGA |
| 核心 | P54C |
| Socket | 5/7 |
| CPU 时钟 | 75 MHz |
| Board Frequency | 50 MHz |
| Clock multiplier | x 1.5 |
| 外部总线宽度 | 64 Bit |
| 地址总线宽度 | 32 Bit |
| Level1 Cache | 8+8 KB |
| 晶体管 | 3,300,000 |
| 技术 | Bi-CMOS 0.6 µm |
| 电压 | 3.3 V |
| 步进 | SX969 |
| 生产日期 | 48/1995 |

![Intel Pentium A8050275 正面](/images/cpus/Intel/Intel_Pentium_A8050275_1.jpg)
![Intel Pentium A8050275 反面](/images/cpus/Intel/Intel_Pentium_A8050275_2.jpg)

### Intel Pentium BP80502133

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 296-pin SPGA |
| 核心 | P54CS |
| Socket | 5/7 |
| CPU 时钟 | 133 MHz |
| Board Frequency | 66 MHz |
| Clock multiplier | x 2 |
| 外部总线宽度 | 64 Bit |
| 地址总线宽度 | 32 Bit |
| Level1 Cache | 8+8 KB |
| 晶体管 | 3,300,000 |
| 技术 | Bi-CMOS 0.35 µm |
| 电压 | 3.3 V |
| 步进 | SL25L |
| 生产日期 | 13/1997 |

![Intel Pentium BP80502133 正面](/images/cpus/Intel/Intel_Pentium_BP80502133_1.jpg)
![Intel Pentium BP80502133 反面](/images/cpus/Intel/Intel_Pentium_BP80502133_2.jpg)

### Intel Pentium FV80502166

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 296-pin SPGA |
| 核心 | P54CS |
| Socket | 7 |
| CPU 时钟 | 166 MHz |
| Board Frequency | 66 MHz |
| Clock multiplier | x 2.5 |
| 外部总线宽度 | 64 Bit |
| 地址总线宽度 | 32 Bit |
| Level1 Cache | 8+8 KB |
| 晶体管 | 3,300,000 |
| 技术 | Bi-CMOS 0.35 µm |
| 电压 | 3.5 V |
| 步进 | SY073 |
| 生产日期 | 46/1997 |

![Intel Pentium FV80502166 正面](/images/cpus/Intel/Intel_Pentium_FV80502166_1.jpg)
![Intel Pentium FV80502166 反面](/images/cpus/Intel/Intel_Pentium_FV80502166_2.jpg)

{% include links.html %}
