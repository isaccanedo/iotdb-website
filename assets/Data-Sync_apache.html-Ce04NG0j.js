import{_ as a,c as t,b as n,d as l,e as s,a as d,w as r,r as p,o as c}from"./app-BHE9oQwv.js";const o={};function u(h,e){const i=p("RouteLink");return c(),t("div",null,[e[3]||(e[3]=n(`<h1 id="数据同步" tabindex="-1"><a class="header-anchor" href="#数据同步"><span>数据同步</span></a></h1><p>数据同步是工业物联网的典型需求，通过数据同步机制，可实现 IoTDB 之间的数据共享，搭建完整的数据链路来满足内网外网数据互通、端边云同步、数据迁移、数据备份等需求。</p><h2 id="功能概述" tabindex="-1"><a class="header-anchor" href="#功能概述"><span>功能概述</span></a></h2><h3 id="数据同步-1" tabindex="-1"><a class="header-anchor" href="#数据同步-1"><span>数据同步</span></a></h3><p>一个数据同步任务包含 3 个阶段：</p><figure><img src="https://alioss.timecho.com/docs/img/dataSync01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>抽取（Source）阶段：该部分用于从源 IoTDB 抽取数据，在 SQL 语句中的 source 部分定义</li><li>处理（Process）阶段：该部分用于处理从源 IoTDB 抽取出的数据，在 SQL 语句中的 processor 部分定义</li><li>发送（Sink）阶段：该部分用于向目标 IoTDB 发送数据，在 SQL 语句中的 sink 部分定义</li></ul><p>通过 SQL 语句声明式地配置 3 个部分的具体内容，可实现灵活的数据同步能力。目前数据同步支持以下信息的同步，您可以在创建同步任务时对同步范围进行选择（默认选择 data.insert，即同步新写入的数据）：</p><table style="text-align:left;"><tr><th>同步范围</th><th>同步内容</th><th>说明</th></tr><tr><td colspan="2">all</td><td>所有范围</td></tr><tr><td rowspan="2">data（数据）</td><td>insert（增量）</td><td>同步新写入的数据</td></tr><tr><td>delete（删除）</td><td>同步被删除的数据</td></tr><tr><td rowspan="3">schema（元数据）</td><td>database（数据库）</td><td>同步数据库的创建、修改或删除操作</td></tr><tr><td>timeseries（时间序列）</td><td>同步时间序列的定义和属性</td></tr><tr><td>TTL（数据到期时间）</td><td>同步数据的存活时间</td></tr><tr><td>auth（权限）</td><td>-</td><td>同步用户权限和访问控制</td></tr></table><h3 id="功能限制及说明" tabindex="-1"><a class="header-anchor" href="#功能限制及说明"><span>功能限制及说明</span></a></h3><p>元数据（schema）、权限（auth）同步功能存在如下限制：</p><ul><li><p>使用元数据同步时，要求<code>Schema region</code>、<code>ConfigNode</code> 的共识协议必须为默认的 ratis 协议，即<code>iotdb-system.properties</code>配置文件中是否包含<code>config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</code>、<code>schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</code>，不包含即为默认值ratis 协议。</p></li><li><p>为了防止潜在的冲突，请在开启元数据同步时关闭接收端自动创建元数据功能。可通过修改 <code>iotdb-system.properties</code>配置文件中的<code>enable_auto_create_schema</code>配置项为 false，关闭元数据自动创建功能。</p></li><li><p>开启元数据同步时，不支持使用自定义插件。</p></li><li><p>在进行数据同步任务时，请避免执行任何删除操作，防止两端状态不一致。</p></li></ul><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h2><p>数据同步任务有三种状态：RUNNING、STOPPED 和 DROPPED。任务状态转换如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/dataSync02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>提供以下 SQL 语句对同步任务进行状态管理。</p><h3 id="创建任务" tabindex="-1"><a class="header-anchor" href="#创建任务"><span>创建任务</span></a></h3><p>使用 <code>CREATE PIPE</code> 语句来创建一条数据同步任务，下列属性中<code>PipeId</code>和<code>sink</code>必填，<code>source</code>和<code>processor</code>为选填项，输入 SQL 时注意 <code>SOURCE</code>与 <code>SINK</code> 插件顺序不能替换。</p><p>SQL 示例如下：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE PIPE &lt;PipeId&gt; -- PipeId 是能够唯一标定任务任务的名字</span>
<span class="line">-- 数据抽取插件，可选插件</span>
<span class="line">WITH SOURCE (</span>
<span class="line">  [&lt;parameter&gt; = &lt;value&gt;,],</span>
<span class="line">)</span>
<span class="line">-- 数据处理插件，可选插件</span>
<span class="line">WITH PROCESSOR (</span>
<span class="line">  [&lt;parameter&gt; = &lt;value&gt;,],</span>
<span class="line">)</span>
<span class="line">-- 数据连接插件，必填插件</span>
<span class="line">WITH SINK (</span>
<span class="line">  [&lt;parameter&gt; = &lt;value&gt;,],</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开始任务" tabindex="-1"><a class="header-anchor" href="#开始任务"><span>开始任务</span></a></h3><p>创建之后，任务不会立即被处理，需要启动任务。使用<code>START PIPE</code>语句来启动任务，从而开始处理数据：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">START PIPE&lt;PipeId&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="停止任务" tabindex="-1"><a class="header-anchor" href="#停止任务"><span>停止任务</span></a></h3><p>停止处理数据：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">STOP PIPE &lt;PipeId&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="删除任务" tabindex="-1"><a class="header-anchor" href="#删除任务"><span>删除任务</span></a></h3><p>删除指定任务：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">DROP PIPE &lt;PipeId&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>删除任务不需要先停止同步任务。</p><h3 id="查看任务" tabindex="-1"><a class="header-anchor" href="#查看任务"><span>查看任务</span></a></h3><p>查看全部任务：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">SHOW PIPES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>查看指定任务：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">SHOW PIPE &lt;PipeId&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>pipe 的 show pipes 结果示例：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">+--------------------------------+-----------------------+-------+----------+-------------+-----------------------------------------------------------+----------------+-------------------+-------------------------+</span>
<span class="line">|                              ID|           CreationTime|  State|PipeSource|PipeProcessor|                                                   PipeSink|ExceptionMessage|RemainingEventCount|EstimatedRemainingSeconds|</span>
<span class="line">+--------------------------------+-----------------------+-------+----------+-------------+-----------------------------------------------------------+----------------+-------------------+-------------------------+</span>
<span class="line">|59abf95db892428b9d01c5fa318014ea|2024-06-17T14:03:44.189|RUNNING|        {}|           {}|{sink=iotdb-thrift-sink, sink.ip=127.0.0.1, sink.port=6668}|                |                128|                     1.03|</span>
<span class="line">+--------------------------------+-----------------------+-------+----------+-------------+-----------------------------------------------------------+----------------+-------------------+-------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中各列含义如下：</p><ul><li><strong>ID</strong>：同步任务的唯一标识符</li><li><strong>CreationTime</strong>：同步任务的创建的时间</li><li><strong>State</strong>：同步任务的状态</li><li><strong>PipeSource</strong>：同步数据流的来源</li><li><strong>PipeProcessor</strong>：同步数据流在传输过程中的处理逻辑</li><li><strong>PipeSink</strong>：同步数据流的目的地</li><li><strong>ExceptionMessage</strong>：显示同步任务的异常信息</li><li><strong>RemainingEventCount（统计存在延迟）</strong>：剩余 event 数，当前数据同步任务中的所有 event 总数，包括数据和元数据同步的 event，以及系统和用户自定义的 event。</li><li><strong>EstimatedRemainingSeconds（统计存在延迟）</strong>：剩余时间，基于当前 event 个数和 pipe 处速率，预估完成传输的剩余时间。</li></ul><h3 id="同步插件" tabindex="-1"><a class="header-anchor" href="#同步插件"><span>同步插件</span></a></h3><p>为了使得整体架构更加灵活以匹配不同的同步场景需求，我们支持在同步任务框架中进行插件组装。系统为您预置了一些常用插件可直接使用，同时您也可以自定义 processor 插件 和 Sink 插件，并加载至 IoTDB 系统进行使用。查看系统中的插件（含自定义与内置插件）可以用以下语句：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">SHOW PIPEPLUGINS</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>返回结果如下：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">IoTDB&gt; SHOW PIPEPLUGINS</span>
<span class="line">+------------------------------+----------+--------------------------------------------------------------------------------------------------+----------------------------------------------------+</span>
<span class="line">|                    PluginName|PluginType|                                                                                         ClassName|                                           PluginJar|</span>
<span class="line">+------------------------------+----------+--------------------------------------------------------------------------------------------------+----------------------------------------------------+</span>
<span class="line">|          DO-NOTHING-PROCESSOR|   Builtin|               org.apache.iotdb.commons.pipe.plugin.builtin.processor.donothing.DoNothingProcessor|                                                    |</span>
<span class="line">|               DO-NOTHING-SINK|   Builtin|               org.apache.iotdb.commons.pipe.plugin.builtin.connector.donothing.DoNothingConnector|                                                    |</span>
<span class="line">|                  IOTDB-SOURCE|   Builtin|                       org.apache.iotdb.commons.pipe.plugin.builtin.extractor.iotdb.IoTDBExtractor|                                                    |</span>
<span class="line">|             IOTDB-THRIFT-SINK|   Builtin|          org.apache.iotdb.commons.pipe.plugin.builtin.connector.iotdb.thrift.IoTDBThriftConnector|                                                    |</span>
<span class="line">|         IOTDB-THRIFT-SSL-SINK|   Builtin|       org.apache.iotdb.commons.pipe.plugin.builtin.connector.iotdb.thrift.IoTDBThriftSslConnector|                                                    |</span>
<span class="line">+------------------------------+----------+--------------------------------------------------------------------------------------------------+----------------------------------------------------+</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>预置插件详细介绍如下(各插件的详细参数可参考本文<a href="#%E5%8F%82%E8%80%83%E5%8F%82%E6%95%B0%E8%AF%B4%E6%98%8E">参数说明</a>)：</p><table style="text-align:left;"><tr><th>类型</th><th>自定义插件</th><th>插件名称</th><th>介绍</th><th>适用版本</th></tr><tr><td>source 插件</td><td>不支持</td><td>iotdb-source</td><td>默认的 extractor 插件，用于抽取 IoTDB 历史或实时数据</td><td>1.2.x</td></tr><tr><td>processor 插件</td><td>支持</td><td>do-nothing-processor</td><td>默认的 processor 插件，不对传入的数据做任何的处理</td><td>1.2.x</td></tr><tr><td rowspan="3">sink 插件</td><td rowspan="3">支持</td><td>do-nothing-sink</td><td>不对发送出的数据做任何的处理</td><td>1.2.x</td></tr><tr><td>iotdb-thrift-sink</td><td>默认的 sink 插件（V1.3.1及以上），用于 IoTDB（V1.2.0 及以上）与 IoTDB（V1.2.0 及以上）之间的数据传输。使用 Thrift RPC 框架传输数据，多线程 async non-blocking IO 模型，传输性能高，尤其适用于目标端为分布式时的场景</td><td>1.2.x</td></tr><tr><td>iotdb-thrift-ssl-sink</td><td>用于 IoTDB（V1.3.1 及以上）与 IoTDB（V1.2.0 及以上）之间的数据传输。使用 Thrift RPC 框架传输数据，单线程 sync blocking IO 模型，适用于安全需求较高的场景 </td><td>1.3.1+</td></tr></table>`,46)),l("p",null,[e[1]||(e[1]=s("导入自定义插件可参考")),d(i,{to:"/zh/UserGuide/latest/User-Manual/Streaming_timecho.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%B5%81%E5%A4%84%E7%90%86%E6%8F%92%E4%BB%B6%E7%AE%A1%E7%90%86"},{default:r(()=>e[0]||(e[0]=[s("流处理框架")])),_:1}),e[2]||(e[2]=s("章节。"))]),e[4]||(e[4]=n(`<h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2><h3 id="全量数据同步" tabindex="-1"><a class="header-anchor" href="#全量数据同步"><span>全量数据同步</span></a></h3><p>本例子用来演示将一个 IoTDB 的所有数据同步至另一个 IoTDB，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/数据同步1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，我们可以创建一个名为 A2B 的同步任务，用来同步 A IoTDB 到 B IoTDB 间的全量数据，这里需要用到用到 sink 的 iotdb-thrift-sink 插件（内置插件），需通过 node-urls 配置目标端 IoTDB 中 DataNode 节点的数据服务端口的 url，如下面的示例语句：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create pipe A2B</span>
<span class="line">with sink (</span>
<span class="line">  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,</span>
<span class="line">  &#39;node-urls&#39; = &#39;127.0.0.1:6668&#39;, -- 目标端 IoTDB 中 DataNode 节点的数据服务端口的 url</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部分数据同步" tabindex="-1"><a class="header-anchor" href="#部分数据同步"><span>部分数据同步</span></a></h3><p>本例子用来演示同步某个历史时间范围（ 2023 年 8 月 23 日 8 点到 2023 年 10 月 23 日 8 点）的数据至另一个 IoTDB，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/数据同步1.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，我们可以创建一个名为 A2B 的同步任务。首先我们需要在 source 中定义传输数据的范围，由于传输的是历史数据（历史数据是指同步任务创建之前存在的数据），需要配置数据的起止时间 start-time 和 end-time 以及传输的模式 mode。通过 node-urls 配置目标端 IoTDB 中 DataNode 节点的数据服务端口的 url。</p><p>详细语句如下：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create pipe A2B</span>
<span class="line">WITH SOURCE (</span>
<span class="line">  &#39;source&#39;= &#39;iotdb-source&#39;,</span>
<span class="line">  &#39;realtime.mode&#39; = &#39;stream&#39;  -- 新插入数据（pipe创建后）的抽取模式</span>
<span class="line">  &#39;start-time&#39; = &#39;2023.08.23T08:00:00+00:00&#39;,  -- 同步所有数据的开始 event time，包含 start-time</span>
<span class="line">  &#39;end-time&#39; = &#39;2023.10.23T08:00:00+00:00&#39;  -- 同步所有数据的结束 event time，包含 end-time</span>
<span class="line">) </span>
<span class="line">with SINK (</span>
<span class="line">  &#39;sink&#39;=&#39;iotdb-thrift-async-sink&#39;,</span>
<span class="line">  &#39;node-urls&#39; = &#39;127.0.0.1:6668&#39;, -- 目标端 IoTDB 中 DataNode 节点的数据服务端口的 url</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="边云数据传输" tabindex="-1"><a class="header-anchor" href="#边云数据传输"><span>边云数据传输</span></a></h3><p>本例子用来演示多个 IoTDB 之间边云传输数据的场景，数据由 B 、C、D 集群分别都同步至 A 集群，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/dataSync03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，为了将 B 、C、D 集群的数据同步至 A，在 BA 、CA、DA 之间的 pipe 需要配置<code>path</code>限制范围，以及要保持边侧和云侧的数据一致 pipe 需要配置<code>inclusion=all</code>来同步全量数据和元数据，详细语句如下：</p><p>在 B IoTDB 上执行下列语句，将 B 中数据同步至 A：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create pipe BA</span>
<span class="line">with source (</span>
<span class="line">   &#39;inclusion&#39;=&#39;all&#39;,  -- 表示同步全量数据、元数据和权限</span>
<span class="line">   &#39;path&#39;=&#39;root.db.**&#39;, -- 限制范围</span>
<span class="line">)</span>
<span class="line">with sink (</span>
<span class="line">  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,</span>
<span class="line">  &#39;node-urls&#39; = &#39;127.0.0.1:6667&#39;, -- 目标端 IoTDB 中 DataNode 节点的数据服务端口的 url</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 C IoTDB 上执行下列语句，将 C 中数据同步至 A：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create pipe CA</span>
<span class="line">with source (</span>
<span class="line">   &#39;inclusion&#39;=&#39;all&#39;,  -- 表示同步全量数据、元数据和权限</span>
<span class="line">   &#39;path&#39;=&#39;root.db.**&#39;, -- 限制范围</span>
<span class="line">)</span>
<span class="line">with sink (</span>
<span class="line">  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,</span>
<span class="line">  &#39;node-urls&#39; = &#39;127.0.0.1:6668&#39;, -- 目标端 IoTDB 中 DataNode 节点的数据服务端口的 url</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 D IoTDB 上执行下列语句，将 D 中数据同步至 A：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create pipe DA</span>
<span class="line">with source (</span>
<span class="line">   &#39;inclusion&#39;=&#39;all&#39;,  -- 表示同步全量数据、元数据和权限</span>
<span class="line">   &#39;path&#39;=&#39;root.db.**&#39;, -- 限制范围</span>
<span class="line">)</span>
<span class="line">with sink (</span>
<span class="line">  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,</span>
<span class="line">  &#39;node-urls&#39; = &#39;127.0.0.1:6669&#39;, -- 目标端 IoTDB 中 DataNode 节点的数据服务端口的 url</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="级联数据传输" tabindex="-1"><a class="header-anchor" href="#级联数据传输"><span>级联数据传输</span></a></h3><p>本例子用来演示多个 IoTDB 之间级联传输数据的场景，数据由 A 集群同步至 B 集群，再同步至 C 集群，数据链路如下图所示：</p><figure><img src="https://alioss.timecho.com/docs/img/1706698610134.jpg" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这个例子中，为了将 A 集群的数据同步至 C，在 BC 之间的 pipe 需要将 <code>forwarding-pipe-requests</code> 配置为<code>true</code>，详细语句如下：</p><p>在 A IoTDB 上执行下列语句，将 A 中数据同步至 B：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create pipe AB</span>
<span class="line">with sink (</span>
<span class="line">  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,</span>
<span class="line">  &#39;node-urls&#39; = &#39;127.0.0.1:6668&#39;, -- 目标端 IoTDB 中 DataNode 节点的数据服务端口的 url</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 B IoTDB 上执行下列语句，将 B 中数据同步至 C：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create pipe BC</span>
<span class="line">with source (</span>
<span class="line">  &#39;forwarding-pipe-requests&#39; = &#39;true&#39;   --是否转发由其他 Pipe 写入的数据</span>
<span class="line">)</span>
<span class="line">with sink (</span>
<span class="line">  &#39;sink&#39;=&#39;iotdb-thrift-sink&#39;,</span>
<span class="line">  &#39;node-urls&#39; = &#39;127.0.0.1:6669&#39;, -- 目标端 IoTDB 中 DataNode 节点的数据服务端口的 url</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="压缩同步" tabindex="-1"><a class="header-anchor" href="#压缩同步"><span>压缩同步</span></a></h3><p>IoTDB 支持在同步过程中指定数据压缩方式。可通过配置 <code>compressor</code> 参数，实现数据的实时压缩和传输。<code>compressor</code>目前支持 snappy / gzip / lz4 / zstd / lzma2 5 种可选算法，且可以选择多种压缩算法组合，按配置的顺序进行压缩。</p><p>如创建一个名为 A2B 的同步任务：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create pipe A2B </span>
<span class="line">with sink (</span>
<span class="line"> &#39;node-urls&#39; = &#39;127.0.0.1:6668&#39;, -- 目标端 IoTDB 中 DataNode 节点的数据服务端口的 url</span>
<span class="line"> &#39;compressor&#39; = &#39;snappy,lz4&#39;  -- 压缩算法</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加密同步" tabindex="-1"><a class="header-anchor" href="#加密同步"><span>加密同步</span></a></h3><p>IoTDB 支持在同步过程中使用 SSL 加密，从而在不同的 IoTDB 实例之间安全地传输数据。通过配置 SSL 相关的参数，如证书地址和密码（<code>ssl.trust-store-path</code>）、（<code>ssl.trust-store-pwd</code>）可以确保数据在同步过程中被 SSL 加密所保护。</p><p>如创建名为 A2B 的同步任务：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">create pipe A2B</span>
<span class="line">with sink (</span>
<span class="line">  &#39;sink&#39;=&#39;iotdb-thrift-ssl-sink&#39;,</span>
<span class="line">  &#39;node-urls&#39;=&#39;127.0.0.1:6667&#39;,  -- 目标端 IoTDB 中 DataNode 节点的数据服务端口的 url</span>
<span class="line">  &#39;ssl.trust-store-path&#39;=&#39;pki/trusted&#39;, -- 连接目标端 DataNode 所需的 trust store 证书路径</span>
<span class="line">  &#39;ssl.trust-store-pwd&#39;=&#39;root&#39; -- 连接目标端 DataNode 所需的 trust store 证书密码</span>
<span class="line">)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考-注意事项" tabindex="-1"><a class="header-anchor" href="#参考-注意事项"><span>参考：注意事项</span></a></h2><p>可通过修改 IoTDB 配置文件（<code>iotdb-system.properties</code>）以调整数据同步的参数，如同步数据存储目录等。完整配置如下：：</p><p>V1.3.3+:</p><div class="language-Properties line-numbers-mode" data-highlighter="prismjs" data-ext="Properties" data-title="Properties"><pre><code><span class="line"># pipe_receiver_file_dir</span>
<span class="line"># If this property is unset, system will save the data in the default relative path directory under the IoTDB folder(i.e., %IOTDB_HOME%/\${cn_system_dir}/pipe/receiver).</span>
<span class="line"># If it is absolute, system will save the data in the exact location it points to.</span>
<span class="line"># If it is relative, system will save the data in the relative path directory it indicates under the IoTDB folder.</span>
<span class="line"># Note: If pipe_receiver_file_dir is assigned an empty string(i.e.,zero-size), it will be handled as a relative path.</span>
<span class="line"># effectiveMode: restart</span>
<span class="line"># For windows platform</span>
<span class="line"># If its prefix is a drive specifier followed by &quot;\\\\&quot;, or if its prefix is &quot;\\\\\\\\&quot;, then the path is absolute. Otherwise, it is relative.</span>
<span class="line"># pipe_receiver_file_dir=data\\\\confignode\\\\system\\\\pipe\\\\receiver</span>
<span class="line"># For Linux platform</span>
<span class="line"># If its prefix is &quot;/&quot;, then the path is absolute. Otherwise, it is relative.</span>
<span class="line">pipe_receiver_file_dir=data/confignode/system/pipe/receiver</span>
<span class="line"></span>
<span class="line">####################</span>
<span class="line">### Pipe Configuration</span>
<span class="line">####################</span>
<span class="line"></span>
<span class="line"># Uncomment the following field to configure the pipe lib directory.</span>
<span class="line"># effectiveMode: first_start</span>
<span class="line"># For Windows platform</span>
<span class="line"># If its prefix is a drive specifier followed by &quot;\\\\&quot;, or if its prefix is &quot;\\\\\\\\&quot;, then the path is</span>
<span class="line"># absolute. Otherwise, it is relative.</span>
<span class="line"># pipe_lib_dir=ext\\\\pipe</span>
<span class="line"># For Linux platform</span>
<span class="line"># If its prefix is &quot;/&quot;, then the path is absolute. Otherwise, it is relative.</span>
<span class="line">pipe_lib_dir=ext/pipe</span>
<span class="line"></span>
<span class="line"># The maximum number of threads that can be used to execute the pipe subtasks in PipeSubtaskExecutor.</span>
<span class="line"># The actual value will be min(pipe_subtask_executor_max_thread_num, max(1, CPU core number / 2)).</span>
<span class="line"># effectiveMode: restart</span>
<span class="line"># Datatype: int</span>
<span class="line">pipe_subtask_executor_max_thread_num=5</span>
<span class="line"></span>
<span class="line"># The connection timeout (in milliseconds) for the thrift client.</span>
<span class="line"># effectiveMode: restart</span>
<span class="line"># Datatype: int</span>
<span class="line">pipe_sink_timeout_ms=900000</span>
<span class="line"></span>
<span class="line"># The maximum number of selectors that can be used in the sink.</span>
<span class="line"># Recommend to set this value to less than or equal to pipe_sink_max_client_number.</span>
<span class="line"># effectiveMode: restart</span>
<span class="line"># Datatype: int</span>
<span class="line">pipe_sink_selector_number=4</span>
<span class="line"></span>
<span class="line"># The maximum number of clients that can be used in the sink.</span>
<span class="line"># effectiveMode: restart</span>
<span class="line"># Datatype: int</span>
<span class="line">pipe_sink_max_client_number=16</span>
<span class="line"></span>
<span class="line"># The total bytes that all pipe sinks can transfer per second.</span>
<span class="line"># When given a value less than or equal to 0, it means no limit.</span>
<span class="line"># default value is -1, which means no limit.</span>
<span class="line"># effectiveMode: hot_reload</span>
<span class="line"># Datatype: double</span>
<span class="line">pipe_all_sinks_rate_limit_bytes_per_second=-1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考-参数说明" tabindex="-1"><a class="header-anchor" href="#参考-参数说明"><span>参考：参数说明</span></a></h2><h3 id="source-参数-v1-3-3" tabindex="-1"><a class="header-anchor" href="#source-参数-v1-3-3"><span>source 参数（V1.3.3）</span></a></h3><table><thead><tr><th>参数</th><th>描述</th><th>value 取值范围</th><th>是否必填</th><th>默认取值</th></tr></thead><tbody><tr><td>source</td><td>iotdb-source</td><td>String: iotdb-source</td><td>必填</td><td>-</td></tr><tr><td>inclusion</td><td>用于指定数据同步任务中需要同步范围，分为数据、元数据和权限</td><td>String:all, data(insert,delete), schema(database,timeseries,ttl), auth</td><td>选填</td><td>data.insert</td></tr><tr><td>inclusion.exclusion</td><td>用于从 inclusion 指定的同步范围内排除特定的操作，减少同步的数据量</td><td>String:all, data(insert,delete), schema(database,timeseries,ttl), auth</td><td>选填</td><td>空字符串</td></tr><tr><td>mode</td><td>用于在每个 data region 发送完毕时分别发送结束事件，并在全部 data region 发送完毕后自动 drop pipe。query:结束，subscribe:不结束。</td><td>String: query / subscribe</td><td>选填</td><td>subscribe</td></tr><tr><td>path</td><td>用于筛选待同步的时间序列及其相关元数据 / 数据的路径模式元数据同步只能用pathpath 是精确匹配，参数必须为前缀路径或完整路径，即不能含有 <code>&quot;*&quot;</code>，最多在 path参数的尾部含有一个 <code>&quot;**&quot;</code></td><td>String：IoTDB 的 pattern</td><td>选填</td><td>root.**</td></tr><tr><td>pattern</td><td>用于筛选时间序列的路径前缀</td><td>String: 任意的时间序列前缀</td><td>选填</td><td>root</td></tr><tr><td>start-time</td><td>同步所有数据的开始 event time，包含 start-time</td><td>Long: [Long.MIN_VALUE, Long.MAX_VALUE]</td><td>选填</td><td>Long.MIN_VALUE</td></tr><tr><td>end-time</td><td>同步所有数据的结束 event time，包含 end-time</td><td>Long: [Long.MIN_VALUE, Long.MAX_VALUE]</td><td>选填</td><td>Long.MAX_VALUE</td></tr><tr><td>realtime.mode</td><td>新插入数据（pipe 创建后）的抽取模式</td><td>String: batch</td><td>选填</td><td>batch</td></tr><tr><td>forwarding-pipe-requests</td><td>是否转发由其他 Pipe （通常是数据同步）写入的数据</td><td>Boolean: true</td><td>选填</td><td>true</td></tr><tr><td>loose-range</td><td>tsfile传输时，是否放宽历史数据（pipe创建前）范围。&quot;&quot;：不放宽范围，严格按照设置的条件挑选数据&quot;time&quot;：放宽时间范围，避免对TsFile进行拆分，可以提升同步效率&quot;path&quot;：放宽路径范围，避免对TsFile进行拆分，可以提升同步效率&quot;time, path&quot; 、 &quot;path, time&quot; 、&quot;all&quot; ： 放宽所有范围，避免对TsFile进行拆分，可以提升同步效率</td><td>String: &quot;&quot; 、 &quot;time&quot; 、 &quot;path&quot; 、 &quot;time, path&quot; 、 &quot;path, time&quot; 、 &quot;all&quot;</td><td>选填</td><td>空字符串</td></tr><tr><td>mods.enable</td><td>是否发送 tsfile 的 mods 文件</td><td>Boolean: true / false</td><td>选填</td><td>false</td></tr></tbody></table><blockquote><p>💎 <strong>说明</strong>：为保持低版本兼容，history.enable、history.start-time、history.end-time、realtime.enable 仍可使用，但在新版本中不推荐。</p><p>💎 <strong>说明：数据抽取模式 batch 的含义</strong></p><ul><li><strong>batch</strong>：该模式下，任务将对数据进行批量（按底层数据文件）处理、发送，其特点是低时效、高吞吐</li></ul></blockquote><h3 id="sink-参数" tabindex="-1"><a class="header-anchor" href="#sink-参数"><span>sink 参数</span></a></h3><blockquote><p>在 1.3.3 及以上的版本中，只包含sink的情况下，不再需要额外增加with sink 前缀</p></blockquote><h4 id="iotdb-thrift-sink" tabindex="-1"><a class="header-anchor" href="#iotdb-thrift-sink"><span>iotdb-thrift-sink</span></a></h4><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>是否必填</th><th>默认取值</th></tr></thead><tbody><tr><td>sink</td><td>iotdb-thrift-sink 或 iotdb-thrift-async-sink</td><td>String: iotdb-thrift-sink 或 iotdb-thrift-async-sink</td><td>必填</td><td>-</td></tr><tr><td>node-urls</td><td>目标端 IoTDB 任意多个 DataNode 节点的数据服务端口的 url（请注意同步任务不支持向自身服务进行转发）</td><td>String. 例：&#39;127.0.0.1：6667，127.0.0.1：6668，127.0.0.1：6669&#39;， &#39;127.0.0.1：6667&#39;</td><td>必填</td><td>-</td></tr><tr><td>batch.enable</td><td>是否开启日志攒批发送模式，用于提高传输吞吐，降低 IOPS</td><td>Boolean: true, false</td><td>选填</td><td>true</td></tr><tr><td>batch.max-delay-seconds</td><td>在开启日志攒批发送模式时生效，表示一批数据在发送前的最长等待时间（单位：s）</td><td>Integer</td><td>选填</td><td>1</td></tr><tr><td>batch.size-bytes</td><td>在开启日志攒批发送模式时生效，表示一批数据最大的攒批大小（单位：byte）</td><td>Long</td><td>选填</td><td>16<em>1024</em>1024</td></tr></tbody></table><h4 id="iotdb-thrift-ssl-sink" tabindex="-1"><a class="header-anchor" href="#iotdb-thrift-ssl-sink"><span>iotdb-thrift-ssl-sink</span></a></h4><table><thead><tr><th>key</th><th>value</th><th>value 取值范围</th><th>是否必填</th><th>默认取值</th></tr></thead><tbody><tr><td>sink</td><td>iotdb-thrift-ssl-sink</td><td>String: iotdb-thrift-ssl-sink</td><td>必填</td><td>-</td></tr><tr><td>node-urls</td><td>目标端 IoTDB 任意多个 DataNode 节点的数据服务端口的 url（请注意同步任务不支持向自身服务进行转发）</td><td>String. 例：&#39;127.0.0.1：6667，127.0.0.1：6668，127.0.0.1：6669&#39;， &#39;127.0.0.1：6667&#39;</td><td>必填</td><td>-</td></tr><tr><td>batch.enable</td><td>是否开启日志攒批发送模式，用于提高传输吞吐，降低 IOPS</td><td>Boolean: true, false</td><td>选填</td><td>true</td></tr><tr><td>batch.max-delay-seconds</td><td>在开启日志攒批发送模式时生效，表示一批数据在发送前的最长等待时间（单位：s）</td><td>Integer</td><td>选填</td><td>1</td></tr><tr><td>batch.size-bytes</td><td>在开启日志攒批发送模式时生效，表示一批数据最大的攒批大小（单位：byte）</td><td>Long</td><td>选填</td><td>16<em>1024</em>1024</td></tr><tr><td>ssl.trust-store-path</td><td>连接目标端 DataNode 所需的 trust store 证书路径</td><td>String.Example: &#39;127.0.0.1:6667,127.0.0.1:6668,127.0.0.1:6669&#39;, &#39;127.0.0.1:6667&#39;</td><td>必填</td><td>-</td></tr><tr><td>ssl.trust-store-pwd</td><td>连接目标端 DataNode 所需的 trust store 证书密码</td><td>Integer</td><td>必填</td><td>-</td></tr></tbody></table>`,52))])}const v=a(o,[["render",u],["__file","Data-Sync_apache.html.vue"]]),b=JSON.parse('{"path":"/zh/UserGuide/latest/User-Manual/Data-Sync_apache.html","title":"数据同步","lang":"zh-CN","frontmatter":{"description":"数据同步 数据同步是工业物联网的典型需求，通过数据同步机制，可实现 IoTDB 之间的数据共享，搭建完整的数据链路来满足内网外网数据互通、端边云同步、数据迁移、数据备份等需求。 功能概述 数据同步 一个数据同步任务包含 3 个阶段： 抽取（Source）阶段：该部分用于从源 IoTDB 抽取数据，在 SQL 语句中的 source 部分定义 处理（Pr...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/User-Manual/Data-Sync_apache.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/User-Manual/Data-Sync_apache.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据同步"}],["meta",{"property":"og:description","content":"数据同步 数据同步是工业物联网的典型需求，通过数据同步机制，可实现 IoTDB 之间的数据共享，搭建完整的数据链路来满足内网外网数据互通、端边云同步、数据迁移、数据备份等需求。 功能概述 数据同步 一个数据同步任务包含 3 个阶段： 抽取（Source）阶段：该部分用于从源 IoTDB 抽取数据，在 SQL 语句中的 source 部分定义 处理（Pr..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/dataSync01.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据同步\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/dataSync01.png\\",\\"https://alioss.timecho.com/docs/img/dataSync02.png\\",\\"https://alioss.timecho.com/docs/img/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A51.png\\",\\"https://alioss.timecho.com/docs/img/%E6%95%B0%E6%8D%AE%E5%90%8C%E6%AD%A51.png\\",\\"https://alioss.timecho.com/docs/img/dataSync03.png\\",\\"https://alioss.timecho.com/docs/img/1706698610134.jpg\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"功能概述","slug":"功能概述","link":"#功能概述","children":[{"level":3,"title":"数据同步","slug":"数据同步-1","link":"#数据同步-1","children":[]},{"level":3,"title":"功能限制及说明","slug":"功能限制及说明","link":"#功能限制及说明","children":[]}]},{"level":2,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[{"level":3,"title":"创建任务","slug":"创建任务","link":"#创建任务","children":[]},{"level":3,"title":"开始任务","slug":"开始任务","link":"#开始任务","children":[]},{"level":3,"title":"停止任务","slug":"停止任务","link":"#停止任务","children":[]},{"level":3,"title":"删除任务","slug":"删除任务","link":"#删除任务","children":[]},{"level":3,"title":"查看任务","slug":"查看任务","link":"#查看任务","children":[]},{"level":3,"title":"同步插件","slug":"同步插件","link":"#同步插件","children":[]}]},{"level":2,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[{"level":3,"title":"全量数据同步","slug":"全量数据同步","link":"#全量数据同步","children":[]},{"level":3,"title":"部分数据同步","slug":"部分数据同步","link":"#部分数据同步","children":[]},{"level":3,"title":"边云数据传输","slug":"边云数据传输","link":"#边云数据传输","children":[]},{"level":3,"title":"级联数据传输","slug":"级联数据传输","link":"#级联数据传输","children":[]},{"level":3,"title":"压缩同步","slug":"压缩同步","link":"#压缩同步","children":[]},{"level":3,"title":"加密同步","slug":"加密同步","link":"#加密同步","children":[]}]},{"level":2,"title":"参考：注意事项","slug":"参考-注意事项","link":"#参考-注意事项","children":[]},{"level":2,"title":"参考：参数说明","slug":"参考-参数说明","link":"#参考-参数说明","children":[{"level":3,"title":"source  参数（V1.3.3）","slug":"source-参数-v1-3-3","link":"#source-参数-v1-3-3","children":[]},{"level":3,"title":"sink 参数","slug":"sink-参数","link":"#sink-参数","children":[]}]}],"git":{"createdTime":1693918505000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":5},{"name":"majialin","email":"107627937+mal117@users.noreply.github.com","commits":4}]},"readingTime":{"minutes":15.09,"words":4527},"filePathRelative":"zh/UserGuide/latest/User-Manual/Data-Sync_apache.md","localizedDate":"2023年9月5日","autoDesc":true}');export{v as comp,b as data};