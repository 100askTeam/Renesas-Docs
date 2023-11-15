import{_ as s,r as a,o as t,c as e,d as p,w as c,b as o,e as i,a as l}from"./app-a98b8345.js";const u={},r=i(`<h1 id="_8-lvgl对接串口打印" tabindex="-1"><a class="header-anchor" href="#_8-lvgl对接串口打印" aria-hidden="true">#</a> 8. LVGL对接串口打印</h1><p>本次实验我们为LVGL库对接串口的打印功能。</p><h2 id="_8-1-复制工程" tabindex="-1"><a class="header-anchor" href="#_8-1-复制工程" aria-hidden="true">#</a> 8.1 复制工程</h2><p>上次实验得出的工程我们可以通过复制在原有的基础上得到一个新的工程。</p><blockquote><p>如果你不清楚复制工程的步骤，请参考阅读第三章实验的步骤教程。</p></blockquote><p>本次实验我们的项目命名为：<strong>06_dshanmcu_ra6m5_lvgl_display_touchpad_encoder_log</strong></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-8/chapter-8_001.png" alt="chapter-8_001" style="zoom:80%;"><h2 id="_8-2-修改lvgl配置文件" tabindex="-1"><a class="header-anchor" href="#_8-2-修改lvgl配置文件" aria-hidden="true">#</a> 8.2 修改lvgl配置文件</h2><p>打开 <code>06_dshanmcu_ra6m5_lvgl_display_touchpad_encoder_log\\dshanmcu_ra6m5\\Middlewares\\lv_conf.h</code> 文件，下面对其进行修改适配我们的串口打印驱动：</p><ol><li>修改第 233 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LV_USE_LOG</span> <span class="token expression"><span class="token number">1</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>修改第 247 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LV_LOG_PRINTF</span> <span class="token expression"><span class="token number">1</span></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_8-3-修改app程序" tabindex="-1"><a class="header-anchor" href="#_8-3-修改app程序" aria-hidden="true">#</a> 8.3 修改app程序</h2><p>打开 <code>06_dshanmcu_ra6m5_lvgl_display_touchpad_encoder_log\\dshanmcu_ra6m5\\applications\\app_lvgl_test.c</code> ，将 <code>app_lvgl_test</code> 函数修改为如下所示的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">app_lvgl_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
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
    <span class="token function">LV_LOG_USER</span><span class="token punctuation">(</span><span class="token string">&quot;lv_init ok!\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">lv_port_disp_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">LV_LOG_USER</span><span class="token punctuation">(</span><span class="token string">&quot;lv_port_disp_init ok!\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">lv_port_indev_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">LV_LOG_USER</span><span class="token punctuation">(</span><span class="token string">&quot;lv_port_indev_init ok!\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* create lvgl demo */</span>
    <span class="token function">lv_demo_widgets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">lv_task_handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// delay 5ms</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-4-验证效果" tabindex="-1"><a class="header-anchor" href="#_8-4-验证效果" aria-hidden="true">#</a> 8.4 验证效果</h2><p>点击编译按钮，再点击 debug 按钮，将程序烧写到开发板中。打开串口工具，会看到串口终端多了如下信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token punctuation">[</span>User<span class="token punctuation">]</span>  <span class="token punctuation">(</span><span class="token number">0.513</span>, +24<span class="token punctuation">)</span>     app_lvgl_test: lv_port_indev_init ok<span class="token operator">!</span>	<span class="token punctuation">(</span>in app_lvgl_test.c line <span class="token comment">#57)</span>
<span class="token punctuation">[</span>User<span class="token punctuation">]</span>     <span class="token punctuation">(</span><span class="token number">0.000</span>, +0<span class="token punctuation">)</span>      app_lvgl_test: lv_init ok<span class="token operator">!</span>	<span class="token punctuation">(</span>in app_lvgl_test.c line <span class="token comment">#51)</span>
<span class="token punctuation">[</span>User<span class="token punctuation">]</span>     <span class="token punctuation">(</span><span class="token number">0.489</span>, +489<span class="token punctuation">)</span>    app_lvgl_test: lv_port_disp_init ok<span class="token operator">!</span>	<span class="token punctuation">(</span>in app_lvgl_test.c line <span class="token comment">#54)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19),d=l("div",{STYLE:"page-break-after: always;"},null,-1);function k(v,_){const n=a("center");return t(),e("div",null,[r,p(n,null,{default:c(()=>[o("本节完")]),_:1}),d])}const h=s(u,[["render",k],["__file","chapter8.html.vue"]]);export{h as default};
