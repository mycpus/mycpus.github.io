---
title: Cyrix 5x86 Processor
tags: [Cyrix, 5x86]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Sep 3, 2022
summary: "Cyrix 5x86 处理器于 1995 年底上市，利用高效的第五代（奔腾级）架构特性显着提高性能，同时最大限度地减少晶体管数量。"
sidebar: mydoc_sidebar
permalink: Cyrix_5x86.html
folder: cpus
---

## 关于 Cyrix 5x86

Cyrix 5x86 处理器于 1995 年底上市。它们为 Socket 3 分配了 486 针脚，这意味着旧 486 系统的升级选项很便宜，因为 Cyrix 5x86 的微架构不同于其同名的 AMD 5x86，已经包含后继一代 6x86 的大部分设计。

由于 Cyrix 只开发其处理器，但由于缺乏自己的生产设施而由 IBM 和 SGS 生产，因此 5x86 也由 IBM 和 SGS 以它们的名义销售。

关键数据：
 - 2,000,000 个晶体管
 - 0.65 µm CMOS 制造技术
 - 64 位数据总线
 - 32 位地址总线
 - 流水线架构
 - MMU（内存管理单元）
 - 16 KB 回写式 L1 缓存
 - 支持高达 4 GB 的内存，
 - 部分使用 P 或 PR 等级（相对性能英特尔奔腾）

## Introduction

The 5x86 processor utilizes efficient fifth-generation (Pentium class) architectural features to significantly improve performance while minimizing transistor count. It achieves this performance using a superpipelined architecture in the integer unit combined with data forwarding, branch prediction, a 16-KByte unified write-back cache, single-cycle instruction decode, and single-cycle execution.
 
The processor's built-in power-saving features automatically power down the Floating Point Unit (FPU) and other idle internal circuits, while the System Management Mode (SMM) conserves power flowing to system peripherals.
 
The Cyrix 5x86 processor is an example of Cyrix's strategy to design next-generation processor architectures that leverage existing designs. It is available in a 168-pin PGA or a 208-pin QFP package with standard 486 pinout. Though it's installed in a P24D socket on a 486 motherboard, the motherboard must have a BIOS that will support the 5x86.

## 我的收藏

### Cyrix 5x86-100GP

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 168-Pin CPGA |
| Socket | 3 |
| 主频 | 100 MHz |
| 外频 | 33 MHz |
| 倍频 | x 3 |
| 数据总线 | 64 Bit |
| 地址总线 | 32 Bit |
| 一级缓存 | 16 KB write-back |
| 晶体管 | 2,000,000 |
| 技术 | CMOS 0.65 µm |
| 电压 | 3.45 V |
| 生产日期 |  |

![Cyrix 5x86-100GP 正面](/images/cpus/Cyrix/Cyrix_5x86-100GP_1.jpg)
![Cyrix 5x86-100GP 反面](/images/cpus/Cyrix/Cyrix_5x86-100GP_2.jpg)

{% include links.html %}
