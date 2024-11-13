import{_ as s,c as a,b as n,o as l}from"./app-BHE9oQwv.js";const t={};function i(d,e){return l(),a("div",null,e[0]||(e[0]=[n(`<h2 id="hadoop-tsfile" tabindex="-1"><a class="header-anchor" href="#hadoop-tsfile"><span>Hadoop-TsFile</span></a></h2><p>TsFile 的 Hadoop 连接器实现了对 Hadoop 读取外部 Tsfile 类型的文件格式的支持。让用户可以使用 Hadoop 的 map、reduce 等操作对 Tsfile 文件进行读取、写入和查询。</p><p>有了这个连接器，用户可以</p><ul><li>将单个 Tsfile 文件加载进 Hadoop，不论文件是存储在本地文件系统或者是 HDFS 中</li><li>将某个特定目录下的所有文件加载进 Hadoop，不论文件是存储在本地文件系统或者是 HDFS 中</li><li>将 Hadoop 处理完后的结果以 Tsfile 的格式保存</li></ul><h3 id="系统环境要求" tabindex="-1"><a class="header-anchor" href="#系统环境要求"><span>系统环境要求</span></a></h3><table><thead><tr><th>Hadoop 版本</th><th>Java 版本</th><th>TsFile 版本</th></tr></thead><tbody><tr><td><code>2.7.3</code></td><td><code>1.8</code></td><td><code>1.0.0+</code></td></tr></tbody></table><blockquote><p>注意：关于如何下载和使用 Tsfile, 请参考以下链接：<a href="https://github.com/apache/iotdb/tree/master/tsfile" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master/tsfile</a>.</p></blockquote><h3 id="数据类型对应关系" tabindex="-1"><a class="header-anchor" href="#数据类型对应关系"><span>数据类型对应关系</span></a></h3><table><thead><tr><th>TsFile 数据类型</th><th>Hadoop writable</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>BooleanWritable</td></tr><tr><td>INT32</td><td>IntWritable</td></tr><tr><td>INT64</td><td>LongWritable</td></tr><tr><td>FLOAT</td><td>FloatWritable</td></tr><tr><td>DOUBLE</td><td>DoubleWritable</td></tr><tr><td>TEXT</td><td>Text</td></tr></tbody></table><h3 id="关于-tsfinputformat-的说明" tabindex="-1"><a class="header-anchor" href="#关于-tsfinputformat-的说明"><span>关于 TSFInputFormat 的说明</span></a></h3><p>TSFInputFormat 继承了 Hadoop 中 FileInputFormat 类，重写了其中切片的方法。</p><p>目前的切片方法是根据每个 ChunkGroup 的中点的 offset 是否属于 Hadoop 所切片的 startOffset 和 endOffset 之间，来判断是否将该 ChunkGroup 放入此切片。</p><p>TSFInputFormat 将 tsfile 中的数据以多个<code>MapWritable</code>记录的形式返回给用户。</p><p>假设我们想要从 Tsfile 中获得名为<code>d1</code>的设备的数据，该设备有三个传感器，名称分别为<code>s1</code>, <code>s2</code>, <code>s3</code>。</p><p><code>s1</code>的类型是<code>BOOLEAN</code>, <code>s2</code>的类型是 <code>DOUBLE</code>, <code>s3</code>的类型是<code>TEXT</code>.</p><p><code>MapWritable</code>的结构如下所示：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;time_stamp&quot;: 10000000,</span>
<span class="line">    &quot;device_id&quot;:  d1,</span>
<span class="line">    &quot;s1&quot;:         true,</span>
<span class="line">    &quot;s2&quot;:         3.14,</span>
<span class="line">    &quot;s3&quot;:         &quot;middle&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Hadoop 的 Map job 中，你可以采用如下方法获得你想要的任何值</p><p><code>mapwritable.get(new Text(&quot;s1&quot;))</code></p><blockquote><p>注意：<code>MapWritable</code>中所有的键值类型都是<code>Text</code>。</p></blockquote><h3 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h3><h4 id="读示例-求和" tabindex="-1"><a class="header-anchor" href="#读示例-求和"><span>读示例：求和</span></a></h4><p>首先，我们需要在 TSFInputFormat 中配置我们需要哪些数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// configure reading time enable</span>
<span class="line">TSFInputFormat.setReadTime(job, true); </span>
<span class="line">// configure reading deviceId enable</span>
<span class="line">TSFInputFormat.setReadDeviceId(job, true); </span>
<span class="line">// configure reading which deltaObjectIds</span>
<span class="line">String[] deviceIds = {&quot;device_1&quot;};</span>
<span class="line">TSFInputFormat.setReadDeviceIds(job, deltaObjectIds);</span>
<span class="line">// configure reading which measurementIds</span>
<span class="line">String[] measurementIds = {&quot;sensor_1&quot;, &quot;sensor_2&quot;, &quot;sensor_3&quot;};</span>
<span class="line">TSFInputFormat.setReadMeasurementIds(job, measurementIds);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，必须指定 mapper 和 reducer 输出的键和值类型</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">// set inputformat and outputformat</span>
<span class="line">job.setInputFormatClass(TSFInputFormat.class);</span>
<span class="line">// set mapper output key and value</span>
<span class="line">job.setMapOutputKeyClass(Text.class);</span>
<span class="line">job.setMapOutputValueClass(DoubleWritable.class);</span>
<span class="line">// set reducer output key and value</span>
<span class="line">job.setOutputKeyClass(Text.class);</span>
<span class="line">job.setOutputValueClass(DoubleWritable.class);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接着，就可以编写包含具体的处理数据逻辑的<code>mapper</code>和<code>reducer</code>类了。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public static class TSMapper extends Mapper&lt;NullWritable, MapWritable, Text, DoubleWritable&gt; {</span>
<span class="line"></span>
<span class="line">	@Override</span>
<span class="line">	protected void map(NullWritable key, MapWritable value,</span>
<span class="line">	    Mapper&lt;NullWritable, MapWritable, Text, DoubleWritable&gt;.Context context)</span>
<span class="line">	    throws IOException, InterruptedException {</span>
<span class="line">	</span>
<span class="line">	  Text deltaObjectId = (Text) value.get(new Text(&quot;device_id&quot;));</span>
<span class="line">	  context.write(deltaObjectId, (DoubleWritable) value.get(new Text(&quot;sensor_3&quot;)));</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">public static class TSReducer extends Reducer&lt;Text, DoubleWritable, Text, DoubleWritable&gt; {</span>
<span class="line"></span>
<span class="line">	@Override</span>
<span class="line">	protected void reduce(Text key, Iterable&lt;DoubleWritable&gt; values,</span>
<span class="line">	    Reducer&lt;Text, DoubleWritable, Text, DoubleWritable&gt;.Context context)</span>
<span class="line">	    throws IOException, InterruptedException {</span>
<span class="line">	</span>
<span class="line">	  double sum = 0;</span>
<span class="line">	  for (DoubleWritable value : values) {</span>
<span class="line">	    sum = sum + value.get();</span>
<span class="line">	  }</span>
<span class="line">	  context.write(key, new DoubleWritable(sum));</span>
<span class="line">	}</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：完整的代码示例可以在如下链接中找到：<a href="https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb/hadoop/tsfile/TSFMRReadExample.java" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb/hadoop/tsfile/TSFMRReadExample.java</a></p></blockquote><h3 id="写示例-计算平均数并写入-tsfile-中" tabindex="-1"><a class="header-anchor" href="#写示例-计算平均数并写入-tsfile-中"><span>写示例：计算平均数并写入 Tsfile 中</span></a></h3><p>除了<code>OutputFormatClass</code>，剩下的配置代码跟上面的读示例是一样的</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">job.setOutputFormatClass(TSFOutputFormat.class);</span>
<span class="line">// set reducer output key and value</span>
<span class="line">job.setOutputKeyClass(NullWritable.class);</span>
<span class="line">job.setOutputValueClass(HDFSTSRecord.class);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，是包含具体的处理数据逻辑的<code>mapper</code>和<code>reducer</code>类。</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">public static class TSMapper extends Mapper&lt;NullWritable, MapWritable, Text, MapWritable&gt; {</span>
<span class="line"></span>
<span class="line">    @Override</span>
<span class="line">    protected void map(NullWritable key, MapWritable value,</span>
<span class="line">                       Mapper&lt;NullWritable, MapWritable, Text, MapWritable&gt;.Context context)</span>
<span class="line">            throws IOException, InterruptedException {</span>
<span class="line"></span>
<span class="line">        Text deltaObjectId = (Text) value.get(new Text(&quot;device_id&quot;));</span>
<span class="line">        long timestamp = ((LongWritable)value.get(new Text(&quot;timestamp&quot;))).get();</span>
<span class="line">        if (timestamp % 100000 == 0) {</span>
<span class="line">            context.write(deltaObjectId, new MapWritable(value));</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">/**</span>
<span class="line"> * This reducer calculate the average value.</span>
<span class="line"> */</span>
<span class="line">public static class TSReducer extends Reducer&lt;Text, MapWritable, NullWritable, HDFSTSRecord&gt; {</span>
<span class="line"></span>
<span class="line">    @Override</span>
<span class="line">    protected void reduce(Text key, Iterable&lt;MapWritable&gt; values,</span>
<span class="line">                          Reducer&lt;Text, MapWritable, NullWritable, HDFSTSRecord&gt;.Context context) throws IOException, InterruptedException {</span>
<span class="line">        long sensor1_value_sum = 0;</span>
<span class="line">        long sensor2_value_sum = 0;</span>
<span class="line">        double sensor3_value_sum = 0;</span>
<span class="line">        long num = 0;</span>
<span class="line">        for (MapWritable value : values) {</span>
<span class="line">            num++;</span>
<span class="line">            sensor1_value_sum += ((LongWritable)value.get(new Text(&quot;sensor_1&quot;))).get();</span>
<span class="line">            sensor2_value_sum += ((LongWritable)value.get(new Text(&quot;sensor_2&quot;))).get();</span>
<span class="line">            sensor3_value_sum += ((DoubleWritable)value.get(new Text(&quot;sensor_3&quot;))).get();</span>
<span class="line">        }</span>
<span class="line">        HDFSTSRecord tsRecord = new HDFSTSRecord(1L, key.toString());</span>
<span class="line">        DataPoint dPoint1 = new LongDataPoint(&quot;sensor_1&quot;, sensor1_value_sum / num);</span>
<span class="line">        DataPoint dPoint2 = new LongDataPoint(&quot;sensor_2&quot;, sensor2_value_sum / num);</span>
<span class="line">        DataPoint dPoint3 = new DoubleDataPoint(&quot;sensor_3&quot;, sensor3_value_sum / num);</span>
<span class="line">        tsRecord.addTuple(dPoint1);</span>
<span class="line">        tsRecord.addTuple(dPoint2);</span>
<span class="line">        tsRecord.addTuple(dPoint3);</span>
<span class="line">        context.write(NullWritable.get(), tsRecord);</span>
<span class="line">    }</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>注意：完整的代码示例可以在如下链接中找到：<a href="https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb/hadoop/tsfile/TSMRWriteExample.java" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb/hadoop/tsfile/TSMRWriteExample.java</a></p></blockquote>`,35)]))}const p=s(t,[["render",i],["__file","MapReduce-TsFile.html.vue"]]),c=JSON.parse('{"path":"/zh/UserGuide/V1.1.x/Ecosystem-Integration/MapReduce-TsFile.html","title":"","lang":"zh-CN","frontmatter":{"description":"Hadoop-TsFile TsFile 的 Hadoop 连接器实现了对 Hadoop 读取外部 Tsfile 类型的文件格式的支持。让用户可以使用 Hadoop 的 map、reduce 等操作对 Tsfile 文件进行读取、写入和查询。 有了这个连接器，用户可以 将单个 Tsfile 文件加载进 Hadoop，不论文件是存储在本地文件系统或者是 ...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.1.x/Ecosystem-Integration/MapReduce-TsFile.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Ecosystem-Integration/MapReduce-TsFile.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Hadoop-TsFile TsFile 的 Hadoop 连接器实现了对 Hadoop 读取外部 Tsfile 类型的文件格式的支持。让用户可以使用 Hadoop 的 map、reduce 等操作对 Tsfile 文件进行读取、写入和查询。 有了这个连接器，用户可以 将单个 Tsfile 文件加载进 Hadoop，不论文件是存储在本地文件系统或者是 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Hadoop-TsFile","slug":"hadoop-tsfile","link":"#hadoop-tsfile","children":[{"level":3,"title":"系统环境要求","slug":"系统环境要求","link":"#系统环境要求","children":[]},{"level":3,"title":"数据类型对应关系","slug":"数据类型对应关系","link":"#数据类型对应关系","children":[]},{"level":3,"title":"关于 TSFInputFormat 的说明","slug":"关于-tsfinputformat-的说明","link":"#关于-tsfinputformat-的说明","children":[]},{"level":3,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[]},{"level":3,"title":"写示例：计算平均数并写入 Tsfile 中","slug":"写示例-计算平均数并写入-tsfile-中","link":"#写示例-计算平均数并写入-tsfile-中","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":3.44,"words":1031},"filePathRelative":"zh/UserGuide/V1.1.x/Ecosystem-Integration/MapReduce-TsFile.md","localizedDate":"2023年7月10日","autoDesc":true}');export{p as comp,c as data};
