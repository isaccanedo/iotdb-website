import{_ as a,c as t,b as i,o as n}from"./app-BHE9oQwv.js";const s={};function o(r,e){return n(),t("div",null,e[0]||(e[0]=[i(`<h2 id="dbeaver-iotdb" tabindex="-1"><a class="header-anchor" href="#dbeaver-iotdb"><span>DBeaver-IoTDB</span></a></h2><p>DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB via the JDBC driver.</p><h3 id="dbeaver-installation" tabindex="-1"><a class="header-anchor" href="#dbeaver-installation"><span>DBeaver Installation</span></a></h3><ul><li>From DBeaver site: <a href="https://dbeaver.io/download/" target="_blank" rel="noopener noreferrer">https://dbeaver.io/download/</a></li></ul><h3 id="iotdb-installation" tabindex="-1"><a class="header-anchor" href="#iotdb-installation"><span>IoTDB Installation</span></a></h3><ul><li>Download binary version <ul><li>From IoTDB site: <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">https://iotdb.apache.org/Download/</a></li><li>Version &gt;= 0.13.0</li></ul></li><li>Or compile from source code <ul><li>See <a href="https://github.com/apache/iotdb" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb</a></li></ul></li></ul><h3 id="connect-iotdb-and-dbeaver" tabindex="-1"><a class="header-anchor" href="#connect-iotdb-and-dbeaver"><span>Connect IoTDB and DBeaver</span></a></h3><ol><li><p>Start IoTDB server</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">./sbin/start-server.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Start DBeaver</p></li><li><p>Open Driver Manager</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Create a new driver type for IoTDB</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Download <a href="https://iotdb.apache.org/Download/" target="_blank" rel="noopener noreferrer">Sources</a>，unzip it and compile jdbc driver by the following command</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">mvn clean package <span class="token parameter variable">-pl</span> jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>Find and add a lib named <code>apache-iotdb-jdbc-{version}-jar-with-dependencies.jar</code>, which should be under <code>jdbc/target/</code>, then select <code>Find Class</code>.</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Edit the driver Settings</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Driver Name: IoTDB</span>
<span class="line">Driver Type: Generic</span>
<span class="line">URL Template: jdbc:iotdb://{host}:{port}/</span>
<span class="line">Default Port: 6667</span>
<span class="line">Default User: root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Open New DataBase Connection and select iotdb</p><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Edit JDBC Connection Settings</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">JDBC URL: jdbc:iotdb://127.0.0.1:6667/</span>
<span class="line">Username: root</span>
<span class="line">Password: root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>Test Connection</p></li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ol start="11"><li>Enjoy IoTDB with DBeaver</li></ol><figure><img src="https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>`,11)]))}const c=a(s,[["render",o],["__file","DBeaver.html.vue"]]),d=JSON.parse('{"path":"/UserGuide/V1.1.x/Ecosystem-Integration/DBeaver.html","title":"","lang":"en-US","frontmatter":{"description":"DBeaver-IoTDB DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Ecosystem-Integration/DBeaver.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"DBeaver-IoTDB DBeaver is a SQL client software application and a database administration tool. It can use the JDBC application programming interface (API) to interact with IoTDB..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-08T07:58:28.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-08T07:58:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/01.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/02.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/03.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/05.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/06.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/07.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/08.png\\",\\"https://alioss.timecho.com/docs/img/UserGuide/Ecosystem-Integration/DBeaver/09.png\\"],\\"dateModified\\":\\"2024-11-08T07:58:28.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"DBeaver-IoTDB","slug":"dbeaver-iotdb","link":"#dbeaver-iotdb","children":[{"level":3,"title":"DBeaver Installation","slug":"dbeaver-installation","link":"#dbeaver-installation","children":[]},{"level":3,"title":"IoTDB Installation","slug":"iotdb-installation","link":"#iotdb-installation","children":[]},{"level":3,"title":"Connect IoTDB and DBeaver","slug":"connect-iotdb-and-dbeaver","link":"#connect-iotdb-and-dbeaver","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1731052708000,"contributors":[{"name":"Christofer Dutz","email":"christofer.dutz@c-ware.de","commits":1},{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":1.1,"words":330},"filePathRelative":"UserGuide/V1.1.x/Ecosystem-Integration/DBeaver.md","localizedDate":"July 10, 2023","autoDesc":true}');export{c as comp,d as data};