# 第31章 WIFI&蓝牙模块驱动实验

本章目标

- 了解WiFi蓝牙芯片W800的通信协议；
- 学会使用串口收发AT指令实现开发板联网；

## 31.1 W800出厂固件烧写

**注意！注意！！注意！！！现在出模块已经烧录固件了，本节跳过**

烧写W800的固件时，需要使用X/Y modem串口协议。因而需要支持X/Y modem协议的串口工具，本书使用Xshell。

### 31.1.1 Xshell软件安装

免费体验版的Xshell下载入口地址是：

https://www.xshell.com/zh/free-for-home-school/

进入网站填写信息后，Xshell官方会将免费下载链接下发到填写的邮箱：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image1.png) 

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image2.png)  

将邮箱中的链接复制粘贴到浏览器即可进行下载，下载安装。

### 31.1.2 Xshell的使用

Xshell安装好之后，双击运行软件，在弹出的会话窗口点击“新建”添加串口连接：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image3.png)  

然后在“连接”项中将协议设置为“Serial”，如下图所示：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image4.png)  

接着去“连接”中的“串口”处选择串口号（下图的COM20只是一个例子，按照下一节的说明使用USB串口连接W800后，端口好可能不一样）和设置通信参数，如图所示：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image5.png)  

设置好之后点击右下角的“连接”即可连接指定串口设备了。

### 31.1.3 硬件连接

W800的硬件接口图如下：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image6.png)  

按上图将硬件连接好之后，使用Xshell打开串口，随后再将上图的WIFI_RESET引脚短接GND复位W800，之后W800就会一直往Xshell发送字符’C’，如下图所示：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image7.png)  

进入此状态后，就可以按照下节内容烧写固件了。

### 31.1.4 固件烧写步骤

W800进入烧写状态后，在Xshell的显示窗口点击鼠标右键，选择“传输”->“YMODEM(Y)”->“用YMODEM发送(S)”，如下图所示：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image8.png)  

随后进入资料包中固件所在位置，选择w800.fls开始烧写：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image9.png)  

最后等待传输烧写完毕：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image10.png)  

烧写完成后W800会继续对外输出’C’表示还在烧写状态，此时将BOOT引脚与GND断开，并且再次手动复位W800，就可以让W800进入正常工作状态，如下图所示：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image11.png)  

当Xshell打印出“user task”后，就表明W800已经进入工作状态了。此时可以在Xshell窗口直接输入指令“AT+”并车键（Xshell不会显示输入指令），如果返回“+OK”固件烧写成功了，如下图所示：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image12.png)  

## 31.2 AT+指令简介

W800的固件AT+指令，在官方手册《WM_W800_SDK_AT指令用户手册.pdf》中有详细描述，这个文档已经放到本书的配套资料中。

W800支持的AT+指令非常的多，本书仅展现几个常用的指令。

