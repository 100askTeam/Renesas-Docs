import{_ as s,r as a,o as e,c as i,d as t,w as p,b as c,e as l,a as o}from"./app-a98b8345.js";const d={},r=l(`<h1 id="_5-添加lvgl库-对接显示和触摸驱动" tabindex="-1"><a class="header-anchor" href="#_5-添加lvgl库-对接显示和触摸驱动" aria-hidden="true">#</a> 5. 添加LVGL库，对接显示和触摸驱动</h1><p>本次实验我们会融合前面实验的成果，添加LVGL库，对接显示和触摸驱动，让屏幕能显示UI、能触摸操作。</p><h2 id="_5-1-复制工程" tabindex="-1"><a class="header-anchor" href="#_5-1-复制工程" aria-hidden="true">#</a> 5.1 复制工程</h2><p>上次实验得出的工程我们可以通过复制在原有的基础上得到一个新的工程。</p><blockquote><p>如果你不清楚复制工程的步骤，请参考阅读第2章实验的步骤教程。</p></blockquote><p>本次实验我们的项目命名为：<strong>03_dshanmcu_ra6m5_lvgl_display_touchpad</strong></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_001.png" alt="chapter-5_001" style="zoom:80%;"><h2 id="_5-2-创建代码文件" tabindex="-1"><a class="header-anchor" href="#_5-2-创建代码文件" aria-hidden="true">#</a> 5.2 创建代码文件</h2><h3 id="_5-2-1-添加lvgl库" tabindex="-1"><a class="header-anchor" href="#_5-2-1-添加lvgl库" aria-hidden="true">#</a> 5.2.1 添加lvgl库</h3><p>在 <strong>windows的文件资源管理</strong> 中将资料包中的压缩包 <code>2_配套源码\\02_LVGL培训示例代码\\lvgl-8.3.8.zip</code> 解压到 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\Middlewares</code> 目录，并将解压出来的目录重命名为 lvgl，如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_002.png" alt="chapter-5_002" style="zoom:67%;"><p>打开 e2stduio 可以看到自动同步了文件夹，点开 <code>lvgl</code> 文件夹可以看到里面的内容，如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_003.png" alt="chapter-5_003" style="zoom:80%;"><h3 id="_5-2-1-添加lvgl配置文件" tabindex="-1"><a class="header-anchor" href="#_5-2-1-添加lvgl配置文件" aria-hidden="true">#</a> 5.2.1 添加lvgl配置文件</h3><p>lvgl本身内置有一个名为 <strong>lv_conf_template.h</strong> 的配置文件，对于lvgl的一些基础配置，功能裁剪都是在这里进行修改，但是这个是包含在lvgl中的文件我们不能直接对其进行修改，并且其名称后缀 <strong>_template</strong> 也表明这是一个模板，我们通过阅读lvgl库根目录下的 <code>README_zh.md</code> 文件，可知需要将其复制到与 lvgl 同级目录中，具体操作如下：</p><p>将 <code>lvgl</code> 文件夹中的 <strong>lv_conf_template.h</strong> 文件复制到上一级目录，即复制到 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\Middlewares</code> 目录下，并将其重命名为 <strong>lv_conf.h</strong> （也就是将 _template 后缀去掉），如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_004.png" alt="chapter-5_004" style="zoom:80%;"><h3 id="_5-2-2-添加lvgl显示输出、控制输入驱动接口文件" tabindex="-1"><a class="header-anchor" href="#_5-2-2-添加lvgl显示输出、控制输入驱动接口文件" aria-hidden="true">#</a> 5.2.2 添加lvgl显示输出、控制输入驱动接口文件</h3><p>显示、输入设备驱动的对接，lvgl也有对应的模板文件，我们可以将其复制到自定义位置，但是不能直接在lvgl库进行修改，具体操作如下：</p><p>将 <code>lvgl\\examples\\porting</code> 中的 <strong>lv_port_disp_template.c</strong>、 <strong>lv_port_disp_template.h</strong>、<strong>lv_port_indev_template.c</strong>、<strong>lv_port_indev_template.h</strong> 复制 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\drivers</code> 目录中，并重命名去掉 <strong>_template</strong> 后缀，操作如下所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_005.png" alt="chapter-5_005" style="zoom:80%;"><h3 id="_5-2-3-新建app-lvgl-test-c" tabindex="-1"><a class="header-anchor" href="#_5-2-3-新建app-lvgl-test-c" aria-hidden="true">#</a> 5.2.3 新建app_lvgl_test.c</h3><p>在 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\applications</code> 目录下新建名为 <code>app_lvgl_test.c</code> 文件，如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_006.png" alt="chapter-5_006" style="zoom:80%;"><h2 id="_5-3-修改接口文件对接驱动" tabindex="-1"><a class="header-anchor" href="#_5-3-修改接口文件对接驱动" aria-hidden="true">#</a> 5.3 修改接口文件对接驱动</h2><h3 id="_5-3-1-修改lvgl配置文件" tabindex="-1"><a class="header-anchor" href="#_5-3-1-修改lvgl配置文件" aria-hidden="true">#</a> 5.3.1 修改lvgl配置文件</h3><p>打开 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\Middlewares\\lv_conf.h</code> 文件，下面对其进行修改适配我们的工程：</p><ol><li>修改第 15 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">1</span> </span><span class="token comment">/*Set it to &quot;1&quot; to enable content*/</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>修改第 27 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LV_COLOR_DEPTH</span> <span class="token expression"><span class="token number">16</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>修改第 30 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LV_COLOR_16_SWAP</span> <span class="token expression"><span class="token number">1</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="4"><li>修改第 282 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LV_USE_PERF_MONITOR</span> <span class="token expression"><span class="token number">1</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="5"><li>修改第 731 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LV_BUILD_EXAMPLES</span> <span class="token expression"><span class="token number">0</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="6"><li>修改第 738 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LV_USE_DEMO_WIDGETS</span> <span class="token expression"><span class="token number">1</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_5-3-2-修改显示驱动接口文件" tabindex="-1"><a class="header-anchor" href="#_5-3-2-修改显示驱动接口文件" aria-hidden="true">#</a> 5.3.2 修改显示驱动接口文件</h3><p>打开 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\drivers\\lv_port_disp.c</code> 文件，下面对其进行修改适配我们的工程：</p><ol><li>修改第 7 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">1</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>修改 12 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;lv_port_disp.h&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>在 15 行空白处添加头文件包含：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_spi_display.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在 20 行空白处添加下面两行代码：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MY_DISP_HOR_RES</span>    <span class="token expression"><span class="token number">320</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">MY_DISP_VER_RES</span>    <span class="token expression"><span class="token number">480</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>修改 <code>lv_port_disp_init</code> 函数为如下代码：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">lv_port_disp_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/*-------------------------
     * Initialize your display
     * -----------------------*/</span>
    <span class="token function">disp_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*-----------------------------
     * Create a buffer for drawing
     *----------------------------*/</span>

    <span class="token comment">/**
     * LVGL requires a buffer where it internally draws the widgets.
     * Later this buffer will passed to your display driver&#39;s \`flush_cb\` to copy its content to your display.
     * The buffer has to be greater than 1 display row
     *
     * There are 3 buffering configurations:
     * 1. Create ONE buffer:
     *      LVGL will draw the display&#39;s content here and writes it to your display
     *
     * 2. Create TWO buffer:
     *      LVGL will draw the display&#39;s content to a buffer and writes it your display.
     *      You should use DMA to write the buffer&#39;s content to the display.
     *      It will enable LVGL to draw the next part of the screen to the other buffer while
     *      the data is being sent form the first buffer. It makes rendering and flushing parallel.
     *
     * 3. Double buffering
     *      Set 2 screens sized buffers and set disp_drv.full_refresh = 1.
     *      This way LVGL will always provide the whole rendered screen in \`flush_cb\`
     *      and you only need to change the frame buffer&#39;s address.
     */</span>

    <span class="token comment">/* Example for 1) */</span>
    <span class="token comment">//static lv_disp_draw_buf_t draw_buf_dsc_1;</span>
    <span class="token comment">//static lv_color_t buf_1[MY_DISP_HOR_RES * 10];                          /*A buffer for 10 rows*/</span>
    <span class="token comment">//lv_disp_draw_buf_init(&amp;draw_buf_dsc_1, buf_1, NULL, MY_DISP_HOR_RES * 10);   /*Initialize the display buffer*/</span>

    <span class="token comment">/* Example for 2) */</span>
    <span class="token keyword">static</span> <span class="token class-name">lv_disp_draw_buf_t</span> draw_buf_dsc_2<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">lv_color_t</span> buf_2_1<span class="token punctuation">[</span>MY_DISP_HOR_RES <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                        <span class="token comment">/*A buffer for 10 rows*/</span>
    <span class="token keyword">static</span> <span class="token class-name">lv_color_t</span> buf_2_2<span class="token punctuation">[</span>MY_DISP_HOR_RES <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">;</span>                        <span class="token comment">/*An other buffer for 10 rows*/</span>
    <span class="token function">lv_disp_draw_buf_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>draw_buf_dsc_2<span class="token punctuation">,</span> buf_2_1<span class="token punctuation">,</span> buf_2_2<span class="token punctuation">,</span> MY_DISP_HOR_RES <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">/*Initialize the display buffer*/</span>

    <span class="token comment">/* Example for 3) also set disp_drv.full_refresh = 1 below*/</span>
    <span class="token comment">//static lv_disp_draw_buf_t draw_buf_dsc_3;</span>
    <span class="token comment">//static lv_color_t buf_3_1[MY_DISP_HOR_RES * MY_DISP_VER_RES];            /*A screen sized buffer*/</span>
    <span class="token comment">//static lv_color_t buf_3_2[MY_DISP_HOR_RES * MY_DISP_VER_RES];            /*Another screen sized buffer*/</span>
    <span class="token comment">//lv_disp_draw_buf_init(&amp;draw_buf_dsc_3, buf_3_1, buf_3_2,</span>
    <span class="token comment">//                      MY_DISP_VER_RES * LV_VER_RES_MAX);   /*Initialize the display buffer*/</span>

    <span class="token comment">/*-----------------------------------
     * Register the display in LVGL
     *----------------------------------*/</span>

    <span class="token keyword">static</span> <span class="token class-name">lv_disp_drv_t</span> disp_drv<span class="token punctuation">;</span>                         <span class="token comment">/*Descriptor of a display driver*/</span>
    <span class="token function">lv_disp_drv_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>disp_drv<span class="token punctuation">)</span><span class="token punctuation">;</span>                    <span class="token comment">/*Basic initialization*/</span>

    <span class="token comment">/*Set up the functions to access to your display*/</span>

    <span class="token comment">/*Set the resolution of the display*/</span>
    disp_drv<span class="token punctuation">.</span>hor_res <span class="token operator">=</span> MY_DISP_HOR_RES<span class="token punctuation">;</span>
    disp_drv<span class="token punctuation">.</span>ver_res <span class="token operator">=</span> MY_DISP_VER_RES<span class="token punctuation">;</span>

    <span class="token comment">/*Used to copy the buffer&#39;s content to the display*/</span>
    disp_drv<span class="token punctuation">.</span>flush_cb <span class="token operator">=</span> disp_flush<span class="token punctuation">;</span>

    <span class="token comment">/*Set a display buffer*/</span>
    disp_drv<span class="token punctuation">.</span>draw_buf <span class="token operator">=</span> <span class="token operator">&amp;</span>draw_buf_dsc_2<span class="token punctuation">;</span>

    <span class="token comment">/*Required for Example 3)*/</span>
    <span class="token comment">//disp_drv.full_refresh = 1;</span>

    <span class="token comment">/* Fill a memory array with a color if you have GPU.
     * Note that, in lv_conf.h you can enable GPUs that has built-in support in LVGL.
     * But if you have a different GPU you can use with this callback.*/</span>
    <span class="token comment">//disp_drv.gpu_fill_cb = gpu_fill;</span>

    <span class="token comment">/*Finally register the driver*/</span>
    <span class="token function">lv_disp_drv_register</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>disp_drv<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>修改 <code>disp_init</code> 函数为如下代码：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">disp_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/*You code here*/</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_spi_display_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>修改 <code>disp_flush</code> 函数为如下代码：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">disp_flush</span><span class="token punctuation">(</span><span class="token class-name">lv_disp_drv_t</span> <span class="token operator">*</span> disp_drv<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token class-name">lv_area_t</span> <span class="token operator">*</span> area<span class="token punctuation">,</span> <span class="token class-name">lv_color_t</span> <span class="token operator">*</span> color_p<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">0</span></span></span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>disp_flush_enabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">/*The most simple case (but also the slowest) to put all pixels to the screen one-by-one*/</span>

        <span class="token class-name">int32_t</span> x<span class="token punctuation">;</span>
        <span class="token class-name">int32_t</span> y<span class="token punctuation">;</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span>y <span class="token operator">=</span> area<span class="token operator">-&gt;</span>y1<span class="token punctuation">;</span> y <span class="token operator">&lt;=</span> area<span class="token operator">-&gt;</span>y2<span class="token punctuation">;</span> y<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">for</span><span class="token punctuation">(</span>x <span class="token operator">=</span> area<span class="token operator">-&gt;</span>x1<span class="token punctuation">;</span> x <span class="token operator">&lt;=</span> area<span class="token operator">-&gt;</span>x2<span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">/*Put a pixel to the display. For example:*/</span>
                <span class="token comment">/*put_px(x, y, *color_p)*/</span>
                color_p<span class="token operator">++</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>disp_flush_enabled<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">uint32_t</span> size <span class="token operator">=</span> <span class="token function">lv_area_get_width</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token function">lv_area_get_height</span><span class="token punctuation">(</span>area<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">spi_display_set_window</span><span class="token punctuation">(</span>area<span class="token operator">-&gt;</span>x1<span class="token punctuation">,</span> area<span class="token operator">-&gt;</span>y1<span class="token punctuation">,</span> area<span class="token operator">-&gt;</span>x2<span class="token punctuation">,</span> area<span class="token operator">-&gt;</span>y2<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">drv_spi_display_flush_data</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span><span class="token punctuation">)</span>color_p<span class="token punctuation">,</span> size <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">/*IMPORTANT!!!
     *Inform the graphics library that you are ready with the flushing*/</span>
    <span class="token function">lv_disp_flush_ready</span><span class="token punctuation">(</span>disp_drv<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li>打开 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\drivers\\lv_port_disp.h</code> 文件这里只需修改一个地方，修改第 7-10 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">1</span></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">LV_PORT_DISP_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LV_PORT_DISP_H</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-3-修改输入驱动接口文件" tabindex="-1"><a class="header-anchor" href="#_5-3-3-修改输入驱动接口文件" aria-hidden="true">#</a> 5.3.3 修改输入驱动接口文件</h3><p>打开 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\drivers\\lv_port_indev.c</code> 文件，下面对其进行修改适配我们的工程：</p><ol><li>修改第 7 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">1</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>修改 12 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;lv_port_indev.h&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>在 15 行空白处添加头文件包含：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_i2c_touchpad.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>修改 <code>lv_port_indev_init</code> 函数为如下代码：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">lv_port_indev_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/**
     * Here you will find example implementation of input devices supported by LittelvGL:
     *  - Touchpad
     *  - Mouse (with cursor support)
     *  - Keypad (supports GUI usage only with key)
     *  - Encoder (supports GUI usage only with: left, right, push)
     *  - Button (external buttons to press points on the screen)
     *
     *  The \`..._read()\` function are only examples.
     *  You should shape them according to your hardware
     */</span>

    <span class="token keyword">static</span> <span class="token class-name">lv_indev_drv_t</span> indev_drv<span class="token punctuation">;</span>

    <span class="token comment">/*------------------
     * Touchpad
     * -----------------*/</span>

    <span class="token comment">/*Initialize your touchpad if you have*/</span>
    <span class="token function">touchpad_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*Register a touchpad input device*/</span>
    <span class="token function">lv_indev_drv_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>indev_drv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    indev_drv<span class="token punctuation">.</span>type <span class="token operator">=</span> LV_INDEV_TYPE_POINTER<span class="token punctuation">;</span>
    indev_drv<span class="token punctuation">.</span>read_cb <span class="token operator">=</span> touchpad_read<span class="token punctuation">;</span>
    indev_touchpad <span class="token operator">=</span> <span class="token function">lv_indev_drv_register</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>indev_drv<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*------------------
     * Mouse
     * -----------------*/</span>

    <span class="token comment">/*Initialize your mouse if you have*/</span>
    <span class="token comment">//mouse_init();</span>

    <span class="token comment">/*Register a mouse input device*/</span>
    <span class="token comment">//lv_indev_drv_init(&amp;indev_drv);</span>
    <span class="token comment">//indev_drv.type = LV_INDEV_TYPE_POINTER;</span>
    <span class="token comment">//indev_drv.read_cb = mouse_read;</span>
    <span class="token comment">//indev_mouse = lv_indev_drv_register(&amp;indev_drv);</span>

    <span class="token comment">/*Set cursor. For simplicity set a HOME symbol now.*/</span>
    <span class="token comment">//lv_obj_t * mouse_cursor = lv_img_create(lv_scr_act());</span>
    <span class="token comment">//lv_img_set_src(mouse_cursor, LV_SYMBOL_HOME);</span>
    <span class="token comment">//lv_indev_set_cursor(indev_mouse, mouse_cursor);</span>

    <span class="token comment">/*------------------
     * Keypad
     * -----------------*/</span>

    <span class="token comment">/*Initialize your keypad or keyboard if you have*/</span>
    <span class="token comment">//keypad_init();</span>

    <span class="token comment">/*Register a keypad input device*/</span>
    <span class="token comment">//lv_indev_drv_init(&amp;indev_drv);</span>
    <span class="token comment">//indev_drv.type = LV_INDEV_TYPE_KEYPAD;</span>
    <span class="token comment">//indev_drv.read_cb = keypad_read;</span>
    <span class="token comment">//indev_keypad = lv_indev_drv_register(&amp;indev_drv);</span>

    <span class="token comment">/*Later you should create group(s) with \`lv_group_t * group = lv_group_create()\`,
     *add objects to the group with \`lv_group_add_obj(group, obj)\`
     *and assign this input device to group to navigate in it:
     *\`lv_indev_set_group(indev_keypad, group);\`*/</span>

    <span class="token comment">/*------------------
     * Encoder
     * -----------------*/</span>

    <span class="token comment">/*Initialize your encoder if you have*/</span>
    <span class="token comment">//encoder_init();</span>

    <span class="token comment">/*Register a encoder input device*/</span>
    <span class="token comment">//lv_indev_drv_init(&amp;indev_drv);</span>
    <span class="token comment">//indev_drv.type = LV_INDEV_TYPE_ENCODER;</span>
    <span class="token comment">//indev_drv.read_cb = encoder_read;</span>
    <span class="token comment">//indev_encoder = lv_indev_drv_register(&amp;indev_drv);</span>

    <span class="token comment">/*Later you should create group(s) with \`lv_group_t * group = lv_group_create()\`,
     *add objects to the group with \`lv_group_add_obj(group, obj)\`
     *and assign this input device to group to navigate in it:
     *\`lv_indev_set_group(indev_encoder, group);\`*/</span>

    <span class="token comment">/*------------------
     * Button
     * -----------------*/</span>

    <span class="token comment">/*Initialize your button if you have*/</span>
    <span class="token comment">//button_init();</span>

    <span class="token comment">/*Register a button input device*/</span>
    <span class="token comment">//lv_indev_drv_init(&amp;indev_drv);</span>
    <span class="token comment">//indev_drv.type = LV_INDEV_TYPE_BUTTON;</span>
    <span class="token comment">//indev_drv.read_cb = button_read;</span>
    <span class="token comment">//indev_button = lv_indev_drv_register(&amp;indev_drv);</span>

    <span class="token comment">/*Assign buttons to points on the screen*/</span>
    <span class="token comment">//static const lv_point_t btn_points[2] = {</span>
    <span class="token comment">//    {10, 10},   /*Button 0 -&gt; x:10; y:10*/</span>
    <span class="token comment">//    {40, 100},  /*Button 1 -&gt; x:40; y:100*/</span>
    <span class="token comment">//};</span>
    <span class="token comment">//lv_indev_set_button_points(indev_button, btn_points);</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>修改 <code>touchpad_init</code> 函数为如下代码：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">touchpad_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/*Your code comes here*/</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_i2c_touchpad_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>修改 <code>touchpad_read</code> 函数为如下代码：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">touchpad_read</span><span class="token punctuation">(</span><span class="token class-name">lv_indev_drv_t</span> <span class="token operator">*</span> indev_drv<span class="token punctuation">,</span> <span class="token class-name">lv_indev_data_t</span> <span class="token operator">*</span> data<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">lv_coord_t</span> last_x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token class-name">lv_coord_t</span> last_y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token comment">/*Save the pressed coordinates and the state*/</span>
    err <span class="token operator">=</span> <span class="token function">touchpad_is_touched</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">==</span> err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">touchpad_get_pos</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>last_x<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">uint16_t</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>last_y<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        data<span class="token operator">-&gt;</span>state <span class="token operator">=</span> LV_INDEV_STATE_PR<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        data<span class="token operator">-&gt;</span>state <span class="token operator">=</span> LV_INDEV_STATE_REL<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/*Set the last pressed coordinates*/</span>
    data<span class="token operator">-&gt;</span>point<span class="token punctuation">.</span>x <span class="token operator">=</span> last_x<span class="token punctuation">;</span>
    data<span class="token operator">-&gt;</span>point<span class="token punctuation">.</span>y <span class="token operator">=</span> last_y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="7"><li>打开 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\drivers\\lv_port_indev.h</code> 文件这里只需修改一个地方，修改第 8 - 11 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">1</span></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">LV_PORT_INDEV_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LV_PORT_INDEV_H</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-4-配置fsp" tabindex="-1"><a class="header-anchor" href="#_5-4-配置fsp" aria-hidden="true">#</a> 5.4 配置FSP</h2><p>这里的配置主要是为lvgl提供心跳支持。</p><h3 id="_5-4-1-添加-stacks-r-gpt" tabindex="-1"><a class="header-anchor" href="#_5-4-1-添加-stacks-r-gpt" aria-hidden="true">#</a> 5.4.1 添加 Stacks(r_gpt)</h3><ol><li>打开 <code>FSP Configuration</code> 视图：双击项目文件夹中的 <code>configuration.xml</code> 文件。</li><li>按照下图所示，添加 <code>r_gpt</code> 模块：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_007.png" alt="chapter-5_007" style="zoom:67%;"><p>点击刚刚添加的 <code>r_gpt</code> 在底部窗口的 <code>Properties</code> 选项卡中对其进行配置，将其配置为与下图一致：</p><ul><li>Name： g_timer0</li><li>Channel： 0</li><li>period：1</li><li>Callback： periodic_timer0_cb</li></ul><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_008.png" alt="chapter-5_008" style="zoom:67%;"><h3 id="_5-4-2-添加r-gpt-使用驱动代码" tabindex="-1"><a class="header-anchor" href="#_5-4-2-添加r-gpt-使用驱动代码" aria-hidden="true">#</a> 5.4.2 添加r_gpt 使用驱动代码</h3><p>在 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\drivers</code> 目录中新建 <code>drv_gpt_timer.c</code> 和 <code>drv_gpt_timer.h</code> 两个文件：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_009.png" alt="chapter-5_009" style="zoom:80%;"><p>创建之后，先打开 <code>drv_gpt_timer.c</code>，添加如下代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_gpt_timer.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;lvgl.h&quot;</span></span>

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
<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">gpt_timer_init</span><span class="token punctuation">(</span><span class="token class-name">gpt_instance_ctrl_t</span> <span class="token operator">*</span> p_timer_ctrl<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token class-name">timer_cfg_t</span> <span class="token operator">*</span> p_timer_cfg<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/***********************************************************************************************************************
 * Private global variables
 **********************************************************************************************************************/</span>


<span class="token comment">/***********************************************************************************************************************
 * Functions
 **********************************************************************************************************************/</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">drv_gpt_timer_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    <span class="token comment">/* Start GPT timer to &#39;Give&#39; Semaphore periodically at 1sec for semaphore_task */</span>
    err <span class="token operator">=</span> <span class="token function">gpt_timer_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g_timer0_ctrl<span class="token punctuation">,</span> <span class="token operator">&amp;</span>g_timer0_cfg <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">periodic_timer0_cb</span><span class="token punctuation">(</span><span class="token class-name">timer_callback_args_t</span> <span class="token operator">*</span>p_args<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">FSP_PARAMETER_NOT_USED</span><span class="token punctuation">(</span>p_args<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">lv_tick_inc</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">gpt_timer_init</span><span class="token punctuation">(</span><span class="token class-name">gpt_instance_ctrl_t</span> <span class="token operator">*</span> p_timer_ctrl<span class="token punctuation">,</span> <span class="token keyword">const</span> <span class="token class-name">timer_cfg_t</span> <span class="token operator">*</span> p_timer_cfg<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> fsp_err <span class="token operator">=</span> FSP_SUCCESS<span class="token punctuation">;</span>

    <span class="token comment">/* Open GPT timer instance */</span>
    fsp_err <span class="token operator">=</span> <span class="token function">R_GPT_Open</span><span class="token punctuation">(</span>p_timer_ctrl<span class="token punctuation">,</span> p_timer_cfg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* Handle error */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span> FSP_SUCCESS <span class="token operator">!=</span> fsp_err <span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">/* Print out in case of error */</span>
        <span class="token comment">//APP_ERR_PRINT (&quot;\\r\\nGPT Timer open API failed\\r\\n&quot;);</span>
        <span class="token keyword">return</span> fsp_err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">/* Start GPT Timer instance */</span>
    fsp_err <span class="token operator">=</span> <span class="token function">R_GPT_Start</span><span class="token punctuation">(</span>p_timer_ctrl<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* Handle error */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> fsp_err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">/* Close timer if failed to start */</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span> FSP_SUCCESS  <span class="token operator">!=</span> <span class="token function">R_GPT_Close</span><span class="token punctuation">(</span>p_timer_ctrl<span class="token punctuation">)</span> <span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token comment">/* Print out in case of error */</span>
            <span class="token comment">//APP_ERR_PRINT (&quot;\\r\\nGPT Timer Close API failed\\r\\n&quot;);</span>
        <span class="token punctuation">}</span>

       <span class="token comment">// APP_ERR_PRINT (&quot;\\r\\nGPT Timer Start API failed\\r\\n&quot;);</span>
        <span class="token keyword">return</span> fsp_err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> fsp_err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/***********************************************************************************************************************
 * Private Functions
 **********************************************************************************************************************/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开 <code>drv_gpt_timer.h</code>，添加如下代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">DRV_GPT_TIMER_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DRV_GPT_TIMER_H</span></span>

<span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;hal_data.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

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
<span class="token class-name">fsp_err_t</span> <span class="token function">drv_gpt_timer_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/*DRV_GPT_TIMER_H*/</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-5-编写-app-程序" tabindex="-1"><a class="header-anchor" href="#_5-5-编写-app-程序" aria-hidden="true">#</a> 5.5 编写 app 程序</h2><p>打开 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\applications\\app_lvgl_test.c</code> 文件 ， 添加如下代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;app.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_uart.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_gpt_timer.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;lv_port_disp.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;lv_port_indev.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;lvgl.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;lvgl/demos/lv_demos.h&quot;</span></span>

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
<span class="token keyword">void</span> <span class="token function">app_lvgl_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_uart_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span> <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_gpt_timer_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">lv_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">lv_port_disp_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">lv_port_indev_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* create lvgl demo */</span>
    <span class="token function">lv_demo_widgets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">lv_task_handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// delay 5ms</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token comment">/***********************************************************************************************************************
 * Private Functions
 **********************************************************************************************************************/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\applications\\app.h</code> 文件 ， 在31行添加函数声明：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">app_lvgl_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\src\\hal_entry.c</code> 将 hal_entry 函数修改为如下所示的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>
<span class="token keyword">void</span> <span class="token function">hal_entry</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* TODO: add your own code here */</span>
    <span class="token comment">//app_uart_test();</span>
    <span class="token comment">//app_i2c_touchpad_test();</span>
    <span class="token comment">//app_spi_display_test();</span>
    <span class="token function">app_lvgl_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">BSP_TZ_SECURE_BUILD</span></span>
    <span class="token comment">/* Enter non-secure code */</span>
    <span class="token function">R_BSP_NonSecureEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-6-解决编译问题" tabindex="-1"><a class="header-anchor" href="#_5-6-解决编译问题" aria-hidden="true">#</a> 5.6 解决编译问题</h2><h3 id="_5-6-1-编译报错问题" tabindex="-1"><a class="header-anchor" href="#_5-6-1-编译报错问题" aria-hidden="true">#</a> 5.6.1 编译报错问题</h3><p>此时如果点击编译，会发现编译报错，报错信息如下：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_010.png" alt="chapter-5_010"></p><p>这是提示 lvgl.h 找不到，因为之前的头文件检索只到了 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\Middlewares</code> 如果不想修改头文件检索范围，可以在报错的地方修改为 <code>#include &quot;lvgl/lvgl.h&quot;</code>，为了避免后续更多不必要的问题，最好修改一下头文件检索范围，操作如下：</p><ol><li>打开 <code>C/C++ Project Settings</code>，按照下图操作进入配置页面：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_011.png" alt="chapter-5_011" style="zoom:80%;"><ol start="2"><li>在配置页面中，按如下操作添加 <strong>/\${ProjName}/dshanmcu_ra6m5/Middlewares/lvgl</strong> ：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_012.png" alt="chapter-5_012" style="zoom:80%;"><h3 id="_5-6-2-编译警告过多问题" tabindex="-1"><a class="header-anchor" href="#_5-6-2-编译警告过多问题" aria-hidden="true">#</a> 5.6.2 编译警告过多问题</h3><p>解决报错问题之后，编译会发现没有报错了，编译能顺利完成，但是编译过程产生的警告非常多，如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_013.png" alt="chapter-5_013" style="zoom:80%;"><p>我们再次进入 <code>C/C++ Project Settings</code>，解决编译警告，在配置页面中，按如下操作添加 warning flags：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> -Wno-conversion -Wno-aggregate-return -Wno-type-limits -Wno-unused-parameter -Wno-unused-function
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_014.png" alt="chapter-5_014" style="zoom:80%;"><p>按照上图配置之后再次点击编译，会发现编译警告都没有了，并且编译花费的时间也大大提高：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_015.png" alt="chapter-5_015" style="zoom:80%;"><h2 id="_5-7-验证效果" tabindex="-1"><a class="header-anchor" href="#_5-7-验证效果" aria-hidden="true">#</a> 5.7 验证效果</h2><p>点击编译按钮，再点击 debug 按钮，将程序烧写到开发板中。会看到屏幕亮起一个漂亮的UI界面，并且可以通过点击触摸屏进行交互。</p>`,114),u=o("div",{STYLE:"page-break-after: always;"},null,-1);function v(m,k){const n=a("center");return e(),i("div",null,[r,t(n,null,{default:p(()=>[c("本节完")]),_:1}),u])}const b=s(d,[["render",v],["__file","chapter5.html.vue"]]);export{b as default};
