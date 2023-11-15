import{_ as n,o as s,c as a,e as p}from"./app-a98b8345.js";const t={},e=p(`<h1 id="第36章-步进电机控制实验" tabindex="-1"><a class="header-anchor" href="#第36章-步进电机控制实验" aria-hidden="true">#</a> 第36章 步进电机控制实验</h1><h2 id="_36-1-24byj-48步进电机工作原理" tabindex="-1"><a class="header-anchor" href="#_36-1-24byj-48步进电机工作原理" aria-hidden="true">#</a> 36.1 24BYJ-48步进电机工作原理</h2><p>本书使用的步进电机型号是28BYJ-48，它是一款常见的步机电机，其名称的含义为外径28毫米四相八拍式永磁减速型步进电机。型号的含义如下：</p><ul><li>28：步进电机的有效最大外径是28毫米</li><li>B：表示是步进电机</li><li>Y：表示是永磁式</li><li>J：表示是减速型（减速比1:64）</li><li>48：表示四相八拍</li></ul><p>先说什么是“4相永磁式”的概念，28BYJ-48 的内部结构示意图如下所示。</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-36/image1.png" alt=""></p><p>先看里圈，它上面有8个齿，分别标注为0～7，这个叫做转子，顾名思义，它是要转动的。转子的每个齿上都带有永久的磁性，是一块永磁体，这就是“永磁式”的概念。</p><p>再看外圈，这个是定子，它是保持不动的，实际上它是跟电机的外壳固定在一起的。定子有ABCD四组共32个齿，每个齿上都缠上了一个线圈绕组。A组有8个线圈绕组，它们是串联在一起的，这8个线圈绕组会同时导通或关断。B、C、D组也是一样的，如此就形成了4相，在图中分别标注为 A-B-C-D，这就是“4相”的概念。相邻定子之间的夹角为360/32=11.25度。</p><p>步进电机一共有5根线引出，红色是公共端，接5v电源，其他四根分别对应A,B,C ,D 四个绕组的另外一端。怎样让电机转动起来呢？</p><p>假设初始状态时A导通，A组的8个线圈绕组都有磁力，吸引住8个转子，8个转子和8个A组定子对齐，如上图所示。</p><p>然后让A断开，B导通，此时B组的8个线圈绕组会把距离它最近的8个转子吸引过来，使得转子和B组的定子对齐。以0号转子为例，它从正对着A定子的位置，顺时针旋转到正对着B定子的位置，顺时针旋转了11.25度。</p><p>紧接着，让B断开，C导通，此时C组的8个线圈绕组会把距离它最近的8个转子吸引过来，使得转子和C组的定子对齐。以0号转子为例，它从正对着B定子的位置，顺时针旋转到正对着C定子的位置，再次顺时针旋转了11.25度。当我们依次单独导通ABCD时，电动机就顺时针转到起来了。</p><p>单独导通ABCD的某一组线圈绕组时，转子旋转11.25度，这个值就叫做步进角度。</p><p>而上述这种工作模式就是步进电机的单四拍模式。同样的道理，如果想让转子逆时针转动，可以依次单独导通DCBA。</p><p>我们再来介绍一种具有更优性能的工作模式，那就是在单四拍的每两个节拍之间再插入一个双绕组导通的中间节拍，组成八拍模式。</p><p>比如，在顺时针转动过程中，从 A 相导通到 B 相导通的中间，加入一个 A 相和 B 相同时导通的节拍，这个时候，由于 A、B 两个绕组的定子齿对它们附近的转子齿同时产生相同的吸引力，这将0号转子处于 A、B 两个定子中间，也就是新插入的这个节拍使转子转过了上述单四拍模式中步进角度的一半，即5.625度。这样一来，就使转动精度增加了一倍，而转子转动一圈则需要8*8=64拍了。另外，新增加的这个中间节拍，还会在原来单四拍的两个节拍引力之间又加了一把引力，从而可以大大增加电机的整体扭力输出，使电机更“有劲”了，而且更平顺。</p><p>下表给出八拍模式下电机绕组激励时序（电机引线颜色可能因厂家不同而不同）：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-36/image2.png" alt=""></p><p>本文将以八拍模式展开编程演示，当按照下表的数值，连续给电机提供激励时，电机就逆时针转起来。</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-36/image3.png" alt=""></p><p>28BYJ-48为减速电机，电机输出的转速并不等于转子的转速。下图是这个28BYJ-48步进电机的拆解图，从图中可以看到，位于最中心的那个白色小齿轮才是步进电机的转子输出，64个节拍只是让这个小齿轮转了一圈，然后它带动那个浅蓝色的大齿轮，这就是一级减速。</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-36/image4.png" alt=""></p><p>右上方的白色齿轮的结构，除电机转子和最终输出轴外的3个传动齿轮都是这样的结构，由一层多齿和一层少齿构成，而每一个齿轮都用自己的少齿层去驱动下一个齿轮的多齿层，这样每2个齿轮都构成一级减速，一共就有了4级减速。</p><h2 id="_36-2-电机驱动板工作原理" tabindex="-1"><a class="header-anchor" href="#_36-2-电机驱动板工作原理" aria-hidden="true">#</a> 36.2 电机驱动板工作原理</h2><p>根据28BYJ-48电机原理，我们只需要将开发板的四个引脚（通常为GPIO）分别连接到电机，再按照电机的驱动逻辑给出一定的激励信号。但是开发板的GPIO驱动能力有限，需要在开发板和电机之间加入驱动电路，本教程选择了双路有刷直流马达驱动芯片MX1508，驱动电路原理图见下图：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-36/image5.png" alt=""></p><p>开发板的GPIO0~GPIO3引脚直接连接MX1508的INA1、INB1、INA2、INB2。MX1508的输出端OUTA1、OUTB1、OUTA2、OUTB2分别接到步进电机28BYJ-48的A、B、C、D四个线圈。所以，可以通过开发板的4个GPIO引脚，间接控制电机的ABCD。并不是使用4个GPIO简单地控制ABCD，它们不是一一对应的关系。</p><p>需要先了解MX1508芯片内部电路和基本工作模式：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-36/image6.png" alt=""></p><ol><li>待机模式</li></ol><p>在待机模式下，INAx=INBx=L。包括驱动功率管在内的所有内部电路都处于关断状态。电路消耗极低极低的电流。此时马达输出端 OUTAx 和 OUTBx 都为高阻状态（记为Z）。</p><ol start="2"><li>正转模式</li></ol><p>正转模式的定义为：INAx=H，INBx=L，此时马达驱动端 OUTAx 输出高电平，马达驱动端 OUTBx 输出低电平时，马达驱动电流从 OUTAx 流入马达，从 OUTBx 流到地端，此时马达的转动定义为正转模式。</p><ol start="3"><li>反转模式</li></ol><p>反转模式的定义为：INAx=L，INBx=H，此时马达驱动端 OUTBx 输出高电平，马达驱动端 OUTAx 输出低电平时，马达驱动电流从 OUTBx 流入马达，从 OUTAx 流到地端，此时马达的转动定义为反转模式。</p><ol start="4"><li>刹车模式</li></ol><p>刹车模式的定义为：INAx=H，INBx=H，此时马达驱动端 OUTAx 以及 OUTBx 都输出低电平，马达内存储的能量将通过 OUTAx 端 NMOS 管或者 OUTBx 端 NMOS 快速释放，马达在短时间内就会停止转动。注意在刹车模式下电路将消耗静态功耗。</p><ol start="5"><li>PWM 模式A</li></ol><p>当输入信号 INAx 为 PWM 信号，INBx=0 或者 INAx=0，INBx 为 PWM 信号时，马达的转动速度将受到 PWM信号占空比的控制。在这个模式下，马达驱动电路是在导通和待机模式之间切换，在待机模式下，所有功率管都处于关断状态，马达内部储存的能量只能通过功率 MOSFET 的体二极管缓慢释放。</p><p>当输入信号 INAx 为 PWM 信号，INBx=1 或者 INAx=1，INBx 为 PWM 信号时，马达的转动速度将受到 PWM信号占空比的控制。在这个模式下，马达驱动电路输出在导通和刹车模式之间，在刹车模式下马达存储的能量通过低边的 NMOS 管快速释放。</p><p>综上所述，MX1508的真值表如下：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-36/image7.png" alt=""></p><p>上述真表中，OUTAx/OUTBx输出Z（高阻态）、H（高电平）时，连接到的电机线圈绕组都不会导通，效果是一样的。</p><p>为了让ABCD输出8个节拍，可以按照下图控制GPIO0~GPIO3：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-36/image8.png" alt=""></p><p>以第1个节拍为例，想让D输出0，ABC输出高电平或是高阻态，怎么办？换句话说，想让OUTB2=L，OUTA2、OUTA1、OUTB1等于H或Z，怎么办？</p><p>根据真值表，设置INA2=H、INB2=L，可以让OUTA2=H、OUTB2=L：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-36/image9.png" alt=""></p><p>继续根据真值表，设置INA1=L、INB1=L，可以让OUTA1=Z、OUTB1=Z：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-36/image10.png" alt=""></p><p>所以，要让D输出0，ABC输出高电平或是高阻态时，需要：INA1=L、INB1=L、INA2=H、INB2=L。即：GPIO0=0、GPIO1＝0、GPIO2=1、GPIO3=0，用二进制表示即为：0b0100，即0x04。</p><p>将8个节拍对应的GPIO值存到数组中：</p><p>S_CW[8]= {0x04,0x0c,0x08,0x09,0x01,0x03,0x02,0x06};</p><p>把4个GPIO配置为输出后，将数组的值循环写到GPIO输出寄存器，就可以让电机转动起来。按照反向的顺序循环写GPIO输出寄存器，就可以实现电机反转。调节两个节拍间的周期，可以改变电机转速。</p><p>根据电机的参数：空载牵入频率≥600Hz 可知，两个节拍之间的时间间隔不宜小于1.6ms。</p><h2 id="_36-3-模块配置" tabindex="-1"><a class="header-anchor" href="#_36-3-模块配置" aria-hidden="true">#</a> 36.3 模块配置</h2><p>本次实验实质上驱动的外设只有一个，那就是GPIO。但是为了更好的驱动电机，本次实验还使用了UART：让用户输入角度、速度，并使用定时器来实现精准延时。</p><p>本实验使用的步进电机模块会接到扩展板的GPIO组，会使用到4个GPIO来接电机驱动板的INA/B/C/D，扩展板GPIO组原理图如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-36/image11.png" alt=""><br> 本实验使用的是GPIO0~3，所以需要在RASC中将这4个IO对应的引脚配置为通用输出模式，请读者参考本书前文对于GPIO的配置来配置这4个引脚。</p><h2 id="_36-4-外设驱动程序" tabindex="-1"><a class="header-anchor" href="#_36-4-外设驱动程序" aria-hidden="true">#</a> 36.4 外设驱动程序</h2><p>本次实验使用到的IO设备、串口设备和定时器设备在《30.3 设备对象封装》中已经将结果，使用到的方法基本一致，请读者参考前文了解设备对象封装的概念和方法，以及下载本书配套资料调阅源码学习。</p><h2 id="_36-5-电机驱动程序" tabindex="-1"><a class="header-anchor" href="#_36-5-电机驱动程序" aria-hidden="true">#</a> 36.5 电机驱动程序</h2><h3 id="_36-5-1-电机设备对象" tabindex="-1"><a class="header-anchor" href="#_36-5-1-电机设备对象" aria-hidden="true">#</a> 36.5.1 电机设备对象</h3><p>对于电机，用户需要的操作是：启停、设定转动角度（角度、速度）。根据这些需求，封装出电机的结构体（dev_motor.h）：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">typedef</span> <span class="token keyword">struct</span> <span class="token class-name">StepMotor</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>name<span class="token punctuation">;</span>
    MotorStatus status<span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>Init<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">StepMotor</span> <span class="token operator">*</span>ptdev<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>Start<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">StepMotor</span> <span class="token operator">*</span>ptdev<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>Stop<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">StepMotor</span> <span class="token operator">*</span>ptdev<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> <span class="token punctuation">(</span><span class="token operator">*</span>SetAngle<span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">StepMotor</span> <span class="token operator">*</span>ptdev<span class="token punctuation">,</span> <span class="token keyword">int</span> speed<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>StepMotorDevice<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后在dev_motor.c里构造一个StepMotor结构体，并给上层代码提高获得这个结构体的函数，代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">struct</span> <span class="token class-name">StepMotor</span> gMotor <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token punctuation">.</span>name   <span class="token operator">=</span> <span class="token string">&quot;Step Motor&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token punctuation">.</span>Init   <span class="token operator">=</span> StepMotorDevInit<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>Start  <span class="token operator">=</span> StepMotorDevStart<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>Stop   <span class="token operator">=</span> StepMotorDevStop<span class="token punctuation">,</span>
    <span class="token punctuation">.</span>SetAngle <span class="token operator">=</span> StepMotorDevSetAngle
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">struct</span> <span class="token class-name">StepMotor</span> <span class="token operator">*</span><span class="token function">MotorGetDevice</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token operator">&amp;</span>gMotor<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_36-5-2-初始化函数" tabindex="-1"><a class="header-anchor" href="#_36-5-2-初始化函数" aria-hidden="true">#</a> 36.5.2 初始化函数</h3><p>初始化函数中要实现的就是获取4个IO设备对象，代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">StepMotorDevInit</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">StepMotor</span> <span class="token operator">*</span>ptdev<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> ptdev<span class="token punctuation">)</span>   <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>

    gINAIO <span class="token operator">=</span> <span class="token function">IODeviceFind</span><span class="token punctuation">(</span><span class="token string">&quot;Step Motor INA&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> gINAIO<span class="token punctuation">)</span>  <span class="token keyword">return</span> <span class="token operator">-</span>ENODEV<span class="token punctuation">;</span>
    gINBIO <span class="token operator">=</span> <span class="token function">IODeviceFind</span><span class="token punctuation">(</span><span class="token string">&quot;Step Motor INB&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> gINBIO<span class="token punctuation">)</span>  <span class="token keyword">return</span> <span class="token operator">-</span>ENODEV<span class="token punctuation">;</span>
    gINCIO <span class="token operator">=</span> <span class="token function">IODeviceFind</span><span class="token punctuation">(</span><span class="token string">&quot;Step Motor INC&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> gINCIO<span class="token punctuation">)</span>  <span class="token keyword">return</span> <span class="token operator">-</span>ENODEV<span class="token punctuation">;</span>
    gINDIO <span class="token operator">=</span> <span class="token function">IODeviceFind</span><span class="token punctuation">(</span><span class="token string">&quot;Step Motor IND&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> gINDIO<span class="token punctuation">)</span>  <span class="token keyword">return</span> <span class="token operator">-</span>ENODEV<span class="token punctuation">;</span>

    <span class="token keyword">return</span> ESUCCESS<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_36-5-3-开启转动" tabindex="-1"><a class="header-anchor" href="#_36-5-3-开启转动" aria-hidden="true">#</a> 36.5.3 开启转动</h3><p>本书并没有在Start函数中让步进电机转动，仅仅是修改状态表示电机处于开启状态，代码如下;</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">StepMotorDevStart</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">StepMotor</span> <span class="token operator">*</span>ptdev<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> ptdev<span class="token punctuation">)</span>   <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ptdev<span class="token operator">-&gt;</span>status <span class="token operator">==</span> isStop<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ptdev<span class="token operator">-&gt;</span>status <span class="token operator">=</span> isRunning<span class="token punctuation">;</span>
        <span class="token keyword">return</span> ESUCCESS<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span>EIO<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_36-5-4-停止转动" tabindex="-1"><a class="header-anchor" href="#_36-5-4-停止转动" aria-hidden="true">#</a> 36.5.4 停止转动</h3><p>将电机状态标志赋值为0，并且让步进电机的4个IO都输出低电平。代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">StepMotorDevStop</span> <span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">StepMotor</span> <span class="token operator">*</span>ptdev<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> ptdev<span class="token punctuation">)</span>   <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>ptdev<span class="token operator">-&gt;</span>status <span class="token operator">==</span> isRunning<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ptdev<span class="token operator">-&gt;</span>status <span class="token operator">=</span> isStop<span class="token punctuation">;</span>
        
        gINAIO<span class="token operator">-&gt;</span><span class="token function">Write</span><span class="token punctuation">(</span>gINAIO<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gINBIO<span class="token operator">-&gt;</span><span class="token function">Write</span><span class="token punctuation">(</span>gINBIO<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gINCIO<span class="token operator">-&gt;</span><span class="token function">Write</span><span class="token punctuation">(</span>gINCIO<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gINDIO<span class="token operator">-&gt;</span><span class="token function">Write</span><span class="token punctuation">(</span>gINDIO<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> ESUCCESS<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span>EIO<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_36-5-5-设定转速和转动角度" tabindex="-1"><a class="header-anchor" href="#_36-5-5-设定转速和转动角度" aria-hidden="true">#</a> 36.5.5 设定转速和转动角度</h3><p>通过前面的讲解可以知道，24BYJ-48步进电机内部收到64个节拍会转动1圈，转子通过减速齿轮驱动输出轴转动1/64圈。那么要想输出轴转动1圈，就需要给步进电机4096个节拍（64*64=4096）。如果想要转动指定角度angle，那么对应的拍数计算公式就是：</p><p>step=angle*4096/360</p><p>另外还可以顺序、逆序使用S_CW[8]数组的值来驱动电机以实现反转、正转。而电机转速则表现在每拍之间的间隔时间，间隔越长，转速越慢。</p><p>根据这些原理，就可以将设置步进电机转角和转速的功能封装到一个函数中了：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token keyword">const</span> <span class="token class-name">uint8_t</span> EightBeat<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0x04</span><span class="token punctuation">,</span><span class="token number">0x0c</span><span class="token punctuation">,</span><span class="token number">0x08</span><span class="token punctuation">,</span><span class="token number">0x09</span><span class="token punctuation">,</span><span class="token number">0x01</span><span class="token punctuation">,</span><span class="token number">0x03</span><span class="token punctuation">,</span><span class="token number">0x02</span><span class="token punctuation">,</span><span class="token number">0x06</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token function">StepMotorDevSetAngle</span><span class="token punctuation">(</span><span class="token keyword">struct</span> <span class="token class-name">StepMotor</span> <span class="token operator">*</span>ptdev<span class="token punctuation">,</span> <span class="token keyword">int</span> speed<span class="token punctuation">,</span> <span class="token keyword">int</span> value<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> ptdev<span class="token punctuation">)</span>   <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&gt;</span> speed<span class="token punctuation">)</span>       <span class="token keyword">return</span> <span class="token operator">-</span>EINVAL<span class="token punctuation">;</span>
    
    <span class="token keyword">int</span> nAbsValue <span class="token operator">=</span> <span class="token punctuation">(</span>value<span class="token operator">&gt;=</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">?</span>value<span class="token operator">:</span><span class="token operator">-</span>value<span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> step <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">int</span><span class="token punctuation">)</span><span class="token punctuation">(</span>nAbsValue<span class="token operator">*</span><span class="token number">4096</span><span class="token operator">/</span><span class="token number">360</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">unsigned</span> <span class="token keyword">int</span> phase <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>isStop <span class="token operator">==</span> ptdev<span class="token operator">-&gt;</span>status<span class="token punctuation">)</span>
        ptdev<span class="token operator">-&gt;</span><span class="token function">Start</span><span class="token punctuation">(</span>ptdev<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">unsigned</span> <span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>step<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>value<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span>
            phase <span class="token operator">=</span> <span class="token punctuation">(</span>i<span class="token operator">&amp;</span><span class="token number">0x07</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">else</span>
            phase <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">7</span><span class="token operator">-</span><span class="token punctuation">(</span>i<span class="token operator">&amp;</span><span class="token number">0x07</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        gINAIO<span class="token operator">-&gt;</span><span class="token function">Write</span><span class="token punctuation">(</span>gINAIO<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>EightBeat<span class="token punctuation">[</span>phase<span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token number">0x08</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token number">0</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gINBIO<span class="token operator">-&gt;</span><span class="token function">Write</span><span class="token punctuation">(</span>gINBIO<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>EightBeat<span class="token punctuation">[</span>phase<span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token number">0x04</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token number">0</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gINCIO<span class="token operator">-&gt;</span><span class="token function">Write</span><span class="token punctuation">(</span>gINCIO<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>EightBeat<span class="token punctuation">[</span>phase<span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token number">0x02</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token number">0</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gINDIO<span class="token operator">-&gt;</span><span class="token function">Write</span><span class="token punctuation">(</span>gINDIO<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>EightBeat<span class="token punctuation">[</span>phase<span class="token punctuation">]</span><span class="token operator">&amp;</span><span class="token number">0x01</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token operator">?</span><span class="token number">0</span><span class="token operator">:</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">mdelay</span><span class="token punctuation">(</span>speed<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    ptdev<span class="token operator">-&gt;</span><span class="token function">Stop</span><span class="token punctuation">(</span>ptdev<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> ESUCCESS<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_36-6-测试程序" tabindex="-1"><a class="header-anchor" href="#_36-6-测试程序" aria-hidden="true">#</a> 36.6 测试程序</h2><p>本次实验的方法是：让用户通过串口输入角度、速度，然后控制步进电机转动。代码如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">DeviceTest</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">UartDevicesRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">TimerDevicesRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">IODevicesRegister</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    StepMotorDevice <span class="token operator">*</span>pMotor <span class="token operator">=</span> <span class="token function">MotorGetDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token constant">NULL</span> <span class="token operator">==</span> pMotor<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">xprintf</span><span class="token punctuation">(</span><span class="token string">&quot;Failed to Find Motor Device!\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    pMotor<span class="token operator">-&gt;</span><span class="token function">Init</span><span class="token punctuation">(</span>pMotor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    pMotor<span class="token operator">-&gt;</span><span class="token function">Start</span><span class="token punctuation">(</span>pMotor<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">xprintf</span><span class="token punctuation">(</span><span class="token string">&quot;Enter value(+- 0~360 degree) and speed(Greater than 1ms) parameters you want: \\r\\n\\t&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> value <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> speed <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>value<span class="token punctuation">,</span> <span class="token operator">&amp;</span>speed<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">xprintf</span><span class="token punctuation">(</span><span class="token string">&quot;\\tValue:%d\\tSpeed:%d\\r\\n&quot;</span><span class="token punctuation">,</span> value<span class="token punctuation">,</span> speed<span class="token punctuation">)</span><span class="token punctuation">;</span>
        pMotor<span class="token operator">-&gt;</span><span class="token function">SetAngle</span><span class="token punctuation">(</span>pMotor<span class="token punctuation">,</span> speed<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_36-7-测试结果" tabindex="-1"><a class="header-anchor" href="#_36-7-测试结果" aria-hidden="true">#</a> 36.7 测试结果</h2><p>将程序烧写到开发板中运行，打开串口助手，插上步进电机后，通过串口助手输入转角和转速：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/object_oriented_module_programming_method_in_ARM_embedded_system/chapter-36/image12.png" alt=""></p><p>步进电机就会逆时针或者顺时针转动指定的角度</p>`,89),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","chapter36.html.vue"]]);export{r as default};
