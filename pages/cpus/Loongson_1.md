---
title: 龙芯1号
tags: [Loongson]
keywords: Loongson, Godson, CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 3002, 4004, 4040, 8008, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Jul 26, 2024
summary: "2002年8月10日诞生的“龙芯一号”是我国首枚拥有自主知识产权的通用高性能微处理芯片。龙芯1号系列为32位低功耗、低成本处理器，主要面向低端嵌入式和专用应用领域。"
sidebar: cpu_sidebar
permalink: Loongson_1.html
folder: cpus
---

## 关于 龙芯1号

（英文名称Loongson-1）

2002年8月10日诞生的“龙芯一号”是我国首枚拥有自主知识产权的通用高性能微处理芯片。龙芯1号系列为32位低功耗、低成本处理器，主要面向低端嵌入式和专用应用领域。

龙芯一号CPU IP核是兼顾通用及嵌入式CPU特点的32位处理器内核，采用类MIPS III指令集，具有七级流水线、32位整数单元和64位浮点单元。龙芯一号CPU IP核具有高度灵活的可配置性，方便集成的各种标准接口。图1显示了龙芯一号CPU IP核可配置结构，其中虚线部分表示用户可根据自己的需求进行选择配置，从而定制出最适合用户应用的处理器结构。主要的可配置模块包括：浮点部件、多媒体部件、内存管理、Cache、协处理器接口。浮点部件完全兼容MIPS的浮点指令集合，浮点部件及其相关的系统软件完全符合ANSI/IEEE 754-1985二进制浮点运算标准。浮点部件主要包括浮点ALU部件和浮点乘法/除法部件，用户可根据自己的实际应用选择是否添加。媒体部件复用了MIPS浮点指令的Format域，并复用了浮点寄存器堆，媒体指令集基本对应了Intel SSE媒体指令集合的各种操作。

内存管理部件有三种工作模式，即标准模式、直接映射模式和无映射模式。在标准模式下，TLB分为ITLB和DTLB两部分，每部分均由48项页表项组成，同时支持mapped和unmapped的从虚拟地址到物理地址的变换方式；TLB也可只进行直接映射，不使用CAM和RAM，以减小面积；而无映射模式下甚至可以去掉TLB，采用直连SRAM的形式实现访存。龙芯一号CPU IP核的Cache分为指令Cache和数据Cache，两部分独立配置，以4K为一路，可配置为4路、2路和0路。用户可根据应用需要，确定所需Cache的大小，甚至不使用Cache。协处理器接口为外部协处理器提供了一个高效率的接口。龙芯一号CPU IP核提供了两套可配置的处理器总线接口：AMBA接口和哈佛结构SRAM接口。


## 我的收藏

### Loongson-1 LS1A0300C

龙芯1A300第一款桥片。

| 参数 | 数值 |
| ------ | ------ |
| 适用类型 | 云终端/工业控制/数据采集/网络设备 |
| CPU系列 | 龙芯1号系列 |
| 制作工艺 | 130纳米 |
| CPU主频 | 0.3GHz |
| 核心数量 | 单核心 |
| 一级缓存 | 16KB |
| 热设计功耗(TDP) | 1W |
| 内存类型 | DDR2 |
| 插槽类型 | BGA 448 |
| 封装大小 | 23×23mm |
| 峰值运算速度 | 0.6GFlops |
| 微体系结构 | 双发射乱序执行GS232 |
| I/O接口 | USB2.0/1.1*4、SATA2*2、GMAC*2、PCI、LPC、I2C*3、CAN*2、SPI*2、NAND、UART*4、PS2*2、RTC、PWM*4、GPIO*88 |

![Loongson-1 LS1A0300C](/images/cpus/Loongson/LS1A0300C.jpg)

### Loongson-1 LS1B0200CC

龙芯1B首款嵌入式芯片。

| 参数 | 数值 |
| ------ | ------ |
| 适用类型 | 云终端/数据采集/网络设备 |
| CPU系列 | 龙芯1号系列 |
| 制作工艺 | 130纳米 |
| CPU主频 | 0.266GHz |
| 核心数量 | 单核心 |
| 一级缓存 | 8KB |
| 热设计功耗(TDP) | 0.5W |
| 内存类型 | DDR2 333MHz |
| 插槽类型 | BGA 256 |
| 封装大小 | 17×17mm |
| 微体系结构 | 双发射乱序执行GS232 |
| I/O接口 | USB2.0/1.1*1、GMAC*2、 I2C*3、CAN*2、SPI*2、NAND、UART*12、RTC、PWM*4、GPIO*62 |

![Loongson-1 LS1B0200CC](/images/cpus/Loongson/LS1B0200CC.jpg)

### Loongson-1 LS1C0300A

LS1C0300A首款QFP封装芯片。

| 参数 | 数值 |
| ------ | ------ |
| 适用类型 | 工业控制/物联网 |
| CPU系列 | 龙芯1号系列 |
| 制作工艺 | 130纳米 |
| CPU主频 | 0.3GHz |
| 核心数量 | 单核心 |
| 一级缓存 | 16KB |
| 热设计功耗(TDP) | 0.5W |
| 插槽类型 | QFP 176 |
| 内核 | GS232 |
| 微体系结构 | 双发射乱序执行GS232 |
| 内存控制器 | 8/16位SDRAM |
| I/O接口 | 8/16位SRAM、NAND、I2S/AC97、LCD、MAC、USB、OTG、SPI、I2C、UART、PWM、CAN、SDIO、ADC |

![Loongson-1 LS1C0300A](/images/cpus/Loongson/LS1C0300A.jpg)

### Loongson-1 LS1C0300B

LS1C0300B首款打印机芯片（突破50万）。

![Loongson-1 LS1C0300B](/images/cpus/Loongson/LS1C0300B.jpg)

### Loongson-1 LS1C101

LS1C101首款32位单片机，是在龙芯1C100基础上针对门锁应用而优化设计的单片机芯片。该芯片集成Flash、SPI、UART、I2C、RTC、TSENSOR、VPWN、ADC等功能模块，在满足低功耗要求的同时，可以大幅减少板级成本。

| 参数 | 数值 |
| ------ | ------ |
| 适用类型 | 门锁 |
| CPU系列 | 龙芯1号系列 |
| 制作工艺 | 130纳米 |
| CPU主频 | 0.008GHz |
| 核心数量 | 单核心 |
| 热设计功耗(TDP) | 5mAW |
| 插槽类型 | QFP 64 |
| 封装大小 | 12×12mm |
| 内核 | GS132R |
| 功能模块 | Flash、SPI、UART、I2C、RTC、TSENSOR、VPWN、ADC |

![Loongson-1 LS1C101](/images/cpus/Loongson/LS1C101.jpg)

{% include links.html %}
