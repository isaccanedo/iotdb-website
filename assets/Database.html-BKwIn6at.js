import{_ as i,c as d,b as n,d as r,e as a,a as t,w as l,r as c,o}from"./app-BHE9oQwv.js";const p={};function b(m,e){const s=c("RouteLink");return o(),d("div",null,[e[5]||(e[5]=n(`<h1 id="database-management" tabindex="-1"><a class="header-anchor" href="#database-management"><span>Database Management</span></a></h1><h2 id="create-database" tabindex="-1"><a class="header-anchor" href="#create-database"><span>Create Database</span></a></h2><p>According to the storage model we can set up the corresponding database. Two SQL statements are supported for creating databases, as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; create database root.ln</span>
<span class="line">IoTDB &gt; create database root.sgcc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>We can thus create two databases using the above two SQL statements.</p><p>It is worth noting that when the path itself or the parent/child layer of the path is already created as database, the path is then not allowed to be created as database. For example, it is not feasible to create <code>root.ln.wf01</code> as database when two databases <code>root.ln</code> and <code>root.sgcc</code> exist. The system gives the corresponding error prompt as shown below:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; CREATE DATABASE root.ln.wf01</span>
<span class="line">Msg: 300: root.ln has already been created as database.</span>
<span class="line">IoTDB&gt; create database root.ln.wf01</span>
<span class="line">Msg: 300: root.ln has already been created as database.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The LayerName of database can only be characters, numbers, underscores. If you want to set it to pure numbers or contain other characters, you need to enclose the database name with backticks (\`\`).</p><p>Besides, if deploy on Windows system, the LayerName is case-insensitive, which means it&#39;s not allowed to create databases <code>root.ln</code> and <code>root.LN</code> at the same time.</p><h2 id="show-databases" tabindex="-1"><a class="header-anchor" href="#show-databases"><span>Show Databases</span></a></h2>`,10)),r("p",null,[e[2]||(e[2]=a("After creating the database, we can use the ")),t(s,{to:"/UserGuide/V1.0.x/Reference/SQL-Reference.html"},{default:l(()=>e[0]||(e[0]=[a("SHOW DATABASES")])),_:1}),e[3]||(e[3]=a(" statement and ")),t(s,{to:"/UserGuide/V1.0.x/Reference/SQL-Reference.html"},{default:l(()=>e[1]||(e[1]=[a("SHOW DATABASES <PathPattern>")])),_:1}),e[4]||(e[4]=a(" to view the databases. The SQL statements are as follows:"))]),e[6]||(e[6]=n(`<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SHOW DATABASES</span>
<span class="line">IoTDB&gt; SHOW DATABASES root.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------+----+-------------------------+-----------------------+-----------------------+</span>
<span class="line">|database| ttl|schema_replication_factor|data_replication_factor|time_partition_interval|</span>
<span class="line">+-------------+----+-------------------------+-----------------------+-----------------------+</span>
<span class="line">|    root.sgcc|null|                        2|                      2|                 604800|</span>
<span class="line">|      root.ln|null|                        2|                      2|                 604800|</span>
<span class="line">+-------------+----+-------------------------+-----------------------+-----------------------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.060s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="delete-database" tabindex="-1"><a class="header-anchor" href="#delete-database"><span>Delete Database</span></a></h2><p>User can use the <code>DELETE DATABASE &lt;PathPattern&gt;</code> statement to delete all databases matching the pathPattern. Please note the data in the database will also be deleted.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; DELETE DATABASE root.ln</span>
<span class="line">IoTDB &gt; DELETE DATABASE root.sgcc</span>
<span class="line">// delete all data, all timeseries and all databases</span>
<span class="line">IoTDB &gt; DELETE DATABASE root.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="count-databases" tabindex="-1"><a class="header-anchor" href="#count-databases"><span>Count Databases</span></a></h2><p>User can use the <code>COUNT DATABASE &lt;PathPattern&gt;</code> statement to count the number of databases. It is allowed to specify <code>PathPattern</code> to count the number of databases matching the <code>PathPattern</code>.</p><p>SQL statement is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; count databases</span>
<span class="line">IoTDB&gt; count databases root.*</span>
<span class="line">IoTDB&gt; count databases root.sgcc.*</span>
<span class="line">IoTDB&gt; count databases root.sgcc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The result is as follows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------+</span>
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
<span class="line">|     database|</span>
<span class="line">+-------------+</span>
<span class="line">|            3|</span>
<span class="line">+-------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.003s</span>
<span class="line"></span>
<span class="line">+-------------+</span>
<span class="line">|     database|</span>
<span class="line">+-------------+</span>
<span class="line">|            3|</span>
<span class="line">+-------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">+-------------+</span>
<span class="line">|     database|</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12))])}const v=i(p,[["render",b],["__file","Database.html.vue"]]),h=JSON.parse('{"path":"/UserGuide/V1.0.x/Operate-Metadata/Database.html","title":"Database Management","lang":"en-US","frontmatter":{"description":"Database Management Create Database According to the storage model we can set up the corresponding database. Two SQL statements are supported for creating databases, as follows:...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Operate-Metadata/Database.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Operate-Metadata/Database.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Database Management"}],["meta",{"property":"og:description","content":"Database Management Create Database According to the storage model we can set up the corresponding database. Two SQL statements are supported for creating databases, as follows:..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Database Management\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Create Database","slug":"create-database","link":"#create-database","children":[]},{"level":2,"title":"Show Databases","slug":"show-databases","link":"#show-databases","children":[]},{"level":2,"title":"Delete Database","slug":"delete-database","link":"#delete-database","children":[]},{"level":2,"title":"Count Databases","slug":"count-databases","link":"#count-databases","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.75,"words":524},"filePathRelative":"UserGuide/V1.0.x/Operate-Metadata/Database.md","localizedDate":"July 10, 2023","autoDesc":true}');export{v as comp,h as data};
