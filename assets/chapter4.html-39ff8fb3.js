import{_ as n,o as s,c as a,e as t}from"./app-a98b8345.js";const p={},e=t(`<h1 id="第4章-瑞萨-mcu-源码设计规范" tabindex="-1"><a class="header-anchor" href="#第4章-瑞萨-mcu-源码设计规范" aria-hidden="true">#</a> 第4章 瑞萨 MCU 源码设计规范</h1><p>本章目标</p><ul><li>了解 FSP 源码结构和设计规范</li><li>理解模块设计思路与调用方法</li></ul><h1 id="_4-1-总体框架" tabindex="-1"><a class="header-anchor" href="#_4-1-总体框架" aria-hidden="true">#</a> 4.1 总体框架</h1><h3 id="_4-1-1-源码层次与目录" tabindex="-1"><a class="header-anchor" href="#_4-1-1-源码层次与目录" aria-hidden="true">#</a> 4.1.1 源码层次与目录</h3><p>瑞萨给开发者提供了“灵活配置软件包”（FSP，Flexible Software Package），从底往上提供了多层次的软件，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-4/image1.png" alt="image1"></p><p>从下往上可以分为这几层：</p><ol><li>板级支持包（BSP，Board Support Package）：简单地说，从上电开始执行的第 1 条指令直到 main 函数，这个过程的代码就是 BSP 提供的。它的主要任务是确保 MCU 从复位状态切换为用户应用程序状态。在此过程中，它将设置时钟、中断、栈、堆及 C 语言运行环境。它还会配置端口的 I/O 引脚，并执行任何特定的电路板初始化。函数以&quot;R_BSP_&quot;开头，宏以&quot;BSP_&quot;开头，数据类型以&quot;_bsp&quot;开头。</li><li>硬件抽象层驱动（HAL，Hardware Abstraction Layer Drivers）：简单地说，使用 BSP的代码可以让程序运行到 main 函数，但是在 main 函数里怎么去访问 GPIO、I2C、SPI 等设备，需要使用 HAL 的代码。HAL 就是对 MCU 寄存器操作的封装，通过 HAL 函数，编写程序时无需关注底层具体的硬件操作，而是把精力放在更上层的操作上，这样编写的代码也更容易移植到其他 MCU 上。函数名以&quot;R_&quot;开头。</li><li>中间件(Middleware)：中间件层位于 HAL 层之上、用户应用程序之下，为应用程序提供功能栈和协议。比如想模拟一个 USB 串口时，HAL 层已经实现了 USB 的传输，而 USB 串口协议是在 USB 传输之上实现的一套机制，USB 串口协议是一套纯软件的协议，可以归为中间件。</li><li>实时操作系统（RTOS，Real Time Operating System）：它仅仅依赖于底下的 BSP，提供多任务、同步互斥等功能。</li><li>应用程序（Application）：在最上层，它可以使用 HAL 函数访问硬件，也可以使用中间件完成复杂的功能。</li></ol><p>以第 1 个程序为例，工程目录如下：</p><ol><li>BSP 源码：从文件名字可以知道功能为启动、系统、时钟/中断相关的操作</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-4/image2.jpg" style="zoom:67%;"><ol start="2"><li>HAL 源码：这个程序只涉及 GPIO 的操作，所以只有 ioport 相关的 HAL 源码</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-4/image3.jpg" style="zoom:80%;"><ol start="3"><li>BSP 的配置文件：这些文件是 FSP 的配置工具生成的，里面是 BSP 相关的参数</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-4/image4.jpg" style="zoom:80%;"><ol start="4"><li>用户数据：比如用户在 FSP 配置界面选择使用哪些 GPIO、哪些 SPI 控制器</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-4/image5.jpg" alt=""></p><ol start="5"><li>用户代码（Application）：可以在 hal_entry.c 里添加自己的代码</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-4/image6.jpg" alt="image2.4"></p><ol start="6"><li>链接脚本：使用 e2 studio 时，它是使用 GNU GCC 工具链来编译程序，需要链接脚本</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-4/image7.jpg" alt=""></p><h3 id="_4-1-2-调用过程示例" tabindex="-1"><a class="header-anchor" href="#_4-1-2-调用过程示例" aria-hidden="true">#</a> 4.1.2 调用过程示例</h3><p>以工程“MyBlinkyProject”为例，在 hal_entry.c 中，操作 LED 的代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">hal_entry</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* TODO: add your own code here */</span>
    <span class="token keyword">extern</span> <span class="token class-name">bsp_leds_t</span> g_bsp_leds<span class="token punctuation">;</span>
    <span class="token class-name">bsp_leds_t</span> Leds <span class="token operator">=</span> g_bsp_leds<span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinWrite</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g_ioport<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> Leds<span class="token punctuation">.</span>p_leds<span class="token punctuation">[</span>BSP_LED_LED1<span class="token punctuation">]</span><span class="token punctuation">,</span>         			BSP_IO_LEVEL_LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>

        g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinWrite</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g_ioport<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> Leds<span class="token punctuation">.</span>p_leds<span class="token punctuation">[</span>BSP_LED_LED1<span class="token punctuation">]</span><span class="token punctuation">,</span>        			BSP_IO_LEVEL_HIGH<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_SECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">BSP_TZ_SECURE_BUILD</span></span>
    <span class="token comment">/* Enter non-secure code */</span>
    <span class="token function">R_BSP_NonSecureEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第9行的“g_ioport.p_api-&gt;pinWrite”就是调用r_ioport.c里的“R_IOPORT_PinWrite”函数，这是 Application 对 HAL 库函数的调用。</li></ul><h2 id="_4-2-模块设计思想" tabindex="-1"><a class="header-anchor" href="#_4-2-模块设计思想" aria-hidden="true">#</a> 4.2 模块设计思想</h2><p>使用 FSP 编写程序时有 4 个层次：Application 是用户编写的，Middleware 是第 3 方的代码，BSP 的代码量很少，所以 HAL 层是 FSP 的核心。HAL 层是各个模块的驱动程序，这些驱动程序被称为Module，一个Module向上提供接口供人调用，向下可能要用到其他Module，如下：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-4/image8.jpg" style="zoom:50%;"><p>怎么使用一个 Module 提供的接口呢？以工程“MyBlinkyProject”为例，有以下 2 种方法调用 r_ioport.c 提供接口：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinWrite</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g_ioport<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> Leds<span class="token punctuation">.</span>p_leds<span class="token punctuation">[</span>BSP_LED_LED1<span class="token punctuation">]</span><span class="token punctuation">,</span> BSP_IO_LEVEL_LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">R_IOPORT_PinWrite</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g_ioport_ctrl<span class="token punctuation">,</span> Leds<span class="token punctuation">.</span>p_leds<span class="token punctuation">[</span>BSP_LED_LED1<span class="token punctuation">]</span><span class="token punctuation">,</span> BSP_IO_LEVEL_LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>它们有何不同？这就涉及 FSP 源码设计的理念：</p><ol><li>配置与接口分离</li><li>接口与实例分离</li></ol><h3 id="_4-2-1-配置与接口分离" tabindex="-1"><a class="header-anchor" href="#_4-2-1-配置与接口分离" aria-hidden="true">#</a> 4.2.1 配置与接口分离</h3><p>以 GPIO 为例，如下图有 1 个 LED、1 个按键：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-4/image9.jpg" style="zoom:50%;"><p>对于同一个 MCU，PIN1、PIN2 的操作是类似的，它们的接口函数可以只写一套。但是PIN1 需要被设置为输出功能，PIN2 需要被设置为输入功能并且使能它的内部上拉电阻。即：PIN1、PIN2 的接口函数可以是同一套，但是它们的配置是不一样的。</p><p>对于 ioport，使用 ioport_pin_cfg_t 结构体来描述一个引脚的配置：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">st_ioport_pin_cfg</span>
<span class="token punctuation">{</span>
    <span class="token class-name">uint32_t</span> pin_cfg<span class="token punctuation">;</span> <span class="token comment">///&lt; Pin PFS configuration - Use ioport_cfg_options_t parameters</span>
  						  to configure
    <span class="token class-name">bsp_io_port_pin_t</span> pin<span class="token punctuation">;</span> <span class="token comment">///&lt; Pin identifier</span>
<span class="token punctuation">}</span> <span class="token class-name">ioport_pin_cfg_t</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>比如对于 PIN1，在 FSP 的配置工具里把它配置为输出；对于 PIN2，在 FSP 的配置工具里把它配置为输入、上拉，可以得到下面 2 项：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">const</span> <span class="token class-name">ioport_pin_cfg_t</span> g_bsp_pin_cfg_data<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span><span class="token punctuation">{</span>
……
<span class="token punctuation">{</span> <span class="token punctuation">.</span>pin <span class="token operator">=</span> BSP_IO_PORT_00_PIN_05<span class="token punctuation">,</span> 
 <span class="token punctuation">.</span>pin_cfg <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint32_t</span><span class="token punctuation">)</span> IOPORT_CFG_IRQ_ENABLE
 <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token class-name">uint32_t</span><span class="token punctuation">)</span> IOPORT_CFG_PORT_DIRECTION_INPUT 
 <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token class-name">uint32_t</span><span class="token punctuation">)</span> IOPORT_CFG_PULLUP_ENABLE<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">{</span> <span class="token punctuation">.</span>pin <span class="token operator">=</span> BSP_IO_PORT_00_PIN_06<span class="token punctuation">,</span> 
 <span class="token punctuation">.</span>pin_cfg <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint32_t</span><span class="token punctuation">)</span> IOPORT_CFG_PORT_DIRECTION_OUTPUT
 <span class="token operator">|</span> <span class="token punctuation">(</span><span class="token class-name">uint32_t</span><span class="token punctuation">)</span> IOPORT_CFG_PORT_OUTPUT_LOW<span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
……
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用硬件前，需要使用接口函数根据用户提供的配置信息来配置硬件。对于 ioport，使用 ioport_api_t 结构体来描述引脚的接口函数，在 r_ioport.c 里可以看到如下结构体：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* IOPort Implementation of IOPort Driver */</span>
<span class="token keyword">const</span> <span class="token class-name">ioport_api_t</span> g_ioport_on_ioport <span class="token operator">=</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">.</span>open <span class="token operator">=</span> R_IOPORT_Open<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>close <span class="token operator">=</span> R_IOPORT_Close<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>pinsCfg <span class="token operator">=</span> R_IOPORT_PinsCfg<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>pinCfg <span class="token operator">=</span> R_IOPORT_PinCfg<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>pinEventInputRead <span class="token operator">=</span> R_IOPORT_PinEventInputRead<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>pinEventOutputWrite <span class="token operator">=</span> R_IOPORT_PinEventOutputWrite<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>pinRead <span class="token operator">=</span> R_IOPORT_PinRead<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>pinWrite <span class="token operator">=</span> R_IOPORT_PinWrite<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>portDirectionSet <span class="token operator">=</span> R_IOPORT_PortDirectionSet<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>portEventInputRead <span class="token operator">=</span> R_IOPORT_PortEventInputRead<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>portEventOutputWrite <span class="token operator">=</span> R_IOPORT_PortEventOutputWrite<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>portRead <span class="token operator">=</span> R_IOPORT_PortRead<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>portWrite <span class="token operator">=</span> R_IOPORT_PortWrite<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于 ioport，配置与接口是分离的：在 ioport_cfg_t 参数里指定引脚、指定配置值，然后调用“pinCfg”函数指针去配置引脚。使用 FSP 的配置工具时，选择某个引脚、设置它的参数，就会生成对应的 ioport_cfg_t 结构体。当我们编写程序调用 r_ioport.c 里的pinCfg”函数指针时，传入这个 ioport_cfg_t 结构体。</p><h3 id="_4-2-2-接口与实例分离" tabindex="-1"><a class="header-anchor" href="#_4-2-2-接口与实例分离" aria-hidden="true">#</a> 4.2.2 接口与实例分离</h3><p>假设有如下图所示的两代产品，它们的 LED 接法不一样：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-4/image10.jpg" alt="image2.7" style="zoom:50%;"><p>对于第 1 代产品，在 r_ioport.c 里已经实现了如下结构体：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* IOPort Implementation of IOPort Driver */</span>
<span class="token keyword">const</span> <span class="token class-name">ioport_api_t</span> g_ioport_on_ioport <span class="token operator">=</span>
<span class="token punctuation">{</span>
     <span class="token punctuation">.</span>open <span class="token operator">=</span> R_IOPORT_Open<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>close <span class="token operator">=</span> R_IOPORT_Close<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>pinsCfg <span class="token operator">=</span> R_IOPORT_PinsCfg<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>pinCfg <span class="token operator">=</span> R_IOPORT_PinCfg<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>pinEventInputRead <span class="token operator">=</span> R_IOPORT_PinEventInputRead<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>pinEventOutputWrite <span class="token operator">=</span> R_IOPORT_PinEventOutputWrite<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>pinRead <span class="token operator">=</span> R_IOPORT_PinRead<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>pinWrite <span class="token operator">=</span> R_IOPORT_PinWrite<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>portDirectionSet <span class="token operator">=</span> R_IOPORT_PortDirectionSet<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>portEventInputRead <span class="token operator">=</span> R_IOPORT_PortEventInputRead<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>portEventOutputWrite <span class="token operator">=</span> R_IOPORT_PortEventOutputWrite<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>portRead <span class="token operator">=</span> R_IOPORT_PortRead<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>portWrite <span class="token operator">=</span> R_IOPORT_PortWrite<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于第 2 代产品，我们可以在 r_spiioport.c 里实现如下结构体：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* IOPort Implementation of SPIIOPort Driver */</span>
<span class="token keyword">const</span> <span class="token class-name">ioport_api_t</span> g_spiioport_on_ioport <span class="token operator">=</span>
<span class="token punctuation">{</span>
     <span class="token punctuation">.</span>open <span class="token operator">=</span> R_SPIIOPORT_Open<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>close <span class="token operator">=</span> R_SPIIOPORT_Close<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>pinsCfg <span class="token operator">=</span> R_SPIIOPORT_PinsCfg<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>pinCfg <span class="token operator">=</span> R_SPIIOPORT_PinCfg<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>pinEventInputRead <span class="token operator">=</span> R_SPIIOPORT_PinEventInputRead<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>pinEventOutputWrite <span class="token operator">=</span> R_SPIIOPORT_PinEventOutputWrite<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>pinRead <span class="token operator">=</span> R_SPIIOPORT_PinRead<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>pinWrite <span class="token operator">=</span> R_SPIIOPORT_PinWrite<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>portDirectionSet <span class="token operator">=</span> R_SPIIOPORT_PortDirectionSet<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>portEventInputRead <span class="token operator">=</span> R_SPIIOPORT_PortEventInputRead<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>portEventOutputWrite <span class="token operator">=</span> R_SPIIOPORT_PortEventOutputWrite<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>portRead <span class="token operator">=</span> R_SPIIOPORT_PortRead<span class="token punctuation">,</span>
     <span class="token punctuation">.</span>portWrite <span class="token operator">=</span> R_SPIIOPORT_PortWrite<span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在有两个接口结构体：g_ioport_on_ioport、g_spiioport_on_ioport，使用哪一个？在哪里指定？需要引入另一个概念：实例。以 ioport 为例，有如下结构体类型：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/** This structure encompasses everything that is needed to use an instance of this 
interface.
*/</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">st_ioport_instance</span>
<span class="token punctuation">{</span>
 <span class="token class-name">ioport_ctrl_t</span> <span class="token operator">*</span> p_ctrl<span class="token punctuation">;</span> <span class="token comment">///&lt; Pointer to the control structure for this instance</span>
 <span class="token class-name">ioport_cfg_t</span> <span class="token keyword">const</span> <span class="token operator">*</span> p_cfg<span class="token punctuation">;</span> <span class="token comment">///&lt; Pointer to the configuration structure for this instance</span>
 <span class="token class-name">ioport_api_t</span> <span class="token keyword">const</span> <span class="token operator">*</span> p_api<span class="token punctuation">;</span> <span class="token comment">///&lt; Pointer to the API structure for this instance</span>
<span class="token punctuation">}</span> <span class="token class-name">ioport_instance_t</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>ioport_instance_t</code> 结构体中有 3 个成员：</p><ol><li>p_cfg 指针：使用不同的引脚、不同的配置时，就让它指向一个对应的配置结构体；</li><li>p_api 指针：使用不同的硬件接口时，就让它指向对应的接口函数结构体；</li><li>p_ctrl 指针：起辅助作用，比如用来标记是否启用了该模块、记录它的寄存器基地址</li></ol><p>以工程“MyBlinkyProject”为例，在 ra_gen\\common_data.c 中定义了一个实例化对象：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">const</span> <span class="token class-name">ioport_instance_t</span> g_ioport <span class="token operator">=</span>
<span class="token punctuation">{</span> <span class="token punctuation">.</span>p_api <span class="token operator">=</span> <span class="token operator">&amp;</span>g_ioport_on_ioport<span class="token punctuation">,</span> <span class="token punctuation">.</span>p_ctrl <span class="token operator">=</span> <span class="token operator">&amp;</span>g_ioport_ctrl<span class="token punctuation">,</span> <span class="token punctuation">.</span>p_cfg <span class="token operator">=</span> <span class="token operator">&amp;</span>g_bsp_pin_cfg<span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>g_ioport 里：</p><ul><li>p_cfg 指向 g_bsp_pin_cfg，它是配置信息；</li><li>p_api 指向 g_ioport_on_ioport，它是接口信息；</li><li>p_ctrl 指向 g_ioport_ctrl，它只是被用来记录驱动是否被打开。</li></ul><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-4/image11.png" alt=""></p><p>对于第 1 代产品，g_ioport 的 p_api 指向 g_ioport_on_ioport；对于第 2 代产品，让它指向 g_spiioport_on_ioport。使用实例化结构体 g_ioport 来操作 LED 时，即使更换了底层的操作接口，用户的代码仍然无需改变：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinWrite</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g_ioport<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> Leds<span class="token punctuation">.</span>p_leds<span class="token punctuation">[</span>BSP_LED_LED1<span class="token punctuation">]</span><span class="token punctuation">,</span> BSP_IO_LEVEL_LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果直接使用接口函数操作 LED 的话，如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">R_IOPORT_PinWrite</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g_ioport_ctrl<span class="token punctuation">,</span> Leds<span class="token punctuation">.</span>p_leds<span class="token punctuation">[</span>BSP_LED_LED1<span class="token punctuation">]</span><span class="token punctuation">,</span> BSP_IO_LEVEL_LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对于第 2 代产品，就需要修改成另一个接口，如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">R_SPIIOPORT_PinWrite</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g_ioport_ctrl<span class="token punctuation">,</span> Leds<span class="token punctuation">.</span>p_leds<span class="token punctuation">[</span>BSP_LED_LED1<span class="token punctuation">]</span><span class="token punctuation">,</span> BSP_IO_LEVEL_LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用实例化结构体来操作硬件，在代码的统一性、可读性和可移植性上是有很大优势的。它允许应用程序和硬件之间的进一步抽象。更改底层的外围设备时，只需要修改实例化结构体，不需要更改应用层代码。在实际开发过程中，也可以直接调用底层 API 函数（比如 R_IOPORT_PinWrite），这有两个原因：</p><ol><li>基于编译器优化的考虑：假设定义了 10 个 API 接口函数，但是应用层代码只用到 1 个，那么另外的 9 个函数是可以被“优化掉”的，它们可以不被编进可执行程序里。如果使用实例化结构体的话，因为 p_api 里引用了这 10 个函数，它们都不会被优化掉。</li><li>一些客户可能只希望调用最底层的 API（避免过于繁琐的函数指针）。</li></ol><h2 id="_4-3-代码规范" tabindex="-1"><a class="header-anchor" href="#_4-3-代码规范" aria-hidden="true">#</a> 4.3 代码规范</h2><h3 id="_4-3-1-术语" tabindex="-1"><a class="header-anchor" href="#_4-3-1-术语" aria-hidden="true">#</a> 4.3.1 术语</h3><ul><li>**模块（Module）：**模块可以是外设驱动程序、纯软件或介于这两者之间，并且是 FSP 的构建模块。模块通常是独立的单元，但它们可能依赖于其他模块。可以通过组合多个模块来构建应用程序，为用户提供所需功能。</li><li><strong>模块实例（Module Instance）：</strong> 单个、独立的实例化（配置）模块。比如 r_ioport.c实现了 GPIO 的操作，它是一个 Module。要操作某个引脚时，就需要“模块实例”即“ioport_instance_t 结构体”，它里面含有配置信息、接口信息。</li><li><strong>接口（</strong> <strong>Interfaces）：</strong> 接口包含 API 定义，具有相似功能的模块可以共用这些 API 定义。模块通过这些定义提供常用功能。通过这些 API 定义，使用相同接口的模块可以互换使用。可以将接口视为两个模块之间的合同，两个模块均同意使用合同中达成一致的信息进行协作。接口只是定义，并不会增加代码的大小。比如在 r_ioport_api.h 里定义了 ioport 的 API。</li><li><strong>实例（Instances）：</strong> 接口规定所提供的功能，而实例则真正实现了这些功能。比如r_ioport.h 里定义了 API 接口，在 r_ioport.c 里实现了这些接口，r_ioport.c 就是“实例”。</li><li><strong>驱动程序（</strong> <strong>Drivers）：</strong> 驱动程序是一种特定类型的模块，可以直接修改 RA 产品家族MCU 上的寄存器。</li><li>**堆叠（Stacks）：**这个单词很容易跟 C 语言里的堆（heap）、栈（stack）混淆，但是在这里它不是堆栈的意思。FSP 架构所采用的设计方式是，模块可以协同工作以形成一个堆叠。堆叠就是由顶层模块及其所有依赖项组成，简单地说就是多个有依赖关系的模块。</li><li><strong>应用程序（Application）</strong>： 归用户所有并由用户维护的代码。</li><li><strong>回调函数（Callback Functions）：</strong> 当有事件发生时（例如，USB 接收到一些数据时），将调用这些函数。它们是应用程序的组成部分，如果用于中断，应尽量简短，因为它们将在中断服务程序内运行，会阻止其他中断执行。</li></ul><h3 id="_4-3-2-api-命名规则" tabindex="-1"><a class="header-anchor" href="#_4-3-2-api-命名规则" aria-hidden="true">#</a> 4.3.2 API 命名规则</h3><p>一般来说，内部函数遵循“NounNounVerb”（名词名词动词）的命名约定，例如CommunicationAbort()。函数的返回值表示是否成功，函数要对外输出结果时，这些结果只在输出参数中返回，并且第一个参数始终是指向其控制结构体的指针。下面是 FSP 中常用前缀：</p><ol><li><strong>R_BSP_xxx：</strong> BSP 函数的前缀，例如 R_BSP_VersionGet()。</li><li><strong>BSP_xxx：</strong> BSP 宏的前缀，例如 BSP_IO_LEVEL_LOW。</li><li><strong>FSP_xxx：</strong> 常用的 FSP的前缀，主要定义错误代码（例如 FSP_ERR_INVALID_ARGUMENT）和版本信息（例如 FSP_VERSION_BUILD）。</li><li><strong>g_&lt;interface&gt;<em>on</em>&lt;instance&gt;：</strong> 实例的常量全局结构体的名称，用这个结构体管理 API 的各个实现函数，比如 g_ioport_on_ioport 结构体里是 r_ioport.c 实现的各个 API 函数。</li><li><strong>r_&lt;interface&gt;_api.h：</strong> 接口模块头文件的名称，例如 r_spi_api.h。</li><li><strong>R_&lt;MODULE&gt;_&lt;Function&gt;：</strong> FSP 驱动程序 API 的名称，例如 R_SPI_WriteRead()。</li><li><strong>RM_&lt;MODULE&gt;_&lt;Function&gt;：</strong> 中间件函数的名称，例如 RM_BLE_ABS_Open()。</li></ol>`,74),o=[e];function i(c,l){return s(),a("div",null,o)}const u=n(p,[["render",i],["__file","chapter4.html.vue"]]);export{u as default};
