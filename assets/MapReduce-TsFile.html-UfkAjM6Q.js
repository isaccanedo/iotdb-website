import{_ as s,c as a,b as n,o as t}from"./app-BHE9oQwv.js";const l={};function i(d,e){return t(),a("div",null,e[0]||(e[0]=[n(`<h2 id="hadoop-tsfile" tabindex="-1"><a class="header-anchor" href="#hadoop-tsfile"><span>Hadoop-TsFile</span></a></h2><h3 id="about-hadoop-tsfile-connector" tabindex="-1"><a class="header-anchor" href="#about-hadoop-tsfile-connector"><span>About Hadoop-TsFile-Connector</span></a></h3><p>TsFile-Hadoop-Connector implements the support of Hadoop for external data sources of Tsfile type. This enables users to read, write and query Tsfile by Hadoop.</p><p>With this connector, you can</p><ul><li>load a single TsFile, from either the local file system or hdfs, into Hadoop</li><li>load all files in a specific directory, from either the local file system or hdfs, into hadoop</li><li>write data from Hadoop into TsFile</li></ul><h3 id="system-requirements" tabindex="-1"><a class="header-anchor" href="#system-requirements"><span>System Requirements</span></a></h3><table><thead><tr><th style="text-align:center;">Hadoop Version</th><th style="text-align:center;">Java Version</th><th style="text-align:center;">TsFile Version</th></tr></thead><tbody><tr><td style="text-align:center;"><code>2.7.3</code></td><td style="text-align:center;"><code>1.8</code></td><td style="text-align:center;"><code>1.0.0</code></td></tr></tbody></table><blockquote><p>Note: For more information about how to download and use TsFile, please see the following link: <a href="https://github.com/apache/iotdb/tree/master/tsfile" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/tree/master/tsfile</a>.</p></blockquote><h3 id="data-type-correspondence" tabindex="-1"><a class="header-anchor" href="#data-type-correspondence"><span>Data Type Correspondence</span></a></h3><table><thead><tr><th>TsFile data type</th><th>Hadoop writable</th></tr></thead><tbody><tr><td>BOOLEAN</td><td>BooleanWritable</td></tr><tr><td>INT32</td><td>IntWritable</td></tr><tr><td>INT64</td><td>LongWritable</td></tr><tr><td>FLOAT</td><td>FloatWritable</td></tr><tr><td>DOUBLE</td><td>DoubleWritable</td></tr><tr><td>TEXT</td><td>Text</td></tr></tbody></table><h3 id="tsfinputformat-explanation" tabindex="-1"><a class="header-anchor" href="#tsfinputformat-explanation"><span>TSFInputFormat Explanation</span></a></h3><p>TSFInputFormat extract data from tsfile and format them into records of <code>MapWritable</code>.</p><p>Suppose that we want to extract data of the device named <code>d1</code> which has three sensors named <code>s1</code>, <code>s2</code>, <code>s3</code>.</p><p><code>s1</code>&#39;s type is <code>BOOLEAN</code>, <code>s2</code>&#39;s type is <code>DOUBLE</code>, <code>s3</code>&#39;s type is <code>TEXT</code>.</p><p>The <code>MapWritable</code> struct will be like:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">{</span>
<span class="line">    &quot;time_stamp&quot;: 10000000,</span>
<span class="line">    &quot;device_id&quot;:  d1,</span>
<span class="line">    &quot;s1&quot;:         true,</span>
<span class="line">    &quot;s2&quot;:         3.14,</span>
<span class="line">    &quot;s3&quot;:         &quot;middle&quot;</span>
<span class="line">}</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>In the Map job of Hadoop, you can get any value you want by key as following:</p><p><code>mapwritable.get(new Text(&quot;s1&quot;))</code></p><blockquote><p>Note: All keys in <code>MapWritable</code> are <code>Text</code> type.</p></blockquote><h3 id="examples" tabindex="-1"><a class="header-anchor" href="#examples"><span>Examples</span></a></h3><h4 id="read-example-calculate-the-sum" tabindex="-1"><a class="header-anchor" href="#read-example-calculate-the-sum"><span>Read Example: calculate the sum</span></a></h4><p>First of all, we should tell InputFormat what kind of data we want from tsfile.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    // configure reading time enable</span>
<span class="line">    TSFInputFormat.setReadTime(job, true); </span>
<span class="line">    // configure reading deviceId enable</span>
<span class="line">    TSFInputFormat.setReadDeviceId(job, true); </span>
<span class="line">    // configure reading which deltaObjectIds</span>
<span class="line">    String[] deviceIds = {&quot;device_1&quot;};</span>
<span class="line">    TSFInputFormat.setReadDeviceIds(job, deltaObjectIds);</span>
<span class="line">    // configure reading which measurementIds</span>
<span class="line">    String[] measurementIds = {&quot;sensor_1&quot;, &quot;sensor_2&quot;, &quot;sensor_3&quot;};</span>
<span class="line">    TSFInputFormat.setReadMeasurementIds(job, measurementIds);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>And then,the output key and value of mapper and reducer should be specified</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    // set inputformat and outputformat</span>
<span class="line">    job.setInputFormatClass(TSFInputFormat.class);</span>
<span class="line">    // set mapper output key and value</span>
<span class="line">    job.setMapOutputKeyClass(Text.class);</span>
<span class="line">    job.setMapOutputValueClass(DoubleWritable.class);</span>
<span class="line">    // set reducer output key and value</span>
<span class="line">    job.setOutputKeyClass(Text.class);</span>
<span class="line">    job.setOutputValueClass(DoubleWritable.class);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, the <code>mapper</code> and <code>reducer</code> class is how you deal with the <code>MapWritable</code> produced by <code>TSFInputFormat</code> class.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">  public static class TSMapper extends Mapper&lt;NullWritable, MapWritable, Text, DoubleWritable&gt; {</span>
<span class="line"></span>
<span class="line">    @Override</span>
<span class="line">    protected void map(NullWritable key, MapWritable value,</span>
<span class="line">        Mapper&lt;NullWritable, MapWritable, Text, DoubleWritable&gt;.Context context)</span>
<span class="line">        throws IOException, InterruptedException {</span>
<span class="line"></span>
<span class="line">      Text deltaObjectId = (Text) value.get(new Text(&quot;device_id&quot;));</span>
<span class="line">      context.write(deltaObjectId, (DoubleWritable) value.get(new Text(&quot;sensor_3&quot;)));</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line"></span>
<span class="line">  public static class TSReducer extends Reducer&lt;Text, DoubleWritable, Text, DoubleWritable&gt; {</span>
<span class="line"></span>
<span class="line">    @Override</span>
<span class="line">    protected void reduce(Text key, Iterable&lt;DoubleWritable&gt; values,</span>
<span class="line">        Reducer&lt;Text, DoubleWritable, Text, DoubleWritable&gt;.Context context)</span>
<span class="line">        throws IOException, InterruptedException {</span>
<span class="line"></span>
<span class="line">      double sum = 0;</span>
<span class="line">      for (DoubleWritable value : values) {</span>
<span class="line">        sum = sum + value.get();</span>
<span class="line">      }</span>
<span class="line">      context.write(key, new DoubleWritable(sum));</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: For the complete code, please see the following link: <a href="https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb//hadoop/tsfile/TSFMRReadExample.java" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb//hadoop/tsfile/TSFMRReadExample.java</a></p></blockquote><h4 id="write-example-write-the-average-into-tsfile" tabindex="-1"><a class="header-anchor" href="#write-example-write-the-average-into-tsfile"><span>Write Example: write the average into Tsfile</span></a></h4><p>Except for the <code>OutputFormatClass</code>, the rest of configuration code for hadoop map-reduce job is almost same as above.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">   job.setOutputFormatClass(TSFOutputFormat.class);</span>
<span class="line">   // set reducer output key and value</span>
<span class="line">   job.setOutputKeyClass(NullWritable.class);</span>
<span class="line">   job.setOutputValueClass(HDFSTSRecord.class);</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then, the <code>mapper</code> and <code>reducer</code> class is how you deal with the <code>MapWritable</code> produced by <code>TSFInputFormat</code> class.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">    public static class TSMapper extends Mapper&lt;NullWritable, MapWritable, Text, MapWritable&gt; {</span>
<span class="line">        @Override</span>
<span class="line">        protected void map(NullWritable key, MapWritable value,</span>
<span class="line">                           Mapper&lt;NullWritable, MapWritable, Text, MapWritable&gt;.Context context)</span>
<span class="line">                throws IOException, InterruptedException {</span>
<span class="line"></span>
<span class="line">            Text deltaObjectId = (Text) value.get(new Text(&quot;device_id&quot;));</span>
<span class="line">            long timestamp = ((LongWritable)value.get(new Text(&quot;timestamp&quot;))).get();</span>
<span class="line">            if (timestamp % 100000 == 0) {</span>
<span class="line">                context.write(deltaObjectId, new MapWritable(value));</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span>
<span class="line">    /**</span>
<span class="line">     * This reducer calculate the average value.</span>
<span class="line">     */</span>
<span class="line">    public static class TSReducer extends Reducer&lt;Text, MapWritable, NullWritable, HDFSTSRecord&gt; {</span>
<span class="line"></span>
<span class="line">        @Override</span>
<span class="line">        protected void reduce(Text key, Iterable&lt;MapWritable&gt; values,</span>
<span class="line">                              Reducer&lt;Text, MapWritable, NullWritable, HDFSTSRecord&gt;.Context context) throws IOException, InterruptedException {</span>
<span class="line">            long sensor1_value_sum = 0;</span>
<span class="line">            long sensor2_value_sum = 0;</span>
<span class="line">            double sensor3_value_sum = 0;</span>
<span class="line">            long num = 0;</span>
<span class="line">            for (MapWritable value : values) {</span>
<span class="line">                num++;</span>
<span class="line">                sensor1_value_sum += ((LongWritable)value.get(new Text(&quot;sensor_1&quot;))).get();</span>
<span class="line">                sensor2_value_sum += ((LongWritable)value.get(new Text(&quot;sensor_2&quot;))).get();</span>
<span class="line">                sensor3_value_sum += ((DoubleWritable)value.get(new Text(&quot;sensor_3&quot;))).get();</span>
<span class="line">            }</span>
<span class="line">            HDFSTSRecord tsRecord = new HDFSTSRecord(1L, key.toString());</span>
<span class="line">            DataPoint dPoint1 = new LongDataPoint(&quot;sensor_1&quot;, sensor1_value_sum / num);</span>
<span class="line">            DataPoint dPoint2 = new LongDataPoint(&quot;sensor_2&quot;, sensor2_value_sum / num);</span>
<span class="line">            DataPoint dPoint3 = new DoubleDataPoint(&quot;sensor_3&quot;, sensor3_value_sum / num);</span>
<span class="line">            tsRecord.addTuple(dPoint1);</span>
<span class="line">            tsRecord.addTuple(dPoint2);</span>
<span class="line">            tsRecord.addTuple(dPoint3);</span>
<span class="line">            context.write(NullWritable.get(), tsRecord);</span>
<span class="line">        }</span>
<span class="line">    }</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>Note: For the complete code, please see the following link: <a href="https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb//hadoop/tsfile/TSMRWriteExample.java" target="_blank" rel="noopener noreferrer">https://github.com/apache/iotdb/blob/master/example/hadoop/src/main/java/org/apache/iotdb//hadoop/tsfile/TSMRWriteExample.java</a></p></blockquote>`,34)]))}const r=s(l,[["render",i],["__file","MapReduce-TsFile.html.vue"]]),p=JSON.parse('{"path":"/UserGuide/V1.1.x/Ecosystem-Integration/MapReduce-TsFile.html","title":"","lang":"en-US","frontmatter":{"description":"Hadoop-TsFile About Hadoop-TsFile-Connector TsFile-Hadoop-Connector implements the support of Hadoop for external data sources of Tsfile type. This enables users to read, write ...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Ecosystem-Integration/MapReduce-TsFile.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Ecosystem-Integration/MapReduce-TsFile.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"Hadoop-TsFile About Hadoop-TsFile-Connector TsFile-Hadoop-Connector implements the support of Hadoop for external data sources of Tsfile type. This enables users to read, write ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Hadoop-TsFile","slug":"hadoop-tsfile","link":"#hadoop-tsfile","children":[{"level":3,"title":"About Hadoop-TsFile-Connector","slug":"about-hadoop-tsfile-connector","link":"#about-hadoop-tsfile-connector","children":[]},{"level":3,"title":"System Requirements","slug":"system-requirements","link":"#system-requirements","children":[]},{"level":3,"title":"Data Type Correspondence","slug":"data-type-correspondence","link":"#data-type-correspondence","children":[]},{"level":3,"title":"TSFInputFormat Explanation","slug":"tsfinputformat-explanation","link":"#tsfinputformat-explanation","children":[]},{"level":3,"title":"Examples","slug":"examples","link":"#examples","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":2.62,"words":787},"filePathRelative":"UserGuide/V1.1.x/Ecosystem-Integration/MapReduce-TsFile.md","localizedDate":"July 10, 2023","autoDesc":true}');export{r as comp,p as data};
