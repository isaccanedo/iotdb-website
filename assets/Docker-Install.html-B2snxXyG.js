import{_ as s,c as a,b as e,o as t}from"./app-BHE9oQwv.js";const p={};function l(i,n){return t(),a("div",null,n[0]||(n[0]=[e(`<h1 id="docker部署" tabindex="-1"><a class="header-anchor" href="#docker部署"><span>docker部署</span></a></h1><p>Apache IoTDB 的 Docker 镜像已经上传至 <a href="https://hub.docker.com/r/apache/iotdb" target="_blank" rel="noopener noreferrer">https://hub.docker.com/r/apache/iotdb</a>。<br> Apache IoTDB 的配置项以环境变量形式添加到容器内。</p><h2 id="docker镜像安装-单机版" tabindex="-1"><a class="header-anchor" href="#docker镜像安装-单机版"><span>docker镜像安装（单机版）</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 获取镜像</span></span>
<span class="line"><span class="token function">docker</span> pull apache/iotdb:1.2.0-standalone</span>
<span class="line"><span class="token comment"># 创建 docker bridge 网络</span></span>
<span class="line"><span class="token function">docker</span> network create <span class="token parameter variable">--driver</span><span class="token operator">=</span>bridge <span class="token parameter variable">--subnet</span><span class="token operator">=</span><span class="token number">172.18</span>.0.0/16 <span class="token parameter variable">--gateway</span><span class="token operator">=</span><span class="token number">172.18</span>.0.1 iotdb</span>
<span class="line"><span class="token comment"># 创建 docker 容器</span></span>
<span class="line"><span class="token comment"># 注意：必须固定IP部署。IP改变会导致 confignode 启动失败。</span></span>
<span class="line"><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--name</span> iotdb-service <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">--hostname</span> iotdb-service <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">--network</span> iotdb <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">--ip</span> <span class="token number">172.18</span>.0.6 <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-p</span> <span class="token number">6667</span>:6667 <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_internal_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_target_config_node_list</span><span class="token operator">=</span>iotdb-service:10710 <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_internal_port</span><span class="token operator">=</span><span class="token number">10710</span> <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">cn_consensus_port</span><span class="token operator">=</span><span class="token number">10720</span> <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_rpc_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_internal_address</span><span class="token operator">=</span>iotdb-service <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_target_config_node_list</span><span class="token operator">=</span>iotdb-service:10710 <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_mpp_data_exchange_port</span><span class="token operator">=</span><span class="token number">10740</span> <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_schema_region_consensus_port</span><span class="token operator">=</span><span class="token number">10750</span> <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_data_region_consensus_port</span><span class="token operator">=</span><span class="token number">10760</span> <span class="token punctuation">\\</span></span>
<span class="line">              <span class="token parameter variable">-e</span> <span class="token assign-left variable">dn_rpc_port</span><span class="token operator">=</span><span class="token number">6667</span> <span class="token punctuation">\\</span></span>
<span class="line">              apache/iotdb:1.2.0-standalone              </span>
<span class="line"><span class="token comment"># 尝试使用命令行执行SQL</span></span>
<span class="line"><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-ti</span> iotdb-service /iotdb/sbin/start-cli.sh <span class="token parameter variable">-h</span> iotdb-service</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>外部连接：</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># &lt;主机IP/hostname&gt; 是物理机的真实IP或域名。如果在同一台物理机，可以是127.0.0.1。</span></span>
<span class="line"><span class="token variable">$IOTDB_HOME</span>/sbin/start-cli.sh <span class="token parameter variable">-h</span> <span class="token operator">&lt;</span>主机IP/hostname<span class="token operator">&gt;</span> <span class="token parameter variable">-p</span> <span class="token number">6667</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># docker-compose-1c1d.yml</span></span>
<span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">iotdb-service</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.2.0<span class="token punctuation">-</span>standalone</span>
<span class="line">    <span class="token key atrule">hostname</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>service</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>service</span>
<span class="line">    <span class="token key atrule">ports</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> <span class="token string">&quot;6667:6667&quot;</span></span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> cn_internal_address=iotdb<span class="token punctuation">-</span>service</span>
<span class="line">      <span class="token punctuation">-</span> cn_internal_port=10710</span>
<span class="line">      <span class="token punctuation">-</span> cn_consensus_port=10720</span>
<span class="line">      <span class="token punctuation">-</span> cn_target_config_node_list=iotdb<span class="token punctuation">-</span>service<span class="token punctuation">:</span><span class="token number">10710</span></span>
<span class="line">      <span class="token punctuation">-</span> dn_rpc_address=iotdb<span class="token punctuation">-</span>service</span>
<span class="line">      <span class="token punctuation">-</span> dn_internal_address=iotdb<span class="token punctuation">-</span>service</span>
<span class="line">      <span class="token punctuation">-</span> dn_rpc_port=6667</span>
<span class="line">      <span class="token punctuation">-</span> dn_mpp_data_exchange_port=10740</span>
<span class="line">      <span class="token punctuation">-</span> dn_schema_region_consensus_port=10750</span>
<span class="line">      <span class="token punctuation">-</span> dn_data_region_consensus_port=10760</span>
<span class="line">      <span class="token punctuation">-</span> dn_target_config_node_list=iotdb<span class="token punctuation">-</span>service<span class="token punctuation">:</span><span class="token number">10710</span></span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token punctuation">-</span> ./data<span class="token punctuation">:</span>/iotdb/data</span>
<span class="line">        <span class="token punctuation">-</span> ./logs<span class="token punctuation">:</span>/iotdb/logs</span>
<span class="line">    <span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">iotdb</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">ipv4_address</span><span class="token punctuation">:</span> 172.18.0.6</span>
<span class="line"></span>
<span class="line"><span class="token key atrule">networks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">iotdb</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">external</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker镜像安装-集群版" tabindex="-1"><a class="header-anchor" href="#docker镜像安装-集群版"><span>docker镜像安装（集群版）</span></a></h2><p>目前只支持 host 网络和 overlay 网络，不支持 bridge 网络。overlay 网络参照<a href="https://github.com/apache/iotdb/tree/master/docker/src/main/DockerCompose/docker-compose-cluster-1c2d.yml" target="_blank" rel="noopener noreferrer">1C2D</a>的写法，host 网络如下。</p><p>假如有三台物理机，它们的hostname分别是iotdb-1、iotdb-2、iotdb-3。依次启动。<br> 以 iotdb-2 节点的docker-compose文件为例：</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3&quot;</span></span>
<span class="line"><span class="token key atrule">services</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">iotdb-confignode</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.2.0<span class="token punctuation">-</span>confignode</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>confignode</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> cn_internal_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span></span>
<span class="line">      <span class="token punctuation">-</span> cn_target_config_node_list=iotdb<span class="token punctuation">-</span>1<span class="token punctuation">:</span><span class="token number">10710</span></span>
<span class="line">      <span class="token punctuation">-</span> schema_replication_factor=3</span>
<span class="line">      <span class="token punctuation">-</span> cn_internal_port=10710</span>
<span class="line">      <span class="token punctuation">-</span> cn_consensus_port=10720</span>
<span class="line">      <span class="token punctuation">-</span> schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</span>
<span class="line">      <span class="token punctuation">-</span> config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</span>
<span class="line">      <span class="token punctuation">-</span> data_replication_factor=3</span>
<span class="line">      <span class="token punctuation">-</span> data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /etc/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>ro</span>
<span class="line">      <span class="token punctuation">-</span> ./data/confignode<span class="token punctuation">:</span>/iotdb/data</span>
<span class="line">      <span class="token punctuation">-</span> ./logs/confignode<span class="token punctuation">:</span>/iotdb/logs</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span></span>
<span class="line"></span>
<span class="line">  <span class="token key atrule">iotdb-datanode</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">image</span><span class="token punctuation">:</span> apache/iotdb<span class="token punctuation">:</span>1.2.0<span class="token punctuation">-</span>datanode</span>
<span class="line">    <span class="token key atrule">container_name</span><span class="token punctuation">:</span> iotdb<span class="token punctuation">-</span>datanode</span>
<span class="line">    <span class="token key atrule">environment</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> dn_rpc_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span></span>
<span class="line">      <span class="token punctuation">-</span> dn_internal_address=iotdb<span class="token punctuation">-</span><span class="token number">2</span></span>
<span class="line">      <span class="token punctuation">-</span> dn_target_config_node_list=iotdb<span class="token punctuation">-</span>1<span class="token punctuation">:</span><span class="token number">10710</span></span>
<span class="line">      <span class="token punctuation">-</span> data_replication_factor=3</span>
<span class="line">      <span class="token punctuation">-</span> dn_rpc_port=6667</span>
<span class="line">      <span class="token punctuation">-</span> dn_mpp_data_exchange_port=10740</span>
<span class="line">      <span class="token punctuation">-</span> dn_schema_region_consensus_port=10750</span>
<span class="line">      <span class="token punctuation">-</span> dn_data_region_consensus_port=10760</span>
<span class="line">      <span class="token punctuation">-</span> data_region_consensus_protocol_class=org.apache.iotdb.consensus.iot.IoTConsensus</span>
<span class="line">       <span class="token punctuation">-</span> schema_replication_factor=3</span>
<span class="line">      <span class="token punctuation">-</span> schema_region_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</span>
<span class="line">      <span class="token punctuation">-</span> config_node_consensus_protocol_class=org.apache.iotdb.consensus.ratis.RatisConsensus</span>
<span class="line">    <span class="token key atrule">volumes</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token punctuation">-</span> /etc/hosts<span class="token punctuation">:</span>/etc/hosts<span class="token punctuation">:</span>ro</span>
<span class="line">      <span class="token punctuation">-</span> ./data/datanode<span class="token punctuation">:</span>/iotdb/data/</span>
<span class="line">      <span class="token punctuation">-</span> ./logs/datanode<span class="token punctuation">:</span>/iotdb/logs/</span>
<span class="line">    <span class="token key atrule">network_mode</span><span class="token punctuation">:</span> <span class="token string">&quot;host&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：</p><ol><li><code>dn_target_config_node_list</code>所有节点配置一样，需要配置第一个启动的节点，这里为<code>iotdb-1</code>。</li><li>上面docker-compose文件中，<code>iotdb-2</code>需要替换为每个节点的 hostname、域名或者IP地址。</li><li>需要映射<code>/etc/hosts</code>，文件内配置了 iotdb-1、iotdb-2、iotdb-3 与IP的映射。或者可以在 docker-compose 文件中增加 <code>extra_hosts</code> 配置。</li><li>首次启动时，必须首先启动 <code>iotdb-1</code>。</li><li>如果部署失败要重新部署集群，必须将所有节点上的IoTDB服务停止并删除，然后清除<code>data</code>和<code>logs</code>文件夹后，再启动。</li></ol><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h2><p>IoTDB 的配置文件，都在安装目录的conf目录下。<br> IoTDB 本身配置都可以在 docker-compose 文件的 environment 中进行配置。<br> 如果对日志和内存进行了自定义配置，那么需要将<code>conf</code>目录映射出来。</p><h3 id="修改日志级别" tabindex="-1"><a class="header-anchor" href="#修改日志级别"><span>修改日志级别</span></a></h3><p>日志配置文件为 logback-confignode.xml 和 logback-datanode.xml，可以根据需要进行精细配置。</p><h3 id="修改内存配置" tabindex="-1"><a class="header-anchor" href="#修改内存配置"><span>修改内存配置</span></a></h3><p>内存配置文件为 <a href="http://confignode-env.sh" target="_blank" rel="noopener noreferrer">confignode-env.sh</a> 和 <a href="http://datanode-env.sh" target="_blank" rel="noopener noreferrer">datanode-env.sh</a>。堆内存 MAX_HEAP_SIZE 和 HEAP_NEWSIZE， 堆外内存 MAX_DIRECT_MEMORY_SIZE。例如：<code>MAX_HEAP_SIZE=8G, HEAP_NEWSIZE=8G, MAX_DIRECT_MEMORY_SIZE=2G</code></p><h2 id="升级" tabindex="-1"><a class="header-anchor" href="#升级"><span>升级</span></a></h2><ol><li>获取新的镜像</li><li>修改 docker-compose 文件的 image</li><li>使用 docker stop 和 docker rm 命令，停止运行的 docker 容器</li><li>启动 IoTDB</li></ol><h2 id="设置开机自启动" tabindex="-1"><a class="header-anchor" href="#设置开机自启动"><span>设置开机自启动</span></a></h2><ol><li>修改 docker-compose 文件，每个docker 容器配置：<code>restart: always</code></li><li>将 docker 服务设置为开机自启动<br> 以 CentOS 操作系统为例： <code>systemctl enable docker</code></li></ol>`,23)]))}const o=s(p,[["render",l],["__file","Docker-Install.html.vue"]]),r=JSON.parse('{"path":"/zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Docker-Install.html","title":"docker部署","lang":"zh-CN","frontmatter":{"description":"docker部署 Apache IoTDB 的 Docker 镜像已经上传至 https://hub.docker.com/r/apache/iotdb。 Apache IoTDB 的配置项以环境变量形式添加到容器内。 docker镜像安装（单机版） 外部连接： docker镜像安装（集群版） 目前只支持 host 网络和 overlay 网络，不支持...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.2.x/Deployment-and-Maintenance/Docker-Install.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Docker-Install.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"docker部署"}],["meta",{"property":"og:description","content":"docker部署 Apache IoTDB 的 Docker 镜像已经上传至 https://hub.docker.com/r/apache/iotdb。 Apache IoTDB 的配置项以环境变量形式添加到容器内。 docker镜像安装（单机版） 外部连接： docker镜像安装（集群版） 目前只支持 host 网络和 overlay 网络，不支持..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-03-18T04:24:04.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-18T04:24:04.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"docker部署\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-18T04:24:04.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"docker镜像安装（单机版）","slug":"docker镜像安装-单机版","link":"#docker镜像安装-单机版","children":[]},{"level":2,"title":"docker镜像安装（集群版）","slug":"docker镜像安装-集群版","link":"#docker镜像安装-集群版","children":[]},{"level":2,"title":"配置","slug":"配置","link":"#配置","children":[{"level":3,"title":"修改日志级别","slug":"修改日志级别","link":"#修改日志级别","children":[]},{"level":3,"title":"修改内存配置","slug":"修改内存配置","link":"#修改内存配置","children":[]}]},{"level":2,"title":"升级","slug":"升级","link":"#升级","children":[]},{"level":2,"title":"设置开机自启动","slug":"设置开机自启动","link":"#设置开机自启动","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1710735844000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"changxue2022","email":"115675618+changxue2022@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":3.15,"words":944},"filePathRelative":"zh/UserGuide/V1.2.x/Deployment-and-Maintenance/Docker-Install.md","localizedDate":"2023年7月10日","autoDesc":true}');export{o as comp,r as data};