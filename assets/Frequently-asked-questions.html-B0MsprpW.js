import{_ as s,c as n,b as t,o as a}from"./app-BHE9oQwv.js";const i={};function r(l,e){return a(),n("div",null,e[0]||(e[0]=[t(`<h1 id="frequently-asked-questions" tabindex="-1"><a class="header-anchor" href="#frequently-asked-questions"><span>Frequently Asked Questions</span></a></h1><p><strong>How can I identify my version of IoTDB?</strong></p><p>There are several ways to identify the version of IoTDB that you are using:</p><ul><li>Launch IoTDB&#39;s Command Line Interface:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; ./start-cli.sh -p 6667 -pw root -u root -h localhost</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Where can I find IoTDB logs?</strong></p><p>Suppose your root directory is:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">$ pwd</span>
<span class="line">/workspace/iotdb</span>
<span class="line"></span>
<span class="line">$ ls -l</span>
<span class="line">server/</span>
<span class="line">cli/</span>
<span class="line">pom.xml</span>
<span class="line">Readme.md</span>
<span class="line">...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Let <code>$IOTDB_HOME = /workspace/iotdb/server/target/iotdb-server-{project.version}</code></p><p>Let <code>$IOTDB_CLI_HOME = /workspace/iotdb/cli/target/iotdb-cli-{project.version}</code></p><p>By default settings, the logs are stored under <code>IOTDB_HOME/logs</code>. You can change log level and storage path by configuring <code>logback.xml</code> under <code>IOTDB_HOME/conf</code>.</p><p><strong>Where can I find IoTDB data files?</strong></p><p>By default settings, the data files (including tsfile, metadata, and WAL files) are stored under <code>IOTDB_HOME/data/datanode</code>.</p><p><strong>How do I know how many time series are stored in IoTDB?</strong></p><p>Use IoTDB&#39;s Command Line Interface:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>In the result, there is a statement shows <code>Total timeseries number</code>, this number is the timeseries number in IoTDB.</p><p>In the current version, IoTDB supports querying the number of time series. Use IoTDB&#39;s Command Line Interface:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; count timeseries root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If you are using Linux, you can use the following shell command:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; grep &quot;0,root&quot; $IOTDB_HOME/data/system/schema/mlog.txt |  wc -l</span>
<span class="line">&gt;   6</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Can I use Hadoop and Spark to read TsFile in IoTDB?</strong></p><p>Yes. IoTDB has intense integration with Open Source Ecosystem. IoTDB supports <a href="https://github.com/apache/iotdb/tree/master/hadoop" target="_blank" rel="noopener noreferrer">Hadoop</a>, <a href="https://github.com/apache/iotdb/tree/master/spark" target="_blank" rel="noopener noreferrer">Spark</a> and <a href="https://github.com/apache/iotdb/tree/master/grafana" target="_blank" rel="noopener noreferrer">Grafana</a> visualization tool.</p><p><strong>How does IoTDB handle duplicate points?</strong></p><p>A data point is uniquely identified by a full time series path (e.g. <code>root.vehicle.d0.s0</code>) and timestamp. If you submit a new point with the same path and timestamp as an existing point, IoTDB updates the value of this point instead of inserting a new point.</p><p><strong>How can I tell what type of the specific timeseries?</strong></p><p>Use <code>SHOW TIMESERIES &lt;timeseries path&gt;</code> SQL in IoTDB&#39;s Command Line Interface:</p><p>For example, if you want to know the type of all timeseries, the &lt;timeseries path&gt; should be <code>root</code>. The statement will be:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>If you want to query specific sensor, you can replace the &lt;timeseries path&gt; with the sensor name. For example:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.fit.d1.s1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Otherwise, you can also use wildcard in timeseries path:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show timeseries root.fit.d1.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>How can I change IoTDB&#39;s Cli time display format?</strong></p><p>The default IoTDB&#39;s Cli time display format is readable (e.g. <code>1970-01-01T08:00:00.001</code>), if you want to display time in timestamp type or other readable format, add parameter <code>-disableISO8601</code> in start command:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">&gt; $IOTDB_CLI_HOME/sbin/start-cli.sh -h 127.0.0.1 -p 6667 -u root -pw root -disableISO8601</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>How to handle error <code>IndexOutOfBoundsException</code> from <code>org.apache.ratis.grpc.server.GrpcLogAppender</code>?</strong></p><p>It is an internal error introduced by Ratis 2.4.1 dependency, and we can safely ignore this exception as it will<br> not affect normal operations. We will fix this message in the incoming releases.</p>`,44)]))}const d=s(i,[["render",r],["__file","Frequently-asked-questions.html.vue"]]),p=JSON.parse(`{"path":"/UserGuide/V1.0.x/FAQ/Frequently-asked-questions.html","title":"Frequently Asked Questions","lang":"en-US","frontmatter":{"description":"Frequently Asked Questions How can I identify my version of IoTDB? There are several ways to identify the version of IoTDB that you are using: Launch IoTDB's Command Line Interf...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/FAQ/Frequently-asked-questions.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/FAQ/Frequently-asked-questions.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Frequently Asked Questions"}],["meta",{"property":"og:description","content":"Frequently Asked Questions How can I identify my version of IoTDB? There are several ways to identify the version of IoTDB that you are using: Launch IoTDB's Command Line Interf..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Frequently Asked Questions\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.17,"words":650},"filePathRelative":"UserGuide/V1.0.x/FAQ/Frequently-asked-questions.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{d as comp,p as data};