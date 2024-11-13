import{_ as t,c as d,b as n,d as r,e as a,a as i,w as l,r as c,o as p}from"./app-BHE9oQwv.js";const o={};function v(u,e){const s=c("RouteLink");return p(),d("div",null,[e[5]||(e[5]=n(`<h1 id="元数据操作" tabindex="-1"><a class="header-anchor" href="#元数据操作"><span>元数据操作</span></a></h1><h2 id="数据库管理" tabindex="-1"><a class="header-anchor" href="#数据库管理"><span>数据库管理</span></a></h2><p>数据库（Database）可以被视为关系数据库中的Database。</p><h3 id="创建数据库" tabindex="-1"><a class="header-anchor" href="#创建数据库"><span>创建数据库</span></a></h3><p>我们可以根据存储模型建立相应的数据库。如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; CREATE DATABASE root.ln</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>需要注意的是，database 的父子节点都不能再设置 database。例如在已经有<code>root.ln</code>和<code>root.sgcc</code>这两个 database 的情况下，创建<code>root.ln.wf01</code> database 是不可行的。系统将给出相应的错误提示，如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE DATABASE root.ln.wf01</span>
<span class="line">Msg: 300: root.ln has already been created as database.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Database 节点名只支持中英文字符、数字、下划线的组合，如果想设置为纯数字或者包含其他字符，需要用反引号(\`\`)把 database 名称引起来。</p><p>还需注意，如果在 Windows 系统上部署，database 名是大小写不敏感的。例如同时创建<code>root.ln</code> 和 <code>root.LN</code> 是不被允许的。</p><h3 id="查看数据库" tabindex="-1"><a class="header-anchor" href="#查看数据库"><span>查看数据库</span></a></h3>`,11)),r("p",null,[e[2]||(e[2]=a("在 database 创建后，我们可以使用 ")),i(s,{to:"/zh/UserGuide/V1.1.x/Reference/SQL-Reference.html"},{default:l(()=>e[0]||(e[0]=[a("SHOW DATABASES")])),_:1}),e[3]||(e[3]=a(" 语句和 ")),i(s,{to:"/zh/UserGuide/V1.1.x/Reference/SQL-Reference.html"},{default:l(()=>e[1]||(e[1]=[a("SHOW DATABASES <PathPattern>")])),_:1}),e[4]||(e[4]=a(" 来查看 database，SQL 语句如下所示："))]),e[6]||(e[6]=n(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show databases</span>
<span class="line">IoTDB&gt; show databases root.*</span>
<span class="line">IoTDB&gt; show databases root.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------+----+-------------------------+-----------------------+-----------------------+</span>
<span class="line">|     database| ttl|schema_replication_factor|data_replication_factor|time_partition_interval|</span>
<span class="line">+-------------+----+-------------------------+-----------------------+-----------------------+</span>
<span class="line">|    root.sgcc|null|                        2|                      2|                 604800|</span>
<span class="line">|      root.ln|null|                        2|                      2|                 604800|</span>
<span class="line">+-------------+----+-------------------------+-----------------------+-----------------------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.060s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除数据库" tabindex="-1"><a class="header-anchor" href="#删除数据库"><span>删除数据库</span></a></h3><p>用户可以使用<code>DELETE DATABASE &lt;PathPattern&gt;</code>语句删除该路径模式匹配的所有的数据库。在删除的过程中，需要注意的是数据库的数据也会被删除。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; DELETE DATABASE root.ln</span>
<span class="line">IoTDB &gt; DELETE DATABASE root.sgcc</span>
<span class="line">// 删除所有数据，时间序列以及数据库</span>
<span class="line">IoTDB &gt; DELETE DATABASE root.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统计数据库数量" tabindex="-1"><a class="header-anchor" href="#统计数据库数量"><span>统计数据库数量</span></a></h3><p>用户可以使用<code>COUNT DATABASES &lt;PathPattern&gt;</code>语句统计数据库的数量，允许指定<code>PathPattern</code> 用来统计匹配该<code>PathPattern</code> 的数据库的数量</p><p>SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show databases</span>
<span class="line">IoTDB&gt; count databases</span>
<span class="line">IoTDB&gt; count databases root.*</span>
<span class="line">IoTDB&gt; count databases root.sgcc.*</span>
<span class="line">IoTDB&gt; count databases root.sgcc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行结果为：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------+</span>
<span class="line">|     database|</span>
<span class="line">+-------------+</span>
<span class="line">|    root.sgcc|</span>
<span class="line">| root.turbine|</span>
<span class="line">|      root.ln|</span>
<span class="line">+-------------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.003s</span>
<span class="line"></span>
<span class="line">+-------------+</span>
<span class="line">|     Database|</span>
<span class="line">+-------------+</span>
<span class="line">|            3|</span>
<span class="line">+-------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.003s</span>
<span class="line"></span>
<span class="line">+-------------+</span>
<span class="line">|     Database|</span>
<span class="line">+-------------+</span>
<span class="line">|            3|</span>
<span class="line">+-------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">+-------------+</span>
<span class="line">|     Database|</span>
<span class="line">+-------------+</span>
<span class="line">|            0|</span>
<span class="line">+-------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">+-------------+</span>
<span class="line">|     database|</span>
<span class="line">+-------------+</span>
<span class="line">|            1|</span>
<span class="line">+-------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12))])}const m=t(o,[["render",v],["__file","Database.html.vue"]]),h=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Operate-Metadata/Database.html","title":"元数据操作","lang":"zh-CN","frontmatter":{"description":"元数据操作 数据库管理 数据库（Database）可以被视为关系数据库中的Database。 创建数据库 我们可以根据存储模型建立相应的数据库。如下所示： 需要注意的是，database 的父子节点都不能再设置 database。例如在已经有root.ln和root.sgcc这两个 database 的情况下，创建root.ln.wf01 databa...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Operate-Metadata/Database.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operate-Metadata/Database.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"元数据操作"}],["meta",{"property":"og:description","content":"元数据操作 数据库管理 数据库（Database）可以被视为关系数据库中的Database。 创建数据库 我们可以根据存储模型建立相应的数据库。如下所示： 需要注意的是，database 的父子节点都不能再设置 database。例如在已经有root.ln和root.sgcc这两个 database 的情况下，创建root.ln.wf01 databa..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"元数据操作\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据库管理","slug":"数据库管理","link":"#数据库管理","children":[{"level":3,"title":"创建数据库","slug":"创建数据库","link":"#创建数据库","children":[]},{"level":3,"title":"查看数据库","slug":"查看数据库","link":"#查看数据库","children":[]},{"level":3,"title":"删除数据库","slug":"删除数据库","link":"#删除数据库","children":[]},{"level":3,"title":"统计数据库数量","slug":"统计数据库数量","link":"#统计数据库数量","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.06,"words":618},"filePathRelative":"zh/UserGuide/V1.1.x/Operate-Metadata/Database.md","localizedDate":"2023年7月10日","autoDesc":true}');export{m as comp,h as data};
