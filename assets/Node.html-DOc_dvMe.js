import{_ as n,c as e,b as a,o as l}from"./app-BHE9oQwv.js";const i={};function d(t,s){return l(),e("div",null,s[0]||(s[0]=[a(`<h2 id="节点管理" tabindex="-1"><a class="header-anchor" href="#节点管理"><span>节点管理</span></a></h2><h3 id="查看子路径" tabindex="-1"><a class="header-anchor" href="#查看子路径"><span>查看子路径</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CHILD PATHS pathPattern</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以查看此路径模式所匹配的所有路径的下一层的所有路径和它对应的节点类型，即pathPattern.*所匹配的路径及其节点类型。</p><p>节点类型：ROOT -&gt; SG INTERNAL -&gt; DATABASE -&gt; INTERNAL -&gt; DEVICE -&gt; TIMESERIES</p><p>示例：</p><ul><li>查询 root.ln 的下一层：show child paths root.ln</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+------------+----------+</span>
<span class="line">| child paths|node types|</span>
<span class="line">+------------+----------+</span>
<span class="line">|root.ln.wf01|  INTERNAL|</span>
<span class="line">|root.ln.wf02|  INTERNAL|</span>
<span class="line">+------------+----------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询形如 root.xx.xx.xx 的路径：show child paths root.*.*</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+---------------+</span>
<span class="line">|    child paths|</span>
<span class="line">+---------------+</span>
<span class="line">|root.ln.wf01.s1|</span>
<span class="line">|root.ln.wf02.s2|</span>
<span class="line">+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看子节点" tabindex="-1"><a class="header-anchor" href="#查看子节点"><span>查看子节点</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CHILD NODES pathPattern</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>可以查看此路径模式所匹配的节点的下一层的所有节点。</p><p>示例：</p><ul><li>查询 root 的下一层：show child nodes root</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+------------+</span>
<span class="line">| child nodes|</span>
<span class="line">+------------+</span>
<span class="line">|          ln|</span>
<span class="line">+------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询 root.ln 的下一层 ：show child nodes root.ln</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+------------+</span>
<span class="line">| child nodes|</span>
<span class="line">+------------+</span>
<span class="line">|        wf01|</span>
<span class="line">|        wf02|</span>
<span class="line">+------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统计节点数" tabindex="-1"><a class="header-anchor" href="#统计节点数"><span>统计节点数</span></a></h3><p>IoTDB 支持使用<code>COUNT NODES &lt;PathPattern&gt; LEVEL=&lt;INTEGER&gt;</code>来统计当前 Metadata<br> 树下满足某路径模式的路径中指定层级的节点个数。这条语句可以用来统计带有特定采样点的设备数。例如：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB &gt; COUNT NODES root.** LEVEL=2</span>
<span class="line">IoTDB &gt; COUNT NODES root.ln.** LEVEL=2</span>
<span class="line">IoTDB &gt; COUNT NODES root.ln.wf01.* LEVEL=3</span>
<span class="line">IoTDB &gt; COUNT NODES root.**.temperature LEVEL=3</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对于上面提到的例子和 Metadata Tree，你可以获得如下结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+------------+</span>
<span class="line">|count(nodes)|</span>
<span class="line">+------------+</span>
<span class="line">|           4|</span>
<span class="line">+------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.003s</span>
<span class="line"></span>
<span class="line">+------------+</span>
<span class="line">|count(nodes)|</span>
<span class="line">+------------+</span>
<span class="line">|           2|</span>
<span class="line">+------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">+------------+</span>
<span class="line">|count(nodes)|</span>
<span class="line">+------------+</span>
<span class="line">|           1|</span>
<span class="line">+------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">+------------+</span>
<span class="line">|count(nodes)|</span>
<span class="line">+------------+</span>
<span class="line">|           2|</span>
<span class="line">+------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：时间序列的路径只是过滤条件，与 level 的定义无关。</p></blockquote><h3 id="查看设备" tabindex="-1"><a class="header-anchor" href="#查看设备"><span>查看设备</span></a></h3><ul><li>SHOW DEVICES pathPattern? (WITH DATABASE)? limitClause? #showDevices</li></ul><p>与 <code>Show Timeseries</code> 相似，IoTDB 目前也支持两种方式查看设备。</p><ul><li><code>SHOW DEVICES</code> 语句显示当前所有的设备信息，等价于 <code>SHOW DEVICES root.**</code>。</li><li><code>SHOW DEVICES &lt;PathPattern&gt;</code> 语句规定了 <code>PathPattern</code>，返回给定的路径模式所匹配的设备信息。</li></ul><p>SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show devices</span>
<span class="line">IoTDB&gt; show devices root.ln.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以获得如下数据：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------------+---------+</span>
<span class="line">|            devices|isAligned|</span>
<span class="line">+-------------------+---------+</span>
<span class="line">|  root.ln.wf01.wt01|    false|</span>
<span class="line">|  root.ln.wf02.wt02|    false|</span>
<span class="line">|root.sgcc.wf03.wt01|    false|</span>
<span class="line">|    root.turbine.d1|    false|</span>
<span class="line">+-------------------+---------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.002s</span>
<span class="line"></span>
<span class="line">+-----------------+---------+</span>
<span class="line">|          devices|isAligned|</span>
<span class="line">+-----------------+---------+</span>
<span class="line">|root.ln.wf01.wt01|    false|</span>
<span class="line">|root.ln.wf02.wt02|    false|</span>
<span class="line">+-----------------+---------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.001s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中，<code>isAligned</code>表示该设备下的时间序列是否对齐。</p><p>查看设备及其 database 信息，可以使用 <code>SHOW DEVICES WITH DATABASE</code> 语句。</p><ul><li><code>SHOW DEVICES WITH DATABASE</code> 语句显示当前所有的设备信息和其所在的 database，等价于 <code>SHOW DEVICES root.**</code>。</li><li><code>SHOW DEVICES &lt;PathPattern&gt; WITH DATABASE</code> 语句规定了 <code>PathPattern</code>，返回给定的路径模式所匹配的设备信息和其所在的 database。</li></ul><p>SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show devices with database</span>
<span class="line">IoTDB&gt; show devices root.ln.** with database</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以获得如下数据：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------------+-------------+---------+</span>
<span class="line">|            devices|     database|isAligned|</span>
<span class="line">+-------------------+-------------+---------+</span>
<span class="line">|  root.ln.wf01.wt01|      root.ln|    false|</span>
<span class="line">|  root.ln.wf02.wt02|      root.ln|    false|</span>
<span class="line">|root.sgcc.wf03.wt01|    root.sgcc|    false|</span>
<span class="line">|    root.turbine.d1| root.turbine|    false|</span>
<span class="line">+-------------------+-------------+---------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.003s</span>
<span class="line"></span>
<span class="line">+-----------------+-------------+---------+</span>
<span class="line">|          devices|     database|isAligned|</span>
<span class="line">+-----------------+-------------+---------+</span>
<span class="line">|root.ln.wf01.wt01|      root.ln|    false|</span>
<span class="line">|root.ln.wf02.wt02|      root.ln|    false|</span>
<span class="line">+-----------------+-------------+---------+</span>
<span class="line">Total line number = 2</span>
<span class="line">It costs 0.001s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="统计设备数量" tabindex="-1"><a class="header-anchor" href="#统计设备数量"><span>统计设备数量</span></a></h3><ul><li>COUNT DEVICES &lt;PathPattern&gt;</li></ul><p>上述语句用于统计设备的数量，同时允许指定<code>PathPattern</code> 用于统计匹配该<code>PathPattern</code> 的设备数量</p><p>SQL 语句如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; show devices</span>
<span class="line">IoTDB&gt; count devices</span>
<span class="line">IoTDB&gt; count devices root.ln.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以获得如下数据：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------------+---------+</span>
<span class="line">|            devices|isAligned|</span>
<span class="line">+-------------------+---------+</span>
<span class="line">|root.sgcc.wf03.wt03|    false|</span>
<span class="line">|    root.turbine.d1|    false|</span>
<span class="line">|  root.ln.wf02.wt02|    false|</span>
<span class="line">|  root.ln.wf01.wt01|    false|</span>
<span class="line">+-------------------+---------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.024s</span>
<span class="line"></span>
<span class="line">+--------------+</span>
<span class="line">|count(devices)|</span>
<span class="line">+--------------+</span>
<span class="line">|             4|</span>
<span class="line">+--------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.004s</span>
<span class="line"></span>
<span class="line">+--------------+</span>
<span class="line">|count(devices)|</span>
<span class="line">+--------------+</span>
<span class="line">|             2|</span>
<span class="line">+--------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.004s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46)]))}const r=n(i,[["render",d],["__file","Node.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Operate-Metadata/Node.html","title":"","lang":"zh-CN","frontmatter":{"description":"节点管理 查看子路径 可以查看此路径模式所匹配的所有路径的下一层的所有路径和它对应的节点类型，即pathPattern.*所匹配的路径及其节点类型。 节点类型：ROOT -> SG INTERNAL -> DATABASE -> INTERNAL -> DEVICE -> TIMESERIES 示例： 查询 root.ln 的下一层：show chil...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Operate-Metadata/Node.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operate-Metadata/Node.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"节点管理 查看子路径 可以查看此路径模式所匹配的所有路径的下一层的所有路径和它对应的节点类型，即pathPattern.*所匹配的路径及其节点类型。 节点类型：ROOT -> SG INTERNAL -> DATABASE -> INTERNAL -> DEVICE -> TIMESERIES 示例： 查询 root.ln 的下一层：show chil..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"节点管理","slug":"节点管理","link":"#节点管理","children":[{"level":3,"title":"查看子路径","slug":"查看子路径","link":"#查看子路径","children":[]},{"level":3,"title":"查看子节点","slug":"查看子节点","link":"#查看子节点","children":[]},{"level":3,"title":"统计节点数","slug":"统计节点数","link":"#统计节点数","children":[]},{"level":3,"title":"查看设备","slug":"查看设备","link":"#查看设备","children":[]},{"level":3,"title":"统计设备数量","slug":"统计设备数量","link":"#统计设备数量","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.9,"words":870},"filePathRelative":"zh/UserGuide/V1.1.x/Operate-Metadata/Node.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,p as data};
