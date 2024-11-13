import{_ as n,c as s,b as a,o as i}from"./app-BHE9oQwv.js";const t={};function l(d,e){return i(),s("div",null,e[0]||(e[0]=[a(`<h1 id="odbc" tabindex="-1"><a class="header-anchor" href="#odbc"><span>ODBC</span></a></h1><p>With IoTDB JDBC, IoTDB can be accessed using the ODBC-JDBC bridge.</p><h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies"><span>Dependencies</span></a></h2><ul><li>IoTDB-JDBC&#39;s jar-with-dependency package</li><li>ODBC-JDBC bridge (e.g. ZappySys JDBC Bridge)</li></ul><h2 id="deployment" tabindex="-1"><a class="header-anchor" href="#deployment"><span>Deployment</span></a></h2><h3 id="preparing-jdbc-package" tabindex="-1"><a class="header-anchor" href="#preparing-jdbc-package"><span>Preparing JDBC package</span></a></h3><p>Download the source code of IoTDB, and execute the following command in root directory:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">mvn clean package <span class="token parameter variable">-pl</span> iotdb-client/jdbc <span class="token parameter variable">-am</span> <span class="token parameter variable">-DskipTests</span> <span class="token parameter variable">-P</span> get-jar-with-dependencies</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Then, you can see the output <code>iotdb-jdbc-1.3.2-SNAPSHOT-jar-with-dependencies.jar</code> under <code>iotdb-client/jdbc/target</code> directory.</p><h3 id="preparing-odbc-jdbc-bridge" tabindex="-1"><a class="header-anchor" href="#preparing-odbc-jdbc-bridge"><span>Preparing ODBC-JDBC Bridge</span></a></h3><p><em>Note: Here we only provide one kind of ODBC-JDBC bridge as the instance. Readers can use other ODBC-JDBC bridges to access IoTDB with the IOTDB-JDBC.</em></p><ol><li><p><strong>Download Zappy-Sys ODBC-JDBC Bridge</strong>:<br> Enter the <a href="https://zappysys.com/products/odbc-powerpack/odbc-jdbc-bridge-driver/" target="_blank" rel="noopener noreferrer">https://zappysys.com/products/odbc-powerpack/odbc-jdbc-bridge-driver/</a> website, and click &quot;download&quot;.</p><figure><img src="https://alioss.timecho.com/upload/ZappySys_website.jpg" alt="ZappySys_website.jpg" tabindex="0" loading="lazy"><figcaption>ZappySys_website.jpg</figcaption></figure></li><li><p><strong>Prepare IoTDB</strong>: Set up IoTDB cluster, and write a row of data arbitrarily.</p><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line">IoTDB <span class="token operator">&gt;</span> <span class="token keyword">insert</span> <span class="token keyword">into</span> root<span class="token punctuation">.</span>ln<span class="token punctuation">.</span>wf02<span class="token punctuation">.</span>wt02<span class="token punctuation">(</span><span class="token keyword">timestamp</span><span class="token punctuation">,</span><span class="token keyword">status</span><span class="token punctuation">)</span> <span class="token keyword">values</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>Deploy and Test the Bridge</strong>:</p><ol><li><p>Open ODBC Data Sources(32/64 bit), depending on the bits of Windows. One possible position is <code>C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\Administrative Tools</code>.</p><figure><img src="https://alioss.timecho.com/upload/ODBC_ADD_EN.jpg" alt="ODBC_ADD_EN.jpg" tabindex="0" loading="lazy"><figcaption>ODBC_ADD_EN.jpg</figcaption></figure></li><li><p>Click on &quot;add&quot; and select ZappySys JDBC Bridge.</p><figure><img src="https://alioss.timecho.com/upload/ODBC_CREATE_EN.jpg" alt="ODBC_CREATE_EN.jpg" tabindex="0" loading="lazy"><figcaption>ODBC_CREATE_EN.jpg</figcaption></figure></li><li><p>Fill in the following settings:</p><table><thead><tr><th>Property</th><th>Content</th><th>Example</th></tr></thead><tbody><tr><td>Connection String</td><td>jdbc:iotdb://&lt;The IP of IoTDB&gt;:&lt;The rpc port of IoTDB&gt;/</td><td>jdbc:iotdb://127.0.0.1:6667/</td></tr><tr><td>Driver Class</td><td>org.apache.iotdb.jdbc.IoTDBDriver</td><td>org.apache.iotdb.jdbc.IoTDBDriver</td></tr><tr><td>JDBC driver file(s)</td><td>The path of IoTDB JDBC jar-with-dependencies</td><td>C:\\Users\\13361\\Documents\\GitHub\\iotdb\\iotdb-client\\jdbc\\target\\iotdb-jdbc-1.3.2-SNAPSHOT-jar-with-dependencies.jar</td></tr><tr><td>User name</td><td>IoTDB&#39;s user name</td><td>root</td></tr><tr><td>User password</td><td>IoTDB&#39;s password</td><td>root</td></tr></tbody></table><figure><img src="https://alioss.timecho.com/upload/ODBC_CONNECTION.png" alt="ODBC_CONNECTION.png" tabindex="0" loading="lazy"><figcaption>ODBC_CONNECTION.png</figcaption></figure></li><li><p>Click on &quot;Test Connection&quot; button, and a &quot;Test Connection: SUCCESSFUL&quot; should appear.</p><figure><img src="https://alioss.timecho.com/upload/ODBC_CONFIG_EN.jpg" alt="ODBC_CONFIG_EN.jpg" tabindex="0" loading="lazy"><figcaption>ODBC_CONFIG_EN.jpg</figcaption></figure></li><li><p>Click the &quot;Preview&quot; button above, and replace the original query text with <code>select * from root.**</code>, then click &quot;Preview Data&quot;, and the query result should correctly.</p><figure><img src="https://alioss.timecho.com/upload/ODBC_TEST.jpg" alt="ODBC_TEST.jpg" tabindex="0" loading="lazy"><figcaption>ODBC_TEST.jpg</figcaption></figure></li></ol></li><li><p><strong>Operate IoTDB&#39;s data with ODBC</strong>: After correct deployment, you can use Microsoft&#39;s ODBC library to operate IoTDB&#39;s data. Here&#39;s an example written in C#:</p><div class="language-C# line-numbers-mode" data-highlighter="prismjs" data-ext="C#" data-title="C#"><pre><code><span class="line">using System.Data.Odbc;</span>
<span class="line"></span>
<span class="line">// Get a connection</span>
<span class="line">var dbConnection = new OdbcConnection(&quot;DSN=ZappySys JDBC Bridge&quot;);</span>
<span class="line">dbConnection.Open();</span>
<span class="line"></span>
<span class="line">// Execute the write commands to prepare data</span>
<span class="line">var dbCommand = dbConnection.CreateCommand();</span>
<span class="line">dbCommand.CommandText = &quot;insert into root.Keller.Flur.Energieversorgung(time, s1) values(1715670861634, 1)&quot;;</span>
<span class="line">dbCommand.ExecuteNonQuery();</span>
<span class="line">dbCommand.CommandText = &quot;insert into root.Keller.Flur.Energieversorgung(time, s2) values(1715670861634, true)&quot;;</span>
<span class="line">dbCommand.ExecuteNonQuery();</span>
<span class="line">dbCommand.CommandText = &quot;insert into root.Keller.Flur.Energieversorgung(time, s3) values(1715670861634, 3.1)&quot;;</span>
<span class="line">dbCommand.ExecuteNonQuery();</span>
<span class="line"></span>
<span class="line">// Execute the read command</span>
<span class="line">dbCommand.CommandText = &quot;SELECT * FROM root.Keller.Flur.Energieversorgung&quot;;</span>
<span class="line">var dbReader = dbCommand.ExecuteReader();</span>
<span class="line"></span>
<span class="line">// Write the output header</span>
<span class="line">var fCount = dbReader.FieldCount;</span>
<span class="line">Console.Write(&quot;:&quot;);</span>
<span class="line">for(var i = 0; i &lt; fCount; i++)</span>
<span class="line">{</span>
<span class="line">    var fName = dbReader.GetName(i);</span>
<span class="line">    Console.Write(fName + &quot;:&quot;);</span>
<span class="line">}</span>
<span class="line">Console.WriteLine();</span>
<span class="line"></span>
<span class="line">// Output the content</span>
<span class="line">while (dbReader.Read())</span>
<span class="line">{</span>
<span class="line">    Console.Write(&quot;:&quot;);</span>
<span class="line">    for(var i = 0; i &lt; fCount; i++) </span>
<span class="line">    {</span>
<span class="line">        var fieldType = dbReader.GetFieldType(i);</span>
<span class="line">        switch (fieldType.Name)</span>
<span class="line">        {</span>
<span class="line">            case &quot;DateTime&quot;:</span>
<span class="line">                var dateTime = dbReader.GetInt64(i);</span>
<span class="line">                Console.Write(dateTime + &quot;:&quot;);</span>
<span class="line">                break;</span>
<span class="line">            case &quot;Double&quot;:</span>
<span class="line">                if (dbReader.IsDBNull(i)) </span>
<span class="line">                {</span>
<span class="line">                    Console.Write(&quot;null:&quot;);</span>
<span class="line">                }</span>
<span class="line">                else </span>
<span class="line">                {</span>
<span class="line">                    var fValue = dbReader.GetDouble(i);</span>
<span class="line">                    Console.Write(fValue + &quot;:&quot;);</span>
<span class="line">                }   </span>
<span class="line">                break;</span>
<span class="line">            default:</span>
<span class="line">                Console.Write(fieldType.Name + &quot;:&quot;);</span>
<span class="line">                break;</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">    Console.WriteLine();</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// Shut down gracefully</span>
<span class="line">dbReader.Close();</span>
<span class="line">dbCommand.Dispose();</span>
<span class="line">dbConnection.Close();</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This program can write data into IoTDB, and query the data we have just written.</p></li></ol>`,12)]))}const r=n(t,[["render",l],["__file","Programming-ODBC.html.vue"]]),p=JSON.parse(`{"path":"/UserGuide/latest/API/Programming-ODBC.html","title":"ODBC","lang":"en-US","frontmatter":{"description":"ODBC With IoTDB JDBC, IoTDB can be accessed using the ODBC-JDBC bridge. Dependencies IoTDB-JDBC's jar-with-dependency package ODBC-JDBC bridge (e.g. ZappySys JDBC Bridge) Deploy...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/latest/API/Programming-ODBC.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/latest/API/Programming-ODBC.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"ODBC"}],["meta",{"property":"og:description","content":"ODBC With IoTDB JDBC, IoTDB can be accessed using the ODBC-JDBC bridge. Dependencies IoTDB-JDBC's jar-with-dependency package ODBC-JDBC bridge (e.g. ZappySys JDBC Bridge) Deploy..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://alioss.timecho.com/upload/ZappySys_website.jpg"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"ODBC\\",\\"image\\":[\\"https://alioss.timecho.com/upload/ZappySys_website.jpg\\",\\"https://alioss.timecho.com/upload/ODBC_ADD_EN.jpg\\",\\"https://alioss.timecho.com/upload/ODBC_CREATE_EN.jpg\\",\\"https://alioss.timecho.com/upload/ODBC_CONNECTION.png\\",\\"https://alioss.timecho.com/upload/ODBC_CONFIG_EN.jpg\\",\\"https://alioss.timecho.com/upload/ODBC_TEST.jpg\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Dependencies","slug":"dependencies","link":"#dependencies","children":[]},{"level":2,"title":"Deployment","slug":"deployment","link":"#deployment","children":[{"level":3,"title":"Preparing JDBC package","slug":"preparing-jdbc-package","link":"#preparing-jdbc-package","children":[]},{"level":3,"title":"Preparing ODBC-JDBC Bridge","slug":"preparing-odbc-jdbc-bridge","link":"#preparing-odbc-jdbc-bridge","children":[]}]}],"git":{"createdTime":1731055543000,"updatedTime":1731322876000,"contributors":[{"name":"Caideyipi","email":"87789683+Caideyipi@users.noreply.github.com","commits":1},{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.11,"words":632},"filePathRelative":"UserGuide/latest/API/Programming-ODBC.md","localizedDate":"November 8, 2024","autoDesc":true}`);export{r as comp,p as data};