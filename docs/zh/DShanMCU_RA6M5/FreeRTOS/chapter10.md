# 第10章 队列(queue)

队列(queue)可以用于"任务到任务"、"任务到中断"、"中断到任务"之间传输信息。

本章涉及如下内容：

- 怎么创建、清除、删除队列
- 队列中消息如何保存
- 怎么向队列发送数据、怎么从队列读取数据、怎么覆盖队列的数据
- 在队列上阻塞是什么意思
- 怎么在多个队列上阻塞
- 读写队列时如何影响任务的优先级

## 10.1 队列的特性

### 10.1.1 内部机制

队列的简化操作如下图所示，从此图可知：

① 队列可以包含若干个数据：队列中有若干项，这被称为"长度"(length)
② 每项的数据大小固定
③ 创建队列时就要指定长度（有多少项）、每项数据大小
④ 数据的操作采用先进先出的方法(FIFO，First In First Out)：写数据时放到尾部，读数据时从头部读
⑤ 也可以把新数据写到队列头部，甚至覆盖头部数据

![](https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-10/image1.png)

队列是FIFO，这个FIFO如何实现呢？它的本质是一个环形缓冲区。

创建队列时，假设队列长度为8，里面每项大小为4（存放int类型数据），模型如下：

![](https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-10/image2.png)

队列分为2部分：队列结构体、数据buffer。队列结构体里记录头当前读写位置r、w，刚创建队列时r、w都等于0。

往队列里写入一个数据时，往buf[w]处写入数据，然后调整w指向下一个位置，模型如下：

![](https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-10/image3.png)

再往队列里写入第二个数据时，往buf[w]处写入数据，然后调整w指向下一个位置，模型如下：

![](https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-10/image4.png)

从队列里读出第1个数据时，从buf[r]处读，即读到buf[0]，然后调整r指向下一个位置，模型如下：

![](https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-10/image5.png)

当r、w从7变为8时，超出了数据buffer的范围，就会从0开始：这就是环形缓冲区的含义。

假设队列全被写满了，这时任务A还想写入数据：这不会成功，它可以阻塞；任务B也想写入数据，它也可以阻塞；任务A、B就被放入队列的Send_list链表。假设任务B的优先级比任务A高，虽然任务A先阻塞，但是任务B也会排在前面。模型如下图所示：

![](https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-10/image6.png)

如果任务C来读队列，读出一个数据后空出了一个位置，它会把Send_list上第1个任务（即任务B）唤醒，任务B就可以继续运行往队列里写入数据了。

假设队列全是空的，这时任务A想读出数据：这不会成功，它可以阻塞；任务B也想读出数据，它也可以阻塞；任务A、B就被放入队列的Recv_list链表。假设任务B的优先级比任务A高，虽然任务A先阻塞，但是任务B也会排在前面。模型如下图所示：

![](https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-10/image7.png)

如果任务C来写队列，写入一个数据，它会把Recv_list上第1个任务（即任务B）唤醒，任务B就可以继续运行从队列里读出数据了。

### 10.1.2 传输数据的两种方法

使用队列传输数据时有两种方法：

① 拷贝：把数据、把变量的值复制进队列里
② 引用：把数据、把变量的地址复制进队列里

FreeRTOS使用拷贝值的方法，这更简单：
① 局部变量的值可以发送到队列中，后续即使函数退出、局部变量被回收，也不会影响队列中的数据
② 无需分配buffer来保存数据，队列中有buffer
③ 局部变量可以马上再次使用
④ 发送任务、接收任务解耦：接收任务不需要知道这数据是谁的、也不需要发送任务来释放数据
⑤ 如果数据实在太大，你还是可以使用队列传输它的地址

队列的空间由FreeRTOS内核分配，无需任务操心

### 10.1.3 队列的阻塞访问

只要知道队列的句柄，谁都可以读、写该队列：任务、ISR都可以读、写队列；可以多个任务读写队列。

