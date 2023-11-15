import{_ as n,o as a,c as s,e as t}from"./app-a98b8345.js";const e={},p=t(`<h1 id="第14章-任务通知-task-notifications" tabindex="-1"><a class="header-anchor" href="#第14章-任务通知-task-notifications" aria-hidden="true">#</a> 第14章 任务通知(Task Notifications)</h1><p>所谓&quot;任务通知&quot;，你可以反过来读&quot;通知任务&quot;。</p><p>我们使用队列、信号量、事件组等等方法时，并不知道对方是谁。使用任务通知时，可以明确指定：通知哪个任务。</p><p>使用队列、信号量、事件组时，我们都要事先创建对应的结构体，双方通过中间的结构体通信：</p><p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-14/image1.png" alt=""></p><p>使用任务通知时，任务结构体TCB中就包含了内部对象，可以直接接收别人发过来的&quot;通知&quot;：</p><p><img src="https://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/FreeRTOS/chapter-14/image2.png" alt="image2"></p><p>本章涉及如下内容：</p><ul><li>任务通知：通知状态、通知值</li><li>任务通知的使用场合</li><li>任务通知的优势</li></ul><h2 id="_14-1-任务通知的特性" tabindex="-1"><a class="header-anchor" href="#_14-1-任务通知的特性" aria-hidden="true">#</a> 14.1 任务通知的特性</h2><h3 id="_14-1-1-优势及限制" tabindex="-1"><a class="header-anchor" href="#_14-1-1-优势及限制" aria-hidden="true">#</a> 14.1.1 优势及限制</h3><p>任务通知的优势：</p><ul><li>效率更高：使用任务通知来发送事件、数据给某个任务时，效率更高。比队列、信号量、事件组都有大的优势。</li><li>更节省内存：使用其他方法时都要先创建对应的结构体，使用任务通知时无需额外创建结构体。</li></ul><p>任务通知的限制：</p><ul><li>不能发送数据给ISR：</li></ul><p>ISR并没有任务结构体，所以无法使用任务通知的功能给ISR发送数据。但是ISR可以使用任务通知的功能，发数据给任务。</p><ul><li>数据只能给该任务独享</li></ul><p>使用队列、信号量、事件组时，数据保存在这些结构体中，其他任务、ISR都可以访问这些数据。使用任务通知时，数据存放入目标任务中，只有它可以访问这些数据。</p><p>在日常工作中，这个限制影响不大。因为很多场合是从多个数据源把数据发给某个任务，而不是把一个数据源的数据发给多个任务。</p><ul><li>无法缓冲数据</li></ul><p>使用队列时，假设队列深度为N，那么它可以保持N个数据。</p><p>使用任务通知时，任务结构体中只有一个任务通知值，只能保持一个数据。</p><ul><li>无法广播给多个任务</li></ul><p>使用事件组可以同时给多个任务发送事件。</p><p>使用任务通知，只能发个一个任务。</p><ul><li>如果发送受阻，发送方无法进入阻塞状态等待</li></ul><p>假设队列已经满了，使用xQueueSendToBack()给队列发送数据时，任务可以进入阻塞状态等待发送完成。</p><p>使用任务通知时，即使对方无法接收数据，发送方也无法阻塞等待，只能即刻返回错误。</p><h3 id="_14-1-2-通知状态和通知值" tabindex="-1"><a class="header-anchor" href="#_14-1-2-通知状态和通知值" aria-hidden="true">#</a> 14.1.2 通知状态和通知值</h3><p>每个任务都有一个结构体：TCB(Task Control Block)，里面有2个成员：</p><ul><li>一个是uint8_t类型，用来表示通知状态</li><li>一个是uint32_t类型，用来表示通知值</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">tskTaskControlBlock</span>
<span class="token punctuation">{</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token comment">/* configTASK_NOTIFICATION_ARRAY_ENTRIES = 1 */</span>
    <span class="token keyword">volatile</span> <span class="token class-name">uint32_t</span> ulNotifiedValue<span class="token punctuation">[</span> configTASK_NOTIFICATION_ARRAY_ENTRIES <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">volatile</span> <span class="token class-name">uint8_t</span> ucNotifyState<span class="token punctuation">[</span> configTASK_NOTIFICATION_ARRAY_ENTRIES <span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span> tskTCB<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通知状态有3种取值：</p><ul><li>taskNOT_WAITING_NOTIFICATION：任务没有在等待通知</li><li>taskWAITING_NOTIFICATION：任务在等待通知</li><li>taskNOTIFICATION_RECEIVED：任务接收到了通知，也被称为pending(有数据了，待处理)</li></ul><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>##define <span class="token function">taskNOT_WAITING_NOTIFICATION</span>              <span class="token punctuation">(</span> <span class="token punctuation">(</span> <span class="token class-name">uint8_t</span> <span class="token punctuation">)</span> <span class="token number">0</span> <span class="token punctuation">)</span>  <span class="token comment">/* 也是初始状态 */</span>
##define <span class="token function">taskWAITING_NOTIFICATION</span>                  <span class="token punctuation">(</span> <span class="token punctuation">(</span> <span class="token class-name">uint8_t</span> <span class="token punctuation">)</span> <span class="token number">1</span> <span class="token punctuation">)</span>
##define <span class="token function">taskNOTIFICATION_RECEIVED</span>                 <span class="token punctuation">(</span> <span class="token punctuation">(</span> <span class="token class-name">uint8_t</span> <span class="token punctuation">)</span> <span class="token number">2</span> <span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通知值可以有很多种类型：</p><ul><li>计数值</li><li>位(类似事件组)</li><li>任意数值</li></ul><h2 id="_14-2-任务通知的使用" tabindex="-1"><a class="header-anchor" href="#_14-2-任务通知的使用" aria-hidden="true">#</a> 14.2 任务通知的使用</h2><p>使用任务通知，可以实现轻量级的队列(长度为1)、邮箱(覆盖的队列)、计数型信号量、二进制信号量、事件组。</p><h3 id="_14-2-1-两类函数" tabindex="-1"><a class="header-anchor" href="#_14-2-1-两类函数" aria-hidden="true">#</a> 14.2.1 两类函数</h3><p>任务通知有2套函数，简化版、专业版，列表如下：</p><ul><li>简化版函数的使用比较简单，它实际上也是使用专业版函数实现的</li><li>专业版函数支持很多参数，可以实现很多功能</li></ul><table><thead><tr><th></th><th>简化版</th><th>专业版</th></tr></thead><tbody><tr><td>发出通知</td><td>xTaskNotifyGive vTaskNotifyGiveFromISR</td><td>xTaskNotify xTaskNotifyFromISR</td></tr><tr><td>取出通知</td><td>ulTaskNotifyTake</td><td>xTaskNotifyWait</td></tr></tbody></table><h3 id="_14-2-2-xtasknotifygive-ultasknotifytake" tabindex="-1"><a class="header-anchor" href="#_14-2-2-xtasknotifygive-ultasknotifytake" aria-hidden="true">#</a> 14.2.2 xTaskNotifyGive/ulTaskNotifyTake</h3><p>在任务中使用xTaskNotifyGive函数，在ISR中使用vTaskNotifyGiveFromISR函数，都是直接给其他任务发送通知：</p><ul><li>使得通知值加一</li><li>并使得通知状态变为&quot;pending&quot;，也就是taskNOTIFICATION_RECEIVED，表示有数据了、待处理</li></ul><p>可以使用ulTaskNotifyTake函数来取出通知值：</p><ul><li>如果通知值等于0，则阻塞(可以指定超时时间)</li><li>当通知值大于0时，任务从阻塞态进入就绪态</li><li>在ulTaskNotifyTake返回之前，还可以做些清理工作：把通知值减一，或者把通知值清零 使用ulTaskNotifyTake函数可以实现轻量级的、高效的二进制信号量、计数型信号量。</li></ul><p>这几个函数的原型如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>BaseType_t <span class="token function">xTaskNotifyGive</span><span class="token punctuation">(</span> TaskHandle_t xTaskToNotify <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">vTaskNotifyGiveFromISR</span><span class="token punctuation">(</span> TaskHandle_t xTaskHandle<span class="token punctuation">,</span> BaseType_t <span class="token operator">*</span>pxHigherPriorityTaskWoken <span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">uint32_t</span> <span class="token function">ulTaskNotifyTake</span><span class="token punctuation">(</span> BaseType_t xClearCountOnExit<span class="token punctuation">,</span> TickType_t xTicksToWait <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>xTaskNotifyGive函数的参数说明如下：</p><table><thead><tr><th><strong>参数</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>xTaskToNotify</td><td>任务句柄(创建任务时得到)，给哪个任务发通知</td></tr><tr><td>返回值</td><td>必定返回pdPASS</td></tr></tbody></table><p>vTaskNotifyGiveFromISR函数的参数说明如下：</p><table><thead><tr><th><strong>参数</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>xTaskHandle</td><td>任务句柄(创建任务时得到)，给哪个任务发通知</td></tr><tr><td>pxHigherPriorityTaskWoken</td><td>被通知的任务，可能正处于阻塞状态。 此函数发出通知后，会把它从阻塞状态切换为就绪态。 如果被唤醒的任务的优先级，高于当前任务的优先级， 则&quot;*pxHigherPriorityTaskWoken&quot;被设置为pdTRUE， 这表示在中断返回之前要进行任务切换。</td></tr></tbody></table><p>ulTaskNotifyTake函数的参数说明如下：</p><table><thead><tr><th><strong>参数</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>xClearCountOnExit</td><td>函数返回前是否清零： pdTRUE：把通知值清零 pdFALSE：如果通知值大于0，则把通知值减一</td></tr><tr><td>xTicksToWait</td><td>任务进入阻塞态的超时时间，它在等待通知值大于0。 0：不等待，即刻返回； portMAX_DELAY：一直等待，直到通知值大于0； 其他值：Tick Count，可以用*pdMS_TO_TICKS()*把ms转换为Tick Count</td></tr><tr><td>返回值</td><td>函数返回之前，在清零或减一之前的通知值。 如果xTicksToWait非0，则返回值有2种情况： 1. 大于0：在超时前，通知值被增加了 2. 等于0：一直没有其他任务增加通知值，最后超时返回0</td></tr></tbody></table><h3 id="_14-2-3-xtasknotify-xtasknotifywait" tabindex="-1"><a class="header-anchor" href="#_14-2-3-xtasknotify-xtasknotifywait" aria-hidden="true">#</a> 14.2.3 xTaskNotify/xTaskNotifyWait</h3><p>xTaskNotify 函数功能更强大，可以使用不同参数实现各类功能，比如：</p><ul><li>让接收任务的通知值加一：这时xTaskNotify()等同于xTaskNotifyGive()</li><li>设置接收任务的通知值的某一位、某些位，这就是一个轻量级的、更高效的事件组</li><li>把一个新值写入接收任务的通知值：上一次的通知值被读走后，写入才成功。这就是轻量级的、长度为1的队列</li><li>用一个新值覆盖接收任务的通知值：无论上一次的通知值是否被读走，覆盖都成功。类似xQueueOverwrite()函数，这就是轻量级的邮箱。</li></ul><p>xTaskNotify()比xTaskNotifyGive()更灵活、强大，使用上也就更复杂。xTaskNotifyFromISR()是它对应的ISR版本。</p><p>这两个函数用来发出任务通知，使用哪个函数来取出任务通知呢？ 使用xTaskNotifyWait()函数！它比ulTaskNotifyTake()更复杂：</p><ul><li>可以让任务等待(可以加上超时时间)，等到任务状态为&quot;pending&quot;(也就是有数据)</li><li>还可以在函数进入、退出时，清除通知值的指定位</li></ul><p>这几个函数的原型如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code>BaseType_t <span class="token function">xTaskNotify</span><span class="token punctuation">(</span> TaskHandle_t xTaskToNotify<span class="token punctuation">,</span> <span class="token class-name">uint32_t</span> ulValue<span class="token punctuation">,</span> eNotifyAction eAction <span class="token punctuation">)</span><span class="token punctuation">;</span>

BaseType_t <span class="token function">xTaskNotifyFromISR</span><span class="token punctuation">(</span> TaskHandle_t xTaskToNotify<span class="token punctuation">,</span>
                               <span class="token class-name">uint32_t</span> ulValue<span class="token punctuation">,</span> 
                               eNotifyAction eAction<span class="token punctuation">,</span> 
                               BaseType_t <span class="token operator">*</span>pxHigherPriorityTaskWoken <span class="token punctuation">)</span><span class="token punctuation">;</span>

BaseType_t <span class="token function">xTaskNotifyWait</span><span class="token punctuation">(</span> <span class="token class-name">uint32_t</span> ulBitsToClearOnEntry<span class="token punctuation">,</span> 
                            <span class="token class-name">uint32_t</span> ulBitsToClearOnExit<span class="token punctuation">,</span> 
                            <span class="token class-name">uint32_t</span> <span class="token operator">*</span>pulNotificationValue<span class="token punctuation">,</span> 
                            TickType_t xTicksToWait <span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>xTaskNotify函数的参数说明如下：</p><table><thead><tr><th><strong>参数</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>xTaskToNotify</td><td>任务句柄(创建任务时得到)，给哪个任务发通知</td></tr><tr><td>ulValue</td><td>怎么使用ulValue，由eAction参数决定</td></tr><tr><td>eAction</td><td>见下表</td></tr><tr><td>返回值</td><td>pdPASS：成功，大部分调用都会成功 pdFAIL：只有一种情况会失败，当eAction为eSetValueWithoutOverwrite， 并且通知状态为&quot;pending&quot;(表示有新数据未读)，这时就会失败。</td></tr></tbody></table><p>eNotifyAction参数说明：</p><table><thead><tr><th><strong>eNotifyAction取值</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>eNoAction</td><td>仅仅是更新通知状态为&quot;pending&quot;，未使用ulValue。 这个选项相当于轻量级的、更高效的二进制信号量。</td></tr><tr><td>eSetBits</td><td>通知值 = 原来的通知值 | ulValue，按位或。 相当于轻量级的、更高效的事件组。</td></tr><tr><td>eIncrement</td><td>通知值 = 原来的通知值 + 1，未使用ulValue。 相当于轻量级的、更高效的二进制信号量、计数型信号量。 相当于*xTaskNotifyGive()*函数。</td></tr><tr><td>eSetValueWithoutOverwrite</td><td>不覆盖。 如果通知状态为&quot;pending&quot;(表示有数据未读)， 则此次调用xTaskNotify不做任何事，返回pdFAIL。 如果通知状态不是&quot;pending&quot;(表示没有新数据)， 则：通知值 = ulValue。</td></tr><tr><td>eSetValueWithOverwrite</td><td>覆盖。 无论如何，不管通知状态是否为&quot;pendng&quot;， 通知值 = ulValue。</td></tr></tbody></table><p>xTaskNotifyFromISR函数跟xTaskNotify很类似，就多了最后一个参数pxHigherPriorityTaskWoken。在很多ISR函数中，这个参数的作用都是类似的，使用场景如下：</p><ul><li>被通知的任务，可能正处于阻塞状态</li><li>xTaskNotifyFromISR函数发出通知后，会把接收任务从阻塞状态切换为就绪态</li><li>如果被唤醒的任务的优先级，高于当前任务的优先级，则&quot;*pxHigherPriorityTaskWoken&quot;被设置为pdTRUE，这表示在中断返回之前要进行任务切换。</li></ul><p>xTaskNotifyWait函数列表如下：</p><table><thead><tr><th><strong>参数</strong></th><th><strong>说明</strong></th></tr></thead><tbody><tr><td>ulBitsToClearOnEntry</td><td>在xTaskNotifyWait入口处，要清除通知值的哪些位？ 通知状态不是&quot;pending&quot;的情况下，才会清除。 它的本意是：我想等待某些事件发生，所以先把&quot;旧数据&quot;的某些位清零。 能清零的话：通知值 = 通知值 &amp; ~(ulBitsToClearOnEntry)。 比如传入0x01，表示清除通知值的bit0； 传入0xffffffff即ULONG_MAX，表示清除所有位，即把值设置为0</td></tr><tr><td>ulBitsToClearOnExit</td><td>在xTaskNotifyWait出口处，如果不是因为超时推出，而是因为得到了数据而退出时： 通知值 = 通知值 &amp; ~(ulBitsToClearOnExit)。 在清除某些位之前，通知值先被赋给&quot;*pulNotificationValue&quot;。 比如入0x03，表示清除通知值的bit0、bit1； 传入0xffffffff即ULONG_MAX，表示清除所有位，即把值设置为0</td></tr><tr><td>pulNotificationValue</td><td>用来取出通知值。 在函数退出时，使用ulBitsToClearOnExit清除之前，把通知值赋给&quot;*pulNotificationValue&quot;。 如果不需要取出通知值，可以设为NULL。</td></tr><tr><td>xTicksToWait</td><td>任务进入阻塞态的超时时间，它在等待通知状态变为&quot;pending&quot;。 0：不等待，即刻返回； portMAX_DELAY：一直等待，直到通知状态变为&quot;pending&quot;； 其他值：Tick Count，可以用*pdMS_TO_TICKS()*把ms转换为Tick Count</td></tr><tr><td>返回值</td><td>1. pdPASS：成功 这表示xTaskNotifyWait成功获得了通知： 可能是调用函数之前，通知状态就是&quot;pending&quot;； 也可能是在阻塞期间，通知状态变为了&quot;pending&quot;。 2. pdFAIL：没有得到通知。</td></tr></tbody></table><h2 id="_14-3-示例21-基本操作" tabindex="-1"><a class="header-anchor" href="#_14-3-示例21-基本操作" aria-hidden="true">#</a> 14.3 示例21: 基本操作</h2><p>本节代码为：1401_tasknotification_car_game，主要看applications\\nwatch\\game2.c。</p><p>car1运行到终点后，给car2发送轻量级信号量，给car3发送数值。car2等待轻量级信号量，car3等待特定的通知值。</p><p>使用任务通知时，需要知道对方的任务句柄，创建任务时要记录任务句柄，代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token number">36</span> <span class="token keyword">static</span> TaskHandle_t g_TaskHandleCar2<span class="token punctuation">;</span>
<span class="token number">37</span> <span class="token keyword">static</span> TaskHandle_t g_TaskHandleCar3<span class="token punctuation">;</span>
<span class="token comment">/* 省略 */</span>
<span class="token number">312</span>     <span class="token function">xTaskCreate</span><span class="token punctuation">(</span>Car1Task<span class="token punctuation">,</span> <span class="token string">&quot;car1_task&quot;</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>g_cars<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token constant">NULL</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">313</span>     <span class="token function">xTaskCreate</span><span class="token punctuation">(</span>Car2Task<span class="token punctuation">,</span> <span class="token string">&quot;car2_task&quot;</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>g_cars<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>g_TaskHandleCar2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">314</span>     <span class="token function">xTaskCreate</span><span class="token punctuation">(</span>Car3Task<span class="token punctuation">,</span> <span class="token string">&quot;car3_task&quot;</span><span class="token punctuation">,</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>g_cars<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>g_TaskHandleCar3<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>car2等待轻量级信号量，代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token number">174</span>     <span class="token function">ulTaskNotifyTake</span><span class="token punctuation">(</span>pdTRUE<span class="token punctuation">,</span> portMAX_DELAY<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>car3等待通知值为100，代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token number">220</span>     <span class="token class-name">uint32_t</span> val<span class="token punctuation">;</span>
<span class="token comment">/* 省略 */</span>
<span class="token number">237</span>     <span class="token keyword">do</span>
<span class="token number">238</span>     <span class="token punctuation">{</span>
<span class="token number">239</span>             <span class="token function">xTaskNotifyWait</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">~</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>val<span class="token punctuation">,</span> portMAX_DELAY<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">240</span>     <span class="token punctuation">}</span> <span class="token keyword">while</span> <span class="token punctuation">(</span>val <span class="token operator">!=</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>car1到达终点后，向car2、car3发出任务通知，代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token number">143</span>                                     <span class="token comment">/* 发出任务通知给car2,car3 */</span>
<span class="token number">144</span>                                     <span class="token function">xTaskNotifyGive</span><span class="token punctuation">(</span>g_TaskHandleCar2<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token number">145</span>
<span class="token number">146</span>                                     <span class="token function">xTaskNotify</span><span class="token punctuation">(</span>g_TaskHandleCar3<span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> eSetValueWithOverwrite<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实验现象：car1到达终点后，car2、car3才会启动。</p>`,84),i=[p];function o(l,c){return a(),s("div",null,i)}const d=n(e,[["render",o],["__file","chapter14.html.vue"]]);export{d as default};