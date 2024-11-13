import{_ as s,c as a,b as e,o as t}from"./app-BHE9oQwv.js";const i={};function l(p,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="node-js-native-api" tabindex="-1"><a class="header-anchor" href="#node-js-native-api"><span>Node.js Native API</span></a></h1><p>IoTDB uses Thrift as a cross language RPC framework, so access to IoTDB can be achieved through the interface provided by Thrift. This document will introduce how to generate a native Node.js interface that can access IoTDB.</p><h2 id="dependents" tabindex="-1"><a class="header-anchor" href="#dependents"><span>Dependents</span></a></h2><ul><li>JDK &gt;= 1.8</li><li>Node.js &gt;= 16.0.0</li><li>thrift 0.14.1</li><li>Linux、Macos or like unix</li><li>Windows+bash</li></ul><p>Thrift (0.14.1 or higher) must be installed to compile Thrift files into Node.js code. The following is the official installation tutorial, and in the end, you should receive a Thrift executable file.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">http://thrift.apache.org/docs/install/</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="compile-the-thrift-library-and-generate-the-node-js-native-interface" tabindex="-1"><a class="header-anchor" href="#compile-the-thrift-library-and-generate-the-node-js-native-interface"><span>Compile the Thrift library and generate the Node.js native interface</span></a></h2><ol><li>Find the pom.xml file in the root directory of the IoTDB source code folder.</li><li>Open the pom.xml file and find the following content:</li></ol><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span></span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>Referring to this setting, add the following content to the pom.xml file to generate the native interface for Node.js:</li></ol><div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>execution</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>id</span><span class="token punctuation">&gt;</span></span>generate-thrift-sources-nodejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>id</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>phase</span><span class="token punctuation">&gt;</span></span>generate-sources<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>phase</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goals</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>goal</span><span class="token punctuation">&gt;</span></span>compile<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goal</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>goals</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>configuration</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>generator</span><span class="token punctuation">&gt;</span></span>js:node<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>generator</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thriftExecutable</span><span class="token punctuation">&gt;</span></span>\${thrift.exec.absolute.path}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thriftExecutable</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thriftSourceRoot</span><span class="token punctuation">&gt;</span></span>\${basedir}/src/main/thrift<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thriftSourceRoot</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>includes</span><span class="token punctuation">&gt;</span></span>**/common.thrift,**/client.thrift<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>includes</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>outputDirectory</span><span class="token punctuation">&gt;</span></span>\${project.build.directory}/generated-sources-nodejs<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>outputDirectory</span><span class="token punctuation">&gt;</span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>configuration</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>execution</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>In the root directory of the IoTDB source code folder，run <code>mvn clean generate-sources</code>，</li></ol><p>This command will automatically delete the files in <code>iotdb/iotdb-protocol/thrift/target</code> and <code>iotdb/iotdb-protocol/thrift-commons/target</code>, and repopulate the folder with the newly generated throttle file.</p><h2 id="using-the-node-js-native-interface" tabindex="-1"><a class="header-anchor" href="#using-the-node-js-native-interface"><span>Using the Node.js native interface</span></a></h2><p>copy <code>iotdb/iotdb-protocol/thrift/target/generated-sources-nodejs/</code> and <code>iotdb/iotdb-protocol/thrift-commons/target/generated-sources-nodejs/</code> in your project。</p><h2 id="rpc-interface" tabindex="-1"><a class="header-anchor" href="#rpc-interface"><span>rpc interface</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// open a session</span>
<span class="line">TSOpenSessionResp openSession(1:TSOpenSessionReq req);</span>
<span class="line"></span>
<span class="line">// close a session</span>
<span class="line">TSStatus closeSession(1:TSCloseSessionReq req);</span>
<span class="line"></span>
<span class="line">// run an SQL statement in batch</span>
<span class="line">TSExecuteStatementResp executeStatement(1:TSExecuteStatementReq req);</span>
<span class="line"></span>
<span class="line">// execute SQL statement in batch</span>
<span class="line">TSStatus executeBatchStatement(1:TSExecuteBatchStatementReq req);</span>
<span class="line"></span>
<span class="line">// execute query SQL statement</span>
<span class="line">TSExecuteStatementResp executeQueryStatement(1:TSExecuteStatementReq req);</span>
<span class="line"></span>
<span class="line">// execute insert, delete and update SQL statement </span>
<span class="line">TSExecuteStatementResp executeUpdateStatement(1:TSExecuteStatementReq req);</span>
<span class="line"></span>
<span class="line">// fetch next query result</span>
<span class="line">TSFetchResultsResp fetchResults(1:TSFetchResultsReq req)</span>
<span class="line"></span>
<span class="line">// fetch meta data</span>
<span class="line">TSFetchMetadataResp fetchMetadata(1:TSFetchMetadataReq req)</span>
<span class="line"></span>
<span class="line">// cancel a query </span>
<span class="line">TSStatus cancelOperation(1:TSCancelOperationReq req);</span>
<span class="line"></span>
<span class="line">// close a query dataset</span>
<span class="line">TSStatus closeOperation(1:TSCloseOperationReq req);</span>
<span class="line"></span>
<span class="line">// get time zone</span>
<span class="line">TSGetTimeZoneResp getTimeZone(1:i64 sessionId);</span>
<span class="line"></span>
<span class="line">// set time zone</span>
<span class="line">TSStatus setTimeZone(1:TSSetTimeZoneReq req);</span>
<span class="line"></span>
<span class="line">// get server&#39;s properties</span>
<span class="line">ServerProperties getProperties();</span>
<span class="line"></span>
<span class="line">// CREATE DATABASE</span>
<span class="line">TSStatus setStorageGroup(1:i64 sessionId, 2:string storageGroup);</span>
<span class="line"></span>
<span class="line">// create timeseries</span>
<span class="line">TSStatus createTimeseries(1:TSCreateTimeseriesReq req);</span>
<span class="line"></span>
<span class="line">// create multi timeseries</span>
<span class="line">TSStatus createMultiTimeseries(1:TSCreateMultiTimeseriesReq req);</span>
<span class="line"></span>
<span class="line">// delete timeseries</span>
<span class="line">TSStatus deleteTimeseries(1:i64 sessionId, 2:list&lt;string&gt; path)</span>
<span class="line"></span>
<span class="line">// delete sttorage groups</span>
<span class="line">TSStatus deleteStorageGroups(1:i64 sessionId, 2:list&lt;string&gt; storageGroup);</span>
<span class="line"></span>
<span class="line">// insert record</span>
<span class="line">TSStatus insertRecord(1:TSInsertRecordReq req);</span>
<span class="line"></span>
<span class="line">// insert record in string format</span>
<span class="line">TSStatus insertStringRecord(1:TSInsertStringRecordReq req);</span>
<span class="line"></span>
<span class="line">// insert tablet</span>
<span class="line">TSStatus insertTablet(1:TSInsertTabletReq req);</span>
<span class="line"></span>
<span class="line">// insert tablets in batch</span>
<span class="line">TSStatus insertTablets(1:TSInsertTabletsReq req);</span>
<span class="line"></span>
<span class="line">// insert records in batch</span>
<span class="line">TSStatus insertRecords(1:TSInsertRecordsReq req);</span>
<span class="line"></span>
<span class="line">// insert records of one device</span>
<span class="line">TSStatus insertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span>
<span class="line"></span>
<span class="line">// insert records in batch as string format</span>
<span class="line">TSStatus insertStringRecords(1:TSInsertStringRecordsReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert tablet，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertTablet(1:TSInsertTabletReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert tablets，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertTablets(1:TSInsertTabletsReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert record，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertRecord(1:TSInsertRecordReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert record in string format，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertStringRecord(1:TSInsertStringRecordReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert records，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertRecords(1:TSInsertRecordsReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert records of one device，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertRecordsOfOneDevice(1:TSInsertRecordsOfOneDeviceReq req);</span>
<span class="line"></span>
<span class="line">// test the latency of innsert records in string formate，caution：no data will be inserted, only for test latency</span>
<span class="line">TSStatus testInsertStringRecords(1:TSInsertStringRecordsReq req);</span>
<span class="line"></span>
<span class="line">// delete data</span>
<span class="line">TSStatus deleteData(1:TSDeleteDataReq req);</span>
<span class="line"></span>
<span class="line">// execute raw data query</span>
<span class="line">TSExecuteStatementResp executeRawDataQuery(1:TSRawDataQueryReq req);</span>
<span class="line"></span>
<span class="line">// request a statement id from server</span>
<span class="line">i64 requestStatementId(1:i64 sessionId);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17)]))}const o=s(i,[["render",l],["__file","Programming-NodeJS-Native-API.html.vue"]]),r=JSON.parse('{"path":"/UserGuide/V1.3.0-2/API/Programming-NodeJS-Native-API.html","title":"Node.js Native API","lang":"en-US","frontmatter":{"description":"Node.js Native API IoTDB uses Thrift as a cross language RPC framework, so access to IoTDB can be achieved through the interface provided by Thrift. This document will introduce...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/API/Programming-NodeJS-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.3.0-2/API/Programming-NodeJS-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Node.js Native API"}],["meta",{"property":"og:description","content":"Node.js Native API IoTDB uses Thrift as a cross language RPC framework, so access to IoTDB can be achieved through the interface provided by Thrift. This document will introduce..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Node.js Native API\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Dependents","slug":"dependents","link":"#dependents","children":[]},{"level":2,"title":"Compile the Thrift library and generate the Node.js native interface","slug":"compile-the-thrift-library-and-generate-the-node-js-native-interface","link":"#compile-the-thrift-library-and-generate-the-node-js-native-interface","children":[]},{"level":2,"title":"Using the Node.js native interface","slug":"using-the-node-js-native-interface","link":"#using-the-node-js-native-interface","children":[]},{"level":2,"title":"rpc interface","slug":"rpc-interface","link":"#rpc-interface","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.78,"words":833},"filePathRelative":"UserGuide/V1.3.0-2/API/Programming-NodeJS-Native-API.md","localizedDate":"July 10, 2023","autoDesc":true}');export{o as comp,r as data};