| **指令** | **指令格式**                                 | **响应**                                          | **说明**                                                     |
| -------- | -------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------ |
| AT+      | “AT+\r\n”                                    | “+OK\r\n\r\n”                                     | 测试指令，响应+OK表示测试成功                                |
| AT+Z     | “AT+Z\r\n”                                   | “+OK\r\n\r\n”                                     | 软件复位，响应+OK表示复位指令发送成功，复位后会响应“user task” |
| AT+E     | “AT+E\r\n”                                   | “+OK\r\n\r\n”                                     | 回显切换指令，输入一次切换一次状态，在回显状态下W800会连带指令和结果一起响应 |
| AT+RSTF  | “AT+RSTF\r\n”                                | “+OK\r\n\r\n”                                     | 恢复FLASH中的出厂设置。恢复后的设置需系统重启后才能生效      |
| AT+WPRT  | “AT+WPRT=[!?][type]\r\n”例如：AT+WPRT=0\r\n  | “+OK[=type]\r\n\r\n”例如：+OK=0\r\n\r\n           | 设置 /查询无线网络类型:l 0:STA;l 2:SoftAP;l 3:APSTA          |
| AT+WSCAN | “AT+WSCAN\r\n”                               | “+OK=……”                                          | 该指令仅在无线网络类型为 STA时有效，用于扫描无线网络，完成后返回。 |
| AT+SSID  | “AT+SSID=[!?][SSID]”例如：AT+SSID=100ask\r\n | “+OK[=ssid]\r\n”                                  | 设置 /查询无线网络名称，即 SSID                              |
| AT+KEY   | “AT+KEY=[!?][format],[index],[key]\r\n”      | “+OK[=format,index,key]\r\n”                      | 设置 /查询网络密钥                                           |
| AT+WJOIN | “AT+WJOIN\r\n”                               | “+OK=&ltbssid&gt,&lttype&gt…\r\n”                         | 如果当前网络类型为为 STA 时，本指令功能为连接 AP。如果当前网络类型SoftAP或者APSTA 时，本指令功能为创建 |
| AT+WLEAV | “AT+WLEAV\r\n”                               | “+OK\r\n\r\n”                                     | 无线网络类型为 STA时，用于断开当前无线网络。                 |
| AT+NIP   | “AT+NIP=[!?][type]…\r\n”                     | “+OK[=type]…\r\n”                                  | 当 无线网卡作为STA时，该指令用于设置 /查询本端 IP地址。      |
| AT+LKSTT | “AT+LKSTT\r\n”                               | +OK[=status,ip,netmask,gateway,dns1,dns2]\r\n\r\n | 查询本端网络连接状态                                         |
| AT+SKCT  | “AT+SKCT=[protocol]…\r\n”                    | “+OK=&ltsocket&gt\r\n”                                | 建立 socket。在 client模式，等待连接完成（成功或失败）后返回；在 server模式下，创建完成后直接返回。 |
| AT+SKCLS | “AT+SKCLS=&ltsocket&gt\r\n”                      | “+OK\r\n\r\n”                                     | 关闭指定的socket。                                           |
| AT+SKSND | “AT+SKSND=[socket],[size]\r\n”               | “+OK\r\n\r\n”                                     | 响应OK后发送数据流                                           |
| AT+SKRCV | “AT+SKRCV=[socket],[size]\r\n”               | “+OK\r\n\r\n”                                     | 响应OK后会将rxdata中的数据发送到串口                         |

## 31.3 模块配置

本实验只使用到UART，请参考前文的操作在FSP中配置UART及其引脚。本次实验仅展示配置结果。

### 31.3.1 硬件连接

板载W800的原理图如下图所示：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image13.png)  

使用到的RA6M5处理器引脚是P505和P506，对应于SCI的UART6的TX/RX引脚。

### 31.3.2 UART模块配置

1. UART6

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image14.png)  

2. UART7

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image15.png)  

## 31.4 驱动程序

### 31.4.1 设备对象封装

在《30.3设备对象封装》的基础上，对定时器的设备对象进行了改进，添加了一个Timeout函数，它实现了延时函数。代码如下:

```c
static struct TimerDev gSystickDevice = {
    .name = "Systick",
    .channel = 0xFF,
    .status = 0,
    .Init = SystickInit,
    .Start = NULL,
    .Stop = NULL,
    .Read = NULL,
    .Timeout = HAL_Delay,
    .next = NULL
};
void SystickTimerDevicesCreate(void)
{
    TimerDeviceInsert(&gSystickDevice);
    gSystickDevice.Init(&gSystickDevice);
}
static int HAL_Delay(struct TimerDev *ptdev, uint32_t timeout)
{
    if(NULL == ptdev)       return -EINVAL;
    if(0 == ptdev->status)  return -EIO;
    uint32_t dwStart = dwTick;
    uint32_t dwWait = timeout;

    /* Add a freq to guarantee minimum wait */
    if (dwWait < HAL_MAX_DELAY)
    {
        dwWait += (uint32_t)(1);
    }

    while((dwTick - dwStart) < dwWait)
    {
    }
    return ESUCCESS;
}
```

### 31.4.2 初始化UART

本次实验会用到两个UART：

- UART6：和WiFi蓝牙芯片W800通信；
- UART7：调试打印；

对于UART6，由于W800每次收发的数据长度是不确定的，不适合用DTC或者DMA来辅助传输数据，因而使用环形缓冲区。在初始化UART6的时候申请了一个环形缓冲区，而UART7作为调试串口，没有使用环形缓冲区。代码如下：

