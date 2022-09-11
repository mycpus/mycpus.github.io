---
title: AMD K7 Processor
tags: [AMD, K7]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Sep 3, 2022
summary: "第一款采用 K7 微架构的 Athlon 处理器于 1999 年 6 月开始销售。"
sidebar: mydoc_sidebar
permalink: AMD_K7.html
folder: cpus
---

## 关于 AMD K7

第一款采用 K7 微架构的 Athlon 处理器于 1999 年 6 月开始销售。与之前的 K6 不同，随着 K7 处理器的推出，AMD 处理器被命名为 Athlon、Duron 和 Sempron。这遵循了英特尔设置的示例。

与采用 K6 微架构的处理器相比，采用 K7 微架构的处理器具有以下性能改进：
  - 更多的执行单元
  - FPU 的完整管道
  - 更宽的数据路径
  - 先进的动态分支预测
  - 200MHz 的系统总线

在 Slot A 的第一个 Athlon 型号中，L2 高速缓存仍然作为单独的芯片焊接到处理器板上。结果，它无法以完整的处理器时钟运行，从而导致速度略有下降。用于 Socket A 的 453 针 sCPGA 处理器不再有此限制，因为 L2 缓存再次像 K6-III 一样集成在芯片上。

第一代Athlon的直接继任者是 Athlon XP，从 2001 年 10 月开始销售。
	
随着 2000 年 6 月 Duron 的推出，AMD 发布了其“低预算”处理器，覆盖了与 Intel Celeron 相同的市场。该处理器专为办公 PC 设计，其二级缓存比 Athlon 系列小得多，但购买成本要低得多。

Duron 的直接继任者是基于 Athlon XP 的 AMD Sempron 处理器。

AMD Geode NX 处理器是 AMD 公司针对嵌入式市场推出的 x86 架构处理器产品，高性能、低功率是这种处理器的主要特点，从 1W 到 14W，让用户根据需要选择合适产品。Geode NX 主要针对例如瘦客户端、打印机、零售点，信息和交易服务亭，以及通信网络设备等。

## Introduction

The Athlon made its debut on August 21, 1999. The original Athlon core revision, codenamed "K7", was available in speeds of 500 to 650 MHz at its introduction and was later sold at speeds up to 1000 MHz.
 
