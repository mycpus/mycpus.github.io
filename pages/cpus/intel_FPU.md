---
title: Intel FPU
tags: [Intel, FPU]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Aug 31, 2022
summary: ""
sidebar: mydoc_sidebar
permalink: intel_FPU.html
folder: cpus
---

## FPU for 286 CPU

The 80287 is the original Intel coprocessor for the 80286 and was introduced in 1983. It uses the same execution unit as the 8087 and therefore has the same speed (sometimes slower due to additional overhead in CPU coprocessor communication).
As the 8087, it does not provide full compatibility with the IEEE-754 floating point standard. There are 6 MHz, 8 MHz, and 10 MHz versions. The 80287 has been replaced by its CMOS successor, the Intel 287XL, which has been introduced in 1990. It is based on the 387 core and therefore much faster than the 80287.
 
The 80287 was manufactured in NMOS technology, and is packaged in a 40-pin CERDIP. There are 6 MHz, 8 MHz, and 10 MHz versions. Power consumption can be estimated to be the same as that for the 8087, which is 2400 mW max.

## FPU for 386 CPU

The Intel 80387 was the first generation of coprocessors designed specifically for the Intel 80386 CPU. It was introduced in 1986, about one year after the 80386 was brought to market. Early 386 system were therefore equipped with both a 80287 and a 80387 socket. The 80386 does work with an 80287, but the numerical performance is hardly adequate for such a system.
The 80387 has itself since been superseded by the Intel 387DX introduced by a quiet change in 1989 (see below). You might find it when acquiring an older 386 machine, though. The old 80387 is about 20% slower than the newer 387DX.
 
The 80387 is packaged in a 68-pin ceramic PGA, and was manufactured using Intel's older 1.5 micron CHMOS III technology, giving it moderate power requirements. Power consumption at 16 MHz is max. 1250 mW (750 mW typical), at 20 MHz max. 1550 mW (950 mW typical), and at 25 MHz max. 1950 mW (1250 mW typical).

## 我的收藏

### Intel D80287-10

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 40-Pin CerDIP |
| CPU 时钟 | 10 MHz |
| 技术 | HMOS III 1.5 µm |
| 电压 | 5 V |
| 产地 | Malaysia |
| 上市时间 | 1980 |
| 生产日期 | 09/1989 |

![Intel D80287-10 正面](/images/cpus/Intel/Intel_D80287-10_1.jpg)
![Intel D80287-10 反面](/images/cpus/Intel/Intel_D80287-10_2.jpg)

### Intel C80287-3

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 40-Pin CerDIP |
| CPU 时钟 | 3 MHz |
| 技术 | HMOS III 1.5 µm |
| 电压 | 5 V |
| 产地 | Malaysia |
| 上市时间 | 1983 |
| 生产日期 | 01/1984 |

![Intel C80287-3 正面](/images/cpus/Intel/Intel_C80287-3_1.jpg)
![Intel C80287-3 反面](/images/cpus/Intel/Intel_C80287-3_2.jpg)

### Intel N80387SX (16-25MHz)

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 68-Pin PLCC |
| CPU 时钟 | 16-25 MHz |
| 数据总线 | 32 Bit |
| 地址总线 | 32 Bit |
| 一级缓存 | 8 KB |
| 技术 | CHMOS III 1.5 µm |
| 电压 | 5 V |
| 产地 |  |
| 上市时间 | 1986 |
| 生产日期 | 23/1992 |

### Intel A80387DX 16-33

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 68-Pin CPGA |
| CPU 时钟 | 16/33 MHz |
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

{% include links.html %}