任务读写队列时，如果读写不成功，可以直接返回错误值，也可以阻塞一段时间。口语化地说，就是任务A读写条件不满足时，可以定个闹钟再阻塞：其他任务写、读队列时，可以唤醒任务A；或者时间到后，任务A因为超时而被唤醒。

既然读取队列的任务个数没有限制，那么当多个任务读取空队列时，这些任务都会进入阻塞状态：有多个任务在等待同一个队列的数据。当队列中有数据时，哪个任务会被唤醒？

① 优先级最高的任务
② 如果大家的优先级相同，那等待时间最久的任务会进入就绪态

既然写队列的任务个数没有限制，那么当多个任务写"满队列"时，这些任务都会进入阻塞状态：有多个任务在等待同一个队列的空间。当队列中有空间时，哪个任务会被唤醒？

① 优先级最高的任务
② 如果大家的优先级相同，那等待时间最久的任务会进入就绪态

## 10.2 队列函数

使用队列的流程：创建队列、写队列、读队列、删除队列。

### 10.2.1创建

队列的创建有两种方法：动态分配内存、静态分配内存，

- 动态分配内存：xQueueCreate，队列的内存在函数内部动态分配
函数原型如下：

```C
QueueHandle_t xQueueCreate( UBaseType_t uxQueueLength, UBaseType_t uxItemSize );
```

| **参数**      | **说明**                                                     |
| ------------- | ------------------------------------------------------------ |
| uxQueueLength | 队列长度，最多能存放多少个数据(item)                         |
| uxItemSize    | 每个数据(item)的大小：以字节为单位                           |
| 返回值        | 非0：成功，返回句柄，以后使用句柄来操作队列 NULL：失败，因为内存不足 |

- 静态分配内存：xQueueCreateStatic，队列的内存要事先分配好

函数原型如下：

```C
QueueHandle_t xQueueCreateStatic(
                           UBaseType_t uxQueueLength,
                           UBaseType_t uxItemSize,
                           uint8_t *pucQueueStorageBuffer,
                           StaticQueue_t *pxQueueBuffer
                       );
```

| **参数**              | **说明**                                                     |
| --------------------- | ------------------------------------------------------------ |
| uxQueueLength         | 队列长度，最多能存放多少个数据(item)                         |
| uxItemSize            | 每个数据(item)的大小：以字节为单位                           |
| pucQueueStorageBuffer | 如果uxItemSize非0，pucQueueStorageBuffer必须指向一个uint8_t数组， 此数组大小至少为"uxQueueLength * uxItemSize" |
| pxQueueBuffer         | 必须执行一个StaticQueue_t结构体，用来保存队列的数据结构      |
| 返回值                | 非0：成功，返回句柄，以后使用句柄来操作队列 NULL：失败，因为pxQueueBuffer为NULL |

示例代码：

```C
// 示例代码
 #define QUEUE_LENGTH 10
 #define ITEM_SIZE sizeof( uint32_t )
 
 // xQueueBuffer用来保存队列结构体
 StaticQueue_t xQueueBuffer;
 
 // ucQueueStorage 用来保存队列的数据
 // 大小为：队列长度 * 数据大小
 uint8_t ucQueueStorage[ QUEUE_LENGTH * ITEM_SIZE ];
 
 void vATask( void *pvParameters )
 {
	QueueHandle_t xQueue1;
 
	// 创建队列: 可以容纳QUEUE_LENGTH个数据，每个数据大小是ITEM_SIZE
	xQueue1 = xQueueCreateStatic( QUEUE_LENGTH,
						  ITEM_SIZE,
						  ucQueueStorage,
						  &xQueueBuffer ); 
 }
```
### 10.2.2 复位

队列刚被创建时，里面没有数据；使用过程中可以调用xQueueReset()把队列恢复为初始状态，此函数原型为：