```c
static struct RingBuffer *gWiFiBuffer = NULL;
static struct UartDev gWiFiDevice = {
    .name = "WiFi Uart",
    .channel = 6,
    .Init = UARTDrvInit,
    .Read = UARTDrvRead,
    .Write = UARTDrvWrite,
    .next = NULL
};
void UartDevicesCreate(void)
{
    UartDeviceInsert(&gLogDevice);
    UartDeviceInsert(&gWiFiDevice);
    gLogDevice.Init(&gLogDevice);
}
static int UARTDrvInit(struct UartDev *ptdev)
{
    if(NULL == ptdev)   return -EINVAL;
    
    switch(ptdev->channel)
    {
        case 0:case 1:case 2:
        case 3:case 4:case 5:
        case 6:
        {
            fsp_err_t err = g_uart6.p_api->open(g_uart6.p_ctrl, g_uart6.p_cfg);
            assert(FSP_SUCCESS == err);
            gWiFiBuffer = RingBufferNew(1024);
            assert(NULL != gWiFiBuffer);
            break;
        }
        case 7:
        {
            fsp_err_t err = g_uart7.p_api->open(g_uart7.p_ctrl, g_uart7.p_cfg);
            assert(FSP_SUCCESS == err);
            break;
        }
        case 8:case 9:
            break;
        default:break;
    }
    
    return ESUCCESS;
}
```

### 31.4.3 中断回调函数

对于UART6和UART7，需要提供中断回调函数。它们的操作是类似的，UART6需要处理“发送完成”和“接收完成”两种情况，而UART7只需要处理“发送完成”。UART6的中断回调函数代码如下：

```c
void uart6_callback(uart_callback_args_t * p_args)
{
    switch(p_args->event)
    {
        case UART_EVENT_RX_COMPLETE:
        {
            break;
        }
        case UART_EVENT_TX_COMPLETE:
        {
            gUart6TxCplt = true;
            break;
        }
        case UART_EVENT_RX_CHAR:
        {
            gWiFiBuffer->Write(gWiFiBuffer, (unsigned char*)&p_args->data, 1);
            break;
        }
        case UART_EVENT_ERR_PARITY:case UART_EVENT_ERR_FRAMING:
        case UART_EVENT_ERR_OVERFLOW:case UART_EVENT_BREAK_DETECT:
        case UART_EVENT_TX_DATA_EMPTY:
            break;
        default:break;   
    }
}
```

- 第11行：将UART6的发送完成标志写为true；
- 第16行：如果接收到数据，将它写入到UART6的缓冲区中；

### 31.4.4 UART发送函数

UART设备的发送函数比较简单，调用UART6和UART7设备结构体的write函数即可：

```
static int UARTDrvWrite(struct UartDev *ptdev, unsigned char * const buf, unsigned int length)
{
    if(NULL == ptdev)   return -EINVAL;
    if(NULL == buf)     return -EINVAL;
    if(0 == length)     return -EINVAL;
    
    switch(ptdev->channel)
    {
        case 0:case 1:case 2:
        case 3:case 4:case 5:
        case 6:
        {
            fsp_err_t err = g_uart6.p_api->write(g_uart6.p_ctrl, buf, length);
            assert(FSP_SUCCESS == err);
            UART6WaitTxCplt();
            break;
        }
        case 7:
        {
            fsp_err_t err = g_uart7.p_api->write(g_uart7.p_ctrl, buf, length);
            assert(FSP_SUCCESS == err);
            UART7WaitTxCplt();
            break;
        }
        case 8:case 9:
            break;
        default:break;
    }
    return ESUCCESS;
}
```

### 31.4.5 UART数据读取函数

对于UART6，读取UART的数据时，是从它的环形缓冲区里读取数据。对于UART7，调用FSP封装的函数读数据。代码如下：

```c
static int UARTDrvRead(struct UartDev *ptdev, unsigned char *buf, unsigned int length)
{
    if(NULL == ptdev)   return -EINVAL;
    if(NULL == buf)     return -EINVAL;
    if(0 == length)     return -EINVAL;

    switch(ptdev->channel)
    {
        case 0:case 1:case 2:
        case 3:case 4:case 5:
        case 6:
        {
            if(gWiFiBuffer->Read(gWiFiBuffer, buf, length) != length)
                return -EIO;
            break;
        }
        case 7:
        {
            fsp_err_t err = g_uart7.p_api->read(g_uart7.p_ctrl, buf, length);
            assert(FSP_SUCCESS == err);
            UART7WaitRxCplt();
            break;
        }
        case 8:case 9:
            break;
        default:break;
    }
    return (int)length;
}
```

