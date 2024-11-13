import{_ as o,c as i,d as n,e as a,a as t,w as p,b as l,r,o as u}from"./app-BHE9oQwv.js";const c={};function d(k,s){const e=r("RouteLink");return u(),i("div",null,[s[43]||(s[43]=n("h1",{id:"数据写入与删除",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#数据写入与删除"},[n("span",null,"数据写入与删除")])],-1)),s[44]||(s[44]=n("h2",{id:"cli写入数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#cli写入数据"},[n("span",null,"CLI写入数据")])],-1)),n("p",null,[s[2]||(s[2]=a("IoTDB 为用户提供多种插入实时数据的方式，例如在 ")),t(e,{to:"/zh/UserGuide/latest/Tools-System/CLI.html"},{default:p(()=>s[0]||(s[0]=[a("Cli/Shell 工具")])),_:1}),s[3]||(s[3]=a(" 中直接输入插入数据的 INSERT 语句，或使用 Java API（标准 ")),t(e,{to:"/zh/UserGuide/latest/API/Programming-JDBC.html"},{default:p(()=>s[1]||(s[1]=[a("Java JDBC")])),_:1}),s[4]||(s[4]=a(" 接口）单条或批量执行插入数据的 INSERT 语句。"))]),n("p",null,[s[6]||(s[6]=a("本节主要为您介绍实时数据接入的 INSERT 语句在场景中的实际使用示例，有关 INSERT SQL 语句的详细语法请参见本文 ")),t(e,{to:"/zh/UserGuide/latest/SQL-Manual/SQL-Manual.html#%E5%86%99%E5%85%A5%E6%95%B0%E6%8D%AE"},{default:p(()=>s[5]||(s[5]=[a("INSERT 语句")])),_:1}),s[7]||(s[7]=a(" 节。"))]),s[45]||(s[45]=l(`<p>注：写入重复时间戳的数据则原时间戳数据被覆盖，可视为更新数据。</p><h3 id="使用-insert-语句" tabindex="-1"><a class="header-anchor" href="#使用-insert-语句"><span>使用 INSERT 语句</span></a></h3><p>使用 INSERT 语句可以向指定的已经创建的一条或多条时间序列中插入数据。对于每一条数据，均由一个时间戳类型的时间戳和一个数值或布尔值、字符串类型的传感器采集值组成。</p><p>在本节的场景实例下，以其中的两个时间序列<code>root.ln.wf02.wt02.status</code>和<code>root.ln.wf02.wt02.hardware</code>为例 ，它们的数据类型分别为 BOOLEAN 和 TEXT。</p><p>单列数据插入示例代码如下：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span><span class="token keyword">status</span><span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span>hardware<span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;v1&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>以上示例代码将长整型的 timestamp 以及值为 true 的数据插入到时间序列<code>root.ln.wf02.wt02.status</code>中和将长整型的 timestamp 以及值为”v1”的数据插入到时间序列<code>root.ln.wf02.wt02.hardware</code>中。执行成功后会返回执行时间，代表数据插入已完成。</p><blockquote><p>注意：在 IoTDB 中，TEXT 类型的数据单双引号都可以来表示，上面的插入语句是用的是双引号表示 TEXT 类型数据，下面的示例将使用单引号表示 TEXT 类型数据。</p></blockquote><p>INSERT 语句还可以支持在同一个时间点下多列数据的插入，同时向 2 时间点插入上述两个时间序列的值，多列数据插入示例代码如下：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>此外，INSERT 语句支持一次性插入多行数据，同时向 2 个不同时间点插入上述时间序列的值，示例代码如下：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span> <span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">VALUES</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token string">&#39;v4&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>插入数据后我们可以使用 SELECT 语句简单查询已插入的数据。</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">5</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果如图所示。由查询结果可以看出，单列、多列数据的插入操作正确执行。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------------------+------------------------+</span>
<span class="line">|                         Time|root.ln.wf02.wt02.hardware|root.ln.wf02.wt02.status|</span>
<span class="line">+-----------------------------+--------------------------+------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                        v1|                    true|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|                        v2|                   false|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|                        v3|                   false|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|                        v4|                    true|</span>
<span class="line">+-----------------------------+--------------------------+------------------------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.004s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，我们可以省略 timestamp 列，此时系统将使用当前的系统时间作为该数据点的时间戳，示例代码如下：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">,</span> hardware<span class="token punctuation">)</span> <span class="token keyword">values</span> <span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&#39;v2&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>注意：</strong> 当一次插入多行数据时必须指定时间戳。</p><h3 id="向对齐时间序列插入数据" tabindex="-1"><a class="header-anchor" href="#向对齐时间序列插入数据"><span>向对齐时间序列插入数据</span></a></h3><p>向对齐时间序列插入数据只需在SQL中增加<code>ALIGNED</code>关键词，其他类似。</p><p>示例代码如下：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">create</span> aligned timeseries root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span>s1 INT32<span class="token punctuation">,</span> s2 <span class="token keyword">DOUBLE</span><span class="token punctuation">)</span></span>
<span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span></span>
<span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">(</span><span class="token keyword">time</span><span class="token punctuation">,</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> aligned <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span></span>
<span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如图所示。由查询结果可以看出，数据的插入操作正确执行。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------+--------------+</span>
<span class="line">|                         Time|root.sg1.d1.s1|root.sg1.d1.s2|</span>
<span class="line">+-----------------------------+--------------+--------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|             1|           1.0|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|             2|           2.0|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|             3|           3.0|</span>
<span class="line">+-----------------------------+--------------+--------------+</span>
<span class="line">Total line number = 3</span>
<span class="line">It costs 0.004s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="原生接口写入" tabindex="-1"><a class="header-anchor" href="#原生接口写入"><span>原生接口写入</span></a></h2><p>原生接口 （Session） 是目前IoTDB使用最广泛的系列接口，包含多种写入接口，适配不同的数据采集场景，性能高效且支持多语言。</p><h3 id="多语言接口写入" tabindex="-1"><a class="header-anchor" href="#多语言接口写入"><span>多语言接口写入</span></a></h3>`,28)),n("ul",null,[n("li",null,[s[15]||(s[15]=n("h3",{id:"java",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#java"},[n("span",null,"Java")])],-1)),n("p",null,[s[10]||(s[10]=a("使用Java接口写入之前，你需要先建立连接，参考 ")),t(e,{to:"/zh/UserGuide/latest/API/Programming-Java-Native-API.html"},{default:p(()=>s[8]||(s[8]=[a("Java原生接口")])),_:1}),s[11]||(s[11]=a("。")),s[12]||(s[12]=n("br",null,null,-1)),s[13]||(s[13]=a(" 之后通过 ")),t(e,{to:"/zh/UserGuide/latest/API/Programming-Java-Native-API.html#%E6%95%B0%E6%8D%AE%E5%86%99%E5%85%A5"},{default:p(()=>s[9]||(s[9]=[a(" JAVA 数据操作接口（DML）")])),_:1}),s[14]||(s[14]=a("写入。"))])]),n("li",null,[s[18]||(s[18]=n("h3",{id:"python",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python"},[n("span",null,"Python")])],-1)),n("p",null,[s[17]||(s[17]=a("参考 ")),t(e,{to:"/zh/UserGuide/latest/API/Programming-Python-Native-API.html#%E6%95%B0%E6%8D%AE%E5%86%99%E5%85%A5"},{default:p(()=>s[16]||(s[16]=[a(" Python 数据操作接口（DML）")])),_:1})])]),n("li",null,[s[21]||(s[21]=n("h3",{id:"c",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#c"},[n("span",null,"C++")])],-1)),n("p",null,[s[20]||(s[20]=a("参考 ")),t(e,{to:"/zh/UserGuide/latest/API/Programming-Cpp-Native-API.html"},{default:p(()=>s[19]||(s[19]=[a(" C++ 数据操作接口（DML）")])),_:1})])]),n("li",null,[s[24]||(s[24]=n("h3",{id:"go",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#go"},[n("span",null,"Go")])],-1)),n("p",null,[s[23]||(s[23]=a("参考 ")),t(e,{to:"/zh/UserGuide/latest/API/Programming-Go-Native-API.html"},{default:p(()=>s[22]||(s[22]=[a("Go 原生接口")])),_:1})])])]),s[46]||(s[46]=n("h2",{id:"rest-api写入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#rest-api写入"},[n("span",null,"REST API写入")])],-1)),n("p",null,[s[27]||(s[27]=a("参考 ")),t(e,{to:"/zh/UserGuide/latest/API/RestServiceV1.html#inserttablet"},{default:p(()=>s[25]||(s[25]=[a("insertTablet (v1)")])),_:1}),s[28]||(s[28]=a(" or ")),t(e,{to:"/zh/UserGuide/latest/API/RestServiceV2.html#inserttablet"},{default:p(()=>s[26]||(s[26]=[a("insertTablet (v2)")])),_:1})]),s[47]||(s[47]=l(`<p>示例如下：</p><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{</span>
<span class="line">      &quot;timestamps&quot;: [</span>
<span class="line">            1,</span>
<span class="line">            2,</span>
<span class="line">            3</span>
<span class="line">      ],</span>
<span class="line">      &quot;measurements&quot;: [</span>
<span class="line">            &quot;temperature&quot;,</span>
<span class="line">            &quot;status&quot;</span>
<span class="line">      ],</span>
<span class="line">      &quot;data_types&quot;: [</span>
<span class="line">            &quot;FLOAT&quot;,</span>
<span class="line">            &quot;BOOLEAN&quot;</span>
<span class="line">      ],</span>
<span class="line">      &quot;values&quot;: [</span>
<span class="line">            [</span>
<span class="line">                  1.1,</span>
<span class="line">                  2.2,</span>
<span class="line">                  3.3</span>
<span class="line">            ],</span>
<span class="line">            [</span>
<span class="line">                  false,</span>
<span class="line">                  true,</span>
<span class="line">                  true</span>
<span class="line">            ]</span>
<span class="line">      ],</span>
<span class="line">      &quot;is_aligned&quot;: false,</span>
<span class="line">      &quot;device&quot;: &quot;root.ln.wf01.wt01&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mqtt写入" tabindex="-1"><a class="header-anchor" href="#mqtt写入"><span>MQTT写入</span></a></h2>`,3)),n("p",null,[s[30]||(s[30]=a("参考 ")),t(e,{to:"/zh/UserGuide/latest/API/Programming-MQTT.html#%E5%86%85%E7%BD%AE-mqtt-%E6%9C%8D%E5%8A%A1"},{default:p(()=>s[29]||(s[29]=[a("内置 MQTT 服务")])),_:1})]),s[48]||(s[48]=n("h2",{id:"批量数据导入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#批量数据导入"},[n("span",null,"批量数据导入")])],-1)),s[49]||(s[49]=n("p",null,"针对于不同场景，IoTDB 为用户提供多种批量导入数据的操作方式，本章节向大家介绍最为常用的两种方式为 CSV文本形式的导入 和 TsFile文件形式的导入。",-1)),s[50]||(s[50]=n("h3",{id:"tsfile批量导入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tsfile批量导入"},[n("span",null,"TsFile批量导入")])],-1)),n("p",null,[s[32]||(s[32]=a("TsFile 是在 IoTDB 中使用的时间序列的文件格式，您可以通过CLI等工具直接将存有时间序列的一个或多个 TsFile 文件导入到另外一个正在运行的IoTDB实例中。具体操作方式请参考")),t(e,{to:"/zh/UserGuide/latest/Tools-System/TsFile-Import-Export-Tool.html"},{default:p(()=>s[31]||(s[31]=[a("导入导出工具")])),_:1}),s[33]||(s[33]=a("。"))]),s[51]||(s[51]=n("h3",{id:"csv批量导入",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#csv批量导入"},[n("span",null,"CSV批量导入")])],-1)),n("p",null,[s[35]||(s[35]=a("CSV 是以纯文本形式存储表格数据，您可以在CSV文件中写入多条格式化的数据，并批量的将这些数据导入到 IoTDB 中，在导入数据之前，建议在IoTDB中创建好对应的元数据信息。如果忘记创建元数据也不要担心，IoTDB 可以自动将CSV中数据推断为其对应的数据类型，前提是你每一列的数据类型必须唯一。除单个文件外，此工具还支持以文件夹的形式导入多个 CSV 文件，并且支持设置如时间精度等优化参数。具体操作方式请参考")),t(e,{to:"/zh/UserGuide/latest/Tools-System/Data-Import-Export-Tool.html"},{default:p(()=>s[34]||(s[34]=[a("导入导出工具")])),_:1}),s[36]||(s[36]=a("。"))]),s[52]||(s[52]=n("h2",{id:"删除数据",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#删除数据"},[n("span",null,"删除数据")])],-1)),n("p",null,[s[38]||(s[38]=a("用户使用 ")),t(e,{to:"/zh/UserGuide/latest/SQL-Manual/SQL-Manual.html#%E5%88%A0%E9%99%A4%E6%95%B0%E6%8D%AE"},{default:p(()=>s[37]||(s[37]=[a("DELETE 语句")])),_:1}),s[39]||(s[39]=a(" 可以删除指定的时间序列中符合时间删除条件的数据。在删除数据时，用户可以选择需要删除的一个或多个时间序列、时间序列的前缀、时间序列带、*路径对某一个时间区间内的数据进行删除。"))]),s[53]||(s[53]=l(`<p>在 JAVA 编程环境中，您可以使用 JDBC API 单条或批量执行 DELETE 语句。</p><h3 id="单传感器时间序列值删除" tabindex="-1"><a class="header-anchor" href="#单传感器时间序列值删除"><span>单传感器时间序列值删除</span></a></h3><p>以测控 ln 集团为例，存在这样的使用场景：</p><p>wf02 子站的 wt02 设备在 2017-11-01 16:26:00 之前的供电状态出现多段错误，且无法分析其正确数据，错误数据影响了与其他设备的关联分析。此时，需要将此时间段前的数据删除。进行此操作的 SQL 语句为：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&lt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果我们仅仅想要删除 2017 年内的在 2017-11-01 16:26:00 之前的数据，可以使用以下 SQL:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span><span class="token operator">&gt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">00</span>:<span class="token number">00</span> <span class="token operator">and</span> <span class="token keyword">time</span><span class="token operator">&lt;=</span><span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>IoTDB 支持删除一个时间序列任何一个时间范围内的所有时序点，用户可以使用以下 SQL 语句指定需要删除的时间范围：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">10</span></span>
<span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">10</span></span>
<span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token number">20</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">10</span></span>
<span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">20</span> <span class="token operator">and</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">10</span></span>
<span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;</span> <span class="token number">20</span></span>
<span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&gt;=</span> <span class="token number">20</span></span>
<span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">=</span> <span class="token number">20</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要注意，当前的删除语句不支持 where 子句后的时间范围为多个由 OR 连接成的时间区间。如下删除语句将会解析出错：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">delete from root.ln.wf02.wt02.status where time &gt; 4 or time &lt; 0</span>
<span class="line">Msg: 303: Check metadata error: For delete statement, where clause can only contain atomic</span>
<span class="line">expressions like : time &gt; XXX, time &lt;= XXX, or two atomic expressions connected by &#39;AND&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果 delete 语句中未指定 where 子句，则会删除时间序列中的所有数据。</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="多传感器时间序列值删除" tabindex="-1"><a class="header-anchor" href="#多传感器时间序列值删除"><span>多传感器时间序列值删除</span></a></h3>`,14)),n("p",null,[s[41]||(s[41]=a("当 ln 集团 wf02 子站的 wt02 设备在 2017-11-01 16:26:00 之前的供电状态和设备硬件版本都需要删除，此时可以使用含义更广的 ")),t(e,{to:"/zh/UserGuide/latest/Basic-Concept/Data-Model-and-Terminology.html"},{default:p(()=>s[40]||(s[40]=[a("路径模式（Path Pattern）")])),_:1}),s[42]||(s[42]=a(" 进行删除操作，进行此操作的 SQL 语句为："))]),s[54]||(s[54]=l(`<div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T16:<span class="token number">26</span>:<span class="token number">00</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>需要注意的是，当删除的路径不存在时，IoTDB 不会提示路径不存在，而是显示执行成功，因为 SQL 是一种声明式的编程方式，除非是语法错误、权限不足等，否则都不认为是错误，如下所示。</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB<span class="token operator">&gt;</span> <span class="token keyword">delete</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf03<span class="token punctuation">.</span>wt02<span class="token punctuation">.</span><span class="token keyword">status</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;</span> <span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">Msg: The statement <span class="token operator">is</span> executed successfully<span class="token punctuation">.</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除时间分区-实验性功能" tabindex="-1"><a class="header-anchor" href="#删除时间分区-实验性功能"><span>删除时间分区 （实验性功能）</span></a></h3><p>您可以通过如下语句来删除某一个 database 下的指定时间分区：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">DELETE</span> <span class="token keyword">PARTITION</span> root<span class="token punctuation">.</span>ln <span class="token number">0</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">2</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>上例中的 0,1,2 为待删除时间分区的 id，您可以通过查看 IoTDB 的数据文件夹找到它，或者可以通过计算<code>timestamp / partitionInterval</code>（向下取整）,<br> 手动地将一个时间戳转换为对应的 id，其中的<code>partitionInterval</code>可以在 IoTDB 的配置文件中找到（如果您使用的版本支持时间分区）。</p><p>请注意该功能目前只是实验性的，如果您不是开发者，使用时请务必谨慎。</p>`,8))])}const v=o(c,[["render",d],["__file","Write-Delete-Data.html.vue"]]),b=JSON.parse('{"path":"/zh/UserGuide/latest/User-Manual/Write-Delete-Data.html","title":"数据写入与删除","lang":"zh-CN","frontmatter":{"description":"数据写入与删除 CLI写入数据 IoTDB 为用户提供多种插入实时数据的方式，例如在 中直接输入插入数据的 INSERT 语句，或使用 Java API（标准 接口）单条或批量执行插入数据的 INSERT 语句。 本节主要为您介绍实时数据接入的 INSERT 语句在场景中的实际使用示例，有关 INSERT SQL 语句的详细语法请参见本文 节。 注：写...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/latest/User-Manual/Write-Delete-Data.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/latest/User-Manual/Write-Delete-Data.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"数据写入与删除"}],["meta",{"property":"og:description","content":"数据写入与删除 CLI写入数据 IoTDB 为用户提供多种插入实时数据的方式，例如在 中直接输入插入数据的 INSERT 语句，或使用 Java API（标准 接口）单条或批量执行插入数据的 INSERT 语句。 本节主要为您介绍实时数据接入的 INSERT 语句在场景中的实际使用示例，有关 INSERT SQL 语句的详细语法请参见本文 节。 注：写..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-09-03T06:20:13.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-03T06:20:13.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"数据写入与删除\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-03T06:20:13.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"CLI写入数据","slug":"cli写入数据","link":"#cli写入数据","children":[{"level":3,"title":"使用 INSERT 语句","slug":"使用-insert-语句","link":"#使用-insert-语句","children":[]},{"level":3,"title":"向对齐时间序列插入数据","slug":"向对齐时间序列插入数据","link":"#向对齐时间序列插入数据","children":[]}]},{"level":2,"title":"原生接口写入","slug":"原生接口写入","link":"#原生接口写入","children":[{"level":3,"title":"多语言接口写入","slug":"多语言接口写入","link":"#多语言接口写入","children":[]}]},{"level":2,"title":"REST API写入","slug":"rest-api写入","link":"#rest-api写入","children":[]},{"level":2,"title":"MQTT写入","slug":"mqtt写入","link":"#mqtt写入","children":[]},{"level":2,"title":"批量数据导入","slug":"批量数据导入","link":"#批量数据导入","children":[{"level":3,"title":"TsFile批量导入","slug":"tsfile批量导入","link":"#tsfile批量导入","children":[]},{"level":3,"title":"CSV批量导入","slug":"csv批量导入","link":"#csv批量导入","children":[]}]},{"level":2,"title":"删除数据","slug":"删除数据","link":"#删除数据","children":[{"level":3,"title":"单传感器时间序列值删除","slug":"单传感器时间序列值删除","link":"#单传感器时间序列值删除","children":[]},{"level":3,"title":"多传感器时间序列值删除","slug":"多传感器时间序列值删除","link":"#多传感器时间序列值删除","children":[]},{"level":3,"title":"删除时间分区 （实验性功能）","slug":"删除时间分区-实验性功能","link":"#删除时间分区-实验性功能","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1725344413000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Summer","email":"43237967+2b3c511@users.noreply.github.com","commits":1},{"name":"石林松","email":"50943998+shi10lin0s@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":8.03,"words":2410},"filePathRelative":"zh/UserGuide/latest/User-Manual/Write-Delete-Data.md","localizedDate":"2023年7月10日","autoDesc":true}');export{v as comp,b as data};
