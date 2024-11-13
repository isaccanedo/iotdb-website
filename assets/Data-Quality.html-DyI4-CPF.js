import{_ as n,c as a,b as e,o as l}from"./app-BHE9oQwv.js";const i={};function p(t,s){return l(),a("div",null,s[0]||(s[0]=[e(`<h2 id="数据质量" tabindex="-1"><a class="header-anchor" href="#数据质量"><span>数据质量</span></a></h2><h3 id="completeness" tabindex="-1"><a class="header-anchor" href="#completeness"><span>Completeness</span></a></h3><h4 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介"><span>函数简介</span></a></h4><p>本函数用于计算时间序列的完整性。将输入序列划分为若干个连续且不重叠的窗口，分别计算每一个窗口的完整性，并输出窗口第一个数据点的时间戳和窗口的完整性。</p><p><strong>函数名：</strong> COMPLETENESS</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数：</strong></p><ul><li><code>window</code>：窗口大小，它是一个大于0的整数或者一个有单位的正数。前者代表每一个窗口包含的数据点数目，最后一个窗口的数据点数目可能会不足；后者代表窗口的时间跨度，目前支持五种单位，分别是&#39;ms&#39;（毫秒）、&#39;s&#39;（秒）、&#39;m&#39;（分钟）、&#39;h&#39;（小时）和&#39;d&#39;（天）。缺省情况下，全部输入数据都属于同一个窗口。</li><li><code>downtime</code>：完整性计算是否考虑停机异常。它的取值为 &#39;true&#39; 或 &#39;false&#39;，默认值为 &#39;true&#39;. 在考虑停机异常时，长时间的数据缺失将被视作停机，不对完整性产生影响。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为DOUBLE，其中每一个数据点的值的范围都是 [0,1].</p><p><strong>提示：</strong> 只有当窗口内的数据点数目超过10时，才会进行完整性计算。否则，该窗口将被忽略，不做任何输出。</p><h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h4><h6 id="参数缺省" tabindex="-1"><a class="header-anchor" href="#参数缺省"><span>参数缺省</span></a></h6><p>在参数缺省的情况下，本函数将会把全部输入数据都作为同一个窗口计算完整性。</p><p>输入序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d1.s1|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|          100.0|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|          101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|          102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|          104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|          108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|          112.0|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|          113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|          114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|          116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|          118.0|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|          120.0|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|          124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|            NaN|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> completeness<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------------------+</span>
<span class="line">|                         Time|completeness(root.test.d1.s1)|</span>
<span class="line">+-----------------------------+-----------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                        0.875|</span>
<span class="line">+-----------------------------+-----------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="指定窗口大小" tabindex="-1"><a class="header-anchor" href="#指定窗口大小"><span>指定窗口大小</span></a></h6><p>在指定窗口大小的情况下，本函数会把输入数据划分为若干个窗口计算完整性。</p><p>输入序列:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d1.s1|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|          100.0|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|          101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|          102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|          104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|          108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|          112.0|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|          113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|          114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|          116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|          118.0|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|          120.0|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|          124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|            NaN|</span>
<span class="line">|2020-01-01T00:00:32.000+08:00|          130.0|</span>
<span class="line">|2020-01-01T00:00:34.000+08:00|          132.0|</span>
<span class="line">|2020-01-01T00:00:36.000+08:00|          134.0|</span>
<span class="line">|2020-01-01T00:00:38.000+08:00|          136.0|</span>
<span class="line">|2020-01-01T00:00:40.000+08:00|          138.0|</span>
<span class="line">|2020-01-01T00:00:42.000+08:00|          140.0|</span>
<span class="line">|2020-01-01T00:00:44.000+08:00|          142.0|</span>
<span class="line">|2020-01-01T00:00:46.000+08:00|          144.0|</span>
<span class="line">|2020-01-01T00:00:48.000+08:00|          146.0|</span>
<span class="line">|2020-01-01T00:00:50.000+08:00|          148.0|</span>
<span class="line">|2020-01-01T00:00:52.000+08:00|          150.0|</span>
<span class="line">|2020-01-01T00:00:54.000+08:00|          152.0|</span>
<span class="line">|2020-01-01T00:00:56.000+08:00|          154.0|</span>
<span class="line">|2020-01-01T00:00:58.000+08:00|          156.0|</span>
<span class="line">|2020-01-01T00:01:00.000+08:00|          158.0|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> completeness<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;window&quot;</span><span class="token operator">=</span><span class="token string">&quot;15&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">01</span>:<span class="token number">00</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------------------------------------+</span>
<span class="line">|                         Time|completeness(root.test.d1.s1, &quot;window&quot;=&quot;15&quot;)|</span>
<span class="line">+-----------------------------+--------------------------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                                       0.875|</span>
<span class="line">|2020-01-01T00:00:32.000+08:00|                                         1.0|</span>
<span class="line">+-----------------------------+--------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="consistency" tabindex="-1"><a class="header-anchor" href="#consistency"><span>Consistency</span></a></h3><h4 id="函数简介-1" tabindex="-1"><a class="header-anchor" href="#函数简介-1"><span>函数简介</span></a></h4><p>本函数用于计算时间序列的一致性。将输入序列划分为若干个连续且不重叠的窗口，分别计算每一个窗口的一致性，并输出窗口第一个数据点的时间戳和窗口的时效性。</p><p><strong>函数名：</strong> CONSISTENCY</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>参数：</strong></p><ul><li><code>window</code>：窗口大小，它是一个大于0的整数或者一个有单位的正数。前者代表每一个窗口包含的数据点数目，最后一个窗口的数据点数目可能会不足；后者代表窗口的时间跨度，目前支持五种单位，分别是 &#39;ms&#39;（毫秒）、&#39;s&#39;（秒）、&#39;m&#39;（分钟）、&#39;h&#39;（小时）和&#39;d&#39;（天）。缺省情况下，全部输入数据都属于同一个窗口。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为DOUBLE，其中每一个数据点的值的范围都是 [0,1].</p><p><strong>提示：</strong> 只有当窗口内的数据点数目超过10时，才会进行一致性计算。否则，该窗口将被忽略，不做任何输出。</p><h4 id="使用示例-1" tabindex="-1"><a class="header-anchor" href="#使用示例-1"><span>使用示例</span></a></h4><h6 id="参数缺省-1" tabindex="-1"><a class="header-anchor" href="#参数缺省-1"><span>参数缺省</span></a></h6><p>在参数缺省的情况下，本函数将会把全部输入数据都作为同一个窗口计算一致性。</p><p>输入序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d1.s1|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|          100.0|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|          101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|          102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|          104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|          108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|          112.0|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|          113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|          114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|          116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|          118.0|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|          120.0|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|          124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|            NaN|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> consistency<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+----------------------------+</span>
<span class="line">|                         Time|consistency(root.test.d1.s1)|</span>
<span class="line">+-----------------------------+----------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|          0.9333333333333333|</span>
<span class="line">+-----------------------------+----------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="指定窗口大小-1" tabindex="-1"><a class="header-anchor" href="#指定窗口大小-1"><span>指定窗口大小</span></a></h6><p>在指定窗口大小的情况下，本函数会把输入数据划分为若干个窗口计算一致性。</p><p>输入序列:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d1.s1|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|          100.0|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|          101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|          102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|          104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|          108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|          112.0|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|          113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|          114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|          116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|          118.0|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|          120.0|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|          124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|            NaN|</span>
<span class="line">|2020-01-01T00:00:32.000+08:00|          130.0|</span>
<span class="line">|2020-01-01T00:00:34.000+08:00|          132.0|</span>
<span class="line">|2020-01-01T00:00:36.000+08:00|          134.0|</span>
<span class="line">|2020-01-01T00:00:38.000+08:00|          136.0|</span>
<span class="line">|2020-01-01T00:00:40.000+08:00|          138.0|</span>
<span class="line">|2020-01-01T00:00:42.000+08:00|          140.0|</span>
<span class="line">|2020-01-01T00:00:44.000+08:00|          142.0|</span>
<span class="line">|2020-01-01T00:00:46.000+08:00|          144.0|</span>
<span class="line">|2020-01-01T00:00:48.000+08:00|          146.0|</span>
<span class="line">|2020-01-01T00:00:50.000+08:00|          148.0|</span>
<span class="line">|2020-01-01T00:00:52.000+08:00|          150.0|</span>
<span class="line">|2020-01-01T00:00:54.000+08:00|          152.0|</span>
<span class="line">|2020-01-01T00:00:56.000+08:00|          154.0|</span>
<span class="line">|2020-01-01T00:00:58.000+08:00|          156.0|</span>
<span class="line">|2020-01-01T00:01:00.000+08:00|          158.0|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> consistency<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;window&quot;</span><span class="token operator">=</span><span class="token string">&quot;15&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">01</span>:<span class="token number">00</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------------------------------------+</span>
<span class="line">|                         Time|consistency(root.test.d1.s1, &quot;window&quot;=&quot;15&quot;)|</span>
<span class="line">+-----------------------------+-------------------------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                         0.9333333333333333|</span>
<span class="line">|2020-01-01T00:00:32.000+08:00|                                        1.0|</span>
<span class="line">+-----------------------------+-------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="timeliness" tabindex="-1"><a class="header-anchor" href="#timeliness"><span>Timeliness</span></a></h3><h4 id="函数简介-2" tabindex="-1"><a class="header-anchor" href="#函数简介-2"><span>函数简介</span></a></h4><p>本函数用于计算时间序列的时效性。将输入序列划分为若干个连续且不重叠的窗口，分别计算每一个窗口的时效性，并输出窗口第一个数据点的时间戳和窗口的时效性。</p><p><strong>函数名：</strong> TIMELINESS</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>参数：</strong></p><ul><li><code>window</code>：窗口大小，它是一个大于0的整数或者一个有单位的正数。前者代表每一个窗口包含的数据点数目，最后一个窗口的数据点数目可能会不足；后者代表窗口的时间跨度，目前支持五种单位，分别是 &#39;ms&#39;（毫秒）、&#39;s&#39;（秒）、&#39;m&#39;（分钟）、&#39;h&#39;（小时）和&#39;d&#39;（天）。缺省情况下，全部输入数据都属于同一个窗口。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为DOUBLE，其中每一个数据点的值的范围都是 [0,1].</p><p><strong>提示：</strong> 只有当窗口内的数据点数目超过10时，才会进行时效性计算。否则，该窗口将被忽略，不做任何输出。</p><h4 id="使用示例-2" tabindex="-1"><a class="header-anchor" href="#使用示例-2"><span>使用示例</span></a></h4><h6 id="参数缺省-2" tabindex="-1"><a class="header-anchor" href="#参数缺省-2"><span>参数缺省</span></a></h6><p>在参数缺省的情况下，本函数将会把全部输入数据都作为同一个窗口计算时效性。</p><p>输入序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d1.s1|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|          100.0|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|          101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|          102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|          104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|          108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|          112.0|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|          113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|          114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|          116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|          118.0|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|          120.0|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|          124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|            NaN|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> timeliness<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------------------+</span>
<span class="line">|                         Time|timeliness(root.test.d1.s1)|</span>
<span class="line">+-----------------------------+---------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|         0.9333333333333333|</span>
<span class="line">+-----------------------------+---------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="指定窗口大小-2" tabindex="-1"><a class="header-anchor" href="#指定窗口大小-2"><span>指定窗口大小</span></a></h6><p>在指定窗口大小的情况下，本函数会把输入数据划分为若干个窗口计算时效性。</p><p>输入序列:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d1.s1|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|          100.0|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|          101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|          102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|          104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|          108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|          112.0|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|          113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|          114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|          116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|          118.0|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|          120.0|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|          124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|            NaN|</span>
<span class="line">|2020-01-01T00:00:32.000+08:00|          130.0|</span>
<span class="line">|2020-01-01T00:00:34.000+08:00|          132.0|</span>
<span class="line">|2020-01-01T00:00:36.000+08:00|          134.0|</span>
<span class="line">|2020-01-01T00:00:38.000+08:00|          136.0|</span>
<span class="line">|2020-01-01T00:00:40.000+08:00|          138.0|</span>
<span class="line">|2020-01-01T00:00:42.000+08:00|          140.0|</span>
<span class="line">|2020-01-01T00:00:44.000+08:00|          142.0|</span>
<span class="line">|2020-01-01T00:00:46.000+08:00|          144.0|</span>
<span class="line">|2020-01-01T00:00:48.000+08:00|          146.0|</span>
<span class="line">|2020-01-01T00:00:50.000+08:00|          148.0|</span>
<span class="line">|2020-01-01T00:00:52.000+08:00|          150.0|</span>
<span class="line">|2020-01-01T00:00:54.000+08:00|          152.0|</span>
<span class="line">|2020-01-01T00:00:56.000+08:00|          154.0|</span>
<span class="line">|2020-01-01T00:00:58.000+08:00|          156.0|</span>
<span class="line">|2020-01-01T00:01:00.000+08:00|          158.0|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> timeliness<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;window&quot;</span><span class="token operator">=</span><span class="token string">&quot;15&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">01</span>:<span class="token number">00</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+------------------------------------------+</span>
<span class="line">|                         Time|timeliness(root.test.d1.s1, &quot;window&quot;=&quot;15&quot;)|</span>
<span class="line">+-----------------------------+------------------------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                        0.9333333333333333|</span>
<span class="line">|2020-01-01T00:00:32.000+08:00|                                       1.0|</span>
<span class="line">+-----------------------------+------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="validity" tabindex="-1"><a class="header-anchor" href="#validity"><span>Validity</span></a></h3><h4 id="函数简介-3" tabindex="-1"><a class="header-anchor" href="#函数简介-3"><span>函数简介</span></a></h4><p>本函数用于计算时间序列的有效性。将输入序列划分为若干个连续且不重叠的窗口，分别计算每一个窗口的有效性，并输出窗口第一个数据点的时间戳和窗口的有效性。</p><p><strong>函数名：</strong> VALIDITY</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>参数：</strong></p><ul><li><code>window</code>：窗口大小，它是一个大于0的整数或者一个有单位的正数。前者代表每一个窗口包含的数据点数目，最后一个窗口的数据点数目可能会不足；后者代表窗口的时间跨度，目前支持五种单位，分别是 &#39;ms&#39;（毫秒）、&#39;s&#39;（秒）、&#39;m&#39;（分钟）、&#39;h&#39;（小时）和&#39;d&#39;（天）。缺省情况下，全部输入数据都属于同一个窗口。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型为DOUBLE，其中每一个数据点的值的范围都是 [0,1].</p><p><strong>提示：</strong> 只有当窗口内的数据点数目超过10时，才会进行有效性计算。否则，该窗口将被忽略，不做任何输出。</p><h4 id="使用示例-3" tabindex="-1"><a class="header-anchor" href="#使用示例-3"><span>使用示例</span></a></h4><h6 id="参数缺省-3" tabindex="-1"><a class="header-anchor" href="#参数缺省-3"><span>参数缺省</span></a></h6><p>在参数缺省的情况下，本函数将会把全部输入数据都作为同一个窗口计算有效性。</p><p>输入序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d1.s1|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|          100.0|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|          101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|          102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|          104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|          108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|          112.0|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|          113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|          114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|          116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|          118.0|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|          120.0|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|          124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|            NaN|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> validity<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------------------+</span>
<span class="line">|                         Time|validity(root.test.d1.s1)|</span>
<span class="line">+-----------------------------+-------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|       0.8833333333333333|</span>
<span class="line">+-----------------------------+-------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="指定窗口大小-3" tabindex="-1"><a class="header-anchor" href="#指定窗口大小-3"><span>指定窗口大小</span></a></h6><p>在指定窗口大小的情况下，本函数会把输入数据划分为若干个窗口计算有效性。</p><p>输入序列:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d1.s1|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|          100.0|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|          101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|          102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|          104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|          108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|          112.0|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|          113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|          114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|          116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|          118.0|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|          120.0|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|          124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|            NaN|</span>
<span class="line">|2020-01-01T00:00:32.000+08:00|          130.0|</span>
<span class="line">|2020-01-01T00:00:34.000+08:00|          132.0|</span>
<span class="line">|2020-01-01T00:00:36.000+08:00|          134.0|</span>
<span class="line">|2020-01-01T00:00:38.000+08:00|          136.0|</span>
<span class="line">|2020-01-01T00:00:40.000+08:00|          138.0|</span>
<span class="line">|2020-01-01T00:00:42.000+08:00|          140.0|</span>
<span class="line">|2020-01-01T00:00:44.000+08:00|          142.0|</span>
<span class="line">|2020-01-01T00:00:46.000+08:00|          144.0|</span>
<span class="line">|2020-01-01T00:00:48.000+08:00|          146.0|</span>
<span class="line">|2020-01-01T00:00:50.000+08:00|          148.0|</span>
<span class="line">|2020-01-01T00:00:52.000+08:00|          150.0|</span>
<span class="line">|2020-01-01T00:00:54.000+08:00|          152.0|</span>
<span class="line">|2020-01-01T00:00:56.000+08:00|          154.0|</span>
<span class="line">|2020-01-01T00:00:58.000+08:00|          156.0|</span>
<span class="line">|2020-01-01T00:01:00.000+08:00|          158.0|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> validity<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;window&quot;</span><span class="token operator">=</span><span class="token string">&quot;15&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">01</span>:<span class="token number">00</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+----------------------------------------+</span>
<span class="line">|                         Time|validity(root.test.d1.s1, &quot;window&quot;=&quot;15&quot;)|</span>
<span class="line">+-----------------------------+----------------------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                      0.8833333333333333|</span>
<span class="line">|2020-01-01T00:00:32.000+08:00|                                     1.0|</span>
<span class="line">+-----------------------------+----------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="accuracy" tabindex="-1"><a class="header-anchor" href="#accuracy"><span>Accuracy</span></a></h3><h4 id="函数简介-4" tabindex="-1"><a class="header-anchor" href="#函数简介-4"><span>函数简介</span></a></h4><p>本函数基于主数据计算原始时间序列的准确性。</p><p><strong>函数名</strong>：Accuracy</p><p><strong>输入序列：</strong> 支持多个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数：</strong></p><ul><li><code>omega</code>：算法窗口大小，非负整数（单位为毫秒）， 在缺省情况下，算法根据不同时间差下的两个元组距离自动估计该参数。</li><li><code>eta</code>：算法距离阈值，正数， 在缺省情况下，算法根据窗口中元组的距离分布自动估计该参数。</li><li><code>k</code>：主数据中的近邻数量，正整数， 在缺省情况下，算法根据主数据中的k个近邻的元组距离自动估计该参数。</li></ul><p><strong>输出序列</strong>：输出单个值，类型为DOUBLE，值的范围为[0,1]。</p><h4 id="使用示例-4" tabindex="-1"><a class="header-anchor" href="#使用示例-4"><span>使用示例</span></a></h4><p>输入序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+------------+------------+------------+------------+------------+------------+</span>
<span class="line">|                         Time|root.test.t1|root.test.t2|root.test.t3|root.test.m1|root.test.m2|root.test.m3|</span>
<span class="line">+-----------------------------+------------+------------+------------+------------+------------+------------+</span>
<span class="line">|2021-07-01T12:00:01.000+08:00|        1704|     1154.55|       0.195|        1704|     1154.55|       0.195|</span>
<span class="line">|2021-07-01T12:00:02.000+08:00|        1702|     1152.30|       0.193|        1702|     1152.30|       0.193|</span>
<span class="line">|2021-07-01T12:00:03.000+08:00|        1702|     1148.65|       0.192|        1702|     1148.65|       0.192|</span>
<span class="line">|2021-07-01T12:00:04.000+08:00|        1701|     1145.20|       0.194|        1701|     1145.20|       0.194|</span>
<span class="line">|2021-07-01T12:00:07.000+08:00|        1703|     1150.55|       0.195|        1703|     1150.55|       0.195|</span>
<span class="line">|2021-07-01T12:00:08.000+08:00|        1694|     1151.55|       0.193|        1704|     1151.55|       0.193|</span>
<span class="line">|2021-07-01T12:01:09.000+08:00|        1705|     1153.55|       0.194|        1705|     1153.55|       0.194|</span>
<span class="line">|2021-07-01T12:01:10.000+08:00|        1706|     1152.30|       0.190|        1706|     1152.30|       0.190|</span>
<span class="line">+-----------------------------+------------+------------+------------+------------+------------+------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> Accuracy<span class="token punctuation">(</span>t1<span class="token punctuation">,</span>t2<span class="token punctuation">,</span>t3<span class="token punctuation">,</span>m1<span class="token punctuation">,</span>m2<span class="token punctuation">,</span>m3<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------------------------------------------------------------------------------+</span>
<span class="line">|                         Time|Accuracy(root.test.t1,root.test.t2,root.test.t3,root.test.m1,root.test.m2,root.test.m3)|</span>
<span class="line">+-----------------------------+---------------------------------------------------------------------------------------+</span>
<span class="line">|2021-07-01T12:00:01.000+08:00|                                                                                  0.875|</span>
<span class="line">+-----------------------------+---------------------------------------------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,120)]))}const d=n(i,[["render",p],["__file","Data-Quality.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Operators-Functions/Data-Quality.html","title":"","lang":"zh-CN","frontmatter":{"description":"数据质量 Completeness 函数简介 本函数用于计算时间序列的完整性。将输入序列划分为若干个连续且不重叠的窗口，分别计算每一个窗口的完整性，并输出窗口第一个数据点的时间戳和窗口的完整性。 函数名： COMPLETENESS 输入序列： 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。 参数： windo...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Operators-Functions/Data-Quality.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Operators-Functions/Data-Quality.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"数据质量 Completeness 函数简介 本函数用于计算时间序列的完整性。将输入序列划分为若干个连续且不重叠的窗口，分别计算每一个窗口的完整性，并输出窗口第一个数据点的时间戳和窗口的完整性。 函数名： COMPLETENESS 输入序列： 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。 参数： windo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据质量","slug":"数据质量","link":"#数据质量","children":[{"level":3,"title":"Completeness","slug":"completeness","link":"#completeness","children":[]},{"level":3,"title":"Consistency","slug":"consistency","link":"#consistency","children":[]},{"level":3,"title":"Timeliness","slug":"timeliness","link":"#timeliness","children":[]},{"level":3,"title":"Validity","slug":"validity","link":"#validity","children":[]},{"level":3,"title":"Accuracy","slug":"accuracy","link":"#accuracy","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":12.86,"words":3858},"filePathRelative":"zh/UserGuide/V1.1.x/Operators-Functions/Data-Quality.md","localizedDate":"2023年7月10日","autoDesc":true}');export{d as comp,r as data};
