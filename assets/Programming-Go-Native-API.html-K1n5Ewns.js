import{_ as n,c as a,b as e,o as i}from"./app-BHE9oQwv.js";const l={};function t(o,s){return i(),a("div",null,s[0]||(s[0]=[e(`<h1 id="go-原生接口" tabindex="-1"><a class="header-anchor" href="#go-原生接口"><span>Go 原生接口</span></a></h1><h2 id="依赖" tabindex="-1"><a class="header-anchor" href="#依赖"><span>依赖</span></a></h2><ul><li>golang &gt;= 1.13</li><li>make &gt;= 3.0</li><li>curl &gt;= 7.1.1</li><li>thrift 0.15.0</li><li>Linux、Macos 或其他类 unix 系统</li><li>Windows+bash (下载 IoTDB Go client 需要 git ，通过 WSL、cygwin、Git Bash 任意一种方式均可)</li></ul><h2 id="安装方法" tabindex="-1"><a class="header-anchor" href="#安装方法"><span>安装方法</span></a></h2><ul><li>通过 go mod</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 切换到 GOPATH 的 HOME 路径，启用 Go Modules 功能</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GO111MODULE</span><span class="token operator">=</span>on</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置 GOPROXY 环境变量</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable">GOPROXY</span><span class="token operator">=</span>https://goproxy.io</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建命名的文件夹或目录，并切换当前目录</span></span>
<span class="line"><span class="token function">mkdir</span> session_example <span class="token operator">&amp;&amp;</span> <span class="token builtin class-name">cd</span> session_example</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 保存文件，自动跳转到新的地址</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-o</span> session_example.go <span class="token parameter variable">-L</span> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 初始化 go module 环境</span></span>
<span class="line">go mod init session_example</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载依赖包</span></span>
<span class="line">go mod tidy</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 编译并运行程序</span></span>
<span class="line">go run session_example.go</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>通过 GOPATH</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># get thrift 0.13.0</span></span>
<span class="line">go get github.com/apache/thrift@0.13.0</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 递归创建目录</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$GOPATH</span>/src/iotdb-client-go-example/session_example</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换到当前目录</span></span>
<span class="line"><span class="token builtin class-name">cd</span> <span class="token variable">$GOPATH</span>/src/iotdb-client-go-example/session_example</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 保存文件，自动跳转到新的地址</span></span>
<span class="line"><span class="token function">curl</span> <span class="token parameter variable">-o</span> session_example.go <span class="token parameter variable">-L</span> https://github.com/apache/iotdb-client-go/raw/main/example/session_example.go</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 初始化 go module 环境</span></span>
<span class="line">go mod init</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载依赖包</span></span>
<span class="line">go mod tidy</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 编译并运行程序</span></span>
<span class="line">go run session_example.go</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：GO原生客户端Session不是线程安全的，强烈不建议在多线程场景下应用。如有多线程应用场景，请使用Session Pool.</strong></p>`,9)]))}const c=n(l,[["render",t],["__file","Programming-Go-Native-API.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V1.2.x/API/Programming-Go-Native-API.html","title":"Go 原生接口","lang":"zh-CN","frontmatter":{"description":"Go 原生接口 依赖 golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.15.0 Linux、Macos 或其他类 unix 系统 Windows+bash (下载 IoTDB Go client 需要 git ，通过 WSL、cygwin、Git Bash 任意一种方式均可) 安装方法 通过 go m...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/API/Programming-Go-Native-API.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"Go 原生接口"}],["meta",{"property":"og:description","content":"Go 原生接口 依赖 golang >= 1.13 make >= 3.0 curl >= 7.1.1 thrift 0.15.0 Linux、Macos 或其他类 unix 系统 Windows+bash (下载 IoTDB Go client 需要 git ，通过 WSL、cygwin、Git Bash 任意一种方式均可) 安装方法 通过 go m..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-10-15T07:57:32.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-15T07:57:32.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Go 原生接口\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-15T07:57:32.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"依赖","slug":"依赖","link":"#依赖","children":[]},{"level":2,"title":"安装方法","slug":"安装方法","link":"#安装方法","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1728979052000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Haonan","email":"hhaonan@outlook.com","commits":1},{"name":"Lei","email":"33376433+LeiRui@users.noreply.github.com","commits":1},{"name":"wanghui42","email":"105700158+wanghui42@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":1.33,"words":398},"filePathRelative":"zh/UserGuide/V1.2.x/API/Programming-Go-Native-API.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,r as data};
