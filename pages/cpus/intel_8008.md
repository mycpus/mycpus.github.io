---
title: Intel 8008 Processor
tags: [Intel, 8008]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Aug 28, 2022
summary: "英特尔的 8008 处理器被认为是第一款 8 位处理器，于 1972 年 4 月 1 日发布。"
sidebar: mydoc_sidebar
permalink: intel_8008.html
folder: cpus
---

## 关于 Intel 8080

英特尔的 8008 处理器被认为是第一款 8 位处理器，于 1972 年 4 月 1 日发布，大约在英特尔 4004 处理器推出 5 个月后。与认为 8008 仅仅是 4004 和 4040 的演变的观点相反，它实际上是从头开始重新设计的，并实施了新的指令集。如果你仔细看，你会发现它甚至可以称为 x86 指令集的祖先。

关键数据：
 - 3,500 个晶体管
 - 10.0 µm PMOS 制造技术
 - 8 位内部数据总线
 - 8 位外部数据总线
 - 14 位地址总线
 - 处理高达 160,000 个命令/秒

## Introduction

The Intel 8008 was an early CPU designed and manufactured by Intel, introduced in April, 1972.
 
The chip (limited by its 18 pin DIP packaging) had a single 8-bit bus and required a very large amount of external logic to support it. For example the 14-bit address, which could accesss 16K bytes of memory, needed to be latched by some of this logic in an external Memory Address Register (MAR). It could access 8 input ports and 24 output ports.
 
While a little slower (in terms of MIPs) than the 4-bit Intel 4004 and Intel 4040, the fact that it processed data 8-bits at a time and could access significantly more RAM actually gave it 3 to 4 times the true processing power of the 4-bit chips. For controller and CRT terminal use this was an acceptable design, but it was too difficult to use for most other tasks. Some early computer designs (e.g. the Mark-8, the MCM 782 APL, the NBI Hantu, and the R2E Micral) were based on it, but most would use the later and greatly improved Intel 8080 instead.


## 我的收藏

### Intel D8008-1

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 18-pin CerDIP |
| 主频 | 0.5 MHz |
| 内部总线宽度 | 8 Bit |
| 外部总线宽度 | 8 Bit |
| 地址总线宽度 | 14 Bit |
| 晶体管 | 3500 |
| 技术 | PMOS 10.0 µm |
| 电压 | 5 Volt ± 5% (-9V) |
| 生产日期 |  |

![Intel D8008-1 正面](/images/cpus/Intel/Intel_D8008-1_1.jpg)
![Intel D8008-1 反面](/images/cpus/Intel/Intel_D8008-1_2.jpg)

{% include links.html %}
