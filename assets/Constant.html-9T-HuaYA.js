import{_ as n,c as s,b as e,o as a}from"./app-BHE9oQwv.js";const o={};function l(p,t){return a(),s("div",null,t[0]||(t[0]=[e(`<h1 id="常序列生成函数" tabindex="-1"><a class="header-anchor" href="#常序列生成函数"><span>常序列生成函数</span></a></h1><p>常序列生成函数用于生成所有数据点的值都相同的时间序列。</p><p>常序列生成函数接受一个或者多个时间序列输入，其输出的数据点的时间戳集合是这些输入序列时间戳集合的并集。</p><p>目前 IoTDB 支持如下常序列生成函数：</p><table><thead><tr><th>函数名</th><th>必要的属性参数</th><th>输出序列类型</th><th>功能描述</th></tr></thead><tbody><tr><td>CONST</td><td><code>value</code>: 输出的数据点的值 <br><code>type</code>: 输出的数据点的类型，只能是 INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>由输入属性参数 <code>type</code> 决定</td><td>根据输入属性 <code>value</code> 和 <code>type</code> 输出用户指定的常序列。</td></tr><tr><td>PI</td><td>无</td><td>DOUBLE</td><td>常序列的值：<code>π</code> 的 <code>double</code> 值，圆的周长与其直径的比值，即圆周率，等于 <em>Java标准库</em> 中的<code>Math.PI</code>。</td></tr><tr><td>E</td><td>无</td><td>DOUBLE</td><td>常序列的值：<code>e</code> 的 <code>double</code> 值，自然对数的底，它等于 <em>Java 标准库</em> 中的 <code>Math.E</code>。</td></tr></tbody></table><p>例如：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> s2<span class="token punctuation">,</span> const<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> <span class="token string">&#39;value&#39;</span><span class="token operator">=</span><span class="token string">&#39;1024&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;type&#39;</span><span class="token operator">=</span><span class="token string">&#39;INT64&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> pi<span class="token punctuation">(</span>s2<span class="token punctuation">)</span><span class="token punctuation">,</span> e<span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1<span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>结果：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">select s1, s2, const(s1, &#39;value&#39;=&#39;1024&#39;, &#39;type&#39;=&#39;INT64&#39;), pi(s2), e(s1, s2) from root.sg1.d1; </span>
<span class="line">+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+</span>
<span class="line">|                         Time|root.sg1.d1.s1|root.sg1.d1.s2|const(root.sg1.d1.s1, &quot;value&quot;=&quot;1024&quot;, &quot;type&quot;=&quot;INT64&quot;)|pi(root.sg1.d1.s2)|e(root.sg1.d1.s1, root.sg1.d1.s2)|</span>
<span class="line">+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+</span>
<span class="line">|1970-01-01T08:00:00.000+08:00|           0.0|           0.0|                                                 1024| 3.141592653589793|                2.718281828459045|</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|           1.0|          null|                                                 1024|              null|                2.718281828459045|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|           2.0|          null|                                                 1024|              null|                2.718281828459045|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|          null|           3.0|                                                 null| 3.141592653589793|                2.718281828459045|</span>
<span class="line">|1970-01-01T08:00:00.004+08:00|          null|           4.0|                                                 null| 3.141592653589793|                2.718281828459045|</span>
<span class="line">+-----------------------------+--------------+--------------+-----------------------------------------------------+------------------+---------------------------------+</span>
<span class="line">Total line number = 5</span>
<span class="line">It costs 0.005s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const c=n(o,[["render",l],["__file","Constant.html.vue"]]),d=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Operators-Functions/Constant.html","title":"常序列生成函数","lang":"zh-CN","frontmatter":{"description":"常序列生成函数 常序列生成函数用于生成所有数据点的值都相同的时间序列。 常序列生成函数接受一个或者多个时间序列输入，其输出的数据点的时间戳集合是这些输入序列时间戳集合的并集。 目前 IoTDB 支持如下常序列生成函数： 例如： 结果：","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Operators-Functions/Constant.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Operators-Functions/Constant.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"常序列生成函数"}],["meta",{"property":"og:description","content":"常序列生成函数 常序列生成函数用于生成所有数据点的值都相同的时间序列。 常序列生成函数接受一个或者多个时间序列输入，其输出的数据点的时间戳集合是这些输入序列时间戳集合的并集。 目前 IoTDB 支持如下常序列生成函数： 例如： 结果："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常序列生成函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.59,"words":476},"filePathRelative":"zh/UserGuide/V1.0.x/Operators-Functions/Constant.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,d as data};
