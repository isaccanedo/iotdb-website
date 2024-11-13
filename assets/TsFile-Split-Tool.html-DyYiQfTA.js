import{_ as t,c as l,b as i,o as s}from"./app-BHE9oQwv.js";const o={};function a(n,e){return s(),l("div",null,e[0]||(e[0]=[i(`<h1 id="tsfile-拆分工具" tabindex="-1"><a class="header-anchor" href="#tsfile-拆分工具"><span>TsFile 拆分工具</span></a></h1><p>TsFile 拆分工具用来将一个 TsFile 拆分为多个 TsFile，工具位置为 tools/tsfile/split-tsfile-tool</p><p>使用方式：</p><p>Windows:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.\\split-tsfile-tool.bat &lt;TsFile 文件路径&gt; (-level &lt;新生成文件名的空间内合并次数，默认为10&gt;) (-size &lt;新生成文件的大小（字节），默认为 1048576000&gt;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Linux or MacOs:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">./split-tsfile-tool.sh &lt;TsFile 文件路径&gt; (-level &lt;新生成文件名的空间内合并次数，默认为10&gt;) (-size &lt;新生成文件的大小（字节），默认为 1048576000&gt;)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><blockquote><p>例如，需要指定生成 100MB 的文件，且空间内合并次数为 6，则命令为 <code>./split-tsfile-tool.sh test.tsfile -level 6 -size 1048576000</code> (Linux or MacOs)</p></blockquote><p>使用拆分工具需要注意如下事项：</p><ol><li>拆分工具针对单个已经封口的 TsFile 进行操作，需要确保此 TsFile 已经封口，如 TsFile 在 IoTDB 内，则需要有对应的 <code>.resource</code> 文件。</li><li>拆分过程需确保文件已经从 IoTDB 中卸载。</li><li>目前未处理 TsFile 对应的 mods 文件，如果希望拆分后继续放入 IoTDB 目录中通过重启加载，需要手动将 mods 文件拷贝多份，并修改命名，为每个新生成的文件配备一个 mods 文件。</li><li>拆分工具目前尚不支持保存对齐时间序列的 TsFile。</li></ol>`,10)]))}const p=t(o,[["render",a],["__file","TsFile-Split-Tool.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Maintenance-Tools/TsFile-Split-Tool.html","title":"TsFile 拆分工具","lang":"zh-CN","frontmatter":{"description":"TsFile 拆分工具 TsFile 拆分工具用来将一个 TsFile 拆分为多个 TsFile，工具位置为 tools/tsfile/split-tsfile-tool 使用方式： Windows: Linux or MacOs: 例如，需要指定生成 100MB 的文件，且空间内合并次数为 6，则命令为 ./split-tsfile-tool.sh ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Maintenance-Tools/TsFile-Split-Tool.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Maintenance-Tools/TsFile-Split-Tool.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"TsFile 拆分工具"}],["meta",{"property":"og:description","content":"TsFile 拆分工具 TsFile 拆分工具用来将一个 TsFile 拆分为多个 TsFile，工具位置为 tools/tsfile/split-tsfile-tool 使用方式： Windows: Linux or MacOs: 例如，需要指定生成 100MB 的文件，且空间内合并次数为 6，则命令为 ./split-tsfile-tool.sh ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"TsFile 拆分工具\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.46,"words":437},"filePathRelative":"zh/UserGuide/V1.0.x/Maintenance-Tools/TsFile-Split-Tool.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,c as data};