## 31.5 W800 WiFi蓝牙模块

WiFi蓝牙模块的设备驱动代码在Devices/wifi_bluetooth文件夹中，文件dev_wifi_bt.c/.h。

### 31.5.1 初始化W800

要初始化W800，实际是初始化W800用到的串口设备，即初始化UART6：

```c
static UartDevice *pWiFiBtDev = NULL;
int WiFiBtDevInit(void)
{
    pWiFiBtDev = UartDeviceFind("WiFi");
    if(NULL==pWiFiBtDev) return -ENXIO;
    if(pWiFiBtDev->Init(pWiFiBtDev) != ESUCCESS)    return -EIO;
    
    return ESUCCESS;
}
```

### 31.5.2 AT+指令返回判定

在AT+指令简介中已经直到，每个AT+指令都有其对应的响应。对于大多数指令，只需要判断它收到的回应是不是“+OK”即可。将这个功能封装为如下函数：

```c
static int WiFiBtDevCmdRet(const char *ret)
{
    unsigned short timeout = 3000;
    unsigned char i = 0;
    unsigned char buf[128] = {0};
    while(timeout)
    {
        if(strstr((char*)buf, ret))
        {
            return ESUCCESS;
        }
        else if(strstr((char*)buf, "+ERR"))
        {
            return -EIO;
        }
        else if(pWiFiBtDev->Read(pWiFiBtDev, &buf[i], 1)==1)
        {
            printf("%c", buf[i]);
            i++;
        }
        mdelay(1);
        timeout--;
    }
    return -EIO;
}
```

- 第08行：如果接收的数据中读出来有指定响应字符串，就返回ESUCCESS；
- 第12行：如果响应中有“+ERR”就表示指令失败，返回-EIO；
- 第16行：如果想要的响应或者错误响应都没有，则继续从缓冲区中读取数据并打印出来；
- 第21~22行：超时等待倒计时，如果是超时退出则返回-EIO；

### 31.5.3 设置W800的工作模式

W800的WiFi功能有3个工作模式：STA、SoftAP和APSTA，定义了一个枚举类型：

```c
typedef enum{
    STA     = 0,
    SoftAP  = 2,
    APSTA   = 3
}WorkType;
```

发出指令“AT+WPRT=&lttype&gt\r\n”（注意必须要有’\r’），就可以设置W800的工作模式。具体的实现很简单，调用UART设备的write函数发送这个字符串，然后等待响应即可。代码如下：

```c
int WiFiBtDevSetWorkType(WorkType type)
{
    char str[64];
    sprintf(str, "AT+WPRT=%d\r\n", type);
    if(pWiFiBtDev->Write(pWiFiBtDev, (unsigned char*)str, strlen(str)) != ESUCCESS)
        return -EIO;
    mdelay(100);
    return WiFiBtDevCmdRet("+OK");
}
```

### 31.5.4 设置W800的DHCP状态

如果想让W800在连接上了热点之后自动获得IP地址，则需要使能W800的DHCP功能；如果想要固定W800的IP地址，则需要关闭DHCP自动分配功能，并且指定IP。

使能DHCP功能的指令是“AT+NIP=0\r\n”，代码如下：

```c
int WiFiBtDevEnableDHCP(void)
{
    int ret = -EIO;
    char *str = "AT+NIP=0\r\n";
    ret = pWiFiBtDev->Write(pWiFiBtDev, (unsigned char*)str, strlen(str));
    if(ESUCCESS!= ret) return ret;
    mdelay(100);
    ret = WiFiBtDevCmdRet("+OK");
    return ret;
}
```

要手工设置IP，使用指令“AT+NIP=1,[IP],[net_mask],[gate_way]\r\n”，它会关闭DHCP功能、指定IP、子网掩码和默认网关。代码如下：

```c
int WiFiBtDevDisableDHCP(const char *ip, const char *netmask, const char *gateway)
{
    int ret = -EIO;
    char str[64];
    sprintf(str, "AT+NIP=1,%s,%s,%s\r\n", ip, netmask, gateway);
    ret = pWiFiBtDev->Write(pWiFiBtDev, (unsigned char*)str, strlen(str));
    if(ESUCCESS!= ret) return ret;
    mdelay(100);
    ret = WiFiBtDevCmdRet("+OK");
    return ret;
}
```

