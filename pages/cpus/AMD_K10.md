---
title: AMD K10 Processor
tags: [AMD, K10]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Aug 10, 2023
summary: "随着2007 年 11 月 AMD K10 微架构的推出，K8 时代的终结宣告了结束。"
sidebar: cpu_sidebar
permalink: AMD_K10.html
folder: cpus
---

## 关于 AMD K10

随着 2007 年 11 月 AMD K10 微架构的推出，K8 时代的终结宣告了结束。K10 一代是为多核处理器重新设计的，它基于已经使用了很长时间的 AMD64 微架构。第一个家族成员 Phenom X4 中装有四个内核。每个内核都可以独占访问自己的 128 KB L1 缓存和 512 KB L2 缓存。Phenom 具有双通道 DDR2 内存控制器，并支持高达 1066MHz 的 DDR2 SDRAM 。然而，最重要的创新之一是所有内核共享 2 MB 的 L3 缓存。
	
关键数据：
 - 65 nm SOI 制造工艺，来自“AMD 下一代处理器技术” 45 nm SOI 制造工艺
 - HyperTransport 3.0 支持
 - 处理器内核和 L2 缓存之间的数据连接从 128 位扩展到256 位
 - 所有处理器内核都可以访问共享的 L3 高速缓存
 - 引入 SSE4a
     - 允许每个时钟周期和内核读取两条 128 位 SSE 指令
     - 每个时钟周期最多可以进行四个双精度浮点运算
     - 有新的 SSE4a- 命令
 - 使用独立的内存控制器可以实现更多 DRAM 库
 - 改进的翻译后备缓冲区
     - TLB 支持 1 GB 页面
     - 每个处理器内核使用 48 位寻址内存，而 K8 为 40 位
     - 可寻址高达 128 TB 的内存区域
 - 高级分支预测，具有 512 个条目的扩展分支预测和返回堆栈加倍
 - 添加了边带堆栈优化器，并对 POP/PUSH 操作执行堆栈优化

 ```
第一代 K10 处理器：
  Phenom X4 和 X3
  Athlon X2
  Opteron
  Turion X2
 ```

 2009 年 1 月，采用 K10 微架构的第二代处理器开始销售。首批 Phenom II 处理器仍短暂采用 AM2+ 插槽，因此它们必须与 DDR2-SDRAM 配合使用。不过，除了双通道 DDR2 内存控制器，第 2 代 K10 处理器还有更快的双通道内存控制器，用于 DDR3-SDRAM。 因此，随着 2009 年 2 月 AM3 插座的引入，Phenom II、Athlon II、Opteron、Sempron 和 Turion II 处理器可以将其计算数据存储在内存中。

 ```
第二代 K10 处理器：
  Phenom II X6、X4 和 X3
  Athlon II X4、X3 和 X2
  Opteron
  Sempron
  Turion II
 ```

## Introduction

AMD K10 family is the latest generation of AMD x86 microprocessors. The first nine microprocessors from this family, quad-core Third Generation Opterons, were introduced on September 10 2007. 2 months after that AMD released first desktop Phenom quad-core microprocessors, and the first triple-core Phenom X3 CPUs were released in March 2008. At the end of 2008 AMD launched middle-class K10-based processors, that received the same name as high-performance CPUs built on K8 micro-architecture - Athlon X2. In 2009 AMD launched newer generation of middle-class and high-performance desktop processors, branded Athlon II and Phenom II respectively. At this moment (March 2010) K10 families cover three main market segments - desktop, mobile and server, and are divided into three main groups in accordance with processors' price and performance:
 * Budget processors - Sempron, Athlon II, and Sempron Mobile.
 * Mid-class microprocessors - Athlon X2, Athlon II X2 / X3 / X4, and Athlon II Dual-Core Mobile.
 * High-performance families - Phenom X3 / X4, Phenom II X2 / X3 / X4 / X6, Turion II Dual-Core Mobile, and Turion II Ultra Dual-Core Mobile.
 * Server families: Third-Generation Opteron, Six-Core Opteron and Opteron 6100 series.

K10 microprocessors include many performance improvements. The most important ones are listed below:
 * Contain up to 6 cores per die, or up to 12 cores per CPU.
 * Integrate large level 3 cache shared between all cores.
 * Faster HyperTransport link.
 * Improved integrated memory controller which may be configured as dual-channel controller, or as two single channel controllers. Memory controller in the latest generation of desktop and server processors supports DDR3 memory.
 * Recent generations of K10 families are built on more modern 0.045 process, which allows better CPU frequency scaling.
 * The width of AMD Floating Point unit was increased to 128 bits. When combined with other core improvements (ability to load two 128-bit values per cycle, faster instruction decoding) this allows the CPU to process up to two 128-bit SSE instructions per cycle.
 * Enhanced branch prediction and out-of order execution.

Beside performance improvements, the families incorporate enhanced power management features. The CPUs can dynamically adjust frequency of individual cores depending on their load, change voltage of integrated memory independently from core voltage of CPU cores, and include other power-saving features.


## 我的收藏

