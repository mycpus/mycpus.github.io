---
title: Intel FPU
tags: [Intel, FPU]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Aug 31, 2022
summary: "协处理器包含对数、算术、指数和三角函数的支持。它们将 80x86 指令集增加了多达 80 条助记符指令。"
sidebar: mydoc_sidebar
permalink: intel_FPU.html
folder: cpus
---

## FPU for 8086/8088/80186 CPU

The 8087 was the first coprocessor that Intel made available for the 80x86 family. It was introduced in 1980 and therefore does not have full compatibility with the IEEE-754 standard for floating-point arithmetic (which was finally released in 1985). It complements the 8088 and 8086 CPUs and can also be interfaced to the 80188 and 80186 processors.
 
The 8087 is implemented using NMOS. It comes in a 40-pin CERDIP and is available in 5 MHz, 8 MHz, and 10 MHz versions. Power consumption is rated at max. 2400 mW.
 
A neat trick to enhance the processing power of the 8087 for computations that use only the basic arithmetic operations (+,-,*,/) and do not require high precision is to set the precision control to single-precision. This gives one a performance increase of up to 20%.
 
With the help of an additional chip, the 8087 can in theory be interfaced to an 80186 CPU. The 80186 was used in some PCs (e.g. from Philips, Siemens) in 1982/1983.

## FPU for 286 CPU

The 80287 is the original Intel coprocessor for the 80286 and was introduced in 1983. It uses the same execution unit as the 8087 and therefore has the same speed (sometimes slower due to additional overhead in CPU coprocessor communication).
As the 8087, it does not provide full compatibility with the IEEE-754 floating point standard. There are 6 MHz, 8 MHz, and 10 MHz versions. The 80287 has been replaced by its CMOS successor, the Intel 287XL, which has been introduced in 1990. It is based on the 387 core and therefore much faster than the 80287.
 
The 80287 was manufactured in NMOS technology, and is packaged in a 40-pin CERDIP. There are 6 MHz, 8 MHz, and 10 MHz versions. Power consumption can be estimated to be the same as that for the 8087, which is 2400 mW max.

## FPU for 386 CPU

The Intel 80387 was the first generation of coprocessors designed specifically for the Intel 80386 CPU. It was introduced in 1986, about one year after the 80386 was brought to market. Early 386 system were therefore equipped with both a 80287 and a 80387 socket. The 80386 does work with an 80287, but the numerical performance is hardly adequate for such a system.
The 80387 has itself since been superseded by the Intel 387DX introduced by a quiet change in 1989 (see below). You might find it when acquiring an older 386 machine, though. The old 80387 is about 20% slower than the newer 387DX.
 
The 80387 is packaged in a 68-pin ceramic PGA, and was manufactured using Intel's older 1.5 micron CHMOS III technology, giving it moderate power requirements. Power consumption at 16 MHz is max. 1250 mW (750 mW typical), at 20 MHz max. 1550 mW (950 mW typical), and at 25 MHz max. 1950 mW (1250 mW typical).

## FPU for 386SX CPU

The 387SX is the coprocessor for the Intel 386SX. It has all the features the Intel 80387 offers, including the ability for asynchronous operation of CPU and coprocessor. Due to the 16 bit data path between the CPU and the coprocessor, the 387SX is a bit slower than a 80387 operating at the same frequency.
In addition, the 387SX is based on the core of the original 80387, which executes instructions slower than the second generation 387DX. The 387SX comes in a 68-pin PLCC package and is available in 16, 20, 25 and 33 MHz versions.

## FPU for 486SX CPU

英特尔的 i487SX 是最后一个单独插入 486 主板上的 169 针 LIF 或 ZIF 插槽的（协）处理器。因为从 i486DX 开始，所有处理器都集成了协处理器。然而事实上，i487SX 是一个完整的 80486DX CPU。与 80486SX 相比，它的处理器和浮点单元都集成在同一个外壳中。在协处理器插座中使用时，SX 处理器只需使用控制引脚关闭即可。

