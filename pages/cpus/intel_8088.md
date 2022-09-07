---
title: Intel 8088 Processor
tags: [Intel, 8088]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Aug 28, 2022
summary: "8088 不是一个成熟的 16 位微处理器，因为与 8086 相比，外部数据总线只有 8 位宽。8086 的设计以及 8088 的设计基于 Intel 的 8085 处理器，并且经过精心设计，使得 8085 中已经使用的指令集可以自动转换为有效的 8086 源代码。与 8086 一样，8088 也缺少必要的组件，例如中断和 DMA 控制器，这些组件是使用特殊芯片外部集成在主板上的。它也不支持浮点计算，但这个缺点可以通过可选的协处理器来弥补。英特尔的 8088 生产并畅销到 1990 年代，CMOS 和消耗优化的 CHMOS 版本的时钟速度为 5 到 10 MHz。"
sidebar: mydoc_sidebar
permalink: intel_8088.html
folder: cpus
---

## 关于 Intel 8088

以技术的观点来看，8088 其实是 8086 的简化版中央处理器，其内部总线宽度是 16 Bit 的，但是外部总线宽度缩减为 8 Bit；比起 8086 内部总线宽度、内部总线位宽度为 16 Bit，地址总线宽度为 20 Bit，内存寻址功能达到 1 MB 的规格来说，是稍差了一点，但是已经足以胜任 DOS 系统和当时的应用程序了（也便宜得多）。这也是 IBM 第一款个人电脑 PC XT 所采用的微处理器。 Intel P8088-2 为 8088 的量产版，-2字尾代表它是 8 MHz。

关键数据：
- 29,000 个晶体管
- 3.0 µm HMOS 制造技术
- 16 位内部数据总线
- 8 位外部数据总线
- 20 位地址总线
- 支持高达 1024 KB 的内存

## Introduction

The 8088 is a reduced and cheaper version of the 8086 for the 8-bit market. It was introduced in 1979 and had 16-bit internal registers and an 8-bit data bus. This processor was used in the original IBM PC.

## 我的收藏

### Intel P8088

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 40-pin PDIP |
| CPU 时钟 | 5.0 MHz |
| 内部总线宽度 | 16 Bit |
| 外部总线宽度 | 8 Bit |
| 地址总线宽度 | 20 Bit |
| 晶体管 | 29,000 |
| 技术 | NMOS 3.0 µm |
| 电压 | 5 Volt |
| 上市时间 | 06/1979 |
| 生产日期 | 42/1983 |

![Intel P8088 正面](/images/cpus/Intel/Intel_P8088_1.jpg)
![Intel P8088 反面](/images/cpus/Intel/Intel_P8088_2.jpg)

---------

### Intel P8088-2

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 40-pin PDIP |
| CPU 时钟 | 8.0 MHz |
| 内部总线宽度 | 16 Bit |
| 外部总线宽度 | 8 Bit |
| 地址总线宽度 | 20 Bit |
| 晶体管 | 29,000 |
| 技术 | NMOS 3.0 µm |
| 电压 | 5 Volt |
| 上市时间 | 06/1979 |
| 生产日期 | 45/1987 |

![Intel P8088-2 正面](/images/cpus/Intel/Intel_P8088-2_1.jpg)
![Intel P8088-2 反面](/images/cpus/Intel/Intel_P8088-2_2.jpg)

{% include links.html %}
