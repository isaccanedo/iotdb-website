import{_ as n,c as e,b as a,o as i}from"./app-BHE9oQwv.js";const l={};function t(p,s){return i(),e("div",null,s[0]||(s[0]=[a(`<h1 id="data-quality" tabindex="-1"><a class="header-anchor" href="#data-quality"><span>Data Quality</span></a></h1><h2 id="completeness" tabindex="-1"><a class="header-anchor" href="#completeness"><span>Completeness</span></a></h2><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h3><p>This function is used to calculate the completeness of time series. The input series are divided into several continuous and non overlapping windows. The timestamp of the first data point and the completeness of each window will be output.</p><p><strong>Name:</strong> COMPLETENESS</p><p><strong>Input Series:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>window</code>: The size of each window. It is a positive integer or a positive number with an unit. The former is the number of data points in each window. The number of data points in the last window may be less than it. The latter is the time of the window. The unit is &#39;ms&#39; for millisecond, &#39;s&#39; for second, &#39;m&#39; for minute, &#39;h&#39; for hour and &#39;d&#39; for day. By default, all input data belongs to the same window.</li><li><code>downtime</code>: Whether the downtime exception is considered in the calculation of completeness. It is &#39;true&#39; or &#39;false&#39; (default). When considering the downtime exception, long-term missing data will be considered as downtime exception without any influence on completeness.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE. The range of each value is [0,1].</p><p><strong>Note:</strong> Only when the number of data points in the window exceeds 10, the calculation will be performed. Otherwise, the window will be ignored and nothing will be output.</p><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3><h4 id="default-parameters" tabindex="-1"><a class="header-anchor" href="#default-parameters"><span>Default Parameters</span></a></h4><p>With default parameters, this function will regard all input data as the same window.</p><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> completeness<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------------------+</span>
<span class="line">|                         Time|completeness(root.test.d1.s1)|</span>
<span class="line">+-----------------------------+-----------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                        0.875|</span>
<span class="line">+-----------------------------+-----------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="specific-window-size" tabindex="-1"><a class="header-anchor" href="#specific-window-size"><span>Specific Window Size</span></a></h4><p>When the window size is given, this function will divide the input data as multiple windows.</p><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> completeness<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;window&quot;</span><span class="token operator">=</span><span class="token string">&quot;15&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">01</span>:<span class="token number">00</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------------------------------------+</span>
<span class="line">|                         Time|completeness(root.test.d1.s1, &quot;window&quot;=&quot;15&quot;)|</span>
<span class="line">+-----------------------------+--------------------------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                                       0.875|</span>
<span class="line">|2020-01-01T00:00:32.000+08:00|                                         1.0|</span>
<span class="line">+-----------------------------+--------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="consistency" tabindex="-1"><a class="header-anchor" href="#consistency"><span>Consistency</span></a></h2><h3 id="usage-1" tabindex="-1"><a class="header-anchor" href="#usage-1"><span>Usage</span></a></h3><p>This function is used to calculate the consistency of time series. The input series are divided into several continuous and non overlapping windows. The timestamp of the first data point and the consistency of each window will be output.</p><p><strong>Name:</strong> CONSISTENCY</p><p><strong>Input Series:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>window</code>: The size of each window. It is a positive integer or a positive number with an unit. The former is the number of data points in each window. The number of data points in the last window may be less than it. The latter is the time of the window. The unit is &#39;ms&#39; for millisecond, &#39;s&#39; for second, &#39;m&#39; for minute, &#39;h&#39; for hour and &#39;d&#39; for day. By default, all input data belongs to the same window.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE. The range of each value is [0,1].</p><p><strong>Note:</strong> Only when the number of data points in the window exceeds 10, the calculation will be performed. Otherwise, the window will be ignored and nothing will be output.</p><h3 id="examples-1" tabindex="-1"><a class="header-anchor" href="#examples-1"><span>Examples</span></a></h3><h4 id="default-parameters-1" tabindex="-1"><a class="header-anchor" href="#default-parameters-1"><span>Default Parameters</span></a></h4><p>With default parameters, this function will regard all input data as the same window.</p><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> consistency<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+----------------------------+</span>
<span class="line">|                         Time|consistency(root.test.d1.s1)|</span>
<span class="line">+-----------------------------+----------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|          0.9333333333333333|</span>
<span class="line">+-----------------------------+----------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="specific-window-size-1" tabindex="-1"><a class="header-anchor" href="#specific-window-size-1"><span>Specific Window Size</span></a></h4><p>When the window size is given, this function will divide the input data as multiple windows.</p><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> consistency<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;window&quot;</span><span class="token operator">=</span><span class="token string">&quot;15&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">01</span>:<span class="token number">00</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------------------------------------+</span>
<span class="line">|                         Time|consistency(root.test.d1.s1, &quot;window&quot;=&quot;15&quot;)|</span>
<span class="line">+-----------------------------+-------------------------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                         0.9333333333333333|</span>
<span class="line">|2020-01-01T00:00:32.000+08:00|                                        1.0|</span>
<span class="line">+-----------------------------+-------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="timeliness" tabindex="-1"><a class="header-anchor" href="#timeliness"><span>Timeliness</span></a></h2><h3 id="usage-2" tabindex="-1"><a class="header-anchor" href="#usage-2"><span>Usage</span></a></h3><p>This function is used to calculate the timeliness of time series. The input series are divided into several continuous and non overlapping windows. The timestamp of the first data point and the timeliness of each window will be output.</p><p><strong>Name:</strong> TIMELINESS</p><p><strong>Input Series:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>window</code>: The size of each window. It is a positive integer or a positive number with an unit. The former is the number of data points in each window. The number of data points in the last window may be less than it. The latter is the time of the window. The unit is &#39;ms&#39; for millisecond, &#39;s&#39; for second, &#39;m&#39; for minute, &#39;h&#39; for hour and &#39;d&#39; for day. By default, all input data belongs to the same window.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE. The range of each value is [0,1].</p><p><strong>Note:</strong> Only when the number of data points in the window exceeds 10, the calculation will be performed. Otherwise, the window will be ignored and nothing will be output.</p><h3 id="examples-2" tabindex="-1"><a class="header-anchor" href="#examples-2"><span>Examples</span></a></h3><h4 id="default-parameters-2" tabindex="-1"><a class="header-anchor" href="#default-parameters-2"><span>Default Parameters</span></a></h4><p>With default parameters, this function will regard all input data as the same window.</p><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> timeliness<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------------------+</span>
<span class="line">|                         Time|timeliness(root.test.d1.s1)|</span>
<span class="line">+-----------------------------+---------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|         0.9333333333333333|</span>
<span class="line">+-----------------------------+---------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="specific-window-size-2" tabindex="-1"><a class="header-anchor" href="#specific-window-size-2"><span>Specific Window Size</span></a></h4><p>When the window size is given, this function will divide the input data as multiple windows.</p><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> timeliness<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;window&quot;</span><span class="token operator">=</span><span class="token string">&quot;15&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">01</span>:<span class="token number">00</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+------------------------------------------+</span>
<span class="line">|                         Time|timeliness(root.test.d1.s1, &quot;window&quot;=&quot;15&quot;)|</span>
<span class="line">+-----------------------------+------------------------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                        0.9333333333333333|</span>
<span class="line">|2020-01-01T00:00:32.000+08:00|                                       1.0|</span>
<span class="line">+-----------------------------+------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="validity" tabindex="-1"><a class="header-anchor" href="#validity"><span>Validity</span></a></h2><h3 id="usage-3" tabindex="-1"><a class="header-anchor" href="#usage-3"><span>Usage</span></a></h3><p>This function is used to calculate the Validity of time series. The input series are divided into several continuous and non overlapping windows. The timestamp of the first data point and the Validity of each window will be output.</p><p><strong>Name:</strong> VALIDITY</p><p><strong>Input Series:</strong> Only support a single input series. The type is INT32 / INT64 / FLOAT / DOUBLE.</p><p><strong>Parameters:</strong></p><ul><li><code>window</code>: The size of each window. It is a positive integer or a positive number with an unit. The former is the number of data points in each window. The number of data points in the last window may be less than it. The latter is the time of the window. The unit is &#39;ms&#39; for millisecond, &#39;s&#39; for second, &#39;m&#39; for minute, &#39;h&#39; for hour and &#39;d&#39; for day. By default, all input data belongs to the same window.</li></ul><p><strong>Output Series:</strong> Output a single series. The type is DOUBLE. The range of each value is [0,1].</p><p><strong>Note:</strong> Only when the number of data points in the window exceeds 10, the calculation will be performed. Otherwise, the window will be ignored and nothing will be output.</p><h3 id="examples-3" tabindex="-1"><a class="header-anchor" href="#examples-3"><span>Examples</span></a></h3><h4 id="default-parameters-3" tabindex="-1"><a class="header-anchor" href="#default-parameters-3"><span>Default Parameters</span></a></h4><p>With default parameters, this function will regard all input data as the same window.</p><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> Validity<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">00</span>:<span class="token number">30</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------------------+</span>
<span class="line">|                         Time|validity(root.test.d1.s1)|</span>
<span class="line">+-----------------------------+-------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|       0.8833333333333333|</span>
<span class="line">+-----------------------------+-------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="specific-window-size-3" tabindex="-1"><a class="header-anchor" href="#specific-window-size-3"><span>Specific Window Size</span></a></h4><p>When the window size is given, this function will divide the input data as multiple windows.</p><p>Input series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SQL for query:</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> Validity<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;window&quot;</span><span class="token operator">=</span><span class="token string">&quot;15&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d1 <span class="token keyword">where</span> <span class="token keyword">time</span> <span class="token operator">&lt;=</span> <span class="token number">2020</span><span class="token operator">-</span><span class="token number">01</span><span class="token operator">-</span><span class="token number">01</span> <span class="token number">00</span>:<span class="token number">01</span>:<span class="token number">00</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Output series:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+----------------------------------------+</span>
<span class="line">|                         Time|validity(root.test.d1.s1, &quot;window&quot;=&quot;15&quot;)|</span>
<span class="line">+-----------------------------+----------------------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                      0.8833333333333333|</span>
<span class="line">|2020-01-01T00:00:32.000+08:00|                                     1.0|</span>
<span class="line">+-----------------------------+----------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,105)]))}const r=n(l,[["render",t],["__file","Data-Quality.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V0.13.x/UDF-Library/Data-Quality.html","title":"Data Quality","lang":"en-US","frontmatter":{"description":"Data Quality Completeness Usage This function is used to calculate the completeness of time series. The input series are divided into several continuous and non overlapping wind...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/UDF-Library/Data-Quality.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V0.13.x/UDF-Library/Data-Quality.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Data Quality"}],["meta",{"property":"og:description","content":"Data Quality Completeness Usage This function is used to calculate the completeness of time series. The input series are divided into several continuous and non overlapping wind..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Data Quality\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Completeness","slug":"completeness","link":"#completeness","children":[{"level":3,"title":"Usage","slug":"usage","link":"#usage","children":[]},{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]},{"level":2,"title":"Consistency","slug":"consistency","link":"#consistency","children":[{"level":3,"title":"Usage","slug":"usage-1","link":"#usage-1","children":[]},{"level":3,"title":"Examples","slug":"examples-1","link":"#examples-1","children":[]}]},{"level":2,"title":"Timeliness","slug":"timeliness","link":"#timeliness","children":[{"level":3,"title":"Usage","slug":"usage-2","link":"#usage-2","children":[]},{"level":3,"title":"Examples","slug":"examples-2","link":"#examples-2","children":[]}]},{"level":2,"title":"Validity","slug":"validity","link":"#validity","children":[{"level":3,"title":"Usage","slug":"usage-3","link":"#usage-3","children":[]},{"level":3,"title":"Examples","slug":"examples-3","link":"#examples-3","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":9.4,"words":2819},"filePathRelative":"UserGuide/V0.13.x/UDF-Library/Data-Quality.md","localizedDate":"July 10, 2023","autoDesc":true}');export{r as comp,c as data};
