import{_ as n,c as a,b as e,o as i}from"./app-BHE9oQwv.js";const l={};function p(d,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h2 id="数据修复" tabindex="-1"><a class="header-anchor" href="#数据修复"><span>数据修复</span></a></h2><h3 id="timestamprepair" tabindex="-1"><a class="header-anchor" href="#timestamprepair"><span>TimestampRepair</span></a></h3><h4 id="函数简介" tabindex="-1"><a class="header-anchor" href="#函数简介"><span>函数简介</span></a></h4><p>本函数用于时间戳修复。根据给定的标准时间间隔，采用最小化修复代价的方法，通过对数据时间戳的微调，将原本时间戳间隔不稳定的数据修复为严格等间隔的数据。在未给定标准时间间隔的情况下，本函数将使用时间间隔的中位数 (median)、众数 (mode) 或聚类中心 (cluster) 来推算标准时间间隔。</p><p><strong>函数名：</strong> TIMESTAMPREPAIR</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>参数：</strong></p><ul><li><code>interval</code>: 标准时间间隔（单位是毫秒），是一个正整数。在缺省情况下，将根据指定的方法推算。</li><li><code>method</code>：推算标准时间间隔的方法，取值为 &#39;median&#39;, &#39;mode&#39; 或 &#39;cluster&#39;，仅在<code>interval</code>缺省时有效。在缺省情况下，将使用中位数方法进行推算。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型与输入序列相同。该序列是修复后的输入序列。</p><h4 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h4><h5 id="指定标准时间间隔" tabindex="-1"><a class="header-anchor" href="#指定标准时间间隔"><span>指定标准时间间隔</span></a></h5><p>在给定<code>interval</code>参数的情况下，本函数将按照指定的标准时间间隔进行修复。</p><p>输入序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d2.s1|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2021-07-01T12:00:00.000+08:00|            1.0|</span>
<span class="line">|2021-07-01T12:00:10.000+08:00|            2.0|</span>
<span class="line">|2021-07-01T12:00:19.000+08:00|            3.0|</span>
<span class="line">|2021-07-01T12:00:30.000+08:00|            4.0|</span>
<span class="line">|2021-07-01T12:00:40.000+08:00|            5.0|</span>
<span class="line">|2021-07-01T12:00:50.000+08:00|            6.0|</span>
<span class="line">|2021-07-01T12:01:01.000+08:00|            7.0|</span>
<span class="line">|2021-07-01T12:01:11.000+08:00|            8.0|</span>
<span class="line">|2021-07-01T12:01:21.000+08:00|            9.0|</span>
<span class="line">|2021-07-01T12:01:31.000+08:00|           10.0|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的SQL语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> timestamprepair<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&#39;interval&#39;</span><span class="token operator">=</span><span class="token string">&#39;10000&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+----------------------------------------------------+</span>
<span class="line">|                         Time|timestamprepair(root.test.d2.s1, &quot;interval&quot;=&quot;10000&quot;)|</span>
<span class="line">+-----------------------------+----------------------------------------------------+</span>
<span class="line">|2021-07-01T12:00:00.000+08:00|                                                 1.0|</span>
<span class="line">|2021-07-01T12:00:10.000+08:00|                                                 2.0|</span>
<span class="line">|2021-07-01T12:00:20.000+08:00|                                                 3.0|</span>
<span class="line">|2021-07-01T12:00:30.000+08:00|                                                 4.0|</span>
<span class="line">|2021-07-01T12:00:40.000+08:00|                                                 5.0|</span>
<span class="line">|2021-07-01T12:00:50.000+08:00|                                                 6.0|</span>
<span class="line">|2021-07-01T12:01:00.000+08:00|                                                 7.0|</span>
<span class="line">|2021-07-01T12:01:10.000+08:00|                                                 8.0|</span>
<span class="line">|2021-07-01T12:01:20.000+08:00|                                                 9.0|</span>
<span class="line">|2021-07-01T12:01:30.000+08:00|                                                10.0|</span>
<span class="line">+-----------------------------+----------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="自动推算标准时间间隔" tabindex="-1"><a class="header-anchor" href="#自动推算标准时间间隔"><span>自动推算标准时间间隔</span></a></h5><p>如果<code>interval</code>参数没有给定，本函数将按照推算的标准时间间隔进行修复。</p><p>输入序列同上，用于查询的 SQL 语句如下：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> timestamprepair<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+--------------------------------+</span>
<span class="line">|                         Time|timestamprepair(root.test.d2.s1)|</span>
<span class="line">+-----------------------------+--------------------------------+</span>
<span class="line">|2021-07-01T12:00:00.000+08:00|                             1.0|</span>
<span class="line">|2021-07-01T12:00:10.000+08:00|                             2.0|</span>
<span class="line">|2021-07-01T12:00:20.000+08:00|                             3.0|</span>
<span class="line">|2021-07-01T12:00:30.000+08:00|                             4.0|</span>
<span class="line">|2021-07-01T12:00:40.000+08:00|                             5.0|</span>
<span class="line">|2021-07-01T12:00:50.000+08:00|                             6.0|</span>
<span class="line">|2021-07-01T12:01:00.000+08:00|                             7.0|</span>
<span class="line">|2021-07-01T12:01:10.000+08:00|                             8.0|</span>
<span class="line">|2021-07-01T12:01:20.000+08:00|                             9.0|</span>
<span class="line">|2021-07-01T12:01:30.000+08:00|                            10.0|</span>
<span class="line">+-----------------------------+--------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="valuefill" tabindex="-1"><a class="header-anchor" href="#valuefill"><span>ValueFill</span></a></h3><h4 id="函数简介-1" tabindex="-1"><a class="header-anchor" href="#函数简介-1"><span>函数简介</span></a></h4><p><strong>函数名：</strong> ValueFill</p><p><strong>输入序列：</strong> 单列时序数据，类型为INT32 / INT64 / FLOAT / DOUBLE</p><p><strong>参数：</strong></p><ul><li><code>method</code>: {&quot;mean&quot;, &quot;previous&quot;, &quot;linear&quot;, &quot;likelihood&quot;, &quot;AR&quot;, &quot;MA&quot;, &quot;SCREEN&quot;}, 默认为 &quot;linear&quot;。其中，“mean” 指使用均值填补的方法； “previous&quot; 指使用前值填补方法；“linear&quot; 指使用线性插值填补方法；“likelihood” 为基于速度的正态分布的极大似然估计方法；“AR” 指自回归的填补方法；“MA” 指滑动平均的填补方法；&quot;SCREEN&quot; 指约束填补方法；缺省情况下使用 “linear”。</li></ul><p><strong>输出序列：</strong> 填补后的单维序列。</p><p><strong>备注：</strong> AR 模型采用 AR(1)，时序列需满足自相关条件，否则将输出单个数据点 (0, 0.0).</p><h4 id="使用示例-1" tabindex="-1"><a class="header-anchor" href="#使用示例-1"><span>使用示例</span></a></h4><h5 id="使用-linear-方法进行填补" tabindex="-1"><a class="header-anchor" href="#使用-linear-方法进行填补"><span>使用 linear 方法进行填补</span></a></h5><p>当<code>method</code>缺省或取值为 &#39;linear&#39; 时，本函数将使用线性插值方法进行填补。</p><p>输入序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d2.s1|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|            NaN|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|          101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|          102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|          104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|          108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|            NaN|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|          113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|          114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|          116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|            NaN|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|            NaN|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|          124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|          128.0|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> valuefill<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-----------------------+</span>
<span class="line">|                         Time|valuefill(root.test.d2)|</span>
<span class="line">+-----------------------------+-----------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                    NaN|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|                  101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|                  102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|                  104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|                  126.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|                  108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|                  108.0|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|                  113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|                  114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|                  116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|                  118.7|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|                  121.3|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|                  124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|                  126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|                  128.0|</span>
<span class="line">+-----------------------------+-----------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用-previous-方法进行填补" tabindex="-1"><a class="header-anchor" href="#使用-previous-方法进行填补"><span>使用 previous 方法进行填补</span></a></h5><p>当<code>method</code>取值为 &#39;previous&#39; 时，本函数将使前值填补方法进行数值填补。</p><p>输入序列同上，用于查询的 SQL 语句如下：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> valuefill<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&quot;method&quot;</span><span class="token operator">=</span><span class="token string">&quot;previous&quot;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------------------------------------+</span>
<span class="line">|                         Time|valuefill(root.test.d2,&quot;method&quot;=&quot;previous&quot;)|</span>
<span class="line">+-----------------------------+-------------------------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                                        NaN|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|                                      101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|                                      102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|                                      104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|                                      126.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|                                      108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|                                      110.5|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|                                      113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|                                      114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|                                      116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|                                      116.0|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|                                      116.0|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|                                      124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|                                      126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|                                      128.0|</span>
<span class="line">+-----------------------------+-------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="valuerepair" tabindex="-1"><a class="header-anchor" href="#valuerepair"><span>ValueRepair</span></a></h3><h4 id="函数简介-2" tabindex="-1"><a class="header-anchor" href="#函数简介-2"><span>函数简介</span></a></h4><p>本函数用于对时间序列的数值进行修复。目前，本函数支持两种修复方法：<strong>Screen</strong> 是一种基于速度阈值的方法，在最小改动的前提下使得所有的速度符合阈值要求；<strong>LsGreedy</strong> 是一种基于速度变化似然的方法，将速度变化建模为高斯分布，并采用贪心算法极大化似然函数。</p><p><strong>函数名：</strong> VALUEREPAIR</p><p><strong>输入序列：</strong> 仅支持单个输入序列，类型为 INT32 / INT64 / FLOAT / DOUBLE。</p><p><strong>参数：</strong></p><ul><li><code>method</code>：修复时采用的方法，取值为 &#39;Screen&#39; 或 &#39;LsGreedy&#39;. 在缺省情况下，使用 Screen 方法进行修复。</li><li><code>minSpeed</code>：该参数仅在使用 Screen 方法时有效。当速度小于该值时会被视作数值异常点加以修复。在缺省情况下为中位数减去三倍绝对中位差。</li><li><code>maxSpeed</code>：该参数仅在使用 Screen 方法时有效。当速度大于该值时会被视作数值异常点加以修复。在缺省情况下为中位数加上三倍绝对中位差。</li><li><code>center</code>：该参数仅在使用 LsGreedy 方法时有效。对速度变化分布建立的高斯模型的中心。在缺省情况下为 0。</li><li><code>sigma</code> ：该参数仅在使用 LsGreedy 方法时有效。对速度变化分布建立的高斯模型的标准差。在缺省情况下为绝对中位差。</li></ul><p><strong>输出序列：</strong> 输出单个序列，类型与输入序列相同。该序列是修复后的输入序列。</p><p><strong>提示：</strong> 输入序列中的<code>NaN</code>在修复之前会先进行线性插值填补。</p><h4 id="使用示例-2" tabindex="-1"><a class="header-anchor" href="#使用示例-2"><span>使用示例</span></a></h4><h5 id="使用-screen-方法进行修复" tabindex="-1"><a class="header-anchor" href="#使用-screen-方法进行修复"><span>使用 Screen 方法进行修复</span></a></h5><p>当<code>method</code>缺省或取值为 &#39;Screen&#39; 时，本函数将使用 Screen 方法进行数值修复。</p><p>输入序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+---------------+</span>
<span class="line">|                         Time|root.test.d2.s1|</span>
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
<span class="line">|2020-01-01T00:00:22.000+08:00|          100.0|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|          124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|          126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|            NaN|</span>
<span class="line">+-----------------------------+---------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用于查询的 SQL 语句：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> valuerepair<span class="token punctuation">(</span>s1<span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+----------------------------+</span>
<span class="line">|                         Time|valuerepair(root.test.d2.s1)|</span>
<span class="line">+-----------------------------+----------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                       100.0|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|                       101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|                       102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|                       104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|                       106.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|                       108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|                       112.0|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|                       113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|                       114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|                       116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|                       118.0|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|                       120.0|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|                       124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|                       126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|                       128.0|</span>
<span class="line">+-----------------------------+----------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="使用-lsgreedy-方法进行修复" tabindex="-1"><a class="header-anchor" href="#使用-lsgreedy-方法进行修复"><span>使用 LsGreedy 方法进行修复</span></a></h5><p>当<code>method</code>取值为 &#39;LsGreedy&#39; 时，本函数将使用 LsGreedy 方法进行数值修复。</p><p>输入序列同上，用于查询的 SQL 语句如下：</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">select</span> valuerepair<span class="token punctuation">(</span>s1<span class="token punctuation">,</span><span class="token string">&#39;method&#39;</span><span class="token operator">=</span><span class="token string">&#39;LsGreedy&#39;</span><span class="token punctuation">)</span> <span class="token keyword">from</span> root<span class="token punctuation">.</span>test<span class="token punctuation">.</span>d2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>输出序列：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+-----------------------------+-------------------------------------------------+</span>
<span class="line">|                         Time|valuerepair(root.test.d2.s1, &quot;method&quot;=&quot;LsGreedy&quot;)|</span>
<span class="line">+-----------------------------+-------------------------------------------------+</span>
<span class="line">|2020-01-01T00:00:02.000+08:00|                                            100.0|</span>
<span class="line">|2020-01-01T00:00:03.000+08:00|                                            101.0|</span>
<span class="line">|2020-01-01T00:00:04.000+08:00|                                            102.0|</span>
<span class="line">|2020-01-01T00:00:06.000+08:00|                                            104.0|</span>
<span class="line">|2020-01-01T00:00:08.000+08:00|                                            106.0|</span>
<span class="line">|2020-01-01T00:00:10.000+08:00|                                            108.0|</span>
<span class="line">|2020-01-01T00:00:14.000+08:00|                                            112.0|</span>
<span class="line">|2020-01-01T00:00:15.000+08:00|                                            113.0|</span>
<span class="line">|2020-01-01T00:00:16.000+08:00|                                            114.0|</span>
<span class="line">|2020-01-01T00:00:18.000+08:00|                                            116.0|</span>
<span class="line">|2020-01-01T00:00:20.000+08:00|                                            118.0|</span>
<span class="line">|2020-01-01T00:00:22.000+08:00|                                            120.0|</span>
<span class="line">|2020-01-01T00:00:26.000+08:00|                                            124.0|</span>
<span class="line">|2020-01-01T00:00:28.000+08:00|                                            126.0|</span>
<span class="line">|2020-01-01T00:00:30.000+08:00|                                            128.0|</span>
<span class="line">+-----------------------------+-------------------------------------------------+</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,71)]))}const c=n(l,[["render",p],["__file","Data-Repairing.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/UDF-Library/Data-Repairing.html","title":"","lang":"zh-CN","frontmatter":{"description":"数据修复 TimestampRepair 函数简介 本函数用于时间戳修复。根据给定的标准时间间隔，采用最小化修复代价的方法，通过对数据时间戳的微调，将原本时间戳间隔不稳定的数据修复为严格等间隔的数据。在未给定标准时间间隔的情况下，本函数将使用时间间隔的中位数 (median)、众数 (mode) 或聚类中心 (cluster) 来推算标准时间间隔。 函...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/UDF-Library/Data-Repairing.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/UDF-Library/Data-Repairing.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"数据修复 TimestampRepair 函数简介 本函数用于时间戳修复。根据给定的标准时间间隔，采用最小化修复代价的方法，通过对数据时间戳的微调，将原本时间戳间隔不稳定的数据修复为严格等间隔的数据。在未给定标准时间间隔的情况下，本函数将使用时间间隔的中位数 (median)、众数 (mode) 或聚类中心 (cluster) 来推算标准时间间隔。 函..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"数据修复","slug":"数据修复","link":"#数据修复","children":[{"level":3,"title":"TimestampRepair","slug":"timestamprepair","link":"#timestamprepair","children":[]},{"level":3,"title":"ValueFill","slug":"valuefill","link":"#valuefill","children":[]},{"level":3,"title":"ValueRepair","slug":"valuerepair","link":"#valuerepair","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":7.78,"words":2335},"filePathRelative":"zh/UserGuide/V0.13.x/UDF-Library/Data-Repairing.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,r as data};