```C
/* pxQueue : 复位哪个队列;
 * 返回值: pdPASS(必定成功)
 */
BaseType_t xQueueReset( QueueHandle_t pxQueue);
```

### 10.2.3 删除

删除队列的函数为vQueueDelete()，只能删除使用动态方法创建的队列，它会释放内存。原型如下：

```C
void vQueueDelete( QueueHandle_t xQueue );
```

### 10.2.4 写队列

可以把数据写到队列头部，也可以写到尾部，这些函数有两个版本：在任务中使用、在ISR中使用。函数原型如下：

```C
/* 等同于xQueueSendToBack
 * 往队列尾部写入数据，如果没有空间，阻塞时间为xTicksToWait
 */
BaseType_t xQueueSend(
                                QueueHandle_t    xQueue,
                                const void       *pvItemToQueue,
                                TickType_t       xTicksToWait
                            );

/* 
 * 往队列尾部写入数据，如果没有空间，阻塞时间为xTicksToWait
 */
BaseType_t xQueueSendToBack(
                                QueueHandle_t    xQueue,
                                const void       *pvItemToQueue,
                                TickType_t       xTicksToWait
                            );


/* 
 * 往队列尾部写入数据，此函数可以在中断函数中使用，不可阻塞
 */
BaseType_t xQueueSendToBackFromISR(
                                      QueueHandle_t xQueue,
                                      const void *pvItemToQueue,
                                      BaseType_t *pxHigherPriorityTaskWoken
                                   );

/* 
 * 往队列头部写入数据，如果没有空间，阻塞时间为xTicksToWait
 */
BaseType_t xQueueSendToFront(
                                QueueHandle_t    xQueue,
                                const void       *pvItemToQueue,
                                TickType_t       xTicksToWait
                            );

/* 
 * 往队列头部写入数据，此函数可以在中断函数中使用，不可阻塞
 */
BaseType_t xQueueSendToFrontFromISR(
                                      QueueHandle_t xQueue,
                                      const void *pvItemToQueue,
                                      BaseType_t *pxHigherPriorityTaskWoken
                                   );
```

这些函数用到的参数是类似的，统一说明如下：

| **参数**      | **说明**                                                     |
| ------------- | ------------------------------------------------------------ |
| xQueue        | 队列句柄，要写哪个队列                                       |
| pvItemToQueue | 数据指针，这个数据的值会被复制进队列， 复制多大的数据？在创建队列时已经指定了数据大小 |
| xTicksToWait  | 如果队列满则无法写入新数据，可以让任务进入阻塞状态， xTicksToWait表示阻塞的最大时间(Tick Count)。 如果被设为0，无法写入数据时函数会立刻返回； 如果被设为portMAX_DELAY，则会一直阻塞直到有空间可写 |
| 返回值        | pdPASS：数据成功写入了队列 errQUEUE_FULL：写入失败，因为队列满了。 |

### 10.2.5 读队列

使用xQueueReceive()函数读队列，读到一个数据后，队列中该数据会被移除。这个函数有两个版本：在任务中使用、在ISR中使用。函数原型如下：

```C
BaseType_t xQueueReceive( QueueHandle_t xQueue,
                          void * const pvBuffer,
                          TickType_t xTicksToWait );

BaseType_t xQueueReceiveFromISR(
                                    QueueHandle_t    xQueue,
                                    void             *pvBuffer,
                                    BaseType_t       *pxTaskWoken
                                );
```

参数说明如下：

| **参数**     | **说明**                                                     |
| ------------ | ------------------------------------------------------------ |
| xQueue       | 队列句柄，要读哪个队列                                       |
| pvBuffer     | bufer指针，队列的数据会被复制到这个buffer 复制多大的数据？在创建队列时已经指定了数据大小 |
| xTicksToWait | 果队列空则无法读出数据，可以让任务进入阻塞状态， xTicksToWait表示阻塞的最大时间(Tick Count)。 如果被设为0，无法读出数据时函数会立刻返回； 如果被设为portMAX_DELAY，则会一直阻塞直到有数据可写 |
| 返回值       | pdPASS：从队列读出数据入 errQUEUE_EMPTY：读取失败，因为队列空了。 |

