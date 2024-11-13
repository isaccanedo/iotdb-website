import{_ as d,c as r,d as n,e as s,a as i,w as t,b as l,r as p,o}from"./app-BHE9oQwv.js";const c={};function u(m,e){const a=p("RouteLink");return o(),r("div",null,[e[6]||(e[6]=n("h1",{id:"快速上手",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#快速上手"},[n("span",null,"快速上手")])],-1)),n("p",null,[e[1]||(e[1]=s("本文将介绍关于 IoTDB 使用的基本流程，如果需要更多信息，请浏览我们官网的 ")),i(a,{to:"/zh/UserGuide/V1.0.x/IoTDB-Introduction/What-is-IoTDB.html"},{default:t(()=>e[0]||(e[0]=[s("指引")])),_:1}),e[2]||(e[2]=s("."))]),e[7]||(e[7]=l(`<h2 id="安装环境" tabindex="-1"><a class="header-anchor" href="#安装环境"><span>安装环境</span></a></h2><p>安装前需要保证设备上配有 JDK&gt;=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。</p><p>设置最大文件打开数为 65535。</p><h2 id="安装步骤" tabindex="-1"><a class="header-anchor" href="#安装步骤"><span>安装步骤</span></a></h2><p>IoTDB 支持多种安装途径。用户可以使用三种方式对 IoTDB 进行安装——下载二进制可运行程序、使用源码、使用 docker 镜像。</p><ul><li><p>使用源码：您可以从代码仓库下载源码并编译，具体编译方法见下方。</p></li><li><p>二进制可运行程序：请从 <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">下载</a> 页面下载最新的安装包，解压后即完成安装。</p></li><li><p>使用 Docker 镜像：dockerfile 文件位于 <a href="https://github.com/apache/iotdb/blob/master/docker/src/main" target="_blank" rel="noopener noreferrer">github</a></p></li></ul><h2 id="软件目录结构" tabindex="-1"><a class="header-anchor" href="#软件目录结构"><span>软件目录结构</span></a></h2><ul><li>sbin 启动和停止脚本目录</li><li>conf 配置文件目录</li><li>tools 系统工具目录</li><li>lib 依赖包目录</li></ul><h2 id="iotdb-试用" tabindex="-1"><a class="header-anchor" href="#iotdb-试用"><span>IoTDB 试用</span></a></h2><p>用户可以根据以下操作对 IoTDB 进行简单的试用，若以下操作均无误，则说明 IoTDB 安装成功。</p><h3 id="启动-iotdb" tabindex="-1"><a class="header-anchor" href="#启动-iotdb"><span>启动 IoTDB</span></a></h3><p>IoTDB 是一个基于分布式系统的数据库。要启动 IoTDB ，你可以先启动单机版（一个 ConfigNode 和一个 DataNode）来检查安装。</p><p>用户可以使用 sbin 文件夹下的 start-standalone 脚本启动 IoTDB。</p><p>Linux 系统与 MacOS 系统启动命令如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; bash sbin/start-standalone.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Windows 系统启动命令如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; sbin\\start-standalone.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注意：目前，要使用单机模式，你需要保证所有的地址设置为 127.0.0.1，副本数设置为1。并且，推荐使用 SimpleConsensus，因为这会带来额外的效率。这些现在都是默认配置。</p><h3 id="使用-cli-工具" tabindex="-1"><a class="header-anchor" href="#使用-cli-工具"><span>使用 Cli 工具</span></a></h3><p>IoTDB 为用户提供多种与服务器交互的方式，在此我们介绍使用 Cli 工具进行写入、查询数据的基本步骤。</p><p>初始安装后的 IoTDB 中有一个默认用户：root，默认密码为 root。用户可以使用该用户运行 Cli 工具操作 IoTDB。Cli 工具启动脚本为 sbin 文件夹下的 start-cli 脚本。启动脚本时需要指定运行 ip、port、username 和 password。若脚本未给定对应参数，则默认参数为&quot;-h 127.0.0.1 -p 6667 -u root -pw -root&quot;</p><p>以下启动语句为服务器在本机运行，且用户未更改运行端口号的示例。</p><p>Linux 系统与 MacOS 系统启动命令如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; bash sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Windows 系统启动命令如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; sbin\\start-cli.bat -h 127.0.0.1 -p 6667 -u root -pw root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>启动后出现如图提示即为启动成功。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"> _____       _________  ______   ______</span>
<span class="line">|_   _|     |  _   _  ||_   _ \`.|_   _ \\</span>
<span class="line">  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |</span>
<span class="line">  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.</span>
<span class="line"> _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) |</span>
<span class="line">|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x</span>
<span class="line"></span>
<span class="line">Successfully login at 127.0.0.1:6667</span>
<span class="line">IoTDB&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="iotdb-的基本操作" tabindex="-1"><a class="header-anchor" href="#iotdb-的基本操作"><span>IoTDB 的基本操作</span></a></h3><p>在这里，我们首先介绍一下使用 Cli 工具创建时间序列、插入数据并查看数据的方法。</p><p>数据在 IoTDB 中的组织形式是以时间序列为单位，每一个时间序列中有若干个数据-时间点对，每一个时间序列属于一个 database。在定义时间序列之前，要首先使用 CREATE DATABASE 语句创建数据库。SQL 语句如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE DATABASE root.ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们可以使用 SHOW DATABASES 语句来查看系统当前所有的 database，SQL 语句如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW DATABASES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------+</span>
<span class="line">|     database|</span>
<span class="line">+-------------+</span>
<span class="line">|      root.ln|</span>
<span class="line">+-------------+</span>
<span class="line">Total line number = 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Database 设定后，使用 CREATE TIMESERIES 语句可以创建新的时间序列，创建时间序列时需要定义数据的类型和编码方式。此处我们创建两个时间序列，SQL 语句如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN</span>
<span class="line">IoTDB&gt; CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>为了查看指定的时间序列，我们可以使用 SHOW TIMESERIES &lt;Path&gt;语句，其中、&lt;Path&gt;表示时间序列对应的路径，默认值为空，表示查看系统中所有的时间序列。下面是两个例子：</p><p>使用 SHOW TIMESERIES 语句查看系统中存在的所有时间序列，SQL 语句如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW TIMESERIES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|                   timeseries|alias|     database|dataType|encoding|compression|tags|attributes|</span>
<span class="line">+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|root.ln.wf01.wt01.temperature| null|      root.ln|   FLOAT|     RLE|     SNAPPY|null|      null|</span>
<span class="line">|     root.ln.wf01.wt01.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|</span>
<span class="line">+-----------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">Total line number = 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看具体的时间序列 root.ln.wf01.wt01.status 的 SQL 语句如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW TIMESERIES root.ln.wf01.wt01.status</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|              timeseries|alias|     database|dataType|encoding|compression|tags|attributes|</span>
<span class="line">+------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|root.ln.wf01.wt01.status| null|      root.ln| BOOLEAN|   PLAIN|     SNAPPY|null|      null|</span>
<span class="line">+------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">Total line number = 1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们使用 INSERT 语句向 root.ln.wf01.wt01.status 时间序列中插入数据，在插入数据时需要首先指定时间戳和路径后缀名称：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(100,true);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>我们也可以向多个时间序列中同时插入数据，这些时间序列同属于一个时间戳：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) values(200,false,20.71)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>最后，我们查询之前插入的数据。使用 SELECT 语句我们可以查询指定的时间序列的数据结果，SQL 语句如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SELECT status FROM root.ln.wf01.wt01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查询结果如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------+------------------------+</span>
<span class="line">|                   Time|root.ln.wf01.wt01.status|</span>
<span class="line">+-----------------------+------------------------+</span>
<span class="line">|1970-01-01T08:00:00.100|                    true|</span>
<span class="line">|1970-01-01T08:00:00.200|                   false|</span>
<span class="line">+-----------------------+------------------------+</span>
<span class="line">Total line number = 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们也可以查询多个时间序列的数据结果，SQL 语句如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SELECT * FROM root.ln.wf01.wt01</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查询结果如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------+--------------------------+-----------------------------+</span>
<span class="line">|                   Time|  root.ln.wf01.wt01.status|root.ln.wf01.wt01.temperature|</span>
<span class="line">+-----------------------+--------------------------+-----------------------------+</span>
<span class="line">|1970-01-01T08:00:00.100|                      true|                         null|</span>
<span class="line">|1970-01-01T08:00:00.200|                     false|                        20.71|</span>
<span class="line">+-----------------------+--------------------------+-----------------------------+</span>
<span class="line">Total line number = 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输入 quit 或 exit 可退出 Cli 结束本次会话。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; quit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>或</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; exit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,63)),n("p",null,[e[4]||(e[4]=s("想要浏览更多 IoTDB 数据库支持的命令，请浏览 ")),i(a,{to:"/zh/UserGuide/V1.0.x/Reference/SQL-Reference.html"},{default:t(()=>e[3]||(e[3]=[s("SQL Reference")])),_:1}),e[5]||(e[5]=s("."))]),e[8]||(e[8]=l(`<h3 id="停止-iotdb" tabindex="-1"><a class="header-anchor" href="#停止-iotdb"><span>停止 IoTDB</span></a></h3><p>用户可以使用$IOTDB_HOME/sbin 文件夹下的 stop-server 脚本停止 IoTDB。</p><p>Linux 系统与 MacOS 系统停止命令如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; sudo bash sbin/stop-standalone.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Windows 系统停止命令如下：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; sbin\\stop-standalone.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>注意：在 Linux 下，执行停止脚本时，请尽量加上 sudo 语句，不然停止可能会失败。更多的解释在分布式/分布式部署中。</p><h3 id="iotdb-的权限管理" tabindex="-1"><a class="header-anchor" href="#iotdb-的权限管理"><span>IoTDB 的权限管理</span></a></h3><p>初始安装后的 IoTDB 中有一个默认用户：root，默认密码为 root。该用户为管理员用户，固定拥有所有权限，无法被赋予、撤销权限，也无法被删除。</p><p>您可以通过以下命令修改其密码：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;</span>
<span class="line">Example: IoTDB &gt; ALTER USER root SET PASSWORD &#39;newpwd&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>权限管理的具体内容可以参考：<a href="https://iotdb.apache.org/zh/UserGuide/V1.0.x/Administration-Management/Administration.html" target="_blank" rel="noopener noreferrer">权限管理</a></p><h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置"><span>基础配置</span></a></h2><p>配置文件在&quot;conf&quot;文件夹下，包括：</p><ul><li>环境配置模块 (<code>datanode-env.bat</code>, <code>datanode-env.sh</code>),</li><li>系统配置模块 (<code>iotdb-datanode.properties</code>)</li><li>日志配置模块 (<code>logback.xml</code>).</li></ul>`,15))])}const b=d(c,[["render",u],["__file","QuickStart.html.vue"]]),h=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/QuickStart/QuickStart.html","title":"快速上手","lang":"zh-CN","frontmatter":{"description":"快速上手 本文将介绍关于 IoTDB 使用的基本流程，如果需要更多信息，请浏览我们官网的 . 安装环境 安装前需要保证设备上配有 JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。 设置最大文件打开数为 65535。 安装步骤 IoTDB 支持多种安装途径。用户可以使用三种方式对 IoTDB 进行安装——下载二进制可运行程序、使用源...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/QuickStart/QuickStart.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/QuickStart/QuickStart.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"快速上手"}],["meta",{"property":"og:description","content":"快速上手 本文将介绍关于 IoTDB 使用的基本流程，如果需要更多信息，请浏览我们官网的 . 安装环境 安装前需要保证设备上配有 JDK>=1.8 的运行环境，并配置好 JAVA_HOME 环境变量。 设置最大文件打开数为 65535。 安装步骤 IoTDB 支持多种安装途径。用户可以使用三种方式对 IoTDB 进行安装——下载二进制可运行程序、使用源..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快速上手\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"安装环境","slug":"安装环境","link":"#安装环境","children":[]},{"level":2,"title":"安装步骤","slug":"安装步骤","link":"#安装步骤","children":[]},{"level":2,"title":"软件目录结构","slug":"软件目录结构","link":"#软件目录结构","children":[]},{"level":2,"title":"IoTDB 试用","slug":"iotdb-试用","link":"#iotdb-试用","children":[{"level":3,"title":"启动 IoTDB","slug":"启动-iotdb","link":"#启动-iotdb","children":[]},{"level":3,"title":"使用 Cli 工具","slug":"使用-cli-工具","link":"#使用-cli-工具","children":[]},{"level":3,"title":"IoTDB 的基本操作","slug":"iotdb-的基本操作","link":"#iotdb-的基本操作","children":[]},{"level":3,"title":"停止 IoTDB","slug":"停止-iotdb","link":"#停止-iotdb","children":[]},{"level":3,"title":"IoTDB 的权限管理","slug":"iotdb-的权限管理","link":"#iotdb-的权限管理","children":[]}]},{"level":2,"title":"基础配置","slug":"基础配置","link":"#基础配置","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":5.78,"words":1734},"filePathRelative":"zh/UserGuide/V1.0.x/QuickStart/QuickStart.md","localizedDate":"2023年7月10日","autoDesc":true}');export{b as comp,h as data};