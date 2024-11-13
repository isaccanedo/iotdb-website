import{_ as s,c as a,b as t,o as p}from"./app-BHE9oQwv.js";const e={};function o(l,n){return p(),a("div",null,n[0]||(n[0]=[t(`<h1 id="apache-spark-iotdb" tabindex="-1"><a class="header-anchor" href="#apache-spark-iotdb"><span>Apache Spark(IoTDB)</span></a></h1><h2 id="版本支持" tabindex="-1"><a class="header-anchor" href="#版本支持"><span>版本支持</span></a></h2><p>支持的 Spark 与 Scala 版本如下：</p><table><thead><tr><th>Spark 版本</th><th>Scala 版本</th></tr></thead><tbody><tr><td><code>2.4.0-latest</code></td><td><code>2.11, 2.12</code></td></tr></tbody></table><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><ol><li>当前版本的 <code>spark-iotdb-connector</code> 支持 <code>2.11</code> 与 <code>2.12</code> 两个版本的 Scala，暂不支持 <code>2.13</code> 版本。</li><li><code>spark-iotdb-connector</code> 支持在 Java、Scala 版本的 Spark 与 PySpark 中使用。</li></ol><h2 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h2><p><code>spark-iotdb-connector</code> 总共有两个使用场景，分别为 IDE 开发与 spark-shell 调试。</p><h3 id="ide-开发" tabindex="-1"><a class="header-anchor" href="#ide-开发"><span>IDE 开发</span></a></h3><p>在 IDE 开发时，只需要在 <code>pom.xml</code> 文件中添加以下依赖即可：</p><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.apache.iotdb<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token comment">&lt;!-- spark-iotdb-connector_2.11 or spark-iotdb-connector_2.13 --&gt;</span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spark-iotdb-connector_2.12.10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>\${iotdb.version}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="spark-shell-调试" tabindex="-1"><a class="header-anchor" href="#spark-shell-调试"><span><code>spark-shell</code> 调试</span></a></h3><p>如果需要在 <code>spark-shell</code> 中使用 <code>spark-iotdb-connetcor</code>，需要先在官网下载 <code>with-dependencies</code> 版本的 jar 包。然后再将 Jar 包拷贝到 <code>\${SPARK_HOME}/jars</code> 目录中即可。<br> 执行以下命令即可：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cp</span> spark-iotdb-connector_2.12.10-<span class="token variable">\${iotdb.version}</span>.jar <span class="token variable">$SPARK_HOME</span>/jars/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>此外，为了保证 spark 能使用 JDBC 和 IoTDB 连接，需要进行如下操作:</p><p>运行如下命令来编译 IoTDB-JDBC 连接器：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">mvn clean package <span class="token parameter variable">-pl</span> iotdb-client/jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>编译后的 jar 包在如下目录中：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token variable">$IoTDB_HOME</span>/iotdb-client/jdbc/target/iotdb-jdbc-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>-SNAPSHOT-jar-with-dependencies.jar</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>最后再将 jar 包拷贝到 <code>\${SPARK_HOME}/jars</code> 目录中即可。执行以下命令即可：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cp</span> iotdb-jdbc-<span class="token punctuation">{</span>version<span class="token punctuation">}</span>-SNAPSHOT-jar-with-dependencies.jar <span class="token variable">$SPARK_HOME</span>/jars/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2><h3 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span>参数</span></a></h3><table><thead><tr><th>参数</th><th>描述</th><th>默认值</th><th>使用范围</th><th>能否为空</th></tr></thead><tbody><tr><td>url</td><td>指定 IoTDB 的 JDBC 的 URL</td><td>null</td><td>read、write</td><td>false</td></tr><tr><td>user</td><td>IoTDB 的用户名</td><td>root</td><td>read、write</td><td>true</td></tr><tr><td>password</td><td>IoTDB 的密码</td><td>root</td><td>read、write</td><td>true</td></tr><tr><td>sql</td><td>用于指定查询的 SQL 语句</td><td>null</td><td>read</td><td>true</td></tr><tr><td>numPartition</td><td>在 read 中用于指定 DataFrame 的分区数，在 write 中用于设置写入并发数</td><td>1</td><td>read、write</td><td>true</td></tr><tr><td>lowerBound</td><td>查询的起始时间戳（包含）</td><td>0</td><td>read</td><td>true</td></tr><tr><td>upperBound</td><td>查询的结束时间戳（包含）</td><td>0</td><td>read</td><td>true</td></tr></tbody></table><h3 id="从-iotdb-读取数据" tabindex="-1"><a class="header-anchor" href="#从-iotdb-读取数据"><span>从 IoTDB 读取数据</span></a></h3><p>以下是一个示例，演示如何从 IoTDB 中读取数据成为 DataFrame。</p><div class="language-scala line-numbers-mode" data-highlighter="prismjs" data-ext="scala" data-title="scala"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>db<span class="token punctuation">.</span></span>_</span>
<span class="line"></span>
<span class="line"><span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;password&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;sql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;select ** from root&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 查询 SQL</span></span>
<span class="line">  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;lowerBound&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 时间戳下界</span></span>
<span class="line">  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;upperBound&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;100000000&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 时间戳上界</span></span>
<span class="line">  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;numPartition&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;5&quot;</span><span class="token punctuation">)</span> <span class="token comment">// 分区数</span></span>
<span class="line">  <span class="token punctuation">.</span>load</span>
<span class="line"></span>
<span class="line">df<span class="token punctuation">.</span>printSchema<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">df<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="将数据写入-iotdb" tabindex="-1"><a class="header-anchor" href="#将数据写入-iotdb"><span>将数据写入 IoTDB</span></a></h3><p>以下是一个示例，演示如何将数据写入 IoTDB。</p><div class="language-scala line-numbers-mode" data-highlighter="prismjs" data-ext="scala" data-title="scala"><pre><code><span class="line"><span class="token comment">// 构造窄表数据</span></span>
<span class="line"><span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>createDataFrame<span class="token punctuation">(</span>List<span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0&quot;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">1.0F</span><span class="token punctuation">,</span> <span class="token number">1.0D</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0&quot;</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">2.0F</span><span class="token punctuation">,</span> <span class="token number">2.0D</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">val</span> dfWithColumn <span class="token operator">=</span> df<span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Time&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Device&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s0&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s2&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s3&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s4&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_8&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;s5&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 写入窄表数据</span></span>
<span class="line">dfWithColumn</span>
<span class="line">  <span class="token punctuation">.</span>write</span>
<span class="line">  <span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>save</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 构造宽表数据</span></span>
<span class="line"><span class="token keyword">val</span> df <span class="token operator">=</span> spark<span class="token punctuation">.</span>createDataFrame<span class="token punctuation">(</span>List<span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1L</span><span class="token punctuation">,</span> <span class="token number">1.0F</span><span class="token punctuation">,</span> <span class="token number">1.0D</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&quot;hello&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2L</span><span class="token punctuation">,</span> <span class="token number">2.0F</span><span class="token punctuation">,</span> <span class="token number">2.0D</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;world&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">val</span> dfWithColumn <span class="token operator">=</span> df<span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Time&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s0&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s1&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s2&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_5&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s3&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_6&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s4&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>withColumnRenamed<span class="token punctuation">(</span><span class="token string">&quot;_7&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;root.test.d0.s5&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 写入宽表数据</span></span>
<span class="line">dfWithColumn<span class="token punctuation">.</span>write<span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;numPartition&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">.</span>save</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="宽表与窄表转换" tabindex="-1"><a class="header-anchor" href="#宽表与窄表转换"><span>宽表与窄表转换</span></a></h3><p>以下是如何转换宽表与窄表的示例：</p><ul><li>从宽到窄</li></ul><div class="language-scala line-numbers-mode" data-highlighter="prismjs" data-ext="scala" data-title="scala"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>db<span class="token punctuation">.</span></span>_</span>
<span class="line"></span>
<span class="line"><span class="token keyword">val</span> wide_df <span class="token operator">=</span> spark<span class="token punctuation">.</span>read<span class="token punctuation">.</span>format<span class="token punctuation">(</span><span class="token string">&quot;org.apache.iotdb.spark.db&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;url&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;jdbc:iotdb://127.0.0.1:6667/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>option<span class="token punctuation">(</span><span class="token string">&quot;sql&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;select * from root.** where time &lt; 1100 and time &gt; 1000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load</span>
<span class="line"><span class="token keyword">val</span> narrow_df <span class="token operator">=</span> Transformer<span class="token punctuation">.</span>toNarrowForm<span class="token punctuation">(</span>spark<span class="token punctuation">,</span> wide_df<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>从窄到宽</li></ul><div class="language-scala line-numbers-mode" data-highlighter="prismjs" data-ext="scala" data-title="scala"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>iotdb<span class="token punctuation">.</span>spark<span class="token punctuation">.</span>db<span class="token punctuation">.</span></span>_</span>
<span class="line"></span>
<span class="line"><span class="token keyword">val</span> wide_df <span class="token operator">=</span> Transformer<span class="token punctuation">.</span>toWideForm<span class="token punctuation">(</span>spark<span class="token punctuation">,</span> narrow_df<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="宽表与窄表" tabindex="-1"><a class="header-anchor" href="#宽表与窄表"><span>宽表与窄表</span></a></h2><p>以下 TsFile 结构为例：TsFile 模式中有三个度量：状态，温度和硬件。 这三种测量的基本信息如下：</p><table><thead><tr><th>名称</th><th>类型</th><th>编码</th></tr></thead><tbody><tr><td>状态</td><td>Boolean</td><td>PLAIN</td></tr><tr><td>温度</td><td>Float</td><td>RLE</td></tr><tr><td>硬件</td><td>Text</td><td>PLAIN</td></tr></tbody></table><p>TsFile 中的现有数据如下：</p><ul><li><code>d1:root.ln.wf01.wt01</code></li><li><code>d2:root.ln.wf02.wt02</code></li></ul><table><thead><tr><th>time</th><th>d1.status</th><th>time</th><th>d1.temperature</th><th>time</th><th>d2.hardware</th><th>time</th><th>d2.status</th></tr></thead><tbody><tr><td>1</td><td>True</td><td>1</td><td>2.2</td><td>2</td><td>&quot;aaa&quot;</td><td>1</td><td>True</td></tr><tr><td>3</td><td>True</td><td>2</td><td>2.2</td><td>4</td><td>&quot;bbb&quot;</td><td>2</td><td>False</td></tr><tr><td>5</td><td>False</td><td>3</td><td>2.1</td><td>6</td><td>&quot;ccc&quot;</td><td>4</td><td>True</td></tr></tbody></table><p>宽（默认）表形式如下：</p><table><thead><tr><th>Time</th><th>root.ln.wf02.wt02.temperature</th><th>root.ln.wf02.wt02.status</th><th>root.ln.wf02.wt02.hardware</th><th>root.ln.wf01.wt01.temperature</th><th>root.ln.wf01.wt01.status</th><th>root.ln.wf01.wt01.hardware</th></tr></thead><tbody><tr><td>1</td><td>null</td><td>true</td><td>null</td><td>2.2</td><td>true</td><td>null</td></tr><tr><td>2</td><td>null</td><td>false</td><td>aaa</td><td>2.2</td><td>null</td><td>null</td></tr><tr><td>3</td><td>null</td><td>null</td><td>null</td><td>2.1</td><td>true</td><td>null</td></tr><tr><td>4</td><td>null</td><td>true</td><td>bbb</td><td>null</td><td>null</td><td>null</td></tr><tr><td>5</td><td>null</td><td>null</td><td>null</td><td>null</td><td>false</td><td>null</td></tr><tr><td>6</td><td>null</td><td>null</td><td>ccc</td><td>null</td><td>null</td><td>null</td></tr></tbody></table><p>你还可以使用窄表形式，如下所示：</p><table><thead><tr><th>Time</th><th>Device</th><th>status</th><th>hardware</th><th>temperature</th></tr></thead><tbody><tr><td>1</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.2</td></tr><tr><td>1</td><td>root.ln.wf02.wt02</td><td>true</td><td>null</td><td>null</td></tr><tr><td>2</td><td>root.ln.wf02.wt01</td><td>null</td><td>null</td><td>2.2</td></tr><tr><td>2</td><td>root.ln.wf02.wt02</td><td>false</td><td>aaa</td><td>null</td></tr><tr><td>3</td><td>root.ln.wf02.wt01</td><td>true</td><td>null</td><td>2.1</td></tr><tr><td>4</td><td>root.ln.wf02.wt02</td><td>true</td><td>bbb</td><td>null</td></tr><tr><td>5</td><td>root.ln.wf02.wt01</td><td>false</td><td>null</td><td>null</td></tr><tr><td>6</td><td>root.ln.wf02.wt02</td><td>null</td><td>ccc</td><td>null</td></tr></tbody></table>`,46)]))}const i=s(e,[["render",o],["__file","Spark-IoTDB.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/latest/Ecosystem-Integration/Spark-IoTDB.html","title":"Apache Spark(IoTDB)","lang":"zh-CN","frontmatter":{"description":"Apache Spark(IoTDB) 版本支持 支持的 Spark 与 Scala 版本如下： 注意事项 当前版本的 spark-iotdb-connector 支持 2.11 与 2.12 两个版本的 Scala，暂不支持 2.13 版本。 spark-iotdb-connector 支持在 Java、Scala 版本的 Spark 与 PySpa...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/Ecosystem-Integration/Spark-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/Ecosystem-Integration/Spark-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Apache Spark(IoTDB)"}],["meta",{"property":"og:description","content":"Apache Spark(IoTDB) 版本支持 支持的 Spark 与 Scala 版本如下： 注意事项 当前版本的 spark-iotdb-connector 支持 2.11 与 2.12 两个版本的 Scala，暂不支持 2.13 版本。 spark-iotdb-connector 支持在 Java、Scala 版本的 Spark 与 PySpa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Apache Spark(IoTDB)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"版本支持","slug":"版本支持","link":"#版本支持","children":[]},{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"部署","slug":"部署","link":"#部署","children":[{"level":3,"title":"IDE 开发","slug":"ide-开发","link":"#ide-开发","children":[]},{"level":3,"title":"spark-shell 调试","slug":"spark-shell-调试","link":"#spark-shell-调试","children":[]}]},{"level":2,"title":"使用","slug":"使用","link":"#使用","children":[{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"从 IoTDB 读取数据","slug":"从-iotdb-读取数据","link":"#从-iotdb-读取数据","children":[]},{"level":3,"title":"将数据写入 IoTDB","slug":"将数据写入-iotdb","link":"#将数据写入-iotdb","children":[]},{"level":3,"title":"宽表与窄表转换","slug":"宽表与窄表转换","link":"#宽表与窄表转换","children":[]}]},{"level":2,"title":"宽表与窄表","slug":"宽表与窄表","link":"#宽表与窄表","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":2},{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Peng Junzhi","email":"78788603+Pengzna@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.61,"words":1083},"filePathRelative":"zh/UserGuide/latest/Ecosystem-Integration/Spark-IoTDB.md","localizedDate":"2023年7月10日","autoDesc":true}');export{i as comp,u as data};
