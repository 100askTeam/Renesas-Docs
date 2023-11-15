import{_ as n,o as s,c as a,e}from"./app-a98b8345.js";const t={},p=e(`<h1 id="第27章-freertos实验" tabindex="-1"><a class="header-anchor" href="#第27章-freertos实验" aria-hidden="true">#</a> 第27章 FreeRTOS实验</h1><p>本章目标</p><ul><li>学会使用RASC创建一个基于freertos的工程；</li><li>学会使用RASC创建freertos任务，体验RTOS的多任务调度；</li></ul><h2 id="_27-1-创建基于freertos的工程" tabindex="-1"><a class="header-anchor" href="#_27-1-创建基于freertos的工程" aria-hidden="true">#</a> 27.1 创建基于FreeRTOS的工程</h2><p>使用RASC工具创建基于freertos的MDK工程非常的简单快捷，在前文创建MDK工程《3.5.1 使用RASC创建MDK工程》的最后一步那里，在“RTOS Selection”中选“FreeRTOS(v10.4.6+fsp.4.3.0)”即可，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-27/image1.png" alt=""></p><p>接下来会默认勾选“FreeRTOS-Minimal-Static Allocation”：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-27/image2.png" alt=""></p><p>到这一步后直接点击下方的“Finish”即可创建一个带有FreeRTOS的RA6M5 MDK工程了。</p><h2 id="_27-2-freertos初体验" tabindex="-1"><a class="header-anchor" href="#_27-2-freertos初体验" aria-hidden="true">#</a> 27.2 FreeRTOS初体验</h2><h3 id="_27-2-1-新建线程" tabindex="-1"><a class="header-anchor" href="#_27-2-1-新建线程" aria-hidden="true">#</a> 27.2.1 新建线程</h3><p>在RASC中新建线程非常简单，在其配置界面的“Stacks”中右侧界面的“Threads”处点击“New Thread”，即可新建一个FreeRTOS的线程，也就是任务，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-27/image3.png" alt=""></p><p>上图中已经添加了两个线程“log_thread”和“led_thread”。</p><h3 id="_27-2-2-添加堆分配算法模块" tabindex="-1"><a class="header-anchor" href="#_27-2-2-添加堆分配算法模块" aria-hidden="true">#</a> 27.2.2 添加堆分配算法模块</h3><p>添加完线程之后还需要添加堆分配算法，FreeRTOS支持5种堆算法：heap1~heap5。本实验选择的是heap4，首先选中任意一个FreeRTOS线程，比如“led_thread”，然后点击配置界面的“New Stack”，找到“RTOS”后选择要使用的算法即可，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-27/image4.png" alt=""></p><p>FreeRTOS中，只能选择一种堆算法。虽然上图里是在“led_thread”中为它选择了某个堆算法，但是这个堆算法不是“属于”某个线程，而是属于整个FreeRTOS的。你不能在另一线程里选择另一种堆算法。</p><h3 id="_27-2-3-配置freertos通用参数" tabindex="-1"><a class="header-anchor" href="#_27-2-3-配置freertos通用参数" aria-hidden="true">#</a> 27.2.3 配置FreeRTOS通用参数</h3><p>要使用FreeRTOS，需要配置内核相关的许多参数，比如时钟基准，时钟频率，任务栈大小，分配内存时使用静态分配还是动态分配等等，这些参数在FSP种点击任意一个FreeRTOS线程即可看到关于内核的通用参数配置，然后根据自己的实际需求进行设置：</p><ol><li>Common-General</li></ol><p>在此处设置RTOS内核运行的时钟频率、任务最大优先级等参数，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-27/image5.png" alt=""></p><ol start="2"><li>Common-Memory Allocation</li></ol><p>在此处设置内存分配相关的参数，比如是否支持静态内存分配、堆的大小，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-27/image6.png" alt=""></p><ol start="3"><li>其它通用参数</li></ol><p>还有很多参数，比如是否支持任务通知、互斥量等等，FreeRTOS是一个可以高度定制的内核，要想弄清楚这些参数，需要对它比较熟悉。</p><h3 id="_27-2-4-配置线程参数" tabindex="-1"><a class="header-anchor" href="#_27-2-4-配置线程参数" aria-hidden="true">#</a> 27.2.4 配置线程参数</h3><p>对于某个线程，需要设置它的名称、栈大小、优先级等参数，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-27/image7.png" alt=""></p><h3 id="_27-2-5-驱动程序" tabindex="-1"><a class="header-anchor" href="#_27-2-5-驱动程序" aria-hidden="true">#</a> 27.2.5 驱动程序</h3><p>本实验使用的是串口和LED的驱动程序，请读者自行移植。</p><h3 id="_27-2-6-线程程序" tabindex="-1"><a class="header-anchor" href="#_27-2-6-线程程序" aria-hidden="true">#</a> 27.2.6 线程程序</h3><ol><li>LED线程</li></ol><p>在LED的线程入口函数中，本实验先对LED设备进行初始化，然后每隔300ms改变一次LED的状态以实现闪烁效果，代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;led_thread.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_gpio.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;hal_data.h&quot;</span></span>
<span class="token comment">/* LedThread entry function */</span>
<span class="token comment">/* pvParameters contains TaskHandle_t */</span>
<span class="token keyword">void</span> <span class="token function">led_thread_entry</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span> pvParameters<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">FSP_PARAMETER_NOT_USED</span><span class="token punctuation">(</span>pvParameters<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* TODO: add your own code here */</span>
    <span class="token keyword">struct</span> <span class="token class-name">IODev</span> <span class="token operator">*</span>pLedDev <span class="token operator">=</span> <span class="token function">IOGetDecvice</span><span class="token punctuation">(</span><span class="token string">&quot;UserLed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">!=</span> pLedDev<span class="token punctuation">)</span>
        pLedDev<span class="token operator">-&gt;</span><span class="token function">Init</span><span class="token punctuation">(</span>pLedDev<span class="token punctuation">)</span><span class="token punctuation">;</span>
    bool state <span class="token operator">=</span> false<span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        pLedDev<span class="token operator">-&gt;</span><span class="token function">Write</span><span class="token punctuation">(</span>pLedDev<span class="token punctuation">,</span> state<span class="token punctuation">)</span><span class="token punctuation">;</span>
        state <span class="token operator">=</span> <span class="token operator">!</span>state<span class="token punctuation">;</span>
        <span class="token function">vTaskDelay</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意的是这里使用的是RTOS内核的延时函数，它让当前线程进入阻塞状态，让出处理器资源。</p><ol start="2"><li>串口打印线程</li></ol><p>在串口打印线程的入口函数中，首先初始化了串口，然后每隔100ms计数一次并打印出来，代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;log_thread.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_uart.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;hal_data.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
<span class="token comment">/* LogThread entry function */</span>
<span class="token comment">/* pvParameters contains TaskHandle_t */</span>
<span class="token keyword">void</span> <span class="token function">log_thread_entry</span><span class="token punctuation">(</span><span class="token keyword">void</span> <span class="token operator">*</span> pvParameters<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">FSP_PARAMETER_NOT_USED</span><span class="token punctuation">(</span>pvParameters<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* TODO: add your own code here */</span>
    
    <span class="token function">UARTDrvInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token class-name">uint32_t</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\nLog: %d\\r\\n&quot;</span><span class="token punctuation">,</span> count<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">vTaskDelay</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_27-2-7-freertos启动分析" tabindex="-1"><a class="header-anchor" href="#_27-2-7-freertos启动分析" aria-hidden="true">#</a> 27.2.7 FreeRTOS启动分析</h3><p>FreeRTOS的启动过程，看main函数即可。创建2个线程后，启动调度器。代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    g_fsp_common_thread_count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    g_fsp_common_initialized <span class="token operator">=</span> false<span class="token punctuation">;</span>

    <span class="token comment">/* Create semaphore to make sure common init is done before threads start running. */</span>
    g_fsp_common_initialized_semaphore <span class="token operator">=</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">configSUPPORT_STATIC_ALLOCATION</span></span>
    <span class="token function">xSemaphoreCreateCountingStatic</span><span class="token punctuation">(</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">else</span></span>
    <span class="token function">xSemaphoreCreateCounting</span><span class="token punctuation">(</span>
    <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
        <span class="token number">256</span><span class="token punctuation">,</span>
        <span class="token number">1</span>
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">configSUPPORT_STATIC_ALLOCATION</span></span>
        <span class="token punctuation">,</span> <span class="token operator">&amp;</span>g_fsp_common_initialized_semaphore_memory
        <span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
    <span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> g_fsp_common_initialized_semaphore<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">rtos_startup_err_callback</span><span class="token punctuation">(</span>g_fsp_common_initialized_semaphore<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* Init RTOS tasks. */</span>
    <span class="token function">led_thread_create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">log_thread_create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* Start the scheduler. */</span>
    <span class="token function">vTaskStartScheduler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>第07~22行：创建了一个计数型信号量；</li><li>第25~26行：创建线程；</li><li>第29行：开启FreeRTOS的调度器，如果开启成功则不会走到30行的“return 0”；</li></ul><p>对于RASC创建的FreeRTOS工程，它不会调用hal_entry()函数。</p><h3 id="_27-2-8-测试结果" tabindex="-1"><a class="header-anchor" href="#_27-2-8-测试结果" aria-hidden="true">#</a> 27.2.8 测试结果</h3><p>将编译出来的二进制可执行文件烧录到板子上运行，可以观察到LED在闪烁，而且串口在打印如下图这样的信息：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-27/image8.png" alt=""></p>`,49),o=[p];function i(c,l){return s(),a("div",null,o)}const d=n(t,[["render",i],["__file","chapter27.html.vue"]]);export{d as default};