import{_ as n,o as s,c as a,e}from"./app-a98b8345.js";const i={},t=e(`<h1 id="第4章-模块使用说明" tabindex="-1"><a class="header-anchor" href="#第4章-模块使用说明" aria-hidden="true">#</a> 第4章 模块使用说明</h1><p>如果要自己创建工程，那么可以阅读本章。建议从最后一个程序“1803_cpu_usage”里的复制各类驱动代码。</p><h2 id="_4-1-led驱动使用方法" tabindex="-1"><a class="header-anchor" href="#_4-1-led驱动使用方法" aria-hidden="true">#</a> 4.1 LED驱动使用方法</h2><p>本节介绍板载LED驱动的使用方法，最终实现控制LED灯的亮灭。</p><p>驱动程序为drivers\\drv_gpio.c，使用方法如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">// 包含头文件</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_gpio.h&quot;</span></span>

<span class="token comment">// 先获得设备</span>
<span class="token keyword">struct</span> <span class="token class-name">IODev</span> <span class="token operator">*</span>pLedDev <span class="token operator">=</span> <span class="token function">IOGetDecvice</span><span class="token punctuation">(</span><span class="token string">&quot;UserLed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   

<span class="token comment">// 初始化</span>
pLedDev<span class="token operator">-&gt;</span><span class="token function">Init</span><span class="token punctuation">(</span>pLedDev<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 输出数值</span>
bool state <span class="token operator">=</span> false<span class="token punctuation">;</span>
pLedDev<span class="token operator">-&gt;</span><span class="token function">Write</span><span class="token punctuation">(</span>pLedDev<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
state <span class="token operator">=</span> <span class="token operator">!</span>state<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-2-lcd驱动使用方法" tabindex="-1"><a class="header-anchor" href="#_4-2-lcd驱动使用方法" aria-hidden="true">#</a> 4.2 LCD驱动使用方法</h2><p>本节介绍板载LCD驱动的使用方法，能够在LCD上显示文字。</p><h3 id="_4-2-1-硬件接线" tabindex="-1"><a class="header-anchor" href="#_4-2-1-硬件接线" aria-hidden="true">#</a> 4.2.1 硬件接线</h3><p>LCD是板载的，原理图如下：</p><p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image1.png" alt=""></p><p>各引脚的意思如下表：</p><table><thead><tr><th style="text-align:left;">显示屏接口号</th><th>接口含义</th><th>MCU引脚号</th><th>MCU引脚模式</th></tr></thead><tbody><tr><td style="text-align:left;">13-MISO</td><td>SPI从机的输出引脚，主机的输入引脚</td><td>P100</td><td>SCI0 SPI的RXD0</td></tr><tr><td style="text-align:left;">14-CS</td><td>SPI片选脚，低电平有效</td><td>P103</td><td>GPIO Out</td></tr><tr><td style="text-align:left;">15-RS</td><td>ST7796s的数据/命令切换引脚，高电平表示接收数据，低电平表示接收命令</td><td>P104</td><td>GPIO Out</td></tr><tr><td style="text-align:left;">16-SCK</td><td>SPI的时钟输出引脚</td><td>P102</td><td>SCI0 SPI的SCK0</td></tr><tr><td style="text-align:left;">17-MOSI</td><td>SPI主机的输出引脚，从机的输入引脚</td><td>P101</td><td>SCI0 SPI的TXD0</td></tr><tr><td style="text-align:left;">18-RESET</td><td>ST7796s的硬件复位引脚</td><td>P105</td><td>GPIO Out</td></tr><tr><td style="text-align:left;">19-PWM</td><td>显示屏的背光控制引脚，高电平点亮</td><td>P608</td><td>GPIO Out/GPT5的GTIOC5A</td></tr></tbody></table><h3 id="_4-2-2-rasc配置" tabindex="-1"><a class="header-anchor" href="#_4-2-2-rasc配置" aria-hidden="true">#</a> 4.2.2 RASC配置</h3><p>先配置GPIO：SPI片选P103、LCD RS引脚P104（数据/命令切换）、LCD复位引脚P105、LCD背光引脚P608,把它们都配置为输出引脚，以P103为例如下图配置：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image2.png" style="zoom:75%;"><p>再配置SPI接口，如下：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image3.png" style="zoom:75%;"><p>接着增加SPI stack：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image4.png" style="zoom:75%;"><p>进行配置：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image5.png" style="zoom:75%;"><h3 id="_4-2-3-函数说明" tabindex="-1"><a class="header-anchor" href="#_4-2-3-函数说明" aria-hidden="true">#</a> 4.2.3 函数说明</h3><p>LCD的驱动程序分为2层：</p><p>① 底层硬件相关的驱动：drivers\\drv_lcd.c，它被封装成了一个DisplayDevice结构体</p><p>② 打印字符的驱动：drivers\\drv_font.c</p><p>使用时，包含drv_font.h，使用里面的函数即可。</p><p>函数说明如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*
 *  函数名：LCD_Init
 *  功能描述：初始化LCD
 *  输入参数：无
 *  输出参数：无
 *  返回值：无
 */</span>
<span class="token keyword">void</span> <span class="token function">LCD_Init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
 *  函数名：LCD_Clear
 *  功能描述：清屏函数
 *  输入参数：无
 *  输出参数：无
 *  返回值：无
*/</span>
<span class="token keyword">void</span> <span class="token function">LCD_Clear</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
 *  函数名：LCD_PutChar
 *  功能描述：显示一个字符
 *  输入参数：x --&gt; x坐标
 *            y --&gt; y坐标
 *            c --&gt;   显示的字符
 *  输出参数：无
 *  返回值：无
 */</span>
<span class="token keyword">void</span> <span class="token function">LCD_PutChar</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">,</span> <span class="token keyword">char</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
 *  函数名：LCD_PrintString
 *  功能描述：显示一个字符串
 *  输入参数：x --&gt; x坐标
 *            y --&gt; y坐标
 *            str --&gt;   显示的字符串
 *  输出参数：无
 *  返回值：打印了多少个字符
 */</span>
<span class="token keyword">int</span> <span class="token function">LCD_PrintString</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token keyword">char</span> <span class="token operator">*</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
 *  函数名：LCD_ClearLine
 *  功能描述：清除一行
 *  输入参数：x - 从这里开始
 *            y - 清除这行
 *  输出参数：无
 *  返回值：无
 */</span>
<span class="token keyword">void</span> <span class="token function">LCD_ClearLine</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
 *  LCD_PrintHex
 *  功能描述：以16进制显示数值
 *  输入参数：x - x坐标
 *            y - y坐标
 *            val -   显示的数据
 *            pre -   非零时显示&quot;0x&quot;前缀
 *  输出参数：无
 *  返回值：打印了多少个字符
 */</span>
<span class="token keyword">int</span> <span class="token function">LCD_PrintHex</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">,</span> <span class="token class-name">uint32_t</span> val<span class="token punctuation">,</span> <span class="token class-name">uint8_t</span> pre<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/*
 *  LCD_PrintSignedVal
 *  功能描述：以10进制显示一个数值
 *  输入参数：x --&gt; x坐标(0~15)
 *            y --&gt; y坐标(0~7)
 *            val --&gt;   显示的数据
 *  输出参数：无
 *  返回值：打印了多少个字符
*/</span>
<span class="token keyword">int</span> <span class="token function">LCD_PrintSignedVal</span><span class="token punctuation">(</span><span class="token keyword">int</span> x<span class="token punctuation">,</span> <span class="token keyword">int</span> y<span class="token punctuation">,</span> <span class="token class-name">int32_t</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**********************************************************************
 *  LCD_GetFrameBuffer
 *  功能描述：获得LCD的Framebuffer
 *  输入参数：无
 *  输出参数：pXres/pYres/pBpp - 用来保存分辨率、bpp
 *  返回值：Framebuffer首地址
 * -----------------------------------------------
 * 2023/08/31        V1.0     韦东山       创建
 ***********************************************************************/</span>
<span class="token keyword">void</span> <span class="token operator">*</span> <span class="token function">LCD_GetFrameBuffer</span><span class="token punctuation">(</span><span class="token class-name">uint32_t</span> <span class="token operator">*</span>pXres<span class="token punctuation">,</span> <span class="token class-name">uint32_t</span> <span class="token operator">*</span>pYres<span class="token punctuation">,</span> <span class="token class-name">uint32_t</span> <span class="token operator">*</span>pBpp<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**********************************************************************
 *  LCD_Flush
 *  功能描述：把Framebuffer的数据全部刷新到LCD
 *  输入参数：无
 *  输出参数：无
 *  返回值：无
 * -----------------------------------------------
 * 2023/08/31        V1.0     韦东山       创建
 ***********************************************************************/</span>
<span class="token keyword">void</span> <span class="token function">LCD_Flush</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**********************************************************************
 *  LCD_FlushRegion
 *  功能描述：刷新LCD的区域
 *  输入参数：col     - LCD的列,取值范围0~127
 *            row - LCD的行,取值范围0~63
 *            width - 宽度
 *            heigh - 高度,必须是8的整数倍
 *  输出参数：无
 *  返回值：无
 * -----------------------------------------------
 * 2023/08/31        V1.0     韦东山       创建
 ***********************************************************************/</span>
<span class="token keyword">void</span> <span class="token function">LCD_FlushRegion</span><span class="token punctuation">(</span><span class="token keyword">int</span> col<span class="token punctuation">,</span> <span class="token keyword">int</span> row<span class="token punctuation">,</span> <span class="token keyword">int</span> width<span class="token punctuation">,</span> <span class="token keyword">int</span> heigh<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**********************************************************************
 *  LCD_ClearFrameBuffer
 *  功能描述：把Framebuffer的数据全部清零
 *  输入参数：无
 *  输出参数：无
 *  返回值：无
 * -----------------------------------------------
 * 2023/08/31        V1.0     韦东山       创建
 ***********************************************************************/</span>
<span class="token keyword">void</span> <span class="token function">LCD_ClearFrameBuffer</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用流程：先调用“LCD_Init()”初始化LCD，然后就可以调用各类“LCD_Print*”函数在Framebuffer中填充内容了。注意，这些函数仅仅是在Framebuffer里构造内容，并没有更新到屏幕上，最后还需要调用“LCD_Flush”函数。</p><h2 id="_4-3-红外遥控器驱动使用方法" tabindex="-1"><a class="header-anchor" href="#_4-3-红外遥控器驱动使用方法" aria-hidden="true">#</a> 4.3 红外遥控器驱动使用方法</h2><p>本节介绍板载红外接收器驱动的使用方法。</p><h3 id="_4-3-1-硬件接线" tabindex="-1"><a class="header-anchor" href="#_4-3-1-硬件接线" aria-hidden="true">#</a> 4.3.1 硬件接线</h3><p>本次实验使用的是板载IRDA模块，其原理图如下图所示：</p><p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image6.png" alt=""></p><p>使用的引脚是P404，属于定时器GPT3的输入输出控制引脚。</p><h3 id="_4-3-2-rasc配置" tabindex="-1"><a class="header-anchor" href="#_4-3-2-rasc配置" aria-hidden="true">#</a> 4.3.2 RASC配置</h3><p>先配置引脚：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image7.png" style="zoom:75%;"><p>再添加GTP Stack：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image8.png" style="zoom:80%;"><p>接着配置GPT Stack：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image9.png" style="zoom:80%;"><p>最后添加ELD Stack：</p><p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image10.png" alt=""></p><h3 id="_4-3-3-函数说明" tabindex="-1"><a class="header-anchor" href="#_4-3-3-函数说明" aria-hidden="true">#</a> 4.3.3 函数说明</h3><p>红外遥控器的驱动分为2部分：</p><p>① 它需要用到GPT3定时器，这套驱动分为2层：硬件驱动drivers/drv_gpt.c，Timer管理程序devices/dev_timer.c</p><p>② 红外驱动：devices\\irda\\dev_irda.c</p><p>使用时，包含dev_irda.h，使用里面的函数即可。</p><p>示例如下“applications\\irda_app.c”：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;dev_irda.h&quot;</span></span>

<span class="token keyword">void</span> <span class="token function">irda_thread_entry</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span>params<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> dev<span class="token punctuation">,</span> val<span class="token punctuation">;</span>
    <span class="token keyword">struct</span> <span class="token class-name">IRDADev</span> <span class="token operator">*</span>pIRDA <span class="token operator">=</span> <span class="token function">IRDADeviceGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    pIRDA<span class="token operator">-&gt;</span><span class="token function">Init</span><span class="token punctuation">(</span>pIRDA<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>ESUCCESS <span class="token operator">==</span> pIRDA<span class="token operator">-&gt;</span><span class="token function">Read</span><span class="token punctuation">(</span>pIRDA<span class="token punctuation">,</span> <span class="token operator">&amp;</span>dev<span class="token punctuation">,</span> <span class="token operator">&amp;</span>val<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-4-无源蜂鸣器驱动使用方法" tabindex="-1"><a class="header-anchor" href="#_4-4-无源蜂鸣器驱动使用方法" aria-hidden="true">#</a> 4.4 无源蜂鸣器驱动使用方法</h2><p>本节介绍板载LED灯驱动的使用方法，最终实现控制LED灯的亮灭。</p><h3 id="_4-4-1-硬件接线" tabindex="-1"><a class="header-anchor" href="#_4-4-1-硬件接线" aria-hidden="true">#</a> 4.4.1 硬件接线</h3><p>无源蜂鸣器的I/O引脚接到扩展板的“GPIO2/PWM”引脚，VCC、GND分别接到扩展板的5V、GND引脚。</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image11.png" style="zoom:75%;"><h3 id="_4-4-2-rasc配置" tabindex="-1"><a class="header-anchor" href="#_4-4-2-rasc配置" aria-hidden="true">#</a> 4.4.2 RASC配置</h3><p>先配置引脚：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image12.png" style="zoom:80%;"><p>在添加timer：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image13.png" style="zoom:80%;"><p>设置PWM：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image14.png" style="zoom:70%;"><h3 id="_4-4-3-函数说明" tabindex="-1"><a class="header-anchor" href="#_4-4-3-函数说明" aria-hidden="true">#</a> 4.4.3 函数说明</h3><p>对应驱动程序为：devices\\dev_passive_buzzer.c。</p><p>使用时，包含dev_passive_buzzer.h，使用里面的函数即可。</p><p>函数说明如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**********************************************************************
 * 函数名称： PassiveBuzzer_Init
 * 功能描述： 无源蜂鸣器的初始化函数
 * 输入参数： 无
 * 输出参数： 无
 * 返 回 值： 无
 * 修改日期：      版本号     修改人	      修改内容
 * -----------------------------------------------
 * 2023/08/04	     V1.0	  韦东山	      创建
 ***********************************************************************/</span>
<span class="token keyword">void</span> <span class="token function">PassiveBuzzer_Init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**********************************************************************
 * 函数名称： PassiveBuzzer_Control
 * 功能描述： 无源蜂鸣器控制函数
 * 输入参数： on - 1-响, 0-不响
 * 输出参数： 无
 * 返 回 值： 无
 * 修改日期：      版本号     修改人	      修改内容
 * -----------------------------------------------
 * 2023/08/04	     V1.0	  韦东山	      创建
 ***********************************************************************/</span>
<span class="token keyword">void</span> <span class="token function">PassiveBuzzer_Control</span><span class="token punctuation">(</span><span class="token keyword">int</span> on<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**********************************************************************
 * 函数名称： PassiveBuzzer_Set_Freq_Duty
 * 功能描述： 无源蜂鸣器控制函数: 设置频率和占空比
 * 输入参数： freq - 频率, duty - 占空比
 * 输出参数： 无
 * 返 回 值： 无
 * 修改日期：      版本号     修改人	      修改内容
 * -----------------------------------------------
 * 2023/08/04	     V1.0	  韦东山	      创建
 ***********************************************************************/</span>
<span class="token keyword">void</span> <span class="token function">PassiveBuzzer_Set_Freq_Duty</span><span class="token punctuation">(</span><span class="token keyword">int</span> freq<span class="token punctuation">,</span> <span class="token keyword">int</span> duty<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-i2c触摸屏驱动使用方法" tabindex="-1"><a class="header-anchor" href="#_4-5-i2c触摸屏驱动使用方法" aria-hidden="true">#</a> 4.5 I2C触摸屏驱动使用方法</h2><h3 id="_4-5-1-硬件接线" tabindex="-1"><a class="header-anchor" href="#_4-5-1-硬件接线" aria-hidden="true">#</a> 4.5.1 硬件接线</h3><p>本章使用的是外接触摸屏，使用FPC排线与主板相连，FPC的I2C原理图如下图所示：</p><p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image15.png" alt=""></p><p>使用的引脚是P409和P410。</p><h3 id="_4-5-2-rasc配置" tabindex="-1"><a class="header-anchor" href="#_4-5-2-rasc配置" aria-hidden="true">#</a> 4.5.2 RASC配置</h3><p>先把P403、P408配置为输出引脚。以P403为例，如下图操作（P408也是类似的）：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image16.png" style="zoom:80%;"><p>再配置I2C模块。先在RASC的“Pin Configuration”里的“Peripherals”找到“Connectivity:IIC”，然后根据硬件设计选择I2C通道。比如本书使用的是P409/P410作为I2C的SDA和SCL，这两个IO属于I2C2的A组引脚，因而选择“IIC2”，然后在展开的引脚配置中的“Pin Group Selection”选择“_A_only”并且使能操作模式，如下图所示：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image17.png" style="zoom:80%;"><p>接着再去“Stacks”里添加I2C的模块。点击“New Stack”，选择“Connectivity”，再选择里面的“I2C Master(r_iic_master)”。本章目标是作为主机去读取触摸屏的数据，所以选择Master，如下图所示：</p><p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image18.png" alt=""></p><p>当添加了I2C的Master模块后，就要去配置它的参数来。本章实验在RASC中配置I2C的参数具体如下图所示：</p><p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image19.png" alt=""></p><ul><li>Name：I2C模块的名称，需要满足C语言字符串标准；</li><li>Channel：I2C模块的通道；</li><li>Rate：I2C通信速率，Standard支持的最大速率400kbps，快速模式最大能达到1Mbps；</li><li>Rise/Fall Time：SCL信号上升沿和下降沿的耗时；</li></ul><p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image20.png" alt=""></p><ul><li>Duty Cycle：SCL时钟线的占空比，范围是4%~96%，默认是50%；</li><li>Slave Address：从机设备地址，根据从机芯片设置；</li><li>Address Mode：地址模式，支持7-Bit和10-Bit；</li><li>Timeout Mode：数据检测超时模式，支持long mode和short mode。long mode的超时计数器是16bit的，short mode的超时计数器是14bit的；当超时计数溢出都没有检测到数据则通信中止；</li><li>Timeout during SCL Low：在SCL低电平时是否使能超时检测，默认是Enabled；</li><li>Callback：中断回调函数名称，建议和通道匹配，例如i2c1_callback；</li><li>Interrupt Priority Level：I2C中断优先级；</li></ul><h3 id="_4-5-3-函数说明" tabindex="-1"><a class="header-anchor" href="#_4-5-3-函数说明" aria-hidden="true">#</a> 4.5.3 函数说明</h3><p>对应的驱动程序为：drivers\\drv_gt911.c，它被封装为一个TouchDev结构体。</p><p>使用时，包含drv_touch.h，示例代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_touch.h&quot;</span></span>

<span class="token keyword">unsigned</span> <span class="token keyword">short</span> x<span class="token punctuation">,</span> y<span class="token punctuation">;</span>
<span class="token keyword">struct</span> <span class="token class-name">TouchDev</span><span class="token operator">*</span> ptDev <span class="token operator">=</span> <span class="token function">TouchDevGet</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>ptDev<span class="token operator">-&gt;</span><span class="token function">Read</span><span class="token punctuation">(</span>ptDev<span class="token punctuation">,</span> <span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token operator">&amp;</span>y<span class="token punctuation">)</span> <span class="token operator">==</span> true<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-6-dht11驱动使用方法" tabindex="-1"><a class="header-anchor" href="#_4-6-dht11驱动使用方法" aria-hidden="true">#</a> 4.6 DHT11驱动使用方法</h2><h3 id="_4-6-1-硬件接线" tabindex="-1"><a class="header-anchor" href="#_4-6-1-硬件接线" aria-hidden="true">#</a> 4.6.1 硬件接线</h3><p>DHT11模块接入扩展板的J2接口，注意DHT11板子的白边跟扩展板的白边对齐（其中的数据引脚使用P503），如下图所示：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image21.png" style="zoom:80%;"><h3 id="_4-6-2-rasc配置" tabindex="-1"><a class="header-anchor" href="#_4-6-2-rasc配置" aria-hidden="true">#</a> 4.6.2 RASC配置</h3><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-4/image22.png" style="zoom:75%;"><h3 id="_4-6-3-函数说明" tabindex="-1"><a class="header-anchor" href="#_4-6-3-函数说明" aria-hidden="true">#</a> 4.6.3 函数说明</h3><p>对应驱动程序为：devices\\dev_dht11.c。</p><p>使用时，包含dev_dht11.c，使用里面的函数即可。</p><p>函数说明如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/**********************************************************************
 * 函数名称： DHT11_Init
 * 功能描述： DHT11的初始化函数
 * 输入参数： 无
 * 输出参数： 无
 * 返 回 值： 无
 * 修改日期：      版本号     修改人	      修改内容
 * -----------------------------------------------
 * 2023/08/04	     V1.0	  韦东山	      创建
 ***********************************************************************/</span>
<span class="token keyword">void</span> <span class="token function">DHT11_Init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/**********************************************************************
 * 函数名称： DHT11_Read
 * 功能描述： 读取DHT11的温度/湿度
 * 输入参数： 无
 * 输出参数： hum  - 用于保存湿度值
 *            temp - 用于保存温度值
 * 返 回 值： 0 - 成功, (-1) - 失败
 * 修改日期：      版本号     修改人	      修改内容
 * -----------------------------------------------
 * 2023/08/04	     V1.0	  韦东山	      创建
 ***********************************************************************/</span>
<span class="token keyword">int</span> <span class="token function">DHT11_Read</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>hum<span class="token punctuation">,</span> <span class="token keyword">int</span> <span class="token operator">*</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,101),p=[t];function c(l,d){return s(),a("div",null,p)}const r=n(i,[["render",c],["__file","chapter4.html.vue"]]);export{r as default};
