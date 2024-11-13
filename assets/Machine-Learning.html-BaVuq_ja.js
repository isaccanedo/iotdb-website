import{_ as n,c as s,b as a,o as i}from"./app-BHE9oQwv.js";const t={};function r(l,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="machine-learning" tabindex="-1"><a class="header-anchor" href="#machine-learning"><span>Machine Learning</span></a></h1><h2 id="ar" tabindex="-1"><a class="header-anchor" href="#ar"><span>AR</span></a></h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><p>This function is used to learn the coefficients of the autoregressive models for a time series.</p><p><strong>Name:</strong> AR</p><p><strong>Input Series:</strong> Only support a single input numeric series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>p</code>: The order of the autoregressive model. Its default value is 1.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE. The first line corresponds to the first order coefficient, and so on.</p><p><strong>Note:</strong></p><ul><li>Parameter <code>p</code> should be a positive integer.</li><li>Most points in the series should be sampled at a constant time interval.</li><li>Linear interpolation is applied for the missing points in the series.</li></ul><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3><h4 id="assigning-model-order" tabindex="-1"><a class="header-anchor" href="#assigning-model-order"><span>Assigning Model Order</span></a></h4><p>Input Series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d0.s0|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2020-01-01T00:00:01.000+08:00|           -4.0|</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|           -3.0|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|           -2.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|           -1.0|</span>
<span class="line">|2020-01-01T00:00:05.000+08:00|            0.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|            1.0|</span>
<span class="line">|2020-01-01T00:00:07.000+08:00|            2.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|            3.0|</span>
<span class="line">|2020-01-01T00:00:09.000+08:00|            4.0|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> ar<span class="token punctuation">(</span>s0<span class="token punctuation">,</span><span class="token string">&quot;p&quot;</span><span class="token operator">=</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output Series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------------------+</span>
<span class="line">|                         Time|ar(root.test.d0.s0,&quot;p&quot;=&quot;2&quot;)|</span>
<span class="line">+-----------------------------+---------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                     0.9429|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|                    -0.2571|</span>
<span class="line">+-----------------------------+---------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,19)]))}const p=n(t,[["render",r],["__file","Machine-Learning.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.1.x/Operators-Functions/Machine-Learning.html","title":"Machine Learning","lang":"en-US","frontmatter":{"description":"Machine Learning AR Usage This function is used to learn the coefficients of the autoregressive models for a time series. Name: AR Input Series: Only support a single input nume...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Machine-Learning.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Machine-Learning.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Machine Learning"}],["meta",{"property":"og:description","content":"Machine Learning AR Usage This function is used to learn the coefficients of the autoregressive models for a time series. Name: AR Input Series: Only support a single input nume..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Machine Learning\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"AR","slug":"ar","link":"#ar","children":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.12,"words":336},"filePathRelative":"UserGuide/V1.1.x/Operators-Functions/Machine-Learning.md","localizedDate":"July 10, 2023","autoDesc":true}');export{p as comp,c as data};