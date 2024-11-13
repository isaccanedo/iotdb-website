import{_ as t,c as a,b as n,o as i}from"./app-BHE9oQwv.js";const s={};function o(r,e){return i(),a("div",null,e[0]||(e[0]=[n(`<h1 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions"><span>Frequently Asked Questions</span></a></h1><h2 id="general-faq" tabindex="-1"><a class="header-anchor" href="#general-faq"><span>General FAQ</span></a></h2><h3 id="how-can-i-identify-my-version-of-iotdb" tabindex="-1"><a class="header-anchor" href="#how-can-i-identify-my-version-of-iotdb"><span>How can I identify my version of IoTDB?</span></a></h3><p>There are several ways to identify the version of IoTDB that you are using:</p><ul><li>Launch IoTDB&#39;s Command Line Interface:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; ./start-cli.sh -p 6667 -pw root -u root -h localhost</span>
<span class="line"> _____       _________  ______   ______    </span>
<span class="line">|_   _|     |  _   _  ||_   _ \`.|_   _ \\   </span>
<span class="line">  | |   .--.|_/ | | \\_|  | | \`. \\ | |_) |  </span>
<span class="line">  | | / .&#39;\`\\ \\  | |      | |  | | |  __&#39;.  </span>
<span class="line"> _| |_| \\__. | _| |_    _| |_.&#39; /_| |__) | </span>
<span class="line">|_____|&#39;.__.&#39; |_____|  |______.&#39;|_______/  version x.x.x</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Check pom.xml file:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&lt;version&gt;x.x.x&lt;/version&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Use JDBC API:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">String iotdbVersion = tsfileDatabaseMetadata.getDatabaseProductVersion();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Use Command Line Interface:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show version</span>
<span class="line">show version</span>
<span class="line">+---------------+</span>
<span class="line">|version        |</span>
<span class="line">+---------------+</span>
<span class="line">|x.x.x          |</span>
<span class="line">+---------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.241s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="where-can-i-find-iotdb-logs" tabindex="-1"><a class="header-anchor" href="#where-can-i-find-iotdb-logs"><span>Where can I find IoTDB logs?</span></a></h3><p>Suppose your root directory is:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ pwd</span>
<span class="line">/workspace/iotdb</span>
<span class="line"></span>
<span class="line">$ ls -l</span>
<span class="line">server/</span>
<span class="line">cli/</span>
<span class="line">pom.xml</span>
<span class="line">Readme.md</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let <code>$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}</code></p><p>Let <code>$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}</code></p><p>By default settings, the logs are stored under <code>IOTDB_HOME/logs</code>. You can change log level and storage path by configuring <code>logback.xml</code> under <code>IOTDB_HOME/conf</code>.</p><h3 id="where-can-i-find-iotdb-data-files" tabindex="-1"><a class="header-anchor" href="#where-can-i-find-iotdb-data-files"><span>Where can I find IoTDB data files?</span></a></h3><p>By default settings, the data files (including tsfile, metadata, and WAL files) are stored under <code>IOTDB_HOME/data/datanode</code>.</p><h3 id="how-do-i-know-how-many-time-series-are-stored-in-iotdb" tabindex="-1"><a class="header-anchor" href="#how-do-i-know-how-many-time-series-are-stored-in-iotdb"><span>How do I know how many time series are stored in IoTDB?</span></a></h3><p>Use IoTDB&#39;s Command Line Interface:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>In the result, there is a statement shows <code>Total timeseries number</code>, this number is the timeseries number in IoTDB.</p><p>In the current version, IoTDB supports querying the number of time series. Use IoTDB&#39;s Command Line Interface:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; count timeseries</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If you are using Linux, you can use the following shell command:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; grep &quot;0,root&quot; $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l</span>
<span class="line">&gt;   6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb" tabindex="-1"><a class="header-anchor" href="#can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb"><span>Can I use Hadoop and Spark to read TsFile in IoTDB?</span></a></h3><p>Yes. IoTDB has intense integration with Open Source Ecosystem. IoTDB supports <a href="https://github.com/apache/iotdb-extras/tree/master/connectors/hadoop" target="_blank" rel="noopener noreferrer">Hadoop</a>, <a href="https://github.com/apache/iotdb-extras/tree/master/connectors/spark-iotdb-connector" target="_blank" rel="noopener noreferrer">Spark</a> and <a href="https://github.com/apache/iotdb-extras/tree/master/connectors/grafana-connector" target="_blank" rel="noopener noreferrer">Grafana</a> visualization tool.</p><h3 id="how-does-iotdb-handle-duplicate-points" tabindex="-1"><a class="header-anchor" href="#how-does-iotdb-handle-duplicate-points"><span>How does IoTDB handle duplicate points?</span></a></h3><p>A data point is uniquely identified by a full time series path (e.g. <code>root.vehicle.d0.s0</code>) and timestamp. If you submit a new point with the same path and timestamp as an existing point, IoTDB updates the value of this point instead of inserting a new point.</p><h3 id="how-can-i-tell-what-type-of-the-specific-timeseries" tabindex="-1"><a class="header-anchor" href="#how-can-i-tell-what-type-of-the-specific-timeseries"><span>How can I tell what type of the specific timeseries?</span></a></h3><p>Use <code>SHOW TIMESERIES &lt;timeseries path&gt;</code> SQL in IoTDB&#39;s Command Line Interface:</p><p>For example, if you want to know the type of all timeseries, the &lt;timeseries path&gt; should be <code>root.**</code>. The statement will be:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If you want to query specific sensor, you can replace the &lt;timeseries path&gt; with the sensor name. For example:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.fit.d1.s1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Otherwise, you can also use wildcard in timeseries path:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.fit.d1.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="how-can-i-change-iotdb-s-cli-time-display-format" tabindex="-1"><a class="header-anchor" href="#how-can-i-change-iotdb-s-cli-time-display-format"><span>How can I change IoTDB&#39;s Cli time display format?</span></a></h3><p>The default IoTDB&#39;s Cli time display format is readable (e.g. <code>1970-01-01T08:00:00.001</code>), if you want to display time in timestamp type or other readable format, add parameter <code>-disableISO8601</code> in start command:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="how-to-handle-error-indexoutofboundsexception-from-org-apache-ratis-grpc-server-grpclogappender" tabindex="-1"><a class="header-anchor" href="#how-to-handle-error-indexoutofboundsexception-from-org-apache-ratis-grpc-server-grpclogappender"><span>How to handle error <code>IndexOutOfBoundsException</code> from <code>org.apache.ratis.grpc.server.GrpcLogAppender</code>?</span></a></h3><p>This is an internal error log from Ratis 2.4.1, our dependency, and no impact on data writes or reads is expected.<br> It has been reported to the Ratis community and will be fixed in the future releases.</p><h3 id="how-to-deal-with-estimated-out-of-memory-errors" tabindex="-1"><a class="header-anchor" href="#how-to-deal-with-estimated-out-of-memory-errors"><span>How to deal with estimated out of memory errors?</span></a></h3><p>Report an error message:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">301: There is not enough memory to execute current fragment instance, current remaining free memory is 86762854, estimated memory usage for current fragment instance is 270139392</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Error analysis:<br> The datanode_memory_proportion parameter controls the memory divided to the query, and the chunk_timeseriesmeta_free_memory_proportion parameter controls the memory available for query execution.<br> By default the memory allocated to the query is 30% of the heap memory and the memory available for query execution is 20% of the query memory.<br> The error report shows that the current remaining memory available for query execution is 86762854B = 82.74MB, and the query is estimated to use 270139392B = 257.6MB of execution memory.</p><p>Some possible improvement items:</p><ul><li>Without changing the default parameters, crank up the heap memory of IoTDB greater than 4.2G (4.2G * 1024MB = 4300MB), 4300M * 30% * 20% = 258M &gt; 257.6M, which can fulfill the requirement.</li><li>Change parameters such as datanode_memory_proportion so that the available memory for query execution is &gt;257.6MB.</li><li>Reduce the number of exported time series.</li><li>Add slimit limit to the query statement, which is also an option to reduce the query time series.</li><li>Add align by device, which will export in device order, and the memory usage will be reduced to single-device level.</li></ul><p>It is an internal error introduced by Ratis 2.4.1 dependency, and we can safely ignore this exception as it will<br> not affect normal operations. We will fix this message in the incoming releases.</p><h2 id="faq-for-cluster-setup" tabindex="-1"><a class="header-anchor" href="#faq-for-cluster-setup"><span>FAQ for Cluster Setup</span></a></h2><h3 id="cluster-startup-and-stop" tabindex="-1"><a class="header-anchor" href="#cluster-startup-and-stop"><span>Cluster StartUp and Stop</span></a></h3><h4 id="failed-to-start-confignode-for-the-first-time-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#failed-to-start-confignode-for-the-first-time-how-to-find-the-reason"><span>Failed to start ConfigNode for the first time, how to find the reason?</span></a></h4><ul><li>Make sure that the data/confignode directory is cleared when start ConfigNode for the first time.</li><li>Make sure that the &lt;IP+Port&gt; used by ConfigNode is not occupied, and the &lt;IP+Port&gt; is also not conflicted with other ConfigNodes.</li><li>Make sure that the <code>cn_seed_config_node</code> is configured correctly, which points to the alive ConfigNode. And if the ConfigNode is started for the first time, make sure that <code>cn_seed_config_node</code> points to itself.</li><li>Make sure that the configuration(consensus protocol and replica number) of the started ConfigNode is accord with the <code>cn_seed_config_node</code> ConfigNode.</li></ul><h4 id="confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster" tabindex="-1"><a class="header-anchor" href="#confignode-is-started-successfully-but-why-the-node-doesn-t-appear-in-the-results-of-show-cluster"><span>ConfigNode is started successfully, but why the node doesn&#39;t appear in the results of <code>show cluster</code>?</span></a></h4><ul><li>Examine whether the <code>cn_seed_config_node</code> points to the correct address. If <code>cn_seed_config_node</code> points to itself, a new ConfigNode cluster is started.</li></ul><h4 id="failed-to-start-datanode-for-the-first-time-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#failed-to-start-datanode-for-the-first-time-how-to-find-the-reason"><span>Failed to start DataNode for the first time, how to find the reason?</span></a></h4><ul><li>Make sure that the data/datanode directory is cleared when start DataNode for the first time. If the start result is “Reject DataNode restart.”, maybe the data/datanode directory is not cleared.</li><li>Make sure that the &lt;IP+Port&gt; used by DataNode is not occupied, and the &lt;IP+Port&gt; is also not conflicted with other DataNodes.</li><li>Make sure that the <code>dn_seed_config_node</code> points to the alive ConfigNode.</li></ul><h4 id="failed-to-remove-datanode-how-to-find-the-reason" tabindex="-1"><a class="header-anchor" href="#failed-to-remove-datanode-how-to-find-the-reason"><span>Failed to remove DataNode, how to find the reason?</span></a></h4><ul><li>Examine whether the parameter of <code>remove-datanode.sh</code> is correct, only rpcIp:rpcPort and dataNodeId are correct parameter.</li><li>Only when the number of available DataNodes in the cluster is greater than max(schema_replication_factor, data_replication_factor), removing operation can be executed.</li><li>Removing DataNode will migrate the data from the removing DataNode to other alive DataNodes. Data migration is based on Region, if some regions are migrated failed, the removing DataNode will always in the status of <code>Removing</code>.</li><li>If the DataNode is in the status of <code>Removing</code>, the regions in the removing DataNode will also in the status of <code>Removing</code> or <code>Unknown</code>, which are unavailable status. Besides, the removing DataNode will not receive new write requests from client.<br> And users can use the command <code>set system status to running</code> to make the status of DataNode from Removing to Running;<br> If users want to make the Regions from Removing to available status, command <code>migrate region from datanodeId1 to datanodeId2</code> can take effect, this command can migrate the regions to other alive DataNodes.<br> Besides, IoTDB will publish <code>remove-datanode.sh -f</code> command in the next version, which can remove DataNodes forced (The failed migrated regions will be discarded).</li></ul><h4 id="whether-the-down-datanode-can-be-removed" tabindex="-1"><a class="header-anchor" href="#whether-the-down-datanode-can-be-removed"><span>Whether the down DataNode can be removed?</span></a></h4><ul><li>The down DataNode can be removed only when the replica factor of schema and data is greater than 1.<br> Besides, IoTDB will publish <code>remove-datanode.sh -f</code> function in the next version.</li></ul><h4 id="what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0" tabindex="-1"><a class="header-anchor" href="#what-should-be-paid-attention-to-when-upgrading-from-0-13-to-1-0"><span>What should be paid attention to when upgrading from 0.13 to 1.0?</span></a></h4><ul><li>The file structure between 0.13 and 1.0 is different, we can&#39;t copy the data directory from 0.13 to 1.0 to use directly.<br> If you want to load the data from 0.13 to 1.0, you can use the LOAD function.</li><li>The default RPC address of 0.13 is <code>0.0.0.0</code>, but the default RPC address of 1.0 is <code>127.0.0.1</code>.</li></ul><h3 id="cluster-restart" tabindex="-1"><a class="header-anchor" href="#cluster-restart"><span>Cluster Restart</span></a></h3><h4 id="how-to-restart-any-confignode-in-the-cluster" tabindex="-1"><a class="header-anchor" href="#how-to-restart-any-confignode-in-the-cluster"><span>How to restart any ConfigNode in the cluster?</span></a></h4><ul><li>First step: stop the process by <code>stop-confignode.sh</code> or kill PID of ConfigNode.</li><li>Second step: execute <code>start-confignode.sh</code> to restart ConfigNode.</li></ul><h4 id="how-to-restart-any-datanode-in-the-cluster" tabindex="-1"><a class="header-anchor" href="#how-to-restart-any-datanode-in-the-cluster"><span>How to restart any DataNode in the cluster?</span></a></h4><ul><li>First step: stop the process by <code>stop-datanode.sh</code> or kill PID of DataNode.</li><li>Second step: execute <code>s</code>tart-datanode.sh\` to restart DataNode.</li></ul><h4 id="if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed" tabindex="-1"><a class="header-anchor" href="#if-it-s-possible-to-restart-confignode-using-the-old-data-directory-when-it-s-removed"><span>If it&#39;s possible to restart ConfigNode using the old data directory when it&#39;s removed?</span></a></h4><ul><li>Can&#39;t. The running result will be &quot;Reject ConfigNode restart. Because there are no corresponding ConfigNode(whose nodeId=xx) in the cluster&quot;.</li></ul><h4 id="if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed" tabindex="-1"><a class="header-anchor" href="#if-it-s-possible-to-restart-datanode-using-the-old-data-directory-when-it-s-removed"><span>If it&#39;s possible to restart DataNode using the old data directory when it&#39;s removed?</span></a></h4><ul><li>Can&#39;t. The running result will be &quot;Reject DataNode restart. Because there are no corresponding DataNode(whose nodeId=xx) in the cluster. Possible solutions are as follows:...&quot;.</li></ul><h4 id="can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid" tabindex="-1"><a class="header-anchor" href="#can-we-execute-start-confignode-sh-start-datanode-sh-successfully-when-delete-the-data-directory-of-given-confignode-datanode-without-killing-the-pid"><span>Can we execute <code>start-confignode.sh</code>/<code>start-datanode.sh</code> successfully when delete the data directory of given ConfigNode/DataNode without killing the PID?</span></a></h4><ul><li>Can&#39;t. The running result will be &quot;The port is already occupied&quot;.</li></ul><h3 id="cluster-maintenance" tabindex="-1"><a class="header-anchor" href="#cluster-maintenance"><span>Cluster Maintenance</span></a></h3><h4 id="how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown" tabindex="-1"><a class="header-anchor" href="#how-to-find-the-reason-when-show-cluster-failed-and-error-logs-like-please-check-server-status-are-shown"><span>How to find the reason when Show cluster failed, and error logs like &quot;please check server status&quot; are shown?</span></a></h4><ul><li>Make sure that more than one half ConfigNodes are alive.</li><li>Make sure that the DataNode connected by the client is alive.</li></ul><h4 id="how-to-fix-one-datanode-when-the-disk-file-is-broken" tabindex="-1"><a class="header-anchor" href="#how-to-fix-one-datanode-when-the-disk-file-is-broken"><span>How to fix one DataNode when the disk file is broken?</span></a></h4><ul><li>We can use <code>remove-datanode.sh</code> to fix it. Remove-datanode will migrate the data in the removing DataNode to other alive DataNodes.</li><li>IoTDB will publish Node-Fix tools in the next version.</li></ul><h4 id="how-to-decrease-the-memory-usage-of-confignode-datanode" tabindex="-1"><a class="header-anchor" href="#how-to-decrease-the-memory-usage-of-confignode-datanode"><span>How to decrease the memory usage of ConfigNode/DataNode?</span></a></h4><ul><li>Adjust the ON_HEAP_MEMORY、OFF_HEAP_MEMORY options in conf/confignode-env.sh and conf/datanode-env.sh.</li></ul>`,84)]))}const l=t(s,[["render",o],["__file","Frequently-asked-questions.html.vue"]]),c=JSON.parse(`{"path":"/UserGuide/V1.3.0-2/FAQ/Frequently-asked-questions.html","title":"Frequently Asked Questions","lang":"en-US","frontmatter":{"description":"Frequently Asked Questions General FAQ How can I identify my version of IoTDB? There are several ways to identify the version of IoTDB that you are using: Launch IoTDB's Command...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/FAQ/Frequently-asked-questions.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.3.0-2/FAQ/Frequently-asked-questions.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Frequently Asked Questions"}],["meta",{"property":"og:description","content":"Frequently Asked Questions General FAQ How can I identify my version of IoTDB? There are several ways to identify the version of IoTDB that you are using: Launch IoTDB's Command..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Frequently Asked Questions\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"General FAQ","slug":"general-faq","link":"#general-faq","children":[{"level":3,"title":"How can I identify my version of IoTDB?","slug":"how-can-i-identify-my-version-of-iotdb","link":"#how-can-i-identify-my-version-of-iotdb","children":[]},{"level":3,"title":"Where can I find IoTDB logs?","slug":"where-can-i-find-iotdb-logs","link":"#where-can-i-find-iotdb-logs","children":[]},{"level":3,"title":"Where can I find IoTDB data files?","slug":"where-can-i-find-iotdb-data-files","link":"#where-can-i-find-iotdb-data-files","children":[]},{"level":3,"title":"How do I know how many time series are stored in IoTDB?","slug":"how-do-i-know-how-many-time-series-are-stored-in-iotdb","link":"#how-do-i-know-how-many-time-series-are-stored-in-iotdb","children":[]},{"level":3,"title":"Can I use Hadoop and Spark to read TsFile in IoTDB?","slug":"can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb","link":"#can-i-use-hadoop-and-spark-to-read-tsfile-in-iotdb","children":[]},{"level":3,"title":"How does IoTDB handle duplicate points?","slug":"how-does-iotdb-handle-duplicate-points","link":"#how-does-iotdb-handle-duplicate-points","children":[]},{"level":3,"title":"How can I tell what type of the specific timeseries?","slug":"how-can-i-tell-what-type-of-the-specific-timeseries","link":"#how-can-i-tell-what-type-of-the-specific-timeseries","children":[]},{"level":3,"title":"How can I change IoTDB's Cli time display format?","slug":"how-can-i-change-iotdb-s-cli-time-display-format","link":"#how-can-i-change-iotdb-s-cli-time-display-format","children":[]},{"level":3,"title":"How to handle error IndexOutOfBoundsException from org.apache.ratis.grpc.server.GrpcLogAppender?","slug":"how-to-handle-error-indexoutofboundsexception-from-org-apache-ratis-grpc-server-grpclogappender","link":"#how-to-handle-error-indexoutofboundsexception-from-org-apache-ratis-grpc-server-grpclogappender","children":[]},{"level":3,"title":"How to deal with estimated out of memory errors?","slug":"how-to-deal-with-estimated-out-of-memory-errors","link":"#how-to-deal-with-estimated-out-of-memory-errors","children":[]}]},{"level":2,"title":"FAQ for Cluster Setup","slug":"faq-for-cluster-setup","link":"#faq-for-cluster-setup","children":[{"level":3,"title":"Cluster StartUp and Stop","slug":"cluster-startup-and-stop","link":"#cluster-startup-and-stop","children":[]},{"level":3,"title":"Cluster Restart","slug":"cluster-restart","link":"#cluster-restart","children":[]},{"level":3,"title":"Cluster Maintenance","slug":"cluster-maintenance","link":"#cluster-maintenance","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.73,"words":1719},"filePathRelative":"UserGuide/V1.3.0-2/FAQ/Frequently-asked-questions.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{l as comp,c as data};