关键数据：
 - 1,200,000 个晶体管
 - CHMOS 制造技术，配备 1.0 µm
 - 32 位 CPU（数据和地址总线均为 32 位）
 - 8 KB 直写式 L1 高速缓存
 - 支持高达 4 GB 的内存


## 我的收藏

### Intel TD8087-2

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 40-Pin CerDIP |
| 主频 | 8 MHz |
| 技术 | HMOS III 3 µm |
| 电压 | 5 V |
| 产地 | Philippines |
| 上市时间 | 1980 |
| 生产日期 |  |

```
温度范围 -40°C 至 +85°C
```

![Intel TD8087-2 正面](/images/cpus/Intel/Intel_TD8087-2_1.jpg)
![Intel TD8087-2 反面](/images/cpus/Intel/Intel_TD8087-2_2.jpg)

### Intel D80287-10

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 40-Pin CerDIP |
| 主频 | 10 MHz |
| 技术 | HMOS III 1.5 µm |
| 电压 | 5 V |
| 产地 | Malaysia |
| 上市时间 | 1980 |
| 生产日期 | 09/1989 |

![Intel D80287-10 正面](/images/cpus/Intel/Intel_D80287-10_1.jpg)
![Intel D80287-10 反面](/images/cpus/Intel/Intel_D80287-10_2.jpg)

---------

### Intel C80287-3

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 40-Pin CerDIP |
| 主频 | 3 MHz |
| 技术 | HMOS III 1.5 µm |
| 电压 | 5 V |
| 产地 | Malaysia |
| 上市时间 | 1983 |
| 生产日期 | 01/1984 |

![Intel C80287-3 正面](/images/cpus/Intel/Intel_C80287-3_1.jpg)
![Intel C80287-3 反面](/images/cpus/Intel/Intel_C80287-3_2.jpg)

---------

### Intel N80387SX (16-25MHz)

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 68-Pin PLCC |
| 主频 | 16-25 MHz |
| 数据总线 | 32 Bit |
| 地址总线 | 32 Bit |
| 一级缓存 | 8 KB |
| 技术 | CHMOS III 1.5 µm |
| 电压 | 5 V |
| 产地 |  |
| 上市时间 | 1986 |
| 生产日期 | 23/1992 |

![Intel N80387SX (16-25MHz) 正面](/images/cpus/Intel/Intel_N80387SX_(16-25MHz)_1.jpg)
![Intel N80387SX (16-25MHz) 反面](/images/cpus/Intel/Intel_N80387SX_(16-25MHz)_2.jpg)

---------

### Intel A80387DX 16-33

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 68-Pin CPGA |
| 主频 | 16/33 MHz |
| 数据总线 | 32 Bit |
| 地址总线 | 32 Bit |
| 一级缓存 | 8 KB |
| 技术 | CHMOS IV 1.0 µm |
| 电压 | 5 V |
| 产地 | Malaysia |
| 上市时间 | 1989 |
| 生产日期 | 03/1993 |

![Intel A80387DX 16-33 正面](/images/cpus/Intel/Intel_A80387DX_16-33_1.jpg)
![Intel A80387DX 16-33 反面](/images/cpus/Intel/Intel_A80387DX_16-33_2.jpg)

---------

### Intel A80487SX

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 169-Pin CPGA |
| 主频 | 16-33 MHz |
| 总线 | 32 Bit |
| 晶体管 | 1,200,222 |
| 技术 | CHMOS IV 1.0 µm |
| 电压 | 5 V |
| 步进 | SZ494 |
| 生产日期 |  |

![Intel A80487SX 正面](/images/cpus/Intel/Intel_A80487SX_1.jpg)
![Intel A80487SX 反面](/images/cpus/Intel/Intel_A80487SX_2.jpg)
![Intel A80487SX 侧面](/images/cpus/Intel/Intel_A80487SX_3.jpg)

{% include links.html %}
