# 第10章 中断控制单元简介

本书使用的RA处理器R7FAM5系列使用的是ARM Cortex-M33内核，其中断机制是在Cortex-M33内核的中断机制基础上进行的外设中断扩展，因而RA处理器的中断处理需要遵循Cortex-M33内核的基本规则，包括但不限于中断优先级最高等级、中断优先级分类、中断向量的分配等。

在RA处理器中，中断控制归于一个叫“Interrupt Controller Unit(中断控制单元)”的模块管理控制，简称ICU。

ICU模块将异常向量中断控制器（NVIC）、DMA控制器（DMAC）和数据传输控制器（DTC）的事件/中断信号相互关联，使得这些控制器之间的中断信号可以互相传输利用。例如UART的数据发送关联到DTC控制器，可以使UART的发送buff为空这个状态去触发DTC的传输完成中断；又例如SPI的数据发送关联到DMAC控制器，使SPI的发送buff为空这个状态去触发DMA的发送完成中断，等等等等诸如此类。

ICU模块的框图如下图所示：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-10/image1.png)

将此框图分为3大模块：

① ICU控制的不可屏蔽中断；
② ICU模块的数据总线
③ ICU控制的可屏蔽中断；

ICU模块可以控制可屏蔽中断和不可屏蔽中断的具体细节如下表：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-10/image2.png)

在FSP中，表格里面的中断都可以配置且可以和用户自定义的中断函数相关联，本书不对本章进行独立配置讲解，将会从后文的实际外设驱动开发中来说明。