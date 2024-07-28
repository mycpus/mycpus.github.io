---
title: 龙芯2号
tags: [Loongson]
keywords: Loongson, Godson, CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 3002, 4004, 4040, 8008, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Jul 26, 2024
summary: "龙芯2号系列为64位低功耗单核或双核系列处理器，主要面向工控和终端等领域。"
sidebar: cpu_sidebar
permalink: Loongson_2.html
folder: cpus
---

## 关于 龙芯2号

龙芯2号（英文名称Loongson-2）于2003年正式完成并发布。

龙芯2号是64位处理器，主频为300MHz至1000MHz，500MHz版约与1GHz版的Intel Pentium III、Pentium 4拥有相近的效能水平。

龙芯2号最初的版本是用0.13微米工艺，往后也会使用更精细的工艺。事实上龙芯2号当称为一个系列，过程中经过数次改进，已知的有2、2A、2B、2C、2E、2F等型号，龙芯2号处理器已用于黄羊河公司（YellowSheepRiver，简称：YSR）的低价型Linux台式机：Municator中，最初的售价约为1200元人民币。其电脑皆曾在2006 年3月德国汉诺威CeBIT及6月的台北国际电脑展览会中展出。


## 我的收藏

### Loongson-2 LS2F04

龙芯2F与龙芯2E相比，主要有以下几个方面的提高。一是主频提高30%以上，通过频率筛选，将有1GHz以上的产品。二是相同频率下功耗降低40%左右，并增加了很多诸如降频、温度传感器、关闭L2等功耗管理功能。三是集成了更多的系统功能，除了CPU外，还集成了DDR2内存控制器、66MHz PCI/100MHz PCIX控制器、Local IO控制器、GPIO、中断控制器、DMA控制器、部分显示加速等功能，将大幅度降低系统成本。四是封装更小，龙芯2E的封装为35mm*35mm，龙芯2F为27mm*27mm。五是可测性设计（DFT）和可生产性设计（DFM）有明显提高，因此可以降低芯片成本。

| 参数 | 数值 |
| ------ | ------ |
| 适用类型 | 台式机 |
| CPU系列 | 龙芯2号系列 | 
| 制作工艺 | 90纳米 |
| CPU主频 | 0.8GHz |
| 核心数量 | 单核心 |
| 一级缓存 | 64KB |
| 二级缓存 | 512KB |
| 热设计功耗(TDP) | 5W |
| 内存类型 | DDR2 667MHz，DDR3 667MHz |
| ECC内存支持 | 是 |
| 插槽类型 | BGA 452 |
| 封装大小 | 40×40mm |
| 峰值运算速度 | 3.2GFlops |
| 微体系结构 | 四发射乱序执行 GS464 |
| 高速I/O | 32位PCI/PCIX控制器 |
| 其它I/O | PCI、Local IO、GPIO |

![Loongson-2 LS2F04](/images/cpus/Loongson/LS2F04_1.jpg)
![Loongson-2 LS2F04](/images/cpus/Loongson/LS2F04_2.jpg)

### Loongson-2 LS2K1000

龙芯2K1000（嵌入式双核）。

| 参数 | 数值 |
| ------ | ------ |
| 适用类型 | 手机/平板 |
| CPU系列 | 龙芯2号系列 |
| 制作工艺 | 40纳米 |
| CPU主频 | 1GHz |
| 核心数量 | 双核心 |
| 一级缓存 | 32KB |
| 二级缓存 | 1MB |
| 热设计功耗(TDP) | 5W |
| 内存类型 | DDR2 1066MHz，DDR3 1066MHz |
| 插槽类型 | BGA 608 |
| 封装大小 | 27×27mm |
| 峰值运算速度 | 8GFlops |
| 微体系结构 | 双发射超标量乱序执行 GS264 |
| 高速I/O | PCIE2.0*2 |
| 存储接口 | SATA2.0*1、NAND |
| 显示接口 | DVO*2 |
| 音频接口 | I2S、HDA、AC97 |
| 网络接口 | RGMII千兆网*2 |
| 其它I/O | SPI、UART*12、GPIO、SDIO、I2C*2、CAN*2、LIO、USB2.0*4 |

![Loongson-2 LS2K1000](/images/cpus/Loongson/LS2K1000.jpg)

{% include links.html %}
