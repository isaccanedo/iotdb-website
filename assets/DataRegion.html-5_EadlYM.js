import{_ as o,c as n,b as r,d as i,e as a,a as d,w as s,r as l,o as p}from"./app-BHE9oQwv.js";const g={};function c(h,e){const t=l("RouteLink");return p(),n("div",null,[e[3]||(e[3]=r(`<h2 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h2><p>Database 由用户显示指定，使用语句&quot;CREATE DATABASE&quot;来指定 database，每一个 database 有多个对应的 data region</p><p>为了确保最终一致性，每一个 data region 有一个数据插入锁（排它锁）来同步每一次插入操作。<br> 所以服务端数据写入的并行度为 data region的数量。</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题"><span>问题</span></a></h2><p>从背景中可知，IoTDB数据写入的并行度为 max(客户端数量，服务端数据写入的并行度)，也就是max(客户端数量，data region 数量)</p><p>在生产实践中，存储组的概念往往与特定真实世界实体相关（例如工厂，地点，国家等）。<br> 因此存储组的数量可能会比较小，这会导致IoTDB写入并行度不足。即使我们开再多的客户端写入线程，也无法走出这种困境。</p><h2 id="解决方案" tabindex="-1"><a class="header-anchor" href="#解决方案"><span>解决方案</span></a></h2><p>我们的方案是将一个存储组下的设备分为若干个设备组（称为 data region），将同步粒度从存储组级别改为 data region 粒度。</p><p>更具体的，我们使用哈希将设备分到不同的 data region 下，例如：<br> 对于一个名为&quot;root.sg.d&quot;的设备（假设其存储组为&quot;<a href="http://root.sg" target="_blank" rel="noopener noreferrer">root.sg</a>&quot;），它属于的 data region 为&quot;<a href="http://root.sg" target="_blank" rel="noopener noreferrer">root.sg</a>.[hash(&quot;root.sg.d&quot;) mod num_of_data_region]&quot;</p><h2 id="使用方法" tabindex="-1"><a class="header-anchor" href="#使用方法"><span>使用方法</span></a></h2><p>通过改变如下配置来设置每一个 database 下 data region 的数量：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">data_region_num</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>推荐值为[data region number] = [CPU core number] / [user-defined database number]</p>`,13)),i("p",null,[e[1]||(e[1]=a("参考")),d(t,{to:"/zh/UserGuide/V1.1.x/Reference/DataNode-Config-Manual.html"},{default:s(()=>e[0]||(e[0]=[a("配置手册")])),_:1}),e[2]||(e[2]=a("以获取更多信息。"))])])}const u=o(g,[["render",c],["__file","DataRegion.html.vue"]]),b=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Data-Modeling/DataRegion.html","title":"","lang":"zh-CN","frontmatter":{"description":"背景 Database 由用户显示指定，使用语句\\"CREATE DATABASE\\"来指定 database，每一个 database 有多个对应的 data region 为了确保最终一致性，每一个 data region 有一个数据插入锁（排它锁）来同步每一次插入操作。 所以服务端数据写入的并行度为 data region的数量。 问题 从背景中可知...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Data-Modeling/DataRegion.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Data-Modeling/DataRegion.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"背景 Database 由用户显示指定，使用语句\\"CREATE DATABASE\\"来指定 database，每一个 database 有多个对应的 data region 为了确保最终一致性，每一个 data region 有一个数据插入锁（排它锁）来同步每一次插入操作。 所以服务端数据写入的并行度为 data region的数量。 问题 从背景中可知..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"背景","slug":"背景","link":"#背景","children":[]},{"level":2,"title":"问题","slug":"问题","link":"#问题","children":[]},{"level":2,"title":"解决方案","slug":"解决方案","link":"#解决方案","children":[]},{"level":2,"title":"使用方法","slug":"使用方法","link":"#使用方法","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.64,"words":491},"filePathRelative":"zh/UserGuide/V1.1.x/Data-Modeling/DataRegion.md","localizedDate":"2023年7月10日","autoDesc":true}');export{u as comp,b as data};