### 31.5.5 连接指定热点

连接热点需要3个指令：

- 设置热点的名称：AT+SSID=[SSID]\r\n；
- 设置连接热点的密码：AT+KEY=[密钥格式],[密钥索引号],[密钥字符串]\r\n；
- 连接热点：AT+WJOIN\r\n；

对于设置密钥的参数，手册中是这样解释的：

- 密钥格式：0-Hex格式；1-ASCII格式；
- 密钥索引号：1~4用于WEP加密密钥，其它加密方式固定为0；
- 密钥字符串：以双引号包围，根据不同的安全模式，密钥使用的长度与格式要求定义如下：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image16.png)  

本实验将连接热点的三个指令封装到一个函数中，调用者只需要传入连接热点的名称和密码即可：

```c
int WiFiBtDevConnectWiFi(const char *name, const char *password)
{
    int ret = -EIO;

    char ssid[32];
    sprintf(ssid, "AT+SSID=%s\r\n", name);
    ret = pWiFiBtDev->Write(pWiFiBtDev, (unsigned char*)ssid, strlen(ssid));
    if(ESUCCESS != ret) return ret;
    mdelay(100);
    ret = WiFiBtDevCmdRet("+OK");
    if(ESUCCESS != ret) return ret;
    
    char key[32] ;
    sprintf(key, "AT+KEY=1,0,%s\r\n", password);
    ret = pWiFiBtDev->Write(pWiFiBtDev, (unsigned char*)key, strlen(key));
    if(ESUCCESS != ret) return ret;
    mdelay(100);
    ret = WiFiBtDevCmdRet("+OK");
    if(ESUCCESS != ret) return ret;
    
    char join[32] = "AT+WJOIN\r\n";
    ret = pWiFiBtDev->Write(pWiFiBtDev, (unsigned char*)join, strlen(join));
    if(ESUCCESS != ret) return ret;
    mdelay(100);
    ret = WiFiBtDevCmdRet("+OK");
    int ret1 = WiFiBtDevCmdRet("\r\n\r\n");
    if(ret==ESUCCESS && ret1)
        mdelay(1000);
    return ret;
}
```

### 31.5.6 断开热点连接

断开热点的连接，只需要发送指令“AT+WLEAV\r\n”即可，代码如下：

```c
int WiFiBtDevDisconnectWiFi(void)
{
    int ret = -EIO;
    char *leavw = "AT+WLEAV\r\n";
    ret = pWiFiBtDev->Write(pWiFiBtDev, (unsigned char*)leavw, strlen(leavw));
if(ESUCCESS != ret) return ret;
mdelay(100);
ret = WiFiBtDevCmdRet(“+OK”);
return ret;
}
```

### 31.5.7 获取本地IP

当连接了热点并且使能了DHCP自动获取IP功能，用户可能想要知道本机分配的IP地址是多少，这时候就需要使用指令“AT+LKSTT\r\n”来查询本机IP了，代码如下：

```c
int WiFiBtDevGetLocalIP(void)
{
    int ret = -EIO;
    char lkstt[32] = "AT+LKSTT\r\n";
    ret = pWiFiBtDev->Write(pWiFiBtDev, (unsigned char*)lkstt, strlen(lkstt));
    if(ESUCCESS != ret) return ret;
    mdelay(100);
    unsigned short timeout = 100;
    while(timeout)
    {
        unsigned char c = 0;
        if(pWiFiBtDev->Read(pWiFiBtDev, &c, 1)==1)
        {
            printf("%c", c);
        }
        mdelay(1);
        timeout--;
    }
    return ESUCCESS;
}
```

由于此指令需要打印”+OK”之后的类容，不容易判定结尾，因而故意设置很长的超时，以便接收到全部数据，再把它打印出来。读者可以改进代码，从中解析出IP。

### 31.5.8 建立socket连接

W800连上热点之后，要和某个服务器进行网络通信，需要使用指令“AT+SKCT”。这个指令需要传入的参数比较多：协议、本机角色、IP地址、远端端口和本机端口，本书对此指令的参数进行了封装，用一个结构体描述连接信息：

