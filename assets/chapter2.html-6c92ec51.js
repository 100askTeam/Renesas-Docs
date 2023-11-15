import{_ as l,r as t,o as r,c as u,a as s,b as n,d as a,w as p,e as c}from"./app-a98b8345.js";const d={},v=s("h1",{id:"_2-创建第一个工程适配串口打印功能",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-创建第一个工程适配串口打印功能","aria-hidden":"true"},"#"),n(" 2. 创建第一个工程适配串口打印功能")],-1),k={href:"https://www.renesas.cn/cn/zh/software-tool/e-studio",target:"_blank",rel:"noopener noreferrer"},_={href:"https://www.renesas.cn/cn/zh/software-tool/flexible-software-package-fsp",target:"_blank",rel:"noopener noreferrer"},m=c('<p>这次实验我们的目标是完成串口打印，并能能通过使用 <strong>printf</strong> 函数打印信息。</p><blockquote><p>注意：我们的内容比较多，课堂时间非常有限，因此在这第一个实验中，我们会尽可能将一些软件上的用法、一些需要注意的细节等等会尽可能得进行详细地讲解，在后面不会再进行详细地说明讲解，比如后续不会讲解工程如何创建、如何查看代码、如何翻阅帮助文档等等。</p></blockquote><h2 id="_2-1创建步骤" tabindex="-1"><a class="header-anchor" href="#_2-1创建步骤" aria-hidden="true">#</a> 2.1创建步骤</h2><h3 id="_2-1-1-创建项目" tabindex="-1"><a class="header-anchor" href="#_2-1-1-创建项目" aria-hidden="true">#</a> 2.1.1 创建项目</h3><ol><li>打开 e2 studio，并打开 workspace 执行如下步骤：</li><li>在菜单中选择 <code>“New&quot;</code>。</li><li>选择 <code>&quot;Renesas C/C++ project&quot;</code>。</li><li>下拉菜单中选择 <code>&quot;Renesas RA&quot;</code>。</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_001.png" alt="chapter-2_001" style="zoom:80%;"><ol start="5"><li>在弹出的新窗口按照如下操作：</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_002.png" alt="chapter-2_002"></p><ol start="6"><li>在弹出的新窗口中的 <code>&quot;Project name&quot;</code> 处输入项目名称： <strong>00_dshanmcu_ra6m5_uart_printf</strong>，您也可以自定义名称。（注意不可以有中文、特殊字符！）</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_003.png" alt="chapter-2_003" style="zoom:67%;"><ol start="7"><li>在弹出的新窗口中，需要进行一些配置，操作如下图所示：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_004.png" alt="chapter-2_004" style="zoom:67%;"><ol start="8"><li>下面两个窗口按照默认配置，点击 <code>&quot;Next&quot;</code> 按钮即可：</li></ol><p>工程类型：<code> Flat (Non-TrustZone) Project</code></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_005.png" alt="chapter-2_005" style="zoom:67%;"><p>不使用RTOS：<code>No RTOS</code></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_006.png" alt="chapter-2_006" style="zoom:67%;"><blockquote><p>如果后续要使用 RTOS 需要重新创建工程，这在实际使用中需要注意。</p></blockquote><ol start="9"><li>最后一个窗口，也不需要进行配置，按照下图所示点击 <code>&quot;Finish&quot;</code> 按钮即可：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_007.png" alt="chapter-2_007" style="zoom:67%;"><ol start="10"><li>点击 <code>&quot;Finish&quot;</code> 按钮之后稍等软件进行处理，完成之后会提示这个是否打开 <code>&quot;FSP Configuration perspective&quot;</code> 点击 <code>&quot;Open Perspective&quot;</code> 按钮即可：</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_008.png" alt="chapter-2_008"></p><ol start="11"><li>最后，我们的 workspce 会呈现这样的界面，下图对默认的 workspace 布局进行简单的说明：</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_009.png" alt="chapter-2_009"></p><blockquote><p>注意：这是使用默认的布局的说明，当你对e2stduio比较熟悉之后可以根据自己的习惯自定义 workspace 布局。如果需要恢复默认的布局，请按照上图的说明进行操作。</p></blockquote><h3 id="_2-1-2-调试器配置" tabindex="-1"><a class="header-anchor" href="#_2-1-2-调试器配置" aria-hidden="true">#</a> 2.1.2 调试器配置</h3>',26),h={href:"https://www.renesas.cn/cn/zh/software-tool/ez-cube3",target:"_blank",rel:"noopener noreferrer"},b=c(`<blockquote><p>调试器使用注意点：</p><ol><li>调试器连接到电脑不要通过usb hub(供电不稳定)。</li><li>调试器并没有对板子供电，因此板子要额外单独供电。</li><li>调试器转接线接到板子上要确保，板子上两排排针都已经接上，没有裸露出来的排针(参考第一章第2步接线图)。</li><li>将e2studio中原有的debug配置删除之后，再新建自己的debug配置。</li><li>如果出现调试器无法工作的情况，将调试器接到电脑的usb线重新插拔，并且删除、新建debug配置之后再重新尝试。</li></ol></blockquote><p>在上面成功创建工程之后，先验证调试器是否可以正常使用，这个过程每个工程只需要配置一次即可，后面我们就是通过这个方式，将代码烧写到开发板中并且进行调试。</p><ol><li>按照下图所示，打开配置页面：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_009-1.png" alt="chapter-2_009-1" style="zoom:67%;"><ol start="2"><li>进入配置页面后，先创建新的配置文件，如下图所示：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_009-2.png" alt="chapter-2_009-2" style="zoom:50%;"><ol start="3"><li>继续按下图所示进行操作：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_009-3.png" alt="chapter-2_009-3"><ol start="4"><li>如下图所示切换到 Debugger 页面继续进行操作，Target Device粘贴 <strong>R7FA6M5BF</strong>，注意检查 <strong>Connection Settings</strong>下的 <strong>TrustZone</strong> 是否为 <code>No</code>：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_009-4-2.png" alt="chapter-2_009-4-2" style="zoom:67%;"><ol start="5"><li><p>在上图点击 <strong>debug</strong> 按钮之后会自动下载代码进入调试模式，如果失败，请返回到第一步逐步进行检查，并且检查硬件接线是否正确。</p></li><li><p>如果修改代码之后，需要再次进入进行debug操作，按照下图所示操作：</p></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_009-6.png" alt="chapter-2_009-6" style="zoom:80%;"><blockquote><p>一般来说直接点击上图的debug按钮即可，如果点击debug按钮无法进行调试(报错)，请按照上图所示继续操作。</p></blockquote><h3 id="_2-1-3-添加-stacks-r-sci-uart" tabindex="-1"><a class="header-anchor" href="#_2-1-3-添加-stacks-r-sci-uart" aria-hidden="true">#</a> 2.1.3 添加 Stacks(r_sci_uart)</h3><ol><li>打开 FSP Configuration 视图：双击项目文件夹中的 <code>configuration.xml</code> 文件。</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_010.png" alt="chapter-2_010" style="zoom:80%;"><ol start="2"><li>按照下图所示，添加 <code>r_sci_uart</code> 模块：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_011.png" alt="chapter-2_011" style="zoom:80%;"><ol start="3"><li>点击刚刚添加的<code>r_sci_uart</code> 模块会看到底部窗口的 <code>Properties</code> 选项卡出现内容了，我们将会在这里对我们的uart进行配置：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_012.png" alt="chapter-2_012" style="zoom:67%;"><h3 id="_2-1-4-配置-stacks-r-sci-uart" tabindex="-1"><a class="header-anchor" href="#_2-1-4-配置-stacks-r-sci-uart" aria-hidden="true">#</a> 2.1.4 配置 Stacks(r_sci_uart)</h3><p>首先进行引脚的配置，先打开原理图确认使用哪一个UART。打开位于<code>03硬件资料\\1_开发板原理图\\ DshanMCU_RA6M5_V4.0.pdf</code> 的开发板原理图，电路图如下，引脚号是 <strong>P613 (TX)</strong> 和 <strong>P614 (RX)</strong> ，它使用 <strong>TXD7/RXD7</strong> ，记住这个编号 <strong>7</strong>，接下来我们根据这个信息对 r_sci_uart 进行配置。</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_013.png" alt="chapter-2_013"><p>在 <code>&quot;General&quot;</code> 下，修改名称和通道：</p><ul><li>Name： g_uart7</li><li>Channel： 7</li></ul><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_014.png" alt="chapter-2_014" style="zoom:80%;"><p>在 <code>&quot;Baud</code>&quot; 下，配置通信波特率为 115200：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_015.png" alt="chapter-2_015" style="zoom:80%;"><p>在 <code>&quot;Flow Control&quot;</code> 下，不要修改默认配置，如果修改了需要按下图修改回去：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_016.png" alt="chapter-2_016" style="zoom:80%;"><p>在 <code>&quot;Interrupts</code>&quot; 下，设置 Callback 为 <code>&quot;uart7_callback&quot;</code>（这个函数需要我们实现)，其他使用默认配置：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_017.png" alt="chapter-2_017" style="zoom:80%;"><p>在 <code>&quot;Pins</code>&quot; 下，确认 TXD7 、 TXD6 分别为 P613 、 P614 ，点击下图所示的按钮进行配置：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_018.png" alt="chapter-2_018" style="zoom:80%;"><p>之后在下图所示的区域进行配置：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_019.png" alt="chapter-2_019" style="zoom:67%;"><p>最后检查确认无误，点击右上角的 <code>“Generate Project Content”</code> e2studio就会根据我们对FSP的配置自动配置项目、生成相应的代码。</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_020.png" alt="chapter-2_020" style="zoom:80%;"><h2 id="_2-2-配置信息解读" tabindex="-1"><a class="header-anchor" href="#_2-2-配置信息解读" aria-hidden="true">#</a> 2.2 配置信息解读</h2><h3 id="_2-2-1-引脚配置信息" tabindex="-1"><a class="header-anchor" href="#_2-2-1-引脚配置信息" aria-hidden="true">#</a> 2.2.1 引脚配置信息</h3><p>该信息会在 <code>ra_gen\\pin_data.c</code> 文件中生成。</p><p>在RASC里配置的每一个引脚，都会生成一个 <strong>ioport_pin_cfg_t</strong> 数组项，里面的内容跟配置时选择的参数一致。代码如下：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_021.png" alt="chapter-2_021" style="zoom:80%;"><h3 id="_2-2-2-uart配置信息" tabindex="-1"><a class="header-anchor" href="#_2-2-2-uart配置信息" aria-hidden="true">#</a> 2.2.2 UART配置信息</h3><p>该信息会在 <code>ra_gen\\hal_data.c</code> 文件中生成。</p><p>指定的UART使用哪个SCI通道、指定了它的,数据格式（数据位/校验位/停止位）、指定了波特率等信息，这些配置信息都被放入一个 <strong>uart_cfg_t</strong> 结构体：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_022.png" alt="chapter-2_022" style="zoom:67%;"><p>结构体 <strong>g_uart7_cfg</strong> 里引用到了另一个结构体 <strong>g_uart7_cfg_extend</strong> ，里面含有时钟、FIFO、流量控制等信息；其中引用了 <strong>g_uart7_baud_setting</strong> 结构体，代码如下：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_023.png" alt="chapter-2_023" style="zoom:67%;"><h3 id="_2-2-3-api接口" tabindex="-1"><a class="header-anchor" href="#_2-2-3-api接口" aria-hidden="true">#</a> 2.2.3 API接口</h3><p>在 <code>\\ra\\fsp\\inc\\api\\r_uart_api.h</code> 中定义了uart模块的接口，它定义了一个结构体类型 <strong>uart_api_t</strong> ，内容如下：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_024.png" alt="chapter-2_024" style="zoom:80%;"><p>在具体的C文件中，实现了一个 <strong>uart_api_t</strong> 结构体，比如在 <code>r_sci_uart.c</code> 里实现了如下结构体：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_025.png" alt="chapter-2_025"></p><p>要使用UART收发数据时，可以调用结构体 <strong>g_uart_on_sci</strong> 里的各个函数指针，也可以直接调用<code>r_sci_uart.c</code> 里实现的各个函数（比如R_SCI_UART_Open、R_SCI_UART_Read）。</p><h3 id="_2-2-4-中断回调函数" tabindex="-1"><a class="header-anchor" href="#_2-2-4-中断回调函数" aria-hidden="true">#</a> 2.2.4 中断回调函数</h3><p>操作一个UART引脚时，要先打开它（open），open 函数会配置UART；然后再调用 read、write 函数读、写串口。需要注意的是，sci_uart 模块里的读、写函数，只是 “启动” 读、写功能，这些函数返0回时并不表示读、写已经完成。后续的读、写操作是由中断函数实现的。在传输过程中，中断函数会调用回调函数来处理各种状态（传输完成？出错？）。 回调函数原型在 <code>\\ra_gen\\hal_data.h</code> 中定义，如下：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_026.png" alt="chapter-2_026"></p><p>它的 p_args 参数是 <strong>uart_callback_args_t</strong> 结构体类型，如下：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_027.png" alt="chapter-2_027"></p><ul><li>对于接收，有2个event：UART_EVENT_RX_COMPLETE、UART_EVENT_RX_CHAR。前者被调用的时机是：调用read后接收到所有数据时；后者被调用的时机是：未调用read函数，但是接收到了数据。</li><li>对于发送，有2个event：UART_EVENT_TX_DATA_EMPTY、UART_EVENT_TX_COMPLETE。以发送2个字节的数据为例，前者被调用的时机是：第1个字节已经成功发送完毕，第2个字节已经被移入发送器但是还没发送完毕；后者被调用的时机是：这2个字节都发送完毕。前者先被调用，在“最后一个字节被发送，但是未发送完毕”时被调用；后者在“最后一个字节也完全发送完毕后”被调用。</li></ul><p>对于普通的读写操作，可以在回调函数里设置状态标记，用来表示读、写是否已经完成。这样，使用read、write函数启动读、写操作后，就可以轮询这些状态以等待操作完成。</p><h2 id="_2-3-初始化-uart-并完成串口打印" tabindex="-1"><a class="header-anchor" href="#_2-3-初始化-uart-并完成串口打印" aria-hidden="true">#</a> 2.3 初始化 uart 并完成串口打印</h2><h3 id="_2-3-1-编写中断回调函数" tabindex="-1"><a class="header-anchor" href="#_2-3-1-编写中断回调函数" aria-hidden="true">#</a> 2.3.1 编写中断回调函数</h3><p>在初始化uart之前，先确保已经编写uart的中断回调函数，可以在 <code>src\\hal_entry.c</code> 文件中添加如下示例代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>static volatile int g_uart7_tx_complete = 0;
static volatile int g_uart7_rx_complete = 0;

void uart7_callback(uart_callback_args_t * p_args)
{
    switch (p_args-&gt;event)
    {
        case UART_EVENT_TX_COMPLETE:
        {
            g_uart7_tx_complete  = 1;
            break;
        }
        case UART_EVENT_RX_COMPLETE:
        {
            g_uart7_rx_complete = 1;
            break;
        }
        default:
        {
            break;
        }
    }
}

void uart7_wait_for_tx(void)
{
    while (!g_uart7_tx_complete);
    g_uart7_tx_complete = 0;
}
void uart7_wait_for_rx(void)
{
    while (!g_uart7_rx_complete);
    g_uart7_rx_complete = 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>在回调函数里设置全局变量 <strong>g_uart7_tx_complete</strong> ，表示发送完毕。用户程序在调用write启动UART发送后，就可以调用 <strong>uart7_wait_for_tx</strong> 以等待发送完毕。</li><li>在回调函数里设置全局变量 <strong>g_uart7_rx_complete</strong>，表示接收完毕。用户程序在调用read启动UART接收后，就可以调用 <strong>uart7_wait_for_rx</strong> 以等待接收完毕。</li></ul><h3 id="_2-3-2-初始化及进行串口发送" tabindex="-1"><a class="header-anchor" href="#_2-3-2-初始化及进行串口发送" aria-hidden="true">#</a> 2.3.2 初始化及进行串口发送</h3><p>在 <code>src\\hal_entry.c</code> 文件中的 <strong>hal_entry()</strong> 函数里添加如下代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">hal_entry</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>
    <span class="token class-name">uint8_t</span> msg_len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token class-name">uint8_t</span> <span class="token operator">*</span>p_msg <span class="token operator">=</span> <span class="token string">&quot;Hello, DShanMCU-RA6M5!\\r\\n&quot;</span><span class="token punctuation">;</span>

    msg_len <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token function">strlen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>p_msg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* 配置串口 */</span>
    err <span class="token operator">=</span> g_uart7<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">open</span><span class="token punctuation">(</span>g_uart7<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> g_uart7<span class="token punctuation">.</span>p_cfg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span> <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">/* 启动发送字符 */</span>
        g_uart7<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">write</span><span class="token punctuation">(</span>g_uart7<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> p_msg<span class="token punctuation">,</span> msg_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/* 等待发送完毕 */</span>
        <span class="token function">uart7_wait_for_tx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// delay 1000ms</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-3-验证效果" tabindex="-1"><a class="header-anchor" href="#_2-3-3-验证效果" aria-hidden="true">#</a> 2.3.3 验证效果</h3><p>点击编译按钮，再点击debug按钮，将程序烧写到开发板中，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_028.png" alt="chapter-2_028"></p><p>运行代码，如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_029.png" alt="chapter-2_029" style="zoom:80%;"><p>打开串口工具，可以看到每隔1s，打印输出如下信息：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Hello, DShanMCU-RA6M5<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-4-优化代码" tabindex="-1"><a class="header-anchor" href="#_2-4-优化代码" aria-hidden="true">#</a> 2.4 优化代码</h2><h3 id="_2-4-1-新建一些目录" tabindex="-1"><a class="header-anchor" href="#_2-4-1-新建一些目录" aria-hidden="true">#</a> 2.4.1 新建一些目录</h3><p>随着课程的深入，我们的工程会越来越大，代码也会越来越多，因此不能将所有的代码都放在一个文件中，所以我们从这里就开始管理好我们地代码，为后面的实验打下好的基础！</p><p>我们可以直接在e2studio中新建目录以及文件，首先在 <strong>00_dshanmcu_ra6m5_uart_printf</strong> 工程目录下并新建 <code>dshanmcu_ra6m5</code> 目录，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_030.png" alt="chapter-2_030"></p><p>在弹出的窗口中的输入框中输入 <code>dshanmcu_ra6m5</code>，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_031.png" alt="chapter-2_030"></p><p>按照上面的操作，选中新建的<code>dshanmcu_ra6m5</code> 目录，继续在 <code>dshanmcu_ra6m5</code> 中新建三个目录：</p><ul><li>applications：存放我们编写的应用程序，由 <code>src\\hal_entry.c</code> 文件中的 <strong>hal_entry()</strong> 函数调用。</li><li>drivers：存放我们编写的各种驱动，比如uart，spi屏、iic触摸、ec11编码器驱动。</li><li>Middlewares：存放我们所使用的第三方库，比如后面使用到的lvgl库。</li></ul><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_031-1.png" alt="chapter-2_031"></p><p>重复上图的步骤三次分别三个目录之后，就能得到下图所示的三个目录：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_031-2.png" alt="chapter-2_031"></p><h3 id="_2-4-2-添加uart驱动" tabindex="-1"><a class="header-anchor" href="#_2-4-2-添加uart驱动" aria-hidden="true">#</a> 2.4.2 添加uart驱动</h3><p>在 <code>00_dshanmcu_ra6m5_uart_printf\\dshanmcu_ra6m5\\drivers</code> 添加uart驱动， 在e2studio中打开 <code>drivers</code> 目录，新建两个文件 <code>drv_uart.c</code> 和 <code>drv_uart.h</code>，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_032.png" alt="chapter-2_032"></p><p>也可以直接在windows资源管理器中找到对应的目录添加文件或目录，这样添加的文件或目录也会自动同步在e2studio的项目列表中。</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_032-1.png" alt="chapter-2_032-1"></p><p>在e2studio中点击打开 <code>00_dshanmcu_ra6m5_uart_printf\\dshanmcu_ra6m5\\drivers\\drv_uart.c</code> 添加下面的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_uart.h&quot;</span></span>


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
<span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> g_uart7_tx_complete <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> g_uart7_rx_complete <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>


<span class="token comment">/***********************************************************************************************************************
 * Functions
 **********************************************************************************************************************/</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">drv_uart_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    <span class="token comment">/* 打开串口 */</span>
    err <span class="token operator">=</span> g_uart7<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">open</span><span class="token punctuation">(</span>g_uart7<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> g_uart7<span class="token punctuation">.</span>p_cfg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span> <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">drv_uart_test</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>p_msg<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>
    <span class="token class-name">uint8_t</span> msg_len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>p_temp_ptr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>p_msg<span class="token punctuation">;</span>

    <span class="token comment">/* 计算长度 */</span>
    msg_len <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token function">strlen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>p_temp_ptr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* 启动发送 */</span>
    err <span class="token operator">=</span> g_uart7<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">write</span><span class="token punctuation">(</span>g_uart7<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> p_msg<span class="token punctuation">,</span> msg_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 等待发送完毕 */</span>
    <span class="token function">drv_uart_wait_for_tx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">drv_uart_wait_for_tx</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>g_uart7_tx_complete<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 阻塞等待</span>
    g_uart7_tx_complete <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">drv_uart_wait_for_rx</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>g_uart7_rx_complete<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 阻塞等待</span>
    g_uart7_rx_complete <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">uart7_callback</span><span class="token punctuation">(</span><span class="token class-name">uart_callback_args_t</span> <span class="token operator">*</span> p_args<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>p_args<span class="token operator">-&gt;</span>event<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">case</span> UART_EVENT_TX_COMPLETE<span class="token operator">:</span>
        <span class="token punctuation">{</span>
            g_uart7_tx_complete  <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> UART_EVENT_RX_COMPLETE<span class="token operator">:</span>
        <span class="token punctuation">{</span>
            g_uart7_rx_complete <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token comment">/***********************************************************************************************************************
 * Private Functions
 **********************************************************************************************************************/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在e2studio中点击打开 <code>00_dshanmcu_ra6m5_uart_printf\\dshanmcu_ra6m5\\drivers\\drv_uart.h</code> 添加下面的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">DRV_UART_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DRV_UART_H</span></span>

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
<span class="token class-name">fsp_err_t</span> <span class="token function">drv_uart_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">drv_uart_test</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>p_msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">drv_uart_wait_for_tx</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">drv_uart_wait_for_rx</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">uart7_callback</span><span class="token punctuation">(</span><span class="token class-name">uart_callback_args_t</span> <span class="token operator">*</span> p_args<span class="token punctuation">)</span><span class="token punctuation">;</span>


<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/*DRV_UART_H*/</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-3-添加-app-程序" tabindex="-1"><a class="header-anchor" href="#_2-4-3-添加-app-程序" aria-hidden="true">#</a> 2.4.3 添加 app 程序</h3><p>对于比较小的裸机程序，一般直接在 <code>src\\hal_entry.c</code> 下编写即可，然而我们的程序会越来越大，功能会越来越多，并且每个实验之间也需要进行区分，因此现在起我们(用户)程序会放在 <code>dshanmcu_ra6m5\\applications</code> 目录下。</p><p>在 <code>00_dshanmcu_ra6m5_uart_printf\\dshanmcu_ra6m5\\applications</code> 目录下新建两个 <code>app_uart_test.c</code> 和 <code>app.h</code> 文件，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_032-2.png" alt="chapter-2_032-2"></p><p>打开 <code>app_uart_test.c</code> 添加如下代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;app.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_uart.h&quot;</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Macro definitions
 **********************************************************************************************************************/</span>


<span class="token comment">/**********************************************************************************************************************
 * Typedef definitions
 **********************************************************************************************************************/</span>


<span class="token comment">/***********************************************************************************************************************
 * Private function prototypes
 **********************************************************************************************************************/</span>
<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">uart_write_msg</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>p_msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/***********************************************************************************************************************
 * Private global variables
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Functions
 **********************************************************************************************************************/</span>
<span class="token keyword">void</span> <span class="token function">app_uart_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>
    <span class="token class-name">uint8_t</span> <span class="token operator">*</span>p_msg <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span><span class="token punctuation">)</span><span class="token string">&quot;Hello, DShanMCU-RA6M5!\\r\\n&quot;</span><span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_uart_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span> <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">uart_write_msg</span><span class="token punctuation">(</span>p_msg<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// delay 1000ms</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">uart_write_msg</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>p_msg<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>
    <span class="token class-name">uint8_t</span> msg_len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>p_temp_ptr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>p_msg<span class="token punctuation">;</span>

    <span class="token comment">/* 计算长度 */</span>
    msg_len <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token function">strlen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>p_temp_ptr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* 启动发送 */</span>
    err <span class="token operator">=</span> g_uart7<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">write</span><span class="token punctuation">(</span>g_uart7<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> p_msg<span class="token punctuation">,</span> msg_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 等待发送完毕 */</span>
    <span class="token function">drv_uart_wait_for_tx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">/***********************************************************************************************************************
 * Private Functions
 **********************************************************************************************************************/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打开 <code>app.h</code> 添加如下代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">APP_TEST_H</span></span>
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

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/*APP_TEST_H*/</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-4-调用app" tabindex="-1"><a class="header-anchor" href="#_2-4-4-调用app" aria-hidden="true">#</a> 2.4.4 调用app</h3><p>在e2studio中点击打开 <code>00_dshanmcu_ra6m5_uart_printf\\src\\hal_entry.c</code> ，按照如下步骤进行修改：</p><ol><li>添加头文件包含：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;app.h&quot;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>将 <code>hal_entry</code> 函数修改为如下所示的代码：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">hal_entry</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* TODO: add your own code here */</span>
    <span class="token function">app_uart_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">BSP_TZ_SECURE_BUILD</span></span>
    <span class="token comment">/* Enter non-secure code */</span>
    <span class="token function">R_BSP_NonSecureEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-5-添加编译包含" tabindex="-1"><a class="header-anchor" href="#_2-4-5-添加编译包含" aria-hidden="true">#</a> 2.4.5 添加编译包含</h3><p>按照上面的步骤操作之后，点击编译会不通过，因为我们的项目编译配置并不知道我们添加了新的内容，下面进行配置：</p><ol><li>打开配置窗口：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_033.png" alt="chapter-2_033" style="zoom:80%;"><ol start="2"><li><p>添加头文件检索路径：</p><p>按照下图的步骤依次，添加这三个路径：</p><ul><li>/\${ProjName}/dshanmcu_ra6m5/applications</li><li>/\${ProjName}/dshanmcu_ra6m5/drivers</li><li>/\${ProjName}/dshanmcu_ra6m5/Middlewares</li></ul></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_034.png" alt="chapter-2_034" style="zoom:80%;"><p>添加上面三个路径之后点击 <code>Apply and Close</code>按钮：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_034-1.png" alt="chapter-2_034-1" style="zoom:80%;"><ol start="3"><li>添加源文件检索路径：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_035.png" alt="chapter-2_035" style="zoom:80%;"><p>如此配置之后，再点击编译按钮，会发现编译通过了。点击 <strong>debug按钮</strong> ，将程序跑起来，会发现运行现象和之前实验的一样。</p><p>上述操作只需要进行一次，之后可直接往该文件夹中添加新的代码文件。</p><h2 id="_2-5-printf输出重定向到串口" tabindex="-1"><a class="header-anchor" href="#_2-5-printf输出重定向到串口" aria-hidden="true">#</a> 2.5 printf输出重定向到串口</h2><p>这里我们继续优化 <code>drv_uart</code> 的功能，让其能像平时使用c语言那样使用 <strong>printf</strong> 函数输出打印信息。</p><p>点击打开 <code>00_dshanmcu_ra6m5_uart_printf\\dshanmcu_ra6m5\\drivers\\drv_uart.c</code> 加入下面的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/*printf输出重定向到串口*/</span>
<span class="token keyword">int</span> <span class="token function">__io_putchar</span><span class="token punctuation">(</span><span class="token keyword">int</span> ch<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err <span class="token operator">=</span> FSP_SUCCESS<span class="token punctuation">;</span>

    err <span class="token operator">=</span> g_uart7<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">write</span><span class="token punctuation">(</span>g_uart7<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token operator">*</span><span class="token punctuation">)</span><span class="token operator">&amp;</span>ch<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span> <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">drv_uart_wait_for_tx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> ch<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">_write</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>pBuffer<span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
	<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>fd<span class="token punctuation">)</span><span class="token punctuation">;</span>
	
    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>size<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">__io_putchar</span><span class="token punctuation">(</span><span class="token operator">*</span>pBuffer<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在<code>dshanmcu_ra6m5\\drivers\\drv_uart.h</code> 添加头文件包含和函数声明(去除编译警告)：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">/*printf输出重定向到串口*/</span>
<span class="token keyword">int</span> <span class="token function">__io_putchar</span><span class="token punctuation">(</span><span class="token keyword">int</span> ch<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> <span class="token function">_write</span><span class="token punctuation">(</span><span class="token keyword">int</span> fd<span class="token punctuation">,</span> <span class="token keyword">char</span> <span class="token operator">*</span>pBuffer<span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>在其他需要调用 printf 函数的源文件中，添加 #include &lt;stdio.h&gt; 即可正常使用。</p></blockquote><p>打开<code>00_dshanmcu_ra6m5_uart_printf\\dshanmcu_ra6m5\\applications\\app_uart_test.c</code> 做如下修改：</p><ol><li>添加头文件包含：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>在 <strong>uart_write_msg</strong> 函数修改为如下所示的代码：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">uart_write_msg</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>p_msg<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>
    <span class="token class-name">uint8_t</span> msg_len <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">char</span> <span class="token operator">*</span>p_temp_ptr <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>p_msg<span class="token punctuation">;</span>

    <span class="token comment">/* 计算长度 */</span>
    msg_len <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token function">strlen</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span> <span class="token operator">*</span><span class="token punctuation">)</span>p_temp_ptr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* 启动发送 */</span>
    err <span class="token operator">=</span> g_uart7<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">write</span><span class="token punctuation">(</span>g_uart7<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> p_msg<span class="token punctuation">,</span> msg_len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">/* 等待发送完毕 */</span>
    <span class="token function">drv_uart_wait_for_tx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*printf打印输出*/</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;[printf] %s&quot;</span><span class="token punctuation">,</span> p_msg<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时还不能编译，因为还需要配置两个地方：堆栈大小和链接配置</p><ol><li><p>修改堆栈大小，我们将默认的stack和heap修改为如下所示：</p><ul><li><p>Main stack size (bytes)： 0x1000</p></li><li><p>Heap size (bytes)： 0x2000</p></li></ul></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_036.png" alt="chapter-2_036" style="zoom:67%;"><ol start="2"><li>修改链接配置： 打开配置窗口：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_033.png" alt="chapter-2_033" style="zoom:67%;"><p>进行配置</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_037.png" alt="chapter-2_037" style="zoom:67%;"><p>如此配置之后，再点击编译按钮，会发现编译通过了。点击debug按钮，将程序跑起来，会发现运行现象和之前实验的一样，不同的是多了一个如下所示的 “<strong>[printf]</strong>” 开头的输出，说明<strong>printf函数已经可以正常使用</strong>。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>Hello, DShanMCU-RA6M5<span class="token operator">!</span>
<span class="token punctuation">[</span>printf<span class="token punctuation">]</span> Hello, DShanMCU-RA6M5<span class="token operator">!</span>
Hello, DShanMCU-RA6M5<span class="token operator">!</span>
<span class="token punctuation">[</span>printf<span class="token punctuation">]</span> Hello, DShanMCU-RA6M5<span class="token operator">!</span>
Hello, DShanMCU-RA6M5<span class="token operator">!</span>
<span class="token punctuation">[</span>printf<span class="token punctuation">]</span> Hello, DShanMCU-RA6M5<span class="token operator">!</span>
Hello, DShanMCU-RA6M5<span class="token operator">!</span>
<span class="token punctuation">[</span>printf<span class="token punctuation">]</span> Hello, DShanMCU-RA6M5<span class="token operator">!</span>
Hello, DShanMCU-RA6M5<span class="token operator">!</span>
<span class="token punctuation">[</span>printf<span class="token punctuation">]</span> Hello, DShanMCU-RA6M5<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里，我们第一个实验已经完成！</p>`,146),g=s("div",{STYLE:"page-break-after: always;"},null,-1);function f(y,w){const e=t("ExternalLinkIcon"),o=t("RouterLink"),i=t("center");return r(),u("div",null,[v,s("p",null,[n("本次实验我们通过创建一个简单的工程，在其基础上完成串口打印功能，从而熟悉"),s("a",k,[n(" e2stduio"),a(e)]),n("（Renesas MCU的一个基于Eclipse的集成开发环境（IDE）)）和"),s("a",_,[n("FSP"),a(e)]),n("（灵活配置软件包）开发环境。在实验中我们的会比较详细地学习了解，如何在e2studio中对我们的硬件资源进行配置，如何在自己编写代码调用FSP帮我们配置好的 HAL 驱动程序，最终完成我们的任务需求。")]),m,s("p",null,[n("这里说的调试器是 "),s("a",h,[n("瑞萨 EZ-CUBE3 MCU调试器"),a(e)]),n("。如果你使用板载DAP，则不需要阅读本小节内容(跳过这里，从 2.1.3 小节继续阅读)。板载DAP的配置请阅读： "),a(o,{to:"/zh/DShanMCU_RA6M5/e2studio_use_dap/chapter1.html"},{default:p(()=>[n("在e2studio中使用DAP进行开发调试")]),_:1}),n("。")]),b,a(i,null,{default:p(()=>[n("本节完")]),_:1}),g])}const S=l(d,[["render",f],["__file","chapter2.html.vue"]]);export{S as default};
