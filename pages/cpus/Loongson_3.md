---
title: 龙芯3号
tags: [Loongson]
keywords: Loongson, Godson, CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 3002, 4004, 4040, 8008, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Jul 26, 2024
summary: "龙芯3号系列为64位多核系列处理器, 主要面向桌面和服务器等领域。"
sidebar: cpu_sidebar
permalink: Loongson_3.html
folder: cpus
---

## 关于 龙芯3号

（英文名称Loongson-3）

中国第一个具有完全自主知识产权的四核CPU，龙芯3号处理器采用的是65nm（纳米）工艺，主频1GHz，晶体管数目4.25亿个， 单颗龙芯3A的最大功耗为15W，理论峰值为16Gflops，每颗CPU单瓦特能效比1.06Gflops/W是X86 CPU的2倍以上，达到了世界先进水平。龙芯3号多核CPU系列产品定位服务器和高性能计算机应用。

龙芯3A集成了四个64位超标量处理器核、4MB的二级内存、两个DDR2/3内存控制器、两个高性能HyperTransport控制器、一个PCI/PCIX控制器以及LPC、SPI、UART、GPIO等低速I/O控制器。龙芯3A的指令系统与MIPS64兼容并通过指令扩展支持X86二进制翻译。

继龙芯3A后，龙芯3号系列处理器的第二代产品——8核龙芯3B处理器已于2012年年初流片成功。

龙芯3B仍采用65纳米生产工艺，在单个芯片上集成8个增强型龙芯GS464处理器核，它可以与MIPS64兼容，并支持X86虚拟机和向量扩展。在1G主频下可实现128G flops的运算能力。在存储设计方面，龙芯3B最多可同时处理64个访问请求，可提供12.8GB/S的访存带宽。在I/O接口方面，龙芯3B实现2个16位的HyperTransport接口，可提供高达12.8GB/S的IO吞吐能力。八核龙芯3号的芯片对外接口与四核龙芯3号完全一致，两款芯片引脚完全兼容，可实现无缝更换。

我国首台采用自主设计的“龙芯3B”八核处理器的万亿次高性能计算机“KD－90”，由中国科学技术大学与深圳大学联合研制成功。高性能计算机KD－90采用单一机箱，集成了10颗八核龙芯3B处理器，理论峰值计算能力达到每秒1万亿次。


## 我的收藏

### 龙芯3A1000

| 参数 | 数值 |
| ------ | ------ |
| 适用类型 | 台式机 |
| CPU系列 | 龙芯3号系列 |
| 制作工艺 | 65纳米 |
| CPU主频 | 1GHz |
| 核心数量 | 四核心 |
| 一级缓存 | 64KB |
| 二级缓存 | 4MB |
| 热设计功耗(TDP) | 15W |
| 内存类型 | DDR2 800MHz，DDR3 800MHz |
| ECC内存支持 | 是 |
| 插槽类型 | BGA 1121 |
| 封装大小 | 40×40mm |
| 峰值运算速度 | 16GFlops |
| 微体系结构 | 四发射乱序执行 GS464 |
| 高速I/O | HT1.0*2 |
| 其它I/O| PCI控制器、LPC、SPI、UART、GPIO |

![LS3A1000E](/images/cpus/Loongson/LS3A1000E.jpg)

（龙芯3A1000）

![LS3AP1000CC](/images/cpus/Loongson/LS3AP1000CC.jpg)

（龙芯3A1000 LOGO限量款）

### 龙芯3A2000

| 参数 | 数值 |
| ------ | ------ |
| 适用类型 | 台式机 |
| CPU系列 | 龙芯3号系列 |
| 制作工艺 | 40纳米 |
| CPU主频 | 0.8GHz |
| 加速频率 | 1GHz |
| 核心数量 | 四核心 |
| 一级缓存 | 64KB |
| 二级缓存 | 256KB |
| 三级缓存 | 4MB |
| 热设计功耗(TDP) | 15W |
| 内存类型 | DDR2 1333MHz，DDR3 1333MHz |
| ECC内存支持 | 是 |
| 插槽类型 | BGA 1121 |
| 封装大小 | 40×40mm |
| 峰值运算速度 | 16GFlops |
| 微体系结构 | 四发射乱序执行GS464E |
| 高速I/O | HT3.0*2 |
| 其它I/O | PCI控制器、LPC、SPI、UART、GPIO |
| 其他技术 | 2个定点单元、2个向量单元和2个访存单元 |

![L3A02](/images/cpus/Loongson/L3A02.jpg)

（龙芯3A2000 试点项目，处于打开能用阶段）

![LS3A2000C](/images/cpus/Loongson/LS3A2000C.jpg)

（龙芯3A2000）

### 龙芯3A3000

| 参数 | 数值 |
| ------ | ------ |
| 适用类型 | 台式机 |
| CPU系列 | 龙芯3号系列 |
| 制作工艺 | 28纳米 |
| CPU主频 | 1.35GHz |
| 加速频率 | 1.5GHz |
| 核心数量 | 四核心 |
| 一级缓存 | 64KB |
| 二级缓存 | 256KB |
| 三级缓存 | 8MB |
| 热设计功耗(TDP) | 30W |
| 内存类型 | DDR2 1600MHz，DDR3 1600MHz |
| ECC内存支持 | 是 |
| 插槽类型 | BGA 1121 |
| 封装大小 | 40×40mm |
| 其它技术 | 峰值运算速度：24GFlops |
| 微体系结构 | 四发射乱序执行GS464E |
| 高速I/O | HT3.0*2 |
| 其它I/O | PCI控制器、LPC、SPI、UART、GPIO |
| 其他技术 | 2个定点单元、2个向量单元和2个访存单元 |

![LS3A3000D-LP](/images/cpus/Loongson/LS3A3000D-LP.jpg)
![LS3A3000D-LP](/images/cpus/Loongson/LS3A3000D-LP_2.jpg)

（龙芯3A3000 信创项目，第一次达到能用）

### 龙芯3A5000

| 参数 | 数值 |
| ------ | ------ |
| 适用类型 | 台式机 |
| CPU系列 | 龙芯3号系列 |
| CPU主频 | 2.5GHz |
| 核心数量 | 四核心 |
| 一级缓存 | 64KB |
| 二级缓存 | 256KB |
| 三级缓存 | 16MB |
| 热设计功耗(TDP) | 35W |
| 内存类型 | DDR4 3200MHz |
| ECC内存支持 | 是 |
| 峰值运算速度 | 160GFlops |
| 处理器核 | 64位超标量处理器核GS464V；支持LoongArchR指令系统；支持128/256位向量指令；四发射乱序执行 |
| 高速I/O | 2个HyperTransport 3.0控制器；支持多处理器数据一致性互连（CC-NUMA） |
| 其它I/O | 1个SPI、1个UART、2个I2C、16个GPIO接口 |
| 功耗管理 | 支持主要模块时钟动态关闭，支持主要时钟域动态变频，支持主电压域动态调压 |

![LS3A5000](/images/cpus/Loongson/LS3A5000.jpg)
![LS3A5000](/images/cpus/Loongson/LS3A5000_2.jpg)

（龙芯3A5000 第一款龙架构高性能CPU）

### 龙芯3B1000

![LS3B1000CB](/images/cpus/Loongson/LS3B1000CB.jpg)

### 龙芯3B3000

![LS3B3000](/images/cpus/Loongson/LS3B3000.jpg)

{% include links.html %}
