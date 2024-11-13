import{_ as s,c as n,b as a,o as i}from"./app-BHE9oQwv.js";const l={};function t(d,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h2 id="路径结点名" tabindex="-1"><a class="header-anchor" href="#路径结点名"><span>路径结点名</span></a></h2><p>路径结点名是特殊的标识符，其还可以是通配符 * 或 **。在创建时间序列时，各层级的路径结点名不能为通配符 * 或 **。在查询语句中，可以用通配符 * 或 ** 来表示路径结点名，以匹配一层或多层路径。</p><h3 id="通配符" tabindex="-1"><a class="header-anchor" href="#通配符"><span>通配符</span></a></h3><p><code>*</code>在路径中表示一层。例如<code>root.vehicle.*.sensor1</code>代表的是以<code>root.vehicle</code>为前缀，以<code>sensor1</code>为后缀，层次等于 4 层的路径。</p><p><code>**</code>在路径中表示是（<code>*</code>）+，即为一层或多层<code>*</code>。例如<code>root.vehicle.device1.**</code>代表的是<code>root.vehicle.device1.*</code>, <code>root.vehicle.device1.*.*</code>, <code>root.vehicle.device1.*.*.*</code>等所有以<code>root.vehicle.device1</code>为前缀路径的大于等于 4 层的路径；<code>root.vehicle.**.sensor1</code>代表的是以<code>root.vehicle</code>为前缀，以<code>sensor1</code>为后缀，层次大于等于 4 层的路径。</p><p>由于通配符 * 在查询表达式中也可以表示乘法符号，下述例子用于帮助您区分两种情况：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line"># 创建时间序列 root.sg.\`a*b\`</span>
<span class="line">create timeseries root.sg.\`a*b\` with datatype=FLOAT,encoding=PLAIN;</span>
<span class="line"># 请注意，如标识符部分所述，a*b包含特殊字符，需要用\`\`括起来使用</span>
<span class="line"># create timeseries root.sg.a*b with datatype=FLOAT,encoding=PLAIN 是错误用法</span>
<span class="line"></span>
<span class="line"># 创建时间序列 root.sg.a</span>
<span class="line">create timeseries root.sg.a with datatype=FLOAT,encoding=PLAIN;</span>
<span class="line"></span>
<span class="line"># 创建时间序列 root.sg.b</span>
<span class="line">create timeseries root.sg.b with datatype=FLOAT,encoding=PLAIN;</span>
<span class="line"></span>
<span class="line"># 查询时间序列 root.sg.\`a*b\`</span>
<span class="line">select \`a*b\` from root.sg</span>
<span class="line"># 其结果集表头为</span>
<span class="line">|Time|root.sg.a*b|</span>
<span class="line"></span>
<span class="line"># 查询时间序列 root.sg.a 和 root.sg.b的乘积</span>
<span class="line">select a*b from root.sg</span>
<span class="line"># 其结果集表头为</span>
<span class="line">|Time|root.sg.a * root.sg.b|</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标识符" tabindex="-1"><a class="header-anchor" href="#标识符"><span>标识符</span></a></h3><p>路径结点名不为通配符时，使用方法和标识符一致。<strong>在 SQL 中需要使用反引号引用的路径结点，在结果集中也会用反引号引起。</strong></p><p>需要使用反引号进行引用的部分特殊情况示例：</p><ul><li>创建时间序列时，如下情况需要使用反引号对特殊节点名进行引用：</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line"># 路径结点名中包含特殊字符，时间序列各结点为[&quot;root&quot;,&quot;sg&quot;,&quot;www.\`baidu.com&quot;]</span>
<span class="line">create timeseries root.sg.\`www.\`\`baidu.com\`.a with datatype=FLOAT,encoding=PLAIN;</span>
<span class="line"></span>
<span class="line"># 路径结点名为实数</span>
<span class="line">create timeseries root.sg.\`111\` with datatype=FLOAT,encoding=PLAIN;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>依次执行示例中语句后，执行 show timeseries，结果如下：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">+---------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|                 timeseries|alias|database|dataType|encoding|compression|tags|attributes|</span>
<span class="line">+---------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line">|            root.sg.\`111\`.a| null|      root.sg|   FLOAT|   PLAIN|     SNAPPY|null|      null|</span>
<span class="line">|root.sg.\`www.\`\`baidu.com\`.a| null|      root.sg|   FLOAT|   PLAIN|     SNAPPY|null|      null|</span>
<span class="line">+---------------------------+-----+-------------+--------+--------+-----------+----+----------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>插入数据时，如下情况需要使用反引号对特殊节点名进行引用：</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line"># 路径结点名中包含特殊字符</span>
<span class="line">insert into root.sg.\`www.\`\`baidu.com\`(timestamp, a) values(1, 2);</span>
<span class="line"></span>
<span class="line"># 路径结点名为实数</span>
<span class="line">insert into root.sg(timestamp, \`111\`) values (1, 2);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>查询数据时，如下情况需要使用反引号对特殊节点名进行引用：</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line"># 路径结点名中包含特殊字符</span>
<span class="line">select a from root.sg.\`www.\`\`baidu.com\`;</span>
<span class="line"></span>
<span class="line"># 路径结点名为实数</span>
<span class="line">select \`111\` from root.sg</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果集分别为：</p><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line"># select a from root.sg.\`www.\`\`baidu.com\` 结果集</span>
<span class="line">+-----------------------------+---------------------------+</span>
<span class="line">|                         Time|root.sg.\`www.\`\`baidu.com\`.a|</span>
<span class="line">+-----------------------------+---------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                        2.0|</span>
<span class="line">+-----------------------------+---------------------------+</span>
<span class="line"></span>
<span class="line"># select \`111\` from root.sg 结果集</span>
<span class="line">+-----------------------------+-------------+</span>
<span class="line">|                         Time|root.sg.\`111\`|</span>
<span class="line">+-----------------------------+-------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|          2.0|</span>
<span class="line">+-----------------------------+-------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20)]))}const r=s(l,[["render",t],["__file","NodeName-In-Path.html.vue"]]),o=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Syntax-Conventions/NodeName-In-Path.html","title":"","lang":"zh-CN","frontmatter":{"description":"路径结点名 路径结点名是特殊的标识符，其还可以是通配符 * 或 **。在创建时间序列时，各层级的路径结点名不能为通配符 * 或 **。在查询语句中，可以用通配符 * 或 ** 来表示路径结点名，以匹配一层或多层路径。 通配符 *在路径中表示一层。例如root.vehicle.*.sensor1代表的是以root.vehicle为前缀，以sensor1为...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Syntax-Conventions/NodeName-In-Path.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Syntax-Conventions/NodeName-In-Path.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"路径结点名 路径结点名是特殊的标识符，其还可以是通配符 * 或 **。在创建时间序列时，各层级的路径结点名不能为通配符 * 或 **。在查询语句中，可以用通配符 * 或 ** 来表示路径结点名，以匹配一层或多层路径。 通配符 *在路径中表示一层。例如root.vehicle.*.sensor1代表的是以root.vehicle为前缀，以sensor1为..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"路径结点名","slug":"路径结点名","link":"#路径结点名","children":[{"level":3,"title":"通配符","slug":"通配符","link":"#通配符","children":[]},{"level":3,"title":"标识符","slug":"标识符","link":"#标识符","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.86,"words":857},"filePathRelative":"zh/UserGuide/V1.1.x/Syntax-Conventions/NodeName-In-Path.md","localizedDate":"2023年7月10日","autoDesc":true}');export{r as comp,o as data};
