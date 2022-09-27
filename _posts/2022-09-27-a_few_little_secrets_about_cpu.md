---
title:  "几个关于CPU你所不知道的小秘密"
categories: history
permalink: a_few_little_secrets_about_cpu.html
tags: [blog]
summary: ""
---

## 温度监测的学问

![](/images/blogs/CPU_temperature_detection_1.jpg)

▲ 事实上在每一代处理器上市前，厂商自己都会经过复杂多样的温度测算，以保障产品正式上市后不至于“温度失控”。以英特尔为例，英特尔每一代处理器都会有专门的温度测试样品“THERMAL TEST”，它们为温度监控而生（图中是一颗LGA2011至强处理器）。

具体操作就是在CPU表面划上一道凹痕，再在里面埋上温控探头，以保证尽可能准确地读取到CPU表面温度信息。底部的四个金手指可以向外传递样品的实时运行状态信息。

![](/images/blogs/CPU_temperature_detection_2.jpg)

▲ 这种被划了一道的测试版CPU并不罕见，不用担心，只是顶盖被划而已，核心在顶盖下面完好无损，顺便，你也知道了CPU的顶盖其实是纯铜材质的（图中是一颗当年被取消发售的顶级赛扬E3900）。


## 核心屏蔽是一门艺术

第十代英特尔处理器有2核、4核、6核、8核、10核这5种类型，分别对应奔腾赛扬、i3、i5、i7、i9。英特尔难道会傻乎乎地开5条线分别生产这5种核心类型的产品吗？当然不会！只有2条生产线！

![](/images/blogs/intel_10Gen_cpu_source.jpg)

▲ 第十代其实就只有2条生产线，一条生产6核12线程的小核心，另一条生产10核20线程的大核心，其余的核心类型都由这两种屏蔽而来。这就是为什么现在网上在传买10代i5是“摸奖”式购物，因为你既可能买到原生6核12线程的i5-10400，又可能买到由10核20线程屏蔽得到的i5-10400。相比较而言，所有采用大核心的处理器均为厚基板+钎焊导热，而所有小核心的产品均为薄基板+硅脂导热，自然大核心有加成优势。

那么英特尔的核心屏蔽像网上说的那样随意屏蔽残次核心而来的吗？

非也！

![](/images/blogs/intel_xeon_cpu_different_slice.jpg)

▲ 为了保障性能的稳定性以及尽可能减少总线数据交互延迟等问题，英特尔的测试样品会有奇特的屏蔽对照参考样品。上图两颗至强处理器均为8核屏蔽至6核的型号，但是最后一行告诉了你一个非常有趣的事实：

★ 6C TOP SLICE：上部6核切片样本；

★ 6C Bottom SLICE：下部6核切片样本。

显然，英特尔会选择两种当中表现更优的切片屏蔽方式，因为这两种切片方式中，核心与内存控制器、PCI-E控制器、总线等的距离是不同的。

![](/images/blogs/intel_cometlake_native_10_core.jpg)

▲ Cometlake原生10核心。

![](/images/blogs/intel_cpu_native_core_slice.jpg)

▲ 最近三代常见核心构造，核心越来越长，环形总线也越拉越长。虽然环形总线可以避免明显的延迟问题，但因为要兼顾诸多控制器的效率，所以英特尔自然会考虑是切掉左边2~4个核心，还是切掉右边2~4个核心这个问题。


## CPU的转接大法

每一个时代的CPU用户都会遇到换接口的烦恼，烦恼背后也都有对应的解决办法。

![](/images/blogs/socket370_to_slot1_card.jpg)

▲ 采用Slot 1接口的奔腾II用户想要升级最新款高频率的Socket 370接口奔腾III或者新款赛扬该怎么办？以前主板如此昂贵，更换平台代价太大！于是乎，市面上就泛滥起了Socket 370转Slot 1的转接卡。这类转接卡存世量极大，闲鱼淘宝都非常常见。

![](/images/blogs/two_cpu_convert_card.jpg)

▲ 甚至还有厂商推出了双CPU同时转接的高级转接卡。

![](/images/blogs/pentium_pro_socket8_to_slot1_or_slot2_card.jpg)

▲ 服务器专用的大体格奔腾PRO处理器（Socket 8）也可以转接到Slot 1或Slot II接口使用。

![](/images/blogs/socket478_to_socket423_card.jpg)

▲ 由于第一代奔腾4采用的Socket 423接口昙花一现，无法与后面的Socket 478兼容，所以厂商发明了Socket 478转Socket 423的转接卡。

![](/images/blogs/mobile_cpu_to_desktop_cpu.jpg)

▲ 不仅如此，厂商还发明了笔记本CPU转台式机CPU的转接卡，这为后面华强北魔改移动版CPU至台式机平台奠定了基础。

![](/images/blogs/socket478_to_lga775_card.jpg)

▲ Socket 478转LGA 775。

![](/images/blogs/bga_to_lga1150_card.jpg)

▲ 虽然从LGA1156接口以来，再也没有厂商明目张胆地生产一些隔代CPU专用转接卡，但魔改的道路不会停歇，当前每一代移动版处理器都有被魔改变成台式机处理器的案例，并且在淘宝上很容易找到相关产品。目前最高级的魔改产品应该是第七代的i7-7820HK，转接后可以用在100/200/300系列主板上（BIOS要修改），价格比正常台式机处理器价格低一半左右。

---------

转自：https://zhuanlan.zhihu.com/p/146519645

{% include links.html %}
