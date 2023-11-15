import{_ as s,r as a,o as e,c as t,d as i,w as p,b as c,e as o,a as l}from"./app-a98b8345.js";const d={},u=o(`<h1 id="_7-lvgl对接ec11旋转编码器驱动" tabindex="-1"><a class="header-anchor" href="#_7-lvgl对接ec11旋转编码器驱动" aria-hidden="true">#</a> 7. LVGL对接EC11旋转编码器驱动</h1><p>本次实验我们向LVGL库中对接EC11旋转编码器驱动，让我们能通过EC11旋转编码器操作UI。</p><h2 id="_7-1-复制工程" tabindex="-1"><a class="header-anchor" href="#_7-1-复制工程" aria-hidden="true">#</a> 7.1 复制工程</h2><p>上次实验得出的工程我们可以通过复制在原有的基础上得到一个新的工程。</p><blockquote><p>如果你不清楚复制工程的步骤，请参考阅读第三章实验的步骤教程。</p></blockquote><p>本次实验我们的项目命名为：<strong>05_dshanmcu_ra6m5_lvgl_display_touchpad_encoder</strong></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-7/chapter-7_001.png" alt="chapter-7_001" style="zoom:80%;"><h2 id="_7-2-对接驱动" tabindex="-1"><a class="header-anchor" href="#_7-2-对接驱动" aria-hidden="true">#</a> 7.2 对接驱动</h2><p>打开 <code>05_dshanmcu_ra6m5_lvgl_display_touchpad_encoder\\dshanmcu_ra6m5\\drivers\\drv_gpio_ec11.c</code> 文件，做如下修改：</p><p>将第 9 行的代码改为如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DRV_GPIO_EC11_USE_LVGL</span>  <span class="token expression"><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>打开 <code>05_dshanmcu_ra6m5_lvgl_display_touchpad_encoder\\dshanmcu_ra6m5\\drivers\\lv_port_indev.c</code> 文件，下面对其进行修改适配我们的工程：</p><ol><li>在第 14 行空白处添加头文件包含：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_gpio_ec11.h&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>修改 <code>lv_port_indev_init</code> 函数为如下代码：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">lv_port_indev_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
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
    <span class="token comment">/*------------------
     * Touchpad
     * -----------------*/</span>

    <span class="token comment">/*Initialize your touchpad if you have*/</span>
    <span class="token function">touchpad_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*Register a touchpad input device*/</span>
    <span class="token keyword">static</span> <span class="token class-name">lv_indev_drv_t</span> indev_pointer_drv<span class="token punctuation">;</span>
    <span class="token function">lv_indev_drv_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>indev_pointer_drv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    indev_pointer_drv<span class="token punctuation">.</span>type <span class="token operator">=</span> LV_INDEV_TYPE_POINTER<span class="token punctuation">;</span>
    indev_pointer_drv<span class="token punctuation">.</span>read_cb <span class="token operator">=</span> touchpad_read<span class="token punctuation">;</span>
    indev_touchpad <span class="token operator">=</span> <span class="token function">lv_indev_drv_register</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>indev_pointer_drv<span class="token punctuation">)</span><span class="token punctuation">;</span>

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
    <span class="token function">encoder_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*Register a encoder input device*/</span>
    <span class="token keyword">static</span> <span class="token class-name">lv_indev_drv_t</span> indev_encoder_drv<span class="token punctuation">;</span>
    <span class="token function">lv_indev_drv_init</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>indev_encoder_drv<span class="token punctuation">)</span><span class="token punctuation">;</span>
    indev_encoder_drv<span class="token punctuation">.</span>type <span class="token operator">=</span> LV_INDEV_TYPE_ENCODER<span class="token punctuation">;</span>
    indev_encoder_drv<span class="token punctuation">.</span>read_cb <span class="token operator">=</span> encoder_read<span class="token punctuation">;</span>
    indev_encoder <span class="token operator">=</span> <span class="token function">lv_indev_drv_register</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>indev_encoder_drv<span class="token punctuation">)</span><span class="token punctuation">;</span>

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

    <span class="token class-name">lv_group_t</span> <span class="token operator">*</span>g <span class="token operator">=</span> <span class="token function">lv_group_create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">lv_group_set_default</span><span class="token punctuation">(</span>g<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">lv_indev_set_group</span><span class="token punctuation">(</span>indev_touchpad<span class="token punctuation">,</span> g<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">lv_indev_set_group</span><span class="token punctuation">(</span>indev_encoder<span class="token punctuation">,</span> g<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>修改 <code>encoder_init</code> 函数为如下代码：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">encoder_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/*Your code comes here*/</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_gpio_ec11_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>修改 <code>encoder_read</code> 函数为如下代码：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*Will be called by the library to read the encoder*/</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">encoder_read</span><span class="token punctuation">(</span><span class="token class-name">lv_indev_drv_t</span> <span class="token operator">*</span> indev_drv<span class="token punctuation">,</span> <span class="token class-name">lv_indev_data_t</span> <span class="token operator">*</span> data<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">uint32_t</span> handler_start <span class="token operator">=</span> <span class="token function">lv_tick_get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">drv_gpio_ec11_get_pin_state</span><span class="token punctuation">(</span>EC11_PIN_KEY<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>handler_start <span class="token operator">&gt;=</span> <span class="token function">drv_gpio_ec11_get_pin_press_tick</span><span class="token punctuation">(</span>EC11_PIN_KEY<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            encoder_diff <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
            encoder_state <span class="token operator">=</span> LV_INDEV_STATE_PR<span class="token punctuation">;</span>
            <span class="token function">drv_gpio_ec11_set_pin_state</span><span class="token punctuation">(</span>EC11_PIN_KEY<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">drv_gpio_ec11_get_pin_state</span><span class="token punctuation">(</span>EC11_PIN_S1<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>handler_start <span class="token operator">&gt;=</span> <span class="token function">drv_gpio_ec11_get_pin_press_tick</span><span class="token punctuation">(</span>EC11_PIN_S1<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            encoder_diff <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token function">drv_gpio_ec11_set_pin_state</span><span class="token punctuation">(</span>EC11_PIN_S1<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">drv_gpio_ec11_get_pin_state</span><span class="token punctuation">(</span>EC11_PIN_S2<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>handler_start <span class="token operator">&gt;=</span> <span class="token function">drv_gpio_ec11_get_pin_press_tick</span><span class="token punctuation">(</span>EC11_PIN_S2<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            encoder_diff <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token function">drv_gpio_ec11_set_pin_state</span><span class="token punctuation">(</span>EC11_PIN_S2<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">bsp_io_level_t</span> level<span class="token punctuation">;</span>
        g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinRead</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g_ioport_ctrl<span class="token punctuation">,</span> EC11_PIN_KEY<span class="token punctuation">,</span> <span class="token operator">&amp;</span>level<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>level<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            encoder_state <span class="token operator">=</span> LV_INDEV_STATE_REL<span class="token punctuation">;</span>
            encoder_diff <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    data<span class="token operator">-&gt;</span>enc_diff <span class="token operator">=</span> encoder_diff<span class="token punctuation">;</span>
    data<span class="token operator">-&gt;</span>state <span class="token operator">=</span> encoder_state<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-3-调用app" tabindex="-1"><a class="header-anchor" href="#_7-3-调用app" aria-hidden="true">#</a> 7.3 调用app</h2><p>打开 <code>05_dshanmcu_ra6m5_lvgl_display_touchpad_encoder\\dshanmcu_ra6m5\\src\\hal_entry.c</code> 将 hal_entry 函数修改为如下所示的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">hal_entry</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* TODO: add your own code here */</span>
    <span class="token comment">//app_uart_test();</span>
    <span class="token comment">//app_i2c_touchpad_test();</span>
    <span class="token comment">//app_spi_display_test();</span>
    <span class="token function">app_lvgl_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//app_ec11_test();</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">BSP_TZ_SECURE_BUILD</span></span>
    <span class="token comment">/* Enter non-secure code */</span>
    <span class="token function">R_BSP_NonSecureEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-4-验证效果" tabindex="-1"><a class="header-anchor" href="#_7-4-验证效果" aria-hidden="true">#</a> 7.4 验证效果</h2><p>点击编译按钮，再点击 debug 按钮，将程序烧写到开发板中。操作EC11编码器(左转、右转、按下)会看到UI也会跟着变化。</p>`,25),r=l("div",{STYLE:"page-break-after: always;"},null,-1);function v(_,m){const n=a("center");return e(),t("div",null,[u,i(n,null,{default:p(()=>[c("本节完")]),_:1}),r])}const b=s(d,[["render",v],["__file","chapter7.html.vue"]]);export{b as default};
