import{_ as t,c as n,b as s,o as a}from"./app-BHE9oQwv.js";const o={};function i(r,e){return a(),n("div",null,e[0]||(e[0]=[s(`<h1 id="_1-purpose" tabindex="-1"><a class="header-anchor" href="#_1-purpose"><span>1. Purpose</span></a></h1><p>This document describes how to install and start IoTDB Cluster (1.0.0).</p><h1 id="_2-prerequisites" tabindex="-1"><a class="header-anchor" href="#_2-prerequisites"><span>2. Prerequisites</span></a></h1><ol><li>JDK&gt;=1.8.</li><li>Max open file 65535.</li><li>Disable the swap memory.</li><li>Ensure that data/confignode directory has been cleared when starting ConfigNode for the first time,<br> and data/datanode directory has been cleared when starting DataNode for the first time</li><li>Turn off the firewall of the server if the entire cluster is in a trusted environment.</li><li>By default, IoTDB Cluster will use ports 10710, 10720 for the ConfigNode and<br> 6667, 10730, 10740, 10750 and 10760 for the DataNode.<br> Please make sure those ports are not occupied, or you will modify the ports in configuration files.</li></ol><h1 id="_3-get-the-installation-package" tabindex="-1"><a class="header-anchor" href="#_3-get-the-installation-package"><span>3. Get the Installation Package</span></a></h1><p>You can either download the binary release files (see Chap 3.1) or compile with source code (see Chap 3.2).</p><h2 id="_3-1-download-the-binary-distribution" tabindex="-1"><a class="header-anchor" href="#_3-1-download-the-binary-distribution"><span>3.1 Download the binary distribution</span></a></h2><ol><li>Open our website <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">Download Page</a>.</li><li>Download the binary distribution.</li><li>Decompress to get the apache-iotdb-1.0.0-all-bin directory.</li></ol><h2 id="_3-2-compile-with-source-code" tabindex="-1"><a class="header-anchor" href="#_3-2-compile-with-source-code"><span>3.2 Compile with source code</span></a></h2><h3 id="_3-2-1-download-the-source-code" tabindex="-1"><a class="header-anchor" href="#_3-2-1-download-the-source-code"><span>3.2.1 Download the source code</span></a></h3><p><strong>Git</strong></p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">git clone https://github.com/apache/iotdb.git</span>
<span class="line">git checkout v1.0.0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Website</strong></p><ol><li>Open our website <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">Download Page</a>.</li><li>Download the source code.</li><li>Decompress to get the apache-iotdb-1.0.0 directory.</li></ol><h3 id="_3-2-2-compile-source-code" tabindex="-1"><a class="header-anchor" href="#_3-2-2-compile-source-code"><span>3.2.2 Compile source code</span></a></h3><p>Under the source root folder:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">mvn clean package -pl distribution -am -DskipTests</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then you will get the binary distribution under<br><strong>distribution/target/apache-iotdb-1.0.0-SNAPSHOT-all-bin/apache-iotdb-1.0.0-SNAPSHOT-all-bin</strong>.</p><h1 id="_4-binary-distribution-content" tabindex="-1"><a class="header-anchor" href="#_4-binary-distribution-content"><span>4. Binary Distribution Content</span></a></h1><table><thead><tr><th><strong>Folder</strong></th><th><strong>Description</strong></th></tr></thead><tbody><tr><td>conf</td><td>Configuration files folder, contains configuration files of ConfigNode, DataNode, JMX and logback</td></tr><tr><td>data</td><td>Data files folder, contains data files of ConfigNode and DataNode</td></tr><tr><td>lib</td><td>Jar files folder</td></tr><tr><td>licenses</td><td>Licenses files folder</td></tr><tr><td>logs</td><td>Logs files folder, contains logs files of ConfigNode and DataNode</td></tr><tr><td>sbin</td><td>Shell files folder, contains start/stop/remove shell of ConfigNode and DataNode, cli shell</td></tr><tr><td>tools</td><td>System tools</td></tr></tbody></table><h1 id="_5-cluster-installation-and-configuration" tabindex="-1"><a class="header-anchor" href="#_5-cluster-installation-and-configuration"><span>5. Cluster Installation and Configuration</span></a></h1><h2 id="_5-1-cluster-installation" tabindex="-1"><a class="header-anchor" href="#_5-1-cluster-installation"><span>5.1 Cluster Installation</span></a></h2><p><code>apache-iotdb-1.0.0-SNAPSHOT-all-bin</code> contains both the ConfigNode and the DataNode.<br> Please deploy the files to all servers of your target cluster.<br> A best practice is deploying the files into the same directory in all servers.</p><p>If you want to try the cluster mode on one server, please read<br><a href="https://iotdb.apache.org/UserGuide/Master/QuickStart/ClusterQuickStart.html" target="_blank" rel="noopener noreferrer">Cluster Quick Start</a>.</p><h2 id="_5-2-cluster-configuration" tabindex="-1"><a class="header-anchor" href="#_5-2-cluster-configuration"><span>5.2 Cluster Configuration</span></a></h2><p>We need to modify the configurations on each server.<br> Therefore, login each server and switch the working directory to <code>apache-iotdb-1.0.0-SNAPSHOT-all-bin</code>.<br> The configuration files are stored in the <code>./conf</code> directory.</p><p>For all ConfigNode servers, we need to modify the common configuration (see Chap 5.2.1)<br> and ConfigNode configuration (see Chap 5.2.2).</p><p>For all DataNode servers, we need to modify the common configuration (see Chap 5.2.1)<br> and DataNode configuration (see Chap 5.2.3).</p><h3 id="_5-2-1-common-configuration" tabindex="-1"><a class="header-anchor" href="#_5-2-1-common-configuration"><span>5.2.1 Common configuration</span></a></h3><p>Open the common configuration file ./conf/iotdb-common.properties,<br> and set the following parameters base on the<br><a href="https://iotdb.apache.org/UserGuide/Master/Cluster/Deployment-Recommendation.html" target="_blank" rel="noopener noreferrer">Deployment Recommendation</a>:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Description</strong></th><th><strong>Default</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>Cluster name for which the Node to join in</td><td>defaultCluster</td></tr><tr><td>config_node_consensus_protocol_class</td><td>Consensus protocol of ConfigNode</td><td>org.apache.iotdb.consensus.ratis.RatisConsensus</td></tr><tr><td>schema_replication_factor</td><td>Schema replication factor, no more than DataNode number</td><td>1</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>Consensus protocol of schema replicas</td><td>org.apache.iotdb.consensus.ratis.RatisConsensus</td></tr><tr><td>data_replication_factor</td><td>Data replication factor, no more than DataNode number</td><td>1</td></tr><tr><td>data_region_consensus_protocol_class</td><td>Consensus protocol of data replicas. Note that RatisConsensus currently does not support multiple data directories</td><td>org.apache.iotdb.consensus.iot.IoTConsensus</td></tr></tbody></table><p><strong>Notice: The preceding configuration parameters cannot be changed after the cluster is started. Ensure that the common configurations of all Nodes are the same. Otherwise, the Nodes cannot be started.</strong></p><h3 id="_5-2-2-confignode-configuration" tabindex="-1"><a class="header-anchor" href="#_5-2-2-confignode-configuration"><span>5.2.2 ConfigNode configuration</span></a></h3><p>Open the ConfigNode configuration file ./conf/iotdb-confignode.properties,<br> and set the following parameters based on the IP address and available port of the server or VM:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Description</strong></th><th><strong>Default</strong></th><th><strong>Usage</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>Internal rpc service address of ConfigNode</td><td>127.0.0.1</td><td>Set to the IPV4 address or domain name of the server</td></tr><tr><td>cn_internal_port</td><td>Internal rpc service port of ConfigNode</td><td>10710</td><td>Set to any unoccupied port</td></tr><tr><td>cn_consensus_port</td><td>ConfigNode replication consensus protocol communication port</td><td>10720</td><td>Set to any unoccupied port</td></tr><tr><td>cn_target_config_node_list</td><td>ConfigNode address to which the node is connected when it is registered to the cluster. Note that Only one ConfigNode can be configured.</td><td>127.0.0.1:10710</td><td>For Seed-ConfigNode, set to its own cn_internal_address:cn_internal_port; For other ConfigNodes, set to other one running ConfigNode&#39;s cn_internal_address:cn_internal_port</td></tr></tbody></table><p><strong>Notice: The preceding configuration parameters cannot be changed after the node is started. Ensure that all ports are not occupied. Otherwise, the Node cannot be started.</strong></p><h3 id="_5-2-3-datanode-configuration" tabindex="-1"><a class="header-anchor" href="#_5-2-3-datanode-configuration"><span>5.2.3 DataNode configuration</span></a></h3><p>Open the DataNode configuration file ./conf/iotdb-datanode.properties,<br> and set the following parameters based on the IP address and available port of the server or VM:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Description</strong></th><th><strong>Default</strong></th><th><strong>Usage</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>Client RPC Service address</td><td>127.0.0.1</td><td>Set to the IPV4 address or domain name of the server</td></tr><tr><td>dn_rpc_port</td><td>Client RPC Service port</td><td>6667</td><td>Set to any unoccupied port</td></tr><tr><td>dn_internal_address</td><td>Control flow address of DataNode inside cluster</td><td>127.0.0.1</td><td>Set to the IPV4 address or domain name of the server</td></tr><tr><td>dn_internal_port</td><td>Control flow port of DataNode inside cluster</td><td>10730</td><td>Set to any unoccupied port</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>Data flow port of DataNode inside cluster</td><td>10740</td><td>Set to any unoccupied port</td></tr><tr><td>dn_data_region_consensus_port</td><td>Data replicas communication port for consensus</td><td>10750</td><td>Set to any unoccupied port</td></tr><tr><td>dn_schema_region_consensus_port</td><td>Schema replicas communication port for consensus</td><td>10760</td><td>Set to any unoccupied port</td></tr><tr><td>dn_target_config_node_list</td><td>Running ConfigNode of the Cluster</td><td>127.0.0.1:10710</td><td>Set to any running ConfigNode&#39;s cn_internal_address:cn_internal_port. You can set multiple values, separate them with commas(&quot;,&quot;)</td></tr></tbody></table><p><strong>Notice: The preceding configuration parameters cannot be changed after the node is started. Ensure that all ports are not occupied. Otherwise, the Node cannot be started.</strong></p><h1 id="_6-cluster-operation" tabindex="-1"><a class="header-anchor" href="#_6-cluster-operation"><span>6. Cluster Operation</span></a></h1><h2 id="_6-1-starting-the-cluster" tabindex="-1"><a class="header-anchor" href="#_6-1-starting-the-cluster"><span>6.1 Starting the cluster</span></a></h2><p>This section describes how to start a cluster that includes several ConfigNodes and DataNodes.<br> The cluster can provide services only by starting at least one ConfigNode<br> and no less than the number of data/schema_replication_factor DataNodes.</p><p>The total process are three steps:</p><ul><li>Start the Seed-ConfigNode</li><li>Add ConfigNode (Optional)</li><li>Add DataNode</li></ul><h3 id="_6-1-1-start-the-seed-confignode" tabindex="-1"><a class="header-anchor" href="#_6-1-1-start-the-seed-confignode"><span>6.1.1 Start the Seed-ConfigNode</span></a></h3><p><strong>The first Node started in the cluster must be ConfigNode. The first started ConfigNode must follow the tutorial in this section.</strong></p><p>The first ConfigNode to start is the Seed-ConfigNode, which marks the creation of the new cluster.<br> Before start the Seed-ConfigNode, please open the common configuration file ./conf/iotdb-common.properties and check the following parameters:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Check</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>Is set to the expected name</td></tr><tr><td>config_node_consensus_protocol_class</td><td>Is set to the expected consensus protocol</td></tr><tr><td>schema_replication_factor</td><td>Is set to the expected schema replication count</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>Is set to the expected consensus protocol</td></tr><tr><td>data_replication_factor</td><td>Is set to the expected data replication count</td></tr><tr><td>data_region_consensus_protocol_class</td><td>Is set to the expected consensus protocol</td></tr></tbody></table><p><strong>Notice:</strong> Please set these parameters carefully based on the <a href="https://iotdb.apache.org/UserGuide/Master/Cluster/Deployment-Recommendation.html" target="_blank" rel="noopener noreferrer">Deployment Recommendation</a>.<br> These parameters are not modifiable after the Node first startup.</p><p>Then open its configuration file ./conf/iotdb-confignode.properties and check the following parameters:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Check</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>Is set to the IPV4 address or domain name of the server</td></tr><tr><td>cn_internal_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>cn_consensus_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>cn_target_config_node_list</td><td>Is set to its own internal communication address, which is cn_internal_address:cn_internal_port</td></tr></tbody></table><p>After checking, you can run the startup script on the server:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux foreground</span>
<span class="line">bash ./sbin/start-confignode.sh</span>
<span class="line"></span>
<span class="line"># Linux background</span>
<span class="line">nohup bash ./sbin/start-confignode.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\start-confignode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For more details about other configuration parameters of ConfigNode, see the<br><a href="https://iotdb.apache.org/UserGuide/Master/Reference/ConfigNode-Config-Manual.html" target="_blank" rel="noopener noreferrer">ConfigNode Configurations</a>.</p><h3 id="_6-1-2-add-more-confignodes-optional" tabindex="-1"><a class="header-anchor" href="#_6-1-2-add-more-confignodes-optional"><span>6.1.2 Add more ConfigNodes (Optional)</span></a></h3><p><strong>The ConfigNode who isn&#39;t the first one started must follow the tutorial in this section.</strong></p><p>You can add more ConfigNodes to the cluster to ensure high availability of ConfigNodes.<br> A common configuration is to add extra two ConfigNodes to make the cluster has three ConfigNodes.</p><p>Ensure that all configuration parameters in the ./conf/iotdb-common.properites are the same as those in the Seed-ConfigNode;<br> otherwise, it may fail to start or generate runtime errors.<br> Therefore, please check the following parameters in common configuration file:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Check</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>Is consistent with the Seed-ConfigNode</td></tr><tr><td>config_node_consensus_protocol_class</td><td>Is consistent with the Seed-ConfigNode</td></tr><tr><td>schema_replication_factor</td><td>Is consistent with the Seed-ConfigNode</td></tr><tr><td>schema_region_consensus_protocol_class</td><td>Is consistent with the Seed-ConfigNode</td></tr><tr><td>data_replication_factor</td><td>Is consistent with the Seed-ConfigNode</td></tr><tr><td>data_region_consensus_protocol_class</td><td>Is consistent with the Seed-ConfigNode</td></tr></tbody></table><p>Then, please open its configuration file ./conf/iotdb-confignode.properties and check the following parameters:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Check</strong></th></tr></thead><tbody><tr><td>cn_internal_address</td><td>Is set to the IPV4 address or domain name of the server</td></tr><tr><td>cn_internal_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>cn_consensus_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>cn_target_config_node_list</td><td>Is set to the internal communication address of an other running ConfigNode. The internal communication address of the seed ConfigNode is recommended.</td></tr></tbody></table><p>After checking, you can run the startup script on the server:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux foreground</span>
<span class="line">bash ./sbin/start-confignode.sh</span>
<span class="line"></span>
<span class="line"># Linux background</span>
<span class="line">nohup bash ./sbin/start-confignode.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\start-confignode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For more details about other configuration parameters of ConfigNode, see the<br><a href="https://iotdb.apache.org/UserGuide/Master/Reference/ConfigNode-Config-Manual.html" target="_blank" rel="noopener noreferrer">ConfigNode Configurations</a>.</p><h3 id="_6-1-3-start-datanode" tabindex="-1"><a class="header-anchor" href="#_6-1-3-start-datanode"><span>6.1.3 Start DataNode</span></a></h3><p><strong>Before adding DataNodes, ensure that there exists at least one ConfigNode is running in the cluster.</strong></p><p>You can add any number of DataNodes to the cluster.<br> Before adding a new DataNode,</p><p>please open its common configuration file ./conf/iotdb-common.properties and check the following parameters:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Check</strong></th></tr></thead><tbody><tr><td>cluster_name</td><td>Is consistent with the Seed-ConfigNode</td></tr></tbody></table><p>Then open its configuration file ./conf/iotdb-datanode.properties and check the following parameters:</p><table><thead><tr><th><strong>Configuration</strong></th><th><strong>Check</strong></th></tr></thead><tbody><tr><td>dn_rpc_address</td><td>Is set to the IPV4 address or domain name of the server</td></tr><tr><td>dn_rpc_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>dn_internal_address</td><td>Is set to the IPV4 address or domain name of the server</td></tr><tr><td>dn_internal_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>dn_mpp_data_exchange_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>dn_data_region_consensus_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>dn_schema_region_consensus_port</td><td>The port isn&#39;t occupied</td></tr><tr><td>dn_target_config_node_list</td><td>Is set to the internal communication address of other running ConfigNodes. The internal communication address of the seed ConfigNode is recommended.</td></tr></tbody></table><p>After checking, you can run the startup script on the server:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux foreground</span>
<span class="line">bash ./sbin/start-datanode.sh</span>
<span class="line"></span>
<span class="line"># Linux background</span>
<span class="line">nohup bash ./sbin/start-datanode.sh &gt;/dev/null 2&gt;&amp;1 &amp;</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\start-datanode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For more details about other configuration parameters of DataNode, see the<br><a href="https://iotdb.apache.org/UserGuide/Master/Reference/DataNode-Config-Manual.html" target="_blank" rel="noopener noreferrer">DataNode Configurations</a>.</p><p><strong>Notice: The cluster can provide services only if the number of its DataNodes is no less than the number of replicas(max{schema_replication_factor, data_replication_factor}).</strong></p><h2 id="_6-2-start-cli" tabindex="-1"><a class="header-anchor" href="#_6-2-start-cli"><span>6.2 Start Cli</span></a></h2><p>If the cluster is in local environment, you can directly run the Cli startup script in the ./sbin directory:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux</span>
<span class="line">./sbin/start-cli.sh</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\start-cli.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you want to use the Cli to connect to a cluster in the production environment,<br> Please read the <a href="https://iotdb.apache.org/UserGuide/Master/QuickStart/Command-Line-Interface.html" target="_blank" rel="noopener noreferrer">Cli manual</a>.</p><h2 id="_6-3-verify-cluster" tabindex="-1"><a class="header-anchor" href="#_6-3-verify-cluster"><span>6.3 Verify Cluster</span></a></h2><p>Use a 3C3D(3 ConfigNodes and 3 DataNodes) as an example.<br> Assumed that the IP addresses of the 3 ConfigNodes are 192.168.1.10, 192.168.1.11 and 192.168.1.12, and the default ports 10710 and 10720 are used.<br> Assumed that the IP addresses of the 3 DataNodes are 192.168.1.20, 192.168.1.21 and 192.168.1.22, and the default ports 6667, 10730, 10740, 10750 and 10760 are used.</p><p>After starting the cluster successfully according to chapter 6.1, you can run the <code>show cluster details</code> command on the Cli, and you will see the following results:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show cluster details</span>
<span class="line">+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+</span>
<span class="line">|NodeID|  NodeType| Status|InternalAddress|InternalPort|ConfigConsensusPort|  RpcAddress|RpcPort|MppPort|SchemaConsensusPort|DataConsensusPort|</span>
<span class="line">+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+</span>
<span class="line">|     0|ConfigNode|Running|   192.168.1.10|       10710|              10720|            |       |       |                   |                 |</span>
<span class="line">|     2|ConfigNode|Running|   192.168.1.11|       10710|              10720|            |       |       |                   |                 |</span>
<span class="line">|     3|ConfigNode|Running|   192.168.1.12|       10710|              10720|            |       |       |                   |                 |</span>
<span class="line">|     1|  DataNode|Running|   192.168.1.20|       10730|                   |192.168.1.20|   6667|  10740|              10750|            10760|</span>
<span class="line">|     4|  DataNode|Running|   192.168.1.21|       10730|                   |192.168.1.21|   6667|  10740|              10750|            10760|</span>
<span class="line">|     5|  DataNode|Running|   192.168.1.22|       10730|                   |192.168.1.22|   6667|  10740|              10750|            10760|</span>
<span class="line">+------+----------+-------+---------------+------------+-------------------+------------+-------+-------+-------------------+-----------------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.012s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If the status of all Nodes is <strong>Running</strong>, the cluster deployment is successful.<br> Otherwise, read the run logs of the Node that fails to start and<br> check the corresponding configuration parameters.</p><h2 id="_6-4-stop-iotdb" tabindex="-1"><a class="header-anchor" href="#_6-4-stop-iotdb"><span>6.4 Stop IoTDB</span></a></h2><p>This section describes how to manually shut down the ConfigNode or DataNode process of the IoTDB.</p><h3 id="_6-4-1-stop-confignode-by-script" tabindex="-1"><a class="header-anchor" href="#_6-4-1-stop-confignode-by-script"><span>6.4.1 Stop ConfigNode by script</span></a></h3><p>Run the stop ConfigNode script:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux</span>
<span class="line">./sbin/stop-confignode.sh</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\stop-confignode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-2-stop-datanode-by-script" tabindex="-1"><a class="header-anchor" href="#_6-4-2-stop-datanode-by-script"><span>6.4.2 Stop DataNode by script</span></a></h3><p>Run the stop DataNode script:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux</span>
<span class="line">./sbin/stop-datanode.sh</span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line">.\\sbin\\stop-datanode.bat</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-3-kill-node-process" tabindex="-1"><a class="header-anchor" href="#_6-4-3-kill-node-process"><span>6.4.3 Kill Node process</span></a></h3><p>Get the process number of the Node:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">jps</span>
<span class="line"></span>
<span class="line"># or</span>
<span class="line"></span>
<span class="line">ps aux | grep iotdb</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Kill the process：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">kill -9 &lt;pid&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Notice Some ports require root access, in which case use sudo</strong></p><h2 id="_6-5-shrink-the-cluster" tabindex="-1"><a class="header-anchor" href="#_6-5-shrink-the-cluster"><span>6.5 Shrink the Cluster</span></a></h2><p>This section describes how to remove ConfigNode or DataNode from the cluster.</p><h3 id="_6-5-1-remove-confignode" tabindex="-1"><a class="header-anchor" href="#_6-5-1-remove-confignode"><span>6.5.1 Remove ConfigNode</span></a></h3><p>Before removing a ConfigNode, ensure that there is at least one active ConfigNode in the cluster after the removal.<br> Run the remove-confignode script on an active ConfigNode:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux</span>
<span class="line"># Remove the ConfigNode with confignode_id</span>
<span class="line">./sbin/remove-confignode.sh &lt;confignode_id&gt;</span>
<span class="line"></span>
<span class="line"># Remove the ConfigNode with address:port</span>
<span class="line">./sbin/remove-confignode.sh &lt;cn_internal_address&gt;:&lt;cn_internal_port&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line"># Remove the ConfigNode with confignode_id</span>
<span class="line">.\\sbin\\remove-confignode.bat &lt;confignode_id&gt;</span>
<span class="line"></span>
<span class="line"># Remove the ConfigNode with address:port</span>
<span class="line">.\\sbin\\remove-confignode.bat &lt;cn_internal_address&gt;:&lt;cn_internal_portcn_internal_port&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-5-2-remove-datanode" tabindex="-1"><a class="header-anchor" href="#_6-5-2-remove-datanode"><span>6.5.2 Remove DataNode</span></a></h3><p>Before removing a DataNode, ensure that the cluster has at least the number of data/schema replicas DataNodes.<br> Run the remove-datanode script on an active DataNode:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Linux</span>
<span class="line"># Remove the DataNode with datanode_id</span>
<span class="line">./sbin/remove-datanode.sh &lt;datanode_id&gt;</span>
<span class="line"></span>
<span class="line"># Remove the DataNode with rpc address:port</span>
<span class="line">./sbin/remove-datanode.sh &lt;dn_rpc_address&gt;:&lt;dn_rpc_port&gt;</span>
<span class="line"></span>
<span class="line"></span>
<span class="line"># Windows</span>
<span class="line"># Remove the DataNode with datanode_id</span>
<span class="line">.\\sbin\\remove-datanode.bat &lt;datanode_id&gt;</span>
<span class="line"></span>
<span class="line"># Remove the DataNode with rpc address:port</span>
<span class="line">.\\sbin\\remove-datanode.bat &lt;dn_rpc_address&gt;:&lt;dn_rpc_port&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="_7-faq" tabindex="-1"><a class="header-anchor" href="#_7-faq"><span>7. FAQ</span></a></h1><p>See <a href="https://iotdb.apache.org/UserGuide/Master/FAQ/FAQ-for-cluster-setup.html" target="_blank" rel="noopener noreferrer">FAQ</a></p>`,109)]))}const l=t(o,[["render",i],["__file","Cluster-Setup.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.0.x/Cluster/Cluster-Setup.html","title":"1. Purpose","lang":"en-US","frontmatter":{"description":"1. Purpose This document describes how to install and start IoTDB Cluster (1.0.0). 2. Prerequisites JDK>=1.8. Max open file 65535. Disable the swap memory. Ensure that data/conf...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Cluster/Cluster-Setup.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Cluster/Cluster-Setup.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"1. Purpose"}],["meta",{"property":"og:description","content":"1. Purpose This document describes how to install and start IoTDB Cluster (1.0.0). 2. Prerequisites JDK>=1.8. Max open file 65535. Disable the swap memory. Ensure that data/conf..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1. Purpose\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"3.1 Download the binary distribution","slug":"_3-1-download-the-binary-distribution","link":"#_3-1-download-the-binary-distribution","children":[]},{"level":2,"title":"3.2 Compile with source code","slug":"_3-2-compile-with-source-code","link":"#_3-2-compile-with-source-code","children":[{"level":3,"title":"3.2.1 Download the source code","slug":"_3-2-1-download-the-source-code","link":"#_3-2-1-download-the-source-code","children":[]},{"level":3,"title":"3.2.2 Compile source code","slug":"_3-2-2-compile-source-code","link":"#_3-2-2-compile-source-code","children":[]}]},{"level":2,"title":"5.1 Cluster Installation","slug":"_5-1-cluster-installation","link":"#_5-1-cluster-installation","children":[]},{"level":2,"title":"5.2 Cluster Configuration","slug":"_5-2-cluster-configuration","link":"#_5-2-cluster-configuration","children":[{"level":3,"title":"5.2.1 Common configuration","slug":"_5-2-1-common-configuration","link":"#_5-2-1-common-configuration","children":[]},{"level":3,"title":"5.2.2 ConfigNode configuration","slug":"_5-2-2-confignode-configuration","link":"#_5-2-2-confignode-configuration","children":[]},{"level":3,"title":"5.2.3 DataNode configuration","slug":"_5-2-3-datanode-configuration","link":"#_5-2-3-datanode-configuration","children":[]}]},{"level":2,"title":"6.1 Starting the cluster","slug":"_6-1-starting-the-cluster","link":"#_6-1-starting-the-cluster","children":[{"level":3,"title":"6.1.1 Start the Seed-ConfigNode","slug":"_6-1-1-start-the-seed-confignode","link":"#_6-1-1-start-the-seed-confignode","children":[]},{"level":3,"title":"6.1.2 Add more ConfigNodes (Optional)","slug":"_6-1-2-add-more-confignodes-optional","link":"#_6-1-2-add-more-confignodes-optional","children":[]},{"level":3,"title":"6.1.3 Start DataNode","slug":"_6-1-3-start-datanode","link":"#_6-1-3-start-datanode","children":[]}]},{"level":2,"title":"6.2 Start Cli","slug":"_6-2-start-cli","link":"#_6-2-start-cli","children":[]},{"level":2,"title":"6.3 Verify Cluster","slug":"_6-3-verify-cluster","link":"#_6-3-verify-cluster","children":[]},{"level":2,"title":"6.4 Stop IoTDB","slug":"_6-4-stop-iotdb","link":"#_6-4-stop-iotdb","children":[{"level":3,"title":"6.4.1 Stop ConfigNode by script","slug":"_6-4-1-stop-confignode-by-script","link":"#_6-4-1-stop-confignode-by-script","children":[]},{"level":3,"title":"6.4.2 Stop DataNode by script","slug":"_6-4-2-stop-datanode-by-script","link":"#_6-4-2-stop-datanode-by-script","children":[]},{"level":3,"title":"6.4.3 Kill Node process","slug":"_6-4-3-kill-node-process","link":"#_6-4-3-kill-node-process","children":[]}]},{"level":2,"title":"6.5 Shrink the Cluster","slug":"_6-5-shrink-the-cluster","link":"#_6-5-shrink-the-cluster","children":[{"level":3,"title":"6.5.1 Remove ConfigNode","slug":"_6-5-1-remove-confignode","link":"#_6-5-1-remove-confignode","children":[]},{"level":3,"title":"6.5.2 Remove DataNode","slug":"_6-5-2-remove-datanode","link":"#_6-5-2-remove-datanode","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":8.13,"words":2439},"filePathRelative":"UserGuide/V1.0.x/Cluster/Cluster-Setup.md","localizedDate":"July 10, 2023","autoDesc":true}');export{l as comp,c as data};