## AMD Phenom X3 8650

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 940-Pin LOµPGA |
| 核心 | Toliman |
| Revision | DR-B3 |
| Socket | AM2+ (AM2) |
| 主频 | 2300 MHz |
| 系统时钟 | 1800 MHz HT |
| 总线宽度 | 64 Bit |
| 一级缓存 | 3 x 128 KB (64/64) |
| 二级缓存 | 3 x 512 KB |
| 三级缓存 | 2048 KB |
| 核心 | 3 |
| 线程 | 3 |
| 晶体管 | 450,000,000 |
| 技术 | 65 nm SOI |
| 生产日期 | 23/2009 |

```
  OPN: HD8650WCJ3BGH
```

![AMD Phenom X3 8650 正面](/images/cpus/AMD/AMD_Phenom_X3_8650_1.jpg)
![AMD Phenom X3 8650 反面](/images/cpus/AMD/AMD_Phenom_X3_8650_2.jpg)

---------

## AMD Phenom X4 9650

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 940-Pin LOµPGA |
| 核心 | Agena |
| Revision | DR-B3 |
| Socket | AM2+ (AM2) |
| 主频 | 2300 MHz |
| 系统时钟 | 1800 MHz HT |
| 总线宽度 | 64 Bit |
| 一级缓存 | 4 x 128 KB (64/64) |
| 二级缓存 | 4 x 512 KB |
| 三级缓存 | 2048 KB |
| 核心 | 4 |
| 线程 | 4 |
| 晶体管 | 450,000,000 |
| 技术 | 65 nm SOI |
| 生产日期 | 21/2008 |

```
  OPN: HD9650WCJ4BGH
```

![AMD Phenom X4 9650 正面](/images/cpus/AMD/AMD_Phenom_X4_9650_1.jpg)
![AMD Phenom X4 9650 反面](/images/cpus/AMD/AMD_Phenom_X4_9650_2.jpg)

---------

### AMD Mobile Athlon II P320

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 638-Pin LOµPGA |
| 核心 | Champlain |
| 步进 | NBALB BA |
| Socket | S1g4 |
| 主频 | 2100 MHz |
| 系统时钟 | 1600 MHz HT |
| 总线宽度 | 64 Bit |
| 一级缓存 | 2 x 128 KB (64/64) |
| 二级缓存 | 2 x 512 KB |
| 核心 | 2 |
| 线程 | 2 |
| 晶体管 | 234,000,000 |
| 技术 | 45 nm SOI |
| 生产日期 | 05/2009 |

```
  OPN: AMP320SGR22GM
```

![AMD Mobile Athlon II P320 正面](/images/cpus/AMD/AMD_Mobile_Athlon_II_P320_1.jpg)
![AMD Mobile Athlon II P320 反面](/images/cpus/AMD/AMD_Mobile_Athlon_II_P320_2.jpg)

---------

### AMD Athlon II X2 255

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 938-Pin OµPGA |
| 核心 | Regor |
| 步进 | WAEKC AE |
| Socket | AM3/AM2+ |
| 主频 | 3100 MHz |
| 系统时钟 | 2000 MHz HT |
| 总线宽度 | 64 Bit |
| 一级缓存 | 2 x 128 KB (64/64) |
| 二级缓存 | 2 x 1024 KB |
| 核心 | 2 |
| 线程 | 2 |
| 晶体管 | 234,000,000 |
| 技术 | 45 nm SOI |
| 生产日期 | 17/2012 |

```
  OPN: ADX255OCK23GM
```

![AMD Athlon II X2 255 正面](/images/cpus/AMD/AMD_Athlon_II_X2_255_1.jpg)
![AMD Athlon II X2 255 反面](/images/cpus/AMD/AMD_Athlon_II_X2_255_2.jpg)

---------

### AMD Mobile A4-3300M

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 722-pin mPGA FS1 |
| 核心 | Llano |
| Socket | Socket FS1(905针) |
| 主频 | 1.9 GHz |
| 睿频 | 2.5 GHz |
| 一级缓存 | 128 KB |
| 二级缓存 | 2 x 1024 KB |
| 核心 | 2 |
| 线程 | 2 |
| GPU | HD 6480G |
| 流处理器 | 240 |
| GPU 频率 | 444 MHz |
| 3D API | DirectX 11 |
| TDP | 35 W |
| 支持内存 | DDR3(L)-1333 |
| 晶体管 | 1,178,000,000 |
| 技术 | 32 nm SOI |
| 上市时间 | 14.06.2011 |
| 生产日期 | 34/2013 |

```
  OPN: AM3300DDX23GX
```

![AMD A4-3300M 正面](/images/cpus/AMD/AMD_A4-3300M_1.jpg)
![AMD A4-3300M 反面](/images/cpus/AMD/AMD_A4-3300M_2.jpg)

---------

### AMD Opteron 6281

| 参数 | 数值 |
| ------ | ------ |
| 核心 | Bulldozer |
| Socket | SocketG34 |
| 主频 | 2.5 GHz |
| 一级缓存 | 768 KB |
| 二级缓存 | 16 MB |
| 三级缓存 | 8 MB |
| 核心 | 16 |
| 线程 | 16 |
| TDP | 130 W |
| 支持内存 | DDR3-2000 |
| 技术 | 32 nm |
| 上市时间 | Q1/2019 |
| 生产日期 | 12/2012 |

```
  OPN: OS6281YJTGGGU
```

![AMD Opteron 6281 正面](/images/cpus/AMD/AMD_Opteron_6281_1.jpg)
![AMD Opteron 6281 反面](/images/cpus/AMD/AMD_Opteron_6281_2.jpg)


{% include links.html %}