### 10.2.6 查询

可以查询队列中有多少个数据、有多少空余空间。函数原型如下：

```C
/*
 * 返回队列中可用数据的个数
 */
UBaseType_t uxQueueMessagesWaiting( const QueueHandle_t xQueue );

/*
 * 返回队列中可用空间的个数
 */
UBaseType_t uxQueueSpacesAvailable( const QueueHandle_t xQueue );
```

### 10.2.7 覆盖/偷看

当队列长度为1时，可以使用xQueueOverwrite()或xQueueOverwriteFromISR()来覆盖数据。
注意，队列长度必须为1。当队列满时，这些函数会覆盖里面的数据，这也意味着这些函数不会被阻塞。

函数原型如下：

```C
/* 覆盖队列
 * xQueue: 写哪个队列
 * pvItemToQueue: 数据地址
 * 返回值: pdTRUE表示成功, pdFALSE表示失败
 */
BaseType_t xQueueOverwrite(
                           QueueHandle_t xQueue,
                           const void * pvItemToQueue
                      );

BaseType_t xQueueOverwriteFromISR(
                           QueueHandle_t xQueue,
                           const void * pvItemToQueue,
                           BaseType_t *pxHigherPriorityTaskWoken
                      );
```

如果想让队列中的数据供多方读取，也就是说读取时不要移除数据，要留给后来人。那么可以使用"窥视"，也就是xQueuePeek()或xQueuePeekFromISR()。这些函数会从队列中复制出数据，但是不移除数据。这也意味着，如果队列中没有数据，那么"偷看"时会导致阻塞；一旦队列中有数据，以后每次"偷看"都会成功。

函数原型如下：

```C
/* 偷看队列
 * xQueue: 偷看哪个队列
 * pvItemToQueue: 数据地址, 用来保存复制出来的数据
 * xTicksToWait: 没有数据的话阻塞一会
 * 返回值: pdTRUE表示成功, pdFALSE表示失败
 */
BaseType_t xQueuePeek(
                          QueueHandle_t xQueue,
                          void * const pvBuffer,
                          TickType_t xTicksToWait
                      );

BaseType_t xQueuePeekFromISR(
                                 QueueHandle_t xQueue,
                                 void *pvBuffer,
                             );
```

## 10.3 示例9: 队列的基本使用

### 10.3.1 程序框架

1001_game_template使用轮询的方式从环形缓冲区读取红外遥控器的键值，1002_queue_game把环形缓冲区改为队列。

1002_queue_game程序的框架如下：

![](https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-10/image8.png)

game1_task：游戏的主要逻辑判断，每次循环就移动一下球，判断球是否跟边沿、砖块、挡球板相碰，进而调整球的移动方向、消减砖块、统计分数。

platform_task：挡球板任务，根据遥控器左右移动挡球板。
IRReceiver_IRQ_Callback解析出遥控器键值后，写队列g_xQueuePlatform。

### 10.3.2 源码分析

IRReceiver_IRQ_Callback中断回调函数里，识别出红外遥控键值后，构造一个struct input_data结构体，然后使用xQueueSendFromISR函数把它写入队列g_xQueuePlatform。

代码在devices\irda\dev_irda.c中，写队列的代码如下：

```C
// applications\nwatch\typedefs.h
struct input_data {
uint32_t dev;
uint32_t val;
};

// devices\irda\dev_irda.c
struct input_data idata;
idata.dev = dev;
idata.val = val;
xQueueSendFromISR(g_xQueuePlatform, &idata, NULL);
```

挡球板任务从队列g_xQueuePlatform中读取数据，操作挡球板。代码在applications\nwatch\game1.c中，如下：

