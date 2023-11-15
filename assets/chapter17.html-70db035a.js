import{_ as n,o as s,c as a,e}from"./app-a98b8345.js";const p={},t=e(`<h1 id="第17章-资源管理-resource-management" tabindex="-1"><a class="header-anchor" href="#第17章-资源管理-resource-management" aria-hidden="true">#</a> 第17章 资源管理(Resource Management)</h1><p>在前面讲解互斥量时，引入过临界资源的概念。在前面课程里，已经实现了临界资源的互斥访问。</p><p>本章节的内容比较少，只是引入两个功能：屏蔽/使能中断、暂停/恢复调度器。</p><p>要独占式地访问临界资源，有3种方法：</p><ul><li>公平竞争：比如使用互斥量，谁先获得互斥量谁就访问临界资源，这部分内容前面讲过。</li><li>谁要跟我抢，我就灭掉谁： <ul><li>中断要跟我抢？我屏蔽中断</li><li>其他任务要跟我抢？我禁止调度器，不运行任务切换</li></ul></li></ul><h2 id="_17-1-屏蔽中断" tabindex="-1"><a class="header-anchor" href="#_17-1-屏蔽中断" aria-hidden="true">#</a> 17.1 屏蔽中断</h2><p>屏蔽中断有两套宏：任务中使用、ISR中使用：</p><ul><li>任务中使用：taskENTER_CRITICA()/taskEXIT_CRITICAL()</li><li>ISR中使用：taskENTER_CRITICAL_FROM_ISR()/taskEXIT_CRITICAL_FROM_ISR()</li></ul><h3 id="_17-1-1-在任务中屏蔽中断" tabindex="-1"><a class="header-anchor" href="#_17-1-1-在任务中屏蔽中断" aria-hidden="true">#</a> 17.1.1 在任务中屏蔽中断</h3><p>在任务中屏蔽中断的示例代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* 在任务中，当前时刻中断是使能的
 * 执行这句代码后，屏蔽中断
 */</span>
 <span class="token function">taskENTER_CRITICAL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 访问临界资源 */</span>

<span class="token comment">/* 重新使能中断 */</span>
<span class="token function">taskEXIT_CRITICAL</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在taskENTER_CRITICA()/taskEXIT_CRITICAL()之间：</p><ul><li>低优先级的中断被屏蔽了：优先级低于、等于configMAX_SYSCALL_INTERRUPT_PRIORITY</li><li>高优先级的中断可以产生：优先级高于configMAX_SYSCALL_INTERRUPT_PRIORITY <ul><li>但是，这些中断ISR里，不允许使用FreeRTOS的API函数</li></ul></li><li>任务调度依赖于中断、依赖于API函数，所以：这两段代码之间，不会有任务调度产生</li></ul><p>这套taskENTER_CRITICA()/taskEXIT_CRITICAL()宏，是可以递归使用的，它的内部会记录嵌套的深度，只有嵌套深度变为0时，调用taskEXIT_CRITICAL()才会重新使能中断。</p><p>使用taskENTER_CRITICA()/taskEXIT_CRITICAL()来访问临界资源是很粗鲁的方法：</p><ul><li>中断无法正常运行</li><li>任务调度无法进行</li><li>所以，之间的代码要尽可能快速地执行</li></ul><h3 id="_17-1-2-在isr中屏蔽中断" tabindex="-1"><a class="header-anchor" href="#_17-1-2-在isr中屏蔽中断" aria-hidden="true">#</a> 17.1.2 在ISR中屏蔽中断</h3><p>要使用含有&quot;FROM_ISR&quot;后缀的宏，示例代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">vAnInterruptServiceRoutine</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* 用来记录当前中断是否使能 */</span>
    UBaseType_t uxSavedInterruptStatus<span class="token punctuation">;</span>
    
    <span class="token comment">/* 在ISR中，当前时刻中断可能是使能的，也可能是禁止的
     * 所以要记录当前状态, 后面要恢复为原先的状态
     * 执行这句代码后，屏蔽中断
     */</span>
    uxSavedInterruptStatus <span class="token operator">=</span> <span class="token function">taskENTER_CRITICAL_FROM_ISR</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token comment">/* 访问临界资源 */</span>
    
    <span class="token comment">/* 恢复中断状态 */</span>
    <span class="token function">taskEXIT_CRITICAL_FROM_ISR</span><span class="token punctuation">(</span> uxSavedInterruptStatus <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 现在，当前ISR可以被更高优先级的中断打断了 */</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在taskENTER_CRITICA_FROM_ISR()/taskEXIT_CRITICAL_FROM_ISR()之间：</p><ul><li>低优先级的中断被屏蔽了：优先级低于、等于configMAX_SYSCALL_INTERRUPT_PRIORITY</li><li>高优先级的中断可以产生：优先级高于configMAX_SYSCALL_INTERRUPT_PRIORITY <ul><li>但是，这些中断ISR里，不允许使用FreeRTOS的API函数</li></ul></li><li>任务调度依赖于中断、依赖于API函数，所以：这两段代码之间，不会有任务调度产生</li></ul><h2 id="_17-2-暂停调度器" tabindex="-1"><a class="header-anchor" href="#_17-2-暂停调度器" aria-hidden="true">#</a> 17.2 暂停调度器</h2><p>如果有别的任务来跟你竞争临界资源，你可以把中断关掉：这当然可以禁止别的任务运行，但是这代价太大了。它会影响到中断的处理。</p><p>如果只是禁止别的任务来跟你竞争，不需要关中断，暂停调度器就可以了：在这期间，中断还是可以发生、处理。</p><p>使用这2个函数来暂停、恢复调度器：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/* 暂停调度器 */</span>
<span class="token keyword">void</span> <span class="token function">vTaskSuspendAll</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 恢复调度器
 * 返回值: pdTRUE表示在暂定期间有更高优先级的任务就绪了
 *        可以不理会这个返回值
 */</span>
BaseType_t <span class="token function">xTaskResumeAll</span><span class="token punctuation">(</span> <span class="token keyword">void</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token function">vTaskSuspendScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/* 访问临界资源 */</span>

<span class="token function">xTaskResumeScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这套vTaskSuspendScheduler()/xTaskResumeScheduler()宏，是可以递归使用的，它的内部会记录嵌套的深度，只有嵌套深度变为0时，调用taskEXIT_CRITICAL()才会重新使能中断。</p><h2 id="_17-3-示例24-解决dht11出错问题" tabindex="-1"><a class="header-anchor" href="#_17-3-示例24-解决dht11出错问题" aria-hidden="true">#</a> 17.3 示例24: 解决DHT11出错问题</h2><p>本节代码为：1701_suspend_all_dht11，主要看applications\\nwatch\\game1.c。</p><p>本程序在游戏界面，每2秒钟读取DHT11的温湿度，并在屏幕上显示出来。驱动程序devices\\dev_dht11.c里，使用轮询方式确定波形时长，进而解析出数据。在多任务系统中，假设任务A在测量DHT11的波形宽度的过程中切换到了任务B，那么再切换回任务A时，它的测量结果必定不准确，导致解析DHT11数据失败。解决方法为：在读取DHT11数据前暂停调度器，读取到数据后再恢复调度器。</p><p>game1.c里启动定时器，代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token number">86</span> <span class="token keyword">static</span> TimerHandle_t g_TimerDHT11<span class="token punctuation">;</span>
<span class="token comment">/* 省略 */</span>
<span class="token number">321</span>     <span class="token function">DHT11_Init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">322</span>     <span class="token comment">/* 创建定时器 */</span>
<span class="token number">323</span>     g_TimerDHT11 <span class="token operator">=</span> <span class="token function">xTimerCreate</span><span class="token punctuation">(</span> <span class="token string">&quot;dht11_timer&quot;</span><span class="token punctuation">,</span>
<span class="token number">324</span>                                                     <span class="token number">2000</span><span class="token punctuation">,</span>
<span class="token number">325</span>                                                     pdTRUE<span class="token punctuation">,</span>
<span class="token number">326</span>                                                     <span class="token constant">NULL</span><span class="token punctuation">,</span>
<span class="token number">327</span>                                                     DHT11Timer_Func<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">328</span>     <span class="token comment">/* 启动定时器 */</span>
<span class="token number">329</span>     <span class="token function">xTimerStart</span><span class="token punctuation">(</span>g_TimerDHT11<span class="token punctuation">,</span> portMAX_DELAY<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第323~327行：创建定时器，它是周期性的、超时时间为2秒。</p><p>定时超时函数代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token number">273</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">DHT11Timer_Func</span><span class="token punctuation">(</span> TimerHandle_t xTimer <span class="token punctuation">)</span>
<span class="token number">274</span> <span class="token punctuation">{</span>
<span class="token number">275</span>     <span class="token keyword">int</span> hum<span class="token punctuation">,</span> temp<span class="token punctuation">;</span>
<span class="token number">276</span>     <span class="token keyword">int</span> err<span class="token punctuation">;</span>
<span class="token number">277</span>     <span class="token keyword">char</span> buff<span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token number">278</span>
<span class="token number">279</span>     <span class="token comment">/* 读取DHT11的温湿度 */</span>
<span class="token number">280</span>     <span class="token comment">/* 暂停调度器 */</span>
<span class="token number">281</span>     <span class="token function">vTaskSuspendAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">282</span>     err <span class="token operator">=</span> <span class="token function">DHT11_Read</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>hum<span class="token punctuation">,</span> <span class="token operator">&amp;</span>temp<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">283</span>     <span class="token comment">/* 恢复调度器 */</span>
<span class="token number">284</span>     <span class="token function">xTaskResumeAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">285</span>
<span class="token number">286</span>     <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">==</span> err<span class="token punctuation">)</span>
<span class="token number">287</span>     <span class="token punctuation">{</span>
<span class="token number">288</span>             <span class="token comment">/* 在OLED上显示温湿度 */</span>
<span class="token number">289</span>             <span class="token function">sprintf</span><span class="token punctuation">(</span>buff<span class="token punctuation">,</span> <span class="token string">&quot;%dC,%d%%&quot;</span><span class="token punctuation">,</span> temp<span class="token punctuation">,</span> hum<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">290</span>     <span class="token punctuation">}</span>
<span class="token number">291</span>     <span class="token keyword">else</span>
<span class="token number">292</span>     <span class="token punctuation">{</span>
<span class="token number">293</span>             <span class="token comment">/* 在OLED上显示错误 */</span>
<span class="token number">294</span>         <span class="token function">strcpy</span><span class="token punctuation">(</span>buff<span class="token punctuation">,</span> <span class="token string">&quot;err      &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">295</span>     <span class="token punctuation">}</span>
<span class="token number">296</span>     <span class="token function">draw_string</span><span class="token punctuation">(</span>buff<span class="token punctuation">,</span> false<span class="token punctuation">,</span> <span class="token punctuation">(</span>g_xres <span class="token operator">-</span> <span class="token number">5</span><span class="token operator">*</span><span class="token function">strlen</span><span class="token punctuation">(</span>buff<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">297</span> <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>关键代码在于第281、284行，它们分别暂停调度器、恢复调度器，使得第282行的读DHT11操作不会被别的任务打断。</p><p>定时器超时函数，是在定时器守护任务里运行的，如果这个任务的优先级最高，那么别的任务就无法抢占它，这种情况下，第281、284行的代码可以省略。</p><p>为了体验程序效果，使用RASC配置定时器守护任务，把它的优先级设置为1（跟游戏任务一样）。如下图设置：</p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-17/image1.png" style="zoom:67%;"><p>实现现象：把第281、284行代码注释掉，屏幕第1行显示“err”；把第281、284行保留，可以正确显示温湿度值。</p>`,42),c=[t];function i(l,o){return s(),a("div",null,c)}const d=n(p,[["render",i],["__file","chapter17.html.vue"]]);export{d as default};
