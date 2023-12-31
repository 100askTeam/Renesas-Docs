# 第16章 CAN 协议

本章目标

- 了解 CAN 协议的基本常识以及和 CAN-FD 的差异；
- 了解 CAN-FD 协议的帧格式；

## 16.1 CAN 协议概要

瑞萨对于CAN协议的入门写了一本很好的入门书，是面向CAN总线初学者。对于CAN是什么、CAN的特征、标准规格下的位置分布等、CAN的概要及CAN的协议都进行了说明。

CAN是Controller Area Network 的缩写，是ISO国际标准化的串行通信协议。在当前的汽车产业中，出于对安全性、舒适性、方便性、低公害、低成本的要求，各种各样的电子控制系统被开发了出来。由于这些系统之间通信所用的数据类型及对可靠性的要求不尽相同，由多条总线构成的情况很多，线束的数量也随之增加。为适应“减少线束的数量”、“通过多个LAN，进行大量数据的高速通信”的需要，1986年德国电气商博世公司开发出面向汽车的CAN通信协议。此后，CAN通过ISO11898 及ISO11519进行了标准化，现在在欧洲已是汽车网络的标准协议。

现在，CAN的高性能和可靠性已被认同，并被广泛地应用于工业自动化、船舶、医疗设备、工业设备等方面。

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-16/image1.png)

## 16.2 CAN FD 简介

CAN协议自1986年问世以来就很流行：如今几乎任何可移动的机器都使用CAN，无论是汽车、卡车、轮船、飞机还是机器人。但是随着现代科技的兴起，对“传统”的CAN协议（ISO11898-1:2015中使用的官方术语）的要求越来越高：
- 通常整车CAN网络负载大大超过推荐值(50％)
- CAN消息中只有大约40-50％的带宽用于实际数据传输
- 总线速率通常被限制在1Mbit/s，在实际使用中的速度更低，大多数情况下为500Kbit/s；在J1939网络中使用250Kbit/s
- 最大总线速度受响应机制限制，即错误帧，ACK等
- ACK延迟 = 收发器延迟+总线传播延迟

基于上述缺点，最直接的办法就是使用下一代总线FlexRay，这样可以一劳永逸的解决这一难题。但如果将原来所有的CAN节点全部升级为FlexRay节点，带来巨大的硬件开销，软件通讯移植开发，以及漫长的开发周期。

具体而言，传统CAN的开销很大（>50%），因为每个CAN数据帧只能包含8个数据字节。此外，网络速度限制为1Mbit/s，从而限制了数据生成功能的实现。CAN FD解决了这些问题，使其具有前瞻性。

为了缩小CAN网络(Max:1MBit/s)与FlexRay(Max:10MBit/s)网络的带宽差距，BOSCH推出了CAN FD方案。CAN FD(CAN with Flexible Data rate)继承了CAN总线的主要特性。

<img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-16/image2.png" style="zoom: 33%;" />

## 16.3 CAN-FD 协议解析

### 16.3.1 CAN-FD 的优势

CAN 总线采用双线串行通讯协议，基于非破坏性仲裁技术，分布式实时控制，可靠的错误处理和检测机制使 CAN 总线有很高的安全性，但 CAN 总线带宽和数据场长度却受到制约。CAN FD 总线弥补了 CAN 总线带宽和数据场长度的制约，CAN FD 总线与 CAN 总线的区别主要表现在：

1. 可变速率

CAN FD 采用了两种位速率：从控制场中的 BRS 位到 ACK 场之前（含 CRC 分界符）为可变速率，其余部分为原 CAN 总线用的速率。两种速率各有一套位时间定义寄存器，它们除了采用不同的位时间单位 TQ 外，位时间各段的分配比例也可不同。

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-16/image3.png)

2. 新的数据场长度

CAN FD 对数据场的长度作了很大的扩充，DLC 最大支持 64 个字节，在 DLC 小于等于 8时与原 CAN 总线是一样的，大于 8 时有一个非线性的增长，所以最大的数据场长度可达 64字节。

### 16.3.2 CAN-FD 帧格式

与普通 CAN 报文相同，CAN FD 报文一共具有，帧起始 SOF，仲裁段，控制段，数据域，CRC 域，ACK 域，帧结束，共七个部分组成。

<img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-16/image4.png" style="zoom: 67%;" />

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-16/image5.png)

CAN与CANFD使用相同的SOF标志位来标志报文的起始。帧起始由单个显性位构成，标志着报文的开始，并在总线上起着同步作用。

1. CAN-FD的仲裁域

与传统CAN相比，CAN FD取消了对远程帧的支持，用RRS位替换了RTR位，为常显性。IDE位仍为标准帧和扩展帧标志位，若标准帧与扩展帧具有相同的前11位ID，那么标准帧将会由于IDE位为0，优先获得总线。

- RTR(Remote Transmission Request Bit)：远程发送请求位，RER位在数据帧里必须是显性，而在远程帧里为隐性。
- RRS(Remote Request Substitution)：远程请求替换位，即传统CAN中的RTR位，CAN FD中为常显性。

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-16/image6.png)

2. CAN-FD的控制域

控制域中CANFD与CAN有着相同的IDE，res，DLC位。同时增加了三个控制bit位，FDF、BRS、ESI。
- FDF(Flexible Data Rate Format)：原CAN数据帧中的保留位r。FDF常为隐性，表示CAN FD报文。
- BRS( Bit Rate Switch)：位速率转换开关，当BRS为显性位时数据段的位速率与仲裁段的位速率一致，当BRS为隐性位时数据段的位速率高于仲裁段的位速率。
- ESI(Error State Indicator)：错误状态指示，主动错误时发送显性位，被动错误时发送隐性位。
- DLC数据域长度位，CAN FD同样使用4bit来确认报文数据场的长度。

<img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-16/image7.png" style="zoom:67%;" />

3. AN-FD的数据域

CAN FD不仅能支持传统的0-8字节报文,同时最大还能支持12,16,20,24,32,48,64字节。