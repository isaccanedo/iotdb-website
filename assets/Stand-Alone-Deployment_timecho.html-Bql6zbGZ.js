import{_ as d,c as r,d as e,e as n,a,w as l,b as i,r as o,o as c}from"./app-BHE9oQwv.js";const p={},g={start:"6"};function h(m,t){const s=o("RouteLink");return c(),r("div",null,[t[7]||(t[7]=e("h1",{id:"单机版部署",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#单机版部署"},[e("span",null,"单机版部署")])],-1)),t[8]||(t[8]=e("p",null,"本章将介绍如何启动IoTDB单机实例，IoTDB单机实例包括 1 个ConfigNode 和1个DataNode（即通常所说的1C1D）。",-1)),t[9]||(t[9]=e("h2",{id:"注意事项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#注意事项"},[e("span",null,"注意事项")])],-1)),e("ol",null,[e("li",null,[e("p",null,[t[1]||(t[1]=n("安装前请确认系统已参照")),a(s,{to:"/zh/UserGuide/latest/Deployment-and-Maintenance/Environment-Requirements.html"},{default:l(()=>t[0]||(t[0]=[n("系统配置")])),_:1}),t[2]||(t[2]=n("准备完成。"))])]),t[3]||(t[3]=i(`<li><p>部署时推荐优先使用<code>hostname</code>进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服务器上配置/etc/hosts，如本机ip是192.168.1.3，hostname是iotdb-1，则可以使用以下命令设置服务器的 hostname，并使用hostname配置IoTDB的<code>cn_internal_address</code>、dn_internal_address、dn_rpc_address。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;192.168.1.3  iotdb-1&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>部分参数首次启动后不能修改，请参考下方的【参数配置】章节进行设置</p></li><li><p>无论是在linux还是windows中，请确保IoTDB的安装路径中不含空格和中文，避免软件运行异常。</p></li><li><p>请注意，安装部署（包括激活和使用软件）IoTDB时需要保持使用同一个用户进行操作，您可以：</p></li>`,4))]),t[10]||(t[10]=e("ul",null,[e("li",null,"使用 root 用户（推荐）：使用 root 用户可以避免权限等问题。"),e("li",null,[n("使用固定的非 root 用户： "),e("ul",null,[e("li",null,"使用同一用户操作：确保在启动、激活、停止等操作均保持使用同一用户，不要切换用户。"),e("li",null,"避免使用 sudo：尽量避免使用 sudo 命令，因为它会以 root 用户权限执行命令，可能会引起权限混淆或安全问题。")])])],-1)),e("ol",g,[e("li",null,[t[5]||(t[5]=n("推荐部署监控面板，可以对重要运行指标进行监控，随时掌握数据库运行状态，监控面板可以联系商务获取，部署监控面板步骤可以参考：")),a(s,{to:"/zh/UserGuide/latest/Deployment-and-Maintenance/Monitoring-panel-deployment.html"},{default:l(()=>t[4]||(t[4]=[n("监控面板部署")])),_:1}),t[6]||(t[6]=n("。"))])]),t[11]||(t[11]=i(`<h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h2><h3 id="解压安装包并进入安装目录" tabindex="-1"><a class="header-anchor" href="#解压安装包并进入安装目录"><span>解压安装包并进入安装目录</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">unzip</span>  iotdb-enterprise-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>-bin.zip</span>
<span class="line"><span class="token builtin class-name">cd</span>  iotdb-enterprise-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>-bin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数配置" tabindex="-1"><a class="header-anchor" href="#参数配置"><span>参数配置</span></a></h3><h4 id="环境脚本配置" tabindex="-1"><a class="header-anchor" href="#环境脚本配置"><span>环境脚本配置</span></a></h4><ul><li>./conf/confignode-env.sh（./conf/confignode-env.bat）配置</li></ul><table><thead><tr><th style="text-align:center;"><strong>配置项</strong></th><th style="text-align:center;"><strong>说明</strong></th><th style="text-align:center;"><strong>默认值</strong></th><th style="text-align:center;"><strong>推荐值</strong></th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">MEMORY_SIZE</td><td style="text-align:center;">IoTDB ConfigNode节点可以使用的内存总量</td><td style="text-align:center;">空</td><td style="text-align:center;">可按需填写，填写后系统会根据填写的数值来分配内存</td><td style="text-align:center;">重启服务生效</td></tr></tbody></table><ul><li>./conf/datanode-env.sh（./conf/datanode-env.bat）配置</li></ul><table><thead><tr><th style="text-align:center;"><strong>配置项</strong></th><th style="text-align:center;"><strong>说明</strong></th><th style="text-align:center;"><strong>默认值</strong></th><th style="text-align:center;"><strong>推荐值</strong></th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">MEMORY_SIZE</td><td style="text-align:center;">IoTDB DataNode节点可以使用的内存总量</td><td style="text-align:center;">空</td><td style="text-align:center;">可按需填写，填写后系统会根据填写的数值来分配内存</td><td style="text-align:center;">重启服务生效</td></tr></tbody></table><h4 id="系统通用配置" tabindex="-1"><a class="header-anchor" href="#系统通用配置"><span>系统通用配置</span></a></h4><p>打开通用配置文件（./conf/iotdb-system.properties 文件），设置以下参数：</p><table><thead><tr><th style="text-align:center;"><strong>配置项</strong></th><th style="text-align:center;"><strong>说明</strong></th><th style="text-align:center;"><strong>默认值</strong></th><th style="text-align:center;"><strong>推荐值</strong></th><th style="text-align:center;">备注</th></tr></thead><tbody><tr><td style="text-align:center;">cluster_name</td><td style="text-align:center;">集群名称</td><td style="text-align:center;">defaultCluster</td><td style="text-align:center;">可根据需要设置集群名称，如无特殊需要保持默认即可</td><td style="text-align:center;">首次启动后不可修改</td></tr><tr><td style="text-align:center;">schema_replication_factor</td><td style="text-align:center;">元数据副本数，单机版此处设置为 1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">默认1，首次启动后不可修改</td></tr><tr><td style="text-align:center;">data_replication_factor</td><td style="text-align:center;">数据副本数，单机版此处设置为 1</td><td style="text-align:center;">1</td><td style="text-align:center;">1</td><td style="text-align:center;">默认1，首次启动后不可修改</td></tr></tbody></table><h4 id="confignode配置" tabindex="-1"><a class="header-anchor" href="#confignode配置"><span>ConfigNode配置</span></a></h4><p>打开ConfigNode配置文件（./conf/iotdb-system.properties文件），设置以下参数：</p><table><thead><tr><th style="text-align:center;"><strong>配置项</strong></th><th style="text-align:center;"><strong>说明</strong></th><th style="text-align:center;"><strong>默认</strong></th><th style="text-align:center;">推荐值</th><th style="text-align:center;"><strong>备注</strong></th></tr></thead><tbody><tr><td style="text-align:center;">cn_internal_address</td><td style="text-align:center;">ConfigNode在集群内部通讯使用的地址</td><td style="text-align:center;">127.0.0.1</td><td style="text-align:center;">所在服务器的IPV4地址或hostname，推荐使用hostname</td><td style="text-align:center;">首次启动后不能修改</td></tr><tr><td style="text-align:center;">cn_internal_port</td><td style="text-align:center;">ConfigNode在集群内部通讯使用的端口</td><td style="text-align:center;">10710</td><td style="text-align:center;">10710</td><td style="text-align:center;">首次启动后不能修改</td></tr><tr><td style="text-align:center;">cn_consensus_port</td><td style="text-align:center;">ConfigNode副本组共识协议通信使用的端口</td><td style="text-align:center;">10720</td><td style="text-align:center;">10720</td><td style="text-align:center;">首次启动后不能修改</td></tr><tr><td style="text-align:center;">cn_seed_config_node</td><td style="text-align:center;">节点注册加入集群时连接的ConfigNode 的地址，cn_internal_address:cn_internal_port</td><td style="text-align:center;">127.0.0.1:10710</td><td style="text-align:center;">cn_internal_address:cn_internal_port</td><td style="text-align:center;">首次启动后不能修改</td></tr></tbody></table><h4 id="datanode-配置" tabindex="-1"><a class="header-anchor" href="#datanode-配置"><span>DataNode 配置</span></a></h4><p>打开DataNode配置文件 ./conf/iotdb-system.properties，设置以下参数：</p><table><thead><tr><th style="text-align:left;"><strong>配置项</strong></th><th style="text-align:left;"><strong>说明</strong></th><th style="text-align:left;"><strong>默认</strong></th><th style="text-align:left;">推荐值</th><th style="text-align:left;"><strong>备注</strong></th></tr></thead><tbody><tr><td style="text-align:left;">dn_rpc_address</td><td style="text-align:left;">客户端 RPC 服务的地址</td><td style="text-align:left;">0.0.0.0</td><td style="text-align:left;">所在服务器的IPV4地址或hostname，推荐使用hostname</td><td style="text-align:left;">重启服务生效</td></tr><tr><td style="text-align:left;">dn_rpc_port</td><td style="text-align:left;">客户端 RPC 服务的端口</td><td style="text-align:left;">6667</td><td style="text-align:left;">6667</td><td style="text-align:left;">重启服务生效</td></tr><tr><td style="text-align:left;">dn_internal_address</td><td style="text-align:left;">DataNode在集群内部通讯使用的地址</td><td style="text-align:left;">127.0.0.1</td><td style="text-align:left;">所在服务器的IPV4地址或hostname，推荐使用hostname</td><td style="text-align:left;">首次启动后不能修改</td></tr><tr><td style="text-align:left;">dn_internal_port</td><td style="text-align:left;">DataNode在集群内部通信使用的端口</td><td style="text-align:left;">10730</td><td style="text-align:left;">10730</td><td style="text-align:left;">首次启动后不能修改</td></tr><tr><td style="text-align:left;">dn_mpp_data_exchange_port</td><td style="text-align:left;">DataNode用于接收数据流使用的端口</td><td style="text-align:left;">10740</td><td style="text-align:left;">10740</td><td style="text-align:left;">首次启动后不能修改</td></tr><tr><td style="text-align:left;">dn_data_region_consensus_port</td><td style="text-align:left;">DataNode用于数据副本共识协议通信使用的端口</td><td style="text-align:left;">10750</td><td style="text-align:left;">10750</td><td style="text-align:left;">首次启动后不能修改</td></tr><tr><td style="text-align:left;">dn_schema_region_consensus_port</td><td style="text-align:left;">DataNode用于元数据副本共识协议通信使用的端口</td><td style="text-align:left;">10760</td><td style="text-align:left;">10760</td><td style="text-align:left;">首次启动后不能修改</td></tr><tr><td style="text-align:left;">dn_seed_config_node</td><td style="text-align:left;">节点注册加入集群时连接的ConfigNode地址,即cn_internal_address:cn_internal_port</td><td style="text-align:left;">127.0.0.1:10710</td><td style="text-align:left;">cn_internal_address:cn_internal_port</td><td style="text-align:left;">首次启动后不能修改</td></tr></tbody></table><blockquote><p>❗️注意：VSCode Remote等编辑器无自动保存配置功能，请确保修改的文件被持久化保存，否则配置项无法生效</p></blockquote><h3 id="启动-confignode-节点" tabindex="-1"><a class="header-anchor" href="#启动-confignode-节点"><span>启动 ConfigNode 节点</span></a></h3><p>进入iotdb的sbin目录下，启动confignode</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./start-confignode.sh    <span class="token parameter variable">-d</span>      <span class="token comment">#“-d”参数将在后台进行启动 </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果启动失败，请参考<a href="#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">常见问题</a>。</p><h3 id="激活数据库" tabindex="-1"><a class="header-anchor" href="#激活数据库"><span>激活数据库</span></a></h3><h4 id="方式一-激活文件拷贝激活" tabindex="-1"><a class="header-anchor" href="#方式一-激活文件拷贝激活"><span>方式一：激活文件拷贝激活</span></a></h4><ul><li>启动confignode节点后，进入activation文件夹, 将 system_info文件复制给天谋工作人员</li><li>收到工作人员返回的 license文件</li><li>将license文件放入对应节点的activation文件夹下；</li></ul><h4 id="方式二-激活脚本激活" tabindex="-1"><a class="header-anchor" href="#方式二-激活脚本激活"><span>方式二：激活脚本激活</span></a></h4><ul><li>获取激活所需机器码，进入安装目录的sbin目录，执行激活脚本:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"> <span class="token builtin class-name">cd</span> sbin</span>
<span class="line">./start-activate.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示如下信息，请将机器码（即该串字符）复制给天谋工作人员：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Please copy the system_info&#39;s content and send it to Timecho:</span>
<span class="line">01-KU5LDFFN-PNBEHDRH</span>
<span class="line">Please enter license:</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>将工作人员返回的激活码输入上一步的命令行提示处 <code>Please enter license:</code>，如下提示：</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">Please enter license:</span>
<span class="line">Jw+MmF+AtexsfgNGOFgTm83BgXbq0zT1+fOfPvQsLlj6ZsooHFU6HycUSEGC78eT1g67KPvkcLCUIsz2QpbyVmPLr9x1+kVjBubZPYlVpsGYLqLFc8kgpb5vIrPLd3hGLbJ5Ks8fV1WOVrDDVQq89YF2atQa2EaB9EAeTWd0bRMZ+s9ffjc/1Zmh9NSP/T3VCfJcJQyi7YpXWy5nMtcW0gSV+S6fS5r7a96PjbtE0zXNjnEhqgRzdU+mfO8gVuUNaIy9l375cp1GLpeCh6m6pF+APW1CiXLTSijK9Qh3nsL5bAOXNeob5l+HO5fEMgzrW8OJPh26Vl6ljKUpCvpTiw<span class="token operator">==</span></span>
<span class="line">License has been stored to sbin/<span class="token punctuation">..</span>/activation/license</span>
<span class="line">Import completed. Please start cluster and excute <span class="token string">&#39;show cluster&#39;</span> to verify activation status</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动datanode-节点" tabindex="-1"><a class="header-anchor" href="#启动datanode-节点"><span>启动DataNode 节点</span></a></h3><p>进入iotdb的sbin目录下，启动datanode：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">cd</span> sbin</span>
<span class="line">./start-datanode.sh   <span class="token parameter variable">-d</span>   <span class="token comment">#-d参数将在后台进行启动 </span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证部署" tabindex="-1"><a class="header-anchor" href="#验证部署"><span>验证部署</span></a></h3><p>可直接执行 ./sbin 目录下的 Cli 启动脚本：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./start-cli.sh  <span class="token parameter variable">-h</span>  ip<span class="token punctuation">(</span>本机ip或域名<span class="token punctuation">)</span>  <span class="token parameter variable">-p</span>  端口号<span class="token punctuation">(</span><span class="token number">6667</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>成功启动后，出现如下界面显示IOTDB安装成功。</p><figure><img src="https://alioss.timecho.com/docs/img/启动成功.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>出现安装成功界面后，继续看下是否激活成功，使用<code>show cluster</code>命令</p><p>当看到最右侧显示ACTIVATED表示激活成功</p><figure><img src="https://alioss.timecho.com/docs/img/show cluster.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>出现<code>ACTIVATED(W)</code>为被动激活，表示此ConfigNode没有license文件（或没有签发时间戳最新的license文件）。此时建议检查license文件是否已放入license文件夹，没有请放入license文件，若已存在license文件，可能是此节点license文件与其他节点信息不一致导致，请联系天谋工作人员重新申请.</p></blockquote><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><ol><li><p>部署过程中多次提示激活失败</p><ul><li>使用 <code>ls -al</code> 命令：使用 <code>ls -al</code> 命令检查安装包根目录的所有者信息是否为当前用户。</li><li>检查激活目录：检查 <code>./activation</code> 目录下的所有文件，所有者信息是否为当前用户。</li></ul></li><li><p>Confignode节点启动失败</p><p>步骤 1: 请查看启动日志，检查是否修改了某些首次启动后不可改的参数。</p><p>步骤 2: 请查看启动日志，检查是否出现其他异常。日志中若存在异常现象，请联系天谋技术支持人员咨询解决方案。</p><p>步骤 3: 如果是首次部署或者数据可删除，也可按下述步骤清理环境，重新部署后，再次启动。</p><p>清理环境：</p><ol><li>结束所有 ConfigNode 和 DataNode 进程。</li></ol><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"> # 1. 停止 ConfigNode 和 DataNode 服务</span>
<span class="line"> sbin/stop-standalone.sh</span>
<span class="line"></span>
<span class="line"> # 2. 检查是否还有进程残留</span>
<span class="line"> jps</span>
<span class="line"> # 或者</span>
<span class="line"> ps -ef|gerp iotdb</span>
<span class="line"></span>
<span class="line"> # 3. 如果有进程残留，则手动kill</span>
<span class="line"> kill -9 &lt;pid&gt;</span>
<span class="line"> # 如果确定机器上仅有1个iotdb，可以使用下面命令清理残留进程</span>
<span class="line"> ps -ef|grep iotdb|grep -v grep|tr -s &#39;  &#39; &#39; &#39; |cut -d &#39; &#39; -f2|xargs kill -9</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>删除 data 和 logs 目录。</li></ol><p>说明：删除 data 目录是必要的，删除 logs 目录是为了纯净日志，非必需。</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"> cd /data/iotdb</span>
<span class="line"> rm -rf data logs</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,47))])}const y=d(p,[["render",h],["__file","Stand-Alone-Deployment_timecho.html.vue"]]),b=JSON.parse('{"path":"/zh/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_timecho.html","title":"单机版部署","lang":"zh-CN","frontmatter":{"description":"单机版部署 本章将介绍如何启动IoTDB单机实例，IoTDB单机实例包括 1 个ConfigNode 和1个DataNode（即通常所说的1C1D）。 注意事项 安装前请确认系统已参照准备完成。 部署时推荐优先使用hostname进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服务器上配置/etc/hosts...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"单机版部署"}],["meta",{"property":"og:description","content":"单机版部署 本章将介绍如何启动IoTDB单机实例，IoTDB单机实例包括 1 个ConfigNode 和1个DataNode（即通常所说的1C1D）。 注意事项 安装前请确认系统已参照准备完成。 部署时推荐优先使用hostname进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服务器上配置/etc/hosts..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%90%AF%E5%8A%A8%E6%88%90%E5%8A%9F.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-13T03:50:44.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-13T03:50:44.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"单机版部署\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%90%AF%E5%8A%A8%E6%88%90%E5%8A%9F.png\\",\\"https://alioss.timecho.com/docs/img/show%20cluster.png\\"],\\"dateModified\\":\\"2024-11-13T03:50:44.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[{"level":3,"title":"解压安装包并进入安装目录","slug":"解压安装包并进入安装目录","link":"#解压安装包并进入安装目录","children":[]},{"level":3,"title":"参数配置","slug":"参数配置","link":"#参数配置","children":[]},{"level":3,"title":"启动 ConfigNode 节点","slug":"启动-confignode-节点","link":"#启动-confignode-节点","children":[]},{"level":3,"title":"激活数据库","slug":"激活数据库","link":"#激活数据库","children":[]},{"level":3,"title":"启动DataNode 节点","slug":"启动datanode-节点","link":"#启动datanode-节点","children":[]},{"level":3,"title":"验证部署","slug":"验证部署","link":"#验证部署","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"git":{"createdTime":1718979523000,"updatedTime":1731469844000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":5},{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":4},{"name":"石林松","email":"50943998+shi10lin0s@users.noreply.github.com","commits":2},{"name":"shuwenwei","email":"55970239+shuwenwei@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":7.18,"words":2155},"filePathRelative":"zh/UserGuide/latest/Deployment-and-Maintenance/Stand-Alone-Deployment_timecho.md","localizedDate":"2024年6月21日","autoDesc":true}');export{y as comp,b as data};
