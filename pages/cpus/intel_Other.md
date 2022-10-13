---
title: Intel Processor
tags: [Intel]
keywords: CPU, cpu, processor, qualification, information, pictures, core, frequency, chip packaging, packaging, cpu info, x86, collection, amd, cyrix, harris, ibm, idt, iit, intel, motorola, nec, sgs, sgs-thomson, siemens, ST, signetics, mhs, ti, texas instruments, ulsi, umc, weitek, zilog, 808x, 8085, 8088, 8086, 80188, 80186, 80286, 286, 80386, 386, i386, Am386, 386sx, 386dx, 486, i486, 586, 486sx, 486dx, overdrive, 487, pentium, 586, 5x86, 386dlc, 386slc, 486dx2, mmx, ppro, pentium-pro, pro, athlon, duron, z80, dirk oppelt, dirk, oppelt, engineering, sample, samples
last_updated: Oct 13, 2022
summary: ""
sidebar: cpu_sidebar
permalink: intel_Other.html
folder: cpus
---

## 我的收藏

### Intel A82385-20

Cache controller is a chip, such as the **Intel 82385**, that manages the retrieval, storage, and delivery of data to and from cache memory or a hard disk. When data or instructions are requested by the central processing unit (CPU), the intercept the request and handles the delivery from random access memory (RAM).

The controller then determines where in the cache to store a copy of the just-delivered data, when to fetch data or code from adjacent addresses in RAM in case it is needed next, wherein the cache to store this new data, and which data to discard if the cache is full. The also keeps an up-to-date table of the addresses of everything it is holding.

#### Technipages Explains Cache Controller

The cache controller is equipment that duplicates code or data from primary memory to cache memory naturally. It plays out this assignment consequently to hide cache activity from the product it bolsters. Consequently, a similar application programming can run unaltered on frameworks with and without a cache.

The cache controller captures read and compose memory demands before passing them on to the memory controller. It forms a solicitation by isolating the location of the solicitation into three fields, the label field, the set index field, and the data index field

To start with, the controller utilizes the set index part of the location to find the cache line inside the cache memory that may hold the mentioned code or data. This cache line contains the cache-tag and status bits, which the controller uses to decide the genuine data put away there.

The controller at that point checks the legitimate piece to decide whether the cache line is dynamic, and looks at the cache-tag to the label field of the mentioned location. If both the status check and examination succeed, it is a cache hit. If either the status check or examination comes up short, it is a cache miss.

#### Common Uses of Cache Controller

 - One of the benefits of the cache controller is that it helps to increase the processing speed of the hard disk
 - The RapidCad come very close to a speed of 486 without cache controller
 - 64 Vikings CPUs use a symmetrical connection of high speed adopted in the cache controller

#### Common Misuses of Cache Controller

 - The cache controller doesn’t improve the speed of the computer processor

![Intel A82385-20 正面](/images/cpus/Intel/Intel_A82385-20_1.jpg)
![Intel A82385-20 反面](/images/cpus/Intel/Intel_A82385-20_2.jpg)

{% include links.html %}