```C
01 /* 挡球板任务 */
02 static void platform_task(void *params)
03 {
04     int platformXtmp = platformX;
05     uint8_t dev, data, last_data;
06     struct input_data idata;
07     struct IRDADev *pIRDA = IRDADeviceGet();
08
09     // Draw platform
10     draw_bitmap(g_TmpLcdBufPlatform, platformXtmp, g_yres - 8, platform, PLATFORM_WIDTH, PLATFORM_HEIGHT, NOINVERT, 0);
11     draw_flushArea(g_TmpLcdBufPlatform, platformXtmp, g_yres - 8, PLATFORM_WIDTH, PLATFORM_HEIGHT);
12
13     while (1)
14     {
15         /* 读取红外遥控器 */
16 #if 0
17         while (pIRDA->Read(pIRDA, &dev, &data) != 0);
18 #else
19         xQueueReceive(g_xQueuePlatform, &idata, portMAX_DELAY);
20         data = idata.val;
21 #endif
```

第17行是原来的代码，它使用轮询的方式读取遥控键值，效率很低。

第19~20行改为读取队列，如果没有数据，挡球板任务阻塞，在第19行的函数里不出来；当IRReceiver_IRQ_Callback中断回调函数把数据写入队列后，挡球板任务马上被唤醒，从第19行的函数里出来，继续执行后续代码。

### 10.3.3 上机实验

烧录程序后，使用红外遥控器的左、右按键移动挡球板。

## 10.4 示例10: 使用队列实现多设备输入

本节代码为：1003_queue_game_multi_input。既可以像1002_queue_game一样使用遥控器来玩游戏，还增加了触摸屏控制：左右滑动触摸屏，就可以左右移动挡球板。

### 10.4.1 程序框架

1003_queue_game_multi_input增量了一个touch_task，触摸屏任务。它不断读取触摸屏数据，然后写

1003_queue_game_multi_input程序的框架如下：

![image9](https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-10/image9.png)

game1_task：游戏的主要逻辑判断，每次循环就移动一下球，判断球是否跟边沿、砖块、挡球板相碰，进而调整球的移动方向、消减砖块、统计分数。

platform_task：挡球板任务，根据遥控器、触摸屏数据左右移动挡球板。

IRReceiver_IRQ_Callback解析出遥控器键值后，写队列g_xQueuePlatform。

touc_task：读取触摸屏数据，判断是左滑还是右滑，写队列g_xQueuePlatform。

### 10.4.2 源码分析

增加了一个文件：applications\touch_app.c，它是touch_task触摸屏任务的代码。代码如下：

```C
01 #define IR_KEY_LEFT   0xe0
02 #define IR_KEY_RIGHT  0x90
03
04 extern QueueHandle_t g_xQueuePlatform; /* 挡球板队列 */
05
06 void touch_thread_entry(void *params)
07 {
08     unsigned short x, y, pre_x, pre_y;
09     struct input_data idata;
10     unsigned int pre_time = 0;
11     unsigned int time = 0;
12
13     struct TouchDev* ptDev = TouchDevGet();
14
15     ptDev->Init(ptDev);
16
17     /* 通过比较前后2次触摸的坐标值
18      * 来判断是左滑还是右滑
19      */
20     while (1)
21     {
22         if (ptDev->Read(ptDev, &x, &y) == true)
23         {
24             time = system_get_us();
25
26             /* 如果跟上次触摸距离太久了，比如超过10秒
27              * 那么当前触摸就作为第1次的值
28              */
29             if (time - pre_time > 10000000)
30             {
31                 pre_x = x;
32             }
33             else
34             {
35                 if (x > pre_x)
36                 {
37                     /* 右滑 */
38                     idata.val = IR_KEY_RIGHT;
39                 }
40                 else if (x < pre_x)
41                 {
42                     /* 左滑 */
43                     idata.val = IR_KEY_LEFT;
44                 }
45                 else
46                 {
47                     continue;
48                 }
49
50                 /* 写队列 */
51                 idata.dev = 2;
52                 if (g_xQueuePlatform)
53                 {
54                     xQueueSend(g_xQueuePlatform, &idata, 0);
55                 }
56             }
57             pre_x = x;
58             pre_time = time;
59         }
60
61         vTaskDelay(10);
62     }
63 }
```

