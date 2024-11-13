import{_ as e,c as a,b as n,o as s}from"./app-BHE9oQwv.js";const i={};function o(r,t){return s(),a("div",null,t[0]||(t[0]=[n(`<h1 id="aggregate-functions" tabindex="-1"><a class="header-anchor" href="#aggregate-functions"><span>Aggregate Functions</span></a></h1><p>Aggregate functions are many-to-one functions. They perform aggregate calculations on a set of values, resulting in a single aggregated result.</p><p>All aggregate functions except <code>COUNT()</code> ignore null values and return null when there are no input rows or all values are null. For example, <code>SUM()</code> returns null instead of zero, and <code>AVG()</code> does not include null values in the count.</p><p>The aggregate functions supported by IoTDB are as follows:</p><table><thead><tr><th>Function Name</th><th>Function Description</th><th>Allowed Input Data Types</th><th>Output Data Types</th></tr></thead><tbody><tr><td>SUM</td><td>Summation.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>DOUBLE</td></tr><tr><td>COUNT</td><td>Counts the number of data points.</td><td>All types</td><td>INT</td></tr><tr><td>AVG</td><td>Average.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>DOUBLE</td></tr><tr><td>EXTREME</td><td>Finds the value with the largest absolute value. Returns a positive value if the maximum absolute value of positive and negative values is equal.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>Consistent with the input data type</td></tr><tr><td>MAX_VALUE</td><td>Find the maximum value.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>Consistent with the input data type</td></tr><tr><td>MIN_VALUE</td><td>Find the minimum value.</td><td>INT32 INT64 FLOAT DOUBLE</td><td>Consistent with the input data type</td></tr><tr><td>FIRST_VALUE</td><td>Find the value with the smallest timestamp.</td><td>All data types</td><td>Consistent with input data type</td></tr><tr><td>LAST_VALUE</td><td>Find the value with the largest timestamp.</td><td>All data types</td><td>Consistent with input data type</td></tr><tr><td>MAX_TIME</td><td>Find the maximum timestamp.</td><td>All data Types</td><td>Timestamp</td></tr><tr><td>MIN_TIME</td><td>Find the minimum timestamp.</td><td>All data Types</td><td>Timestamp</td></tr></tbody></table><p><strong>Example:</strong> Count Points</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> <span class="token function">count</span><span class="token punctuation">(</span><span class="token keyword">status</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf01<span class="token punctuation">.</span>wt01<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Result:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-------------------------------+</span>
<span class="line">|count(root.ln.wf01.wt01.status)|</span>
<span class="line">+-------------------------------+</span>
<span class="line">|                          10080|</span>
<span class="line">+-------------------------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.016s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const l=e(i,[["render",o],["__file","Aggregation.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V1.0.x/Operators-Functions/Aggregation.html","title":"Aggregate Functions","lang":"en-US","frontmatter":{"description":"Aggregate Functions Aggregate functions are many-to-one functions. They perform aggregate calculations on a set of values, resulting in a single aggregated result. All aggregate...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Operators-Functions/Aggregation.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.0.x/Operators-Functions/Aggregation.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Aggregate Functions"}],["meta",{"property":"og:description","content":"Aggregate Functions Aggregate functions are many-to-one functions. They perform aggregate calculations on a set of values, resulting in a single aggregated result. All aggregate..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Aggregate Functions\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.19,"words":357},"filePathRelative":"UserGuide/V1.0.x/Operators-Functions/Aggregation.md","localizedDate":"July 10, 2023","autoDesc":true}');export{l as comp,p as data};