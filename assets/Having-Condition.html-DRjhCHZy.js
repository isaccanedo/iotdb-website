import{_ as n,c as a,b as e,o as t}from"./app-BHE9oQwv.js";const p={};function o(l,s){return t(),a("div",null,s[0]||(s[0]=[e(`<h1 id="aggregate-result-filtering" tabindex="-1"><a class="header-anchor" href="#aggregate-result-filtering"><span>Aggregate Result Filtering</span></a></h1><p>If you want to filter the results of aggregate queries,<br> you can use the <code>HAVING</code> clause after the <code>GROUP BY</code> clause.</p><blockquote><p>NOTE：</p><p>1.The expression in HAVING clause must consist of aggregate values; the original sequence cannot appear alone.<br> The following usages are incorrect：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span> <span class="token keyword">having</span> <span class="token function">sum</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> s1</span>
<span class="line"><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span> <span class="token keyword">having</span> s1 <span class="token operator">&gt;</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.When filtering the <code>GROUP BY LEVEL</code> result, the PATH in <code>SELECT</code> and <code>HAVING</code> can only have one node.<br> The following usages are incorrect：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">having</span> <span class="token function">sum</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span>s1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>d1<span class="token punctuation">.</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">1</span>ms<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">having</span> <span class="token function">sum</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><p>Here are a few examples of using the &#39;HAVING&#39; clause to filter aggregate results.</p><p>Aggregation result 1：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------------+---------------------+</span>
<span class="line">|                         Time|count(root.test.*.s1)|count(root.test.*.s2)|</span>
<span class="line">+-----------------------------+---------------------+---------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                    4|                    4|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|                    1|                    0|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|                    2|                    4|</span>
<span class="line">|1970-01-01T08:00:00.007+08:00|                    3|                    2|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|                    4|                    4|</span>
<span class="line">+-----------------------------+---------------------+---------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aggregation result filtering query 1：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"> <span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span>ms<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">level</span><span class="token operator">=</span><span class="token number">1</span> <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Filtering result 1：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------------+</span>
<span class="line">|                         Time|count(root.test.*.s1)|</span>
<span class="line">+-----------------------------+---------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                    4|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|                    2|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|                    4|</span>
<span class="line">+-----------------------------+---------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aggregation result 2：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------+---------+---------+</span>
<span class="line">|                         Time|       Device|count(s1)|count(s2)|</span>
<span class="line">+-----------------------------+-------------+---------+---------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|root.test.sg1|        1|        2|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|root.test.sg1|        1|        0|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|root.test.sg1|        1|        2|</span>
<span class="line">|1970-01-01T08:00:00.007+08:00|root.test.sg1|        2|        1|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|root.test.sg1|        2|        2|</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|root.test.sg2|        2|        2|</span>
<span class="line">|1970-01-01T08:00:00.003+08:00|root.test.sg2|        0|        0|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|root.test.sg2|        1|        2|</span>
<span class="line">|1970-01-01T08:00:00.007+08:00|root.test.sg2|        1|        1|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|root.test.sg2|        2|        2|</span>
<span class="line">+-----------------------------+-------------+---------+---------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Aggregation result filtering query 2：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"> <span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">count</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">group</span> <span class="token keyword">by</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">11</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token number">2</span>ms<span class="token punctuation">)</span> <span class="token keyword">having</span> <span class="token function">count</span><span class="token punctuation">(</span>s2<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span> align <span class="token keyword">by</span> device</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Filtering result 2：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------+---------+---------+</span>
<span class="line">|                         Time|       Device|count(s1)|count(s2)|</span>
<span class="line">+-----------------------------+-------------+---------+---------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|root.test.sg1|        1|        2|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|root.test.sg1|        1|        2|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|root.test.sg1|        2|        2|</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|root.test.sg2|        2|        2|</span>
<span class="line">|1970-01-01T08:00:00.005+08:00|root.test.sg2|        1|        2|</span>
<span class="line">|1970-01-01T08:00:00.009+08:00|root.test.sg2|        2|        2|</span>
<span class="line">+-----------------------------+-------------+---------+---------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,16)]))}const c=n(p,[["render",o],["__file","Having-Condition.html.vue"]]),r=JSON.parse('{"path":"/UserGuide/V1.0.x/Query-Data/Having-Condition.html","title":"Aggregate Result Filtering","lang":"en-US","frontmatter":{"description":"Aggregate Result Filtering If you want to filter the results of aggregate queries, you can use the HAVING clause after the GROUP BY clause. NOTE： 1.The expression in HAVING clau...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Query-Data/Having-Condition.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Query-Data/Having-Condition.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Aggregate Result Filtering"}],["meta",{"property":"og:description","content":"Aggregate Result Filtering If you want to filter the results of aggregate queries, you can use the HAVING clause after the GROUP BY clause. NOTE： 1.The expression in HAVING clau..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Aggregate Result Filtering\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.9,"words":569},"filePathRelative":"UserGuide/V1.0.x/Query-Data/Having-Condition.md","localizedDate":"July 10, 2023","autoDesc":true}');export{c as comp,r as data};