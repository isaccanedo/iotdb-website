import{_ as s,c as a,b as e,o as t}from"./app-BHE9oQwv.js";const o={};function p(i,n){return t(),a("div",null,n[0]||(n[0]=[e('<h2 id="tsfile-resource概览工具" tabindex="-1"><a class="header-anchor" href="#tsfile-resource概览工具"><span>TsFile Resource概览工具</span></a></h2><p>TsFile resource概览工具用于打印出TsFile resource文件的内容，工具位置为 tools/tsfile/print-tsfile-resource-files。</p><h3 id="用法" tabindex="-1"><a class="header-anchor" href="#用法"><span>用法</span></a></h3><ul><li>Windows:</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">.<span class="token punctuation">\\</span>print-tsfile-resource-files.bat <span class="token operator">&lt;</span>TsFile resource文件所在的文件夹路径，或者单个TsFile resource文件路径<span class="token operator">&gt;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Linux or MacOs:</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">./print-tsfile-resource-files.sh &lt;TsFile resource文件所在的文件夹路径，或者单个TsFile resource文件路径&gt; </span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><p>以Windows系统为例：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">.<span class="token punctuation">\\</span>print-tsfile-resource-files.bat D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span></span>\n<span class="line">```````````````````````<span class="token variable"><span class="token variable">`</span></span>\n<span class="line">Starting Printing the TsFileResources</span>\n<span class="line"><span class="token variable">`</span></span>```````````````````````</span>\n<span class="line"><span class="token number">147</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.i.t.c.conf.TSFileDescriptor - not found iotdb-common.properties, use the default configs.</span>\n<span class="line"><span class="token number">230</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Cannot <span class="token function">find</span> IOTDB_HOME or IOTDB_CONF environment variable when loading config <span class="token function">file</span> iotdb-common.properties, use default configuration</span>\n<span class="line"><span class="token number">231</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Couldn<span class="token string">&#39;t load the configuration iotdb-common.properties from any of the known sources.</span>\n<span class="line">233  [main] WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Cannot find IOTDB_HOME or IOTDB_CONF environment variable when loading config file iotdb-datanode.properties, use default configuration</span>\n<span class="line">237  [main] WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Couldn&#39;</span>t load the configuration iotdb-datanode.properties from any of the known sources.</span>\n<span class="line">Analyzing D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">1669359533489</span>-1-0-0.tsfile <span class="token punctuation">..</span>.</span>\n<span class="line"></span>\n<span class="line">Resource plan index range <span class="token punctuation">[</span><span class="token number">9223372036854775807</span>, -9223372036854775808<span class="token punctuation">]</span></span>\n<span class="line">device root.sg1.d1, start <span class="token function">time</span> <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">1970</span>-01-01T08:00+08:00<span class="token punctuation">[</span>GMT+08:00<span class="token punctuation">]</span><span class="token punctuation">)</span>, end <span class="token function">time</span> <span class="token number">99</span> <span class="token punctuation">(</span><span class="token number">1970</span>-01-01T08:00:00.099+08:00<span class="token punctuation">[</span>GMT+08:00<span class="token punctuation">]</span><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line">Analyzing the resource <span class="token function">file</span> folder D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span> finished.</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">.<span class="token punctuation">\\</span>print-tsfile-resource-files.bat D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">1669359533489</span>-1-0-0.tsfile.resource</span>\n<span class="line">```````````````````````<span class="token variable"><span class="token variable">`</span></span>\n<span class="line">Starting Printing the TsFileResources</span>\n<span class="line"><span class="token variable">`</span></span>```````````````````````</span>\n<span class="line"><span class="token number">178</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Cannot <span class="token function">find</span> IOTDB_HOME or IOTDB_CONF environment variable when loading config <span class="token function">file</span> iotdb-common.properties, use default configuration</span>\n<span class="line"><span class="token number">186</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.i.t.c.conf.TSFileDescriptor - not found iotdb-common.properties, use the default configs.</span>\n<span class="line"><span class="token number">187</span>  <span class="token punctuation">[</span>main<span class="token punctuation">]</span> WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Couldn<span class="token string">&#39;t load the configuration iotdb-common.properties from any of the known sources.</span>\n<span class="line">188  [main] WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Cannot find IOTDB_HOME or IOTDB_CONF environment variable when loading config file iotdb-datanode.properties, use default configuration</span>\n<span class="line">192  [main] WARN  o.a.iotdb.db.conf.IoTDBDescriptor - Couldn&#39;</span>t load the configuration iotdb-datanode.properties from any of the known sources.</span>\n<span class="line">Analyzing D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">1669359533489</span>-1-0-0.tsfile <span class="token punctuation">..</span>.</span>\n<span class="line"></span>\n<span class="line">Resource plan index range <span class="token punctuation">[</span><span class="token number">9223372036854775807</span>, -9223372036854775808<span class="token punctuation">]</span></span>\n<span class="line">device root.sg1.d1, start <span class="token function">time</span> <span class="token number">0</span> <span class="token punctuation">(</span><span class="token number">1970</span>-01-01T08:00+08:00<span class="token punctuation">[</span>GMT+08:00<span class="token punctuation">]</span><span class="token punctuation">)</span>, end <span class="token function">time</span> <span class="token number">99</span> <span class="token punctuation">(</span><span class="token number">1970</span>-01-01T08:00:00.099+08:00<span class="token punctuation">[</span>GMT+08:00<span class="token punctuation">]</span><span class="token punctuation">)</span></span>\n<span class="line"></span>\n<span class="line">Analyzing the resource <span class="token function">file</span> D:<span class="token punctuation">\\</span>github<span class="token punctuation">\\</span>master<span class="token punctuation">\\</span>iotdb<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>datanode<span class="token punctuation">\\</span>data<span class="token punctuation">\\</span>sequence<span class="token punctuation">\\</span>root.sg1<span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">0</span><span class="token punctuation">\\</span><span class="token number">1669359533489</span>-1-0-0.tsfile.resource finished.</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',11)]))}const l=s(o,[["render",p],["__file","TsFile-Resource-Sketch-Tool.html.vue"]]),u=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Maintenance-Tools/TsFile-Resource-Sketch-Tool.html","title":"","lang":"zh-CN","frontmatter":{"description":"TsFile Resource概览工具 TsFile resource概览工具用于打印出TsFile resource文件的内容，工具位置为 tools/tsfile/print-tsfile-resource-files。 用法 Windows: Linux or MacOs: 示例 以Windows系统为例：","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Maintenance-Tools/TsFile-Resource-Sketch-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Maintenance-Tools/TsFile-Resource-Sketch-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"TsFile Resource概览工具 TsFile resource概览工具用于打印出TsFile resource文件的内容，工具位置为 tools/tsfile/print-tsfile-resource-files。 用法 Windows: Linux or MacOs: 示例 以Windows系统为例："}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"TsFile Resource概览工具","slug":"tsfile-resource概览工具","link":"#tsfile-resource概览工具","children":[{"level":3,"title":"用法","slug":"用法","link":"#用法","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.9,"words":570},"filePathRelative":"zh/UserGuide/V1.1.x/Maintenance-Tools/TsFile-Resource-Sketch-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{l as comp,u as data};