第22行读取触摸屏数据。

第29~32行：需要比较前后两次触摸屏的数据才能判断是左滑还是右滑，如果前后两次触摸间隔太长，那么老数据要丢弃。

第34~48行：确定是左滑还是右滑，转换为左键、右键。

第51~55行：构造结构体，写队列g_xQueuePlatform。

### 10.4.3 上机实验

烧录程序后，使用红外遥控器的左、右按键移动挡球板；左滑、右滑触摸屏移动挡球板。

## 10.5 队列集

假设有2个输入设备：红外遥控器、触摸屏，它们的驱动程序应该专注于“产生硬件数据”，不应该跟“业务有任何联系”。比如：红外遥控器驱动程序里，它只应该把键值记录下来、写入某个队列，它不应该把键值转换为游戏的控制键。在触摸屏任务里，不应该有游戏相关的代码，这样，切换使用场景时，这些代码还可以继续使用。

把红外遥控器的按键转换为游戏的控制键，应该在游戏的任务里实现。

把触摸屏数据转换为游戏的控制键，也应该在游戏的任务里实现。

要支持多个输入设备时，我们需要实现一个“InputTask”，它读取各个设备的队列，得到数据后再分别转换为游戏的控制键。

InputTask如何及时读取到多个队列的数据？要使用队列集。

队列集的本质也是队列，只不过里面存放的是“队列句柄”。使用过程如下：

a.创建队列A，它的长度是n1
b.创建队列B，它的长度是n2
c.创建队列集S，它的长度是“n1+n2”
d.把队列A、B加入队列集S
e.这样，写队列A的时候，会顺便把队列A的句柄写入队列集S
f.这样，写队列B的时候，会顺便把队列B的句柄写入队列集S
g.InputTask先读取队列集S，它的返回值是一个队列句柄，这样就可以知道哪个队列有有数据了；然后InputTask再读取这个队列句柄得到数据。

### 10.5.1 创建队列集

函数原型如下：

```C
QueueSetHandle_t xQueueCreateSet( const UBaseType_t uxEventQueueLength )
```

| **参数**      | **说明**                                                     |
| ------------- | ------------------------------------------------------------ |
| uxQueueLength | 队列集长度，最多能存放多少个数据(队列句柄)                   |
| 返回值        | 非0：成功，返回句柄，以后使用句柄来操作队列 NULL：失败，因为内存不足 |

### 10.5.2 把队列加入队列集

函数原型如下：

```C
BaseType_t xQueueAddToSet( QueueSetMemberHandle_t xQueueOrSemaphore,
                               QueueSetHandle_t xQueueSet );
```

| **参数**          | **说明**                       |
| ----------------- | ------------------------------ |
| xQueueOrSemaphore | 队列句柄，这个队列要加入队列集 |
| xQueueSet         | 队列集句柄                     |
| 返回值            | pdTRUE：成功 pdFALSE：失败     |

### 10.5.3 读取队列集

函数原型如下：

```C
QueueSetMemberHandle_t xQueueSelectFromSet( QueueSetHandle_t xQueueSet,
                                                TickType_t const xTicksToWait );
```

| **参数**     | **说明**                                                     |
| ------------ | ------------------------------------------------------------ |
| xQueueSet    | 队列集句柄                                                   |
| xTicksToWait | 如果队列集空则无法读出数据，可以让任务进入阻塞状态，xTicksToWait表示阻塞的最大时间(Tick Count)。如果被设为0，无法读出数据时函数会立刻返回；如果被设为portMAX_DELAY，则会一直阻塞直到有数据可写 |
| 返回值       | NULL：失败， 队列句柄：成功                                  |

