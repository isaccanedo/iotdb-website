import{_ as i,c as l,b as e,d,e as s,a as t,w as o,r,o as c}from"./app-BHE9oQwv.js";const p={};function v(u,n){const a=r("RouteLink");return c(),l("div",null,[n[3]||(n[3]=e(`<h2 id="集群运维命令" tabindex="-1"><a class="header-anchor" href="#集群运维命令"><span>集群运维命令</span></a></h2><h3 id="展示集群配置" tabindex="-1"><a class="header-anchor" href="#展示集群配置"><span>展示集群配置</span></a></h3><p>当前 IoTDB 支持使用如下 SQL 展示集群的关键参数：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW VARIABLES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show variables</span>
<span class="line">+----------------------------------+-----------------------------------------------------------------+</span>
<span class="line">|                         Variables|                                                            Value|</span>
<span class="line">+----------------------------------+-----------------------------------------------------------------+</span>
<span class="line">|                       ClusterName|                                                   defaultCluster|</span>
<span class="line">|             DataReplicationFactor|                                                                1|</span>
<span class="line">|           SchemaReplicationFactor|                                                                1|</span>
<span class="line">|  DataRegionConsensusProtocolClass|                      org.apache.iotdb.consensus.iot.IoTConsensus|</span>
<span class="line">|SchemaRegionConsensusProtocolClass|                  org.apache.iotdb.consensus.ratis.RatisConsensus|</span>
<span class="line">|  ConfigNodeConsensusProtocolClass|                  org.apache.iotdb.consensus.ratis.RatisConsensus|</span>
<span class="line">|             TimePartitionInterval|                                                        604800000|</span>
<span class="line">|                    DefaultTTL(ms)|                                              9223372036854775807|</span>
<span class="line">|              ReadConsistencyLevel|                                                           strong|</span>
<span class="line">|           SchemaRegionPerDataNode|                                                              1.0|</span>
<span class="line">|             DataRegionPerDataNode|                                                              5.0|</span>
<span class="line">|           LeastDataRegionGroupNum|                                                                5|</span>
<span class="line">|                     SeriesSlotNum|                                                            10000|</span>
<span class="line">|           SeriesSlotExecutorClass|org.apache.iotdb.commons.partition.executor.hash.BKDRHashExecutor|</span>
<span class="line">|         DiskSpaceWarningThreshold|                                                             0.05|</span>
<span class="line">+----------------------------------+-----------------------------------------------------------------+</span>
<span class="line">Total line number = 15</span>
<span class="line">It costs 0.225s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> 必须保证该 SQL 展示的所有配置参数在同一集群各个节点完全一致</p><h3 id="展示-confignode-信息" tabindex="-1"><a class="header-anchor" href="#展示-confignode-信息"><span>展示 ConfigNode 信息</span></a></h3><p>当前 IoTDB 支持使用如下 SQL 展示 ConfigNode 的信息：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CONFIGNODES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show confignodes</span>
<span class="line">+------+-------+---------------+------------+--------+</span>
<span class="line">|NodeID| Status|InternalAddress|InternalPort|    Role|</span>
<span class="line">+------+-------+---------------+------------+--------+</span>
<span class="line">|     0|Running|      127.0.0.1|       10710|  Leader|</span>
<span class="line">|     1|Running|      127.0.0.1|       10711|Follower|</span>
<span class="line">|     2|Running|      127.0.0.1|       10712|Follower|</span>
<span class="line">+------+-------+---------------+------------+--------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.030s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="confignode-状态定义" tabindex="-1"><a class="header-anchor" href="#confignode-状态定义"><span>ConfigNode 状态定义</span></a></h4><p>对 ConfigNode 各状态定义如下：</p><ul><li><strong>Running</strong>: ConfigNode 正常运行</li><li><strong>Unknown</strong>: ConfigNode 未正常上报心跳 <ul><li>无法接收其它 ConfigNode 同步来的数据</li><li>不会被选为集群的 ConfigNode-leader</li></ul></li></ul><h3 id="展示-datanode-信息" tabindex="-1"><a class="header-anchor" href="#展示-datanode-信息"><span>展示 DataNode 信息</span></a></h3><p>当前 IoTDB 支持使用如下 SQL 展示 DataNode 的信息：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW DATANODES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; create timeseries root.sg.d1.s1 with datatype=BOOLEAN,encoding=PLAIN</span>
<span class="line">Msg: The statement is executed successfully.</span>
<span class="line">IoTDB&gt; create timeseries root.sg.d2.s1 with datatype=BOOLEAN,encoding=PLAIN</span>
<span class="line">Msg: The statement is executed successfully.</span>
<span class="line">IoTDB&gt; create timeseries root.ln.d1.s1 with datatype=BOOLEAN,encoding=PLAIN</span>
<span class="line">Msg: The statement is executed successfully.</span>
<span class="line">IoTDB&gt; show datanodes</span>
<span class="line">+------+-------+----------+-------+-------------+---------------+</span>
<span class="line">|NodeID| Status|RpcAddress|RpcPort|DataRegionNum|SchemaRegionNum|</span>
<span class="line">+------+-------+----------+-------+-------------+---------------+</span>
<span class="line">|     1|Running| 127.0.0.1|   6667|            0|              1|</span>
<span class="line">|     2|Running| 127.0.0.1|   6668|            0|              1|</span>
<span class="line">+------+-------+----------+-------+-------------+---------------+</span>
<span class="line"></span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.007s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; insert into root.ln.d1(timestamp,s1) values(1,true)</span>
<span class="line">Msg: The statement is executed successfully.</span>
<span class="line">IoTDB&gt; show datanodes</span>
<span class="line">+------+-------+----------+-------+-------------+---------------+</span>
<span class="line">|NodeID| Status|RpcAddress|RpcPort|DataRegionNum|SchemaRegionNum|</span>
<span class="line">+------+-------+----------+-------+-------------+---------------+</span>
<span class="line">|     1|Running| 127.0.0.1|   6667|            1|              1|</span>
<span class="line">|     2|Running| 127.0.0.1|   6668|            0|              1|</span>
<span class="line">+------+-------+----------+-------+-------------+---------------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.006s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="datanode-状态定义" tabindex="-1"><a class="header-anchor" href="#datanode-状态定义"><span>DataNode 状态定义</span></a></h4><p>DataNode 的状态机如下图所示：<br><img style="width:100%;max-width:500px;max-height:500px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Cluster/DataNode-StateMachine-ZH.jpg"></p><p>对 DataNode 各状态定义如下：</p><ul><li><strong>Running</strong>: DataNode 正常运行，可读可写</li><li><strong>Unknown</strong>: DataNode 未正常上报心跳，ConfigNode 认为该 DataNode 不可读写 <ul><li>少数 Unknown DataNode 不影响集群读写</li></ul></li><li><strong>Removing</strong>: DataNode 正在移出集群，不可读写 <ul><li>少数 Removing DataNode 不影响集群读写</li></ul></li><li><strong>ReadOnly</strong>: DataNode 磁盘剩余空间低于 disk_warning_threshold（默认 5%），DataNode 可读但不能写入，不能同步数据 <ul><li>少数 ReadOnly DataNode 不影响集群读写</li><li>ReadOnly DataNode 可以查询元数据和数据</li><li>ReadOnly DataNode 可以删除元数据和数据</li><li>ReadOnly DataNode 可以创建元数据，不能写入数据</li><li>所有 DataNode 处于 ReadOnly 状态时，集群不能写入数据，仍可以创建 Database 和元数据</li></ul></li></ul><p><strong>对于一个 DataNode</strong>，不同状态元数据查询、创建、删除的影响如下表所示：</p><table><thead><tr><th>DataNode 状态</th><th>可读</th><th>可创建</th><th>可删除</th></tr></thead><tbody><tr><td>Running</td><td>是</td><td>是</td><td>是</td></tr><tr><td>Unknown</td><td>否</td><td>否</td><td>否</td></tr><tr><td>Removing</td><td>否</td><td>否</td><td>否</td></tr><tr><td>ReadOnly</td><td>是</td><td>是</td><td>是</td></tr></tbody></table><p><strong>对于一个 DataNode</strong>，不同状态数据查询、写入、删除的影响如下表所示：</p><table><thead><tr><th>DataNode 状态</th><th>可读</th><th>可写</th><th>可删除</th></tr></thead><tbody><tr><td>Running</td><td>是</td><td>是</td><td>是</td></tr><tr><td>Unknown</td><td>否</td><td>否</td><td>否</td></tr><tr><td>Removing</td><td>否</td><td>否</td><td>否</td></tr><tr><td>ReadOnly</td><td>是</td><td>否</td><td>是</td></tr></tbody></table><h3 id="展示全部节点信息" tabindex="-1"><a class="header-anchor" href="#展示全部节点信息"><span>展示全部节点信息</span></a></h3><p>当前 IoTDB 支持使用如下 SQL 展示全部节点的信息：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CLUSTER</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show cluster</span>
<span class="line">+------+----------+-------+---------------+------------+</span>
<span class="line">|NodeID|  NodeType| Status|InternalAddress|InternalPort|</span>
<span class="line">+------+----------+-------+---------------+------------+</span>
<span class="line">|     0|ConfigNode|Running|      127.0.0.1|       10710|</span>
<span class="line">|     1|ConfigNode|Running|      127.0.0.1|       10711|</span>
<span class="line">|     2|ConfigNode|Running|      127.0.0.1|       10712|</span>
<span class="line">|     3|  DataNode|Running|      127.0.0.1|       10730|</span>
<span class="line">|     4|  DataNode|Running|      127.0.0.1|       10731|</span>
<span class="line">|     5|  DataNode|Running|      127.0.0.1|       10732|</span>
<span class="line">+------+----------+-------+---------------+------------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.011s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在节点被关停后，它的状态也会改变，如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show cluster</span>
<span class="line">+------+----------+-------+---------------+------------+</span>
<span class="line">|NodeID|  NodeType| Status|InternalAddress|InternalPort|</span>
<span class="line">+------+----------+-------+---------------+------------+</span>
<span class="line">|     0|ConfigNode|Running|      127.0.0.1|       10710|</span>
<span class="line">|     1|ConfigNode|Unknown|      127.0.0.1|       10711|</span>
<span class="line">|     2|ConfigNode|Running|      127.0.0.1|       10712|</span>
<span class="line">|     3|  DataNode|Running|      127.0.0.1|       10730|</span>
<span class="line">|     4|  DataNode|Running|      127.0.0.1|       10731|</span>
<span class="line">|     5|  DataNode|Running|      127.0.0.1|       10732|</span>
<span class="line">+------+----------+-------+---------------+------------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.012s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示全部节点的详细配置信息：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CLUSTER DETAILS</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show cluster details</span>
<span class="line">+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+</span>
<span class="line">|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|RpcAddress|RpcPort|MppPort|SchemaConsensusPort|DataConsensusPort|</span>
<span class="line">+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+</span>
<span class="line">|     0|ConfigNode|Running|      127.0.0.1|       10710|              10720|          |       |       |                   |                 |</span>
<span class="line">|     1|ConfigNode|Running|      127.0.0.1|       10711|              10721|          |       |       |                   |                 |</span>
<span class="line">|     2|ConfigNode|Running|      127.0.0.1|       10712|              10722|          |       |       |                   |                 |</span>
<span class="line">|     3|  DataNode|Running|      127.0.0.1|       10730|                   | 127.0.0.1|   6667|  10740|              10750|            10760|</span>
<span class="line">|     4|  DataNode|Running|      127.0.0.1|       10731|                   | 127.0.0.1|   6668|  10741|              10751|            10761|</span>
<span class="line">|     5|  DataNode|Running|      127.0.0.1|       10732|                   | 127.0.0.1|   6669|  10742|              10752|            10762|</span>
<span class="line">+------+----------+-------+---------------+------------+-------------------+----------+-------+-------+-------------------+-----------------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.340s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="展示-region-信息" tabindex="-1"><a class="header-anchor" href="#展示-region-信息"><span>展示 Region 信息</span></a></h3><p>集群中以 SchemaRegion/DataRegion 作为元数据/数据的复制和管理单元，Region 的状态和分布对于系统运维和测试有很大帮助，如以下场景：</p><ul><li>查看集群中各个 Region 被分配到了哪些 DataNode，是否均衡</li><li>查看集群中各个 Region 被分配了哪些分区，是否均衡</li><li>查看集群中各个 RegionGroup 的 leader 被分配到了哪些 DataNode，是否均衡</li></ul><p>当前 IoTDB 支持使用如下 SQL 展示 Region 信息：</p><ul><li><code>SHOW REGIONS</code>: 展示所有 Region 分布</li><li><code>SHOW SCHEMA REGIONS</code>: 展示所有 SchemaRegion 分布</li><li><code>SHOW DATA REGIONS</code>: 展示所有 DataRegion 分布</li><li><code>SHOW (DATA|SCHEMA)? REGIONS OF DATABASE &lt;sg1,sg2,...&gt;</code>: 展示指定数据库 &lt;sg1,sg2,...&gt; 对应的 Region 分布</li><li><code>SHOW (DATA|SCHEMA)? REGIONS ON NODEID &lt;id1,id2,...&gt;</code>: 展示指定节点 &lt;id1,id2,...&gt; 对应的 Region 分布</li><li><code>SHOW (DATA|SCHEMA)? REGIONS (OF DATABASE &lt;sg1,sg2,...&gt;)? (ON NODEID &lt;id1,id2,...&gt;)?</code>: 展示指定数据库 &lt;sg1,sg2,...&gt; 在指定节点 &lt;id1,id2,...&gt; 对应的 Region 分布</li></ul><p>展示所有 Region 的分布：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show regions</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.013|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:18.245|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         3| 127.0.0.1|   6669|  Leader|2023-03-07T17:32:18.398|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:20.011|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:20.395|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:19.232|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:19.450|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.637|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">Total line number = 12</span>
<span class="line">It costs 0.165s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，SeriesSlotNum 指的是 region 内 seriesSlot 的个数。同样地，TimeSlotNum 也指 region 内 timeSlot 的个数。</p><p>展示 SchemaRegion 或 DataRegion 的分布：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show data regions</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.013|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:20.011|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:20.395|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.011s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show schema regions</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:18.245|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         3| 127.0.0.1|   6669|  Leader|2023-03-07T17:32:18.398|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:19.232|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:19.450|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.637|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.012s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示指定数据库 &lt;sg1,sg2,...&gt; 对应的 Region 分布：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show regions of database root.sg1</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|</span>
<span class="line">+--------+------------+-------+-- -----+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.013|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:18.245|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         3| 127.0.0.1|   6669|  Leader|2023-03-07T17:32:18.398|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.007s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show regions of database root.sg1, root.sg2</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.013|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:18.245|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         3| 127.0.0.1|   6669|  Leader|2023-03-07T17:32:18.398|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:20.011|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:20.395|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:19.232|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:19.450|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.637|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">Total line number = 12</span>
<span class="line">It costs 0.009s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show data regions of database root.sg1, root.sg2</span>
<span class="line">+--------+----------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|RegionId|      Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|</span>
<span class="line">+--------+----------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|       0|DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|</span>
<span class="line">|       0|DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|</span>
<span class="line">|       0|DataRegion|Running|root.sg1|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.013|</span>
<span class="line">|       2|DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|</span>
<span class="line">|       2|DataRegion|Running|root.sg2|            1|          1|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:20.011|</span>
<span class="line">|       2|DataRegion|Running|root.sg2|            1|          1|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:20.395|</span>
<span class="line">+--------+----------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.007s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show schema regions of database root.sg1, root.sg2</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:18.245|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         3| 127.0.0.1|   6669|  Leader|2023-03-07T17:32:18.398|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:19.232|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:19.450|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         3| 127.0.0.1|   6669|Follower|2023-03-07T17:32:19.637|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.009s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示指定节点 &lt;id1,id2,...&gt; 对应的 Region 分布：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show regions on nodeid 1</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:19.232|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.165s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show regions on nodeid 1, 2</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:18.245|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:19.011|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:19.232|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|            1|          0|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:19.450|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">Total line number = 8</span>
<span class="line">It costs 0.165s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示指定数据库 &lt;sg1,sg2,...&gt; 在指定节点 &lt;id1,id2,...&gt; 对应的 Region 分布：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show regions of database root.sg1 on nodeid 1</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|            1|          0|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.111|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.165s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show data regions of database root.sg1, root.sg2 on nodeid 1, 2 </span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlotNum|TimeSlotNum|DataNodeId|RpcAddress|RpcPort|    Role|             CreateTime|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         1| 127.0.0.1|   6667|Follower|2023-03-07T17:32:18.520|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|            1|          1|         2| 127.0.0.1|   6668|  Leader|2023-03-07T17:32:18.749|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         1| 127.0.0.1|   6667|  Leader|2023-03-07T17:32:19.834|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|            1|          1|         2| 127.0.0.1|   6668|Follower|2023-03-07T17:32:19.011|</span>
<span class="line">+--------+------------+-------+--------+-------------+-----------+----------+----------+-------+--------+-----------------------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.165s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="region-状态定义" tabindex="-1"><a class="header-anchor" href="#region-状态定义"><span>Region 状态定义</span></a></h4><p>Region 继承所在 DataNode 的状态，对 Region 各状态定义如下：</p><ul><li><strong>Running</strong>: Region 所在 DataNode 正常运行，Region 可读可写</li><li><strong>Unknown</strong>: Region 所在 DataNode 未正常上报心跳，ConfigNode 认为该 Region 不可读写</li><li><strong>Removing</strong>: Region 所在 DataNode 正在被移出集群，Region 不可读写</li><li><strong>ReadOnly</strong>: Region 所在 DataNode 的磁盘剩余空间低于 disk_warning_threshold（默认 5%），Region 可读，但不能写入，不能同步数据</li></ul><p><strong>单个 Region 的状态切换不会影响所属 RegionGroup 的运行</strong>，<br> 在设置多副本集群时（即元数据副本数和数据副本数大于 1），<br> 同 RegionGroup 其它 Running 状态的 Region 能保证该 RegionGroup 的高可用性。</p><p><strong>对于一个 RegionGroup：</strong></p><ul><li>当且仅当严格多于一半的 Region 处于 Running 状态时， 该 RegionGroup 可进行数据的查询、写入和删除操作</li><li>如果处于 Running 状态的 Region 少于一半，该 RegionGroup 不可进行数据的数据的查询、写入和删除操作</li></ul><h3 id="展示集群槽信息" tabindex="-1"><a class="header-anchor" href="#展示集群槽信息"><span>展示集群槽信息</span></a></h3><p>集群使用分区来管理元数据和数据，分区定义如下：</p><ul><li><strong>元数据分区</strong>：SeriesSlot</li><li><strong>数据分区</strong>：&lt;SeriesSlot，SeriesTimeSlot&gt;</li></ul>`,64)),d("p",null,[n[1]||(n[1]=s("在文档")),t(a,{to:"/zh/UserGuide/V1.1.x/Cluster/Cluster-Concept.html"},{default:o(()=>n[0]||(n[0]=[s("Cluster-Concept")])),_:1}),n[2]||(n[2]=s("中可以查看详细信息。"))]),n[4]||(n[4]=e(`<p>可以使用以下 SQL 来查询分区对应信息：</p><h4 id="展示数据分区所在的-dataregion" tabindex="-1"><a class="header-anchor" href="#展示数据分区所在的-dataregion"><span>展示数据分区所在的 DataRegion</span></a></h4><p>展示一个数据分区（或一个序列槽下的所有数据分区）所在的 DataRegion:</p><ul><li><code>SHOW DATA REGIONID OF root.sg WHERE SERIESSLOTID=s0 (AND TIMESLOTID=t0)</code></li></ul><p>有如下几点说明：</p><ol><li><p>s0、t0均只能为数字。</p></li><li><p>TimeSlotId 是 SeriesTimeSlotId 的简称。</p></li><li><p>”SERIESSLOTID=s0”可以被替换为”DEVICEID=xxx.xx.xx“。 这样的话，sql会自动计算对应该设备id的序列槽。</p></li><li><p>同样的，&quot;TIMESLOTID=t0&quot;也可以被替换为&quot;TIMESTAMP=t1&quot;。这样，SQL会计算该时间戳对应的时间槽，也就是时间段包含该时间戳的时间槽。</p></li></ol><p>示例:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show data regionid of root.sg where seriesslotid=5286 and timeslotid=0</span>
<span class="line">+--------+</span>
<span class="line">|RegionId|</span>
<span class="line">+--------+</span>
<span class="line">|       1|</span>
<span class="line">+--------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.006s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show data regionid of root.sg where seriesslotid=5286</span>
<span class="line">+--------+</span>
<span class="line">|RegionId|</span>
<span class="line">+--------+</span>
<span class="line">|       1|</span>
<span class="line">|       2|</span>
<span class="line">+--------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.006s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="展示元数据分区所在的-schemaregion" tabindex="-1"><a class="header-anchor" href="#展示元数据分区所在的-schemaregion"><span>展示元数据分区所在的 SchemaRegion</span></a></h4><p>展示一个元数据分区所在的 SchemaRegion：</p><ul><li><code>SHOW SCHEMA REGIONID OF root.sg WHERE SERIESSLOTID=s0</code></li></ul><p>同样的，”SERIESSLOTID“与”TIMESLOTID“依然是可替换的。</p><p>示例:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show schema regionid of root.sg where seriesslotid=5286</span>
<span class="line">+--------+</span>
<span class="line">|RegionId|</span>
<span class="line">+--------+</span>
<span class="line">|       0|</span>
<span class="line">+--------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.007s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="展示序列槽下的时间槽" tabindex="-1"><a class="header-anchor" href="#展示序列槽下的时间槽"><span>展示序列槽下的时间槽</span></a></h4><p>展示一个序列槽下的所有时间槽：</p><ul><li><code>SHOW TIMESLOTID OF root.sg WHERE SERIESLOTID=s0 (AND STARTTIME=t1) (AND ENDTIME=t2)</code></li></ul><p>示例:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeslotid of root.sg where seriesslotid=5286</span>
<span class="line">+----------+</span>
<span class="line">|TimeSlotId|</span>
<span class="line">+----------+</span>
<span class="line">|         0|</span>
<span class="line">|      1000|</span>
<span class="line">+----------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.007s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="展示数据库的序列槽" tabindex="-1"><a class="header-anchor" href="#展示数据库的序列槽"><span>展示数据库的序列槽</span></a></h4><p>展示一个数据库内，数据，元数据或是所有的序列槽：</p><ul><li><code>SHOW (DATA|SCHEMA)? SERIESSLOTID OF root.sg</code></li></ul><p>示例:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show data seriesslotid of root.sg</span>
<span class="line">+------------+</span>
<span class="line">|SeriesSlotId|</span>
<span class="line">+------------+</span>
<span class="line">|        5286|</span>
<span class="line">+------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.007s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show schema seriesslotid of root.sg</span>
<span class="line">+------------+</span>
<span class="line">|SeriesSlotId|</span>
<span class="line">+------------+</span>
<span class="line">|        5286|</span>
<span class="line">+------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.006s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show seriesslotid of root.sg</span>
<span class="line">+------------+</span>
<span class="line">|SeriesSlotId|</span>
<span class="line">+------------+</span>
<span class="line">|        5286|</span>
<span class="line">+------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.006s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="迁移-region" tabindex="-1"><a class="header-anchor" href="#迁移-region"><span>迁移 Region</span></a></h3><p>以下 SQL 语句可以被用于手动迁移一个 region， 可用于负载均衡或其他目的。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">MIGRATE REGION &lt;Region-id&gt; FROM &lt;original-DataNodeId&gt; TO &lt;dest-DataNodeId&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW REGIONS</span>
<span class="line">+--------+------------+-------+-------------+------------+----------+----------+----------+-------+--------+</span>
<span class="line">|RegionId|        Type| Status|     Database|SeriesSlotId|TimeSlotId|DataNodeId|RpcAddress|RpcPort|    Role|</span>
<span class="line">+--------+------------+-------+-------------+------------+----------+----------+----------+-------+--------+</span>
<span class="line">|       0|SchemaRegion|Running|root.test.g_0|         500|         0|         3| 127.0.0.1|   6670|  Leader|</span>
<span class="line">|       0|SchemaRegion|Running|root.test.g_0|         500|         0|         4| 127.0.0.1|   6681|Follower|</span>
<span class="line">|       0|SchemaRegion|Running|root.test.g_0|         500|         0|         5| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       1|  DataRegion|Running|root.test.g_0|         183|       200|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       1|  DataRegion|Running|root.test.g_0|         183|       200|         3| 127.0.0.1|   6670|Follower|</span>
<span class="line">|       1|  DataRegion|Running|root.test.g_0|         183|       200|         7| 127.0.0.1|   6669|  Leader|</span>
<span class="line">|       2|  DataRegion|Running|root.test.g_0|         181|       200|         3| 127.0.0.1|   6670|  Leader|</span>
<span class="line">|       2|  DataRegion|Running|root.test.g_0|         181|       200|         4| 127.0.0.1|   6681|Follower|</span>
<span class="line">|       2|  DataRegion|Running|root.test.g_0|         181|       200|         5| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       3|  DataRegion|Running|root.test.g_0|         180|       200|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       3|  DataRegion|Running|root.test.g_0|         180|       200|         5| 127.0.0.1|   6668|  Leader|</span>
<span class="line">|       3|  DataRegion|Running|root.test.g_0|         180|       200|         7| 127.0.0.1|   6669|Follower|</span>
<span class="line">|       4|  DataRegion|Running|root.test.g_0|         179|       200|         3| 127.0.0.1|   6670|Follower|</span>
<span class="line">|       4|  DataRegion|Running|root.test.g_0|         179|       200|         4| 127.0.0.1|   6681|  Leader|</span>
<span class="line">|       4|  DataRegion|Running|root.test.g_0|         179|       200|         7| 127.0.0.1|   6669|Follower|</span>
<span class="line">|       5|  DataRegion|Running|root.test.g_0|         179|       200|         1| 127.0.0.1|   6667|  Leader|</span>
<span class="line">|       5|  DataRegion|Running|root.test.g_0|         179|       200|         4| 127.0.0.1|   6681|Follower|</span>
<span class="line">|       5|  DataRegion|Running|root.test.g_0|         179|       200|         5| 127.0.0.1|   6668|Follower|</span>
<span class="line">+--------+------------+-------+-------------+------------+----------+----------+----------+-------+--------+</span>
<span class="line">Total line number = 18</span>
<span class="line">It costs 0.161s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; MIGRATE REGION 1 FROM 3 TO 4</span>
<span class="line">Msg: The statement is executed successfully.</span>
<span class="line"></span>
<span class="line">IoTDB&gt; SHOW REGIONS</span>
<span class="line">+--------+------------+-------+-------------+------------+----------+----------+----------+-------+--------+</span>
<span class="line">|RegionId|        Type| Status|     Database|SeriesSlotId|TimeSlotId|DataNodeId|RpcAddress|RpcPort|    Role|</span>
<span class="line">+--------+------------+-------+-------------+------------+----------+----------+----------+-------+--------+</span>
<span class="line">|       0|SchemaRegion|Running|root.test.g_0|         500|         0|         3| 127.0.0.1|   6670|  Leader|</span>
<span class="line">|       0|SchemaRegion|Running|root.test.g_0|         500|         0|         4| 127.0.0.1|   6681|Follower|</span>
<span class="line">|       0|SchemaRegion|Running|root.test.g_0|         500|         0|         5| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       1|  DataRegion|Running|root.test.g_0|         183|       200|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       1|  DataRegion|Running|root.test.g_0|         183|       200|         4| 127.0.0.1|   6681|Follower|</span>
<span class="line">|       1|  DataRegion|Running|root.test.g_0|         183|       200|         7| 127.0.0.1|   6669|  Leader|</span>
<span class="line">|       2|  DataRegion|Running|root.test.g_0|         181|       200|         3| 127.0.0.1|   6670|  Leader|</span>
<span class="line">|       2|  DataRegion|Running|root.test.g_0|         181|       200|         4| 127.0.0.1|   6681|Follower|</span>
<span class="line">|       2|  DataRegion|Running|root.test.g_0|         181|       200|         5| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       3|  DataRegion|Running|root.test.g_0|         180|       200|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       3|  DataRegion|Running|root.test.g_0|         180|       200|         5| 127.0.0.1|   6668|  Leader|</span>
<span class="line">|       3|  DataRegion|Running|root.test.g_0|         180|       200|         7| 127.0.0.1|   6669|Follower|</span>
<span class="line">|       4|  DataRegion|Running|root.test.g_0|         179|       200|         3| 127.0.0.1|   6670|Follower|</span>
<span class="line">|       4|  DataRegion|Running|root.test.g_0|         179|       200|         4| 127.0.0.1|   6681|  Leader|</span>
<span class="line">|       4|  DataRegion|Running|root.test.g_0|         179|       200|         7| 127.0.0.1|   6669|Follower|</span>
<span class="line">|       5|  DataRegion|Running|root.test.g_0|         179|       200|         1| 127.0.0.1|   6667|  Leader|</span>
<span class="line">|       5|  DataRegion|Running|root.test.g_0|         179|       200|         4| 127.0.0.1|   6681|Follower|</span>
<span class="line">|       5|  DataRegion|Running|root.test.g_0|         179|       200|         5| 127.0.0.1|   6668|Follower|</span>
<span class="line">+--------+------------+-------+-------------+------------+----------+----------+----------+-------+--------+</span>
<span class="line">Total line number = 18</span>
<span class="line">It costs 0.165s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29))])}const m=i(p,[["render",v],["__file","Cluster-Maintenance.html.vue"]]),b=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Cluster/Cluster-Maintenance.html","title":"","lang":"zh-CN","frontmatter":{"description":"集群运维命令 展示集群配置 当前 IoTDB 支持使用如下 SQL 展示集群的关键参数： 示例： 注意： 必须保证该 SQL 展示的所有配置参数在同一集群各个节点完全一致 展示 ConfigNode 信息 当前 IoTDB 支持使用如下 SQL 展示 ConfigNode 的信息： 示例： ConfigNode 状态定义 对 ConfigNode 各状...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Cluster/Cluster-Maintenance.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Cluster/Cluster-Maintenance.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"集群运维命令 展示集群配置 当前 IoTDB 支持使用如下 SQL 展示集群的关键参数： 示例： 注意： 必须保证该 SQL 展示的所有配置参数在同一集群各个节点完全一致 展示 ConfigNode 信息 当前 IoTDB 支持使用如下 SQL 展示 ConfigNode 的信息： 示例： ConfigNode 状态定义 对 ConfigNode 各状..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"集群运维命令","slug":"集群运维命令","link":"#集群运维命令","children":[{"level":3,"title":"展示集群配置","slug":"展示集群配置","link":"#展示集群配置","children":[]},{"level":3,"title":"展示 ConfigNode 信息","slug":"展示-confignode-信息","link":"#展示-confignode-信息","children":[]},{"level":3,"title":"展示 DataNode 信息","slug":"展示-datanode-信息","link":"#展示-datanode-信息","children":[]},{"level":3,"title":"展示全部节点信息","slug":"展示全部节点信息","link":"#展示全部节点信息","children":[]},{"level":3,"title":"展示 Region 信息","slug":"展示-region-信息","link":"#展示-region-信息","children":[]},{"level":3,"title":"展示集群槽信息","slug":"展示集群槽信息","link":"#展示集群槽信息","children":[]},{"level":3,"title":"迁移 Region","slug":"迁移-region","link":"#迁移-region","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":12.92,"words":3875},"filePathRelative":"zh/UserGuide/V1.1.x/Cluster/Cluster-Maintenance.md","localizedDate":"2023年7月10日","autoDesc":true}');export{m as comp,b as data};
