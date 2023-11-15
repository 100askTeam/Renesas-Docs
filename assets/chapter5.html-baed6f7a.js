import{_ as s,r as o,o as t,c as n,d as a,w as c,b as p,e as d,a as r}from"./app-a98b8345.js";const _={},h=d('<h1 id="_5-配置pyocd-windows" tabindex="-1"><a class="header-anchor" href="#_5-配置pyocd-windows" aria-hidden="true">#</a> 5. 配置PYOCD(Windows)</h1><p>在windows系统上配置好PYOCD之后才可以在e2stduio上使用，因此我们要先在windows系统中配置好PYOCD，下面是配置步骤。</p><p>在文件管理器中打开 <code>C盘</code> ，新建 <code>100ASK_PYOCD</code> 目录，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/e2studio_use_dap/DShanMCU-RA6M5-DAP-013.png" alt="DShanMCU-RA6M5-DAP-013"></p><p>进入新建的 <code>100ASK_PYOCD</code> 目录，将资料包位于 <code>6_使用软件/PYOCD/</code> 的 <strong>pyocd.yaml</strong> 和 <strong>MDK_Device_Packs_v4.5.0.zip</strong> 复制到刚刚新建位于C盘的 <code>100ASK_PYOCD</code> 目录中，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/e2studio_use_dap/DShanMCU-RA6M5-DAP-014.png" alt="DShanMCU-RA6M5-DAP-014"></p><p>使用解压缩工具解压 <strong>MDK_Device_Packs_v4.5.0.zip</strong> 得到 <strong>Renesas.RA_DFP.4.5.0.pack</strong></p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/e2studio_use_dap/DShanMCU-RA6M5-DAP-015.png" alt="DShanMCU-RA6M5-DAP-015"></p><p>继续使用解压缩工具解压 <strong>Renesas.RA_DFP.4.5.0.pack</strong> ，得到 <code>Renesas.RA_DFP.4.5.0</code> 文件夹：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/e2studio_use_dap/DShanMCU-RA6M5-DAP-016.png" alt="DShanMCU-RA6M5-DAP-016"></p><p>将文件夹 <code>Renesas.RA_DFP.4.5.0</code> <strong>重命名</strong> 为 <code>Renesas.RA_DFP</code>：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/e2studio_use_dap/DShanMCU-RA6M5-DAP-017.png" alt="DShanMCU-RA6M5-DAP-017"></p><p>安装位于资料包的 <code>6_使用软件/Everything-1.4.1.1024.x64-Setup.exe</code> ,安装之后打开 <code>Everything</code>，按照下图<strong>输入搜索</strong> <code>pyocd</code></p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/e2studio_use_dap/DShanMCU-RA6M5-DAP-018.png" alt="DShanMCU-RA6M5-DAP-018"></p><p>在上面的搜索结果中，我们重点关注 <code>pyocd.exe</code> 与 <code>pyocd-gdbserver.exe</code>，这两者的目录都是一样的，位于：<code>C:\\Users\\biubiu\\AppData\\Roaming\\Python\\Python311\\Scripts</code> 不同电脑不同系统都可能会不一样，以自己实际得出的为准。请将这个路径要记下来，后面还需要用到一次。</p><p>按下键盘的 <strong>win+r</strong> 键，在屏幕左下角会弹出一个小窗口，在其输入框中输入 <code>cmd</code> 之后按下回车键进入windows命令行窗口，在窗口中输入 <strong>C:\\Users\\biubiu\\AppData\\Roaming\\Python\\Python311\\Scripts\\pyocd.exe list --targets --config C:\\100ASK_PYOCD\\pyocd.yaml</strong> 按下回车键执行，如下图所示：</p><p><img src="http://photos.100ask.net/renesas-docs/DShanMCU_RA6M5/e2studio_use_dap/DShanMCU-RA6M5-DAP-019.png" alt="DShanMCU-RA6M5-DAP-019"></p><p>到这里，配置PYOCD(Windows)已完成！</p>',18),D=r("div",{STYLE:"page-break-after: always;"},null,-1);function i(A,M){const e=o("center");return t(),n("div",null,[h,a(e,null,{default:c(()=>[p("本节完")]),_:1}),D])}const C=s(_,[["render",i],["__file","chapter5.html.vue"]]);export{C as default};
