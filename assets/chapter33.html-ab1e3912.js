import{_ as n,o as s,c as a,e}from"./app-a98b8345.js";const t={},p=e(`<h1 id="第33章-dht11温湿度获取实验" tabindex="-1"><a class="header-anchor" href="#第33章-dht11温湿度获取实验" aria-hidden="true">#</a> 第33章 DHT11温湿度获取实验</h1><h2 id="_33-1-dht11简介" tabindex="-1"><a class="header-anchor" href="#_33-1-dht11简介" aria-hidden="true">#</a> 33.1 DHT11简介</h2><h3 id="_33-1-1-产品概述" tabindex="-1"><a class="header-anchor" href="#_33-1-1-产品概述" aria-hidden="true">#</a> 33.1.1 产品概述</h3><p>DHT11是一款可测量温度和湿度的传感器。比如市面上一些空气加湿器，会测量空气中湿度，再根据测量结果决定是否继续加湿。</p><p>DHT11数字温湿度传感器是一款含有已校准数字信号输出的温湿度复合传感器，具有超小体积、极低功耗的特点，使用单根总线与主机进行双向的串行数据传输。DHT11测量温度的精度为±2℃，检测范围为-20℃-60℃。湿度的精度为±5%RH，检测范围为5%RH-95%RH，常用于对精度和实时性要求不高的温湿度测量场合。</p><h3 id="_33-1-2-硬件连接" tabindex="-1"><a class="header-anchor" href="#_33-1-2-硬件连接" aria-hidden="true">#</a> 33.1.2 硬件连接</h3><p>主机通过一条数据线与DH11连接，主机通过这条线发命令给DHT11，DHT11再通过这条线把数据发送给主机。</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-33/image1.png" alt=""></p><h3 id="_33-1-3-通信时序" tabindex="-1"><a class="header-anchor" href="#_33-1-3-通信时序" aria-hidden="true">#</a> 33.1.3 通信时序</h3><p>主控发出开始信号后,DHT11从低功耗模式转换到高速模式,等待主机开始信号结束后,DHT11发送响应信号,并送出40bit的数据,完成一次信号采集。DHT11接收到开始信号后触发一次温湿度采集,如果没有开始信号,DHT11不会主动进行温湿度采集。采集数据后转换到低速模式。</p><p>通讯过程如图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-33/image2.png" alt=""></p><ol><li>总线空闲状态为高电平；</li><li>主机把总线拉低等待DHT11响应,主机把总线拉低必须大于18毫秒,保证DHT11能检测到起始信号；</li><li>DHT11接收到主机的开始信号后,等待主机开始信号结束,然后发送80us低电平响应信号；</li><li>主机发送开始信号结束后,延时等待20-40us后,读取DHT11的响应信号；</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-33/image3.png" alt=""></p><p>主机发送开始信号后,可以切换到输入模式,或者输出高电平均可,总线由上拉电阻拉高。</p><ul><li>总线为低电平,说明DHT11发送响应信号；</li><li>DHT11发送响应信号后,再把总线拉高80us,准备发送数据；</li><li>每一bit数据都以50us低电平时隙开始,高电平的长短定了数据位是0还是1；如果读取响应信号为高电平,则DHT11没有响应,请检查线路是否连接正常；</li><li>当最后一bit数据传送完毕后，DHT11拉低总线50us,随后总线由上拉电阻拉高进入空闲状态；</li></ul><h3 id="_33-1-4-数据位格式" tabindex="-1"><a class="header-anchor" href="#_33-1-4-数据位格式" aria-hidden="true">#</a> 33.1.4 数据位格式</h3><ol><li>数据‘0’</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-33/image4.png" alt=""></p><ol start="2"><li>数据‘1’</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-33/image5.png" alt=""></p><h2 id="_33-2-模块配置" tabindex="-1"><a class="header-anchor" href="#_33-2-模块配置" aria-hidden="true">#</a> 33.2 模块配置</h2><p>和DS18B20非常相似，DHT11也是一个单总线设备。对于时延函数的精度也达到微秒级，因而配置和DS18B20基本一致。DHT11使用的GPIO是P503。</p><h3 id="_33-2-1-gpio配置" tabindex="-1"><a class="header-anchor" href="#_33-2-1-gpio配置" aria-hidden="true">#</a> 33.2.1 GPIO配置</h3><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-33/image6.png" alt=""></p><h3 id="_33-2-2-gpt配置" tabindex="-1"><a class="header-anchor" href="#_33-2-2-gpt配置" aria-hidden="true">#</a> 33.2.2 GPT配置</h3><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-33/image7.png" alt=""></p><h2 id="_33-3-驱动程序" tabindex="-1"><a class="header-anchor" href="#_33-3-驱动程序" aria-hidden="true">#</a> 33.3 驱动程序</h2><h3 id="_33-3-1-io驱动" tabindex="-1"><a class="header-anchor" href="#_33-3-1-io驱动" aria-hidden="true">#</a> 33.3.1 IO驱动</h3><p>和DS18B20的IO驱动一模一样，参考《32.4.1 IO驱动》。</p><h3 id="_33-3-2-定时器驱动" tabindex="-1"><a class="header-anchor" href="#_33-3-2-定时器驱动" aria-hidden="true">#</a> 33.3.2 定时器驱动</h3><p>和DS18B20的GPT驱动一模一样，参考《32.4.2 定时器驱动》。</p><h2 id="_33-4-dht11模块" tabindex="-1"><a class="header-anchor" href="#_33-4-dht11模块" aria-hidden="true">#</a> 33.4 DHT11模块</h2><h3 id="_33-4-1-dht11设备对象" tabindex="-1"><a class="header-anchor" href="#_33-4-1-dht11设备对象" aria-hidden="true">#</a> 33.4.1 DHT11设备对象</h3><p>要操作DHT11，只需要对它进行初始化、然后读取数值。抽象出如下结构体：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">DHT11Dev</span><span class="token punctuation">{</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> tempture<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> humidity<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>Init<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">DHT11Dev</span> <span class="token operator">*</span>ptdev<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>Read<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">DHT11Dev</span> <span class="token operator">*</span>ptdev<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>DHT11Device<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在drv_dht11.c中实现了一个DTH11Dev结构体，代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">struct</span> <span class="token class-name">DHT11Dev</span> gDevice <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>tempture <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span>humidity <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span>Init <span class="token operator">=</span> DHT11DevInit<span class="token punctuation">,</span>
<span class="token punctuation">.</span>Read <span class="token operator">=</span> DHT11DevRead
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后需要向上层应用提供获取DHT11设备的接口：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">struct</span> <span class="token class-name">DHT11Dev</span> <span class="token operator">*</span><span class="token function">DHT11GetDevice</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>gDevice<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_33-4-2-初始化设备" tabindex="-1"><a class="header-anchor" href="#_33-4-2-初始化设备" aria-hidden="true">#</a> 33.4.2 初始化设备</h3><p>初始化DHT11即初始化IO：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">DHT11DevInit</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">DHT11Dev</span> <span class="token operator">*</span>ptdev<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> ptdev<span class="token punctuation">)</span>   <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>
    gDataDevice <span class="token operator">=</span> <span class="token function">IODeviceFind</span><span class="token punctuation">(</span><span class="token string">&quot;DHT11 IO&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> gDataDevice<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to find DHT11 IO!\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">-</span>ENXIO<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ESUCCESS <span class="token operator">!=</span> gDataDevice<span class="token operator">-&gt;</span><span class="token function">Init</span><span class="token punctuation">(</span>gDataDevice<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to init GPIO!\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token operator">-</span>EIO<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> ESUCCESS<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_33-4-3-温湿度数据读取" tabindex="-1"><a class="header-anchor" href="#_33-4-3-温湿度数据读取" aria-hidden="true">#</a> 33.4.3 温湿度数据读取</h3><p>DHT11的数据读取不像DS18B20那样需要发送指令，它完全依靠总线的时延特征来区分信号和数据：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">DHT11DevRead</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">DHT11Dev</span> <span class="token operator">*</span>ptdev<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> ptdev<span class="token punctuation">)</span>   <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> timeout <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">long</span> <span class="token keyword">long</span> tmp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> tempture_data_inter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> tempture_data_dec <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> humidity_data_inter <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> humidity_data_dec <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">char</span> crc_data <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    tmp <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token comment">// 主机拉低最少18ms</span>
    gDataDevice<span class="token operator">-&gt;</span><span class="token function">Write</span><span class="token punctuation">(</span>gDataDevice<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">mdelay</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 拉高等待DHT11响应，20-40us</span>
    gDataDevice<span class="token operator">-&gt;</span><span class="token function">Write</span><span class="token punctuation">(</span>gDataDevice<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">udelay</span><span class="token punctuation">(</span><span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    gDataDevice<span class="token operator">-&gt;</span><span class="token function">Read</span><span class="token punctuation">(</span>gDataDevice<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token punctuation">(</span>gDataDevice<span class="token operator">-&gt;</span>value<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>timeout<span class="token operator">!=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        gDataDevice<span class="token operator">-&gt;</span><span class="token function">Read</span><span class="token punctuation">(</span>gDataDevice<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">udelay</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        timeout<span class="token operator">--</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
……………<span class="token punctuation">.</span><span class="token punctuation">.</span>（省略，读者自行阅读配套代码原文）
    <span class="token comment">// 响应DHT11拉低总线80us后再拉高总线80us</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>crc_data<span class="token operator">==</span><span class="token punctuation">(</span>tempture_data_inter <span class="token operator">+</span> humidity_data_inter <span class="token operator">+</span> tempture_data_dec <span class="token operator">+</span> humidity_data_dec<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ptdev<span class="token operator">-&gt;</span>tempture <span class="token operator">=</span> tempture_data_inter<span class="token punctuation">;</span>
        ptdev<span class="token operator">-&gt;</span>humidity <span class="token operator">=</span> humidity_data_inter<span class="token punctuation">;</span>
        <span class="token keyword">return</span> ESUCCESS<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span>EIO<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_33-5-测试程序" tabindex="-1"><a class="header-anchor" href="#_33-5-测试程序" aria-hidden="true">#</a> 33.5 测试程序</h2><p>获取到DHT11设备且初始化后，即可开始读取数据。本次实验每隔1s读取一次，并将结果打印出来：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">DeviceTest</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">UartDevicesRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">TimerDevicesRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">IODevicesRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    DHT11Device <span class="token operator">*</span>pDevice <span class="token operator">=</span> <span class="token function">DHT11GetDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> pDevice<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;Error. There is no DHT11 device!\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    pDevice<span class="token operator">-&gt;</span><span class="token function">Init</span><span class="token punctuation">(</span>pDevice<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>pDevice<span class="token operator">-&gt;</span><span class="token function">Read</span><span class="token punctuation">(</span>pDevice<span class="token punctuation">)</span> <span class="token operator">==</span> ESUCCESS<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;环境温度：%d℃ \\t 环境湿度：%d℃ \\r&quot;</span><span class="token punctuation">,</span> pDevice<span class="token operator">-&gt;</span>tempture<span class="token punctuation">,</span> pDevice<span class="token operator">-&gt;</span>humidity<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token function">delay</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_33-6-测试结果" tabindex="-1"><a class="header-anchor" href="#_33-6-测试结果" aria-hidden="true">#</a> 33.6 测试结果</h2><p>将程序烧录到开发板运行，可以观察到如下结果：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-33/image8.png" alt=""></p>`,52),o=[p];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","chapter33.html.vue"]]);export{r as default};