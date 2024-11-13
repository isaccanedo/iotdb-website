import{_ as e,c as n,b as a,o as s}from"./app-BHE9oQwv.js";const i={};function o(r,t){return s(),n("div",null,t[0]||(t[0]=[a(`<h1 id="variation-trend-calculation-functions" tabindex="-1"><a class="header-anchor" href="#variation-trend-calculation-functions"><span>Variation Trend Calculation Functions</span></a></h1><p>Currently, IoTDB supports the following variation trend calculation functions:</p><table><thead><tr><th>Function Name</th><th>Allowed Input Series Data Types</th><th>Output Series Data Type</th><th>Description</th></tr></thead><tbody><tr><td>TIME_DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE / BOOLEAN / TEXT</td><td>INT64</td><td>Calculates the difference between the time stamp of a data point and the time stamp of the previous data point. There is no corresponding output for the first data point.</td></tr><tr><td>DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>Same type as the input series</td><td>Calculates the difference between the value of a data point and the value of the previous data point. There is no corresponding output for the first data point.</td></tr><tr><td>NON_NEGATIVE_DIFFERENCE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>Same type as the input series</td><td>Calculates the absolute value of the difference between the value of a data point and the value of the previous data point. There is no corresponding output for the first data point.</td></tr><tr><td>DERIVATIVE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Calculates the rate of change of a data point compared to the previous data point, the result is equals to DIFFERENCE / TIME_DIFFERENCE. There is no corresponding output for the first data point.</td></tr><tr><td>NON_NEGATIVE_DERIVATIVE</td><td>INT32 / INT64 / FLOAT / DOUBLE</td><td>DOUBLE</td><td>Calculates the absolute value of the rate of change of a data point compared to the previous data point, the result is equals to NON_NEGATIVE_DIFFERENCE / TIME_DIFFERENCE. There is no corresponding output for the first data point.</td></tr></tbody></table><p>Example:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> s1<span class="token punctuation">,</span> time_difference<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> difference<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> non_negative_difference<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> derivative<span class="token punctuation">(</span>s1<span class="token punctuation">)</span><span class="token punctuation">,</span> non_negative_derivative<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>sg1<span class="token punctuation">.</span>d1 <span class="token keyword">limit</span> <span class="token number">5</span> <span class="token keyword">offset</span> <span class="token number">1000</span><span class="token punctuation">;</span> </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Result:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------------+-------------------------------+--------------------------+---------------------------------------+--------------------------+---------------------------------------+</span>
<span class="line">|                         Time|     root.sg1.d1.s1|time_difference(root.sg1.d1.s1)|difference(root.sg1.d1.s1)|non_negative_difference(root.sg1.d1.s1)|derivative(root.sg1.d1.s1)|non_negative_derivative(root.sg1.d1.s1)|</span>
<span class="line">+-----------------------------+-------------------+-------------------------------+--------------------------+---------------------------------------+--------------------------+---------------------------------------+</span>
<span class="line">|2020-12-10T17:11:49.037+08:00|7360723084922759782|                              1|      -8431715764844238876|                    8431715764844238876|    -8.4317157648442388E18|                  8.4317157648442388E18|</span>
<span class="line">|2020-12-10T17:11:49.038+08:00|4377791063319964531|                              1|      -2982932021602795251|                    2982932021602795251|     -2.982932021602795E18|                   2.982932021602795E18|</span>
<span class="line">|2020-12-10T17:11:49.039+08:00|7972485567734642915|                              1|       3594694504414678384|                    3594694504414678384|     3.5946945044146785E18|                  3.5946945044146785E18|</span>
<span class="line">|2020-12-10T17:11:49.040+08:00|2508858212791964081|                              1|      -5463627354942678834|                    5463627354942678834|     -5.463627354942679E18|                   5.463627354942679E18|</span>
<span class="line">|2020-12-10T17:11:49.041+08:00|2817297431185141819|                              1|        308439218393177738|                     308439218393177738|     3.0843921839317773E17|                  3.0843921839317773E17|</span>
<span class="line">+-----------------------------+-------------------+-------------------------------+--------------------------+---------------------------------------+--------------------------+---------------------------------------+</span>
<span class="line">Total line number = 5</span>
<span class="line">It costs 0.014s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const l=e(i,[["render",o],["__file","Variation-Trend.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V1.0.x/Operators-Functions/Variation-Trend.html","title":"Variation Trend Calculation Functions","lang":"en-US","frontmatter":{"description":"Variation Trend Calculation Functions Currently, IoTDB supports the following variation trend calculation functions: Example: Result:","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Operators-Functions/Variation-Trend.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Operators-Functions/Variation-Trend.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Variation Trend Calculation Functions"}],["meta",{"property":"og:description","content":"Variation Trend Calculation Functions Currently, IoTDB supports the following variation trend calculation functions: Example: Result:"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Variation Trend Calculation Functions\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.54,"words":463},"filePathRelative":"UserGuide/V1.0.x/Operators-Functions/Variation-Trend.md","localizedDate":"July 10, 2023","autoDesc":true}');export{l as comp,d as data};