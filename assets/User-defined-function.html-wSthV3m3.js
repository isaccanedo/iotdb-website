import{_ as r,c as l,b as t,d as a,e as s,a as o,w as i,r as p,o as d}from"./app-BHE9oQwv.js";const c={};function u(m,e){const n=p("RouteLink");return d(),l("div",null,[e[8]||(e[8]=t(`<h1 id="user-defined-function-udf" tabindex="-1"><a class="header-anchor" href="#user-defined-function-udf"><span>USER-DEFINED FUNCTION (UDF)</span></a></h1><h2 id="_1-udf-introduction" tabindex="-1"><a class="header-anchor" href="#_1-udf-introduction"><span>1. UDF Introduction</span></a></h2><p>UDF (User Defined Function) refers to user-defined functions. IoTDB provides a variety of built-in time series processing functions and also supports extending custom functions to meet more computing needs.</p><p>In IoTDB, you can expand two types of UDF:</p><table style="text-align:left;"><tr><th>UDF Class</th><th>AccessStrategy</th><th>Description</th></tr><tr><td rowspan="2">UDTF</td><td>MAPPABLE_ROW_BY_ROW</td><td>Custom scalar function, input k columns of time series and 1 row of data, output 1 column of time series and 1 row of data, can be used in any clause and expression that appears in the scalar function, such as select clause, where clause, etc.</td></tr><tr><td>ROW_BY_ROW <br>SLIDING_TIME_WINDOW <br>SLIDING_SIZE_WINDOW <br>SESSION_TIME_WINDOW <br>STATE_WINDOW</td><td>Custom time series generation function, input k columns of time series m rows of data, output 1 column of time series n rows of data, the number of input rows m can be different from the number of output rows n, and can only be used in SELECT clauses.</td></tr><tr><td>UDAF</td><td>-</td><td>Custom aggregation function, input k columns of time series m rows of data, output 1 column of time series 1 row of data, can be used in any clause and expression that appears in the aggregation function, such as select clause, having clause, etc.</td></tr></table><h3 id="_1-1-udf-usage" tabindex="-1"><a class="header-anchor" href="#_1-1-udf-usage"><span>1.1 UDF usage</span></a></h3><p>The usage of UDF is similar to that of regular built-in functions, and can be directly used in SELECT statements like calling regular functions.</p><h4 id="_1-basic-sql-syntax-support" tabindex="-1"><a class="header-anchor" href="#_1-basic-sql-syntax-support"><span>1.Basic SQL syntax support</span></a></h4><ul><li>Support <code>SLIMIT</code> / <code>SOFFSET</code></li><li>Support <code>LIMIT</code> / <code>OFFSET</code></li><li>Support queries with value filters</li><li>Support queries with time filters</li></ul><h4 id="_2-queries-with-in-select-clauses" tabindex="-1"><a class="header-anchor" href="#_2-queries-with-in-select-clauses"><span>2. Queries with * in SELECT Clauses</span></a></h4><p>Assume that there are 2 time series (<code>root.sg.d1.s1</code> and <code>root.sg.d1.s2</code>) in the system.</p><ul><li><strong><code>SELECT example(*) from root.sg.d1</code></strong></li></ul><p>Then the result set will include the results of <code>example (root.sg.d1.s1)</code> and <code>example (root.sg.d1.s2)</code>.</p><ul><li><strong><code>SELECT example(s1, *) from root.sg.d1</code></strong></li></ul><p>Then the result set will include the results of <code>example(root.sg.d1.s1, root.sg.d1.s1)</code> and <code>example(root.sg.d1.s1, root.sg.d1.s2)</code>.</p><ul><li><strong><code>SELECT example(*, *) from root.sg.d1</code></strong></li></ul><p>Then the result set will include the results of <code>example(root.sg.d1.s1, root.sg.d1.s1)</code>, <code>example(root.sg.d1.s2, root.sg.d1.s1)</code>, <code>example(root.sg.d1.s1, root.sg.d1.s2)</code> and <code>example(root.sg.d1.s2, root.sg.d1.s2)</code>.</p><h4 id="_3-queries-with-key-value-attributes-in-udf-parameters" tabindex="-1"><a class="header-anchor" href="#_3-queries-with-key-value-attributes-in-udf-parameters"><span>3. Queries with Key-value Attributes in UDF Parameters</span></a></h4><p>You can pass any number of key-value pair parameters to the UDF when constructing a UDF query. The key and value in the key-value pair need to be enclosed in single or double quotes. Note that key-value pair parameters can only be passed in after all time series have been passed in. Here is a set of examples:</p><p>Example:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> example<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;key1&#39;</span><span class="token operator">=</span><span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;key2&#39;</span><span class="token operator">=</span><span class="token string">&#39;value2&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> example<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">,</span> <span class="token string">&#39;key3&#39;</span><span class="token operator">=</span><span class="token string">&#39;value3&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">SELECT</span> example<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> <span class="token string">&#39;key1&#39;</span><span class="token operator">=</span><span class="token string">&#39;value1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;key2&#39;</span><span class="token operator">=</span><span class="token string">&#39;value2&#39;</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-nested-queries" tabindex="-1"><a class="header-anchor" href="#_4-nested-queries"><span>4. Nested Queries</span></a></h4><p>Example:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SELECT</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> example<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">SELECT</span> <span class="token operator">*</span><span class="token punctuation">,</span> example<span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1 <span class="token keyword">DISABLE</span> ALIGN<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">SELECT</span> s1 <span class="token operator">*</span> example<span class="token punctuation">(</span><span class="token operator">*</span> <span class="token operator">/</span> s1 <span class="token operator">+</span> s2<span class="token punctuation">)</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">SELECT</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> s1 <span class="token operator">+</span> example<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span><span class="token punctuation">,</span> s1 <span class="token operator">-</span> example<span class="token punctuation">(</span>s1 <span class="token operator">+</span> example<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token operator">/</span> s2<span class="token punctuation">)</span> <span class="token keyword">FROM</span> root<span class="token punctuation">.</span>sg<span class="token punctuation">.</span>d1<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-udf-development" tabindex="-1"><a class="header-anchor" href="#_2-udf-development"><span>2. UDF Development</span></a></h2>`,25)),a("p",null,[e[1]||(e[1]=s("You can refer to UDF development：")),o(n,{to:"/UserGuide/V1.3.0-2/Reference/UDF-development.html"},{default:i(()=>e[0]||(e[0]=[s("Development Guide")])),_:1})]),e[9]||(e[9]=t(`<h2 id="_3-udf-management" tabindex="-1"><a class="header-anchor" href="#_3-udf-management"><span>3. UDF management</span></a></h2><h3 id="_3-1-udf-registration" tabindex="-1"><a class="header-anchor" href="#_3-1-udf-registration"><span>3.1 UDF Registration</span></a></h3><p>The process of registering a UDF in IoTDB is as follows:</p><ol><li>Implement a complete UDF class, assuming the full class name of this class is <code>org.apache.iotdb.udf.ExampleUDTF</code>.</li><li>Convert the project into a JAR package. If using Maven to manage the project, you can refer to the <a href="https://github.com/apache/iotdb/tree/master/example/udf" target="_blank" rel="noopener noreferrer">Maven project example</a> above.</li><li>Make preparations for registration according to the registration mode. For details, see the following example.</li><li>You can use following SQL to register UDF.</li></ol><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> <span class="token operator">&lt;</span>UDF<span class="token operator">-</span>NAME<span class="token operator">&gt;</span> <span class="token keyword">AS</span> <span class="token operator">&lt;</span>UDF<span class="token operator">-</span>CLASS<span class="token operator">-</span><span class="token keyword">FULL</span><span class="token operator">-</span>PATHNAME<span class="token operator">&gt;</span> <span class="token punctuation">(</span><span class="token keyword">USING</span> URI URI<span class="token operator">-</span>STRING<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="example-register-udf-named-example-you-can-choose-either-of-the-following-two-registration-methods" tabindex="-1"><a class="header-anchor" href="#example-register-udf-named-example-you-can-choose-either-of-the-following-two-registration-methods"><span>Example: register UDF named <code>example</code>, you can choose either of the following two registration methods</span></a></h4><h4 id="method-1-manually-place-the-jar-package" tabindex="-1"><a class="header-anchor" href="#method-1-manually-place-the-jar-package"><span>Method 1: Manually place the jar package</span></a></h4><p>Prepare:<br> When registering using this method, it is necessary to place the JAR package in advance in the <code>ext/udf</code> directory of all nodes in the cluster (which can be configured).</p><p>Registration statement:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> example <span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.udf.UDTFExample&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h4 id="method-2-cluster-automatically-installs-jar-packages-through-uri" tabindex="-1"><a class="header-anchor" href="#method-2-cluster-automatically-installs-jar-packages-through-uri"><span>Method 2: Cluster automatically installs jar packages through URI</span></a></h4><p>Prepare:<br> When registering using this method, it is necessary to upload the JAR package to the URI server in advance and ensure that the IoTDB instance executing the registration statement can access the URI server.</p><p>Registration statement:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">FUNCTION</span> example <span class="token keyword">AS</span> <span class="token string">&#39;org.apache.iotdb.udf.UDTFExample&#39;</span> <span class="token keyword">USING</span> URI <span class="token string">&#39;http://jar/example.jar&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>IoTDB will download JAR packages and synchronize them to the entire cluster.</p><h4 id="note" tabindex="-1"><a class="header-anchor" href="#note"><span>Note</span></a></h4><ol><li><p>Since UDF instances are dynamically loaded through reflection technology, you do not need to restart the server during the UDF registration process.</p></li><li><p>UDF function names are not case-sensitive.</p></li><li><p>Please ensure that the function name given to the UDF is different from all built-in function names. A UDF with the same name as a built-in function cannot be registered.</p></li><li><p>We recommend that you do not use classes that have the same class name but different function logic in different JAR packages. For example, in <code>UDF(UDAF/UDTF): udf1, udf2</code>, the JAR package of udf1 is <code>udf1.jar</code> and the JAR package of udf2 is <code>udf2.jar</code>. Assume that both JAR packages contain the <code>org.apache.iotdb.udf.ExampleUDTF</code> class. If you use two UDFs in the same SQL statement at the same time, the system will randomly load either of them and may cause inconsistency in UDF execution behavior.</p></li></ol><h3 id="_3-2-udf-deregistration" tabindex="-1"><a class="header-anchor" href="#_3-2-udf-deregistration"><span>3.2 UDF Deregistration</span></a></h3><p>The SQL syntax is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">DROP</span> <span class="token keyword">FUNCTION</span> <span class="token operator">&lt;</span>UDF<span class="token operator">-</span>NAME<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Example: Uninstall the UDF from the above example:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">DROP</span> <span class="token keyword">FUNCTION</span> example</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-3-show-all-registered-udfs" tabindex="-1"><a class="header-anchor" href="#_3-3-show-all-registered-udfs"><span>3.3 Show All Registered UDFs</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">SHOW</span> FUNCTIONS</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="_3-4-udf-configuration" tabindex="-1"><a class="header-anchor" href="#_3-4-udf-configuration"><span>3.4 UDF configuration</span></a></h3><ul><li>UDF configuration allows configuring the storage directory of UDF in <code>iotdb-common.properties</code></li></ul><div class="language-Properties line-numbers-mode" data-highlighter="prismjs" data-ext="Properties" data-title="Properties"><pre><code><span class="line"># UDF lib dir</span>
<span class="line"></span>
<span class="line">udf_lib_dir=ext/udf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>-When using custom functions, there is a message indicating insufficient memory. Change the following configuration parameters in <code>iotdb-common.properties</code> and restart the service.</li></ul><div class="language-Properties line-numbers-mode" data-highlighter="prismjs" data-ext="Properties" data-title="Properties"><pre><code><span class="line"></span>
<span class="line"># Used to estimate the memory usage of text fields in a UDF query.</span>
<span class="line"># It is recommended to set this value to be slightly larger than the average length of all text</span>
<span class="line"># effectiveMode: restart</span>
<span class="line"># Datatype: int</span>
<span class="line">udf_initial_byte_array_length_for_memory_control=48</span>
<span class="line"></span>
<span class="line"># How much memory may be used in ONE UDF query (in MB).</span>
<span class="line"># The upper limit is 20% of allocated memory for read.</span>
<span class="line"># effectiveMode: restart</span>
<span class="line"># Datatype: float</span>
<span class="line">udf_memory_budget_in_mb=30.0</span>
<span class="line"></span>
<span class="line"># UDF memory allocation ratio.</span>
<span class="line"># The parameter form is a:b:c, where a, b, and c are integers.</span>
<span class="line"># effectiveMode: restart</span>
<span class="line">udf_reader_transformer_collector_memory_proportion=1:1:1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-udf-user-permissions" tabindex="-1"><a class="header-anchor" href="#_3-5-udf-user-permissions"><span>3.5 UDF User Permissions</span></a></h3><p>When users use UDF, they will be involved in the <code>USE_UDF</code> permission, and only users with this permission are allowed to perform UDF registration, uninstallation, and query operations.</p>`,31)),a("p",null,[e[3]||(e[3]=s("For more user permissions related content, please refer to ")),o(n,{to:"/UserGuide/V1.3.0-2/User-Manual/Authority-Management.html"},{default:i(()=>e[2]||(e[2]=[s("Account Management Statements")])),_:1}),e[4]||(e[4]=s("."))]),e[10]||(e[10]=a("h2",{id:"_4-udf-libraries",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#_4-udf-libraries"},[a("span",null,"4. UDF Libraries")])],-1)),e[11]||(e[11]=a("p",null,"Based on the ability of user-defined functions, IoTDB provides a series of functions for temporal data processing, including data quality, data profiling, anomaly detection, frequency domain analysis, data matching, data repairing, sequence discovery, machine learning, etc., which can meet the needs of industrial fields for temporal data processing.",-1)),a("p",null,[e[6]||(e[6]=s("You can refer to the ")),o(n,{to:"/UserGuide/V1.3.0-2/Reference/UDF-Libraries.html"},{default:i(()=>e[5]||(e[5]=[s("UDF Libraries")])),_:1}),e[7]||(e[7]=s("document to find the installation steps and registration statements for each function, to ensure that all required functions are registered correctly."))]),e[12]||(e[12]=t('<h2 id="_5-common-problem" tabindex="-1"><a class="header-anchor" href="#_5-common-problem"><span>5. Common problem:</span></a></h2><p>Q1: How to modify the registered UDF?</p><p>A1: Assume that the name of the UDF is <code>example</code> and the full class name is <code>org.apache.iotdb.udf.ExampleUDTF</code>, which is introduced by <code>example.jar</code>.</p><ol><li>Unload the registered function by executing <code>DROP FUNCTION example</code>.</li><li>Delete <code>example.jar</code> under <code>iotdb-server-1.0.0-all-bin/ext/udf</code>.</li><li>Modify the logic in <code>org.apache.iotdb.udf.ExampleUDTF</code> and repackage it. The name of the JAR package can still be <code>example.jar</code>.</li><li>Upload the new JAR package to <code>iotdb-server-1.0.0-all-bin/ext/udf</code>.</li><li>Load the new UDF by executing <code>CREATE FUNCTION example AS &quot;org.apache.iotdb.udf.ExampleUDTF&quot;</code>.</li></ol>',4))])}const g=r(c,[["render",u],["__file","User-defined-function.html.vue"]]),f=JSON.parse('{"path":"/UserGuide/V1.3.0-2/User-Manual/User-defined-function.html","title":"USER-DEFINED FUNCTION (UDF)","lang":"en-US","frontmatter":{"description":"USER-DEFINED FUNCTION (UDF) 1. UDF Introduction UDF (User Defined Function) refers to user-defined functions. IoTDB provides a variety of built-in time series processing functio...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/User-Manual/User-defined-function.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.3.0-2/User-Manual/User-defined-function.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"USER-DEFINED FUNCTION (UDF)"}],["meta",{"property":"og:description","content":"USER-DEFINED FUNCTION (UDF) 1. UDF Introduction UDF (User Defined Function) refers to user-defined functions. IoTDB provides a variety of built-in time series processing functio..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"USER-DEFINED FUNCTION (UDF)\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"1. UDF Introduction","slug":"_1-udf-introduction","link":"#_1-udf-introduction","children":[{"level":3,"title":"1.1 UDF usage","slug":"_1-1-udf-usage","link":"#_1-1-udf-usage","children":[]}]},{"level":2,"title":"2. UDF Development","slug":"_2-udf-development","link":"#_2-udf-development","children":[]},{"level":2,"title":"3. UDF management","slug":"_3-udf-management","link":"#_3-udf-management","children":[{"level":3,"title":"3.1 UDF Registration","slug":"_3-1-udf-registration","link":"#_3-1-udf-registration","children":[]},{"level":3,"title":"3.2 UDF Deregistration","slug":"_3-2-udf-deregistration","link":"#_3-2-udf-deregistration","children":[]},{"level":3,"title":"3.3 Show All Registered UDFs","slug":"_3-3-show-all-registered-udfs","link":"#_3-3-show-all-registered-udfs","children":[]},{"level":3,"title":"3.4 UDF configuration","slug":"_3-4-udf-configuration","link":"#_3-4-udf-configuration","children":[]},{"level":3,"title":"3.5 UDF User Permissions","slug":"_3-5-udf-user-permissions","link":"#_3-5-udf-user-permissions","children":[]}]},{"level":2,"title":"4. UDF Libraries","slug":"_4-udf-libraries","link":"#_4-udf-libraries","children":[]},{"level":2,"title":"5. Common problem:","slug":"_5-common-problem","link":"#_5-common-problem","children":[]}],"git":{"createdTime":1731049685000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.35,"words":1304},"filePathRelative":"UserGuide/V1.3.0-2/User-Manual/User-defined-function.md","localizedDate":"November 8, 2024","autoDesc":true}');export{g as comp,f as data};