Internally, the Athlon was essentially a major reworking of the K6 processor core designed for compatibility with the EV6 bus protocol (first used on DEC's Alpha 21264 RISC processor). AMD dramatically improved the floating-point unit from the K6 and put a large 128K level 1 cache on the chip. Like on the Intel Pentium II there was 512k of secondary cache, mounted on the CPU module and running at a lower speed than the core.
The resulting processor was the fastest x86 in the world. Various different versions of the Athlon held this distinction continuously from August 1999 until January 2002.

The AMD Duron was released in the summer of 2000 as a low-cost alternative to the Athlon processor and the Pentium III and Celeron processor lines from Intel.
 
The Duron is pin-compatible with the Athlon and operating on the same motherboards. It has the same 128K of level 1 cache as the Athlon, but only 64K of level 2 cache, as compared to 256K on the more expensive chip. Because of this, the Duron generally lags behind the Athlon on business applications, but keeps up in floating-point operations thanks to its powerful FPU, which is identical to the Athlon's. The original Duron was limited to operating on a 100 MHz front-side bus speed, while the Athlon at the time could run on a bus clock of 133 MHz. Later Athlons supported a 200MHz bus.

## 我的收藏

### AMD Athlon 650 MHz

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 242-contact CM |
| 核心 | Pluto |
| Socket | Slot A |
| 主频 | 650 MHz |
| 外频 | 100 / 200 MHz |
| 倍频 | x 6.5 |
| 总线宽度 | 64/32 Bit |
| 一级缓存 | 128 KB (64/64) |
| Level2 Cache | 512 KB |
| Level2 时钟 | 325 MHz |
| 晶体管 | 22,000,000 |
| 技术 | 0.18 µm |
| 生产日期 |  |

```
  OPN: K7650CURAFC
```

![AMD Athlon 650 MHz 正面](/images/cpus/AMD/AMD_Athlon_650_MHz_1.jpg)
![AMD Athlon 650 MHz 反面](/images/cpus/AMD/AMD_Athlon_650_MHz_2.jpg)

---------

### AMD Mobile Athlon 4 1.2 GHz

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 453-Pin sCPGA |
| 核心 | Palomino |
| 步进 | AGFCA |
| Socket | Socket A |
| 主频 | 1200 MHz |
| 外频 | 133 / 266 MHz |
| 倍频 | x 9 |
| 总线宽度 | 64/32 Bit |
| 一级缓存 | 128 KB (64/64) |
| Level2 Cache | 256 KB |
| 晶体管 | 37,500,000 |
| 技术 | 0.18 µm |
| 生产日期 | 19/2001 |

```
OPN: AHM1200AVS3C
```

![AMD Mobile Athlon 4 1.2 GHz 正面](/images/cpus/AMD/AMD_Mobile_Athlon_4_1200MHz_1.jpg)
![AMD Mobile Athlon 4 1.2 GHz 反面](/images/cpus/AMD/AMD_Mobile_Athlon_4_1200MHz_2.jpg)

---------

### AMD Mobile Duron 1 GHz

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 453-Pin sCPGA |
| 核心 | Camaro |
| 步进 | AHLCA |
| Socket | A |
| 主频 | 1000 MHz |
| 外频 | 100 / 200 MHz |
| 倍频 | x 10 |
| 总线宽度 | 64/32 Bit |
| 一级缓存 | 128 KB (64/64) |
| 二级缓存 | 64 KB |
| 晶体管 | 25,200,000 |
| 技术 | 0.18 µm |
| 生产日期 | 23/2002 |

```
  OPN: DHM1000AVS1B
```

![AMD Mobile Duron 1 GHz 正面](/images/cpus/AMD/AMD_Mobile_Duron_1GHz_1.jpg)
![AMD Mobile Duron 1 GHz 反面](/images/cpus/AMD/AMD_Mobile_Duron_1GHz_2.jpg)

---------

### AMD Sempron 2200+

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 453-Pin sCPGA |
| 核心 | Thoroughbred |
| 步进 | BIXJB |
| Socket | A(462) |
| 主频 | 1500 MHz |
| 外频 | 166 / 333 MHz |
| 倍频 | x 9 |
| 总线宽度 | 64/32 Bit |
| 一级缓存 | 128 KB (64/64) |
| 二级缓存 | 256 KB |
| 晶体管 | 37,200,000 |
| 技术 | 0.13 µm |
| 生产日期 | 33/2004 |

```
  OPN: SDA2200DUT3D
```

![AMD Sempron 2200+ 正面](/images/cpus/AMD/AMD_Sempron_2200+_1.jpg)
![AMD Sempron 2200+ 反面](/images/cpus/AMD/AMD_Sempron_2200+_2.jpg)

---------

### AMD Sempron 2500+

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 453-Pin sCPGA |
| 核心 | Thoroughbred |
| 步进 | BCXJB |
| Socket | A(462) |
| 主频 | 1750 MHz |
| 外频 | 166 / 333 MHz |
| 倍频 | x 10.5 |
| 总线宽度 | 64/32 Bit |
| 一级缓存 | 128 KB (64/64) |
| 二级缓存 | 256 KB |
| 晶体管 | 37,200,000 |
| 技术 | 0.13 µm |
| 生产日期 | 11/2005 |

```
  OPN: SDA2500DUT3D
```
---------

![AMD Sempron 2500+ 正面](/images/cpus/AMD/AMD_Sempron_2500+_1.jpg)
![AMD Sempron 2500+ 反面](/images/cpus/AMD/AMD_Sempron_2500+_2.jpg)

### AMD Geode NX 1500 (F)

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 453-pin Organic PGA |
| 核心 | Thoroughbred |
| 步进 | BJJF |
| Socket | A(462) |
| 主频 | 1000 MHz |
| Bus Speed | 266 MHz |
| 数据宽度 | 32 Bit |
| 一级缓存 | 128 KB (64/64) |
| 二级缓存 | 256 KB |
| 晶体管 |  |
| 技术 | 0.13 µm |
| 上市时间 | 5.24.2004 |
| 生产日期 | 46/2007 |

```
  OPN: ANXL1500FGC3F
```

![AMD Geode NX 1500 (F) 正面](/images/cpus/AMD/AMD_Geode_NX_1500F_1.jpg)
![AMD Geode NX 1500 (F) 反面](/images/cpus/AMD/AMD_Geode_NX_1500F_2.jpg)

{% include links.html %}
