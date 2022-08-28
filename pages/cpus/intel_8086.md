---
title: The Intel 8086 Processor
tags: [Intel, 8086]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Aug 28, 2022
summary: "英特尔第一代 80x86 处理器于 1978 年 6 月 8 日上市。8086 是 80x86 系列的始祖，其架构至今仍在无数代处理器中使用。8086 是一个完整的 16 位微处理器，因为内部和外部总线均为 16 位宽。"
sidebar: mydoc_sidebar
permalink: intel_8086.html
folder: cpus
---

## 关于 Intel 8086

 Intel 8086 为英特尔x86 家族（什么386、486乃至于Penitum 4都是）的元老，也是第一颗十六位元中央处理器晶片（CPU），跟之前英特尔出的微处理器都不相容。其记忆体定位功能达到1MB，在当时来说是超级大的。 8086包含2.9万个电晶体，工作时脉为4.77MHz（8086-2是8Mhz），同时还生产出与之配合的数学辅助运算晶片（Math Co-processor）8087，这两种晶片使用相同的指令集，可以互相配合提升数学运算的效率。当然现在的CPU都内建数学辅助运算器，因此不再需要额外的数学辅助运算晶片，但是七十年代的技术限制，一般只能将数学辅助运算器做成另外一个晶片，供用户选择。这样的好处是减少了制造的成本，提高了良率，更降低对速度需求不大的用户支出：他们可以暂时不买数学辅助运算器，直到需要的时候买一个回来插到IC插座里即可。紫色陶瓷的C8086就是Intel 8086里面的元老，也可以说是英特尔x86霸业的开山始祖。这种封装只有8086刚推出的时候有生产，非常稀少（比Intel C4004还少）。根据官方文件，Intel 8086于1978年6月8日推出，这颗晶片就是在推出的那一个月里制造的。

关键数据：
- 29,000 个晶体管
- 3.0 µm HMOS 制造技术
- 16 位内部数据总线
- 16 位外部数据总线
- 20 位地址总线
- 支持高达 1024 KB 的内存

## Introduction

The 8086, officially called iAPX 86, is a 16-bit processor designed by Intel in 1978. It gave rise to the x86 architecture. The first commercial microcomputer built on the basis of the 8086 was the Mycron 2000 (from Norway). This computer was used by Digital Research as the development platform for the CP/M-86 operating system.

## 我的收藏

### Intel P8086

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 40-pin PDIP |
| CPU 时钟 | 5.0 MHz |
| 内部总线宽度 | 16 Bit |
| 外部总线宽度 | 16 Bit |
| 地址总线宽度 | 20 Bit |
| 晶体管 | 29,000 |
| 技术 | NMOS 3.0 µm |
| 电压 | 5 Volt |
| 生产日期 | 47/1985 |

![Intel-P8085 正面](/images/cpus/Intel/Intel_P8085_1.jpg)
![Intel-P8085 反面](/images/cpus/Intel/Intel_P8085_2.jpg)

{% include links.html %}