## 10.6 示例11: 使用队列集改善程序框架

本节代码为：1004_queueset_game。
### 10.6.1 程序框架

1004_queueset_game增量了一个input_task，输入任务。它读取多个输入设备的数据，分别转换为游戏的触控数据，然后上报给platform_task。

框架如下：

![image10](https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-10/image10.png)

game1_task：游戏的主要逻辑判断，每次循环就移动一下球，判断球是否跟边沿、砖块、挡球板相碰，进而调整球的移动方向、消减砖块、统计分数。

platform_task：挡球板任务，根据游戏触控数据左右移动挡球板。

InputTask：读取队列集得知哪个队列有数据，进而读取队列得到原始数据，转换为游戏触控数据，然后写队列g_xQueuePlatform（上报给platform_task）。

IRReceiver_IRQ_Callback解析出遥控器键值后，写队列g_xQueueIR。

touc_task：读取触摸屏数据，把原始数据写队列g_xQueueTouch。

### 10.6.2 源码分析

从下往上分析，以触摸屏为例。文件applications\touch_app.c中，它创建了自己的队列、读取到原始数据后，直接写入队列。代码非常纯粹，跟具体应用场景无关。代码如下：

```c
32 void touch_thread_entry(void *params)
33 {
34     unsigned short x, y;
35     struct touch_data tdata;
36
37     g_xQueueTouch = xQueueCreate(TOUCH_QUEUE_LEN, sizeof(struct touch_data));
38
39     struct TouchDev* ptDev = TouchDevGet();
40
41     ptDev->Init(ptDev);
42
43     while (1)
44     {
45         if (ptDev->Read(ptDev, &x, &y) == true)
46         {
47             tdata.time_us = system_get_us();
48             tdata.x = x;
49             tdata.y = y;
50
51             xQueueSend(g_xQueueTouch, &tdata, 0);
52         }
53
54         vTaskDelay(10);
55     }
56 }
57
```

第37行创建自己的队列，用来存放原始的触摸屏数据。
第45行：读取原始数据。
第47~49行：把时间值、x坐标、y坐标，放入结构体。
第51行：写队列g_xQueueTouch。

谁从队列g_xQueueTouch中获得数据？game1_task里创建了队列集，代码如下：

```c
260 void game1_task(void *params)
261 {
262     uint8_t dev, data, last_data;
263
264     g_framebuffer = LCD_GetFrameBuffer(&g_xres, &g_yres, &g_bpp);
265     draw_init();
266     draw_end();
267
268     vTaskDelay(5); /* 等待一会让touch_task先运行以便创建好队列 */
269
270     /* 创建队列,队列集,创建输入任务InputTask */
271     g_xQueuePlatform = xQueueCreate(10, sizeof(struct input_data));
272     g_xQueueSetInput = xQueueCreateSet(IR_QUEUE_LEN + TOUCH_QUEUE_LEN);
273
274     g_xQueueIR = GetQueueIR();
275     g_xQueueTouch = GetQueueTouch();
276
277     xQueueAddToSet(g_xQueueIR, g_xQueueSetInput);
278     xQueueAddToSet(g_xQueueTouch, g_xQueueSetInput);
279
280     xTaskCreate(InputTask, "InputTask", 128, NULL, 1, NULL);
```

第268行延时一会，让touch_task先运行以便它创建好队列，下面第275行要得到这个队列。
第271~278行：创建队列、队列集，把队列加入队列集。
第280行：创建输入任务。

输入任务的代码在applications\nwatch\game1.c中，代码如下：