```c
typedef enum{
    TCP = 0,
    UDP = 1
}NetworkProtocol;

typedef enum{
    Client = 0,
    Server = 1
}LocalRole;

typedef struct{
    NetworkProtocol Protocl;
    LocalRole       Role;
    char            *IP;
    unsigned int    RemotePort;
    unsigned int    LocalPort;
    unsigned int    SocketPort;
}ConnectInfo;
```

应用程序要构造一个ConnectInfo结构体，然后构造AT指令，发送给W800。这就是网络连接函数，如果连接成功，还要记录端口号。代码如下：

```c
int WiFiBtDevConnect(ConnectInfo *info)
{
    int ret = -EIO;
    char skct[128];
    sprintf(skct, "AT+SKCT=%d,%d,%s,%d,%d\r\n", \
                   info->Protocl, \
                   info->Role, \
                   info->IP, \
                   info->RemotePort, \
                   info->LocalPort
                   );
    ret = pWiFiBtDev->Write(pWiFiBtDev, (unsigned char*)skct, strlen(skct));
    if(ESUCCESS != ret) return ret;
    mdelay(100);
    ret = WiFiBtDevCmdRet("+OK=");
    if(ESUCCESS != ret) return ret;
    /* 获取连接成功后的socket号 */
    unsigned short timeout = 1000;
    unsigned char i = 0;
    unsigned char buf[32] = {0};
    while(timeout)
    {
        if(strstr((char*)buf, "\r\n"))
        {
            printf("\r\n");
            break;
        }
        else if(pWiFiBtDev->Read(pWiFiBtDev, &buf[i], 1)==1)
        {
            printf("%c", buf[i]);
            i++;
        }
        mdelay(1);
        timeout--;
    }
    
    for(i=0;buf[i]!='\r'; i++)
    {
        if(buf[i]>='0' && buf[i]<='9')
        {
            buf[i] = buf[i] - '0';
            info->SocketPort = info->SocketPort*10 + buf[i];
        }
    }
    printf("IP:%s - SocketPort:%d\r\n", info->IP, info->SocketPort);
    
    return ret;
}
```

- 第37行：返回的socket号最后一个数字紧跟的是’\r’，在解析socket号的时候不需要这个值，因而for循环的判定就是直到读取到’\r’为止就不进行ASCII到数值的转换计算。

### 31.5.9 断开指定socket的连接

断开网络连接使用的指令是”AT+SKCLS=&ltsocket&gt\r\n”，本书封装了如下函数：

```c
int WiFiBtDevDisconnect(ConnectInfo info)
{
    int ret = -EIO;
    char skcls[32];
    sprintf(skcls, "AT+SKCLS=%d\r\n", info.SocketPort);
    ret = pWiFiBtDev->Write(pWiFiBtDev, (unsigned char*)skcls, strlen(skcls));
    if(ESUCCESS != ret) return ret;
    mdelay(100);
    ret = WiFiBtDevCmdRet("+OK");
    return ret;
}
```

## 31.6 测试程序

本实验中，先使用网络调试助手开启了Windows电脑的TCP服务，然后启动板子。板子上的程序先使用W800连接热点，然后后Windows电脑建立TCP连接。

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image17.png)  

测试函数代码如下所示：

```c
void WiFiBtAppTest(void)
{
    UartDevicesRegister();
    TimerDevicesRegister();
    
    WiFiBtDevInit();
    WiFiBtDevSetWorkType(STA);
    WiFiBtDevEnableDHCP();
    WiFiBtDevConnectWiFi("X-IOT", "x-iot.cq");
    WiFiBtDevGetLocalIP();
    
    ConnectInfo connect = {
        .Protocl = TCP,
        .Role = Client,
        .IP = "192.168.50.193",
        .RemotePort = 8080,
        .LocalPort = 1024
    };
    int ret = WiFiBtDevConnect(&connect);
    while(1)
    {
        if(ret != ESUCCESS)
        {
            ret = WiFiBtDevConnect(&connect);
            delay(1);
        }
    }
}
```

## 31.7 测试结果

打开串口助手观察信息，打开网络助手启动TCP服务。然后将编译出来的二进制文件烧写到板子上运行，就能在串口助手上观察到W800的响应信息，在网络助手上观察到网络连接信息，如下图所示：

![](http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-31/image18.png)
