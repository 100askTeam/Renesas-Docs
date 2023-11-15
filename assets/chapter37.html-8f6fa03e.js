import{_ as e,o as i,c as n,e as d}from"./app-a98b8345.js";const a={},s=d(`<h1 id="第37章-dac数模转换模块" tabindex="-1"><a class="header-anchor" href="#第37章-dac数模转换模块" aria-hidden="true">#</a> 第37章 DAC数模转换模块</h1><h2 id="_37-1-spi-dac模块工作原理" tabindex="-1"><a class="header-anchor" href="#_37-1-spi-dac模块工作原理" aria-hidden="true">#</a> 37.1 SPI-DAC模块工作原理</h2><p>本次实验使用的SPI-DAC模块是定制模块，原理图如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-37/image1.png" alt=""></p><p>核心芯片是TLC5615，主机通过SPI接口发出一个数字量，TCL5615将数字量转化为模拟量，并通过OUT引脚输出模拟电压来点亮LED。通过LED的亮度形象地感受DAC的效果。这个模块的参考电压是2.048V，可以输出的最大电压是2倍参考电压，即4.096V。</p><p>TLC5615是一个10bit的DAC转换芯片，用户需要将需要转换的数字量左移2bit后再通过SPI发送给TLC5165，数据格式和转换关系如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-37/image2.png" alt=""></p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-37/image3.png" alt=""></p><p>由于TLC5615是10位DAC,它允许主控每次发送12位或者16位的数据，12位和16位的发送数据格式要求如下图所示。</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-37/image4.png" alt=""></p><p>这个模块的使用比较简单，重点是在SPI的通信上，其次是在发送数据的时候需要移位。</p><h2 id="_37-2-模块配置" tabindex="-1"><a class="header-anchor" href="#_37-2-模块配置" aria-hidden="true">#</a> 37.2 模块配置</h2><p>本次实验使用的是开发板配套扩展板的SPI组，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-37/image5.PNG" alt=""></p><p>使用的SPI引脚是P202/P203/P204和P205，SPI引脚对应使用的是RA6M5的Common SPI0:</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-37/image6.PNG" alt=""></p><p>本次实验使用的SPI-DAC模块控制比较简单，对于SPI的Stack配置使用默认参数即可，使能发送buffer空中断，配置中断对调函数，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-37/image7.png" alt=""></p><h2 id="_37-3-外设驱动" tabindex="-1"><a class="header-anchor" href="#_37-3-外设驱动" aria-hidden="true">#</a> 37.3 外设驱动</h2><h3 id="_37-3-1-gpio驱动" tabindex="-1"><a class="header-anchor" href="#_37-3-1-gpio驱动" aria-hidden="true">#</a> 37.3.1 GPIO驱动</h3><p>本次实验的SPI片选信号脚为P205，它的驱动如下：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>static struct IODev gSPIDACCSDev = {
    .name = &quot;SPIDAC CS&quot;,
    .port = BSP_IO_PORT_02_PIN_05,
    .Init = IODrvInit,
    .Read = IODrvRead,
    .Write = IODrvWrite,
    .next = NULL
};

void IODevicesCreate(void)
{
    IODeviceInsert(&amp;gSPIDACCSDev);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于GPIO的驱动函数参考《32.4.1 GPIO驱动》。</p><h3 id="_37-3-2-spi驱动" tabindex="-1"><a class="header-anchor" href="#_37-3-2-spi驱动" aria-hidden="true">#</a> 37.3.2 SPI驱动</h3><p>参考《35.4.2 SPI驱动》。</p><h2 id="_37-4-dac驱动程序" tabindex="-1"><a class="header-anchor" href="#_37-4-dac驱动程序" aria-hidden="true">#</a> 37.4 DAC驱动程序</h2><h3 id="_37-4-1-spi-dac设备对象封装" tabindex="-1"><a class="header-anchor" href="#_37-4-1-spi-dac设备对象封装" aria-hidden="true">#</a> 37.4.1 SPI-DAC设备对象封装</h3><p>要操纵SPI-DAC模块，只需要初始化、写入数值。为了更具观赏性，还可以提供写入多个数值的操作。把这些特性封装为一个结构体，代码如下（dev_spi_dac.h）：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>typedef struct SPIDACDev{
    char *name;
    int (*Init)(struct SPIDACDev *ptdev);
    int (*SetValue)(struct SPIDACDev *ptdev, float voltage);
    int (*Write)(struct SPIDACDev *ptdev, unsigned char *buf, unsigned int length);
}SPIDACDevice;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在dev_spi_dac.c里构造一个SPIDACDevice结构体，并给上层代码提高获得这个结构体的函数，代码如下：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>static SPIDACDevice gDAC = {
    .name = &quot;SPI DAC&quot;,
    .Init       = SPIDACDevInit,
    .SetValue   = SPIDACDevSetValue,
    .Write      = SPIDACDevWrite,
};

struct SPIDACDev *SPIDACGetDevice(void)
{
    return &amp;gDAC;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_37-4-2-初始化spi-dac" tabindex="-1"><a class="header-anchor" href="#_37-4-2-初始化spi-dac" aria-hidden="true">#</a> 37.4.2 初始化SPI-DAC</h3><p>初始化SPI-DAC模块，本质就是初始化SPI控制器，代码如下：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>static int SPIDACDevInit (struct SPIDACDev *ptdev)
{
    if(NULL == ptdev)   return -EINVAL;
    gSPI = SPIDeviceFind(&quot;SPIDAC SPI&quot;);
    if(NULL == gSPI)    return -ENODEV;
    if(ESUCCESS != gSPI-&gt;Init(gSPI))    return -EIO;
    return ESUCCESS;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_37-4-3-输出一个模拟量" tabindex="-1"><a class="header-anchor" href="#_37-4-3-输出一个模拟量" aria-hidden="true">#</a> 37.4.3 输出一个模拟量</h3><p>要输出指定数字量，需要根据TLC5615的数据格式进行移位计算，再通过SPI发送给TLC5615：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>static int SPIDACDevSetValue (struct SPIDACDev *ptdev, float voltage)
{
    if(NULL == ptdev)   return -EINVAL;
    if(NULL == gSPI)    return -EINVAL;
    if(DAC_OUT_MAX_VOLTAGE &lt; voltage)     return -EINVAL;

    unsigned short value = (unsigned short)((voltage*1024)/(DAC_OUT_MAX_VOLTAGE));
    value = (unsigned short)(value&lt;&lt;2);
    return gSPI-&gt;Write(gSPI, (unsigned char*)&amp;value, 2);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_37-4-4-输出n个模拟量" tabindex="-1"><a class="header-anchor" href="#_37-4-4-输出n个模拟量" aria-hidden="true">#</a> 37.4.4 输出N个模拟量</h3><p>为了方便用户使用，将N个数字量在模块驱动函数内部进行格式转换，然后再通过SPI传输给转换芯片：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>static int SPIDACDevWrite(struct SPIDACDev *ptdev, unsigned char *buf, unsigned int length)
{
    if(NULL == ptdev)   return -EINVAL;
    if(NULL == gSPI)    return -EINVAL;
    if(NULL == buf)     return -EINVAL;
    if(0 == length)     return -EINVAL;
    
    unsigned short *pbuf = (unsigned short*)buf;
    for(unsigned int i=0; i&lt;length; i+=2)
    {
        pbuf[i] = (unsigned short)(pbuf[i]&lt;&lt;2);
    }
    
    return gSPI-&gt;Write(gSPI, buf, length);
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_37-5-测试程序" tabindex="-1"><a class="header-anchor" href="#_37-5-测试程序" aria-hidden="true">#</a> 37.5 测试程序</h2><p>本次实验使用SPI传输，连续发送0~4V的电压给DAC模块，以实现呼吸灯效果：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>void DeviceTest(void)
{
    UartDevicesRegister();
    TimerDevicesRegister();
    SPIDevicesRegister();
    IODevicesRegister();
    
    SPIDACDevice *pDevice = SPIDACGetDevice();
    if(NULL == pDevice)
    {
        xprintf(&quot;Failed to Find SPI DAC Devide!\\r\\n&quot;);
        return;
    }
    pDevice-&gt;Init(pDevice);
    
    bool dir = false;
    volatile float value = 0;
    while(1)
    {
        if(value &gt; 4)
            dir = true;
        else if(value &lt; 0)
            dir = false;
        
        if(dir)
            value += (float)0.5;
        else
            value -= (float)0.5;
        pDevice-&gt;SetValue(pDevice, value);
        mdelay(300);
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_37-6-测试结果" tabindex="-1"><a class="header-anchor" href="#_37-6-测试结果" aria-hidden="true">#</a> 37.6 测试结果</h2><p>将SPI-DAC模块插入到扩展板上后，再将程序烧写到开发板上运行，用户可以看到SPI-DAC模块上的LED呈现呼吸灯效果。</p>`,45),r=[s];function l(v,t){return i(),n("div",null,r)}const u=e(a,[["render",l],["__file","chapter37.html.vue"]]);export{u as default};
