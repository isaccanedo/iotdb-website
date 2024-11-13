import{_ as t,c as i,b as n,o as s}from"./app-BHE9oQwv.js";const a={};function l(r,e){return s(),i("div",null,e[0]||(e[0]=[n(`<h1 id="edge-cloud-collaboration" tabindex="-1"><a class="header-anchor" href="#edge-cloud-collaboration"><span>Edge-Cloud Collaboration</span></a></h1><h2 id="_1-introduction" tabindex="-1"><a class="header-anchor" href="#_1-introduction"><span>1.Introduction</span></a></h2><p>The Sync Tool is an IoTDB suite tool that continuously uploads the timeseries data from the edge (sender) to the cloud(receiver).</p><p>On the sender side of the sync-tool, the sync module is embedded in the IoTDB engine. The receiver side of the sync-tool supports IoTDB (standalone/cluster).</p><p>You can use SQL commands to start or close a synchronization task at the sender, and you can check the status of the synchronization task at any time. At the receiving end, you can set the IP white list to specify the access IP address range of sender.</p><h2 id="_2-model-definition" tabindex="-1"><a class="header-anchor" href="#_2-model-definition"><span>2.Model definition</span></a></h2><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Sync-Tool/pipe2.png?raw=true" alt="pipe2.png" tabindex="0" loading="lazy"><figcaption>pipe2.png</figcaption></figure><p>Two machines A and B, which are installed with iotdb, we want to continuously synchronize the data from A to B. To better describe this process, we introduce the following concepts.</p><ul><li>Pipe <ul><li>It refers to a synchronization task. In the above case, we can see that there is a data flow pipeline connecting A and B.</li><li>A pipe has three states, RUNNING, STOP and DROP, which respectively indicate running, pause and permanent cancellation.</li></ul></li><li>PipeSink <ul><li>It refers to the receiving end. In the above case, pipesink is machine B. At present, the pipesink type only supports IoTDB, that is, the receiver is the IoTDB instance installed on B.</li><li>Pipeserver: when the type of pipesink is IoTDB, you need to open the pipeserver service of IoTDB to process the pipe data.</li></ul></li></ul><h2 id="_3-precautions-for-use" tabindex="-1"><a class="header-anchor" href="#_3-precautions-for-use"><span>3.Precautions for Use</span></a></h2><ul><li>The sender side of the sync-tool currently supports IoTDB version 1.0 <strong>only if data_replication_factor is set to 1</strong>. The receiver side supports any IoTDB version 1.0 configuration</li><li>A normal Pipe has two states: RUNNING indicates that it is synchronizing data to the receiver, and STOP indicates that synchronization to the receiver is suspended.</li><li>When one or more senders send data to a receiver, there should be no intersection between the respective device path sets of these senders and receivers, otherwise unexpected errors may occur. <ul><li>e.g. When sender A includes path <code>root.sg.d.s</code>, sender B also includes the path <code>root.sg.d.s</code>, sender A deletes database <code>root.sg</code> will also delete all data of B stored in the path <code>root.sg.d.s</code> at receiver.</li></ul></li><li>The two &quot;ends&quot; do not support synchronization with each other.</li><li>The Sync Tool only synchronizes insertions. If no database is created on the receiver, a database of the same level as the sender will be automatically created. Currently, deletion operation is not guaranteed to be synchronized and do not support TTL settings, trigger and other operations. <ul><li>If TTL is set on the sender side, all unexpired data in the IoTDB and all future data writes and deletions will be synchronized to the receiver side when Pipe is started.</li></ul></li><li>When operating a synchronization task, ensure that all DataNode nodes in <code>SHOW DATANODES</code> that are in the Running state are connected, otherwise the execution will fail.</li></ul><h2 id="_4-quick-start" tabindex="-1"><a class="header-anchor" href="#_4-quick-start"><span>4.Quick Start</span></a></h2><p>Execute the following SQL statements at the sender and receiver to quickly start a data synchronization task between two IoTDB. For complete SQL statements and configuration matters, please see the <code>parameter configuration</code>and <code>SQL</code> sections. For more usage examples, please refer to the <code>usage examples</code> section.</p><h3 id="_4-1-receiver" tabindex="-1"><a class="header-anchor" href="#_4-1-receiver"><span>4.1 Receiver</span></a></h3><ul><li><p>Start sender IoTDB and receiver IoTDB.</p></li><li><p>Create a PipeSink with IoTDB type.</p></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE PIPESINK central_iotdb AS IoTDB (ip=&#39;There is your goal IP&#39;, port=&#39;There is your goal port&#39;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Establish a Pipe (before creation, ensure that receiver IoTDB has been started).</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE PIPE my_pipe TO central_iotDB</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Start this Pipe.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; START PIPE my_pipe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Show Pipe&#39;s status.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW PIPES</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Stop this Pipe.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; STOP PIPE my_pipe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Continue this Pipe.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; START PIPE my_pipe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Drop this Pipe (delete all information about this pipe).</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; DROP PIPE my_pipe</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_5-parameter-configuration" tabindex="-1"><a class="header-anchor" href="#_5-parameter-configuration"><span>5.Parameter Configuration</span></a></h2><p>All parameters are in <code>$IOTDB_ HOME$/conf/iotdb-common.properties</code>, after all modifications are completed, execute <code>load configuration</code> and it will take effect immediately.</p><h3 id="_5-1-sender" tabindex="-1"><a class="header-anchor" href="#_5-1-sender"><span>5.1 Sender</span></a></h3><table><thead><tr><th><strong>Parameter Name</strong></th><th><strong>max_number_of_sync_file_retry</strong></th></tr></thead><tbody><tr><td>Description</td><td>The maximum number of retries when the sender fails to synchronize files to the receiver.</td></tr><tr><td>Data type</td><td>Int : [0,2147483647]</td></tr><tr><td>Default value</td><td>5</td></tr></tbody></table><h3 id="_5-2-receiver" tabindex="-1"><a class="header-anchor" href="#_5-2-receiver"><span>5.2 Receiver</span></a></h3><table><thead><tr><th><strong>Parameter Name</strong></th><th><strong>ip_white_list</strong></th></tr></thead><tbody><tr><td>Description</td><td>Set the white list of IP addresses of the sender of the synchronization, which is expressed in the form of network segments, and multiple network segments are separated by commas. When the sender synchronizes data to the receiver, the receiver allows synchronization only when the IP address of the sender is within the network segment set in the white list. If the whitelist is empty, the receiver does not allow any sender to synchronize data. By default, the receiver rejects the synchronization request of all IP addresses except 127.0.0.1. When configuring this parameter, please ensure that all DataNode addresses on the sender are set.</td></tr><tr><td>Data type</td><td>String</td></tr><tr><td>Default value</td><td>127.0.0.1/32</td></tr></tbody></table><h2 id="_6-sql" tabindex="-1"><a class="header-anchor" href="#_6-sql"><span>6.SQL</span></a></h2><h3 id="show-pipesinktype" tabindex="-1"><a class="header-anchor" href="#show-pipesinktype"><span>SHOW PIPESINKTYPE</span></a></h3><ul><li>Show all PipeSink types supported by IoTDB.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW PIPESINKTYPE</span>
<span class="line">IoTDB&gt;</span>
<span class="line">+-----+</span>
<span class="line">| type|</span>
<span class="line">+-----+</span>
<span class="line">|IoTDB|</span>
<span class="line">+-----+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-pipesink" tabindex="-1"><a class="header-anchor" href="#create-pipesink"><span>CREATE PIPESINK</span></a></h3><ul><li>Create a PipeSink with IoTDB type, where IP and port are optional parameters.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE PIPESINK &lt;PipeSinkName&gt; AS IoTDB [(ip=&#39;127.0.0.1&#39;,port=6667);]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="drop-pipesink" tabindex="-1"><a class="header-anchor" href="#drop-pipesink"><span>DROP PIPESINK</span></a></h3><ul><li>Drop the pipesink with PipeSinkName parameter.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; DROP PIPESINK &lt;PipeSinkName&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="show-pipesink" tabindex="-1"><a class="header-anchor" href="#show-pipesink"><span>SHOW PIPESINK</span></a></h3><ul><li>Show all PipeSinks&#39; definition, the results set has three columns, name, PipeSink’s type and PipeSink‘s attributes.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW PIPESINKS</span>
<span class="line">IoTDB&gt; SHOW PIPESINK [PipeSinkName]</span>
<span class="line">IoTDB&gt; </span>
<span class="line">+-----------+-----+------------------------+</span>
<span class="line">|       name| type|              attributes|</span>
<span class="line">+-----------+-----+------------------------+</span>
<span class="line">|my_pipesink|IoTDB|ip=&#39;127.0.0.1&#39;,port=6667|</span>
<span class="line">+-----------+-----+------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="create-pipe" tabindex="-1"><a class="header-anchor" href="#create-pipe"><span>CREATE PIPE</span></a></h3><ul><li><p>Create a pipe.</p><ul><li>At present, the SELECT statement only supports <code>**</code> (i.e. data in all timeseries), the FROM statement only supports <code>root</code>, and the WHERE statement only supports the start time of the specified time. The start time can be specified in the form of yyyy-mm-dd HH:MM:SS or a timestamp.</li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE PIPE my_pipe TO my_iotdb [FROM (select ** from root WHERE time&gt;=&#39;yyyy-mm-dd HH:MM:SS&#39; )]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="stop-pipe" tabindex="-1"><a class="header-anchor" href="#stop-pipe"><span>STOP PIPE</span></a></h3><ul><li>Stop the Pipe with PipeName.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; STOP PIPE &lt;PipeName&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="start-pipe" tabindex="-1"><a class="header-anchor" href="#start-pipe"><span>START PIPE</span></a></h3><ul><li>Continue the Pipe with PipeName.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; START PIPE &lt;PipeName&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="drop-pipe" tabindex="-1"><a class="header-anchor" href="#drop-pipe"><span>DROP PIPE</span></a></h3><ul><li>Drop the pipe with PipeName(delete all information about this pipe).</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; DROP PIPE &lt;PipeName&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="show-pipe" tabindex="-1"><a class="header-anchor" href="#show-pipe"><span>SHOW PIPE</span></a></h3><blockquote><p>This statement can be executed on both senders and receivers.</p></blockquote><ul><li><p>Show all Pipe&#39;s status.</p><ul><li><p><code>create time</code>: the creation time of this pipe.</p></li><li><p><code>name</code>: the name of this pipe.</p></li><li><p><code>role</code>: the current role of this IoTDB in pipe, there are two possible roles.</p><ul><li>Sender, the current IoTDB is the synchronous sender</li><li>Receiver, the current IoTDB is the synchronous receiver</li></ul></li><li><p><code>remote</code>: information about the opposite end of the Pipe.</p><ul><li>When role is sender, the value of this field is the PipeSink name.</li><li>When role is receiver, the value of this field is the sender&#39;s IP.</li></ul></li><li><p><code>status</code>: the Pipe&#39;s status.</p></li><li><p><code>attributes</code>: the attributes of Pipe</p><ul><li>When role is sender, the value of this field is the synchronization start time of the Pipe and whether to synchronize the delete operation.</li><li>When role is receiver, the value of this field is the name of the database corresponding to the synchronization connection created on this DataNode.</li></ul></li><li><p><code>message</code>: the status message of this pipe. When pipe runs normally, this column is NORMAL. When an exception occurs, messages may appear in following two states.</p><ul><li>WARN, this indicates that a data loss or other error has occurred, but the pipe will remain running.</li><li>ERROR, This indicates a problem where the network connection works but the data cannot be transferred, for example, the IP of the sender is not in the whitelist of the receiver or the version of the sender is not compatible with that of the receiver.</li><li>When the ERROR status appears, it is recommended to check the DataNode logs after STOP PIPE, check the receiver configuration or network conditions, and then START PIPE again.</li></ul></li></ul></li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW PIPES</span>
<span class="line">IoTDB&gt;</span>
<span class="line">+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+</span>
<span class="line">|            create time|   name |    role|       remote|   status|                          attributes|message|</span>
<span class="line">+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+</span>
<span class="line">|2022-03-30T20:58:30.689|my_pipe1|  sender|  my_pipesink|     STOP|SyncDelOp=false,DataStartTimestamp=0| NORMAL|</span>
<span class="line">+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+ </span>
<span class="line">|2022-03-31T12:55:28.129|my_pipe2|receiver|192.168.11.11|  RUNNING|             Database=&#39;root.vehicle&#39;| NORMAL|</span>
<span class="line">+-----------------------+--------+--------+-------------+---------+------------------------------------+-------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show the pipe status with PipeName. When the PipeName is empty，it is the same with <code>Show PIPES</code>.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW PIPE [PipeName]</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_7-usage-examples" tabindex="-1"><a class="header-anchor" href="#_7-usage-examples"><span>7. Usage Examples</span></a></h2><h3 id="goal" tabindex="-1"><a class="header-anchor" href="#goal"><span>Goal</span></a></h3><ul><li>Create a synchronize task from sender IoTDB to receiver IoTDB.</li><li>Sender wants to synchronize the data after 2022-3-30 00:00:00.</li><li>Sender does not want to synchronize the deletions.</li><li>Receiver only wants to receive data from this sender(sender ip 192.168.0.1).</li></ul><h3 id="receiver" tabindex="-1"><a class="header-anchor" href="#receiver"><span>Receiver</span></a></h3><ul><li><code>vi conf/iotdb-common.properties</code> to config the parameters，set the IP white list to 192.168.0.1/32 to receive and only receive data from sender.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">####################</span>
<span class="line">### PIPE Server Configuration</span>
<span class="line">####################</span>
<span class="line"># White IP list of Sync client.</span>
<span class="line"># Please use the form of IPv4 network segment to present the range of IP, for example: 192.168.0.0/16</span>
<span class="line"># If there are more than one IP segment, please separate them by commas</span>
<span class="line"># The default is to reject all IP to sync except 0.0.0.0</span>
<span class="line"># Datatype: String</span>
<span class="line">ip_white_list=192.168.0.1/32</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sender" tabindex="-1"><a class="header-anchor" href="#sender"><span>Sender</span></a></h3><ul><li>Create PipeSink with IoTDB type, input ip address 192.168.0.1, port 6667.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE PIPESINK my_iotdb AS IoTDB (IP=&#39;192.168.0.2&#39;，PORT=6667)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Create Pipe connect to my_iotdb, input the start time 2022-03-30 00:00:00 in WHERE statments. The following two SQL statements are equivalent</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE PIPE p TO my_iotdb FROM (select ** from root where time&gt;=&#39;2022-03-30 00:00:00&#39;)</span>
<span class="line">IoTDB&gt; CREATE PIPE p TO my_iotdb FROM (select ** from root where time&gt;= 1648569600000)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Start the Pipe p</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; START PIPE p</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Show the status of pipe p.</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW PIPE p</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="result-verification" tabindex="-1"><a class="header-anchor" href="#result-verification"><span>Result Verification</span></a></h3><p>Execute SQL on sender.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE DATABASE root.vehicle;</span>
<span class="line">CREATE TIMESERIES root.vehicle.d0.s0 WITH DATATYPE=INT32, ENCODING=RLE;</span>
<span class="line">CREATE TIMESERIES root.vehicle.d0.s1 WITH DATATYPE=TEXT, ENCODING=PLAIN;</span>
<span class="line">CREATE TIMESERIES root.vehicle.d1.s2 WITH DATATYPE=FLOAT, ENCODING=RLE;</span>
<span class="line">CREATE TIMESERIES root.vehicle.d1.s3 WITH DATATYPE=BOOLEAN, ENCODING=PLAIN;</span>
<span class="line">insert into root.vehicle.d0(timestamp,s0) values(now(),10);</span>
<span class="line">insert into root.vehicle.d0(timestamp,s0,s1) values(now(),12,&#39;12&#39;);</span>
<span class="line">insert into root.vehicle.d0(timestamp,s1) values(now(),&#39;14&#39;);</span>
<span class="line">insert into root.vehicle.d1(timestamp,s2) values(now(),16.0);</span>
<span class="line">insert into root.vehicle.d1(timestamp,s2,s3) values(now(),18.0,true);</span>
<span class="line">insert into root.vehicle.d1(timestamp,s3) values(now(),false);</span>
<span class="line">flush;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Execute SELECT statements, the same results can be found on sender and receiver.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; select ** from root.vehicle</span>
<span class="line">+-----------------------------+------------------+------------------+------------------+------------------+</span>
<span class="line">|             Time|root.vehicle.d0.s0|root.vehicle.d0.s1|root.vehicle.d1.s3|root.vehicle.d1.s2|</span>
<span class="line">+-----------------------------+------------------+------------------+------------------+------------------+</span>
<span class="line">|2022-04-03T20:08:17.127+08:00|        10|       null|       null|       null|</span>
<span class="line">|2022-04-03T20:08:17.358+08:00|        12|        12|       null|       null|</span>
<span class="line">|2022-04-03T20:08:17.393+08:00|       null|        14|       null|       null|</span>
<span class="line">|2022-04-03T20:08:17.538+08:00|       null|       null|       null|       16.0|</span>
<span class="line">|2022-04-03T20:08:17.753+08:00|       null|       null|       true|       18.0|</span>
<span class="line">|2022-04-03T20:08:18.263+08:00|       null|       null|       false|       null|</span>
<span class="line">+-----------------------------+------------------+------------------+------------------+------------------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.134s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-q-a" tabindex="-1"><a class="header-anchor" href="#_8-q-a"><span>8.Q&amp;A</span></a></h2><ul><li><p>Execute <code>CREATE PIPESINK demo as IoTDB</code> get message <code>PIPESINK [demo] already exists in IoTDB.</code></p><ul><li>Cause by: Current PipeSink already exists</li><li>Solution: Execute <code>DROP PIPESINK demo</code> to drop PipeSink and recreate it.</li></ul></li><li><p>Execute <code>DROP PIPESINK pipesinkName</code> get message <code>Can not drop PIPESINK [demo], because PIPE [mypipe] is using it.</code></p><ul><li>Cause by: It is not allowed to delete PipeSink that is used by a running PIPE.</li><li>Solution: Execute <code>SHOW PIPE</code> on the sender side to stop using the PipeSink&#39;s PIPE.</li></ul></li><li><p>Execute <code>CREATE PIPE p to demo</code> get message <code>PIPE [p] is STOP, please retry after drop it.</code></p><ul><li>Cause by: Current Pipe already exists</li><li>Solution: Execute <code>DROP PIPE p</code> to drop Pipe and recreate it.</li></ul></li><li><p>Execute <code>CREATE PIPE p to demo</code> get message <code>Fail to create PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:10732)}.</code></p><ul><li>Cause by: There are some DataNodes with the status Running cannot be connected.</li><li>Solution: Execute <code>SHOW DATANODES</code>, and check for unreachable DataNode networks, or wait for their status to change to Unknown and re-execute the statement.</li></ul></li><li><p>Execute <code>START PIPE p</code> get message <code>Fail to start PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:10732)}.</code></p><ul><li>Cause by: There are some DataNodes with the status Running cannot be connected.</li><li>Solution: Execute <code>SHOW DATANODES</code>, and check for unreachable DataNode networks, or wait for their status to change to Unknown and re-execute the statement.</li></ul></li><li><p>Execute <code>STOP PIPE p</code> get message <code>Fail to stop PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:10732)}.</code></p><ul><li>Cause by: There are some DataNodes with the status Running cannot be connected.</li><li>Solution: Execute <code>SHOW DATANODES</code>, and check for unreachable DataNode networks, or wait for their status to change to Unknown and re-execute the statement.</li></ul></li><li><p>Execute <code>DROP PIPE p</code> get message <code>Fail to DROP_PIPE because Fail to drop PIPE [p] because Connection refused on DataNode: {id=2, internalEndPoint=TEndPoint(ip:127.0.0.1, port:10732)}. Please execute [DROP PIPE p] later to retry.</code></p><ul><li>Cause by: There are some DataNodes with the status Running cannot be connected. Pipe has been deleted on some nodes and the status has been set to <em><strong>DROP</strong></em>.</li><li>Solution: Execute <code>SHOW DATANODES</code>, and check for unreachable DataNode networks, or wait for their status to change to Unknown and re-execute the statement.</li></ul></li><li><p>Sync.log prompts <code>org.apache.iotdb.commons.exception.IoTDBException: root.** already been created as database</code></p><ul><li>Cause by: The synchronization tool attempts to automatically create a database at the sender at the receiver. This is a normal phenomenon.</li><li>Solution: No intervention is required.</li></ul></li></ul>`,87)]))}const d=t(a,[["render",l],["__file","Sync-Tool.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.1.x/Edge-Cloud-Collaboration/Sync-Tool.html","title":"Edge-Cloud Collaboration","lang":"en-US","frontmatter":{"description":"Edge-Cloud Collaboration 1.Introduction The Sync Tool is an IoTDB suite tool that continuously uploads the timeseries data from the edge (sender) to the cloud(receiver). On the ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Edge-Cloud-Collaboration/Sync-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Edge-Cloud-Collaboration/Sync-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Edge-Cloud Collaboration"}],["meta",{"property":"og:description","content":"Edge-Cloud Collaboration 1.Introduction The Sync Tool is an IoTDB suite tool that continuously uploads the timeseries data from the edge (sender) to the cloud(receiver). On the ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Sync-Tool/pipe2.png?raw=true"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Edge-Cloud Collaboration\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/System-Tools/Sync-Tool/pipe2.png?raw=true\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1.Introduction","slug":"_1-introduction","link":"#_1-introduction","children":[]},{"level":2,"title":"2.Model definition","slug":"_2-model-definition","link":"#_2-model-definition","children":[]},{"level":2,"title":"3.Precautions for Use","slug":"_3-precautions-for-use","link":"#_3-precautions-for-use","children":[]},{"level":2,"title":"4.Quick Start","slug":"_4-quick-start","link":"#_4-quick-start","children":[{"level":3,"title":"4.1 Receiver","slug":"_4-1-receiver","link":"#_4-1-receiver","children":[]}]},{"level":2,"title":"5.Parameter Configuration","slug":"_5-parameter-configuration","link":"#_5-parameter-configuration","children":[{"level":3,"title":"5.1 Sender","slug":"_5-1-sender","link":"#_5-1-sender","children":[]},{"level":3,"title":"5.2 Receiver","slug":"_5-2-receiver","link":"#_5-2-receiver","children":[]}]},{"level":2,"title":"6.SQL","slug":"_6-sql","link":"#_6-sql","children":[{"level":3,"title":"SHOW PIPESINKTYPE","slug":"show-pipesinktype","link":"#show-pipesinktype","children":[]},{"level":3,"title":"CREATE PIPESINK","slug":"create-pipesink","link":"#create-pipesink","children":[]},{"level":3,"title":"DROP PIPESINK","slug":"drop-pipesink","link":"#drop-pipesink","children":[]},{"level":3,"title":"SHOW PIPESINK","slug":"show-pipesink","link":"#show-pipesink","children":[]},{"level":3,"title":"CREATE PIPE","slug":"create-pipe","link":"#create-pipe","children":[]},{"level":3,"title":"STOP PIPE","slug":"stop-pipe","link":"#stop-pipe","children":[]},{"level":3,"title":"START PIPE","slug":"start-pipe","link":"#start-pipe","children":[]},{"level":3,"title":"DROP PIPE","slug":"drop-pipe","link":"#drop-pipe","children":[]},{"level":3,"title":"SHOW PIPE","slug":"show-pipe","link":"#show-pipe","children":[]}]},{"level":2,"title":"7. Usage Examples","slug":"_7-usage-examples","link":"#_7-usage-examples","children":[{"level":3,"title":"Goal","slug":"goal","link":"#goal","children":[]},{"level":3,"title":"Receiver","slug":"receiver","link":"#receiver","children":[]},{"level":3,"title":"Sender","slug":"sender","link":"#sender","children":[]},{"level":3,"title":"Result Verification","slug":"result-verification","link":"#result-verification","children":[]}]},{"level":2,"title":"8.Q&A","slug":"_8-q-a","link":"#_8-q-a","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":7.59,"words":2276},"filePathRelative":"UserGuide/V1.1.x/Edge-Cloud-Collaboration/Sync-Tool.md","localizedDate":"July 10, 2023","autoDesc":true}');export{d as comp,c as data};
