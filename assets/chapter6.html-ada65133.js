import{_ as s,r as a,o as e,c as p,d as t,w as i,b as c,e as o,a as l}from"./app-a98b8345.js";const r={},u=o(`<h1 id="_6-驱动ec11旋转编码器-gpio" tabindex="-1"><a class="header-anchor" href="#_6-驱动ec11旋转编码器-gpio" aria-hidden="true">#</a> 6. 驱动EC11旋转编码器(GPIO)</h1><p>本次实验我们驱动EC11旋转编码器。</p><h2 id="_6-1-复制工程" tabindex="-1"><a class="header-anchor" href="#_6-1-复制工程" aria-hidden="true">#</a> 6.1 复制工程</h2><p>上次实验得出的工程我们可以通过复制在原有的基础上得到一个新的工程。</p><blockquote><p>如果你不清楚复制工程的步骤，请参考阅读第三章实验的步骤教程。</p></blockquote><p>本次实验我们的项目命名为：<strong>04_dshanmcu_ra6m5_ec11_encoder</strong></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_001.png" alt="chapter-6_001" style="zoom:80%;"><h2 id="_6-2-配置fsp" tabindex="-1"><a class="header-anchor" href="#_6-2-配置fsp" aria-hidden="true">#</a> 6.2 配置FSP</h2><h3 id="_6-2-1-查看硬件资料" tabindex="-1"><a class="header-anchor" href="#_6-2-1-查看硬件资料" aria-hidden="true">#</a> 6.2.1 查看硬件资料</h3><p>驱动EC11旋转编码器，驱动原理：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_001-1.png" alt="chapter-6_001-1"></p><p>需要用到 <strong>3个GPIO</strong>，我们实验使用的引脚是：</p><ul><li>S1 &lt;-----&gt; P202</li><li>S2 &lt;-----&gt; P203</li><li>KEY &lt;-----&gt; P205</li></ul><p>这三个引脚对应开发板上的这三个引脚，引脚位置及接线，如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_002.png" alt="chapter-6_002" style="zoom:80%;"><p>打开位于 <code>03硬件资料\\\\5_官方资料\\RA6M5 Group User&#39;s Manual Hardware.pdf</code> 的文档，跳转到下图所示的位置：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_003.png" alt="chapter-6_003" style="zoom:67%;"><p>根据上图中列表的内容，可以得出以下对应关系：</p><ul><li>KEY &lt;-----&gt; P205 (IRQ1)</li><li>S1 &lt;-----&gt; P202 (IRQ2)</li><li>S2 &lt;-----&gt; P203 (IRQ3)</li></ul><p>接下来根据以上信息，在 e2stduio 中对 <code>r_icu</code> 进行配置。</p><h3 id="_6-2-2-添加-stacks-r-icu" tabindex="-1"><a class="header-anchor" href="#_6-2-2-添加-stacks-r-icu" aria-hidden="true">#</a> 6.2.2 添加 Stacks(r_icu)</h3><ol><li>打开 <code>FSP Configuration</code> 视图：双击项目文件夹中的 <code>configuration.xml</code> 文件。</li><li>按照下图所示，添加 <strong>3个</strong> <code>r_icu</code> 模块：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_004.png" alt="chapter-6_004" style="zoom:80%;"><ol start="3"><li><p>点击刚刚添加的第一个 <code>r_icu</code> 在底部窗口的 <code>Properties</code> 选项卡中对其进行配置，将其配置为与下图一致：</p><ul><li>Name： g_external_irq1_key</li><li>Channel： 1</li><li>Callback： external_irq1_key_callback</li></ul></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_005.png" alt="chapter-6_005" style="zoom:80%;"><ol start="4"><li><p>点击刚刚添加的第一个 <code>r_icu</code> 在底部窗口的 <code>Properties</code> 选项卡中对其进行配置，将其配置为与下图一致：</p><ul><li>Name： g_external_irq2_s2</li><li>Channel： 2</li><li>Callback： external_irq2_s2_callback</li></ul></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_006.png" alt="chapter-6_006" style="zoom:80%;"><ol start="5"><li><p>点击刚刚添加的第一个 <code>r_icu</code> 在底部窗口的 <code>Properties</code> 选项卡中对其进行配置，将其配置为与下图一致：</p><ul><li>Name： g_external_irq3_s1</li><li>Channel： 3</li><li>Callback： external_irq3_s1_callback</li></ul></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_007.png" alt="chapter-6_007" style="zoom:80%;"><p>最后检查确认无误，点击右上角的 <code>“Generate Project Content”</code> e2studio就会根据我们对FSP的配置自动配置项目、生成相应的代码。</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_008.png" alt="chapter-6_008" style="zoom:80%;"><h2 id="_6-3-编写ec11驱动代码" tabindex="-1"><a class="header-anchor" href="#_6-3-编写ec11驱动代码" aria-hidden="true">#</a> 6.3 编写EC11驱动代码</h2><p>在e2studio中进入 <code>04_dshanmcu_ra6m5_ec11_encoder\\dshanmcu_ra6m5\\drivers</code> 目录，新建如下两个文件 <code>drv_gpio_ec11.c</code> 和 <code>drv_gpio_ec11.h</code>：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_009.png" alt="chapter-6_009" style="zoom:80%;"><p>在e2studio中点击打开 <code>04_dshanmcu_ra6m5_ec11_encoder\\dshanmcu_ra6m5\\drivers\\drv_gpio_ec11.c</code> 添加下面的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_gpio_ec11.h&quot;</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Macro definitions
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DRV_GPIO_EC11_USE_LVGL</span>  <span class="token expression"><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">DRV_GPIO_EC11_USE_LVGL <span class="token operator">==</span> <span class="token number">1</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;lvgl.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Typedef definitions
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Private function prototypes
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Private global variables
 **********************************************************************************************************************/</span>
<span class="token keyword">static</span> <span class="token class-name">uint32_t</span> ec11_key_press_tick <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token class-name">uint32_t</span> ec11_s1_press_tick <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token class-name">uint32_t</span> ec11_s2_press_tick <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">static</span> bool ec11_key_state <span class="token operator">=</span> false<span class="token punctuation">;</span>
<span class="token keyword">static</span> bool ec11_s1_state <span class="token operator">=</span> false<span class="token punctuation">;</span>
<span class="token keyword">static</span> bool ec11_s2_state <span class="token operator">=</span> false<span class="token punctuation">;</span>


<span class="token comment">/***********************************************************************************************************************
 * Functions
 **********************************************************************************************************************/</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">drv_gpio_ec11_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    <span class="token comment">// external irq 1</span>
    err <span class="token operator">=</span> g_external_irq1_key<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">open</span><span class="token punctuation">(</span>g_external_irq1_key<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span>
                                          g_external_irq1_key<span class="token punctuation">.</span>p_cfg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    err <span class="token operator">=</span> g_external_irq1_key<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">enable</span><span class="token punctuation">(</span>g_external_irq1_key<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// external irq 2</span>
    err <span class="token operator">=</span> g_external_irq2_s2<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">open</span><span class="token punctuation">(</span>g_external_irq2_s2<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span>
                                         g_external_irq2_s2<span class="token punctuation">.</span>p_cfg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    err <span class="token operator">=</span> g_external_irq2_s2<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">enable</span><span class="token punctuation">(</span>g_external_irq2_s2<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// external irq 3</span>
    err <span class="token operator">=</span> g_external_irq3_s1<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">open</span><span class="token punctuation">(</span>g_external_irq3_s1<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span>
                                         g_external_irq3_s1<span class="token punctuation">.</span>p_cfg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    err <span class="token operator">=</span> g_external_irq3_s1<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">enable</span><span class="token punctuation">(</span>g_external_irq3_s1<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">uint32_t</span> <span class="token function">drv_gpio_ec11_get_pin_press_tick</span><span class="token punctuation">(</span><span class="token class-name">bsp_io_port_pin_t</span> pin<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">uint32_t</span> pin_press_tick <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">switch</span><span class="token punctuation">(</span>pin<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> EC11_PIN_KEY<span class="token operator">:</span>
            pin_press_tick <span class="token operator">=</span> ec11_key_press_tick<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> EC11_PIN_S1<span class="token operator">:</span>
            pin_press_tick <span class="token operator">=</span> ec11_s1_press_tick<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> EC11_PIN_S2<span class="token operator">:</span>
            pin_press_tick <span class="token operator">=</span> ec11_s2_press_tick<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            pin_press_tick <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> pin_press_tick<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

bool <span class="token function">drv_gpio_ec11_get_pin_state</span><span class="token punctuation">(</span><span class="token class-name">bsp_io_port_pin_t</span> pin<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    bool pin_state <span class="token operator">=</span> false<span class="token punctuation">;</span>

    <span class="token keyword">switch</span><span class="token punctuation">(</span>pin<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> EC11_PIN_KEY<span class="token operator">:</span>
            pin_state <span class="token operator">=</span> ec11_key_state<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> EC11_PIN_S1<span class="token operator">:</span>
            pin_state <span class="token operator">=</span> ec11_s1_state<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> EC11_PIN_S2<span class="token operator">:</span>
            pin_state <span class="token operator">=</span> ec11_s2_state<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            pin_state <span class="token operator">=</span> false<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> pin_state<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">drv_gpio_ec11_set_pin_state</span><span class="token punctuation">(</span><span class="token class-name">bsp_io_port_pin_t</span> pin<span class="token punctuation">,</span> bool state<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>pin<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">case</span> EC11_PIN_KEY<span class="token operator">:</span>
            ec11_key_state <span class="token operator">=</span> state<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> EC11_PIN_S1<span class="token operator">:</span>
             ec11_s1_state <span class="token operator">=</span> state<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">case</span> EC11_PIN_S2<span class="token operator">:</span>
            ec11_s2_state <span class="token operator">=</span> state<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">external_irq1_key_callback</span><span class="token punctuation">(</span><span class="token class-name">external_irq_callback_args_t</span> <span class="token operator">*</span> p_args<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p_args<span class="token operator">-&gt;</span>channel <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ec11_key_state <span class="token operator">=</span> true<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">DRV_GPIO_EC11_USE_LVGL <span class="token operator">==</span> <span class="token number">0</span></span></span>
        ec11_key_press_tick <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
        ec11_key_press_tick <span class="token operator">=</span> <span class="token function">lv_tick_get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">20</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">external_irq2_s2_callback</span><span class="token punctuation">(</span><span class="token class-name">external_irq_callback_args_t</span> <span class="token operator">*</span> p_args<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p_args<span class="token operator">-&gt;</span>channel <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">bsp_io_level_t</span> level<span class="token punctuation">;</span>
        g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinRead</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g_ioport_ctrl<span class="token punctuation">,</span> EC11_PIN_S1<span class="token punctuation">,</span> <span class="token operator">&amp;</span>level<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>level<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            ec11_s2_state <span class="token operator">=</span> true<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">DRV_GPIO_EC11_USE_LVGL <span class="token operator">==</span> <span class="token number">0</span></span></span>
        ec11_s2_press_tick <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
        ec11_s2_press_tick <span class="token operator">=</span> <span class="token function">lv_tick_get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">20</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">external_irq3_s1_callback</span><span class="token punctuation">(</span><span class="token class-name">external_irq_callback_args_t</span> <span class="token operator">*</span> p_args<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>p_args<span class="token operator">-&gt;</span>channel <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">bsp_io_level_t</span> level<span class="token punctuation">;</span>
        g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinRead</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g_ioport_ctrl<span class="token punctuation">,</span> EC11_PIN_S2<span class="token punctuation">,</span> <span class="token operator">&amp;</span>level<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>level<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            ec11_s1_state <span class="token operator">=</span> true<span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">DRV_GPIO_EC11_USE_LVGL <span class="token operator">==</span> <span class="token number">0</span></span></span>
            ec11_s1_press_tick <span class="token operator">=</span> <span class="token number">20</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
        ec11_s1_press_tick <span class="token operator">=</span> <span class="token function">lv_tick_get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">20</span><span class="token punctuation">;</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/***********************************************************************************************************************
 * Private Functions
 **********************************************************************************************************************/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在e2studio中点击打开 <code>04_dshanmcu_ra6m5_ec11_encoder\\dshanmcu_ra6m5\\drivers\\drv_gpio_ec11.h</code> 添加下面的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">DRV_GPIO_EC11_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DRV_GPIO_EC11_H</span></span>

<span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;hal_data.h&quot;</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Macro definitions
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">EC11_PIN_KEY</span>    <span class="token expression">BSP_IO_PORT_02_PIN_05</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">EC11_PIN_S1</span>     <span class="token expression">BSP_IO_PORT_02_PIN_02</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">EC11_PIN_S2</span>     <span class="token expression">BSP_IO_PORT_02_PIN_03</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Typedef definitions
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Exported global variables
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Exported global functions (to be accessed by other files)
 **********************************************************************************************************************/</span>
<span class="token class-name">fsp_err_t</span> <span class="token function">drv_gpio_ec11_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">uint32_t</span> <span class="token function">drv_gpio_ec11_get_pin_press_tick</span><span class="token punctuation">(</span><span class="token class-name">bsp_io_port_pin_t</span> pin<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">drv_gpio_ec11_set_pin_state</span><span class="token punctuation">(</span><span class="token class-name">bsp_io_port_pin_t</span> pin<span class="token punctuation">,</span> bool state<span class="token punctuation">)</span><span class="token punctuation">;</span>

bool <span class="token function">drv_gpio_ec11_get_pin_state</span><span class="token punctuation">(</span><span class="token class-name">bsp_io_port_pin_t</span> pin<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/*DRV_GPIO_EC11_H*/</span></span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-4-编写app" tabindex="-1"><a class="header-anchor" href="#_6-4-编写app" aria-hidden="true">#</a> 6.4 编写app</h2><p>在 <code>04_dshanmcu_ra6m5_ec11_encoder\\dshanmcu_ra6m5\\applications</code> 目录下新建 <code>app_ec11_test.c</code> 文件，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_010.png" alt="chapter-6_010"></p><p>打开 <code>app_ec11_test.c</code> 添加如下代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;app.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_uart.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_gpio_ec11.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Macro definitions
 **********************************************************************************************************************/</span>


<span class="token comment">/**********************************************************************************************************************
 * Typedef definitions
 **********************************************************************************************************************/</span>


<span class="token comment">/***********************************************************************************************************************
 * Private function prototypes
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Private global variables
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Functions
 **********************************************************************************************************************/</span>
<span class="token keyword">void</span> <span class="token function">app_ec11_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_uart_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span> <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_gpio_ec11_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">drv_gpio_ec11_get_pin_state</span><span class="token punctuation">(</span>EC11_PIN_KEY<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token function">drv_gpio_ec11_get_pin_press_tick</span><span class="token punctuation">(</span>EC11_PIN_KEY<span class="token punctuation">)</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">drv_gpio_ec11_set_pin_state</span><span class="token punctuation">(</span>EC11_PIN_KEY<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;EC11 pressed (KEY)!\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">drv_gpio_ec11_get_pin_state</span><span class="token punctuation">(</span>EC11_PIN_S1<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token function">drv_gpio_ec11_get_pin_press_tick</span><span class="token punctuation">(</span>EC11_PIN_S1<span class="token punctuation">)</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">drv_gpio_ec11_set_pin_state</span><span class="token punctuation">(</span>EC11_PIN_S1<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;EC11 turn right(S1)!\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">drv_gpio_ec11_get_pin_state</span><span class="token punctuation">(</span>EC11_PIN_S2<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token function">drv_gpio_ec11_get_pin_press_tick</span><span class="token punctuation">(</span>EC11_PIN_S2<span class="token punctuation">)</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">drv_gpio_ec11_set_pin_state</span><span class="token punctuation">(</span>EC11_PIN_S2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;EC11 turn left(S2)!\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">/***********************************************************************************************************************
 * Private Functions
 **********************************************************************************************************************/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>app.h</code> 改为如下代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">APP_TEST_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">APP_TEST_H</span></span>

<span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;hal_data.h&quot;</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Macro definitions
 **********************************************************************************************************************/</span>

<span class="token comment">/**********************************************************************************************************************
 * Typedef definitions
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Exported global variables
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Exported global functions (to be accessed by other files)
 **********************************************************************************************************************/</span>

<span class="token keyword">void</span> <span class="token function">app_uart_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">app_i2c_touchpad_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">app_spi_display_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">app_lvgl_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">app_ec11_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/*APP_TEST_H*/</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-5-调用app" tabindex="-1"><a class="header-anchor" href="#_6-5-调用app" aria-hidden="true">#</a> 6.5 调用app</h2><p>打开 <code>04_dshanmcu_ra6m5_ec11_encoder\\src\\hal_entry.c</code> ，将 <code>hal_entry</code> 函数修改为如下所示的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">hal_entry</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* TODO: add your own code here */</span>
    <span class="token comment">//app_uart_test();</span>
    <span class="token comment">//app_i2c_touchpad_test();</span>
    <span class="token comment">//app_spi_display_test();</span>
    <span class="token comment">//app_lvgl_test();</span>
    <span class="token function">app_ec11_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">BSP_TZ_SECURE_BUILD</span></span>
    <span class="token comment">/* Enter non-secure code */</span>
    <span class="token function">R_BSP_NonSecureEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-6-验证效果" tabindex="-1"><a class="header-anchor" href="#_6-6-验证效果" aria-hidden="true">#</a> 6.6 验证效果</h2><p>点击编译按钮，再点击 debug 按钮，将程序烧写到开发板中。打开串口工具，操作EC11编码器(左转、右转、按下)同时会看到串口中断打印出相应的提示信息，如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>EC11 pressed <span class="token punctuation">(</span>KEY<span class="token punctuation">)</span><span class="token operator">!</span>
EC11 pressed <span class="token punctuation">(</span>KEY<span class="token punctuation">)</span><span class="token operator">!</span>
EC11 turn right<span class="token punctuation">(</span>S1<span class="token punctuation">)</span><span class="token operator">!</span>
EC11 turn right<span class="token punctuation">(</span>S1<span class="token punctuation">)</span><span class="token operator">!</span>
EC11 turn left<span class="token punctuation">(</span>S2<span class="token punctuation">)</span><span class="token operator">!</span>
EC11 turn left<span class="token punctuation">(</span>S2<span class="token punctuation">)</span><span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,51),d=l("div",{STYLE:"page-break-after: always;"},null,-1);function k(v,_){const n=a("center");return e(),p("div",null,[u,t(n,null,{default:i(()=>[c("本节完")]),_:1}),d])}const b=s(r,[["render",k],["__file","chapter6.html.vue"]]);export{b as default};
