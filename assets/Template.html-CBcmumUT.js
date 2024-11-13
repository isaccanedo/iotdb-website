import{_ as s,c as a,b as n,o as t}from"./app-BHE9oQwv.js";const l={};function p(o,e){return t(),a("div",null,e[0]||(e[0]=[n(`<h1 id="schema-template" tabindex="-1"><a class="header-anchor" href="#schema-template"><span>Schema Template</span></a></h1><p>IoTDB supports the schema template function, enabling different entities of the same type to share metadata, reduce the memory usage of metadata, and simplify the management of numerous entities and measurements.</p><p>Note: The <code>schema</code> keyword in the following statements can be omitted.</p><h2 id="create-schema-template" tabindex="-1"><a class="header-anchor" href="#create-schema-template"><span>Create Schema Template</span></a></h2><p>The SQL syntax for creating a schema template is as follows:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">CREATE</span> <span class="token keyword">SCHEMA</span>? TEMPLATE <span class="token operator">&lt;</span>templateName<span class="token operator">&gt;</span> ALIGNED? <span class="token string">&#39;(&#39;</span> <span class="token operator">&lt;</span>measurementId<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>attributeClauses<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;,&#39;</span> <span class="token operator">&lt;</span>measurementId<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>attributeClauses<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token operator">+</span> <span class="token string">&#39;)&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Example 1:</strong> Create a template containing two non-aligned timeseires</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> create schema template t1 <span class="token punctuation">(</span>temperature FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>RLE, status BOOLEAN <span class="token assign-left variable">encoding</span><span class="token operator">=</span>PLAIN <span class="token assign-left variable">compression</span><span class="token operator">=</span>SNAPPY<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Example 2:</strong> Create a template containing a group of aligned timeseires</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> create schema template t2 aligned <span class="token punctuation">(</span>lat FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>Gorilla, lon FLOAT <span class="token assign-left variable">encoding</span><span class="token operator">=</span>Gorilla<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The<code> lat</code> and <code>lon</code> measurements are aligned.</p><h2 id="set-schema-template" tabindex="-1"><a class="header-anchor" href="#set-schema-template"><span>Set Schema Template</span></a></h2><p>The SQL Statement for setting schema template is as follow:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">set</span> schema template t1 to root.sg1.d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>After setting the schema template, you can insert data into the timeseries. For example, suppose there&#39;s a storage group root.sg1 and t1 has been set to root.sg1.d1, then timeseries like root.sg1.d1.temperature and root.sg1.d1.status are available and data points can be inserted.</p><p><strong>Please notice that, we strongly recommend NOT setting templates on the nodes above the storage group to accommodate future updates and collaboration between modules.</strong></p><p><strong>Attention</strong>: Before inserting data, timeseries defined by the schema template will not be created. You can use the following SQL statement to create the timeseries before inserting data:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> create timeseries of schema template on root.sg1.d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Example:</strong> Execute the following statement</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">set</span> schema template t1 to root.sg1.d1</span>
<span class="line"><span class="token builtin class-name">set</span> schema template t2 to root.sg1.d2</span>
<span class="line">create timeseries of schema template on root.sg1.d1</span>
<span class="line">create timeseries of schema template on root.sg1.d2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show the time series:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">show</span> timeseries root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">+-----------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+</span>
<span class="line"><span class="token operator">|</span>             timeseries<span class="token operator">|</span><span class="token builtin class-name">alias</span><span class="token operator">|</span>storage group<span class="token operator">|</span>dataType<span class="token operator">|</span>encoding<span class="token operator">|</span>compression<span class="token operator">|</span>tags<span class="token operator">|</span>attributes<span class="token operator">|</span>deadband<span class="token operator">|</span>deadband parameters<span class="token operator">|</span></span>
<span class="line">+-----------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+</span>
<span class="line"><span class="token operator">|</span>root.sg1.d1.temperature<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span>   FLOAT<span class="token operator">|</span>     RLE<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span>     root.sg1.d1.status<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span> BOOLEAN<span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span>        root.sg1.d2.lon<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span>   FLOAT<span class="token operator">|</span> GORILLA<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span>        root.sg1.d2.lat<span class="token operator">|</span> null<span class="token operator">|</span>     root.sg1<span class="token operator">|</span>   FLOAT<span class="token operator">|</span> GORILLA<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span>null<span class="token operator">|</span>      null<span class="token operator">|</span>    null<span class="token operator">|</span>               null<span class="token operator">|</span></span>
<span class="line">+-----------------------+-----+-------------+--------+--------+-----------+----+----------+--------+-------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Show the devices:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">show</span> devices root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">+---------------+---------+</span>
<span class="line"><span class="token operator">|</span>        devices<span class="token operator">|</span>isAligned<span class="token operator">|</span></span>
<span class="line">+---------------+---------+</span>
<span class="line"><span class="token operator">|</span>    root.sg1.d1<span class="token operator">|</span>    <span class="token boolean">false</span><span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span>    root.sg1.d2<span class="token operator">|</span>     <span class="token boolean">true</span><span class="token operator">|</span></span>
<span class="line">+---------------+---------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="show-schema-template" tabindex="-1"><a class="header-anchor" href="#show-schema-template"><span>Show Schema Template</span></a></h2><ul><li>Show all schema templates</li></ul><p>The SQL statement looks like this:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> show schema templates</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">+-------------+</span>
<span class="line"><span class="token operator">|</span>template name<span class="token operator">|</span></span>
<span class="line">+-------------+</span>
<span class="line"><span class="token operator">|</span>           t2<span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span>           t1<span class="token operator">|</span></span>
<span class="line">+-------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show nodes under in schema template</li></ul><p>The SQL statement looks like this:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> show nodes <span class="token keyword">in</span> schema template t1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">+-----------+--------+--------+-----------+</span>
<span class="line"><span class="token operator">|</span>child nodes<span class="token operator">|</span>dataType<span class="token operator">|</span>encoding<span class="token operator">|</span>compression<span class="token operator">|</span></span>
<span class="line">+-----------+--------+--------+-----------+</span>
<span class="line"><span class="token operator">|</span>temperature<span class="token operator">|</span>   FLOAT<span class="token operator">|</span>     RLE<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span></span>
<span class="line"><span class="token operator">|</span>     status<span class="token operator">|</span> BOOLEAN<span class="token operator">|</span>   PLAIN<span class="token operator">|</span>     SNAPPY<span class="token operator">|</span></span>
<span class="line">+-----------+--------+--------+-----------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show the path prefix where a schema template is set</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> show paths <span class="token builtin class-name">set</span> schema template t1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">+-----------+</span>
<span class="line"><span class="token operator">|</span>child paths<span class="token operator">|</span></span>
<span class="line">+-----------+</span>
<span class="line"><span class="token operator">|</span>root.sg1.d1<span class="token operator">|</span></span>
<span class="line">+-----------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show the path prefix where a schema template is used (i.e. the time series has been created)</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> show paths using schema template t1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The execution result is as follows:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">+-----------+</span>
<span class="line"><span class="token operator">|</span>child paths<span class="token operator">|</span></span>
<span class="line">+-----------+</span>
<span class="line"><span class="token operator">|</span>root.sg1.d1<span class="token operator">|</span></span>
<span class="line">+-----------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="deactivate-schematemplate" tabindex="-1"><a class="header-anchor" href="#deactivate-schematemplate"><span>Deactivate SchemaTemplate</span></a></h2><p>If any data points had been inserted into the timeseries concatenated by the path of the node and measurements inside activated template, or <code>create timeseries of schema template</code> had been issued, you should deactivate template on nodes before unset tempalte upon them.</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> deactivate schema template t1 from root.sg1.d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>This statement will detele corresponding data points as well.</p><h2 id="unset-schema-template" tabindex="-1"><a class="header-anchor" href="#unset-schema-template"><span>Unset Schema Template</span></a></h2><p>The SQL Statement for unsetting schema template is as follow:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token builtin class-name">unset</span> schema template t1 from root.sg1.d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="drop-schema-template" tabindex="-1"><a class="header-anchor" href="#drop-schema-template"><span>Drop Schema Template</span></a></h2><p>The SQL Statement for dropping schema template is as follow:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> drop schema template t1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Attention</strong>: Dropping an already set template is not supported.</p>`,56)]))}const i=s(l,[["render",p],["__file","Template.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V0.13.x/Operate-Metadata/Template.html","title":"Schema Template","lang":"en-US","frontmatter":{"description":"Schema Template IoTDB supports the schema template function, enabling different entities of the same type to share metadata, reduce the memory usage of metadata, and simplify th...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Operate-Metadata/Template.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Operate-Metadata/Template.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Schema Template"}],["meta",{"property":"og:description","content":"Schema Template IoTDB supports the schema template function, enabling different entities of the same type to share metadata, reduce the memory usage of metadata, and simplify th..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-15T13:16:16.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-15T13:16:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Schema Template\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-12-15T13:16:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Create Schema Template","slug":"create-schema-template","link":"#create-schema-template","children":[]},{"level":2,"title":"Set Schema Template","slug":"set-schema-template","link":"#set-schema-template","children":[]},{"level":2,"title":"Show Schema Template","slug":"show-schema-template","link":"#show-schema-template","children":[]},{"level":2,"title":"Deactivate SchemaTemplate","slug":"deactivate-schematemplate","link":"#deactivate-schematemplate","children":[]},{"level":2,"title":"Unset Schema Template","slug":"unset-schema-template","link":"#unset-schema-template","children":[]},{"level":2,"title":"Drop Schema Template","slug":"drop-schema-template","link":"#drop-schema-template","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1702646176000,"contributors":[{"name":"Christofer Dutz","email":"christofer.dutz@c-ware.de","commits":1},{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.38,"words":714},"filePathRelative":"UserGuide/V0.13.x/Operate-Metadata/Template.md","localizedDate":"July 10, 2023","autoDesc":true}');export{i as comp,c as data};