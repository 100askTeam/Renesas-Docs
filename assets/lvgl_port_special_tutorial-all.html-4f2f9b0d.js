import{_ as i,r as o,o as l,c as u,a as n,b as s,d as a,w as p,e as c}from"./app-a98b8345.js";const r={},d=n("p",null,[n("img",{src:"http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-1/chapter-1_000.png",alt:"chapter-1_000"})],-1),k=n("div",{STYLE:"page-break-after: always;"},null,-1),v=n("h1",{id:"目录",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#目录","aria-hidden":"true"},"#"),s(" 目录")],-1),m=n("p",null,"[toc]",-1),_=n("div",{STYLE:"page-break-after: always;"},null,-1),b=n("h1",{id:"学习资源",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#学习资源","aria-hidden":"true"},"#"),s(" 学习资源")],-1),h={href:"https://www.renesas.cn",target:"_blank",rel:"noopener noreferrer"},g={href:"https://www.ramcu.cn",target:"_blank",rel:"noopener noreferrer"},f={href:"http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=LwH6qzFGzSNVwsIQtMta9JZrMcuzfTcb&authKey=96jtabNBcdn%2BbHCPa85j79brjcgntsG1d2YDRMiAvmO3DPRAyi9Vi7KGOAbbOYAP&noverify=0&group_code=881706770",target:"_blank",rel:"noopener noreferrer"},y={href:"http://download.100ask.net/boards/Renesas/DShanMCU-RA6M5/index.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://100ask.taobao.com",target:"_blank",rel:"noopener noreferrer"},S={href:"https://www.100ask.net",target:"_blank",rel:"noopener noreferrer"},x={href:"https://space.bilibili.com/275908810",target:"_blank",rel:"noopener noreferrer"},E={href:"https://forums.100ask.net",target:"_blank",rel:"noopener noreferrer"},C=n("div",{STYLE:"page-break-after: always;"},null,-1),P=c('<h1 id="_1-软件和硬件准备" tabindex="-1"><a class="header-anchor" href="#_1-软件和硬件准备" aria-hidden="true">#</a> 1. 软件和硬件准备</h1><h2 id="_1-1-本节要点" tabindex="-1"><a class="header-anchor" href="#_1-1-本节要点" aria-hidden="true">#</a> 1.1 本节要点</h2><p>本节学习如何搭建开发环境，硬件接线，为我们后续的学习做好基础必要的准备。</p><h2 id="_1-2资料准备" tabindex="-1"><a class="header-anchor" href="#_1-2资料准备" aria-hidden="true">#</a> 1.2资料准备</h2>',4),D={href:"http://download.100ask.net/boards/Renesas/DShanMCU-RA6M5/index.html",target:"_blank",rel:"noopener noreferrer"},R=n("h2",{id:"_1-3-软件准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-3-软件准备","aria-hidden":"true"},"#"),s(" 1.3 软件准备")],-1),M=n("p",null,[s("确保你的 windows 系统电脑已经安装(或以上版本) "),n("strong",null,"setup_fsp_v4_5_0_e2s_v2023-04.exe"),s(" ：")],-1),T={href:"https://www.renesas.cn/cn/zh/software-tool/e2studio-information-ra-family",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/renesas/fsp/releases",target:"_blank",rel:"noopener noreferrer"},A=n("h2",{id:"_1-4-硬件准备",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-4-硬件准备","aria-hidden":"true"},"#"),s(" 1.4 硬件准备")],-1),U=n("p",null,"我们将用到如下开发套件：",-1),N=n("thead",null,[n("tr",null,[n("th",{style:{"text-align":"left"}},"名称"),n("th",{style:{"text-align":"left"}},"数量")])],-1),L={style:{"text-align":"left"}},q={href:"https://item.taobao.com/item.htm?id=728461040949",target:"_blank",rel:"noopener noreferrer"},O=n("td",{style:{"text-align":"left"}},"1",-1),G=n("tr",null,[n("td",{style:{"text-align":"left"}},"瑞萨 EZ-CUBE3 MCU调试器/烧录器"),n("td",{style:{"text-align":"left"}},"1")],-1),F=n("tr",null,[n("td",{style:{"text-align":"left"}},"调试器转接线"),n("td",{style:{"text-align":"left"}},"1")],-1),B=n("tr",null,[n("td",{style:{"text-align":"left"}},"320*480分辨率3.5寸带触摸LCD屏"),n("td",{style:{"text-align":"left"}},"1")],-1),z=n("tr",null,[n("td",{style:{"text-align":"left"}},"EC11旋转编码器"),n("td",{style:{"text-align":"left"}},"1")],-1),V=n("tr",null,[n("td",{style:{"text-align":"left"}},"公对母杜邦线"),n("td",{style:{"text-align":"left"}},"1(排)")],-1),H=n("tr",null,[n("td",{style:{"text-align":"left"}},"USB Type-C数据线"),n("td",{style:{"text-align":"left"}},"1")],-1),Y={href:"https://item.taobao.com/item.htm?id=728461040949",target:"_blank",rel:"noopener noreferrer"},K=c('<p>套件所有内容，如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-1/chapter-1_001.png" alt="chapter-1_001" style="zoom:67%;"><h3 id="_1-4-1-硬件接线" tabindex="-1"><a class="header-anchor" href="#_1-4-1-硬件接线" aria-hidden="true">#</a> 1.4.1 硬件接线</h3><ol><li><p>DShanMCU-RA6M5开发板和屏幕的接线，默认是已经接好，不需要额外接线。</p></li><li><p>DShanMCU-RA6M5开发板和调试器转接线接线，按照下图接好：</p></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-1/chapter-1_002.png" alt="chapter-1_002" style="zoom:80%;"><ol start="3"><li>调试器转接线和瑞萨 EZ-CUBE3 的接线，请认真对比接线，没接对则无法进行烧写、调试，接线示意图：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-1/chapter-1_003.png" alt="chapter-1_003" style="zoom:80%;"><ol start="4"><li>EZ-CUBE3 的接线拨码开关按下图拨动：</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-1/chapter-1_003-1.png" alt="chapter-1_003-2"></p><ol start="5"><li>DShanMCU-RA6M5开发板+调试器转接线+瑞萨 EZ-CUBE3的整体接线如下图所示：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-1/chapter-1_003-2.png" alt="chapter-1_003-1" style="zoom:80%;"><ol start="6"><li>DShanMCU-RA6M5开发板和EC11旋转编码器的接线，请认真对比接线，没结对则无法通过编码器操作LVGL的UI，接线示意图：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-1/chapter-1_004.png" alt="chapter-1_004" style="zoom:80%;"><ol start="7"><li>DShanMCU-RA6M5开发板有两个Type-C接口，一个是Debug功能接口(下图左侧)，一个是OTG功能接口(下图右侧)，一般情况下只接Debug接口即可，接线示意图：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-1/chapter-1_005.png" alt="chapter-1_005" style="zoom:67%;"><h2 id="_1-5-调试器使用注意事项" tabindex="-1"><a class="header-anchor" href="#_1-5-调试器使用注意事项" aria-hidden="true">#</a> 1.5 调试器使用注意事项</h2>',16),j=c("<li>调试器连接到电脑不要通过usb hub(供电不稳定)。</li><li>调试器并没有对板子供电，因此板子要额外单独供电。</li><li>调试器转接线接到板子上要确保，板子上两排排针都已经接上，没有裸露出来的排针(参考上面第2步接线图)。</li><li>将e2studio中原有的debug配置删除之后，再新建自己的debug配置。</li><li>如果出现调试器无法工作的情况，将调试器接到电脑的usb线重新插拔，并且删除、新建debug配置之后再重新尝试。</li><li>如果上述方法都未解决问题，请检查硬件接线是否正确。之后在e2stduio中检查 <code>Debug Configuration...-&gt;(选择相应的debug配置文件)-&gt;Debugger-&gt;Connection Settings</code> 中的 <strong>TrustZone</strong> 是否为 <strong>No</strong>。</li>",6),W={href:"https://forums.100ask.net/c/renesas/ra6m5/78",target:"_blank",rel:"noopener noreferrer"},X=n("hr",null,null,-1),Z=n("div",{STYLE:"page-break-after: always;"},null,-1),Q=n("h1",{id:"_2-创建第一个工程适配串口打印功能",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-创建第一个工程适配串口打印功能","aria-hidden":"true"},"#"),s(" 2. 创建第一个工程适配串口打印功能")],-1),$={href:"https://www.renesas.cn/cn/zh/software-tool/e-studio",target:"_blank",rel:"noopener noreferrer"},J={href:"https://www.renesas.cn/cn/zh/software-tool/flexible-software-package-fsp",target:"_blank",rel:"noopener noreferrer"},nn=c(`<p>这次实验我们的目标是完成串口打印，并能能通过使用 <strong>printf</strong> 函数打印信息。</p><blockquote><p>注意：我们的内容比较多，课堂时间非常有限，因此在这第一个实验中，我们会尽可能将一些软件上的用法、一些需要注意的细节等等会尽可能得进行详细地讲解，在后面不会再进行详细地说明讲解，比如后续不会讲解工程如何创建、如何查看代码、如何翻阅帮助文档等等。</p></blockquote><h2 id="_2-1创建步骤" tabindex="-1"><a class="header-anchor" href="#_2-1创建步骤" aria-hidden="true">#</a> 2.1创建步骤</h2><h3 id="_2-1-1-创建项目" tabindex="-1"><a class="header-anchor" href="#_2-1-1-创建项目" aria-hidden="true">#</a> 2.1.1 创建项目</h3><ol><li>打开 e2 studio，并打开 workspace 执行如下步骤：</li><li>在菜单中选择 <code>“New&quot;</code>。</li><li>选择 <code>&quot;Renesas C/C++ project&quot;</code>。</li><li>下拉菜单中选择 <code>&quot;Renesas RA&quot;</code>。</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_001.png" alt="chapter-2_001" style="zoom:80%;"><ol start="5"><li>在弹出的新窗口按照如下操作：</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_002.png" alt="chapter-2_002"></p><ol start="6"><li>在弹出的新窗口中的 <code>&quot;Project name&quot;</code> 处输入项目名称： <strong>00_dshanmcu_ra6m5_uart_printf</strong>，您也可以自定义名称。（注意不可以有中文、特殊字符！）</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_003.png" alt="chapter-2_003" style="zoom:67%;"><ol start="7"><li>在弹出的新窗口中，需要进行一些配置，操作如下图所示：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_004.png" alt="chapter-2_004" style="zoom:67%;"><ol start="8"><li>下面两个窗口按照默认配置，点击 <code>&quot;Next&quot;</code> 按钮即可：</li></ol><p>工程类型：<code> Flat (Non-TrustZone) Project</code></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_005.png" alt="chapter-2_005" style="zoom:67%;"><p>不使用RTOS：<code>No RTOS</code></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_006.png" alt="chapter-2_006" style="zoom:67%;"><blockquote><p>如果后续要使用 RTOS 需要重新创建工程，这在实际使用中需要注意。</p></blockquote><ol start="9"><li>最后一个窗口，也不需要进行配置，按照下图所示点击 <code>&quot;Finish&quot;</code> 按钮即可：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_007.png" alt="chapter-2_007" style="zoom:67%;"><ol start="10"><li>点击 <code>&quot;Finish&quot;</code> 按钮之后稍等软件进行处理，完成之后会提示这个是否打开 <code>&quot;FSP Configuration perspective&quot;</code> 点击 <code>&quot;Open Perspective&quot;</code> 按钮即可：</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_008.png" alt="chapter-2_008"></p><ol start="11"><li>最后，我们的 workspce 会呈现这样的界面，下图对默认的 workspace 布局进行简单的说明：</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_009.png" alt="chapter-2_009"></p><blockquote><p>注意：这是使用默认的布局的说明，当你对e2stduio比较熟悉之后可以根据自己的习惯自定义 workspace 布局。如果需要恢复默认的布局，请按照上图的说明进行操作。</p></blockquote><h3 id="_2-1-2-调试器配置" tabindex="-1"><a class="header-anchor" href="#_2-1-2-调试器配置" aria-hidden="true">#</a> 2.1.2 调试器配置</h3><blockquote><p>调试器使用注意点：</p><ol><li>调试器连接到电脑不要通过usb hub(供电不稳定)。</li><li>调试器并没有对板子供电，因此板子要额外单独供电。</li><li>调试器转接线接到板子上要确保，板子上两排排针都已经接上，没有裸露出来的排针(参考第一章第2步接线图)。</li><li>将e2studio中原有的debug配置删除之后，再新建自己的debug配置。</li><li>如果出现调试器无法工作的情况，将调试器接到电脑的usb线重新插拔，并且删除、新建debug配置之后再重新尝试。</li></ol></blockquote><p>在上面成功创建工程之后，先验证调试器是否可以正常使用，这个过程每个工程只需要配置一次即可，后面我们就是通过这个方式，将代码烧写到开发板中并且进行调试。</p><ol><li>按照下图所示，打开配置页面：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_009-1.png" alt="chapter-2_009-1" style="zoom:67%;"><ol start="2"><li>进入配置页面后，先创建新的配置文件，如下图所示：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_009-2.png" alt="chapter-2_009-2" style="zoom:50%;"><ol start="3"><li>继续按下图所示进行操作：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_009-3.png" alt="chapter-2_009-3"><ol start="4"><li>如下图所示切换到 Debugger 页面继续进行操作，Target Device粘贴 <strong>R7FA6M5BF</strong>，注意检查 <strong>Connection Settings</strong>下的 <strong>TrustZone</strong> 是否为 <code>No</code>：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_009-4-2.png" alt="chapter-2_009-4-2" style="zoom:67%;"><ol start="5"><li><p>在上图点击 <strong>debug</strong> 按钮之后会自动下载代码进入调试模式，如果失败，请返回到第一步逐步进行检查，并且检查硬件接线是否正确。</p></li><li><p>如果修改代码之后，需要再次进入进行debug操作，按照下图所示操作：</p></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_009-6.png" alt="chapter-2_009-6" style="zoom:80%;"><blockquote><p>一般来说直接点击上图的debug按钮即可，如果点击debug按钮无法进行调试(报错)，请按照上图所示继续操作。</p></blockquote><h3 id="_2-1-3-添加-stacks-r-sci-uart" tabindex="-1"><a class="header-anchor" href="#_2-1-3-添加-stacks-r-sci-uart" aria-hidden="true">#</a> 2.1.3 添加 Stacks(r_sci_uart)</h3><ol><li>打开 FSP Configuration 视图：双击项目文件夹中的 <code>configuration.xml</code> 文件。</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_010.png" alt="chapter-2_010" style="zoom:80%;"><ol start="2"><li>按照下图所示，添加 <code>r_sci_uart</code> 模块：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_011.png" alt="chapter-2_011" style="zoom:80%;"><ol start="3"><li>点击刚刚添加的<code>r_sci_uart</code> 模块会看到底部窗口的 <code>Properties</code> 选项卡出现内容了，我们将会在这里对我们的uart进行配置：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_012.png" alt="chapter-2_012" style="zoom:67%;"><h3 id="_2-1-4-配置-stacks-r-sci-uart" tabindex="-1"><a class="header-anchor" href="#_2-1-4-配置-stacks-r-sci-uart" aria-hidden="true">#</a> 2.1.4 配置 Stacks(r_sci_uart)</h3><p>首先进行引脚的配置，先打开原理图确认使用哪一个UART。打开位于<code>03硬件资料\\1_开发板原理图\\ DshanMCU_RA6M5_V4.0.pdf</code> 的开发板原理图，电路图如下，引脚号是 <strong>P613 (TX)</strong> 和 <strong>P614 (RX)</strong> ，它使用 <strong>TXD7/RXD7</strong> ，记住这个编号 <strong>7</strong>，接下来我们根据这个信息对 r_sci_uart 进行配置。</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_013.png" alt="chapter-2_013"><p>在 <code>&quot;General&quot;</code> 下，修改名称和通道：</p><ul><li>Name： g_uart7</li><li>Channel： 7</li></ul><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_014.png" alt="chapter-2_014" style="zoom:80%;"><p>在 <code>&quot;Baud</code>&quot; 下，配置通信波特率为 115200：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_015.png" alt="chapter-2_015" style="zoom:80%;"><p>在 <code>&quot;Flow Control&quot;</code> 下，不要修改默认配置，如果修改了需要按下图修改回去：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_016.png" alt="chapter-2_016" style="zoom:80%;"><p>在 <code>&quot;Interrupts</code>&quot; 下，设置 Callback 为 <code>&quot;uart7_callback&quot;</code>（这个函数需要我们实现)，其他使用默认配置：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_017.png" alt="chapter-2_017" style="zoom:80%;"><p>在 <code>&quot;Pins</code>&quot; 下，确认 TXD7 、 TXD6 分别为 P613 、 P614 ，点击下图所示的按钮进行配置：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_018.png" alt="chapter-2_018" style="zoom:80%;"><p>之后在下图所示的区域进行配置：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_019.png" alt="chapter-2_019" style="zoom:67%;"><p>最后检查确认无误，点击右上角的 <code>“Generate Project Content”</code> e2studio就会根据我们对FSP的配置自动配置项目、生成相应的代码。</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_020.png" alt="chapter-2_020" style="zoom:80%;"><h2 id="_2-2-配置信息解读" tabindex="-1"><a class="header-anchor" href="#_2-2-配置信息解读" aria-hidden="true">#</a> 2.2 配置信息解读</h2><h3 id="_2-2-1-引脚配置信息" tabindex="-1"><a class="header-anchor" href="#_2-2-1-引脚配置信息" aria-hidden="true">#</a> 2.2.1 引脚配置信息</h3><p>该信息会在 <code>ra_gen\\pin_data.c</code> 文件中生成。</p><p>在RASC里配置的每一个引脚，都会生成一个 <strong>ioport_pin_cfg_t</strong> 数组项，里面的内容跟配置时选择的参数一致。代码如下：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_021.png" alt="chapter-2_021" style="zoom:80%;"><h3 id="_2-2-2-uart配置信息" tabindex="-1"><a class="header-anchor" href="#_2-2-2-uart配置信息" aria-hidden="true">#</a> 2.2.2 UART配置信息</h3><p>该信息会在 <code>ra_gen\\hal_data.c</code> 文件中生成。</p><p>指定的UART使用哪个SCI通道、指定了它的,数据格式（数据位/校验位/停止位）、指定了波特率等信息，这些配置信息都被放入一个 <strong>uart_cfg_t</strong> 结构体：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_022.png" alt="chapter-2_022" style="zoom:67%;"><p>结构体 <strong>g_uart7_cfg</strong> 里引用到了另一个结构体 <strong>g_uart7_cfg_extend</strong> ，里面含有时钟、FIFO、流量控制等信息；其中引用了 <strong>g_uart7_baud_setting</strong> 结构体，代码如下：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_023.png" alt="chapter-2_023" style="zoom:67%;"><h3 id="_2-2-3-api接口" tabindex="-1"><a class="header-anchor" href="#_2-2-3-api接口" aria-hidden="true">#</a> 2.2.3 API接口</h3><p>在 <code>\\ra\\fsp\\inc\\api\\r_uart_api.h</code> 中定义了uart模块的接口，它定义了一个结构体类型 <strong>uart_api_t</strong> ，内容如下：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_024.png" alt="chapter-2_024" style="zoom:80%;"><p>在具体的C文件中，实现了一个 <strong>uart_api_t</strong> 结构体，比如在 <code>r_sci_uart.c</code> 里实现了如下结构体：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_025.png" alt="chapter-2_025"></p><p>要使用UART收发数据时，可以调用结构体 <strong>g_uart_on_sci</strong> 里的各个函数指针，也可以直接调用<code>r_sci_uart.c</code> 里实现的各个函数（比如R_SCI_UART_Open、R_SCI_UART_Read）。</p><h3 id="_2-2-4-中断回调函数" tabindex="-1"><a class="header-anchor" href="#_2-2-4-中断回调函数" aria-hidden="true">#</a> 2.2.4 中断回调函数</h3><p>操作一个UART引脚时，要先打开它（open），open 函数会配置UART；然后再调用 read、write 函数读、写串口。需要注意的是，sci_uart 模块里的读、写函数，只是 “启动” 读、写功能，这些函数返0回时并不表示读、写已经完成。后续的读、写操作是由中断函数实现的。在传输过程中，中断函数会调用回调函数来处理各种状态（传输完成？出错？）。 回调函数原型在 <code>\\ra_gen\\hal_data.h</code> 中定义，如下：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_026.png" alt="chapter-2_026"></p><p>它的 p_args 参数是 <strong>uart_callback_args_t</strong> 结构体类型，如下：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-2/chapter-2_027.png" alt="chapter-2_027"></p><ul><li>对于接收，有2个event：UART_EVENT_RX_COMPLETE、UART_EVENT_RX_CHAR。前者被调用的时机是：调用read后接收到所有数据时；后者被调用的时机是：未调用read函数，但是接收到了数据。</li><li>对于发送，有2个event：UART_EVENT_TX_DATA_EMPTY、UART_EVENT_TX_COMPLETE。以发送2个字节的数据为例，前者被调用的时机是：第1个字节已经成功发送完毕，第2个字节已经被移入发送器但是还没发送完毕；后者被调用的时机是：这2个字节都发送完毕。前者先被调用，在“最后一个字节被发送，但是未发送完毕”时被调用；后者在“最后一个字节也完全发送完毕后”被调用。</li></ul><p>对于普通的读写操作，可以在回调函数里设置状态标记，用来表示读、写是否已经完成。这样，使用read、write函数启动读、写操作后，就可以轮询这些状态以等待操作完成。</p><h2 id="_2-3-初始化-uart-并完成串口打印" tabindex="-1"><a class="header-anchor" href="#_2-3-初始化-uart-并完成串口打印" aria-hidden="true">#</a> 2.3 初始化 uart 并完成串口打印</h2><h3 id="_2-3-1-编写中断回调函数" tabindex="-1"><a class="header-anchor" href="#_2-3-1-编写中断回调函数" aria-hidden="true">#</a> 2.3.1 编写中断回调函数</h3><p>在初始化uart之前，先确保已经编写uart的中断回调函数，可以在 <code>src\\hal_entry.c</code> 文件中添加如下示例代码：</p><div class="language-C line-numbers-mode" data-ext="C"><pre class="language-C"><code>static volatile int g_uart7_tx_complete = 0;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>到这里，我们第一个实验已经完成！</p><hr>`,173),sn=n("div",{STYLE:"page-break-after: always;"},null,-1),an=c(`<h1 id="_3-驱动触摸屏-i2c" tabindex="-1"><a class="header-anchor" href="#_3-驱动触摸屏-i2c" aria-hidden="true">#</a> 3. 驱动触摸屏(I2C)</h1><p>本次实验我们在上一次实验的基础上驱动I2C触摸屏。从这次实验开始，我们不需要重新创建工程，而是在上一次实验项目的基础添加新的功能。</p><p>上次实验我们已经能通过使用 printf 函数打印输出信息，这次实验我们的目标是当触摸屏被按下时，打印当前被按下的触摸点的坐标信息(x, y)。</p><blockquote><p>每个实验都是在原有的基础上添加更多的功能，因此请确保每次实验都完成并得到预期的效果。</p></blockquote><h2 id="_3-1-复制工程" tabindex="-1"><a class="header-anchor" href="#_3-1-复制工程" aria-hidden="true">#</a> 3.1 复制工程</h2><p>上次实验得出的工程我们可以通过复制在原有的基础上得到一个新的工程，操作步骤：</p><ol><li>复制工程：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_001.png" alt="chapter-3_001" style="zoom:67%;"><ol start="2"><li>粘贴工程</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_002.png" alt="chapter-3_002" style="zoom:67%;"><ol start="3"><li>复制确认窗口中，重命名项目为 <code>01_dshanmcu_ra6m5_i2c_touchpad</code>，点击 <strong>copy</strong> 按钮：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_003.png" alt="chapter-3_003" style="zoom:67%;"><ol start="4"><li>得到重命名后的独立项目</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_004.png" alt="chapter-3_004" style="zoom:80%;"><ol start="5"><li>为了后续开发的方便(避免混淆)，将之前的项目关闭：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_005.png" alt="chapter-3_005" style="zoom:67%;"><ol start="6"><li>关闭后的项目可以随时打开进行操作：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_006.png" alt="chapter-3_006" style="zoom:67%;"><h2 id="_3-2-配置fsp" tabindex="-1"><a class="header-anchor" href="#_3-2-配置fsp" aria-hidden="true">#</a> 3.2 配置FSP</h2><h3 id="_3-2-1-查看硬件资料" tabindex="-1"><a class="header-anchor" href="#_3-2-1-查看硬件资料" aria-hidden="true">#</a> 3.2.1 查看硬件资料</h3><ol><li>打开位于 <code>03硬件资料\\1_开发板原理图\\ DshanMCU_RA6M5_V4.0.pdf</code> 的开发板原理图，确认使用哪一个I2C，电路图如下，引脚号是 **P409 (SDA2) ** 和 **P410(SCL2) **，它使用 <strong>SDA2/SCL2</strong> ，记住这个编号 <strong>2</strong>，接下来我们根据这个信息对 r_iic_master 进行配置。</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_007.png" alt="chapter-3_007" style="zoom:80%;"><ol start="2"><li>打开位于 <code>4_模块资料\\02_GT911触控芯片手册\\GT911 DataSheet Rev11.pdf</code> 的触摸屏数据手册，跳转到如下位置：</li></ol><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_007-1.png" alt="chapter-3_007-1"></p><p>我们选择使用 <strong>0x28</strong> 也就是 <strong>0x14</strong> 的地址进行通信(我们使用的地址模式是7-bit，因此剔除最低一位，也就是将0x28右移一位的到0x14)。那么在使用iic进行通信之前，需要操作GT911的Reset引脚（P403）和INT引脚（P408），设置（告知）GT911我们想使用的通信地址。</p><blockquote><p>(参考阅读 “1_用户手册\\ARM嵌入式系统中面向对象的模块编程方法.pdf” 6.13 I2C协议章节)</p></blockquote><h3 id="_3-2-2-添加-stacks-r-iic-master" tabindex="-1"><a class="header-anchor" href="#_3-2-2-添加-stacks-r-iic-master" aria-hidden="true">#</a> 3.2.2 添加 Stacks(r_iic_master)</h3><ol><li>打开 FSP Configuration 视图：双击项目文件夹中的 <code>configuration.xml</code> 文件。</li><li>按照下图所示，添加 <code>r_sci_uart</code> 模块：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_008.png" alt="chapter-3_008" style="zoom:67%;"><ol start="3"><li>点击刚刚添加的<code>r_iic_master</code> 在底部窗口的 <code>Properties</code> 选项卡中对其进行配置，将其配置为与下图一致： <ul><li>Name： g_i2c_master2</li><li>Channel： 2</li><li>Slave Address： 0x14</li><li>Callback： i2c_master2_callback</li></ul></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_009.png" alt="chapter-3_009" style="zoom:80%;"><h3 id="_3-2-3-配置-reset-和int引脚" tabindex="-1"><a class="header-anchor" href="#_3-2-3-配置-reset-和int引脚" aria-hidden="true">#</a> 3.2.3 配置 Reset 和INT引脚</h3><p>这2个引脚，在上面的原理图中有标注，分别是：</p><ul><li>Reset引脚 (P403)</li><li>INT引脚 (P408)</li></ul><p>根据上面找到的数据手册的描述，在FSP对其进行配置：</p><ol><li>按下图所示操作，打开配置IO引脚页面：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_009-1.png" alt="chapter-3_009-1" style="zoom:80%;"><ol start="2"><li>按下图所示操作，配置Reset引脚(P403)</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_009-2.png" alt="chapter-3_009-2" style="zoom:80%;"><ol start="3"><li>按下图所示操作，配置INT引脚(P408)</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_009-3.png" alt="chapter-3_009-3" style="zoom:80%;"><p>最后，检查确认无误，点击右上角的 <code>“Generate Project Content”</code> e2studio就会根据我们对FSP的配置自动配置项目、生成相应的代码。</p><h2 id="_3-3-编写触摸屏驱动代码" tabindex="-1"><a class="header-anchor" href="#_3-3-编写触摸屏驱动代码" aria-hidden="true">#</a> 3.3 编写触摸屏驱动代码</h2><p>在e2studio中打开 <code>01_dshanmcu_ra6m5_i2c_touchpad\\dshanmcu_ra6m5\\drivers</code> 目录，新建如下两个文件 <code>drv_i2c_touchpad.c</code> 和 <code>drv_i2c_touchpad.h</code>：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_010.png" alt="chapter-3_010"></p><blockquote><p>如果你不清楚怎么在e2studio中创建文件，请参考阅读上一节实验中新建文件的说明教程。</p></blockquote><p>也可以直接在windows资源管理器中找到对应的目录添加文件或目录，这样添加的文件或目录也会自动同步在e2studio的项目列表中</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_011.png" alt="chapter-3_011"></p><p>在e2studio中点击打开 <code>01_dshanmcu_ra6m5_i2c_touchpad\\dshanmcu_ra6m5\\drivers\\drv_i2c_touchpad.c</code> 添加下面的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_i2c_touchpad.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdlib.h&gt;</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Macro definitions
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_RESET_PIN</span>             <span class="token expression">BSP_IO_PORT_04_PIN_03</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_INT_PIN</span>               <span class="token expression">BSP_IO_PORT_04_PIN_08</span></span>

<span class="token comment">//GT911 部分寄存器定义</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT_CTRL_REG</span>                 <span class="token expression"><span class="token number">0x8040</span>  </span><span class="token comment">//GT911控制寄存器</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT_CFGS_REG</span>                 <span class="token expression"><span class="token number">0x8047</span>  </span><span class="token comment">//GT911配置起始地址寄存器</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT_CHECK_REG</span>                <span class="token expression"><span class="token number">0x80FF</span>  </span><span class="token comment">//GT911校验和寄存器</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT_PID_REG</span>                  <span class="token expression"><span class="token number">0x8140</span>  </span><span class="token comment">//GT911产品ID寄存器</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT_GSTID_REG</span>                <span class="token expression"><span class="token number">0x814E</span>  </span><span class="token comment">//GT911当前检测到的触摸情况</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT_TP1_REG</span>                  <span class="token expression"><span class="token number">0x814F</span>  </span><span class="token comment">//第一个触摸点数据地址</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT_TP2_REG</span>                  <span class="token expression"><span class="token number">0x8157</span>  </span><span class="token comment">//第二个触摸点数据地址</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT_TP3_REG</span>                  <span class="token expression"><span class="token number">0x815F</span>  </span><span class="token comment">//第三个触摸点数据地址</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT_TP4_REG</span>                  <span class="token expression"><span class="token number">0x8167</span>  </span><span class="token comment">//第四个触摸点数据地址</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT_TP5_REG</span>                  <span class="token expression"><span class="token number">0x816F</span>  </span><span class="token comment">//第五个触摸点数据地址</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_READ_X_MAX_REG</span>        <span class="token expression"><span class="token number">0x8048</span>  </span><span class="token comment">/* X输出最大值 */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_READ_Y_MAX_REG</span>        <span class="token expression"><span class="token number">0x804a</span>  </span><span class="token comment">/* X输出最大值 */</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_READ_XY_REG</span>           <span class="token expression"><span class="token number">0x814E</span>  </span><span class="token comment">/* 坐标寄存器 */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_CLEARBUF_REG</span>          <span class="token expression"><span class="token number">0x814E</span>  </span><span class="token comment">/* 清除坐标寄存器 */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_CONFIG_REG</span>            <span class="token expression"><span class="token number">0x8047</span>  </span><span class="token comment">/* 配置参数寄存器 */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_COMMAND_REG</span>           <span class="token expression"><span class="token number">0x8040</span>  </span><span class="token comment">/* 实时命令 */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_PRODUCT_ID_REG</span>        <span class="token expression"><span class="token number">0x8140</span>  </span><span class="token comment">/* productid */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_VENDOR_ID_REG</span>         <span class="token expression"><span class="token number">0x814A</span>  </span><span class="token comment">/* 当前模组选项信息 */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_CONFIG_VERSION_REG</span>    <span class="token expression"><span class="token number">0x8047</span>  </span><span class="token comment">/* 配置文件版本号 */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_CONFIG_CHECKSUM_REG</span>   <span class="token expression"><span class="token number">0x80FF</span>  </span><span class="token comment">/* 配置文件校验码 */</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">GT911_FIRMWARE_VERSION_REG</span>  <span class="token expression"><span class="token number">0x8144</span>  </span><span class="token comment">/* 固件版本号 */</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Typedef definitions
 **********************************************************************************************************************/</span>

<span class="token comment">/**用于存放每一个触控点的id，坐标，大小**/</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span>
<span class="token punctuation">{</span>
    <span class="token class-name">uint8_t</span> id<span class="token punctuation">;</span>
    <span class="token class-name">uint16_t</span> x<span class="token punctuation">;</span>
    <span class="token class-name">uint16_t</span> y<span class="token punctuation">;</span>
    <span class="token class-name">uint16_t</span> size<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token class-name">tp_point_info_t</span><span class="token punctuation">;</span>

<span class="token comment">/**类结构体**/</span>
<span class="token keyword">typedef</span> <span class="token keyword">struct</span>
<span class="token punctuation">{</span>
    <span class="token class-name">uint8_t</span> tp_dev_addr<span class="token punctuation">;</span>
    <span class="token class-name">uint16_t</span> height<span class="token punctuation">;</span>
    <span class="token class-name">uint16_t</span> width<span class="token punctuation">;</span>
    <span class="token class-name">tp_rotation_t</span> rotation<span class="token punctuation">;</span>
    <span class="token class-name">tp_point_info_t</span> points_info<span class="token punctuation">[</span>TOUCH_POINT_TOTAL<span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">//用于存储五个触控点的坐标</span>
<span class="token punctuation">}</span> <span class="token class-name">tp_drv_t</span><span class="token punctuation">;</span>

<span class="token comment">/***********************************************************************************************************************
 * Private function prototypes
 **********************************************************************************************************************/</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">i2c2_wait_for_tx</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">i2c2_wait_for_rx</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">gt911_write_reg</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> reg<span class="token punctuation">,</span> <span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">,</span> <span class="token class-name">uint8_t</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">gt911_read_reg</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> reg<span class="token punctuation">,</span> <span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">,</span> <span class="token class-name">uint8_t</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_clear_buf</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_soft_reset</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_get_gstid</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_get_version</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_get_vendor_id</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_get_product_id</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_get_max_x</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_get_max_y</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/***********************************************************************************************************************
 * Private global variables
 **********************************************************************************************************************/</span>
<span class="token keyword">static</span> <span class="token class-name">tp_drv_t</span> g_tp_drv<span class="token punctuation">;</span>

<span class="token keyword">static</span> <span class="token keyword">volatile</span> bool g_i2c2_tx_complete <span class="token operator">=</span> false<span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">volatile</span> bool g_i2c2_rx_complete <span class="token operator">=</span> false<span class="token punctuation">;</span>

<span class="token comment">/***********************************************************************************************************************
 * Functions
 **********************************************************************************************************************/</span>
<span class="token class-name">fsp_err_t</span> <span class="token function">drv_i2c_touchpad_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>
    <span class="token class-name">uint16_t</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">touchpad_is_touched</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">==</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//循环读取每个触控点的位置值</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> TOUCH_POINT_TOTAL<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">touchpad_get_pos</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token operator">&amp;</span>y<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;No: %d, touched x: %d, touched y: %d\\r\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">drv_i2c_touchpad_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>
    <span class="token class-name">uint8_t</span> buf<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">/* 初始化I2C驱动 */</span>
    err <span class="token operator">=</span> g_i2c_master2<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">open</span> <span class="token punctuation">(</span>g_i2c_master2<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> g_i2c_master2<span class="token punctuation">.</span>p_cfg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">/* 选择地址 */</span>
    <span class="token comment">// 0x14</span>
    g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinWrite</span> <span class="token punctuation">(</span>g_ioport<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> GT911_RESET_PIN<span class="token punctuation">,</span> BSP_IO_LEVEL_LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
    g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinWrite</span> <span class="token punctuation">(</span>g_ioport<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> GT911_INT_PIN<span class="token punctuation">,</span> BSP_IO_LEVEL_HIGH<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">R_BSP_SoftwareDelay</span> <span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>

    g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinWrite</span> <span class="token punctuation">(</span>g_ioport<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> GT911_RESET_PIN<span class="token punctuation">,</span> BSP_IO_LEVEL_HIGH<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">R_BSP_SoftwareDelay</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>

    g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinCfg</span> <span class="token punctuation">(</span>g_ioport<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> GT911_INT_PIN<span class="token punctuation">,</span> IOPORT_CFG_PORT_DIRECTION_INPUT<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">R_BSP_SoftwareDelay</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">touchpad_set_rotation</span> <span class="token punctuation">(</span>TP_ROT_NONE<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/* 读ID */</span>
    <span class="token comment">// 厂商标识id</span>
    <span class="token function">gt911_get_vendor_id</span> <span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;gt911 vendor id = %02x %02x %02x %02x\\r\\n&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> buf<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> buf<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> buf<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 产品id</span>
    <span class="token function">gt911_get_product_id</span> <span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;gt911 product id = %02x %02x %02x %02x\\r\\n&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span> buf<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> buf<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> buf<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// 触摸芯片固件版本</span>
    <span class="token function">gt911_get_version</span> <span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;version = 0x%x\\r\\n&quot;</span><span class="token punctuation">,</span> buf<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">gt911_get_max_x</span> <span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    g_tp_drv<span class="token punctuation">.</span>width <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint16_t</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">|</span> buf<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;touchpad max x = %d\\r\\n&quot;</span><span class="token punctuation">,</span> g_tp_drv<span class="token punctuation">.</span>width<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">gt911_get_max_y</span> <span class="token punctuation">(</span>buf<span class="token punctuation">)</span><span class="token punctuation">;</span>
    g_tp_drv<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint16_t</span><span class="token punctuation">)</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>buf<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">|</span> buf<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;touchpad max y = %d\\r\\n&quot;</span><span class="token punctuation">,</span> g_tp_drv<span class="token punctuation">.</span>height<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">touchpad_is_touched</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">uint8_t</span> touched_state<span class="token punctuation">,</span> touch_num<span class="token punctuation">,</span> buffer_status<span class="token punctuation">;</span>

    <span class="token function">gt911_get_gstid</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>touched_state<span class="token punctuation">)</span><span class="token punctuation">;</span>
    touch_num <span class="token operator">=</span> touched_state <span class="token operator">&amp;</span> <span class="token number">0xf</span><span class="token punctuation">;</span>            <span class="token comment">//触点数量</span>
    buffer_status <span class="token operator">=</span> <span class="token punctuation">(</span>touched_state <span class="token operator">&gt;&gt;</span> <span class="token number">7</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">1</span><span class="token punctuation">;</span>   <span class="token comment">// 帧状态</span>
    <span class="token comment">//printf(&quot;touch_num: %d\\r\\n&quot;, touch_num);</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>buffer_status <span class="token operator">==</span> <span class="token number">1</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>touch_num <span class="token operator">&lt;=</span> TOUCH_POINT_TOTAL<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>touch_num <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">uint16_t</span> pointers_regs<span class="token punctuation">[</span>TOUCH_POINT_TOTAL<span class="token punctuation">]</span> <span class="token operator">=</span>
        <span class="token punctuation">{</span> GT_TP1_REG<span class="token punctuation">,</span> GT_TP2_REG<span class="token punctuation">,</span> GT_TP3_REG<span class="token punctuation">,</span> GT_TP4_REG<span class="token punctuation">,</span> GT_TP5_REG <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token comment">// 获取每个触控点的坐标值并保存</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> touch_num<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token class-name">uint8_t</span> point_info_per_size <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
            <span class="token class-name">uint8_t</span> <span class="token operator">*</span>point_info_p <span class="token operator">=</span> <span class="token function">malloc</span> <span class="token punctuation">(</span>point_info_per_size <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">gt911_read_reg</span> <span class="token punctuation">(</span>pointers_regs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span> point_info_p<span class="token punctuation">,</span> point_info_per_size<span class="token punctuation">)</span><span class="token punctuation">;</span>

            g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>id <span class="token operator">=</span> point_info_p<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
            g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint16_t</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>point_info_p<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">(</span>point_info_p<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint16_t</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>point_info_p<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">(</span>point_info_p<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>size <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint16_t</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>point_info_p<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">+</span> <span class="token punctuation">(</span>point_info_p<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">&lt;&lt;</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token function">free</span> <span class="token punctuation">(</span>point_info_p<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">//旋转方向</span>
            <span class="token class-name">uint16_t</span> temp<span class="token punctuation">;</span>
            <span class="token keyword">switch</span> <span class="token punctuation">(</span>g_tp_drv<span class="token punctuation">.</span>rotation<span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">case</span> TP_ROT_NONE<span class="token operator">:</span>
                    g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">=</span> g_tp_drv<span class="token punctuation">.</span>width <span class="token operator">-</span> g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token punctuation">;</span>
                    g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y <span class="token operator">=</span> g_tp_drv<span class="token punctuation">.</span>height <span class="token operator">-</span> g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> TP_ROT_270<span class="token operator">:</span>
                    temp <span class="token operator">=</span> g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token punctuation">;</span>
                    g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">=</span> g_tp_drv<span class="token punctuation">.</span>width <span class="token operator">-</span> g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y<span class="token punctuation">;</span>
                    g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y <span class="token operator">=</span> temp<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> TP_ROT_180<span class="token operator">:</span>
                    <span class="token comment">//g_tp_drv.points_info[i].x = g_tp_drv.points_info[i].x;</span>
                    <span class="token comment">//g_tp_drv.points_info[i].y = g_tp_drv.points_info[i].y;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">case</span> TP_ROT_90<span class="token operator">:</span>
                    temp <span class="token operator">=</span> g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token punctuation">;</span>
                    g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>x <span class="token operator">=</span> g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y<span class="token punctuation">;</span>
                    g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span>y <span class="token operator">=</span> g_tp_drv<span class="token punctuation">.</span>height <span class="token operator">-</span> temp<span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
                <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token function">gt911_clear_buf</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> FSP_SUCCESS<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">//必须给GT911_POINT_INFO缓冲区置0,不然读取的数据一直为128！！！！</span>
    <span class="token function">gt911_clear_buf</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> FSP_ERR_INVALID_DATA<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">touchpad_set_rotation</span><span class="token punctuation">(</span><span class="token class-name">tp_rotation_t</span> rotation<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    g_tp_drv<span class="token punctuation">.</span>rotation <span class="token operator">=</span> rotation<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">touchpad_get_pos</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> <span class="token operator">*</span>x<span class="token punctuation">,</span> <span class="token class-name">uint16_t</span> <span class="token operator">*</span>y<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token operator">*</span>x <span class="token operator">=</span> g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>x<span class="token punctuation">;</span>
    <span class="token operator">*</span>y <span class="token operator">=</span> g_tp_drv<span class="token punctuation">.</span>points_info<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>y<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">i2c_master2_callback</span><span class="token punctuation">(</span><span class="token class-name">i2c_master_callback_args_t</span> <span class="token operator">*</span>p_args<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">switch</span> <span class="token punctuation">(</span>p_args<span class="token operator">-&gt;</span>event<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">case</span> I2C_MASTER_EVENT_TX_COMPLETE<span class="token operator">:</span>
        <span class="token punctuation">{</span>
            g_i2c2_tx_complete <span class="token operator">=</span> true<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">case</span> I2C_MASTER_EVENT_RX_COMPLETE<span class="token operator">:</span>
        <span class="token punctuation">{</span>
            g_i2c2_rx_complete <span class="token operator">=</span> true<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">default</span><span class="token operator">:</span>
        <span class="token punctuation">{</span>
            g_i2c2_tx_complete <span class="token operator">=</span> g_i2c2_rx_complete <span class="token operator">=</span> false<span class="token punctuation">;</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/***********************************************************************************************************************
 * Private Functions
 **********************************************************************************************************************/</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">i2c2_wait_for_tx</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>g_i2c2_tx_complete<span class="token punctuation">)</span>
        <span class="token punctuation">;</span>
    g_i2c2_tx_complete <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">i2c2_wait_for_rx</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token operator">!</span>g_i2c2_rx_complete<span class="token punctuation">)</span>
        <span class="token punctuation">;</span>
    g_i2c2_rx_complete <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_soft_reset</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">uint8_t</span> buf<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    buf<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0x02</span><span class="token punctuation">;</span>
    <span class="token function">gt911_write_reg</span> <span class="token punctuation">(</span>GT911_COMMAND_REG<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token operator">*</span><span class="token punctuation">)</span> buf<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">R_BSP_SoftwareDelay</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
    buf<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0x0</span><span class="token punctuation">;</span>
    <span class="token function">gt911_write_reg</span> <span class="token punctuation">(</span>GT911_COMMAND_REG<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token operator">*</span><span class="token punctuation">)</span> buf<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">R_BSP_SoftwareDelay</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_clear_buf</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">uint8_t</span> buf<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span>
    <span class="token punctuation">{</span> <span class="token number">0</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token function">gt911_write_reg</span> <span class="token punctuation">(</span>GT911_CLEARBUF_REG<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">gt911_write_reg</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> reg<span class="token punctuation">,</span> <span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">,</span> <span class="token class-name">uint8_t</span> len<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    <span class="token class-name">uint8_t</span> regl <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>reg <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">uint8_t</span> regh <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>reg <span class="token operator">&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">uint8_t</span> <span class="token operator">*</span>write_package <span class="token operator">=</span> <span class="token function">malloc</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>len <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token keyword">sizeof</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memcpy</span> <span class="token punctuation">(</span>write_package<span class="token punctuation">,</span> <span class="token operator">&amp;</span>regh<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memcpy</span> <span class="token punctuation">(</span>write_package <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>regl<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">memcpy</span> <span class="token punctuation">(</span>write_package <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> buf<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>

    err <span class="token operator">=</span> g_i2c_master2<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">write</span> <span class="token punctuation">(</span>g_i2c_master2<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> write_package<span class="token punctuation">,</span> len <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">i2c2_wait_for_tx</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">free</span> <span class="token punctuation">(</span>write_package<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">gt911_read_reg</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> reg<span class="token punctuation">,</span> <span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">,</span> <span class="token class-name">uint8_t</span> len<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>
    <span class="token class-name">uint8_t</span> tmpbuf<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    tmpbuf<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>reg <span class="token operator">&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    tmpbuf<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span> <span class="token punctuation">(</span>reg <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    err <span class="token operator">=</span> g_i2c_master2<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">write</span> <span class="token punctuation">(</span>g_i2c_master2<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> tmpbuf<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">i2c2_wait_for_tx</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    err <span class="token operator">=</span> g_i2c_master2<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">read</span> <span class="token punctuation">(</span>g_i2c_master2<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> len<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">i2c2_wait_for_rx</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_get_max_x</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">gt911_read_reg</span> <span class="token punctuation">(</span>GT911_READ_X_MAX_REG<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_get_max_y</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">gt911_read_reg</span> <span class="token punctuation">(</span>GT911_READ_Y_MAX_REG<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_get_product_id</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">gt911_read_reg</span> <span class="token punctuation">(</span>GT911_PRODUCT_ID_REG<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_get_vendor_id</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">gt911_read_reg</span> <span class="token punctuation">(</span>GT911_VENDOR_ID_REG<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_get_version</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">gt911_read_reg</span> <span class="token punctuation">(</span>GT911_CONFIG_VERSION_REG<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">gt911_get_gstid</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span>buf<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">gt911_read_reg</span> <span class="token punctuation">(</span>GT_GSTID_REG<span class="token punctuation">,</span> buf<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在e2studio中点击打开 <code>01_dshanmcu_ra6m5_i2c_touchpad\\dshanmcu_ra6m5\\drivers\\drv_i2c_touchpad.h</code> 添加下面的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">DRV_I2C_TOUCHPAD_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DRV_I2C_TOUCHPAD_H</span></span>

<span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;hal_data.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Macro definitions
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">TOUCH_POINT_TOTAL</span>           <span class="token expression"><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>     </span><span class="token comment">/* 此芯片最多支持五点触控 */</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Typedef definitions
 **********************************************************************************************************************/</span>
<span class="token keyword">typedef</span> <span class="token keyword">enum</span>
<span class="token punctuation">{</span>
    TP_ROT_NONE <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>
    TP_ROT_90<span class="token punctuation">,</span>
    TP_ROT_180<span class="token punctuation">,</span>
    TP_ROT_270
<span class="token punctuation">}</span> <span class="token class-name">tp_rotation_t</span><span class="token punctuation">;</span>

<span class="token comment">/***********************************************************************************************************************
 * Exported global variables
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Exported global functions (to be accessed by other files)
 **********************************************************************************************************************/</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">drv_i2c_touchpad_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">drv_i2c_touchpad_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">touchpad_set_rotation</span><span class="token punctuation">(</span><span class="token class-name">tp_rotation_t</span> rotation<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">touchpad_is_touched</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">touchpad_get_pos</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> <span class="token operator">*</span>x<span class="token punctuation">,</span> <span class="token class-name">uint16_t</span> <span class="token operator">*</span>y<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/*DRV_I2C_TOUCHPAD_H*/</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-4-编写app" tabindex="-1"><a class="header-anchor" href="#_3-4-编写app" aria-hidden="true">#</a> 3.4 编写app</h2><p>在 <code>01_dshanmcu_ra6m5_i2c_touchpad\\dshanmcu_ra6m5\\applications</code> 目录下新建两个 <code>app_i2c_touchpad_test.c</code> 文件，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-3/chapter-3_012.png" alt="chapter-3_012"></p><p>打开 <code>app_i2c_touchpad_test.c</code> 添加如下代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;app.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_uart.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_i2c_touchpad.h&quot;</span></span>
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
<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">i2c_touchpad_read</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/***********************************************************************************************************************
 * Private global variables
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Functions
 **********************************************************************************************************************/</span>

<span class="token keyword">void</span> <span class="token function">app_i2c_touchpad_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_uart_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span> <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_i2c_touchpad_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span> <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">i2c_touchpad_read</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">i2c_touchpad_read</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>
    <span class="token class-name">uint16_t</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">touchpad_is_touched</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">==</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token comment">//循环读取每个触控点的位置值</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> TOUCH_POINT_TOTAL<span class="token punctuation">;</span> <span class="token operator">++</span>i<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token function">touchpad_get_pos</span> <span class="token punctuation">(</span><span class="token operator">&amp;</span>x<span class="token punctuation">,</span> <span class="token operator">&amp;</span>y<span class="token punctuation">,</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;No: %d, touched x: %d, touched y: %d\\r\\n&quot;</span><span class="token punctuation">,</span> i<span class="token punctuation">,</span> x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/***********************************************************************************************************************
 * Private Functions
 **********************************************************************************************************************/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>app.h</code> 改为如下代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">APP_TEST_H</span></span>
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

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/*APP_TEST_H*/</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-5-调用app" tabindex="-1"><a class="header-anchor" href="#_3-5-调用app" aria-hidden="true">#</a> 3.5 调用app</h2><p>打开 <code>01_dshanmcu_ra6m5_i2c_touchpad\\src\\hal_entry.c</code> ，按照如下步骤进行修改：</p><p>将 <code>hal_entry</code> 函数修改为如下所示的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">hal_entry</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* TODO: add your own code here */</span>
    <span class="token comment">//app_uart_test();</span>
    <span class="token function">app_i2c_touchpad_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">BSP_TZ_SECURE_BUILD</span></span>
    <span class="token comment">/* Enter non-secure code */</span>
    <span class="token function">R_BSP_NonSecureEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-6-验证效果" tabindex="-1"><a class="header-anchor" href="#_3-6-验证效果" aria-hidden="true">#</a> 3.6 验证效果</h2><p>点击编译按钮，再点击 debug 按钮，将程序烧写到开发板中。打开串口工具，在e2stduio点击运行代码，会看到串口工具有信息输出，此时触摸屏幕会将所有触摸点的数值打印出来，串口输出现象：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gt911 vendor <span class="token function">id</span> <span class="token operator">=</span> 00 00 00 00
gt911 product <span class="token function">id</span> <span class="token operator">=</span> <span class="token number">39</span> <span class="token number">31</span> <span class="token number">31</span> 00
version <span class="token operator">=</span> 0x7d
touchpad max x <span class="token operator">=</span> <span class="token number">320</span>
touchpad max y <span class="token operator">=</span> <span class="token number">480</span>
No: <span class="token number">0</span>, touched x: <span class="token number">117</span>, touched y: <span class="token number">447</span>
No: <span class="token number">1</span>, touched x: <span class="token number">0</span>, touched y: <span class="token number">0</span>
No: <span class="token number">2</span>, touched x: <span class="token number">0</span>, touched y: <span class="token number">0</span>
No: <span class="token number">3</span>, touched x: <span class="token number">0</span>, touched y: <span class="token number">0</span>
No: <span class="token number">4</span>, touched x: <span class="token number">0</span>, touched y: <span class="token number">0</span>
No: <span class="token number">0</span>, touched x: <span class="token number">117</span>, touched y: <span class="token number">447</span>
No: <span class="token number">1</span>, touched x: <span class="token number">0</span>, touched y: <span class="token number">0</span>
No: <span class="token number">2</span>, touched x: <span class="token number">0</span>, touched y: <span class="token number">0</span>
No: <span class="token number">3</span>, touched x: <span class="token number">0</span>, touched y: <span class="token number">0</span>
No: <span class="token number">4</span>, touched x: <span class="token number">0</span>, touched y: <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,67),en=n("div",{STYLE:"page-break-after: always;"},null,-1),tn=c(`<h1 id="_4-驱动lcd屏-spi" tabindex="-1"><a class="header-anchor" href="#_4-驱动lcd屏-spi" aria-hidden="true">#</a> 4. 驱动LCD屏(SPI)</h1><p>本次实验我们在上一次实验的基础上驱动 LCD屏(SPI)。</p><p>上次实验我们已经能驱动触摸屏(I2C)并打印触摸点坐标，这次实验我们的目标是点亮LCD屏，向屏幕依次刷写红绿蓝三种不同的颜色，并在串口终端打印当前刷新的颜色文本信息。</p><h2 id="_4-1-复制工程" tabindex="-1"><a class="header-anchor" href="#_4-1-复制工程" aria-hidden="true">#</a> 4.1 复制工程</h2><p>上次实验得出的工程我们可以通过复制在原有的基础上得到一个新的工程。</p><blockquote><p>如果你不清楚复制工程的步骤，请参考阅读第2章实验的步骤教程。</p></blockquote><p>本次实验我们的项目命名为：<strong>02_dshanmcu_ra6m5_spi_display</strong></p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_001.png" alt="chapter-4_001"></p><h2 id="_4-2-配置fsp" tabindex="-1"><a class="header-anchor" href="#_4-2-配置fsp" aria-hidden="true">#</a> 4.2 配置FSP</h2><h3 id="_4-2-1-查看硬件资料" tabindex="-1"><a class="header-anchor" href="#_4-2-1-查看硬件资料" aria-hidden="true">#</a> 4.2.1 查看硬件资料</h3><p>打开位于 <code>03硬件资料\\1_开发板原理图\\ DshanMCU_RA6M5_V4.0.pdf</code> 的开发板原理图，确认SPI引脚，电路图如下：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_002.png" alt="chapter-4_003" style="zoom:80%;"><p>可以看到原理图并没有像之前那样直接就能确定使用的是哪一路spi，因此需要打开位于 <code>03硬件资料\\5_官方资料\\RA6M5 Group User&#39;s Manual Hardware.pdf</code> 的文档，跳转到下图所示的位置，确定使用的是 spi1：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_003.png" alt="chapter-4_003" style="zoom:67%;"><p><code>03硬件资料\\5_官方资料\\RA6M5 Group User&#39;s Manual Hardware.pdf</code> 的文档，跳转到下图所示的位置，确定SPI时钟频率计算公式：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_003-1.png" alt="chapter-4_003-1"></p><p>打开 e2studio 如下窗口，确定当前的 PCLKA： 由下图可知 PCLKA 为 200MHz，因此可得出支持的SPI最大时钟频率为：<code>100/ (2*(0+1) * 2^0) = 100 / 2 = 50Mbps</code></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_003-2.png" alt="chapter-4_003-3" style="zoom:67%;"><p>打开位于 <code>4_模块资料\\01_ST7796显示器芯片手册\\ST7796U2_SPEC_V1.0.pdf</code> 的文档，跳转到下图所示的位置：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_003-3.png" alt="chapter-4_003-3" style="zoom:67%;"><p>通过换算可得出时钟频率： 1000000000 / 15= 66,666,666.66666667 ≈ 66.5Mhz</p><p>接下来我们根据这些信息对 <code>r_spi</code> 进行配置。</p><h3 id="_4-2-2-添加-stacks-r-spi-master" tabindex="-1"><a class="header-anchor" href="#_4-2-2-添加-stacks-r-spi-master" aria-hidden="true">#</a> 4.2.2 添加 Stacks(r_spi_master)</h3><ol><li>打开 <code>FSP Configuration</code> 视图：双击项目文件夹中的 <code>configuration.xml</code> 文件。</li><li>按照下图所示，添加 <code>r_spi</code> 模块：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_004.png" alt="chapter-4_005" style="zoom:67%;"><ol start="3"><li><p>点击刚刚添加的 <code>r_spi</code> 在底部窗口的 <code>Properties</code> 选项卡中对其进行配置，将其配置为与下图一致：</p><ul><li>Name： g_spi1</li><li>Channel： 1</li><li>Callback： spi1_callback</li><li>Bitrate： 50000000</li></ul></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_005.png" alt="chapter-4_006" style="zoom:80%;"><p>配置完成之后，如果马上编译会发现编译出错、可以根据错误信息进行解决，也可以在编译前参考下图解决：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_006.png" alt="chapter-4_007" style="zoom:67%;"><p>点击刚刚添加的 <code>r_dmac</code> 在底部窗口的 <code>Properties</code> 选项卡中对其进行配置，将其配置为与下图一致：</p><ul><li>Name： g_transfer1</li><li>Channel：1</li></ul><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_007.png" alt="chapter-4_008" style="zoom:67%;"><h3 id="_4-2-3-配置rs、reset、pwm引脚" tabindex="-1"><a class="header-anchor" href="#_4-2-3-配置rs、reset、pwm引脚" aria-hidden="true">#</a> 4.2.3 配置RS、RESET、PWM引脚</h3><p>这三个引脚，在上面的原理图中有标注，负责的功能分别是：</p><ul><li>RS引脚(P104)：低电平代表发送的是指令，高电平代表发送的是数据</li><li>RESET引脚(P105)：控制LCD屏的复位</li><li>PWM引脚(P608)：可以自由调节背光亮度调节，给高电平常亮</li></ul><p>根据他们负责的功能特性，在FSP对其进行配置：</p><ol><li>按下图所示操作，打开配置IO引脚页面：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_008.png" alt="chapter-4_009" style="zoom:67%;"><ol start="2"><li>按下图所示操作，配置RS引脚(P104)</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_009.png" alt="chapter-4_010" style="zoom:67%;"><ol start="3"><li>按下图所示操作，配置RESET引脚(P105)</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_010.png" alt="chapter-4_011" style="zoom:67%;"><ol start="4"><li>按下图所示操作，配置PWM引脚(P608)</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_011.png" alt="chapter-4_012" style="zoom:67%;"><p>最后检查确认无误，点击右上角的 <code>“Generate Project Content”</code> e2studio就会根据我们对FSP的配置自动配置项目、生成相应的代码。</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_012.png" alt="chapter-4_012" style="zoom:67%;"><h2 id="_4-3-编写lcd驱动代码" tabindex="-1"><a class="header-anchor" href="#_4-3-编写lcd驱动代码" aria-hidden="true">#</a> 4.3 编写LCD驱动代码</h2><p>在e2studio中进入 <code>02_dshanmcu_ra6m5_spi_display\\dshanmcu_ra6m5\\drivers</code> 目录，新建如下两个文件 <code>drv_spi_display.c</code> 和 <code>drv_spi_display.h</code>：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_013.png" alt="chapter-4_012"></p><p>在e2studio中点击打开 <code>02_dshanmcu_ra6m5_spi_display\\dshanmcu_ra6m5\\drivers\\drv_spi_display.c</code> 添加下面的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_spi_display.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Macro definitions
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LCD_DC_PIN</span>              <span class="token expression">BSP_IO_PORT_01_PIN_04</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LCD_RESET_PIN</span>           <span class="token expression">BSP_IO_PORT_01_PIN_05</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LCD_PWM_PIN</span>             <span class="token expression">BSP_IO_PORT_06_PIN_08</span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SPI_SEND_DATA</span>           <span class="token expression">BSP_IO_LEVEL_HIGH</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">SPI_SEND_CMD</span>            <span class="token expression">BSP_IO_LEVEL_LOW</span></span>

<span class="token comment">/* ST7796S部分寄存器定义 */</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LCD_DISPLAY_CMD_RAMCTRL</span>           <span class="token expression"><span class="token number">0xb0</span> </span><span class="token comment">// RAM Control</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LCD_DISPLAY_CMD_CASET</span>             <span class="token expression"><span class="token number">0x2a</span> </span><span class="token comment">// Column address set</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LCD_DISPLAY_CMD_RASET</span>             <span class="token expression"><span class="token number">0x2b</span> </span><span class="token comment">// Row address set</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LCD_DISPLAY_CMD_RAMWR</span>             <span class="token expression"><span class="token number">0x2c</span> </span><span class="token comment">// Memory write</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Typedef definitions
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Private function prototypes
 **********************************************************************************************************************/</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">spi1_wait_for_tx</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">spi_display_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span> uc_data<span class="token punctuation">,</span> <span class="token class-name">bsp_io_level_t</span> uc_cmd<span class="token punctuation">,</span> <span class="token class-name">uint32_t</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">spi_display_backlight_opt</span><span class="token punctuation">(</span><span class="token class-name">bsp_io_level_t</span> opt<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">spi_display_reset</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/***********************************************************************************************************************
 * Private global variables
 **********************************************************************************************************************/</span>
<span class="token comment">/* Event flags for master */</span>
<span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token class-name">spi_event_t</span> g_master_event_flag<span class="token punctuation">;</span>    <span class="token comment">// Master Transfer Event completion flag</span>

<span class="token comment">/***********************************************************************************************************************
 * Functions
 **********************************************************************************************************************/</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">drv_spi_display_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    <span class="token comment">/* 初始化I2C驱动 */</span>
    err <span class="token operator">=</span> g_spi1<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token operator">&amp;</span>g_spi1_ctrl<span class="token punctuation">,</span> <span class="token operator">&amp;</span>g_spi1_cfg<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">spi_display_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">void</span> <span class="token function">spi_display_set_window</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> x1<span class="token punctuation">,</span> <span class="token class-name">uint16_t</span> y1<span class="token punctuation">,</span> <span class="token class-name">uint16_t</span> x2<span class="token punctuation">,</span> <span class="token class-name">uint16_t</span> y2<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">uint8_t</span> caset<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token class-name">uint8_t</span> raset<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    caset<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span>x1 <span class="token operator">&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xFF</span><span class="token punctuation">;</span>
    caset<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span>x1 <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    caset<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span>x2 <span class="token operator">&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xFF</span><span class="token punctuation">;</span>
    caset<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span>x2 <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span> <span class="token punctuation">;</span>

    raset<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span>y1 <span class="token operator">&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xFF</span><span class="token punctuation">;</span>
    raset<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span>y1 <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    raset<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span>y2 <span class="token operator">&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> <span class="token number">0xFF</span><span class="token punctuation">;</span>
    raset<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span>y2 <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>LCD_DISPLAY_CMD_CASET<span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Horiz</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span>caset<span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>LCD_DISPLAY_CMD_RASET<span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Vert</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span>raset<span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>LCD_DISPLAY_CMD_RAMWR<span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Memory write</span>
<span class="token punctuation">}</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">drv_spi_display_flush_data</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span> data<span class="token punctuation">,</span> <span class="token class-name">uint32_t</span> len<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">void</span> <span class="token function">spi1_callback</span><span class="token punctuation">(</span><span class="token class-name">spi_callback_args_t</span> <span class="token operator">*</span>p_args<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* 判断是否是发送完成触发的中断 */</span>
    <span class="token comment">/* 如果是的话就将发送完成标志位置1 */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>SPI_EVENT_TRANSFER_COMPLETE <span class="token operator">==</span> p_args<span class="token operator">-&gt;</span>event<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        g_master_event_flag <span class="token operator">=</span> SPI_EVENT_TRANSFER_COMPLETE<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">else</span>
    <span class="token punctuation">{</span>
        g_master_event_flag <span class="token operator">=</span> SPI_EVENT_TRANSFER_ABORTED<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/***********************************************************************************************************************
 * Private Functions
 **********************************************************************************************************************/</span>
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">spi1_wait_for_tx</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token operator">!</span>g_master_event_flag<span class="token punctuation">)</span><span class="token punctuation">;</span>
    g_master_event_flag <span class="token operator">=</span> false<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">spi_display_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">spi_display_reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_display_backlight_opt</span><span class="token punctuation">(</span>BSP_IO_LEVEL_HIGH<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// backlight on</span>

    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x11</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x00</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//延时120ms</span>

    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xf0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xc3</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xf0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x96</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x36</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x48</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// RGB</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xb4</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x01</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xb7</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xc6</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xe8</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x40</span><span class="token punctuation">,</span> <span class="token number">0x8A</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0x29</span><span class="token punctuation">,</span> <span class="token number">0x19</span><span class="token punctuation">,</span> <span class="token number">0xA5</span><span class="token punctuation">,</span> <span class="token number">0x33</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xc1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x06</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xc2</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xa7</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xc5</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x18</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xe0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xF0</span><span class="token punctuation">,</span> <span class="token number">0x09</span><span class="token punctuation">,</span> <span class="token number">0x0B</span><span class="token punctuation">,</span> <span class="token number">0x06</span><span class="token punctuation">,</span> <span class="token number">0x04</span><span class="token punctuation">,</span> <span class="token number">0x15</span><span class="token punctuation">,</span> <span class="token number">0x2F</span><span class="token punctuation">,</span> <span class="token number">0x54</span><span class="token punctuation">,</span> <span class="token number">0x42</span><span class="token punctuation">,</span> <span class="token number">0x3C</span><span class="token punctuation">,</span> <span class="token number">0x17</span><span class="token punctuation">,</span> <span class="token number">0x14</span><span class="token punctuation">,</span> <span class="token number">0x18</span><span class="token punctuation">,</span> <span class="token number">0x1B</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xe1</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xF0</span><span class="token punctuation">,</span> <span class="token number">0x09</span><span class="token punctuation">,</span> <span class="token number">0x0B</span><span class="token punctuation">,</span> <span class="token number">0x06</span><span class="token punctuation">,</span> <span class="token number">0x04</span><span class="token punctuation">,</span> <span class="token number">0x03</span><span class="token punctuation">,</span> <span class="token number">0x2D</span><span class="token punctuation">,</span> <span class="token number">0x43</span><span class="token punctuation">,</span> <span class="token number">0x42</span><span class="token punctuation">,</span> <span class="token number">0x3B</span><span class="token punctuation">,</span> <span class="token number">0x16</span><span class="token punctuation">,</span> <span class="token number">0x14</span><span class="token punctuation">,</span> <span class="token number">0x17</span><span class="token punctuation">,</span> <span class="token number">0x1B</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">14</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xf0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x3c</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0xf0</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x69</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x3a</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x55</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span>     <span class="token comment">//延时120ms</span>

    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x29</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">/*rotation*/</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x36</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_CMD<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token number">0x48</span><span class="token punctuation">}</span><span class="token punctuation">,</span> SPI_SEND_DATA<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 0</span>

<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">spi_send_data_cmd</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span> uc_data<span class="token punctuation">,</span> <span class="token class-name">bsp_io_level_t</span> uc_cmd<span class="token punctuation">,</span> <span class="token class-name">uint32_t</span> len<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err <span class="token operator">=</span> FSP_SUCCESS<span class="token punctuation">;</span>     <span class="token comment">// Error status</span>

    <span class="token comment">/* Master send data to device */</span>
    err <span class="token operator">=</span> g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinWrite</span><span class="token punctuation">(</span>g_ioport<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> LCD_DC_PIN<span class="token punctuation">,</span> uc_cmd<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    err <span class="token operator">=</span> g_spi1<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">write</span><span class="token punctuation">(</span>g_spi1<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> uc_data<span class="token punctuation">,</span> len<span class="token punctuation">,</span> SPI_BIT_WIDTH_8_BITS<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> err<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">spi1_wait_for_tx</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">spi_display_backlight_opt</span><span class="token punctuation">(</span><span class="token class-name">bsp_io_level_t</span> opt<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err <span class="token operator">=</span> FSP_SUCCESS<span class="token punctuation">;</span>     <span class="token comment">// Error status</span>

    g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinWrite</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ioport_ctrl_t</span> <span class="token operator">*</span> <span class="token keyword">const</span> <span class="token punctuation">)</span><span class="token operator">&amp;</span>g_ioport<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> LCD_PWM_PIN<span class="token punctuation">,</span> opt<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token keyword">static</span> <span class="token class-name">fsp_err_t</span> <span class="token function">spi_display_reset</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err <span class="token operator">=</span> FSP_SUCCESS<span class="token punctuation">;</span>     <span class="token comment">// Error status</span>

    g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinWrite</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ioport_ctrl_t</span> <span class="token operator">*</span> <span class="token keyword">const</span> <span class="token punctuation">)</span><span class="token operator">&amp;</span>g_ioport<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> LCD_RESET_PIN<span class="token punctuation">,</span> BSP_IO_LEVEL_LOW<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//延时120ms</span>
    g_ioport<span class="token punctuation">.</span>p_api<span class="token operator">-&gt;</span><span class="token function">pinWrite</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">ioport_ctrl_t</span> <span class="token operator">*</span> <span class="token keyword">const</span> <span class="token punctuation">)</span><span class="token operator">&amp;</span>g_ioport<span class="token punctuation">.</span>p_ctrl<span class="token punctuation">,</span> LCD_RESET_PIN<span class="token punctuation">,</span> BSP_IO_LEVEL_HIGH<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">120</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//延时120ms</span>

    <span class="token keyword">return</span> err<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在e2studio中点击打开 <code>02_dshanmcu_ra6m5_spi_display\\dshanmcu_ra6m5\\drivers\\drv_spi_display.h</code> 添加下面的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">DRV_SPI_DISPLAY_H</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DRV_SPI_DISPLAY_H</span></span>

<span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;hal_data.h&quot;</span></span>

<span class="token comment">/**********************************************************************************************************************
 * Macro definitions
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LCD_SCREEN_WIDTH</span>        <span class="token expression"><span class="token punctuation">(</span><span class="token number">320</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LCD_SCREEN_HEIGHT</span>       <span class="token expression"><span class="token punctuation">(</span><span class="token number">480</span><span class="token punctuation">)</span></span></span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LCD_COLOR_RED</span>           <span class="token expression"><span class="token punctuation">(</span><span class="token number">0xF800</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LCD_COLOR_GREEN</span>         <span class="token expression"><span class="token punctuation">(</span><span class="token number">0x07E0</span><span class="token punctuation">)</span></span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LCD_COLOR_BLUE</span>          <span class="token expression"><span class="token punctuation">(</span><span class="token number">0x001F</span><span class="token punctuation">)</span></span></span>

<span class="token comment">/**********************************************************************************************************************
 * Typedef definitions
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Exported global variables
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Exported global functions (to be accessed by other files)
 **********************************************************************************************************************/</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">drv_spi_display_init</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">void</span> <span class="token function">spi_display_set_window</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> x1<span class="token punctuation">,</span> <span class="token class-name">uint16_t</span> y1<span class="token punctuation">,</span> <span class="token class-name">uint16_t</span> x2<span class="token punctuation">,</span> <span class="token class-name">uint16_t</span> y2<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name">fsp_err_t</span> <span class="token function">drv_spi_display_flush_data</span><span class="token punctuation">(</span><span class="token class-name">uint8_t</span> <span class="token operator">*</span> data<span class="token punctuation">,</span> <span class="token class-name">uint32_t</span> len<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/*DRV_SPI_DISPLAY_H*/</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>src\\hal_entry.c</code> 文件中的 <strong>hal_entry()</strong> 函数代码改为如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">hal_entry</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* TODO: add your own code here */</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_uart_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span> <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_spi_display_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">drv_spi_display_test</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span><span class="token punctuation">)</span>LCD_COLOR_RED<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;Full screen display in red\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//延时500ms</span>

        <span class="token function">drv_spi_display_test</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span><span class="token punctuation">)</span>LCD_COLOR_GREEN<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;Full screen display in green\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//延时500ms</span>

        <span class="token function">drv_spi_display_test</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span><span class="token punctuation">)</span>LCD_COLOR_BLUE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;Full screen display in blue\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//延时500ms</span>
    <span class="token punctuation">}</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">BSP_TZ_SECURE_BUILD</span></span>
    <span class="token comment">/* Enter non-secure code */</span>
    <span class="token function">R_BSP_NonSecureEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-4-编写app" tabindex="-1"><a class="header-anchor" href="#_4-4-编写app" aria-hidden="true">#</a> 4.4 编写app</h2><p>在 <code>02_dshanmcu_ra6m5_spi_display\\dshanmcu_ra6m5\\applications</code> 目录下新建 <code>app_spi_display_test.c</code> 文件，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-4/chapter-4_014.png" alt="chapter-4_014"></p><p>打开 <code>app_spi_display_test.c</code> 添加如下代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***********************************************************************************************************************
 * Includes
 **********************************************************************************************************************/</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;app.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_uart.h&quot;</span></span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&quot;drv_spi_display.h&quot;</span></span>
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
<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">spi_display_show_color</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> color_le<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">/***********************************************************************************************************************
 * Private global variables
 **********************************************************************************************************************/</span>

<span class="token comment">/***********************************************************************************************************************
 * Functions
 **********************************************************************************************************************/</span>
<span class="token keyword">void</span> <span class="token function">app_spi_display_test</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">fsp_err_t</span> err<span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_uart_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span> <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    err <span class="token operator">=</span> <span class="token function">drv_spi_display_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>FSP_SUCCESS <span class="token operator">!=</span> err<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;%s %d\\r\\n&quot;</span><span class="token punctuation">,</span> __FUNCTION__<span class="token punctuation">,</span> <span class="token constant">__LINE__</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">__BKPT</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">while</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token function">spi_display_show_color</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span><span class="token punctuation">)</span>LCD_COLOR_RED<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;Full screen display in red\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//延时500ms</span>

        <span class="token function">spi_display_show_color</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span><span class="token punctuation">)</span>LCD_COLOR_GREEN<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;Full screen display in green\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//延时500ms</span>

        <span class="token function">spi_display_show_color</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span><span class="token punctuation">)</span>LCD_COLOR_BLUE<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">printf</span> <span class="token punctuation">(</span><span class="token string">&quot;Full screen display in blue\\r\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">R_BSP_SoftwareDelay</span><span class="token punctuation">(</span><span class="token number">500</span><span class="token punctuation">,</span> BSP_DELAY_UNITS_MILLISECONDS<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//延时500ms</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>


<span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">spi_display_show_color</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> color_le<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name">uint8_t</span> color_be<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    color_be <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">(</span>color_le <span class="token operator">&amp;</span> <span class="token number">0xff00</span><span class="token punctuation">)</span> <span class="token operator">&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    color_be <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">uint8_t</span><span class="token punctuation">)</span><span class="token punctuation">(</span>color_le <span class="token operator">&amp;</span> <span class="token number">0xff</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token function">spi_display_set_window</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> LCD_SCREEN_WIDTH<span class="token punctuation">,</span> LCD_SCREEN_HEIGHT<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> x <span class="token operator">&lt;</span> LCD_SCREEN_WIDTH<span class="token punctuation">;</span> x<span class="token operator">++</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token class-name">uint16_t</span> y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> y <span class="token operator">&lt;</span> LCD_SCREEN_HEIGHT<span class="token punctuation">;</span> y<span class="token operator">++</span><span class="token punctuation">)</span>
            <span class="token function">drv_spi_display_flush_data</span><span class="token punctuation">(</span>color_be<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">/***********************************************************************************************************************
 * Private Functions
 **********************************************************************************************************************/</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将 <code>app.h</code> 改为如下代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">ifndef</span> <span class="token expression">APP_TEST_H</span></span>
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

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span> <span class="token comment">/*APP_TEST_H*/</span></span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-5-调用app" tabindex="-1"><a class="header-anchor" href="#_4-5-调用app" aria-hidden="true">#</a> 4.5 调用app</h2><p>打开 <code>02_dshanmcu_ra6m5_spi_display\\src\\hal_entry.c</code> ，按照如下步骤进行修改：</p><p>将 <code>hal_entry</code> 函数修改为如下所示的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token keyword">void</span> <span class="token function">hal_entry</span><span class="token punctuation">(</span><span class="token keyword">void</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token comment">/* TODO: add your own code here */</span>
    <span class="token comment">//app_uart_test();</span>
    <span class="token comment">//app_i2c_touchpad_test();</span>
    <span class="token function">app_spi_display_test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression">BSP_TZ_SECURE_BUILD</span></span>
    <span class="token comment">/* Enter non-secure code */</span>
    <span class="token function">R_BSP_NonSecureEnter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">endif</span></span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-6-验证效果" tabindex="-1"><a class="header-anchor" href="#_4-6-验证效果" aria-hidden="true">#</a> 4.6 验证效果</h2><p>点击编译按钮，再点击 debug 按钮，将程序烧写到开发板中。会看到屏幕依次循环刷红、绿、蓝三种颜色。</p><hr>`,69),pn=n("div",{STYLE:"page-break-after: always;"},null,-1),cn=c(`<h1 id="_5-添加lvgl库-对接显示和触摸驱动" tabindex="-1"><a class="header-anchor" href="#_5-添加lvgl库-对接显示和触摸驱动" aria-hidden="true">#</a> 5. 添加LVGL库，对接显示和触摸驱动</h1><p>本次实验我们会融合前面实验的成果，添加LVGL库，对接显示和触摸驱动，让屏幕能显示UI、能触摸操作。</p><h2 id="_5-1-复制工程" tabindex="-1"><a class="header-anchor" href="#_5-1-复制工程" aria-hidden="true">#</a> 5.1 复制工程</h2><p>上次实验得出的工程我们可以通过复制在原有的基础上得到一个新的工程。</p><blockquote><p>如果你不清楚复制工程的步骤，请参考阅读第2章实验的步骤教程。</p></blockquote><p>本次实验我们的项目命名为：<strong>03_dshanmcu_ra6m5_lvgl_display_touchpad</strong></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_001.png" alt="chapter-5_001" style="zoom:80%;"><h2 id="_5-2-创建代码文件" tabindex="-1"><a class="header-anchor" href="#_5-2-创建代码文件" aria-hidden="true">#</a> 5.2 创建代码文件</h2><h3 id="_5-2-1-添加lvgl库" tabindex="-1"><a class="header-anchor" href="#_5-2-1-添加lvgl库" aria-hidden="true">#</a> 5.2.1 添加lvgl库</h3><p>在 <strong>windows的文件资源管理</strong> 中将资料包中的压缩包 <code>2_配套源码\\02_LVGL培训示例代码\\lvgl-8.3.8.zip</code> 解压到 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\Middlewares</code> 目录，并将解压出来的目录重命名为 lvgl，如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_002.png" alt="chapter-5_002" style="zoom:67%;"><p>打开 e2stduio 可以看到自动同步了文件夹，点开 <code>lvgl</code> 文件夹可以看到里面的内容，如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_003.png" alt="chapter-5_003" style="zoom:80%;"><h3 id="_5-2-1-添加lvgl配置文件" tabindex="-1"><a class="header-anchor" href="#_5-2-1-添加lvgl配置文件" aria-hidden="true">#</a> 5.2.1 添加lvgl配置文件</h3><p>lvgl本身内置有一个名为 <strong>lv_conf_template.h</strong> 的配置文件，对于lvgl的一些基础配置，功能裁剪都是在这里进行修改，但是这个是包含在lvgl中的文件我们不能直接对其进行修改，并且其名称后缀 <strong>_template</strong> 也表明这是一个模板，我们通过阅读lvgl库根目录下的 <code>README_zh.md</code> 文件，可知需要将其复制到与 lvgl 同级目录中，具体操作如下：</p><p>将 <code>lvgl</code> 文件夹中的 <strong>lv_conf_template.h</strong> 文件复制到上一级目录，即复制到 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\Middlewares</code> 目录下，并将其重命名为 <strong>lv_conf.h</strong> （也就是将 _template 后缀去掉），如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_004.png" alt="chapter-5_004" style="zoom:80%;"><h3 id="_5-2-2-添加lvgl显示输出、控制输入驱动接口文件" tabindex="-1"><a class="header-anchor" href="#_5-2-2-添加lvgl显示输出、控制输入驱动接口文件" aria-hidden="true">#</a> 5.2.2 添加lvgl显示输出、控制输入驱动接口文件</h3><p>显示、输入设备驱动的对接，lvgl也有对应的模板文件，我们可以将其复制到自定义位置，但是不能直接在lvgl库进行修改，具体操作如下：</p><p>将 <code>lvgl\\examples\\porting</code> 中的 <strong>lv_port_disp_template.c</strong>、 <strong>lv_port_disp_template.h</strong>、<strong>lv_port_indev_template.c</strong>、<strong>lv_port_indev_template.h</strong> 复制 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\drivers</code> 目录中，并重命名去掉 <strong>_template</strong> 后缀，操作如下所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_005.png" alt="chapter-5_005" style="zoom:80%;"><h3 id="_5-2-3-新建app-lvgl-test-c" tabindex="-1"><a class="header-anchor" href="#_5-2-3-新建app-lvgl-test-c" aria-hidden="true">#</a> 5.2.3 新建app_lvgl_test.c</h3><p>在 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\applications</code> 目录下新建名为 <code>app_lvgl_test.c</code> 文件，如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_006.png" alt="chapter-5_006" style="zoom:80%;"><h2 id="_5-3-修改接口文件对接驱动" tabindex="-1"><a class="header-anchor" href="#_5-3-修改接口文件对接驱动" aria-hidden="true">#</a> 5.3 修改接口文件对接驱动</h2><h3 id="_5-3-1-修改lvgl配置文件" tabindex="-1"><a class="header-anchor" href="#_5-3-1-修改lvgl配置文件" aria-hidden="true">#</a> 5.3.1 修改lvgl配置文件</h3><p>打开 <code>03_dshanmcu_ra6m5_lvgl_display_touchpad\\dshanmcu_ra6m5\\Middlewares\\lv_conf.h</code> 文件，下面对其进行修改适配我们的工程：</p><ol><li>修改第 15 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">if</span> <span class="token expression"><span class="token number">1</span> </span><span class="token comment">/*Set it to &quot;1&quot; to enable content*/</span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_014.png" alt="chapter-5_014" style="zoom:80%;"><p>按照上图配置之后再次点击编译，会发现编译警告都没有了，并且编译花费的时间也大大提高：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-5/chapter-5_015.png" alt="chapter-5_015" style="zoom:80%;"><h2 id="_5-7-验证效果" tabindex="-1"><a class="header-anchor" href="#_5-7-验证效果" aria-hidden="true">#</a> 5.7 验证效果</h2><p>点击编译按钮，再点击 debug 按钮，将程序烧写到开发板中。会看到屏幕亮起一个漂亮的UI界面，并且可以通过点击触摸屏进行交互。</p><hr>`,115),on=n("div",{STYLE:"page-break-after: always;"},null,-1),ln=c(`<h1 id="_6-驱动ec11旋转编码器-gpio" tabindex="-1"><a class="header-anchor" href="#_6-驱动ec11旋转编码器-gpio" aria-hidden="true">#</a> 6. 驱动EC11旋转编码器(GPIO)</h1><p>本次实验我们驱动EC11旋转编码器。</p><h2 id="_6-1-复制工程" tabindex="-1"><a class="header-anchor" href="#_6-1-复制工程" aria-hidden="true">#</a> 6.1 复制工程</h2><p>上次实验得出的工程我们可以通过复制在原有的基础上得到一个新的工程。</p><blockquote><p>如果你不清楚复制工程的步骤，请参考阅读第三章实验的步骤教程。</p></blockquote><p>本次实验我们的项目命名为：<strong>04_dshanmcu_ra6m5_ec11_encoder</strong></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_001.png" alt="chapter-6_001" style="zoom:80%;"><h2 id="_6-2-配置fsp" tabindex="-1"><a class="header-anchor" href="#_6-2-配置fsp" aria-hidden="true">#</a> 6.2 配置FSP</h2><h3 id="_6-2-1-查看硬件资料" tabindex="-1"><a class="header-anchor" href="#_6-2-1-查看硬件资料" aria-hidden="true">#</a> 6.2.1 查看硬件资料</h3><p>驱动EC11旋转编码器，驱动原理：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_001-1.png" alt="chapter-6_001-1"></p><p>需要用到 <strong>3个GPIO</strong>，我们实验使用的引脚是：</p><ul><li>S1 &lt;-----&gt; P202</li><li>S2 &lt;-----&gt; P203</li><li>KEY &lt;-----&gt; P205</li></ul><p>这三个引脚对应开发板上的这三个引脚，引脚位置及接线，如下图所示：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_002.png" alt="chapter-6_002" style="zoom:80%;"><p>打开位于 <code>03硬件资料\\\\5_官方资料\\RA6M5 Group User&#39;s Manual Hardware.pdf</code> 的文档，跳转到下图所示的位置：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_003.png" alt="chapter-6_003" style="zoom:67%;"><p>根据上图中列表的内容，可以得出以下对应关系：</p><ul><li>KEY &lt;-----&gt; P205 (IRQ1)</li><li>S1 &lt;-----&gt; P202 (IRQ2)</li><li>S2 &lt;-----&gt; P203 (IRQ3)</li></ul><p>接下来根据以上信息，在 e2stduio 中对 <code>r_icu</code> 进行配置。</p><h3 id="_6-2-2-添加-stacks-r-icu" tabindex="-1"><a class="header-anchor" href="#_6-2-2-添加-stacks-r-icu" aria-hidden="true">#</a> 6.2.2 添加 Stacks(r_icu)</h3><ol><li>打开 <code>FSP Configuration</code> 视图：双击项目文件夹中的 <code>configuration.xml</code> 文件。</li><li>按照下图所示，添加 <strong>3个</strong> <code>r_icu</code> 模块：</li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_004.png" alt="chapter-6_004" style="zoom:80%;"><ol start="3"><li><p>点击刚刚添加的第一个 <code>r_icu</code> 在底部窗口的 <code>Properties</code> 选项卡中对其进行配置，将其配置为与下图一致：</p><ul><li>Name： g_external_irq1_key</li><li>Channel： 1</li><li>Callback： external_irq1_key_callback</li></ul></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_005.png" alt="chapter-6_005" style="zoom:80%;"><ol start="4"><li><p>点击刚刚添加的第一个 <code>r_icu</code> 在底部窗口的 <code>Properties</code> 选项卡中对其进行配置，将其配置为与下图一致：</p><ul><li>Name： g_external_irq2_s2</li><li>Channel： 2</li><li>Callback： external_irq2_s2_callback</li></ul></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_006.png" alt="chapter-6_006" style="zoom:80%;"><ol start="5"><li><p>点击刚刚添加的第一个 <code>r_icu</code> 在底部窗口的 <code>Properties</code> 选项卡中对其进行配置，将其配置为与下图一致：</p><ul><li>Name： g_external_irq3_s1</li><li>Channel： 3</li><li>Callback： external_irq3_s1_callback</li></ul></li></ol><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_007.png" alt="chapter-6_007" style="zoom:80%;"><p>最后检查确认无误，点击右上角的 <code>“Generate Project Content”</code> e2studio就会根据我们对FSP的配置自动配置项目、生成相应的代码。</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_008.png" alt="chapter-6_008" style="zoom:80%;"><h2 id="_6-3-编写ec11驱动代码" tabindex="-1"><a class="header-anchor" href="#_6-3-编写ec11驱动代码" aria-hidden="true">#</a> 6.3 编写EC11驱动代码</h2><p>在e2studio中进入 <code>04_dshanmcu_ra6m5_ec11_encoder\\dshanmcu_ra6m5\\drivers</code> 目录，新建如下两个文件 <code>drv_gpio_ec11.c</code> 和 <code>drv_gpio_ec11.h</code>：</p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-6/chapter-6_009.png" alt="chapter-6_009" style="zoom:80%;"><p>在e2studio中点击打开 <code>04_dshanmcu_ra6m5_ec11_encoder\\dshanmcu_ra6m5\\drivers\\drv_gpio_ec11.c</code> 添加下面的代码：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token comment">/***********************************************************************************************************************
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,52),un=n("div",{STYLE:"page-break-after: always;"},null,-1),rn=c(`<h1 id="_7-lvgl对接ec11旋转编码器驱动" tabindex="-1"><a class="header-anchor" href="#_7-lvgl对接ec11旋转编码器驱动" aria-hidden="true">#</a> 7. LVGL对接EC11旋转编码器驱动</h1><p>本次实验我们向LVGL库中对接EC11旋转编码器驱动，让我们能通过EC11旋转编码器操作UI。</p><h2 id="_7-1-复制工程" tabindex="-1"><a class="header-anchor" href="#_7-1-复制工程" aria-hidden="true">#</a> 7.1 复制工程</h2><p>上次实验得出的工程我们可以通过复制在原有的基础上得到一个新的工程。</p><blockquote><p>如果你不清楚复制工程的步骤，请参考阅读第三章实验的步骤教程。</p></blockquote><p>本次实验我们的项目命名为：<strong>05_dshanmcu_ra6m5_lvgl_display_touchpad_encoder</strong></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-7/chapter-7_001.png" alt="chapter-7_001" style="zoom:80%;"><h2 id="_7-2-对接驱动" tabindex="-1"><a class="header-anchor" href="#_7-2-对接驱动" aria-hidden="true">#</a> 7.2 对接驱动</h2><p>打开 <code>05_dshanmcu_ra6m5_lvgl_display_touchpad_encoder\\dshanmcu_ra6m5\\drivers\\drv_gpio_ec11.c</code> 文件，做如下修改：</p><p>将第 9 行的代码改为如下：</p><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">DRV_GPIO_EC11_USE_LVGL</span>  <span class="token expression"><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-4-验证效果" tabindex="-1"><a class="header-anchor" href="#_7-4-验证效果" aria-hidden="true">#</a> 7.4 验证效果</h2><p>点击编译按钮，再点击 debug 按钮，将程序烧写到开发板中。操作EC11编码器(左转、右转、按下)会看到UI也会跟着变化。</p><hr>`,26),dn=n("div",{STYLE:"page-break-after: always;"},null,-1),kn=c(`<h1 id="_8-lvgl对接串口打印" tabindex="-1"><a class="header-anchor" href="#_8-lvgl对接串口打印" aria-hidden="true">#</a> 8. LVGL对接串口打印</h1><p>本次实验我们为LVGL库对接串口的打印功能。</p><h2 id="_8-1-复制工程" tabindex="-1"><a class="header-anchor" href="#_8-1-复制工程" aria-hidden="true">#</a> 8.1 复制工程</h2><p>上次实验得出的工程我们可以通过复制在原有的基础上得到一个新的工程。</p><blockquote><p>如果你不清楚复制工程的步骤，请参考阅读第三章实验的步骤教程。</p></blockquote><p>本次实验我们的项目命名为：<strong>06_dshanmcu_ra6m5_lvgl_display_touchpad_encoder_log</strong></p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/lvgl_port_special_tutorial/chapter-8/chapter-8_001.png" alt="chapter-8_001" style="zoom:80%;"><h2 id="_8-2-修改lvgl配置文件" tabindex="-1"><a class="header-anchor" href="#_8-2-修改lvgl配置文件" aria-hidden="true">#</a> 8.2 修改lvgl配置文件</h2><p>打开 <code>06_dshanmcu_ra6m5_lvgl_display_touchpad_encoder_log\\dshanmcu_ra6m5\\Middlewares\\lv_conf.h</code> 文件，下面对其进行修改适配我们的串口打印驱动：</p><ol><li>修改第 233 行为：</li></ol><div class="language-c line-numbers-mode" data-ext="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">define</span> <span class="token macro-name">LV_USE_LOG</span> <span class="token expression"><span class="token number">1</span></span></span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>`,20),vn=n("div",{STYLE:"page-break-after: always;"},null,-1),mn=n("img",{src:"http://photos.100ask.net/renesas-docs/wechat_official_account_renesas-mcu.jpg",alt:"wechat_official_account_renesas-mcu",style:{zoom:"33%"}},null,-1),_n=n("img",{src:"http://photos.100ask.net/renesas-docs/wechat_official_account_100ask.jpg",alt:"wechat_official_account_100ask",style:{zoom:"33%"}},null,-1);function bn(hn,gn){const e=o("ExternalLinkIcon"),t=o("center");return l(),u("div",null,[d,k,v,m,_,b,n("ul",null,[n("li",null,[s("瑞萨电子官网： "),n("a",h,[s("https://www.renesas.cn"),a(e)])]),n("li",null,[s("瑞萨 RA MCU 生态社区： "),n("a",g,[s("https://www.ramcu.cn"),a(e)])]),n("li",null,[s("DShanMCU-RA6M5技术交流QQ群： "),n("a",f,[s("881706770"),a(e)])]),n("li",null,[s("DShanMCU-RA6M5开发板配套资料： "),n("a",y,[s("http://download.100ask.net/boards/Renesas/DShanMCU-RA6M5/index.html"),a(e)])]),n("li",null,[s("DShanMCU-RA6M5开发板购买链接： "),n("a",w,[s("https://100ask.taobao.com"),a(e)])]),n("li",null,[s("百问网在线学习平台： "),n("a",S,[s("https://www.100ask.net"),a(e)])]),n("li",null,[s("百问网bilibili： "),n("a",x,[s("https://space.bilibili.com/275908810"),a(e)])]),n("li",null,[s("百问网技术交流社区： "),n("a",E,[s("https://forums.100ask.net"),a(e)])])]),C,P,n("p",null,[s("本文档所有用到的资料获取页面： "),n("a",D,[s("http://download.100ask.net/boards/Renesas/DShanMCU-RA6M5/index.html"),a(e)])]),R,M,n("ul",null,[n("li",null,[s("Renesas官网获取："),n("a",T,[s("https://www.renesas.cn/cn/zh/software-tool/e2studio-information-ra-family"),a(e)])]),n("li",null,[s("Renesas官方仓库获取"),n("a",I,[s("https://github.com/renesas/fsp/releases"),a(e)])])]),A,U,n("table",null,[N,n("tbody",null,[n("tr",null,[n("td",L,[n("a",q,[s("DShanMCU-RA6M5开发板"),a(e)])]),O]),G,F,B,z,V,H])]),n("blockquote",null,[n("p",null,[s("DShanMCU-RA6M5开发板购买链接： "),n("a",Y,[s("https://item.taobao.com/item.htm?id=728461040949"),a(e)])])]),K,n("ul",null,[j,n("li",null,[s("最后，如果仍未解决问题，请在社区留言： "),n("a",W,[s("https://forums.100ask.net/c/renesas/ra6m5/78"),a(e)])])]),X,a(t,null,{default:p(()=>[s("本节完")]),_:1}),Z,Q,n("p",null,[s("本次实验我们通过创建一个简单的工程，在其基础上完成串口打印功能，从而熟悉"),n("a",$,[s(" e2stduio"),a(e)]),s("（Renesas MCU的一个基于Eclipse的集成开发环境（IDE）)）和"),n("a",J,[s("FSP"),a(e)]),s("（灵活配置软件包）开发环境。在实验中我们的会比较详细地学习了解，如何在e2studio中对我们的硬件资源进行配置，如何在自己编写代码调用FSP帮我们配置好的 HAL 驱动程序，最终完成我们的任务需求。")]),nn,a(t,null,{default:p(()=>[s("本节完")]),_:1}),sn,an,a(t,null,{default:p(()=>[s("本节完")]),_:1}),en,tn,a(t,null,{default:p(()=>[s("本节完")]),_:1}),pn,cn,a(t,null,{default:p(()=>[s("本节完")]),_:1}),on,ln,a(t,null,{default:p(()=>[s("本节完")]),_:1}),un,rn,a(t,null,{default:p(()=>[s("本节完")]),_:1}),dn,kn,a(t,null,{default:p(()=>[s("本节完")]),_:1}),vn,mn,a(t,null,{default:p(()=>[s("瑞萨MCU小百科微信公众号")]),_:1}),_n,a(t,null,{default:p(()=>[s("深圳百问网微信公众号")]),_:1})])}const yn=i(r,[["render",bn],["__file","lvgl_port_special_tutorial-all.html.vue"]]);export{yn as default};
