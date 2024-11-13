import{_ as n,c as a,b as e,o as t}from"./app-BHE9oQwv.js";const i={};function l(p,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="rust-原生接口" tabindex="-1"><a class="header-anchor" href="#rust-原生接口"><span>Rust 原生接口</span></a></h1><p>IoTDB 使用 Thrift 作为跨语言的 RPC 框架，因此可以通过 Thrift 提供的接口来实现对 IoTDB 的访问。本文档将介绍如何生成可访问 IoTDB 的原生 Rust 接口。</p><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖"><span>依赖</span></a></h2><ul><li>JDK &gt;= 1.8</li><li>Rust &gt;= 1.0.0</li><li>thrift 0.14.1</li><li>Linux、Macos 或其他类 unix 系统</li><li>Windows+bash (下载 IoTDB Go client 需要 git ，通过 WSL、cygwin、Git Bash 任意一种方式均可)</li></ul><p>必须安装 thrift（0.14.1 或更高版本）才能将 thrift 文件编译为 Rust 代码。下面是官方的安装教程，最终，您应该得到一个 thrift 可执行文件。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">http://thrift.apache.org/docs/install/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="编译-thrift-库-生成-rust-原生接口" tabindex="-1"><a class="header-anchor" href="#编译-thrift-库-生成-rust-原生接口"><span>编译 thrift 库，生成 Rust 原生接口</span></a></h2><ol><li>在 IoTDB 源代码文件夹的根目录中找到 pom.xml 文件。</li><li>打开 pom.xml 文件，找到以下内容：</li></ol><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>generate-thrift-sources-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>generate-sources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>generator</span><span class="token punctuation">&gt;</span></span>java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>generator</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thriftExecutable</span><span class="token punctuation">&gt;</span></span>\${thrift.exec.absolute.path}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thriftExecutable</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thriftSourceRoot</span><span class="token punctuation">&gt;</span></span>\${basedir}/src/main/thrift<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thriftSourceRoot</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>参考该设置，在 pom.xml 文件中添加以下内容，用来生成 Rust 的原生接口：</li></ol><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>generate-thrift-sources-rust<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>generate-sources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>generator</span><span class="token punctuation">&gt;</span></span>rs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>generator</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thriftExecutable</span><span class="token punctuation">&gt;</span></span>\${thrift.exec.absolute.path}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thriftExecutable</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thriftSourceRoot</span><span class="token punctuation">&gt;</span></span>\${basedir}/src/main/thrift<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thriftSourceRoot</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">&gt;</span></span>**/common.thrift,**/client.thrift<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">&gt;</span></span>\${project.build.directory}/generated-sources-rust<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>outputDirectory</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>在 IoTDB 源代码文件夹的根目录下，运行<code>mvn clean generate-sources</code>，</li></ol><p>这个指令将自动删除<code>iotdb/iotdb-protocol/thrift/target</code> 和 <code>iotdb/iotdb-protocol/thrift-commons/target</code>中的文件，并使用新生成的 thrift 文件重新填充该文件夹。</p><p>这个文件夹在 git 中会被忽略，并且<strong>永远不应该被推到 git 中！</strong></p><p><strong>注意</strong>不要将<code>iotdb/iotdb-protocol/thrift/target</code> 和 <code>iotdb/iotdb-protocol/thrift-commons/target</code>上传到 git 仓库中 ！</p><h2 id="使用-rust-原生接口" tabindex="-1"><a class="header-anchor" href="#使用-rust-原生接口"><span>使用 Rust 原生接口</span></a></h2><p>将 <code>iotdb/iotdb-protocol/thrift/target/generated-sources-rust/</code> 和 <code>iotdb/iotdb-protocol/thrift-commons/target/generated-sources-rust/</code> 中的文件复制到您的项目中，即可使用。</p><h2 id="支持的-rpc-接口" tabindex="-1"><a class="header-anchor" href="#支持的-rpc-接口"><span>支持的 rpc 接口</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// 打开一个 session</span>
<span class="line">TSOpenSessionResp openSession(1:TSOpenSessionReq req);</span>
<span class="line"></span>
<span class="line">// 关闭一个 session</span>
<span class="line">TSStatus closeSession(1:TSCloseSessionReq req);</span>
<span class="line"></span>
<span class="line">// 执行一条 SQL 语句</span>
<span class="line">TSExecuteStatementResp executeStatement(1:TSExecuteStatementReq req);</span>
<span class="line"></span>
<span class="line">// 批量执行 SQL 语句</span>
<span class="line">TSStatus executeBatchStatement(1:TSExecuteBatchStatementReq req);</span>
<span class="line"></span>
<span class="line">// 执行查询 SQL 语句</span>
<span class="line">TSExecuteStatementResp executeQueryStatement(1:TSExecuteStatementReq req);</span>
<span class="line"></span>
<span class="line">// 执行插入、删除 SQL 语句</span>
<span class="line">TSExecuteStatementResp executeUpdateStatement(1:TSExecuteStatementReq req);</span>
<span class="line"></span>
<span class="line">// 向服务器取下一批查询结果</span>
<span class="line">TSFetchResultsResp fetchResults(1:TSFetchResultsReq req)</span>
<span class="line"></span>
<span class="line">// 获取元数据</span>
<span class="line">TSFetchMetadataResp fetchMetadata(1:TSFetchMetadataReq req)</span>
<span class="line"></span>
<span class="line">// 取消某次查询操作</span>
<span class="line">TSStatus cancelOperation(1:TSCancelOperationReq req);</span>
<span class="line"></span>
<span class="line">// 关闭查询操作数据集，释放资源</span>
<span class="line">TSStatus closeOperation(1:TSCloseOperationReq req);</span>
<span class="line"></span>
<span class="line">// 获取时区信息</span>
<span class="line">TSGetTimeZoneResp getTimeZone(1:i64 sessionId);</span>
<span class="line"></span>
<span class="line">// 设置时区</span>
<span class="line">TSStatus setTimeZone(1:TSSetTimeZoneReq req);</span>
<span class="line"></span>
<span class="line">// 获取服务端配置</span>
<span class="line">ServerProperties getProperties();</span>
<span class="line"></span>
<span class="line">// 设置 database</span>
<span class="line">TSStatus setStorageGroup(1:i64 sessionId, 2:string storageGroup);</span>
<span class="line"></span>
<span class="line">// 创建时间序列</span>
<span class="line">TSStatus createTimeseries(1:TSCreateTimeseriesReq req);</span>
<span class="line"></span>
<span class="line">// 创建多条时间序列</span>
<span class="line">TSStatus createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);</span>
<span class="line"></span>
<span class="line">// 删除时间序列</span>
<span class="line">TSStatus deleteTimeseries(1:i64 sessionId, 2:list&lt;string&gt; path)</span>
<span class="line"></span>
<span class="line">// 删除 database</span>
<span class="line">TSStatus deleteStorageGroups(1:i64 sessionId, 2:list&lt;string&gt; storageGroup);</span>
<span class="line"></span>
<span class="line">// 按行插入数据</span>
<span class="line">TSStatus insertRecord(1:TSInsertRecordReq req);</span>
<span class="line"></span>
<span class="line">// 按 String 格式插入一条数据</span>
<span class="line">TSStatus insertStringRecord(1:TSInsertStringRecordReq req);</span>
<span class="line"></span>
<span class="line">// 按列插入数据</span>
<span class="line">TSStatus insertTablet(1:TSInsertTabletReq req);</span>
<span class="line"></span>
<span class="line">// 按列批量插入数据</span>
<span class="line">TSStatus insertTablets(1:TSInsertTabletsReq req);</span>
<span class="line"></span>
<span class="line">// 按行批量插入数据</span>
<span class="line">TSStatus insertRecords(1:TSInsertRecordsReq req);</span>
<span class="line"></span>
<span class="line">// 按行批量插入同属于某个设备的数据</span>
<span class="line">TSStatus insertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span>
<span class="line"></span>
<span class="line">// 按 String 格式批量按行插入数据</span>
<span class="line">TSStatus insertStringRecords(1:TSInsertStringRecordsReq req);</span>
<span class="line"></span>
<span class="line">// 测试按列插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span>
<span class="line">TSStatus testInsertTablet(1:TSInsertTabletReq req);</span>
<span class="line"></span>
<span class="line">// 测试批量按列插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span>
<span class="line">TSStatus testInsertTablets(1:TSInsertTabletsReq req);</span>
<span class="line"></span>
<span class="line">// 测试按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span>
<span class="line">TSStatus testInsertRecord(1:TSInsertRecordReq req);</span>
<span class="line"></span>
<span class="line">// 测试按 String 格式按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span>
<span class="line">TSStatus testInsertStringRecord(1:TSInsertStringRecordReq req);</span>
<span class="line"></span>
<span class="line">// 测试按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span>
<span class="line">TSStatus testInsertRecords(1:TSInsertRecordsReq req);</span>
<span class="line"></span>
<span class="line">// 测试按行批量插入同属于某个设备的数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span>
<span class="line">TSStatus testInsertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span>
<span class="line"></span>
<span class="line">// 测试按 String 格式批量按行插入数据的延迟，注意：该接口不真实插入数据，只用来测试网络延迟</span>
<span class="line">TSStatus testInsertStringRecords(1:TSInsertStringRecordsReq req);</span>
<span class="line"></span>
<span class="line">// 删除数据</span>
<span class="line">TSStatus deleteData(1:TSDeleteDataReq req);</span>
<span class="line"></span>
<span class="line">// 执行原始数据查询</span>
<span class="line">TSExecuteStatementResp executeRawDataQuery(1:TSRawDataQueryReq req);</span>
<span class="line"></span>
<span class="line">// 向服务器申请一个查询语句 ID</span>
<span class="line">i64 requestStatementId(1:i64 sessionId);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]))}const o=n(i,[["render",l],["__file","Programming-Rust-Native-API.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V1.2.x/API/Programming-Rust-Native-API.html","title":"Rust 原生接口","lang":"zh-CN","frontmatter":{"description":"Rust 原生接口 IoTDB 使用 Thrift 作为跨语言的 RPC 框架，因此可以通过 Thrift 提供的接口来实现对 IoTDB 的访问。本文档将介绍如何生成可访问 IoTDB 的原生 Rust 接口。 依赖 JDK >= 1.8 Rust >= 1.0.0 thrift 0.14.1 Linux、Macos 或其他类 unix 系统 Win...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/API/Programming-Rust-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/API/Programming-Rust-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Rust 原生接口"}],["meta",{"property":"og:description","content":"Rust 原生接口 IoTDB 使用 Thrift 作为跨语言的 RPC 框架，因此可以通过 Thrift 提供的接口来实现对 IoTDB 的访问。本文档将介绍如何生成可访问 IoTDB 的原生 Rust 接口。 依赖 JDK >= 1.8 Rust >= 1.0.0 thrift 0.14.1 Linux、Macos 或其他类 unix 系统 Win..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-08-08T09:12:54.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-08T09:12:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Rust 原生接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-08T09:12:54.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":2,"title":"编译 thrift 库，生成 Rust 原生接口","slug":"编译-thrift-库-生成-rust-原生接口","link":"#编译-thrift-库-生成-rust-原生接口","children":[]},{"level":2,"title":"使用 Rust 原生接口","slug":"使用-rust-原生接口","link":"#使用-rust-原生接口","children":[]},{"level":2,"title":"支持的 rpc 接口","slug":"支持的-rpc-接口","link":"#支持的-rpc-接口","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1691485974000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.06,"words":1217},"filePathRelative":"zh/UserGuide/V1.2.x/API/Programming-Rust-Native-API.md","localizedDate":"2023年7月10日","autoDesc":true}');export{o as comp,r as data};
