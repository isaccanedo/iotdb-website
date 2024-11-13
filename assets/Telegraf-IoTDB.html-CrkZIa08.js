import{_ as n,c as s,b as a,o as i}from"./app-BHE9oQwv.js";const l={};function t(r,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="telegraf" tabindex="-1"><a class="header-anchor" href="#telegraf"><span>Telegraf</span></a></h1><p>Telegraf 是一个开源代理工具，用于收集、处理和传输度量数据,由 InfluxData 开发。<br> Telegraf 有以下这些特点:</p><ul><li>插件体系结构: Telegraf 的强大之处在于其广泛的插件生态系统。它支持多种输入、输出和处理器插件，可以与各种数据源和目标无缝集成。</li><li>数据收集: Telegraf 擅长从不同来源收集度量数据，例如系统指标、日志、数据库等。其多功能性使其适用于监视应用程序、基础架构和物联网设备。</li><li>输出目标: 一旦收集到数据，可以将其发送到各种输出目标，包括流行的数据库如 InfluxDB。这种灵活性使 Telegraf 适应不同的监视和分析设置。</li><li>配置简易: Telegraf 的配置使用 TOML 文件进行。这种简单性使用户能够轻松定义输入、输出和处理器，使定制变得简单明了。</li><li>社区与支持: 作为开源项目，Telegraf 受益于活跃的社区。用户可以通过论坛和文档贡献插件、报告问题并寻求帮助。</li></ul><h1 id="telegraf-iotdb-输出插件" tabindex="-1"><a class="header-anchor" href="#telegraf-iotdb-输出插件"><span>Telegraf IoTDB 输出插件</span></a></h1><p>这个输出插件保存 Telegraf 中的监控信息到 Apache IoTDB 的后端，支持 session 连接和数据写入。</p><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h2><ol><li>在使用这个插件前，需要配置 IP 地址，端口号，用户名，密码以及其他数据库服务器的信息，另外还有数据转换，时间单位和其他配置。</li><li>输出到 IoTDB 的路径需要满足章节 ‘语法约定’ 中的要求</li><li>查看 <a href="https://github.com/influxdata/telegraf/tree/master/plugins/outputs/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/influxdata/telegraf/tree/master/plugins/outputs/iotdb</a> 了解如何配置 Telegraf IoTDB Output 插件.</li></ol><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2><p>以下是一个使用 Telegraf 收集 CPU 数据输出到 IoTDB 的示例。</p><ol><li>使用 telegraf 命令生成配置文件</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">telegraf --sample-config --input-filter cpu --output-filter iotdb &gt; cpu_iotdb.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>修改 input cpu 插件的配置</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Read metrics about cpu usage</span>
<span class="line">[[inputs.cpu]]</span>
<span class="line">  ## Whether to report per-cpu stats or not</span>
<span class="line">  percpu = true</span>
<span class="line">  ## Whether to report total system cpu stats or not</span>
<span class="line">  totalcpu = true</span>
<span class="line">  ## If true, collect raw CPU time metrics</span>
<span class="line">  collect_cpu_time = false</span>
<span class="line">  ## If true, compute and report the sum of all non-idle CPU states</span>
<span class="line">  report_active = false</span>
<span class="line">  ## If true and the info is available then add core_id and physical_id tags</span>
<span class="line">  core_tags = false</span>
<span class="line">  name_override = &quot;root.demo.telgraf.cpu&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>修改 output iotdb 插件的配置</li></ol><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># Save metrics to an IoTDB Database</span>
<span class="line">[[outputs.iotdb]]</span>
<span class="line">  ## Configuration of IoTDB server connection</span>
<span class="line">  host = &quot;127.0.0.1&quot;</span>
<span class="line">  # port = &quot;6667&quot;</span>
<span class="line"></span>
<span class="line">  ## Configuration of authentication</span>
<span class="line">  # user = &quot;root&quot;</span>
<span class="line">  # password = &quot;root&quot;</span>
<span class="line"></span>
<span class="line">  ## Timeout to open a new session.</span>
<span class="line">  ## A value of zero means no timeout.</span>
<span class="line">  # timeout = &quot;5s&quot;</span>
<span class="line"></span>
<span class="line">  ## Configuration of type conversion for 64-bit unsigned int</span>
<span class="line">  ## IoTDB currently DOES NOT support unsigned integers (version 13.x).</span>
<span class="line">  ## 32-bit unsigned integers are safely converted into 64-bit signed integers by the plugin,</span>
<span class="line">  ## however, this is not true for 64-bit values in general as overflows may occur.</span>
<span class="line">  ## The following setting allows to specify the handling of 64-bit unsigned integers.</span>
<span class="line">  ## Available values are:</span>
<span class="line">  ##   - &quot;int64&quot;       --  convert to 64-bit signed integers and accept overflows</span>
<span class="line">  ##   - &quot;int64_clip&quot;  --  convert to 64-bit signed integers and clip the values on overflow to 9,223,372,036,854,775,807</span>
<span class="line">  ##   - &quot;text&quot;        --  convert to the string representation of the value</span>
<span class="line">  # uint64_conversion = &quot;int64_clip&quot;</span>
<span class="line"></span>
<span class="line">  ## Configuration of TimeStamp</span>
<span class="line">  ## TimeStamp is always saved in 64bits int. timestamp_precision specifies the unit of timestamp.</span>
<span class="line">  ## Available value:</span>
<span class="line">  ## &quot;second&quot;, &quot;millisecond&quot;, &quot;microsecond&quot;, &quot;nanosecond&quot;(default)</span>
<span class="line">  timestamp_precision = &quot;millisecond&quot;</span>
<span class="line"></span>
<span class="line">  ## Handling of tags</span>
<span class="line">  ## Tags are not fully supported by IoTDB.</span>
<span class="line">  ## A guide with suggestions on how to handle tags can be found here:</span>
<span class="line">  ##     https://iotdb.apache.org/UserGuide/Master/API/InfluxDB-Protocol.html</span>
<span class="line">  ##</span>
<span class="line">  ## Available values are:</span>
<span class="line">  ##   - &quot;fields&quot;     --  convert tags to fields in the measurement</span>
<span class="line">  ##   - &quot;device_id&quot;  --  attach tags to the device ID</span>
<span class="line">  ##</span>
<span class="line">  ## For Example, a metric named &quot;root.sg.device&quot; with the tags \`tag1: &quot;private&quot;\`  and  \`tag2: &quot;working&quot;\` and</span>
<span class="line">  ##  fields \`s1: 100\`  and \`s2: &quot;hello&quot;\` will result in the following representations in IoTDB</span>
<span class="line">  ##   - &quot;fields&quot;     --  root.sg.device, s1=100, s2=&quot;hello&quot;, tag1=&quot;private&quot;, tag2=&quot;working&quot;</span>
<span class="line">  ##   - &quot;device_id&quot;  --  root.sg.device.private.working, s1=100, s2=&quot;hello&quot;</span>
<span class="line">  convert_tags_to = &quot;fields&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>使用这个配置文件运行 Telegraf，一段时间后，可以在 IoTDB 中查询到收集的这些数据</li></ol>`,16)]))}const d=n(l,[["render",t],["__file","Telegraf-IoTDB.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/Ecosystem-Integration/Telegraf-IoTDB.html","title":"Telegraf","lang":"zh-CN","frontmatter":{"description":"Telegraf Telegraf 是一个开源代理工具，用于收集、处理和传输度量数据,由 InfluxData 开发。 Telegraf 有以下这些特点: 插件体系结构: Telegraf 的强大之处在于其广泛的插件生态系统。它支持多种输入、输出和处理器插件，可以与各种数据源和目标无缝集成。 数据收集: Telegraf 擅长从不同来源收集度量数据，例...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/Ecosystem-Integration/Telegraf-IoTDB.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/Ecosystem-Integration/Telegraf-IoTDB.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Telegraf"}],["meta",{"property":"og:description","content":"Telegraf Telegraf 是一个开源代理工具，用于收集、处理和传输度量数据,由 InfluxData 开发。 Telegraf 有以下这些特点: 插件体系结构: Telegraf 的强大之处在于其广泛的插件生态系统。它支持多种输入、输出和处理器插件，可以与各种数据源和目标无缝集成。 数据收集: Telegraf 擅长从不同来源收集度量数据，例..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Telegraf\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]},{"level":2,"title":"示例","slug":"示例","link":"#示例","children":[]}],"git":{"createdTime":1701948574000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.21,"words":962},"filePathRelative":"zh/UserGuide/V1.3.0-2/Ecosystem-Integration/Telegraf-IoTDB.md","localizedDate":"2023年12月7日","autoDesc":true}');export{d as comp,c as data};
