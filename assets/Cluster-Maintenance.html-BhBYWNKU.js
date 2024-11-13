import{_ as i,c as l,b as e,d as t,e as s,a as o,w as d,r,o as c}from"./app-BHE9oQwv.js";const p={};function u(v,n){const a=r("RouteLink");return c(),l("div",null,[n[3]||(n[3]=e(`<h1 id="cluster-information-query-command" tabindex="-1"><a class="header-anchor" href="#cluster-information-query-command"><span>Cluster Information Query Command</span></a></h1><h2 id="show-variables" tabindex="-1"><a class="header-anchor" href="#show-variables"><span>Show Variables</span></a></h2><p>Currently, IoTDB supports showing key parameters of the cluster:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW VARIABLES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show variables</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Notice:</strong> Ensure that all key parameters displayed in this SQL are consist on each node in the same cluster</p><h2 id="show-confignode-information" tabindex="-1"><a class="header-anchor" href="#show-confignode-information"><span>Show ConfigNode information</span></a></h2><p>Currently, IoTDB supports showing ConfigNode information by the following SQL:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CONFIGNODES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show confignodes</span>
<span class="line">+------+-------+---------------+------------+--------+</span>
<span class="line">|NodeID| Status|InternalAddress|InternalPort|    Role|</span>
<span class="line">+------+-------+---------------+------------+--------+</span>
<span class="line">|     0|Running|      127.0.0.1|       10710|  Leader|</span>
<span class="line">|     1|Running|      127.0.0.1|       10711|Follower|</span>
<span class="line">|     2|Running|      127.0.0.1|       10712|Follower|</span>
<span class="line">+------+-------+---------------+------------+--------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.030s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="confignode-status-definition" tabindex="-1"><a class="header-anchor" href="#confignode-status-definition"><span>ConfigNode status definition</span></a></h3><p>The ConfigNode statuses are defined as follows:</p><ul><li><strong>Running</strong>: The ConfigNode is running properly.</li><li><strong>Unknown</strong>: The ConfigNode doesn&#39;t report heartbeat properly. <ul><li>Can&#39;t receive data synchronized from other ConfigNodes</li><li>Won&#39;t be selected as the cluster ConfigNode-leader</li></ul></li></ul><h2 id="show-datanode-information" tabindex="-1"><a class="header-anchor" href="#show-datanode-information"><span>Show DataNode information</span></a></h2><p>Currently, IoTDB supports showing DataNode information by the following SQL:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW DATANODES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; create timeseries root.sg.d1.s1 with datatype=BOOLEAN,encoding=PLAIN</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="datanode-status-definition" tabindex="-1"><a class="header-anchor" href="#datanode-status-definition"><span>DataNode status definition</span></a></h3><p>The state machine of DataNode is shown in the figure below:<br><img style="width:100%;max-width:500px;max-height:500px;margin-left:auto;margin-right:auto;display:block;" src="https://alioss.timecho.com/docs/img/UserGuide/Cluster/DataNode-StateMachine-EN.jpg?raw=true"></p><p>The DataNode statuses are defined as follows:</p><ul><li><strong>Running</strong>: The DataNode is running properly and is readable and writable.</li><li><strong>Unknown</strong>: The DataNode doesn&#39;t report heartbeat properly, the ConfigNode considers the DataNode as unreadable and un-writable. <ul><li>The cluster is still readable and writable if some DataNodes are Unknown</li></ul></li><li><strong>Removing</strong>: The DataNode is being removed from the cluster and is unreadable and un-writable. <ul><li>The cluster is still readable and writable if some DataNodes are Removing</li></ul></li><li><strong>ReadOnly</strong>: The remaining disk space of DataNode is lower than disk_warning_threshold(default is 5%), the DataNode is readable but un-writable and cannot synchronize data. <ul><li>The cluster is still readable and writable if some DataNodes are ReadOnly</li><li>The schema and data in a ReadOnly DataNode is readable</li><li>The schema and data in a ReadOnly DataNode is deletable</li><li>A ReadOnly DataNode is creatable for schema, but un-writable for data</li><li>Data cannot be written to the cluster when all DataNodes are ReadOnly, but new Databases and schema is still creatable</li></ul></li></ul><p><strong>For a DataNode</strong>, the following table describes the impact of schema read, write, and deletion in different status:</p><table><thead><tr><th>DataNode status</th><th>readable</th><th>creatable</th><th>deletable</th></tr></thead><tbody><tr><td>Running</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>Unknown</td><td>no</td><td>no</td><td>no</td></tr><tr><td>Removing</td><td>no</td><td>no</td><td>no</td></tr><tr><td>ReadOnly</td><td>yes</td><td>yes</td><td>yes</td></tr></tbody></table><p><strong>For a DataNode</strong>, the following table describes the impact of data read, write, and deletion in different status:</p><table><thead><tr><th>DataNode status</th><th>readable</th><th>writable</th><th>deletable</th></tr></thead><tbody><tr><td>Running</td><td>yes</td><td>yes</td><td>yes</td></tr><tr><td>Unknown</td><td>no</td><td>no</td><td>no</td></tr><tr><td>Removing</td><td>no</td><td>no</td><td>no</td></tr><tr><td>ReadOnly</td><td>yes</td><td>no</td><td>yes</td></tr></tbody></table><h2 id="show-all-node-information" tabindex="-1"><a class="header-anchor" href="#show-all-node-information"><span>Show all Node information</span></a></h2><p>Currently, IoTDB supports show the information of all Nodes by the following SQL:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CLUSTER</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show cluster</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>After a node is stopped, its status will change, as shown below:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show cluster</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show the details of all nodes:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CLUSTER DETAILS</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show cluster details</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-region-information" tabindex="-1"><a class="header-anchor" href="#show-region-information"><span>Show Region information</span></a></h2><p>The cluster uses a SchemaRegion/DataRegion as a unit for schema/data replication and data management.<br> The Region status and distribution is helpful for system operation and maintenance testing, as shown in the following scenarios:</p><ul><li>Check which DataNodes are allocated to each Region in the cluster and whether they are balanced.</li><li>Check the partitions allocated to each Region in the cluster and whether they are balanced.</li><li>Check which DataNodes are allocated by the leaders of each RegionGroup in the cluster and whether they are balanced.</li></ul><p>Currently, IoTDB supports show Region information by the following SQL:</p><ul><li><code>SHOW REGIONS</code>: Show distribution of all Regions.</li><li><code>SHOW SCHEMA REGIONS</code>: Show distribution of all SchemaRegions.</li><li><code>SHOW DATA REGIONS</code>: Show distribution of all DataRegions.</li><li><code>SHOW (DATA|SCHEMA)? REGIONS OF DATABASE &lt;sg1,sg2,...&gt;</code>: Show Region distribution of specified StorageGroups.</li><li><code>SHOW (DATA|SCHEMA)? REGIONS ON NODEID &lt;id1,id2,...&gt;</code>: Show Region distribution on specified Nodes.</li><li><code>SHOW (DATA|SCHEMA)? REGIONS (OF DATABASE &lt;sg1,sg2,...&gt;)? (ON NODEID &lt;id1,id2,...&gt;)?</code>: Show Region distribution of specified StorageGroups on specified Nodes.</li></ul><p>Show distribution of all Regions:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show regions</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The SeriesSlotNum refers to the number of the seriesSlots in the region. In the same light, the TimeSlotNum means the number of the timeSlots in the region.</p><p>Show the distribution of SchemaRegions or DataRegions:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show data regions</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show Region distribution of specified DataBases:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show regions of database root.sg1</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show Region distribution on specified Nodes:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show regions on nodeid 1</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show Region distribution of specified StorageGroups on specified Nodes：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show regions of database root.sg1 on nodeid 1</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="region-status-definition" tabindex="-1"><a class="header-anchor" href="#region-status-definition"><span>Region status definition</span></a></h3><p>Region inherits the status of the DataNode where the Region resides. And Region states are defined as follows:</p><ul><li><strong>Running</strong>: The DataNode where the Region resides is running properly, the Region is readable and writable.</li><li><strong>Unknown</strong>: The DataNode where the Region resides doesn&#39;t report heartbeat properly, the ConfigNode considers the Region is unreadable and un-writable.</li><li><strong>Removing</strong>: The DataNode where the Region resides is being removed from the cluster, the Region is unreadable and un-writable.</li><li><strong>ReadOnly</strong>: The available disk space of the DataNode where the Region resides is lower than the disk_warning_threshold(5% by default). The Region is readable but un-writable and cannot synchronize data.</li></ul><p><strong>The status switchover of a Region doesn&#39;t affect the belonged RegionGroup</strong>,<br> when setting up a multi-replica cluster(i.e. the number of schema replica and data replica is greater than 1),<br> other Running Regions of the same RegionGroup ensure the high availability of RegionGroup.</p><p><strong>For a RegionGroup:</strong></p><ul><li>It&#39;s readable, writable and deletable if and only if more than half of its Regions are Running</li><li>It&#39;s unreadable, un-writable and un-deletable when the number of its Running Regions is less than half</li></ul><h2 id="show-cluster-slots-information" tabindex="-1"><a class="header-anchor" href="#show-cluster-slots-information"><span>Show cluster slots information</span></a></h2><p>The cluster uses partitions for schema and data arrangement, the partition defined as follows:</p><ul><li><code>SchemaPartition</code>: SeriesSlot</li><li><code>DataPartition</code>: &lt;SeriesSlot, SeriesTimeSlot&gt;</li></ul>`,64)),t("p",null,[n[1]||(n[1]=s("More details can be found in the ")),o(a,{to:"/UserGuide/V1.1.x/Cluster/Cluster-Concept.html"},{default:d(()=>n[0]||(n[0]=[s("Cluster-Concept")])),_:1}),n[2]||(n[2]=s(" document."))]),n[4]||(n[4]=e(`<p>The cluster slots information can be shown by the following SQLs:</p><h3 id="show-the-dataregion-where-a-datapartition-resides-in" tabindex="-1"><a class="header-anchor" href="#show-the-dataregion-where-a-datapartition-resides-in"><span>Show the DataRegion where a DataPartition resides in</span></a></h3><p>Show the DataRegion where a DataPartition(or all DataPartitions under a same series slot) resides in:</p><ul><li><code>SHOW DATA REGIONID OF root.sg WHERE SERIESSLOTID=s0 (AND TIMESLOTID=t0)</code></li></ul><p>Specifications:</p><ol><li><p>The s0, t0 must be numbers.</p></li><li><p>The &quot;TimeSlotId&quot; is short for &quot;SeriesTimeSlotId&quot;.</p></li><li><p>The &quot;SERIESSLOTID=s0&quot; can be substituted by &quot;DEVICEID=xxx.xx.xx&quot;. Using this, the sql will calculate the seriesSlot corresponding to that deviceId.</p></li><li><p>The &quot;TIMESLOTID=t0&quot; can be replaced by &quot;TIMESTAMP=t1&quot;. In this case, the sql will calculate the timeSlot the timestamp belongs to, which starts before the timeStamp and (implicitly) ends after it.</p></li></ol><p>Eg:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show data regionid of root.sg where seriesslotid=5286 and timeslotid=0</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show-the-schemaregion-where-a-schemapartition-resides-in" tabindex="-1"><a class="header-anchor" href="#show-the-schemaregion-where-a-schemapartition-resides-in"><span>Show the SchemaRegion where a SchemaPartition resides in</span></a></h3><p>Show the SchemaRegion where a SchemaPartition resides in:</p><ul><li><code>SHOW SCHEMA REGIONID OF root.sg WHERE SERIESSLOTID=s0</code></li></ul><p>As is illustrated above, the SeriesSlotID and TimeSlotID are both replaceable.</p><p>Eg:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show schema regionid of root.sg where seriesslotid=5286</span>
<span class="line">+--------+</span>
<span class="line">|RegionId|</span>
<span class="line">+--------+</span>
<span class="line">|       0|</span>
<span class="line">+--------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.007s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show-the-time-slots-of-a-series-slot" tabindex="-1"><a class="header-anchor" href="#show-the-time-slots-of-a-series-slot"><span>Show the time slots of a series slot</span></a></h3><p>Show the time slots under a particular series slot.</p><ul><li><code>SHOW TIMESLOTID OF root.sg WHERE SERIESLOTID=s0 (AND STARTTIME=t1) (AND ENDTIME=t2)</code></li></ul><p>Eg:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeslotid of root.sg where seriesslotid=5286</span>
<span class="line">+----------+</span>
<span class="line">|TimeSlotId|</span>
<span class="line">+----------+</span>
<span class="line">|         0|</span>
<span class="line">|      1000|</span>
<span class="line">+----------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.007s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="show-database-s-series-slots" tabindex="-1"><a class="header-anchor" href="#show-database-s-series-slots"><span>Show Database&#39;s series slots</span></a></h3><p>Show the data/schema/all series slots related to a database:</p><ul><li><code>SHOW (DATA|SCHEMA)? SERIESSLOTID OF root.sg</code></li></ul><p>Eg:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show data seriesslotid of root.sg</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="migrate-region" tabindex="-1"><a class="header-anchor" href="#migrate-region"><span>Migrate Region</span></a></h2><p>The following sql can be applied to manually migrate a region, for load balancing or other purposes.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">MIGRATE REGION &lt;Region-id&gt; FROM &lt;original-DataNodeId&gt; TO &lt;dest-DataNodeId&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Eg:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW REGIONS</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29))])}const g=i(p,[["render",u],["__file","Cluster-Maintenance.html.vue"]]),b=JSON.parse(`{"path":"/UserGuide/V1.1.x/Cluster/Cluster-Maintenance.html","title":"Cluster Information Query Command","lang":"en-US","frontmatter":{"description":"Cluster Information Query Command Show Variables Currently, IoTDB supports showing key parameters of the cluster: Eg: Notice: Ensure that all key parameters displayed in this SQ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Cluster/Cluster-Maintenance.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Cluster/Cluster-Maintenance.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Cluster Information Query Command"}],["meta",{"property":"og:description","content":"Cluster Information Query Command Show Variables Currently, IoTDB supports showing key parameters of the cluster: Eg: Notice: Ensure that all key parameters displayed in this SQ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cluster Information Query Command\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Show Variables","slug":"show-variables","link":"#show-variables","children":[]},{"level":2,"title":"Show ConfigNode information","slug":"show-confignode-information","link":"#show-confignode-information","children":[{"level":3,"title":"ConfigNode status definition","slug":"confignode-status-definition","link":"#confignode-status-definition","children":[]}]},{"level":2,"title":"Show DataNode information","slug":"show-datanode-information","link":"#show-datanode-information","children":[{"level":3,"title":"DataNode status definition","slug":"datanode-status-definition","link":"#datanode-status-definition","children":[]}]},{"level":2,"title":"Show all Node information","slug":"show-all-node-information","link":"#show-all-node-information","children":[]},{"level":2,"title":"Show Region information","slug":"show-region-information","link":"#show-region-information","children":[{"level":3,"title":"Region status definition","slug":"region-status-definition","link":"#region-status-definition","children":[]}]},{"level":2,"title":"Show cluster slots information","slug":"show-cluster-slots-information","link":"#show-cluster-slots-information","children":[{"level":3,"title":"Show the DataRegion where a DataPartition resides in","slug":"show-the-dataregion-where-a-datapartition-resides-in","link":"#show-the-dataregion-where-a-datapartition-resides-in","children":[]},{"level":3,"title":"Show the SchemaRegion where a SchemaPartition resides in","slug":"show-the-schemaregion-where-a-schemapartition-resides-in","link":"#show-the-schemaregion-where-a-schemapartition-resides-in","children":[]},{"level":3,"title":"Show the time slots of a series slot","slug":"show-the-time-slots-of-a-series-slot","link":"#show-the-time-slots-of-a-series-slot","children":[]},{"level":3,"title":"Show Database's series slots","slug":"show-database-s-series-slots","link":"#show-database-s-series-slots","children":[]}]},{"level":2,"title":"Migrate Region","slug":"migrate-region","link":"#migrate-region","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":11.61,"words":3483},"filePathRelative":"UserGuide/V1.1.x/Cluster/Cluster-Maintenance.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{g as comp,b as data};
