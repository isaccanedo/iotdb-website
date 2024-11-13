import{_ as i,c as o,b as d,d as e,e as n,a as s,w as l,r,o as p}from"./app-BHE9oQwv.js";const c={};function h(g,t){const a=r("RouteLink");return p(),o("div",null,[t[10]||(t[10]=d('<h1 id="集群版部署" tabindex="-1"><a class="header-anchor" href="#集群版部署"><span>集群版部署</span></a></h1><p>本小节将以IoTDB经典集群部署架构3C3D（3个ConfigNode和3个DataNode）为例，介绍如何部署集群，即通常所说的3C3D集群。3C3D集群架构图如下：</p><div align="center"><img src="https://alioss.timecho.com/docs/img/集群部署.png" alt="" style="width:60%;"></div><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2>',4)),e("ol",null,[e("li",null,[e("p",null,[t[1]||(t[1]=n("安装前请确认系统已参照")),s(a,{to:"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Environment-Requirements.html"},{default:l(()=>t[0]||(t[0]=[n("系统配置")])),_:1}),t[2]||(t[2]=n("准备完成。"))])]),t[3]||(t[3]=d(`<li><p>部署时推荐优先使用<code>hostname</code>进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服务器上配置/etc/hosts，如本机ip是192.168.1.3，hostname是iotdb-1，则可以使用以下命令设置服务器的 hostname，并使用hostname配置IoTDB的<code>cn_internal_address</code>、<code>dn_internal_address</code>。</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;192.168.1.3  iotdb-1&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/hosts </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>有些参数首次启动后不能修改，请参考下方的&quot;参数配置&quot;章节来进行设置。</p></li><li><p>无论是在linux还是windows中，请确保IoTDB的安装路径中不含空格和中文，避免软件运行异常。</p></li><li><p>请注意，安装部署IoTDB时需要保持使用同一个用户进行操作，您可以：</p></li>`,4))]),t[11]||(t[11]=e("ul",null,[e("li",null,"使用 root 用户（推荐）：使用 root 用户可以避免权限等问题。"),e("li",null,[n("使用固定的非 root 用户： "),e("ul",null,[e("li",null,"使用同一用户操作：确保在启动、停止等操作均保持使用同一用户，不要切换用户。"),e("li",null,"避免使用 sudo：尽量避免使用 sudo 命令，因为它会以 root 用户权限执行命令，可能会引起权限混淆或安全问题。")])])],-1)),t[12]||(t[12]=e("h2",{id:"准备步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#准备步骤"},[e("span",null,"准备步骤")])],-1)),e("ol",null,[e("li",null,[e("p",null,[t[5]||(t[5]=n("准备IoTDB数据库安装包 ：apache-iotdb-{version}-all-bin.zip（安装包获取见：")),s(a,{to:"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/IoTDB-Package_apache.html"},{default:l(()=>t[4]||(t[4]=[n("链接")])),_:1}),t[6]||(t[6]=n("）"))])]),e("li",null,[e("p",null,[t[8]||(t[8]=n("按环境要求配置好操作系统环境（系统环境配置见：")),s(a,{to:"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Environment-Requirements.html"},{default:l(()=>t[7]||(t[7]=[n("链接")])),_:1}),t[9]||(t[9]=n("）"))])])]),t[13]||(t[13]=d(`<h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h2><p>假设现在有3台linux服务器，IP地址和服务角色分配如下：</p><table><thead><tr><th>节点ip</th><th>主机名</th><th>服务</th></tr></thead><tbody><tr><td>192.168.1.3</td><td>iotdb-1</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.4</td><td>iotdb-2</td><td>ConfigNode、DataNode</td></tr><tr><td>192.168.1.5</td><td>iotdb-3</td><td>ConfigNode、DataNode</td></tr></tbody></table><h3 id="设置主机名" tabindex="-1"><a class="header-anchor" href="#设置主机名"><span>设置主机名</span></a></h3><p>在3台机器上分别配置主机名，设置主机名需要在目标服务器上配置<code>/etc/hosts</code>，使用如下命令：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">echo &quot;192.168.1.3  iotdb-1&quot;  &gt;&gt; /etc/hosts</span>
<span class="line">echo &quot;192.168.1.4  iotdb-2&quot;  &gt;&gt; /etc/hosts</span>
<span class="line">echo &quot;192.168.1.5  iotdb-3&quot;  &gt;&gt; /etc/hosts </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数配置" tabindex="-1"><a class="header-anchor" href="#参数配置"><span>参数配置</span></a></h3><p>解压安装包并进入安装目录</p><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">unzip  apache-iotdb-{version}-all-bin.zip </span>
<span class="line">cd  apache-iotdb-{version}-all-bin</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="环境脚本配置" tabindex="-1"><a class="header-anchor" href="#环境脚本配置"><span>环境脚本配置</span></a></h4><ul><li><p><code>./conf/confignode-env.sh</code> 配置</p><table><thead><tr><th style="text-align:left;"><strong>配置项</strong></th><th style="text-align:left;"><strong>说明</strong></th><th style="text-align:left;"><strong>默认值</strong></th><th style="text-align:left;"><strong>推荐值</strong></th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">MEMORY_SIZE</td><td style="text-align:left;">IoTDB ConfigNode节点可以使用的内存总量</td><td style="text-align:left;">空</td><td style="text-align:left;">可按需填写，填写后系统会根据填写的数值来分配内存</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table></li><li><p><code>./conf/datanode-env.sh</code> 配置</p><table><thead><tr><th style="text-align:left;"><strong>配置项</strong></th><th style="text-align:left;"><strong>说明</strong></th><th style="text-align:left;"><strong>默认值</strong></th><th style="text-align:left;"><strong>推荐值</strong></th><th style="text-align:left;">备注</th></tr></thead><tbody><tr><td style="text-align:left;">MEMORY_SIZE</td><td style="text-align:left;">IoTDB DataNode节点可以使用的内存总量</td><td style="text-align:left;">空</td><td style="text-align:left;">可按需填写，填写后系统会根据填写的数值来分配内存</td><td style="text-align:left;">重启服务生效</td></tr></tbody></table></li></ul><h4 id="通用配置" tabindex="-1"><a class="header-anchor" href="#通用配置"><span>通用配置</span></a></h4><p>打开通用配置文件<code>./conf/iotdb-common.properties</code>，可根据部署方式设置以下参数：</p><table><thead><tr><th>配置项</th><th>说明</th><th>192.168.1.3</th><th>192.168.1.4</th><th>192.168.1.5</th></tr></thead><tbody><tr><td>cluster_name</td><td>集群名称</td><td>defaultCluster</td><td>defaultCluster</td><td>defaultCluster</td></tr><tr><td>schema_replication_factor</td><td>元数据副本数，DataNode数量不应少于此数目</td><td>3</td><td>3</td><td>3</td></tr><tr><td>data_replication_factor</td><td>数据副本数，DataNode数量不应少于此数目</td><td>2</td><td>2</td><td>2</td></tr></tbody></table><h4 id="confignode-配置" tabindex="-1"><a class="header-anchor" href="#confignode-配置"><span>ConfigNode 配置</span></a></h4><p>打开ConfigNode配置文件<code>./conf/iotdb-confignode.properties</code>，设置以下参数</p><table><thead><tr><th>配置项</th><th>说明</th><th>默认</th><th>推荐值</th><th>192.168.1.3</th><th>192.168.1.4</th><th>192.168.1.5</th><th>备注</th></tr></thead><tbody><tr><td>cn_internal_address</td><td>ConfigNode在集群内部通讯使用的地址</td><td>127.0.0.1</td><td>所在服务器的IPV4地址或hostname，推荐使用hostname</td><td>iotdb-1</td><td>iotdb-2</td><td>iotdb-3</td><td>首次启动后不能修改</td></tr><tr><td>cn_internal_port</td><td>ConfigNode在集群内部通讯使用的端口</td><td>10710</td><td>10710</td><td>10710</td><td>10710</td><td>10710</td><td>首次启动后不能修改</td></tr><tr><td>cn_consensus_port</td><td>ConfigNode副本组共识协议通信使用的端口</td><td>10720</td><td>10720</td><td>10720</td><td>10720</td><td>10720</td><td>首次启动后不能修改</td></tr><tr><td>cn_seed_config_node</td><td>节点注册加入集群时连接的ConfigNode 的地址，cn_internal_address:cn_internal_port</td><td>127.0.0.1:10710</td><td>第一个CongfigNode的cn_internal_address:cn_internal_port</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>首次启动后不能修改</td></tr></tbody></table><h4 id="datanode-配置" tabindex="-1"><a class="header-anchor" href="#datanode-配置"><span>DataNode 配置</span></a></h4><p>打开DataNode配置文件 <code>./conf/iotdb-datanode.properties</code>，设置以下参数：</p><table><thead><tr><th>配置项</th><th>说明</th><th>默认</th><th>推荐值</th><th>192.168.1.3</th><th>192.168.1.4</th><th>192.168.1.5</th><th>备注</th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>客户端 RPC 服务的地址</td><td>127.0.0.1</td><td>推荐使用所在服务器的<strong>IPV4地址或hostname</strong></td><td>iotdb-1</td><td>iotdb-2</td><td>iotdb-3</td><td>重启服务生效</td></tr><tr><td>dn_rpc_port</td><td>客户端 RPC 服务的端口</td><td>6667</td><td>6667</td><td>6667</td><td>6667</td><td>6667</td><td>重启服务生效</td></tr><tr><td>dn_internal_address</td><td>DataNode在集群内部通讯使用的地址</td><td>127.0.0.1</td><td>所在服务器的IPV4地址或hostname，推荐使用hostname</td><td>iotdb-1</td><td>iotdb-2</td><td>iotdb-3</td><td>首次启动后不能修改</td></tr><tr><td>dn_internal_port</td><td>DataNode在集群内部通信使用的端口</td><td>10730</td><td>10730</td><td>10730</td><td>10730</td><td>10730</td><td>首次启动后不能修改</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>DataNode用于接收数据流使用的端口</td><td>10740</td><td>10740</td><td>10740</td><td>10740</td><td>10740</td><td>首次启动后不能修改</td></tr><tr><td>dn_data_region_consensus_port</td><td>DataNode用于数据副本共识协议通信使用的端口</td><td>10750</td><td>10750</td><td>10750</td><td>10750</td><td>10750</td><td>首次启动后不能修改</td></tr><tr><td>dn_schema_region_consensus_port</td><td>DataNode用于元数据副本共识协议通信使用的端口</td><td>10760</td><td>10760</td><td>10760</td><td>10760</td><td>10760</td><td>首次启动后不能修改</td></tr><tr><td>dn_seed_config_node</td><td>节点注册加入集群时连接的ConfigNode地址,即cn_internal_address:cn_internal_port</td><td>127.0.0.1:10710</td><td>第一个CongfigNode的cn_internal_address:cn_internal_port</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>iotdb-1:10710</td><td>首次启动后不能修改</td></tr></tbody></table><blockquote><p>❗️注意：VSCode Remote等编辑器无自动保存配置功能，请确保修改的文件被持久化保存，否则配置项无法生效</p></blockquote><h3 id="启动confignode节点" tabindex="-1"><a class="header-anchor" href="#启动confignode节点"><span>启动ConfigNode节点</span></a></h3><p>先启动第一个iotdb-1的confignode, 保证种子confignode节点先启动，然后依次启动第2和第3个confignode节点</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">cd sbin</span>
<span class="line">./start-confignode.sh    -d      #“-d”参数将在后台进行启动 </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>如果启动失败，请参考<a href="#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98">常见问题</a>。</p><h3 id="启动datanode-节点" tabindex="-1"><a class="header-anchor" href="#启动datanode-节点"><span>启动DataNode 节点</span></a></h3><p>分别进入iotdb的<code>sbin</code>目录下，依次启动3个datanode节点：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">cd sbin</span>
<span class="line">./start-datanode.sh   -d   # “-d”参数将在后台进行启动  </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="验证部署" tabindex="-1"><a class="header-anchor" href="#验证部署"><span>验证部署</span></a></h3><p>可直接执行<code>./sbin</code>目录下的Cli启动脚本：</p><div class="language-Plain line-numbers-mode" data-highlighter="prismjs" data-ext="Plain" data-title="Plain"><pre><code><span class="line">./start-cli.sh  -h  ip(本机ip或域名)  -p  端口号(6667)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>成功启动后，出现如下界面显示IOTDB安装成功。</p><figure><img src="https://alioss.timecho.com/docs/img/开源成功.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>​ 可以使用<code>show cluster</code> 命令查看集群信息：</p><figure><img src="https://alioss.timecho.com/docs/img/开源版 show cluter.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><blockquote><p>出现<code>ACTIVATED(W)</code>为被动激活，表示此ConfigNode没有license文件（或没有签发时间戳最新的license文件），其激活依赖于集群中其它Activate状态的ConfigNode。此时建议检查license文件是否已放入license文件夹，没有请放入license文件，若已存在license文件，可能是此节点license文件与其他节点信息不一致导致，请联系天谋工作人员重新申请.</p></blockquote><h2 id="节点维护步骤" tabindex="-1"><a class="header-anchor" href="#节点维护步骤"><span>节点维护步骤</span></a></h2><h3 id="confignode节点维护" tabindex="-1"><a class="header-anchor" href="#confignode节点维护"><span>ConfigNode节点维护</span></a></h3><p>ConfigNode节点维护分为ConfigNode添加和移除两种操作，有两个常见使用场景：</p><ul><li>集群扩展：如集群中只有1个ConfigNode时，希望增加ConfigNode以提升ConfigNode节点高可用性，则可以添加2个ConfigNode，使得集群中有3个ConfigNode。</li><li>集群故障恢复：1个ConfigNode所在机器发生故障，使得该ConfigNode无法正常运行，此时可以移除该ConfigNode，然后添加一个新的ConfigNode进入集群。</li></ul><blockquote><p>❗️注意，在完成ConfigNode节点维护后，需要保证集群中有1或者3个正常运行的ConfigNode。2个ConfigNode不具备高可用性，超过3个ConfigNode会导致性能损失。</p></blockquote><h4 id="添加confignode节点" tabindex="-1"><a class="header-anchor" href="#添加confignode节点"><span>添加ConfigNode节点</span></a></h4><p>脚本命令：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># Linux / MacOS</span></span>
<span class="line"><span class="token comment"># 首先切换到IoTDB根目录</span></span>
<span class="line">sbin/start-confignode.sh</span>
<span class="line"></span>
<span class="line"><span class="token comment"># Windows</span></span>
<span class="line"><span class="token comment"># 首先切换到IoTDB根目录</span></span>
<span class="line">sbin/start-confignode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数介绍：</p><table><thead><tr><th style="text-align:left;">参数</th><th style="text-align:left;">描述</th><th style="text-align:left;">是否为必填项</th></tr></thead><tbody><tr><td style="text-align:left;">-v</td><td style="text-align:left;">显示版本信息</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-f</td><td style="text-align:left;">在前台运行脚本，不将其放到后台</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-d</td><td style="text-align:left;">以守护进程模式启动，即在后台运行</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">指定一个文件来存放进程ID，用于进程管理</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-c</td><td style="text-align:left;">指定配置文件夹的路径，脚本会从这里加载配置文件</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-g</td><td style="text-align:left;">打印垃圾回收（GC）的详细信息</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-H</td><td style="text-align:left;">指定Java堆转储文件的路径，当JVM内存溢出时使用</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-E</td><td style="text-align:left;">指定JVM错误日志文件的路径</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-D</td><td style="text-align:left;">定义系统属性，格式为 key=value</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-X</td><td style="text-align:left;">直接传递 -XX 参数给 JVM</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-h</td><td style="text-align:left;">帮助指令</td><td style="text-align:left;">否</td></tr></tbody></table><h4 id="移除confignode节点" tabindex="-1"><a class="header-anchor" href="#移除confignode节点"><span>移除ConfigNode节点</span></a></h4><p>首先通过CLI连接集群，通过<code>show confignodes</code>确认想要移除ConfigNode的内部地址与端口号：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">IoTDB&gt; show confignodes</span>
<span class="line">+------+-------+---------------+------------+--------+</span>
<span class="line">|NodeID| Status|InternalAddress|InternalPort|    Role|</span>
<span class="line">+------+-------+---------------+------------+--------+</span>
<span class="line">|     0|Running|      127.0.0.1|       10710|  Leader|</span>
<span class="line">|     1|Running|      127.0.0.1|       10711|Follower|</span>
<span class="line">|     2|Running|      127.0.0.1|       10712|Follower|</span>
<span class="line">+------+-------+---------------+------------+--------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.030s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用脚本将DataNode移除。脚本命令：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Linux / MacOS </span>
<span class="line">sbin/remove-confignode.sh [confignode_id]</span>
<span class="line">或</span>
<span class="line">./sbin/remove-confignode.sh [cn_internal_address:cn_internal_port]</span>
<span class="line"></span>
<span class="line">#Windows</span>
<span class="line">sbin/remove-confignode.bat [confignode_id]</span>
<span class="line">或</span>
<span class="line">./sbin/remove-confignode.bat [cn_internal_address:cn_internal_port]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="datanode节点维护" tabindex="-1"><a class="header-anchor" href="#datanode节点维护"><span>DataNode节点维护</span></a></h3><p>DataNode节点维护有两个常见场景：</p><ul><li>集群扩容：出于集群能力扩容等目的，添加新的DataNode进入集群</li><li>集群故障恢复：一个DataNode所在机器出现故障，使得该DataNode无法正常运行，此时可以移除该DataNode，并添加新的DataNode进入集群</li></ul><blockquote><p>❗️注意，为了使集群能正常工作，在DataNode节点维护过程中以及维护完成后，正常运行的DataNode总数不得少于数据副本数（通常为2），也不得少于元数据副本数（通常为3）。</p></blockquote><h4 id="添加datanode节点" tabindex="-1"><a class="header-anchor" href="#添加datanode节点"><span>添加DataNode节点</span></a></h4><p>脚本命令：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Linux / MacOS </span>
<span class="line"># 首先切换到IoTDB根目录</span>
<span class="line">sbin/start-datanode.sh</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line"># 首先切换到IoTDB根目录</span>
<span class="line">sbin/start-datanode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数介绍：</p><table><thead><tr><th style="text-align:left;">缩写</th><th style="text-align:left;">描述</th><th style="text-align:left;">是否为必填项</th></tr></thead><tbody><tr><td style="text-align:left;">-v</td><td style="text-align:left;">显示版本信息</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-f</td><td style="text-align:left;">在前台运行脚本，不将其放到后台</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-d</td><td style="text-align:left;">以守护进程模式启动，即在后台运行</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-p</td><td style="text-align:left;">指定一个文件来存放进程ID，用于进程管理</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-c</td><td style="text-align:left;">指定配置文件夹的路径，脚本会从这里加载配置文件</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-g</td><td style="text-align:left;">打印垃圾回收（GC）的详细信息</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-H</td><td style="text-align:left;">指定Java堆转储文件的路径，当JVM内存溢出时使用</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-E</td><td style="text-align:left;">指定JVM错误日志文件的路径</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-D</td><td style="text-align:left;">定义系统属性，格式为 key=value</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-X</td><td style="text-align:left;">直接传递 -XX 参数给 JVM</td><td style="text-align:left;">否</td></tr><tr><td style="text-align:left;">-h</td><td style="text-align:left;">帮助指令</td><td style="text-align:left;">否</td></tr></tbody></table><p>说明：在添加DataNode后，随着新的写入到来（以及旧数据过期，如果设置了TTL），集群负载会逐渐向新的DataNode均衡，最终在所有节点上达到存算资源的均衡。</p><h4 id="移除datanode节点" tabindex="-1"><a class="header-anchor" href="#移除datanode节点"><span>移除DataNode节点</span></a></h4><p>首先通过CLI连接集群，通过<code>show datanodes</code>确认想要移除的DataNode的RPC地址与端口号：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line">IoTDB&gt; show datanodes</span>
<span class="line">+------+-------+----------+-------+-------------+---------------+</span>
<span class="line">|NodeID| Status|RpcAddress|RpcPort|DataRegionNum|SchemaRegionNum|</span>
<span class="line">+------+-------+----------+-------+-------------+---------------+</span>
<span class="line">|     1|Running|   0.0.0.0|   6667|            0|              0|</span>
<span class="line">|     2|Running|   0.0.0.0|   6668|            1|              1|</span>
<span class="line">|     3|Running|   0.0.0.0|   6669|            1|              0|</span>
<span class="line">+------+-------+----------+-------+-------------+---------------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.110s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后使用脚本将DataNode移除。脚本命令：</p><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"># Linux / MacOS </span>
<span class="line">sbin/remove-datanode.sh [dn_rpc_address:dn_rpc_port]</span>
<span class="line"></span>
<span class="line">#Windows</span>
<span class="line">sbin/remove-datanode.bat [dn_rpc_address:dn_rpc_port]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><ol><li><p>Confignode节点启动失败</p><p>步骤 1: 请查看启动日志，检查是否修改了某些首次启动后不可改的参数。</p><p>步骤 2: 请查看启动日志，检查是否出现其他异常。日志中若存在异常现象，请联系天谋技术支持人员咨询解决方案。</p><p>步骤 3: 如果是首次部署或者数据可删除，也可按下述步骤清理环境，重新部署后，再次启动。</p><p>清理环境：</p><ol><li>结束所有 ConfigNode 和 DataNode 进程。</li></ol><div class="language-Bash line-numbers-mode" data-highlighter="prismjs" data-ext="Bash" data-title="Bash"><pre><code><span class="line"> # 1. 停止 ConfigNode 和 DataNode 服务</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,68))])}const m=i(c,[["render",h],["__file","Cluster-Deployment_apache.html.vue"]]),b=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Cluster-Deployment_apache.html","title":"集群版部署","lang":"zh-CN","frontmatter":{"description":"集群版部署 本小节将以IoTDB经典集群部署架构3C3D（3个ConfigNode和3个DataNode）为例，介绍如何部署集群，即通常所说的3C3D集群。3C3D集群架构图如下： 注意事项 安装前请确认系统已参照准备完成。 部署时推荐优先使用hostname进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Cluster-Deployment_apache.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Cluster-Deployment_apache.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"集群版部署"}],["meta",{"property":"og:description","content":"集群版部署 本小节将以IoTDB经典集群部署架构3C3D（3个ConfigNode和3个DataNode）为例，介绍如何部署集群，即通常所说的3C3D集群。3C3D集群架构图如下： 注意事项 安装前请确认系统已参照准备完成。 部署时推荐优先使用hostname进行IP配置，可避免后期修改主机ip导致数据库无法启动的问题。设置hostname需要在目标服..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E6%88%90%E5%8A%9F.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集群版部署\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E6%88%90%E5%8A%9F.png\\",\\"https://alioss.timecho.com/docs/img/%E5%BC%80%E6%BA%90%E7%89%88%20show%20cluter.png\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"准备步骤","slug":"准备步骤","link":"#准备步骤","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[{"level":3,"title":"设置主机名","slug":"设置主机名","link":"#设置主机名","children":[]},{"level":3,"title":"参数配置","slug":"参数配置","link":"#参数配置","children":[]},{"level":3,"title":"启动ConfigNode节点","slug":"启动confignode节点","link":"#启动confignode节点","children":[]},{"level":3,"title":"启动DataNode 节点","slug":"启动datanode-节点","link":"#启动datanode-节点","children":[]},{"level":3,"title":"验证部署","slug":"验证部署","link":"#验证部署","children":[]}]},{"level":2,"title":"节点维护步骤","slug":"节点维护步骤","link":"#节点维护步骤","children":[{"level":3,"title":"ConfigNode节点维护","slug":"confignode节点维护","link":"#confignode节点维护","children":[]},{"level":3,"title":"DataNode节点维护","slug":"datanode节点维护","link":"#datanode节点维护","children":[]}]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":10.19,"words":3056},"filePathRelative":"zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Cluster-Deployment_apache.md","localizedDate":"2023年7月10日","autoDesc":true}');export{m as comp,b as data};