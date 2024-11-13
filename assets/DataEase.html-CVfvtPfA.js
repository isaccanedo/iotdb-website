import{_ as t,c as a,b as s,o as i}from"./app-BHE9oQwv.js";const o={};function n(l,e){return i(),a("div",null,e[0]||(e[0]=[s(`<h1 id="dataease" tabindex="-1"><a class="header-anchor" href="#dataease"><span>DataEase</span></a></h1><h2 id="product-overview" tabindex="-1"><a class="header-anchor" href="#product-overview"><span>Product Overview</span></a></h2><ol><li><p>Introduction to DataEase</p><p>DataEase is an open-source data visualization and analysis tool that provides a drag-and-drop interface, allowing users to easily create charts and dashboards. It supports multiple data sources such as MySQL, SQL Server, Hive, ClickHouse, and DM, and can be integrated into other applications. This tool helps users quickly gain insights from their data and make informed decisions. For more detailed information, please refer to <a href="https://www.fit2cloud.com/dataease/index.html" target="_blank" rel="noopener noreferrer">DataEase official website</a></p><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase2.png" alt="" style="width:60%;"></div></li><li><p>Introduction to the DataEase-IoTDB Connector</p><p>IoTDB can be efficiently integrated with DataEase through API data sources, and IoTDB data can be accessed through the Session interface using API data source plugins. This plugin supports customized data processing functions, providing users with greater flexibility and more diverse data operation options.</p><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English2.png" alt="" style="width:70%;"></div></li></ol><h2 id="installation-requirements" tabindex="-1"><a class="header-anchor" href="#installation-requirements"><span>Installation Requirements</span></a></h2><table><thead><tr><th style="text-align:left;"><strong>Preparation Content</strong></th><th style="text-align:left;"><strong>Version Requirements</strong></th></tr></thead><tbody><tr><td style="text-align:left;">IoTDB</td><td style="text-align:left;">Version not required, please refer to <a href="https://www.timecho-global.com/docs/UserGuide/latest/Deployment-and-Maintenance/IoTDB-Package_timecho.html" target="_blank" rel="noopener noreferrer">Deployment Guidance</a></td></tr><tr><td style="text-align:left;">JDK</td><td style="text-align:left;">Requires JDK 11 or higher (JDK 17 or above is recommended for optimal performance)</td></tr><tr><td style="text-align:left;">DataEase</td><td style="text-align:left;">Requires v1 series v1.18 version, please refer to the official <a href="https://dataease.io/docs/v2/installation/offline_INSTL_and_UPG/" target="_blank" rel="noopener noreferrer">DataEase Installation Guide</a>(V2.x is currently not supported. For integration with other versions, please contact Timecho)</td></tr><tr><td style="text-align:left;">DataEase-IoTDB Connector</td><td style="text-align:left;">Please contact Timecho for assistance</td></tr></tbody></table><h2 id="installation-steps" tabindex="-1"><a class="header-anchor" href="#installation-steps"><span>Installation Steps</span></a></h2><p>Step 1: Please contact Timecho to obtain the file and unzip the installation package <code>iotdb-api-source-1.0.0.zip</code></p><p>Step 2: After extracting the files, modify the <code>application.properties</code> configuration file in the <code>config</code> folder</p><ul><li><code>server.port</code> can be modified as needed.</li><li><code>iotdb.nodeUrls</code> should be configured with the address and port of the IoTDB instance to be connected.</li><li><code>iotdb.user</code> should be set to the IoTDB username.</li><li><code>iotdb.password</code> should be set to the IoTDB password.</li></ul><div class="language-Properties line-numbers-mode" data-highlighter="prismjs" data-ext="Properties" data-title="Properties"><pre><code><span class="line"># Port on which the IoTDB API Source listens </span>
<span class="line">server.port=8097</span>
<span class="line"># IoTDB instance addresses, multiple nodeUrls separated by ;</span>
<span class="line">iotdb.nodeUrls=127.0.0.1:6667</span>
<span class="line"># IoTDB username</span>
<span class="line">iotdb.user=root</span>
<span class="line"># IoTDB password</span>
<span class="line">iotdb.password=root</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Step 3: Start up DataEase-IoTDB Connector</p><ul><li>Foreground start</li></ul><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">./sbin/start.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Background start (add - d parameter)</li></ul><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line">./sbin/start.sh -d</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Step 4: After startup, you can check whether the startup was successful through the log.</p><div class="language-Shell line-numbers-mode" data-highlighter="prismjs" data-ext="Shell" data-title="Shell"><pre><code><span class="line"> lsof -i:8097  // The port configured in the file where the IoTDB API Source listens</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="instructions" tabindex="-1"><a class="header-anchor" href="#instructions"><span>Instructions</span></a></h2><h3 id="sign-in-dataease" tabindex="-1"><a class="header-anchor" href="#sign-in-dataease"><span>Sign in DataEase</span></a></h3><ol><li>Sign in DataEase，access address: <code>http://[target server IP address]:80</code></li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English3.png" alt="" style="width:70%;"></div><h3 id="configure-data-source" tabindex="-1"><a class="header-anchor" href="#configure-data-source"><span>Configure data source</span></a></h3><ol><li>Navigate to &quot;Data Source&quot;.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English4.png" alt="" style="width:70%;"></div><ol start="2"><li>Click on the &quot;+&quot; on the top left corner, choose &quot;API&quot; at the bottom as data source.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English5.png" alt="" style="width:70%;"></div><ol start="3"><li>Set the &quot;Display Name&quot; and add the API Data Source.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English6.png" alt="" style="width:70%;"></div><ol start="4"><li>Set the name of the Dataset Table, select &quot;Post&quot; as the Request Type, fill in the address with <code>http://[IoTDB API Source]:[port]/getData&gt;</code>. If operating on the local machine and using the default port, the address should be set to <code>http://127.0.0.1:8097/getData</code>.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English7.png" alt="" style="width:70%;"></div><ol start="5"><li><p>In the &quot;Request parameters&quot;-&quot;Request Body&quot; configuration, set the format as &quot;JSON&quot;. Please fill in the parameters according to the following example：</p><ul><li>timeseries：The full path of the series to be queried (currently only one series can be queried).</li><li>limit：The number of entries to query (valid range is greater than 0 and less than 100,000).</li></ul><div class="language-JSON line-numbers-mode" data-highlighter="prismjs" data-ext="JSON" data-title="JSON"><pre><code><span class="line">{ </span>
<span class="line">    &quot;timeseries&quot;: &quot;root.ln.wf03.wt03.speed&quot;,</span>
<span class="line">    &quot;limit&quot;: 1000</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English8.png" alt="" style="width:70%;"></div><ol start="6"><li>In the &quot;Request parameters&quot;-&quot;Request Body&quot; configuration, set &quot;Basic Auth&quot; as the verification method, and enter the IoTDB username and password.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English9.png" alt="" style="width:70%;"></div><ol start="7"><li>In the next step, results are returned in the &quot;data&quot; section. For example, it returns <code>time</code>, <code>rownumber</code> and <code>value</code> as shown in the interface below. The date type for each field also need to be specified. After completing the settings, click the &quot;Save&quot; button in the bottom.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English11.png" alt="" style="width:70%;"></div><ol start="8"><li>Save the settings to complete creating new API data source.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English12.png" alt="" style="width:70%;"></div><ol start="9"><li>You can now view and edit the data source and its detailed information under &quot;API&quot;-&quot;Data Source&quot;.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English13.png" alt="" style="width:70%;"></div><h3 id="configure-the-dataset" tabindex="-1"><a class="header-anchor" href="#configure-the-dataset"><span>Configure the Dataset</span></a></h3><ol><li>Create API dataset: Navigate to &quot;Data Set&quot;，click on the &quot;+&quot; on the top left corner, select &quot;API dataset&quot; and choose the directory where this dataset is located to enter the New API Dataset interface.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English14.png" alt="" style="width:49%;"><img src="https://alioss.timecho.com/docs/img/DataEase-English15.png" alt="" style="width:49%;"></div><ol start="2"><li>Select the newly created API data source and the corresponding dataset table, then define the DataSet Name. Save the settings to complete the creation of the dataset.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English16.png" alt="" style="width:49%;"><img src="https://alioss.timecho.com/docs/img/DataEase-English17.png" alt="" style="width:49%;"></div><ol start="3"><li>Select the newly created dataset and navigate to &quot;Field Manage&quot;, check the required fields (such as <code>rowNum</code>) and convert them to dimensions.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English18.png" alt="" style="width:70%;"></div><ol start="4"><li><p>Configure update frequency: Click on &quot;Add Task&quot; under &quot;Update info&quot; tag and set the following information:</p><ul><li><p>Task Name: Define the task name</p></li><li><p>Update method: Select &quot;Full update&quot;</p></li><li><p>Execution frequency: Set according to the actual situation. Considering the data retrieval speed of DataEase, it is recommended to set the update frequency to more than 5 seconds. For example, to set the update frequency to every 5 seconds, select &quot;Expression setting&quot; and configure the cron expression as <code>0/5****?*</code>.<br> Click on &quot;Confirm&quot; to save the settings.</p></li></ul></li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English19.png" alt="" style="width:70%;"></div><ol start="5"><li>The task is now successfully added. You can click &quot;Execution record&quot; to view the logs.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English20.png" alt="" style="width:70%;"></div><h3 id="configure-dashboard" tabindex="-1"><a class="header-anchor" href="#configure-dashboard"><span>Configure Dashboard</span></a></h3><ol><li>Navigate to &quot;Dashboard&quot;, click on &quot;+&quot; to create a directory, then click on &quot;+&quot; of the directory and select &quot;Create Dashboard&quot;.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English21.png" alt="" style="width:70%;"></div><ol start="2"><li>After setting up as needed, click on &quot;Confirm&quot;. We will taking &quot;Custom&quot; setting as an example.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English22.png" alt="" style="width:70%;"></div><ol start="3"><li>In the new dashboard interface, click on &quot;Chart&quot; to open a pop-up window for adding views. Select the previously created dataset and click on &quot;Next&quot;.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English23.png" alt="" style="width:70%;"></div><ol start="4"><li>Choose a chart type by need and define the chart title. We take &quot;Base Line&quot; as an example. Confirm to proceed.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English24.png" alt="" style="width:70%;"></div><ol start="5"><li>In the chart configuration interface, drag and drop the <code>rowNum</code> field to the category axis (usually the X-axis) and the <code>value</code> field to the value axis (usually the Y-axis).</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English25.png" alt="" style="width:70%;"></div><ol start="6"><li>In the chart&#39;s category axis settings, set the sorting order to ascending, so that the data will be displayed in increasing order. Set the data refresh frequency to determine the frequency of chart updates. After completing these settings, you can further adjust other format and style options for the chart, such as color, size, etc., to meet display needs. Once adjustments are made, click the &quot;Save&quot; button to save the chart configuration.</li></ol><blockquote><p>Since DataEase may cause the API data, originally returned in ascending order, to become disordered after automatically updating the dataset, it is necessary to manually specify the sorting order in the chart configuration.</p></blockquote><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English26.png" alt="" style="width:70%;"></div><ol start="7"><li>After exiting the editing mode, you will be able to see the corresponding chart.</li></ol><div style="text-align:center;"><img src="https://alioss.timecho.com/docs/img/DataEase-English27.png" alt="" style="width:70%;"></div>`,67)]))}const d=t(o,[["render",n],["__file","DataEase.html.vue"]]),c=JSON.parse('{"path":"/UserGuide/V1.3.0-2/Ecosystem-Integration/DataEase.html","title":"DataEase","lang":"en-US","frontmatter":{"description":"DataEase Product Overview Introduction to DataEase DataEase is an open-source data visualization and analysis tool that provides a drag-and-drop interface, allowing users to eas...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/Ecosystem-Integration/DataEase.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.3.0-2/Ecosystem-Integration/DataEase.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"DataEase"}],["meta",{"property":"og:description","content":"DataEase Product Overview Introduction to DataEase DataEase is an open-source data visualization and analysis tool that provides a drag-and-drop interface, allowing users to eas..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"DataEase\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Product Overview","slug":"product-overview","link":"#product-overview","children":[]},{"level":2,"title":"Installation Requirements","slug":"installation-requirements","link":"#installation-requirements","children":[]},{"level":2,"title":"Installation Steps","slug":"installation-steps","link":"#installation-steps","children":[]},{"level":2,"title":"Instructions","slug":"instructions","link":"#instructions","children":[{"level":3,"title":"Sign in DataEase","slug":"sign-in-dataease","link":"#sign-in-dataease","children":[]},{"level":3,"title":"Configure data source","slug":"configure-data-source","link":"#configure-data-source","children":[]},{"level":3,"title":"Configure the Dataset","slug":"configure-the-dataset","link":"#configure-the-dataset","children":[]},{"level":3,"title":"Configure Dashboard","slug":"configure-dashboard","link":"#configure-dashboard","children":[]}]}],"git":{"createdTime":1726639795000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.26,"words":1577},"filePathRelative":"UserGuide/V1.3.0-2/Ecosystem-Integration/DataEase.md","localizedDate":"September 18, 2024","autoDesc":true}');export{d as comp,c as data};