```c
236 static void InputTask(void *params)
237 {
238     QueueSetMemberHandle_t xQueueHandle;
239
240     while (1)
241     {
242             /* 读队列集, 得到有数据的队列句柄 */
243             xQueueHandle = xQueueSelectFromSet(g_xQueueSetInput, portMAX_DELAY);
244
245             if (xQueueHandle)
246             {
247                     /* 读队列句柄得到数据,处理数据 */
248                     if (xQueueHandle == g_xQueueIR)
249                     {
250                             ProcessIRData();
251                     }
252                     else if (xQueueHandle == g_xQueueTouch)
253                     {
254                             ProcessTouchData();
255                     }
256             }
257     }
258 }
```

第243行：读取队列集，返回值就是“有数据的队列”。

第252行：如果这个队列时触摸屏队列的话，第254行调用ProcessTouchData函数来处理数据。

ProcessTouchData函数跟1003_queue_game_multi_input的处理逻辑是一致的，不再赘述。

### 10.6.3 上机实验

烧录程序后，使用红外遥控器的左、右按键移动挡球板；左滑、右滑触摸屏移动挡球板。

## 10.7 示例12: 遥控器数据分发给多个任务

本节代码为：1005_queue_car_dispatch。

### 10.7.1 程序框架

1005_queue_car_dispatch实现了另一个游戏：使用红外遥控器的1、2、3分别控制3辆汽车。
框架如下：

![image11](https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-10/image11.png)

car1_task、car2_task、car3_task：创建自己的队列，并注册给devices\irda\dev_irda.c；读取队列，根据遥控器键值移动汽车。

IRReceiver_IRQ_Callback解析出遥控器键值后，写多个队列。

### 10.7.2 源码分析

从上往上分析，汽车任务的代码在applications\nwatch\game2.c中，任务入口函数代码如下：

```c
88 static void CarTask(void *params)
89 {
90      struct car *pcar = params;
91      struct ir_data idata;
92
93      /* 创建自己的队列 */
94      QueueHandle_t xQueueIR = xQueueCreate(10, sizeof(struct ir_data));
95
96      /* 注册队列 */
97      RegisterIRQueueHandle(xQueueIR);
98
99      /* 显示汽车 */
100     ShowCar(pcar);
101
102     while (1)
103     {
104             /* 读取按键值:读队列 */
105             xQueueReceive(xQueueIR, &idata, portMAX_DELAY);
106
107             /* 控制汽车往右移动 */
```

第94行创建自己的队列，第97行把这个队列注册进底层的红外驱动。

注册函数RegisterIRQueueHandle在devices\irda\dev_irda.c中，只是把这个句柄记录在数组中，代码如下： 

```c
40 void RegisterIRQueueHandle(QueueHandle_t queueHandle)
41 {
42      if (g_queue_cnt < 10)
43      {
44              g_xQueues[g_queue_cnt] = queueHandle;
45              g_queue_cnt++;
46      }
47 }
```

红外驱动程序解析出按键值后，把数据写入多个队列，代码如下：

```c
59 static void DispatchKey(struct ir_data *pidata)
60 {
61 #if 0
62      extern QueueHandle_t g_xQueueCar1;
63      extern QueueHandle_t g_xQueueCar2;
64      extern QueueHandle_t g_xQueueCar3;
65
66      xQueueSendFromISR(g_xQueueCar1, pidata, NULL);
67      xQueueSendFromISR(g_xQueueCar2, pidata, NULL);
68      xQueueSendFromISR(g_xQueueCar3, pidata, NULL);
69 #else
70      int i;
71      for (i = 0; i < g_queue_cnt; i++)
72      {
73              xQueueSendFromISR(g_xQueues[i], pidata, NULL);
74      }
75 #endif
76 }
```

第62~68行的代码是故意放在这里的，它们并未被使用：它通过写多个全局队列来实现数据的分发。但是这种代码风格不好。

第70~74行：把数据写入之前注册进数组的队列，易扩展。

### 10.7.3 上机实验

烧录程序后，使用红外遥控器的1、2、3按键分别移动三辆汽车。

