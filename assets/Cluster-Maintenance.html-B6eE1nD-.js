import{_ as s,c as e,b as a,o as i}from"./app-BHE9oQwv.js";const l={};function d(t,n){return i(),e("div",null,n[0]||(n[0]=[a(`<h1 id="集群运维命令" tabindex="-1"><a class="header-anchor" href="#集群运维命令"><span>集群运维命令</span></a></h1><h2 id="展示集群配置" tabindex="-1"><a class="header-anchor" href="#展示集群配置"><span>展示集群配置</span></a></h2><p>当前 IoTDB 支持使用如下 SQL 展示集群的关键参数：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW VARIABLES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>示例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show variables</span>
<span class="line">+----------------------------------+-----------------------------------------------------------------+</span>
<span class="line">|                          Variable|                                                            Value|</span>
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
<span class="line">|            DataRegionPerProcessor|                                                              1.0|</span>
<span class="line">|           LeastDataRegionGroupNum|                                                                5|</span>
<span class="line">|                     SeriesSlotNum|                                                            10000|</span>
<span class="line">|           SeriesSlotExecutorClass|org.apache.iotdb.commons.partition.executor.hash.BKDRHashExecutor|</span>
<span class="line">|         DiskSpaceWarningThreshold|                                                             0.05|</span>
<span class="line">+----------------------------------+-----------------------------------------------------------------+</span>
<span class="line">Total line number = 15</span>
<span class="line">It costs 0.225s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong> 必须保证该 SQL 展示的所有配置参数在同一集群各个节点完全一致</p><h2 id="展示-confignode-信息" tabindex="-1"><a class="header-anchor" href="#展示-confignode-信息"><span>展示 ConfigNode 信息</span></a></h2><p>当前 IoTDB 支持使用如下 SQL 展示 ConfigNode 的信息：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CONFIGNODES</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="confignode-状态定义" tabindex="-1"><a class="header-anchor" href="#confignode-状态定义"><span>ConfigNode 状态定义</span></a></h3><p>对 ConfigNode 各状态定义如下：</p><ul><li><strong>Running</strong>: ConfigNode 正常运行</li><li><strong>Unknown</strong>: ConfigNode 未正常上报心跳</li></ul><h2 id="展示-datanode-信息" tabindex="-1"><a class="header-anchor" href="#展示-datanode-信息"><span>展示 DataNode 信息</span></a></h2><p>当前 IoTDB 支持使用如下 SQL 展示 DataNode 的信息：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW DATANODES</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="datanode-状态定义" tabindex="-1"><a class="header-anchor" href="#datanode-状态定义"><span>DataNode 状态定义</span></a></h3><p>DataNode 的状态机如下图所示：<br><img style="width:100%;max-width:500px;max-height:500px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Cluster/DataNode-StateMachine-ZH.jpg?raw=true"></p><p>对 DataNode 各状态定义如下：</p><ul><li><strong>Running</strong>: DataNode 正常运行，可读可写</li><li><strong>Unknown</strong>: DataNode 未正常上报心跳，ConfigNode 认为该 DataNode 不可读写</li><li><strong>Removing</strong>: DataNode 正在移出集群，不可读写</li><li><strong>ReadOnly</strong>: DataNode 磁盘剩余空间低于 disk_warning_threshold（默认 5%），DataNode 可读但不能写入，不能同步数据</li></ul><h2 id="展示全部节点信息" tabindex="-1"><a class="header-anchor" href="#展示全部节点信息"><span>展示全部节点信息</span></a></h2><p>当前 IoTDB 支持使用如下 SQL 展示全部节点的信息：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CLUSTER</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="展示-region-信息" tabindex="-1"><a class="header-anchor" href="#展示-region-信息"><span>展示 Region 信息</span></a></h2><p>集群中以 SchemaRegion/DataRegion 作为元数据/数据的复制和管理单元，Region 的状态和分布对于系统运维和测试有很大帮助，如以下场景：</p><ul><li>查看集群中各个 Region 被分配到了哪些 DataNode，是否均衡</li><li>查看集群中各个 Region 被分配了哪些分区，是否均衡</li><li>查看集群中各个 RegionGroup 的 leader 被分配到了哪些 DataNode，是否均衡</li></ul><p>当前 IoTDB 支持使用如下 SQL 展示 Region 信息：</p><ul><li><code>SHOW REGIONS</code>: 展示所有 Region 分布</li><li><code>SHOW SCHEMA REGIONS</code>: 展示所有 SchemaRegion 分布</li><li><code>SHOW DATA REGIONS</code>: 展示所有 DataRegion 分布</li><li><code>SHOW (DATA|SCHEMA)? REGIONS OF DATABASE &lt;sg1,sg2,...&gt;</code>: 展示指定数据库 &lt;sg1,sg2,...&gt; 对应的 Region 分布</li></ul><p>展示所有 Region 的分布：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show regions</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|          1|        1|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|          1|        1|         2| 127.0.0.1|   6668|  Leader|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|          1|        1|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         2| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         3| 127.0.0.1|   6669|  Leader|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|          1|        1|         1| 127.0.0.1|   6667|  Leader|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|          1|        1|         2| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|          1|        1|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|          1|        0|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|          1|        0|         2| 127.0.0.1|   6668|  Leader|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|          1|        0|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">Total line number = 12</span>
<span class="line">It costs 0.165s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示 SchemaRegion 或 DataRegion 的分布：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show data regions</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|          1|        1|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|          1|        1|         2| 127.0.0.1|   6668|  Leader|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|          1|        1|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|          1|        1|         1| 127.0.0.1|   6667|  Leader|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|          1|        1|         2| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|          1|        1|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.011s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show schema regions</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         2| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         3| 127.0.0.1|   6669|  Leader|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|          1|        0|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|          1|        0|         2| 127.0.0.1|   6668|  Leader|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|          1|        0|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.012s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>展示指定数据库 &lt;sg1,sg2,...&gt; 对应的 Region 分布：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show regions of database root.sg1</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|</span>
<span class="line">+--------+------------+-------+-- -----+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|          1|        1|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|          1|        1|         2| 127.0.0.1|   6668|  Leader|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|          1|        1|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         2| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         3| 127.0.0.1|   6669|  Leader|</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.007s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show regions of database root.sg1, root.sg2</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|          1|        1|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|          1|        1|         2| 127.0.0.1|   6668|  Leader|</span>
<span class="line">|       0|  DataRegion|Running|root.sg1|          1|        1|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         2| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         3| 127.0.0.1|   6669|  Leader|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|          1|        1|         1| 127.0.0.1|   6667|  Leader|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|          1|        1|         2| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       2|  DataRegion|Running|root.sg2|          1|        1|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|          1|        0|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|          1|        0|         2| 127.0.0.1|   6668|  Leader|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|          1|        0|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">Total line number = 12</span>
<span class="line">It costs 0.009s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show data regions of database root.sg1, root.sg2</span>
<span class="line">+--------+----------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|RegionId|      Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|</span>
<span class="line">+--------+----------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|       0|DataRegion|Running|root.sg1|          1|        1|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       0|DataRegion|Running|root.sg1|          1|        1|         2| 127.0.0.1|   6668|  Leader|</span>
<span class="line">|       0|DataRegion|Running|root.sg1|          1|        1|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">|       2|DataRegion|Running|root.sg2|          1|        1|         1| 127.0.0.1|   6667|  Leader|</span>
<span class="line">|       2|DataRegion|Running|root.sg2|          1|        1|         2| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       2|DataRegion|Running|root.sg2|          1|        1|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">+--------+----------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.007s</span>
<span class="line"></span>
<span class="line">IoTDB&gt; show schema regions of database root.sg1, root.sg2</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|RegionId|        Type| Status|Database|SeriesSlots|TimeSlots|DataNodeId|RpcAddress|RpcPort|    Role|</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         2| 127.0.0.1|   6668|Follower|</span>
<span class="line">|       1|SchemaRegion|Running|root.sg1|          1|        0|         3| 127.0.0.1|   6669|  Leader|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|          1|        0|         1| 127.0.0.1|   6667|Follower|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|          1|        0|         2| 127.0.0.1|   6668|  Leader|</span>
<span class="line">|       3|SchemaRegion|Running|root.sg2|          1|        0|         3| 127.0.0.1|   6669|Follower|</span>
<span class="line">+--------+------------+-------+--------+-----------+---------+----------+----------+-------+--------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.009s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="region-状态定义" tabindex="-1"><a class="header-anchor" href="#region-状态定义"><span>Region 状态定义</span></a></h3><p>Region 继承所在 DataNode 的状态，对 Region 各状态定义如下：</p><ul><li><strong>Running</strong>: Region 所在 DataNode 正常运行，Region 可读可写</li><li><strong>Unknown</strong>: Region 所在 DataNode 未正常上报心跳，ConfigNode 认为该 Region 不可读写</li><li><strong>Removing</strong>: Region 所在 DataNode 正在被移出集群，Region 不可读写</li><li><strong>ReadOnly</strong>: Region 所在 DataNode 的磁盘剩余空间低于 disk_warning_threshold（默认 5%），Region 可读，但不能写入，不能同步数据</li></ul><h2 id="展示集群槽信息" tabindex="-1"><a class="header-anchor" href="#展示集群槽信息"><span>展示集群槽信息</span></a></h2><p>集群使用分区来管理元数据和数据，分区定义如下：</p><ul><li><strong>元数据分区</strong>：序列槽</li><li><strong>数据分区</strong>：&lt;序列槽，时间分区槽&gt;</li></ul><p>可以使用以下 SQL 来查询分区对应信息：</p><h3 id="展示数据分区所在的-dataregion" tabindex="-1"><a class="header-anchor" href="#展示数据分区所在的-dataregion"><span>展示数据分区所在的 DataRegion</span></a></h3><p>展示一个数据分区（或一个序列槽下的所有数据分区）所在的 DataRegion:</p><ul><li><code>SHOW DATA REGIONID OF root.sg WHERE SERIESSLOTID=s0 (AND TIMESLOTID=t0)</code></li></ul><p>示例:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show data regionid of root.sg where seriesslotid=5286 and timeslotid=0</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="展示元数据分区所在的-schemaregion" tabindex="-1"><a class="header-anchor" href="#展示元数据分区所在的-schemaregion"><span>展示元数据分区所在的 SchemaRegion</span></a></h3><p>展示一个元数据分区所在的 SchemaRegion：</p><ul><li><code>SHOW SCHEMA REGIONID OF root.sg WHERE SERIESSLOTID=s0</code></li></ul><p>示例:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show schema regionid of root.sg where seriesslotid=5286</span>
<span class="line">+--------+</span>
<span class="line">|RegionId|</span>
<span class="line">+--------+</span>
<span class="line">|       0|</span>
<span class="line">+--------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.007s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="展示序列槽下的时间槽" tabindex="-1"><a class="header-anchor" href="#展示序列槽下的时间槽"><span>展示序列槽下的时间槽</span></a></h3><p>展示一个序列槽下的所有时间槽：</p><ul><li><code>SHOW TIMESLOTID OF root.sg WHERE SERIESLOTID=s0 (AND STARTTIME=t1) (AND ENDTIME=t2)</code></li></ul><p>示例:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeslotid of root.sg where seriesslotid=5286</span>
<span class="line">+----------+</span>
<span class="line">|TimeSlotId|</span>
<span class="line">+----------+</span>
<span class="line">|         0|</span>
<span class="line">|      1000|</span>
<span class="line">+----------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.007s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="展示数据库的序列槽" tabindex="-1"><a class="header-anchor" href="#展示数据库的序列槽"><span>展示数据库的序列槽</span></a></h3><p>展示一个数据库内，数据，元数据或是所有的序列槽：</p><ul><li><code>SHOW (DATA|SCHEMA)? SERIESSLOTID OF root.sg</code></li></ul><p>示例:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show data seriesslotid of root.sg</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,73)]))}const o=s(l,[["render",d],["__file","Cluster-Maintenance.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Cluster/Cluster-Maintenance.html","title":"集群运维命令","lang":"zh-CN","frontmatter":{"description":"集群运维命令 展示集群配置 当前 IoTDB 支持使用如下 SQL 展示集群的关键参数： 示例： 注意： 必须保证该 SQL 展示的所有配置参数在同一集群各个节点完全一致 展示 ConfigNode 信息 当前 IoTDB 支持使用如下 SQL 展示 ConfigNode 的信息： 示例： ConfigNode 状态定义 对 ConfigNode 各状...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Cluster/Cluster-Maintenance.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Cluster/Cluster-Maintenance.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"集群运维命令"}],["meta",{"property":"og:description","content":"集群运维命令 展示集群配置 当前 IoTDB 支持使用如下 SQL 展示集群的关键参数： 示例： 注意： 必须保证该 SQL 展示的所有配置参数在同一集群各个节点完全一致 展示 ConfigNode 信息 当前 IoTDB 支持使用如下 SQL 展示 ConfigNode 的信息： 示例： ConfigNode 状态定义 对 ConfigNode 各状..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"集群运维命令\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"展示集群配置","slug":"展示集群配置","link":"#展示集群配置","children":[]},{"level":2,"title":"展示 ConfigNode 信息","slug":"展示-confignode-信息","link":"#展示-confignode-信息","children":[{"level":3,"title":"ConfigNode 状态定义","slug":"confignode-状态定义","link":"#confignode-状态定义","children":[]}]},{"level":2,"title":"展示 DataNode 信息","slug":"展示-datanode-信息","link":"#展示-datanode-信息","children":[{"level":3,"title":"DataNode 状态定义","slug":"datanode-状态定义","link":"#datanode-状态定义","children":[]}]},{"level":2,"title":"展示全部节点信息","slug":"展示全部节点信息","link":"#展示全部节点信息","children":[]},{"level":2,"title":"展示 Region 信息","slug":"展示-region-信息","link":"#展示-region-信息","children":[{"level":3,"title":"Region 状态定义","slug":"region-状态定义","link":"#region-状态定义","children":[]}]},{"level":2,"title":"展示集群槽信息","slug":"展示集群槽信息","link":"#展示集群槽信息","children":[{"level":3,"title":"展示数据分区所在的 DataRegion","slug":"展示数据分区所在的-dataregion","link":"#展示数据分区所在的-dataregion","children":[]},{"level":3,"title":"展示元数据分区所在的 SchemaRegion","slug":"展示元数据分区所在的-schemaregion","link":"#展示元数据分区所在的-schemaregion","children":[]},{"level":3,"title":"展示序列槽下的时间槽","slug":"展示序列槽下的时间槽","link":"#展示序列槽下的时间槽","children":[]},{"level":3,"title":"展示数据库的序列槽","slug":"展示数据库的序列槽","link":"#展示数据库的序列槽","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":7.19,"words":2157},"filePathRelative":"zh/UserGuide/V1.0.x/Cluster/Cluster-Maintenance.md","localizedDate":"2023年7月10日","autoDesc":true}');export{o as comp,c as data};
