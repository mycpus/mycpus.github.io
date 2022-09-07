---
title: AMD K5 Processor
tags: [AMD, K5]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Sep 3, 2022
summary: "AMD 的第一个内部开发产品 K5 处理器于 1996 年 3 月 27 日上市。"
sidebar: mydoc_sidebar
permalink: AMD_K5.html
folder: cpus
---

## 关于 AMD K5

AMD 的第一个内部开发产品 K5 处理器于 1996 年 3 月 27 日上市。这些处理器使用 Socket 5 作为主板接口，以后的版本使用 Socket 7。从 K5 开始，所有 AMD CPU 都集成了 FPU（协处理器）。SSA/5 内核在引入“K5”处理器时仍然存在 L1 缓存和分支预测中的错误。

关键数据：
- K5 超标量微架构
- 4,300,000 个晶体管
- 0.35 µm CMOS 制造技术
- 64 位数据总线
- 32 位数据宽度
- MMU（内存管理单元）
- 24 KB L1 高速缓存（16 KB 指令和 8 KB 数据高速缓存）
- 使用 P 或 PR 等级（性能相对于 Intel Pentium）
- 支持高达 4 GB 的内存

## Introduction

The K5 was developed by AMD to compete with Intel's Pentium microprocessor range. Introduced in 1996 almost 2 years late, AMD's problems were compounded by being unable to manufacture the chip at the clock speeds originally projected. In its favor, the K5 did at least offer good x86 compatibility. All models had 4.3 million transistors on-chip. No K5 supported MMX instructions. Internally ambitious, it was closer to a Pentium Pro than a Pentium, based upon an internal highly parallel RISC processor architecture with an x86 decoding front-end.
 
Improvements and differences to the Intel Pentium include:

* Five integer units, which could process instructions out of order, one floating point unit, compared to two units of the Pentium
* The branch target buffer was four times the size of the Pentium's, although not reportedly more accurate
* Register renaming improved parallel performance of the pipelines
* Speculative execution of instructions reduced pipeline stall
* The instruction cache is 16 Kb, double the Pentium
* The primary cache is 4-way set associative instead of the Pentium's 2-way

The K5 project represented an early chance for AMD to take technical leadership from Intel. Although the chip addressed the right design concepts, the actual engineering implementation was weak. The low clock rates were due in part to AMD's deficiencies as a manufacturing company in the period. However, having a branch prediction unit four times the size of the Pentium, yet reportedly not delivering superior performance, is an example of how the actual implementation fell short of the project goals. Additionally, while the K5's floating point performance was better than that of the Cyrix 6x86, it was weaker than that of the Pentium. Because it was late to market and did not meet performance expectations, the K5 never gained the acceptance among large computer manufacturers that the Am486 and AMD K6 enjoyed. Overall, the chip failed to deliver, both in terms of raw performance, and financially for AMD.


## 我的收藏

### AMD-K5-PR100ABQ

| 参数 | 数值 |
| ------ | ------ |
| CPU 类型 | 296-Pin CPGA |
| 核心 | SSA/5 |
| Socket | 5/7 |
| 主频 | 100 MHz |
| 外频 | 66 MHz |
| 倍频 | x 1.5(fix) |
| 总线宽度 | 64/32 Bit |
| Level1 Cache | 24 KB (16/8) |
| 晶体管 | 4,300,000 |
| 技术 | CHMOS 0.35 µm |
| 电压 | 3.525 Volt |
| 生产日期 | 40/1995 |
| 产地 | Malaysia |

```
  A = 296-Pin CPGA 设计
  B = 3.525 Volt
  Q = max. 60°C
  带散热器的 CPU
```

![AMD-K5-PR100ABQ 正面](/images/cpus/AMD/AMD-K5-PR100ABQ_1.jpg)
![AMD-K5-PR100ABQ 反面](/images/cpus/AMD/AMD-K5-PR100ABQ_2.jpg)

{% include links.html %}
