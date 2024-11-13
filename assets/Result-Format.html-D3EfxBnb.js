import{_ as n,c as s,b as a,o as t}from"./app-BHE9oQwv.js";const l={};function i(r,e){return t(),s("div",null,e[0]||(e[0]=[a(`<h1 id="query-result-alignment" tabindex="-1"><a class="header-anchor" href="#query-result-alignment"><span>Query Result Alignment</span></a></h1><p>In addition, IoTDB supports two other results set format: &#39;align by device&#39; and &#39;disable align&#39;.</p><h2 id="align-by-device" tabindex="-1"><a class="header-anchor" href="#align-by-device"><span>align by device</span></a></h2><p>The &#39;align by device&#39; indicates that the deviceId is considered as a column. Therefore, there are totally limited columns in the dataset.</p><p>The SQL statement is:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> align <span class="token keyword">by</span> device</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The result shows below:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------+-----------+------+--------+</span>
<span class="line">|                         Time|           Device|temperature|status|hardware|</span>
<span class="line">+-----------------------------+-----------------+-----------+------+--------+</span>
<span class="line">|2017-11-01T00:00:00.000+08:00|root.ln.wf01.wt01|      25.96|  true|    null|</span>
<span class="line">|2017-11-01T00:01:00.000+08:00|root.ln.wf01.wt01|      24.36|  true|    null|</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|root.ln.wf02.wt02|       null|  true|      v1|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|root.ln.wf02.wt02|       null| false|      v2|</span>
<span class="line">|2017-11-01T00:00:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|</span>
<span class="line">|2017-11-01T00:01:00.000+08:00|root.ln.wf02.wt02|       null|  true|      v2|</span>
<span class="line">+-----------------------------+-----------------+-----------+------+--------+</span>
<span class="line">Total line number = 6</span>
<span class="line">It costs 0.012s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="disable-align" tabindex="-1"><a class="header-anchor" href="#disable-align"><span>disable align</span></a></h3><p>The &#39;disable align&#39; indicates that there are 2 columns for each time series in the result set. Disable Align Clause can only be used at the end of a query statement. Disable Align Clause cannot be used with Aggregation, Fill Statements, Group By or Group By Device Statements, but can with Limit Statements. The display principle of the result table is that only when the column (or row) has existing data will the column (or row) be shown, with nonexistent cells being empty.</p><p>The SQL statement is:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token operator">*</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">*</span> <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2017</span><span class="token operator">-</span><span class="token number">11</span><span class="token operator">-</span><span class="token number">01</span>T00:<span class="token number">01</span>:<span class="token number">00</span> <span class="token keyword">disable</span> align</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>The result shows below:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------------------+-----------------------------+------------------------+-----------------------------+-----------------------------+-----------------------------+------------------------+</span>
<span class="line">|                         Time|root.ln.wf02.wt02.hardware|                         Time|root.ln.wf02.wt02.status|                         Time|root.ln.wf01.wt01.temperature|                         Time|root.ln.wf01.wt01.status|</span>
<span class="line">+-----------------------------+--------------------------+-----------------------------+------------------------+-----------------------------+-----------------------------+-----------------------------+------------------------+</span>
<span class="line">|1970-01-01T08:00:00.001+08:00|                        v1|1970-01-01T08:00:00.001+08:00|                    true|2017-11-01T00:00:00.000+08:00|                        25.96|2017-11-01T00:00:00.000+08:00|                    true|</span>
<span class="line">|1970-01-01T08:00:00.002+08:00|                        v2|1970-01-01T08:00:00.002+08:00|                   false|2017-11-01T00:01:00.000+08:00|                        24.36|2017-11-01T00:01:00.000+08:00|                    true|</span>
<span class="line">|2017-11-01T00:00:00.000+08:00|                        v2|2017-11-01T00:00:00.000+08:00|                    true|                         null|                         null|                         null|                    null|</span>
<span class="line">|2017-11-01T00:01:00.000+08:00|                        v2|2017-11-01T00:01:00.000+08:00|                    true|                         null|                         null|                         null|                    null|</span>
<span class="line">+-----------------------------+--------------------------+-----------------------------+------------------------+-----------------------------+-----------------------------+-----------------------------+------------------------+</span>
<span class="line">Total line number = 4</span>
<span class="line">It costs 0.018s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14)]))}const p=n(l,[["render",i],["__file","Result-Format.html.vue"]]),c=JSON.parse(`{"path":"/UserGuide/V0.13.x/Query-Data/Result-Format.html","title":"Query Result Alignment","lang":"en-US","frontmatter":{"description":"Query Result Alignment In addition, IoTDB supports two other results set format: 'align by device' and 'disable align'. align by device The 'align by device' indicates that the ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Query-Data/Result-Format.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/Query-Data/Result-Format.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Query Result Alignment"}],["meta",{"property":"og:description","content":"Query Result Alignment In addition, IoTDB supports two other results set format: 'align by device' and 'disable align'. align by device The 'align by device' indicates that the ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Query Result Alignment\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"align by device","slug":"align-by-device","link":"#align-by-device","children":[{"level":3,"title":"disable align","slug":"disable-align","link":"#disable-align","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.61,"words":483},"filePathRelative":"UserGuide/V0.13.x/Query-Data/Result-Format.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{p as comp,c as data};