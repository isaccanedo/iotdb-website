import{_ as s,c as n,b as a,o as l}from"./app-BHE9oQwv.js";const i={};function t(r,e){return l(),n("div",null,e[0]||(e[0]=[a(`<h2 id="sql-参考文档" tabindex="-1"><a class="header-anchor" href="#sql-参考文档"><span>SQL 参考文档</span></a></h2><h3 id="显示版本号" tabindex="-1"><a class="header-anchor" href="#显示版本号"><span>显示版本号</span></a></h3><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">show</span> version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+---------------+</span>
<span class="line">|        version|</span>
<span class="line">+---------------+</span>
<span class="line">|0.13.0-SNAPSHOT|</span>
<span class="line">+---------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.417s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="schema-语句" tabindex="-1"><a class="header-anchor" href="#schema-语句"><span>Schema 语句</span></a></h3><ul><li>设置存储组</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">SET STORAGE GROUP TO &lt;FullPath&gt;</span>
<span class="line">Eg: IoTDB &gt; SET STORAGE GROUP TO root.ln.wf01.wt01</span>
<span class="line">Note: FullPath can not include wildcard \`*\` or \`**\`</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除存储组</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DELETE STORAGE GROUP &lt;PathPattern&gt; [COMMA &lt;PathPattern&gt;]*</span>
<span class="line">Eg: IoTDB &gt; DELETE STORAGE GROUP root.ln</span>
<span class="line">Eg: IoTDB &gt; DELETE STORAGE GROUP root.*</span>
<span class="line">Eg: IoTDB &gt; DELETE STORAGE GROUP root.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建时间序列语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE TIMESERIES &lt;FullPath&gt; WITH &lt;AttributeClauses&gt;</span>
<span class="line">alias</span>
<span class="line">    : LR_BRACKET ID RR_BRACKET</span>
<span class="line">    ;</span>
<span class="line">attributeClauses</span>
<span class="line">    : DATATYPE OPERATOR_EQ &lt;DataTypeValue&gt; </span>
<span class="line">    COMMA ENCODING OPERATOR_EQ &lt;EncodingValue&gt;</span>
<span class="line">    (COMMA (COMPRESSOR | COMPRESSION) OPERATOR_EQ &lt;CompressorValue&gt;)?</span>
<span class="line">    (COMMA property)*</span>
<span class="line">    tagClause</span>
<span class="line">    attributeClause</span>
<span class="line">    ;</span>
<span class="line">attributeClause</span>
<span class="line">    : ATTRIBUTES LR_BRACKET propertyClause (COMMA propertyClause)* RR_BRACKET</span>
<span class="line">    ;</span>
<span class="line">tagClause</span>
<span class="line">    : TAGS LR_BRACKET propertyClause (COMMA propertyClause)* RR_BRACKET</span>
<span class="line">    ;</span>
<span class="line">propertyClause</span>
<span class="line">    : name=ID OPERATOR_EQ propertyValue</span>
<span class="line">    ;</span>
<span class="line">DataTypeValue: BOOLEAN | DOUBLE | FLOAT | INT32 | INT64 | TEXT</span>
<span class="line">EncodingValue: GORILLA | PLAIN | RLE | TS_2DIFF | REGULAR</span>
<span class="line">CompressorValue: UNCOMPRESSED | SNAPPY</span>
<span class="line">AttributesType: SDT | COMPDEV | COMPMINTIME | COMPMAXTIME</span>
<span class="line">PropertyValue: ID | constant</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.status WITH DATATYPE=BOOLEAN, ENCODING=PLAIN</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, COMPRESSOR=SNAPPY, MAX_POINT_NUMBER=3</span>
<span class="line">Eg: CREATE TIMESERIES root.turbine.d0.s0(temperature) WITH DATATYPE=FLOAT, ENCODING=RLE, COMPRESSOR=SNAPPY tags(unit=f, description=&#39;turbine this is a test1&#39;) attributes(H_Alarm=100, M_Alarm=50)</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, LOSS=SDT, COMPDEV=0.01</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, LOSS=SDT, COMPDEV=0.01, COMPMINTIME=3</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, LOSS=SDT, COMPDEV=0.01, COMPMINTIME=2, COMPMAXTIME=15</span>
<span class="line">Note: Datatype and encoding type must be corresponding. Please check Chapter 3 Encoding Section for details.</span>
<span class="line">Note: When propertyValue is SDT, it is required to set compression deviation COMPDEV, which is the maximum absolute difference between values.</span>
<span class="line">Note: For SDT, values withtin COMPDEV will be discarded.</span>
<span class="line">Note: For SDT, it is optional to set compression minimum COMPMINTIME, which is the minimum time difference between stored values for purpose of noise reduction.</span>
<span class="line">Note: For SDT, it is optional to set compression maximum COMPMAXTIME, which is the maximum time difference between stored values regardless of COMPDEV.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建时间序列语句（简化版本，从v0.13起支持）</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE TIMESERIES &lt;FullPath&gt; &lt;SimplifiedAttributeClauses&gt;</span>
<span class="line">SimplifiedAttributeClauses</span>
<span class="line">    : WITH? (DATATYPE OPERATOR_EQ)? &lt;DataTypeValue&gt; </span>
<span class="line">    ENCODING OPERATOR_EQ &lt;EncodingValue&gt;</span>
<span class="line">    ((COMPRESSOR | COMPRESSION) OPERATOR_EQ &lt;CompressorValue&gt;)?</span>
<span class="line">    (COMMA property)*</span>
<span class="line">    tagClause</span>
<span class="line">    attributeClause</span>
<span class="line">    ;</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.status BOOLEAN ENCODING=PLAIN</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE COMPRESSOR=SNAPPY MAX_POINT_NUMBER=3</span>
<span class="line">Eg: CREATE TIMESERIES root.turbine.d0.s0(temperature) FLOAT ENCODING=RLE COMPRESSOR=SNAPPY tags(unit=f, description=&#39;turbine this is a test1&#39;) attributes(H_Alarm=100, M_Alarm=50)</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE LOSS=SDT COMPDEV=0.01</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE LOSS=SDT COMPDEV=0.01 COMPMINTIME=3</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE LOSS=SDT COMPDEV=0.01 COMPMINTIME=2 COMPMAXTIME=15</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建对齐时间序列语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE ALIGNED TIMESERIES &lt;FullPath&gt; alignedMeasurements</span>
<span class="line">alignedMeasurements</span>
<span class="line">    : LR_BRACKET nodeNameWithoutWildcard attributeClauses</span>
<span class="line">    (COMMA nodeNameWithoutWildcard attributeClauses)+ RR_BRACKET</span>
<span class="line">    ;</span>
<span class="line">Eg: CREATE ALIGNED TIMESERIES root.ln.wf01.GPS(lat FLOAT ENCODING=GORILLA, lon FLOAT ENCODING=GORILLA COMPRESSOR=SNAPPY)</span>
<span class="line">Note: It is not supported to set different compression for a group of aligned timeseries.</span>
<span class="line">Note: It is not currently supported to set an alias, tag, and attribute for aligned timeseries.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建元数据模板语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE SCHEMA TEMPLATE &lt;TemplateName&gt; LR_BRACKET &lt;TemplateMeasurementClause&gt; (COMMA plateMeasurementClause&gt;)* RR_BRACKET</span>
<span class="line">templateMeasurementClause</span>
<span class="line">    : suffixPath attributeClauses #nonAlignedTemplateMeasurement</span>
<span class="line">    | suffixPath LR_BRACKET nodeNameWithoutWildcard attributeClauses </span>
<span class="line">    (COMMA nodeNameWithoutWildcard attributeClauses)+ RR_BRACKET #alignedTemplateMeasurement</span>
<span class="line">    ;</span>
<span class="line">Eg: CREATE SCHEMA TEMPLATE temp1(</span>
<span class="line">        s1 INT32 encoding=Gorilla, compression=SNAPPY,</span>
<span class="line">        vector1(</span>
<span class="line">            s1 INT32 encoding=Gorilla,</span>
<span class="line">            s2 FLOAT encoding=RLE, compression=SNAPPY)</span>
<span class="line">    )</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>挂载元数据模板语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SET SCHEMA TEMPLATE &lt;TemplateName&gt; TO &lt;PrefixPath&gt;</span>
<span class="line">Eg: SET SCHEMA TEMPLATE temp1 TO root.beijing</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>根据元数据模板创建时间序列语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE TIMESERIES OF SCHEMA TEMPLATE ON &lt;PrefixPath&gt;</span>
<span class="line">Eg: CREATE TIMESERIES OF SCHEMA TEMPLATE ON root.beijing</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>卸载元数据模板语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">UNSET SCHEMA TEMPLATE &lt;TemplateName&gt; FROM &lt;PrefixPath&gt;</span>
<span class="line">Eg: UNSET SCHEMA TEMPLATE temp1 FROM root.beijing</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除时间序列语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DELETE TIMESERIES &lt;PathPattern&gt; [COMMA &lt;PathPattern&gt;]*</span>
<span class="line">Eg: IoTDB &gt; DELETE TIMESERIES root.ln.wf01.wt01.status</span>
<span class="line">Eg: IoTDB &gt; DELETE TIMESERIES root.ln.wf01.wt01.status, root.ln.wf01.wt01.temperature</span>
<span class="line">Eg: IoTDB &gt; DELETE TIMESERIES root.ln.wf01.wt01.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>修改时间序列标签属性语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER TIMESERIES fullPath alterClause</span>
<span class="line">alterClause</span>
<span class="line">    : RENAME beforeName=ID TO currentName=ID</span>
<span class="line">    | SET property (COMMA property)*</span>
<span class="line">    | DROP ID (COMMA ID)*</span>
<span class="line">    | ADD TAGS property (COMMA property)*</span>
<span class="line">    | ADD ATTRIBUTES property (COMMA property)*</span>
<span class="line">    | UPSERT tagClause attributeClause</span>
<span class="line">    ;</span>
<span class="line">attributeClause</span>
<span class="line">    : (ATTRIBUTES LR_BRACKET property (COMMA property)* RR_BRACKET)?</span>
<span class="line">    ;</span>
<span class="line">tagClause</span>
<span class="line">    : (TAGS LR_BRACKET property (COMMA property)* RR_BRACKET)?</span>
<span class="line">    ;</span>
<span class="line">Eg: ALTER timeseries root.turbine.d1.s1 RENAME tag1 TO newTag1</span>
<span class="line">Eg: ALTER timeseries root.turbine.d1.s1 SET tag1=newV1, attr1=newV1</span>
<span class="line">Eg: ALTER timeseries root.turbine.d1.s1 DROP tag1, tag2</span>
<span class="line">Eg: ALTER timeseries root.turbine.d1.s1 ADD TAGS tag3=v3, tag4=v4</span>
<span class="line">Eg: ALTER timeseries root.turbine.d1.s1 ADD ATTRIBUTES attr3=v3, attr4=v4</span>
<span class="line">EG: ALTER timeseries root.turbine.d1.s1 UPSERT TAGS(tag2=newV2, tag3=v3) ATTRIBUTES(attr3=v3, attr4=v4)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示所有时间序列语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW TIMESERIES</span>
<span class="line">Eg: IoTDB &gt; SHOW TIMESERIES</span>
<span class="line">Note: This statement can only be used in IoTDB Client. If you need to show all timeseries in JDBC, please use \`DataBaseMetadata\` interface.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示特定时间序列语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW TIMESERIES &lt;Path&gt;</span>
<span class="line">Eg: IoTDB &gt; SHOW TIMESERIES root.**</span>
<span class="line">Eg: IoTDB &gt; SHOW TIMESERIES root.ln.**</span>
<span class="line">Eg: IoTDB &gt; SHOW TIMESERIES root.ln.*.*.status</span>
<span class="line">Eg: IoTDB &gt; SHOW TIMESERIES root.ln.wf01.wt01.status</span>
<span class="line">Note: The path can be timeseries path or path pattern</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示满足条件的时间序列语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW TIMESERIES pathPattern? showWhereClause?</span>
<span class="line">showWhereClause</span>
<span class="line">    : WHERE (property | containsExpression)</span>
<span class="line">    ;</span>
<span class="line">containsExpression</span>
<span class="line">    : name=ID OPERATOR_CONTAINS value=propertyValue</span>
<span class="line">    ;</span>
<span class="line"></span>
<span class="line">Eg: show timeseries root.ln.** where unit=&#39;c&#39;</span>
<span class="line">Eg: show timeseries root.ln.** where description contains &#39;test1&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>分页显示满足条件的时间序列语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW TIMESERIES pathPattern? showWhereClause? limitClause?</span>
<span class="line"></span>
<span class="line">showWhereClause</span>
<span class="line">    : WHERE (property | containsExpression)</span>
<span class="line">    ;</span>
<span class="line">containsExpression</span>
<span class="line">    : name=ID OPERATOR_CONTAINS value=propertyValue</span>
<span class="line">    ;</span>
<span class="line">limitClause</span>
<span class="line">    : LIMIT INT offsetClause?</span>
<span class="line">    | offsetClause? LIMIT INT</span>
<span class="line">    ;</span>
<span class="line">    </span>
<span class="line">Eg: show timeseries root.ln.** where unit=&#39;c&#39;</span>
<span class="line">Eg: show timeseries root.ln.** where description contains &#39;test1&#39;</span>
<span class="line">Eg: show timeseries root.ln.** where unit=&#39;c&#39; limit 10 offset 10</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示存储组语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW STORAGE GROUP</span>
<span class="line">Eg: IoTDB &gt; SHOW STORAGE GROUP</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示特定存储组语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW STORAGE GROUP &lt;PathPattern&gt;</span>
<span class="line">Eg: IoTDB &gt; SHOW STORAGE GROUP root.*</span>
<span class="line">Eg: IoTDB &gt; SHOW STORAGE GROUP root.**</span>
<span class="line">Eg: IoTDB &gt; SHOW STORAGE GROUP root.ln</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示 Merge 状态语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW MERGE INFO</span>
<span class="line">Eg: IoTDB &gt; SHOW MERGE INFO</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示指定路径下时间序列数语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">COUNT TIMESERIES &lt;Path&gt;</span>
<span class="line">Eg: IoTDB &gt; COUNT TIMESERIES root.**</span>
<span class="line">Eg: IoTDB &gt; COUNT TIMESERIES root.ln.**</span>
<span class="line">Eg: IoTDB &gt; COUNT TIMESERIES root.ln.*.*.status</span>
<span class="line">Eg: IoTDB &gt; COUNT TIMESERIES root.ln.wf01.wt01.status</span>
<span class="line">Note: The path can be timeseries path or path pattern.</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">COUNT TIMESERIES &lt;Path&gt; GROUP BY LEVEL=&lt;INTEGER&gt;</span>
<span class="line">Eg: IoTDB &gt; COUNT TIMESERIES root.** GROUP BY LEVEL=1</span>
<span class="line">Eg: IoTDB &gt; COUNT TIMESERIES root.ln.** GROUP BY LEVEL=2</span>
<span class="line">Eg: IoTDB &gt; COUNT TIMESERIES root.ln.wf01.* GROUP BY LEVEL=3</span>
<span class="line">Note: The path can be timeseries path or path pattern.</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示指定路径下特定层级的节点数语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">COUNT NODES &lt;Path&gt; LEVEL=&lt;INTEGER&gt;</span>
<span class="line">Eg: IoTDB &gt; COUNT NODES root.** LEVEL=2</span>
<span class="line">Eg: IoTDB &gt; COUNT NODES root.ln.** LEVEL=2</span>
<span class="line">Eg: IoTDB &gt; COUNT NODES root.ln.*.* LEVEL=3</span>
<span class="line">Eg: IoTDB &gt; COUNT NODES root.ln.wf01.* LEVEL=3</span>
<span class="line">Note: The path can be timeseries path or path pattern.</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示所有设备语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW DEVICES (WITH STORAGE GROUP)? limitClause? </span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES</span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES WITH STORAGE GROUP</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示特定设备语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW DEVICES &lt;PathPattern&gt; (WITH STORAGE GROUP)? limitClause?</span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES root.**</span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES root.ln.*</span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES root.*.wf01</span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES root.ln.* WITH STORAGE GROUP</span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES root.*.wf01 WITH STORAGE GROUP</span>
<span class="line">Note: The path can be path pattern.</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示 ROOT 节点的子节点名称语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CHILD PATHS</span>
<span class="line">Eg: IoTDB &gt; SHOW CHILD PATHS</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示子节点名称语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CHILD PATHS &lt;PathPattern&gt;</span>
<span class="line">Eg: IoTDB &gt; SHOW CHILD PATHS root</span>
<span class="line">Eg: IoTDB &gt; SHOW CHILD PATHS root.ln</span>
<span class="line">Eg: IoTDB &gt; SHOW CHILD PATHS root.*.wf01</span>
<span class="line">Eg: IoTDB &gt; SHOW CHILD PATHS root.ln.wf*</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>为 schema 创建快照</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE SNAPSHOT FOR SCHEMA</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="数据管理语句" tabindex="-1"><a class="header-anchor" href="#数据管理语句"><span>数据管理语句</span></a></h3><ul><li>插入记录语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">INSERT INTO &lt;PrefixPath&gt; LPAREN TIMESTAMP COMMA &lt;Sensor&gt; [COMMA &lt;Sensor&gt;]* RPAREN VALUES LPAREN &lt;TimeValue&gt;, &lt;PointValue&gt; [COMMA &lt;PointValue&gt;]* RPAREN</span>
<span class="line">Sensor : Identifier</span>
<span class="line">Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)</span>
<span class="line">Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) VALUES(NOW(), false)</span>
<span class="line">Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,temperature) VALUES(2017-11-01T00:17:00.000+08:00,24.22028)</span>
<span class="line">Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) VALUES (1509466680000,false,20.060787)</span>
<span class="line">Eg: IoTDB &gt; INSERT INTO root.sg.d1(timestamp,(s1,s2),(s3,s4)) VALUES (1509466680000,(1.0,2),(NULL,4))</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line">Note: The order of Sensor and PointValue need one-to-one correspondence</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除记录语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DELETE FROM &lt;PathPattern&gt; [COMMA &lt;PathPattern&gt;]* [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">WhereClause : &lt;Condition&gt; [(AND) &lt;Condition&gt;]*</span>
<span class="line">Condition  : &lt;TimeExpr&gt; [(AND) &lt;TimeExpr&gt;]*</span>
<span class="line">TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)</span>
<span class="line">Eg: DELETE FROM root.ln.wf01.wt01.temperature WHERE time &gt; 2016-01-05T00:15:00+08:00 and time &lt; 2017-11-1T00:05:00+08:00</span>
<span class="line">Eg: DELETE FROM root.ln.wf01.wt01.status, root.ln.wf01.wt01.temperature WHERE time &lt; NOW()</span>
<span class="line">Eg: DELETE FROM root.ln.wf01.wt01.* WHERE time &gt;= 1509466140000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>选择记录语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">SelectClause : &lt;SelectPath&gt; (COMMA &lt;SelectPath&gt;)*</span>
<span class="line">SelectPath : &lt;FUNCTION&gt; LPAREN &lt;Path&gt; RPAREN | &lt;Path&gt;</span>
<span class="line">FUNCTION : ‘COUNT’ , ‘MIN_TIME’, ‘MAX_TIME’, ‘MIN_VALUE’, ‘MAX_VALUE’</span>
<span class="line">FromClause : &lt;PrefixPath&gt; (COMMA &lt;PrefixPath&gt;)?</span>
<span class="line">WhereClause : &lt;Condition&gt; [(AND | OR) &lt;Condition&gt;]*</span>
<span class="line">Condition  : &lt;Expression&gt; [(AND | OR) &lt;Expression&gt;]*</span>
<span class="line">Expression : [NOT | !]? &lt;TimeExpr&gt; | [NOT | !]? &lt;SensorExpr&gt;</span>
<span class="line">TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)</span>
<span class="line">RelativeTimeDurationUnit = Integer (&#39;Y&#39;|&#39;MO&#39;|&#39;W&#39;|&#39;D&#39;|&#39;H&#39;|&#39;M&#39;|&#39;S&#39;|&#39;MS&#39;|&#39;US&#39;|&#39;NS&#39;)</span>
<span class="line">RelativeTime : (now() | &lt;TimeValue&gt;) [(+|-) RelativeTimeDurationUnit]+</span>
<span class="line">SensorExpr : (&lt;Timeseries&gt; | &lt;Path&gt;) PrecedenceEqualOperator &lt;PointValue&gt;</span>
<span class="line">Eg: IoTDB &gt; SELECT status, temperature FROM root.ln.wf01.wt01 WHERE temperature &lt; 24 and time &gt; 2017-11-01 00:13:00</span>
<span class="line">Eg. IoTDB &gt; SELECT ** FROM root</span>
<span class="line">Eg. IoTDB &gt; SELECT * FROM root.**</span>
<span class="line">Eg. IoTDB &gt; SELECT * FROM root.** where time &gt; now() - 5m</span>
<span class="line">Eg. IoTDB &gt; SELECT * FROM root.ln.*.wf*</span>
<span class="line">Eg. IoTDB &gt; SELECT COUNT(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 25</span>
<span class="line">Eg. IoTDB &gt; SELECT MIN_TIME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 25</span>
<span class="line">Eg. IoTDB &gt; SELECT MAX_TIME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &gt; 24</span>
<span class="line">Eg. IoTDB &gt; SELECT MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &gt; 23</span>
<span class="line">Eg. IoTDB &gt; SELECT MAX_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 25</span>
<span class="line">Eg. IoTDB &gt; SELECT COUNT(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 25 GROUP BY LEVEL=1</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;Path&gt;(SelectClause) + &lt;PrefixPath&gt;(FromClause) = &lt;Timeseries&gt;</span>
<span class="line">Note: If the &lt;SensorExpr&gt;(WhereClause) is started with &lt;Path&gt; and not with ROOT, the statement needs to satisfy this constraint: &lt;PrefixPath&gt;(FromClause) + &lt;Path&gt;(SensorExpr) = &lt;Timeseries&gt;</span>
<span class="line">Note: In Version 0.7.0, if &lt;WhereClause&gt; includes \`OR\`, time filter can not be used.</span>
<span class="line">Note: There must be a space on both sides of the plus and minus operator appearing in the time expression </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Group By 语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt; GROUP BY &lt;GroupByTimeClause&gt;</span>
<span class="line">SelectClause : &lt;Function&gt; [COMMA &lt; Function &gt;]*</span>
<span class="line">Function : &lt;AggregationFunction&gt; LPAREN &lt;Path&gt; RPAREN</span>
<span class="line">FromClause : &lt;PrefixPath&gt;</span>
<span class="line">WhereClause : &lt;Condition&gt; [(AND | OR) &lt;Condition&gt;]*</span>
<span class="line">Condition  : &lt;Expression&gt; [(AND | OR) &lt;Expression&gt;]*</span>
<span class="line">Expression : [NOT | !]? &lt;TimeExpr&gt; | [NOT | !]? &lt;SensorExpr&gt;</span>
<span class="line">TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)</span>
<span class="line">RelativeTimeDurationUnit = Integer (&#39;Y&#39;|&#39;MO&#39;|&#39;W&#39;|&#39;D&#39;|&#39;H&#39;|&#39;M&#39;|&#39;S&#39;|&#39;MS&#39;|&#39;US&#39;|&#39;NS&#39;)</span>
<span class="line">RelativeTime : (now() | &lt;TimeValue&gt;) [(+|-) RelativeTimeDurationUnit]+</span>
<span class="line">SensorExpr : (&lt;Timeseries&gt; | &lt;Path&gt;) PrecedenceEqualOperator &lt;PointValue&gt;</span>
<span class="line">GroupByTimeClause : LPAREN &lt;TimeInterval&gt; COMMA &lt;TimeUnit&gt; (COMMA &lt;TimeUnit&gt;)? RPAREN</span>
<span class="line">TimeInterval: LSBRACKET &lt;TimeValue&gt; COMMA &lt;TimeValue&gt; RRBRACKET | LRBRACKET &lt;TimeValue&gt; COMMA &lt;TimeValue&gt; RSBRACKET</span>
<span class="line">TimeUnit : Integer &lt;DurationUnit&gt;</span>
<span class="line">DurationUnit : &quot;ms&quot; | &quot;s&quot; | &quot;m&quot; | &quot;h&quot; | &quot;d&quot; | &quot;w&quot; | &quot;mo&quot;</span>
<span class="line">Eg: SELECT COUNT(status), COUNT(temperature) FROM root.ln.wf01.wt01 where temperature &lt; 24 GROUP BY([1509465720000, 1509466380000), 5m)</span>
<span class="line">Eg: SELECT COUNT(status), COUNT(temperature) FROM root.ln.wf01.wt01 where temperature &lt; 24 GROUP BY((1509465720000, 1509466380000], 5m)</span>
<span class="line">Eg. SELECT COUNT (status), MAX_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE time &lt; 1509466500000 GROUP BY([1509465720000, 1509466380000), 5m, 10m)</span>
<span class="line">Eg. SELECT MIN_TIME(status), MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE temperature &lt; 25 GROUP BY ([1509466140000, 1509466380000), 3m, 5ms)</span>
<span class="line">Eg. SELECT MIN_TIME(status), MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE temperature &lt; 25 GROUP BY ((1509466140000, 1509466380000], 3m, 5ms)</span>
<span class="line">Eg. SELECT MIN_TIME(status), MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE temperature &lt; 25 GROUP BY ((1509466140000, 1509466380000], 1mo)</span>
<span class="line">Eg. SELECT MIN_TIME(status), MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE temperature &lt; 25 GROUP BY ((1509466140000, 1509466380000], 1mo, 1mo)</span>
<span class="line">Eg. SELECT MIN_TIME(status), MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE temperature &lt; 25 GROUP BY ((1509466140000, 1509466380000], 1mo, 2mo)</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;Path&gt;(SelectClause) + &lt;PrefixPath&gt;(FromClause) = &lt;Timeseries&gt;</span>
<span class="line">Note: If the &lt;SensorExpr&gt;(WhereClause) is started with &lt;Path&gt; and not with ROOT, the statement needs to satisfy this constraint: &lt;PrefixPath&gt;(FromClause) + &lt;Path&gt;(SensorExpr) = &lt;Timeseries&gt;</span>
<span class="line">Note: &lt;TimeValue&gt;(TimeInterval) needs to be greater than 0</span>
<span class="line">Note: First &lt;TimeValue&gt;(TimeInterval) in needs to be smaller than second &lt;TimeValue&gt;(TimeInterval)</span>
<span class="line">Note: &lt;TimeUnit&gt; needs to be greater than 0</span>
<span class="line">Note: Third &lt;TimeUnit&gt; if set shouldn&#39;t be smaller than second &lt;TimeUnit&gt;</span>
<span class="line">Note: If the second &lt;DurationUnit&gt; is &quot;mo&quot;, the third &lt;DurationUnit&gt; need to be in month</span>
<span class="line">Note: If the third &lt;DurationUnit&gt; is &quot;mo&quot;, the second &lt;DurationUnit&gt; can be in any unit</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Fill 语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE &lt;WhereClause&gt; FILL &lt;FillClause&gt;</span>
<span class="line">SelectClause : &lt;Path&gt; [COMMA &lt;Path&gt;]*</span>
<span class="line">FromClause : &lt; PrefixPath &gt; [COMMA &lt; PrefixPath &gt;]*</span>
<span class="line">WhereClause : &lt;WhereExpression&gt;</span>
<span class="line">WhereExpression : TIME EQUAL &lt;TimeValue&gt;</span>
<span class="line">FillClause : LPAREN &lt;TypeClause&gt; [COMMA &lt;TypeClause&gt;]* RPAREN</span>
<span class="line">TypeClause : &lt;Int32Clause&gt; | &lt;Int64Clause&gt; | &lt;FloatClause&gt; | &lt;DoubleClause&gt; | &lt;BoolClause&gt; | &lt;TextClause&gt;</span>
<span class="line">Int32Clause: INT32 LBRACKET (&lt;LinearClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">Int64Clause: INT64 LBRACKET (&lt;LinearClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">FloatClause: FLOAT LBRACKET (&lt;LinearClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">DoubleClause: DOUBLE LBRACKET (&lt;LinearClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">BoolClause: BOOLEAN LBRACKET (&lt;LinearClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">TextClause: TEXT LBRACKET (&lt;LinearClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">PreviousClause : PREVIOUS [COMMA &lt;ValidPreviousTime&gt;]?</span>
<span class="line">LinearClause : LINEAR [COMMA &lt;ValidPreviousTime&gt; COMMA &lt;ValidBehindTime&gt;]?</span>
<span class="line">ValidPreviousTime, ValidBehindTime: &lt;TimeUnit&gt;</span>
<span class="line">TimeUnit : Integer &lt;DurationUnit&gt;</span>
<span class="line">DurationUnit : &quot;ms&quot; | &quot;s&quot; | &quot;m&quot; | &quot;h&quot; | &quot;d&quot; | &quot;w&quot;</span>
<span class="line">Eg: SELECT temperature FROM root.ln.wf01.wt01 WHERE time = 2017-11-01T16:37:50.000 FILL(float[previous, 1m])</span>
<span class="line">Eg: SELECT temperature,status FROM root.ln.wf01.wt01 WHERE time = 2017-11-01T16:37:50.000 FILL (float[linear, 1m, 1m], boolean[previous, 1m])</span>
<span class="line">Eg: SELECT temperature,status,hardware FROM root.ln.wf01.wt01 WHERE time = 2017-11-01T16:37:50.000 FILL (float[linear, 1m, 1m], boolean[previous, 1m], text[previous])</span>
<span class="line">Eg: SELECT temperature,status,hardware FROM root.ln.wf01.wt01 WHERE time = 2017-11-01T16:37:50.000 FILL (float[linear], boolean[previous, 1m], text[previous])</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt;(FromClause) + &lt;Path&gt;(SelectClause) = &lt;Timeseries&gt;</span>
<span class="line">Note: Integer in &lt;TimeUnit&gt; needs to be greater than 0</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Group By Fill 语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"># time 区间规则为：只能为左开右闭或左闭右开，例如：[20, 100)</span>
<span class="line"></span>
<span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt; GROUP BY &lt;GroupByClause&gt; (FILL &lt;GROUPBYFillClause&gt;)?</span>
<span class="line">GroupByClause : LPAREN &lt;TimeInterval&gt; COMMA &lt;TimeUnit&gt; RPAREN</span>
<span class="line">GROUPBYFillClause : LPAREN &lt;TypeClause&gt; RPAREN</span>
<span class="line">TypeClause : &lt;AllClause&gt; | &lt;Int32Clause&gt; | &lt;Int64Clause&gt; | &lt;FloatClause&gt; | &lt;DoubleClause&gt; | &lt;BoolClause&gt; | &lt;TextClause&gt; </span>
<span class="line">AllClause: ALL LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">Int32Clause: INT32 LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">Int64Clause: INT64 LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">FloatClause: FLOAT LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">DoubleClause: DOUBLE LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">BoolClause: BOOLEAN LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">TextClause: TEXT LBRACKET (&lt;PreviousUntilLastClause&gt; | &lt;PreviousClause&gt;)  RBRACKET</span>
<span class="line">PreviousClause : PREVIOUS</span>
<span class="line">PreviousUntilLastClause : PREVIOUSUNTILLAST</span>
<span class="line">Eg: SELECT last_value(temperature) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (float[PREVIOUS])</span>
<span class="line">Eg: SELECT last_value(temperature) FROM root.ln.wf01.wt01 GROUP BY((15, 100], 5m) FILL (float[PREVIOUS])</span>
<span class="line">Eg: SELECT last_value(power) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (int32[PREVIOUSUNTILLAST])</span>
<span class="line">Eg: SELECT last_value(power) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (int32[PREVIOUSUNTILLAST, 5m])</span>
<span class="line">Eg: SELECT last_value(temperature), last_value(power) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (ALL[PREVIOUS])</span>
<span class="line">Eg: SELECT last_value(temperature), last_value(power) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (ALL[PREVIOUS, 5m])</span>
<span class="line">Note: In group by fill, sliding step is not supported in group by clause</span>
<span class="line">Note: Now, only last_value aggregation function is supported in group by fill.</span>
<span class="line">Note: Linear fill is not supported in group by fill.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Order by time 语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt; GROUP BY &lt;GroupByClause&gt; (FILL &lt;GROUPBYFillClause&gt;)? orderByTimeClause?</span>
<span class="line">orderByTimeClause: order by time (asc | desc)?</span>
<span class="line"></span>
<span class="line">Eg: SELECT last_value(temperature) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (float[PREVIOUS]) order by time desc</span>
<span class="line">Eg: SELECT * from root.** order by time desc</span>
<span class="line">Eg: SELECT * from root.** order by time desc align by device </span>
<span class="line">Eg: SELECT * from root.** order by time desc disable align</span>
<span class="line">Eg: SELECT last * from root order by time desc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Limit &amp; SLimit 语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;] [&lt;LIMITClause&gt;] [&lt;SLIMITClause&gt;]</span>
<span class="line">SelectClause : [&lt;Path&gt; | Function]+</span>
<span class="line">Function : &lt;AggregationFunction&gt; LPAREN &lt;Path&gt; RPAREN</span>
<span class="line">FromClause : &lt;Path&gt;</span>
<span class="line">WhereClause : &lt;Condition&gt; [(AND | OR) &lt;Condition&gt;]*</span>
<span class="line">Condition : &lt;Expression&gt; [(AND | OR) &lt;Expression&gt;]*</span>
<span class="line">Expression: [NOT|!]?&lt;TimeExpr&gt; | [NOT|!]?&lt;SensorExpr&gt;</span>
<span class="line">TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)</span>
<span class="line">RelativeTimeDurationUnit = Integer (&#39;Y&#39;|&#39;MO&#39;|&#39;W&#39;|&#39;D&#39;|&#39;H&#39;|&#39;M&#39;|&#39;S&#39;|&#39;MS&#39;|&#39;US&#39;|&#39;NS&#39;)</span>
<span class="line">RelativeTime : (now() | &lt;TimeValue&gt;) [(+|-) RelativeTimeDurationUnit]+</span>
<span class="line">SensorExpr : (&lt;Timeseries&gt;|&lt;Path&gt;) PrecedenceEqualOperator &lt;PointValue&gt;</span>
<span class="line">LIMITClause : LIMIT &lt;N&gt; [OFFSETClause]?</span>
<span class="line">N : Integer</span>
<span class="line">OFFSETClause : OFFSET &lt;OFFSETValue&gt;</span>
<span class="line">OFFSETValue : Integer</span>
<span class="line">SLIMITClause : SLIMIT &lt;SN&gt; [SOFFSETClause]?</span>
<span class="line">SN : Integer</span>
<span class="line">SOFFSETClause : SOFFSET &lt;SOFFSETValue&gt;</span>
<span class="line">SOFFSETValue : Integer</span>
<span class="line">Eg: IoTDB &gt; SELECT status, temperature FROM root.ln.wf01.wt01 WHERE temperature &lt; 24 and time &gt; 2017-11-01 00:13:00 LIMIT 3 OFFSET 2</span>
<span class="line">Eg. IoTDB &gt; SELECT COUNT (status), MAX_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE time &lt; 1509466500000 GROUP BY([1509465720000, 1509466380000), 5m) LIMIT 3</span>
<span class="line">Note: N, OFFSETValue, SN and SOFFSETValue must be greater than 0.</span>
<span class="line">Note: The order of &lt;LIMITClause&gt; and &lt;SLIMITClause&gt; does not affect the grammatical correctness.</span>
<span class="line">Note: &lt;FillClause&gt; can not use &lt;LIMITClause&gt; but not &lt;SLIMITClause&gt;.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Align by device 语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">AlignbyDeviceClause : ALIGN BY DEVICE</span>
<span class="line"></span>
<span class="line">规则：</span>
<span class="line">1. 大小写不敏感。</span>
<span class="line">正例：select * from root.sg1.** align by device</span>
<span class="line">正例：select * from root.sg1.** ALIGN BY DEVICE</span>
<span class="line"></span>
<span class="line">2. AlignbyDeviceClause 只能放在末尾。</span>
<span class="line">正例：select * from root.sg1.** where time &gt; 10 align by device  </span>
<span class="line">错例：select * from root.sg1.** align by device where time &gt; 10  </span>
<span class="line"></span>
<span class="line">3. Select 子句中的 path 只能是单层，或者通配符，不允许有 path 分隔符&quot;.&quot;。</span>
<span class="line">正例：select s0,s1 from root.sg1.* align by device  </span>
<span class="line">正例：select s0,s1 from root.sg1.d0, root.sg1.d1 align by device  </span>
<span class="line">正例：select * from root.sg1.* align by device  </span>
<span class="line">正例：select * from root.** align by device  </span>
<span class="line">正例：select s0,s1,* from root.*.* align by device  </span>
<span class="line">错例：select d0.s1, d0.s2, d1.s0 from root.sg1 align by device  </span>
<span class="line">错例：select *.s0, *.s1 from root.* align by device  </span>
<span class="line">错例：select *.*.* from root align by device</span>
<span class="line"></span>
<span class="line">4. 相同 measurement 的各设备的数据类型必须都相同，</span>
<span class="line"></span>
<span class="line">正例：select s0 from root.sg1.d0,root.sg1.d1 align by device   </span>
<span class="line">root.sg1.d0.s0 and root.sg1.d1.s0 are both INT32.  </span>
<span class="line"></span>
<span class="line">正例：select count(s0) from root.sg1.d0,root.sg1.d1 align by device   </span>
<span class="line">count(root.sg1.d0.s0) and count(root.sg1.d1.s0) are both INT64.  </span>
<span class="line"></span>
<span class="line">错例：select s0 from root.sg1.d0, root.sg2.d3 align by device  </span>
<span class="line">root.sg1.d0.s0 is INT32 while root.sg2.d3.s0 is FLOAT. </span>
<span class="line"></span>
<span class="line">5. 结果集的展示规则：对于 select 中给出的列，不论是否有数据（是否被注册），均会被显示。此外，select 子句中还支持常数列（例如，&#39;a&#39;, &#39;123&#39;等等）。</span>
<span class="line">例如，&quot;select s0,s1,s2,&#39;abc&#39;,s1,s2 from root.sg.d0, root.sg.d1, root.sg.d2 align by device&quot;. 假设只有下述三列有数据：</span>
<span class="line">- root.sg.d0.s0</span>
<span class="line">- root.sg.d0.s1</span>
<span class="line">- root.sg.d1.s0</span>
<span class="line"></span>
<span class="line">结果集形如：</span>
<span class="line"></span>
<span class="line">| Time | Device   | s0 | s1 |  s2  | &#39;abc&#39; | s1 |  s2  |</span>
<span class="line">| ---  | ---      | ---| ---| null | &#39;abc&#39; | ---| null |</span>
<span class="line">|  1   |root.sg.d0| 20 | 2.5| null | &#39;abc&#39; | 2.5| null |</span>
<span class="line">|  2   |root.sg.d0| 23 | 3.1| null | &#39;abc&#39; | 3.1| null |</span>
<span class="line">| ...  | ...      | ...| ...| null | &#39;abc&#39; | ...| null |</span>
<span class="line">|  1   |root.sg.d1| 12 |null| null | &#39;abc&#39; |null| null |</span>
<span class="line">|  2   |root.sg.d1| 19 |null| null | &#39;abc&#39; |null| null |</span>
<span class="line">| ...  | ...      | ...| ...| null | &#39;abc&#39; | ...| null |</span>
<span class="line"></span>
<span class="line">注意注意 设备&#39;root.sg.d1&#39;的&#39;s0&#39;的值全为 null</span>
<span class="line"></span>
<span class="line">6. 在 From 中重复写设备名字或者设备前缀是没有任何作用的。</span>
<span class="line">例如，&quot;select s0,s1 from root.sg.d0,root.sg.d0,root.sg.d1 align by device&quot; 等于 &quot;select s0,s1 from root.sg.d0,root.sg.d1 align by device&quot;.  </span>
<span class="line">例如。&quot;select s0,s1 from root.sg.*,root.sg.d0 align by device&quot; 等于 &quot;select s0,s1 from root.sg.* align by device&quot;.  </span>
<span class="line"></span>
<span class="line">7. 在 Select 子句中重复写列名是生效的。例如，&quot;select s0,s0,s1 from root.sg.* align by device&quot; 不等于 &quot;select s0,s1 from root.sg.* align by device&quot;.</span>
<span class="line"></span>
<span class="line">8. 在 Where 子句中时间过滤条件和值过滤条件均可以使用，值过滤条件可以使用叶子节点 path，或以 root 开头的整个 path，不允许存在通配符。例如，</span>
<span class="line">- select * from root.sg.* where time = 1 align by device</span>
<span class="line">- select * from root.sg.* where s0 &lt; 100 align by device</span>
<span class="line">- select * from root.sg.* where time &lt; 20 AND s0 &gt; 50 align by device</span>
<span class="line">- select * from root.sg.d0 where root.sg.d0.s0 = 15 align by device</span>
<span class="line"></span>
<span class="line">9. 更多正例：</span>
<span class="line">   - select * from root.vehicle.* align by device</span>
<span class="line">   - select s0,s0,s1 from root.vehicle.* align by device</span>
<span class="line">   - select s0,s1 from root.vehicle.* limit 10 offset 1 align by device</span>
<span class="line">   - select * from root.vehicle.* slimit 10 soffset 2 align by device</span>
<span class="line">   - select * from root.vehicle.* where time &gt; 10 align by device</span>
<span class="line">   - select * from root.vehicle.* where time &lt; 10 AND s0 &gt; 25 align by device</span>
<span class="line">   - select * from root.vehicle.* where root.vehicle.d0.s0&gt;0 align by device</span>
<span class="line">   - select count(*) from root.vehicle.* align by device</span>
<span class="line">   - select sum(*) from root.vehicle.* GROUP BY (20ms,0,[2,50]) align by device</span>
<span class="line">   - select * from root.vehicle.* where time = 3 Fill(int32[previous, 5ms]) align by device</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Disable align 语句</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">规则：</span>
<span class="line">1. 大小写均可。</span>
<span class="line">正例：select * from root.sg1.* disable align  </span>
<span class="line">正例：select * from root.sg1.* DISABLE ALIGN  </span>
<span class="line"></span>
<span class="line">2. Disable Align 只能用于查询语句句尾。</span>
<span class="line">正例：select * from root.sg1.* where time &gt; 10 disable align </span>
<span class="line">错例：select * from root.sg1.* disable align where time &gt; 10 </span>
<span class="line"></span>
<span class="line">3. Disable Align 不能用于聚合查询、Fill 语句、Group by 或 Group by device 语句，但可用于 Limit 语句。</span>
<span class="line">正例：select * from root.sg1.* limit 3 offset 2 disable align</span>
<span class="line">正例：select * from root.sg1.* slimit 3 soffset 2 disable align</span>
<span class="line">错例：select count(s0),count(s1) from root.sg1.d1 disable align</span>
<span class="line">错例：select * from root.vehicle.* where root.vehicle.d0.s0&gt;0 disable align</span>
<span class="line">错例：select * from root.vehicle.* align by device disable align</span>
<span class="line"></span>
<span class="line">4. 结果显示若无数据显示为空白。</span>
<span class="line"></span>
<span class="line">查询结果样式如下表：</span>
<span class="line">| Time | root.sg.d0.s1 | Time | root.sg.d0.s2 | Time | root.sg.d1.s1 |</span>
<span class="line">| ---  | ---           | ---  | ---           | ---  | ---           |</span>
<span class="line">|  1   | 100           | 20   | 300           | 400  | 600           |</span>
<span class="line">|  2   | 300           | 40   | 800           | 700  | 900           |</span>
<span class="line">|  4   | 500           |      |               | 800  | 1000          |</span>
<span class="line">|      |               |      |               | 900  | 8000          |</span>
<span class="line"></span>
<span class="line">5. 一些正确使用样例：</span>
<span class="line">   - select * from root.vehicle.* disable align</span>
<span class="line">   - select s0,s0,s1 from root.vehicle.* disable align</span>
<span class="line">   - select s0,s1 from root.vehicle.* limit 10 offset 1 disable align</span>
<span class="line">   - select * from root.vehicle.* slimit 10 soffset 2 disable align</span>
<span class="line">   - select * from root.vehicle.* where time &gt; 10 disable align</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Last 语句</li></ul><p>Last 语句返回所要查询时间序列的最近时间戳的一条数据</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT LAST &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE &lt;WhereClause&gt;</span>
<span class="line">Select Clause : &lt;Path&gt; [COMMA &lt;Path&gt;]*</span>
<span class="line">FromClause : &lt; PrefixPath &gt; [COMMA &lt; PrefixPath &gt;]*</span>
<span class="line">WhereClause : &lt;TimeExpr&gt; [(AND | OR) &lt;TimeExpr&gt;]*</span>
<span class="line">TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)</span>
<span class="line"></span>
<span class="line">Eg. SELECT LAST s1 FROM root.sg.d1</span>
<span class="line">Eg. SELECT LAST s1, s2 FROM root.sg.d1</span>
<span class="line">Eg. SELECT LAST s1 FROM root.sg.d1, root.sg.d2</span>
<span class="line">Eg. SELECT LAST s1 FROM root.sg.d1 where time &gt; 100</span>
<span class="line">Eg. SELECT LAST s1, s2 FROM root.sg.d1 where time &gt;= 500</span>
<span class="line"></span>
<span class="line">规则：</span>
<span class="line">1. 需要满足 PrefixPath.Path 为一条完整的时间序列，即 &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span>
<span class="line">2. 当前 SELECT LAST 语句只支持包含&#39;&gt;&#39;或&#39;&gt;=&#39;的时间过滤条件</span>
<span class="line"></span>
<span class="line">3. 结果集以四列的表格的固定形式返回。</span>
<span class="line">例如 &quot;select last s1, s2 from root.sg.d1, root.sg.d2&quot;, 结果集返回如下：</span>
<span class="line"></span>
<span class="line">| Time |    timeseries | value | dataType |</span>
<span class="line">| ---  | ------------- | ----- | -------- |</span>
<span class="line">|  5   | root.sg.d1.s1 |   100 |    INT32 |</span>
<span class="line">|  2   | root.sg.d1.s2 |   400 |    INT32 |</span>
<span class="line">|  4   | root.sg.d2.s1 |   250 |    INT32 |</span>
<span class="line">|  9   | root.sg.d2.s2 |   600 |    INT32 |</span>
<span class="line"></span>
<span class="line">4. 注意 LAST 语句不支持与&quot;disable align&quot;关键词一起使用。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>As 语句</li></ul><p>As 语句为 SELECT 语句中出现的时间序列规定一个别名</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">在每个查询中都可以使用 As 语句来规定时间序列的别名，但是对于通配符的使用有一定限制。</span>
<span class="line"></span>
<span class="line">1. 原始数据查询：</span>
<span class="line">select s1 as speed, s2 as temperature from root.sg.d1</span>
<span class="line"></span>
<span class="line">结果集将显示为：</span>
<span class="line">| Time | speed | temperature |</span>
<span class="line">|  ... |  ...  |     ....    |</span>
<span class="line"></span>
<span class="line">2. 聚合查询</span>
<span class="line">select count(s1) as s1_num, max_value(s2) as s2_max from root.sg.d1</span>
<span class="line"></span>
<span class="line">3. 降频聚合查询</span>
<span class="line">select count(s1) as s1_num from root.sg.d1 group by ([100,500), 80ms)</span>
<span class="line"></span>
<span class="line">4. 按设备对齐查询</span>
<span class="line">select s1 as speed, s2 as temperature from root.sg.d1 align by device</span>
<span class="line"></span>
<span class="line">select count(s1) as s1_num, count(s2), count(s3) as s3_num from root.sg.d2 align by device</span>
<span class="line"></span>
<span class="line">5. 最新数据查询</span>
<span class="line">select last s1 as speed, s2 from root.sg.d1</span>
<span class="line"></span>
<span class="line">规则：</span>
<span class="line">1. 除按设备对齐查询外，每一个 AS 语句必须唯一对应一个时间序列。</span>
<span class="line"></span>
<span class="line">E.g. select s1 as temperature from root.sg.*</span>
<span class="line"></span>
<span class="line">此时如果存储组 root.sg.* 中含有多个设备，则会抛出异常。</span>
<span class="line"></span>
<span class="line">2. 按设备对齐查询中，每个 AS 语句对应的前缀路径可以含多个设备，而后缀路径不能含多个传感器。</span>
<span class="line"></span>
<span class="line">E.g. select s1 as temperature from root.sg.*</span>
<span class="line"></span>
<span class="line">这种情况即使有多个设备，也可以正常显示。</span>
<span class="line"></span>
<span class="line">E.g. select * as temperature from root.sg.d1</span>
<span class="line"></span>
<span class="line">这种情况如果 * 匹配多个传感器，则无法正常显示。</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Regexp 语句</li></ul><p>Regexp语句仅支持数据类型为 TEXT的列进行过滤，传入的过滤条件为 Java 标准库风格的正则表达式</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt;</span>
<span class="line">Select Clause : &lt;Path&gt; [COMMA &lt;Path&gt;]*</span>
<span class="line">FromClause : &lt; PrefixPath &gt; [COMMA &lt; PrefixPath &gt;]*</span>
<span class="line">WhereClause : andExpression (OPERATOR_OR andExpression)*</span>
<span class="line">andExpression : predicate (OPERATOR_AND predicate)*</span>
<span class="line">predicate : (suffixPath | fullPath) REGEXP regularExpression</span>
<span class="line">regularExpression: Java standard regularexpression, like &#39;^[a-z][0-9]$&#39;, [details](https://docs.oracle.com/javase/7/docs/api/java/util/regex/Pattern.html)</span>
<span class="line"></span>
<span class="line">Eg. select s1 from root.sg.d1 where s1 regexp &#39;^[0-9]*$&#39;</span>
<span class="line">Eg. select s1, s2 FROM root.sg.d1 where s1 regexp &#39;^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$&#39; and s2 regexp &#39;^\\d{15}|\\d{18}$&#39;</span>
<span class="line">Eg. select * from root.sg.d1 where s1 regexp &#39;^[a-zA-Z]\\w{5,17}$&#39;</span>
<span class="line">Eg. select * from root.sg.d1 where s1 regexp &#39;^\\d{4}-\\d{1,2}-\\d{1,2}&#39; and time &gt; 100</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Like 语句</li></ul><p>Like语句的用法和mysql相同, 但是仅支持对数据类型为 TEXT的列进行过滤</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt;</span>
<span class="line">Select Clause : &lt;Path&gt; [COMMA &lt;Path&gt;]*</span>
<span class="line">FromClause : &lt; PrefixPath &gt; [COMMA &lt; PrefixPath &gt;]*</span>
<span class="line">WhereClause : andExpression (OPERATOR_OR andExpression)*</span>
<span class="line">andExpression : predicate (OPERATOR_AND predicate)*</span>
<span class="line">predicate : (suffixPath | fullPath) LIKE likeExpression</span>
<span class="line">likeExpression : string that may contains &quot;%&quot; or &quot;_&quot;, while &quot;%value&quot; means a string that ends with the value,  &quot;value%&quot; means a string starts with the value, &quot;%value%&quot; means string that contains values, and &quot;_&quot; represents any character.</span>
<span class="line"></span>
<span class="line">Eg. select s1 from root.sg.d1 where s1 like &#39;abc&#39;</span>
<span class="line">Eg. select s1, s2 from root.sg.d1 where s1 like &#39;abc%&#39;</span>
<span class="line">Eg. select * from root.sg.d1 where s1 like &#39;abc_&#39;</span>
<span class="line">Eg. select * from root.sg.d1 where s1 like &#39;abc\\%&#39;</span>
<span class="line">这种情况，&#39;\\%&#39;表示&#39;%&#39;将会被转义</span>
<span class="line">结果集将显示为：</span>
<span class="line">| Time | Path         | Value |</span>
<span class="line">| ---  | ------------ | ----- |</span>
<span class="line">|  200 | root.sg.d1.s1| abc%  |</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据库管理语句" tabindex="-1"><a class="header-anchor" href="#数据库管理语句"><span>数据库管理语句</span></a></h3><ul><li>创建用户</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE USER &lt;userName&gt; &lt;password&gt;;  </span>
<span class="line">userName:=identifier  </span>
<span class="line">password:=string</span>
<span class="line">Eg: IoTDB &gt; CREATE USER thulab &#39;passwd&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除用户</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DROP USER &lt;userName&gt;;  </span>
<span class="line">userName:=identifier</span>
<span class="line">Eg: IoTDB &gt; DROP USER xiaoming;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>创建角色</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE ROLE &lt;roleName&gt;;  </span>
<span class="line">roleName:=identifie</span>
<span class="line">Eg: IoTDB &gt; CREATE ROLE admin;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>删除角色</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DROP ROLE &lt;roleName&gt;;  </span>
<span class="line">roleName:=identifier</span>
<span class="line">Eg: IoTDB &gt; DROP ROLE admin;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予用户权限</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GRANT USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  </span>
<span class="line">userName:=identifier  </span>
<span class="line">nodeName:=identifier (DOT identifier)*  </span>
<span class="line">privileges:= string (COMMA string)*</span>
<span class="line">Eg: IoTDB &gt; GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予角色权限</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GRANT ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  </span>
<span class="line">privileges:= string (COMMA string)*  </span>
<span class="line">roleName:=identifier  </span>
<span class="line">nodeName:=identifier (DOT identifier)*</span>
<span class="line">Eg: IoTDB &gt; GRANT ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>赋予用户角色</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GRANT &lt;roleName&gt; TO &lt;userName&gt;;  </span>
<span class="line">roleName:=identifier  </span>
<span class="line">userName:=identifier</span>
<span class="line">Eg: IoTDB &gt; GRANT temprole TO tempuser;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销用户权限</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">REVOKE USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;   </span>
<span class="line">privileges:= string (COMMA string)*  </span>
<span class="line">userName:=identifier  </span>
<span class="line">nodeName:=identifier (DOT identifier)*</span>
<span class="line">Eg: IoTDB &gt; REVOKE USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销角色权限</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">REVOKE ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  </span>
<span class="line">privileges:= string (COMMA string)*  </span>
<span class="line">roleName:= identifier  </span>
<span class="line">nodeName:=identifier (DOT identifier)*</span>
<span class="line">Eg: IoTDB &gt; REVOKE ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>撤销用户角色</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">REVOKE &lt;roleName&gt; FROM &lt;userName&gt;;</span>
<span class="line">roleName:=identifier</span>
<span class="line">userName:=identifier</span>
<span class="line">Eg: IoTDB &gt; REVOKE temprole FROM tempuser;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出用户</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST USER</span>
<span class="line">Eg: IoTDB &gt; LIST USER</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST ROLE</span>
<span class="line">Eg: IoTDB &gt; LIST ROLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出权限</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST PRIVILEGES USER  &lt;username&gt; ON &lt;path&gt;;    </span>
<span class="line">username:=identifier    </span>
<span class="line">path=‘root’ (DOT identifier)*</span>
<span class="line">Eg: IoTDB &gt; LIST PRIVILEGES USER sgcc_wirte_user ON root.sgcc;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色权限</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST ROLE PRIVILEGES &lt;roleName&gt;</span>
<span class="line">roleName:=identifier</span>
<span class="line">Eg: IoTDB &gt; LIST ROLE PRIVILEGES actor;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色在具体路径上的权限</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST PRIVILEGES ROLE &lt;roleName&gt; ON &lt;path&gt;;    </span>
<span class="line">roleName:=identifier  </span>
<span class="line">path=‘root’ (DOT identifier)*</span>
<span class="line">Eg: IoTDB &gt; LIST PRIVILEGES ROLE wirte_role ON root.sgcc;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出用户权限</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST USER PRIVILEGES &lt;username&gt; ;   </span>
<span class="line">username:=identifier  </span>
<span class="line">Eg: IoTDB &gt; LIST USER PRIVILEGES tempuser;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出用户角色</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST ALL ROLE OF USER &lt;username&gt; ;  </span>
<span class="line">username:=identifier</span>
<span class="line">Eg: IoTDB &gt; LIST ALL ROLE OF USER tempuser;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>列出角色用户</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST ALL USER OF ROLE &lt;roleName&gt;;</span>
<span class="line">roleName:=identifier</span>
<span class="line">Eg: IoTDB &gt; LIST ALL USER OF ROLE roleuser;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>更新密码</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;</span>
<span class="line">roleName:=identifier</span>
<span class="line">password:=string</span>
<span class="line">Eg: IoTDB &gt; ALTER USER tempuser SET PASSWORD &#39;newpwd&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="功能" tabindex="-1"><a class="header-anchor" href="#功能"><span>功能</span></a></h3><ul><li>COUNT</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT COUNT(Path) (COMMA COUNT(Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT COUNT(status), COUNT(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>FIRST_VALUE<br> 原有的 <code>FIRST</code> 方法在 <code>v0.10.0</code> 版本更名为 <code>FIRST_VALUE</code>。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT FIRST_VALUE (Path) (COMMA FIRST_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT FIRST_VALUE (status), FIRST_VALUE (temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>LAST_VALUE</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT LAST_VALUE (Path) (COMMA LAST_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT LAST_VALUE (status), LAST_VALUE (temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MAX_TIME</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT MAX_TIME (Path) (COMMA MAX_TIME (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT MAX_TIME(status), MAX_TIME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MAX_VALUE</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT MAX_VALUE (Path) (COMMA MAX_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT MAX_VALUE(status), MAX_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>EXTREME<br> 极值：具有最大绝对值的值（正值优先）</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT EXTREME (Path) (COMMA EXT (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT EXTREME(status), EXTREME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AVG<br> 原有的 <code>MEAN</code> 方法在 <code>v0.9.0</code> 版本更名为 <code>AVG</code>。</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT AVG (Path) (COMMA AVG (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT AVG (temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MIN_TIME</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT MIN_TIME (Path) (COMMA MIN_TIME (Path))*FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT MIN_TIME(status), MIN_TIME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MIN_VALUE</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT MIN_VALUE (Path) (COMMA MIN_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT MIN_VALUE(status),MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NOW</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">NOW()</span>
<span class="line">Eg. INSERT INTO root.ln.wf01.wt01(timestamp,status) VALUES(NOW(), false) </span>
<span class="line">Eg. DELETE FROM root.ln.wf01.wt01.status, root.ln.wf01.wt01.temperature WHERE time &lt; NOW()</span>
<span class="line">Eg. SELECT * FROM root WHERE time &lt; NOW()</span>
<span class="line">Eg. SELECT COUNT(temperature) FROM root.ln.wf01.wt01 WHERE time &lt; NOW()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>SUM</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT SUM(Path) (COMMA SUM(Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT SUM(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ttl" tabindex="-1"><a class="header-anchor" href="#ttl"><span>TTL</span></a></h2><p>IoTDB 支持对存储组级别设置数据存活时间（TTL），这使得 IoTDB 可以定期、自动地删除一定时间之前的数据。合理使用 TTL<br> 可以帮助您控制 IoTDB 占用的总磁盘空间以避免出现磁盘写满等异常。并且，随着文件数量的增多，查询性能往往随之下降，<br> 内存占用也会有所提高。及时地删除一些较老的文件有助于使查询性能维持在一个较高的水平和减少内存资源的占用。<br> IoTDB 中的 TTL 操作可以由以下的语句进行实现：</p><ul><li>设置 TTL</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SET TTL TO StorageGroupName TTLTime</span>
<span class="line">Eg. SET TTL TO root.group1 3600000</span>
<span class="line">这个例子展示了如何使得 root.group1 这个存储组只保留近一个小时的数据，一个小时前的数据会被删除或者进入不可见状态。</span>
<span class="line">注意：TTLTime 应是毫秒时间戳。一旦 TTL 被设置，超过 TTL 时间范围的写入将被拒绝。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>取消 TTL</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">UNSET TTL TO StorageGroupName</span>
<span class="line">Eg. UNSET TTL TO root.group1</span>
<span class="line">这个例子展示了如何取消存储组 root.group1 的 TTL，这将使得该存储组接受任意时刻的数据。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>显示 TTL</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW ALL TTL</span>
<span class="line">SHOW TTL ON StorageGroupNames</span>
<span class="line">Eg.1 SHOW ALL TTL</span>
<span class="line">这个例子会给出所有存储组的 TTL。</span>
<span class="line">Eg.2 SHOW TTL ON root.group1,root.group2,root.group3</span>
<span class="line">这个例子会显示指定的三个存储组的 TTL。</span>
<span class="line">注意：没有设置 TTL 的存储组的 TTL 将显示为 null。</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意：当您对某个存储组设置 TTL 的时候，超过 TTL 范围的数据将会立即不可见。但由于数据文件可能混合包含处在 TTL 范围内<br> 与范围外的数据，同时数据文件可能正在接受查询，数据文件的物理删除不会立即进行。如果你在此时取消或者调大 TTL，<br> 一部分之前不可见的数据可能重新可见，而那些已经被物理删除的数据则将永久丢失。也就是说，TTL 操作不会原子性地删除<br> 对应的数据。因此我们不推荐您频繁修改 TTL，除非您能接受该操作带来的一定程度的不可预知性。</p><ul><li>删除时间分区 （实验性功能）</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DELETE PARTITION StorageGroupName INT(COMMA INT)*</span>
<span class="line">Eg DELETE PARTITION root.sg1 0,1,2</span>
<span class="line">该例子将删除存储组 root.sg1 的前三个时间分区</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>partitionId 可以通过查看数据文件夹获取，或者是计算 <code>timestamp / partitionInterval</code>得到。</p><h3 id="中止查询" tabindex="-1"><a class="header-anchor" href="#中止查询"><span>中止查询</span></a></h3><ul><li>显示正在执行的查询列表</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW QUERY PROCESSLIST</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>中止查询</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">KILL QUERY INT?</span>
<span class="line">E.g. KILL QUERY</span>
<span class="line">E.g. KILL QUERY 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置系统为只读-可写入模式" tabindex="-1"><a class="header-anchor" href="#设置系统为只读-可写入模式"><span>设置系统为只读/可写入模式</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SET SYSTEM TO READONLY</span>
<span class="line">IoTDB&gt; SET SYSTEM TO WRITABLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="标识符列表" tabindex="-1"><a class="header-anchor" href="#标识符列表"><span>标识符列表</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">QUOTE := &#39;\\&#39;&#39;;</span>
<span class="line">DOT := &#39;.&#39;;</span>
<span class="line">COLON : &#39;:&#39; ;</span>
<span class="line">COMMA := &#39;,&#39; ;</span>
<span class="line">SEMICOLON := &#39;;&#39; ;</span>
<span class="line">LPAREN := &#39;(&#39; ;</span>
<span class="line">RPAREN := &#39;)&#39; ;</span>
<span class="line">LBRACKET := &#39;[&#39;;</span>
<span class="line">RBRACKET := &#39;]&#39;;</span>
<span class="line">EQUAL := &#39;=&#39; | &#39;==&#39;;</span>
<span class="line">NOTEQUAL := &#39;&lt;&gt;&#39; | &#39;!=&#39;;</span>
<span class="line">LESSTHANOREQUALTO := &#39;&lt;=&#39;;</span>
<span class="line">LESSTHAN := &#39;&lt;&#39;;</span>
<span class="line">GREATERTHANOREQUALTO := &#39;&gt;=&#39;;</span>
<span class="line">GREATERTHAN := &#39;&gt;&#39;;</span>
<span class="line">DIVIDE := &#39;/&#39;;</span>
<span class="line">PLUS := &#39;+&#39;;</span>
<span class="line">MINUS := &#39;-&#39;;</span>
<span class="line">STAR := &#39;*&#39;;</span>
<span class="line">Letter := &#39;a&#39;..&#39;z&#39; | &#39;A&#39;..&#39;Z&#39;;</span>
<span class="line">HexDigit := &#39;a&#39;..&#39;f&#39; | &#39;A&#39;..&#39;F&#39;;</span>
<span class="line">Digit := &#39;0&#39;..&#39;9&#39;;</span>
<span class="line">Boolean := TRUE | FALSE | 0 | 1 (case insensitive)</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">StringLiteral := ( &#39;\\&#39;&#39; ( ~(&#39;\\&#39;&#39;) )* &#39;\\&#39;&#39;;</span>
<span class="line">eg. &#39;abc&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Integer := (&#39;-&#39; | &#39;+&#39;)? Digit+;</span>
<span class="line">eg. 123</span>
<span class="line">eg. -222</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Float := (&#39;-&#39; | &#39;+&#39;)? Digit+ DOT Digit+ ((&#39;e&#39; | &#39;E&#39;) (&#39;-&#39; | &#39;+&#39;)? Digit+)?;</span>
<span class="line">eg. 3.1415</span>
<span class="line">eg. 1.2E10</span>
<span class="line">eg. -1.33</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Identifier := (Letter | &#39;_&#39;) (Letter | Digit | &#39;_&#39; | MINUS)*;</span>
<span class="line">eg. a123</span>
<span class="line">eg. _abc123</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常量列表" tabindex="-1"><a class="header-anchor" href="#常量列表"><span>常量列表</span></a></h3><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PointValue : Integer | Float | StringLiteral | Boolean</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>TimeValue : Integer | DateTime | ISO8601 | NOW()<br> Note: Integer means timestamp type.</p><p>DateTime :<br> eg. 2016-11-16T16:22:33+08:00<br> eg. 2016-11-16 16:22:33+08:00<br> eg. 2016-11-16T16:22:33.000+08:00<br> eg. 2016-11-16 16:22:33.000+08:00<br> Note: DateTime Type can support several types, see Chapter 3 Datetime section for details.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PrecedenceEqualOperator : EQUAL | NOTEQUAL | LESSTHANOREQUALTO | LESSTHAN | GREATERTHANOREQUALTO | GREATERTHAN</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Timeseries : ROOT [DOT &lt;LayerName&gt;]* DOT &lt;SensorName&gt;<br> LayerName : Identifier<br> SensorName : Identifier<br> eg. root.ln.wf01.wt01.status<br> eg. root.sgcc.wf03.wt01.temperature<br> Note: Timeseries must be start with <code>root</code>(case insensitive) and end with sensor name.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>PrefixPath : ROOT (DOT &lt;LayerName&gt;)*<br> LayerName : Identifier | STAR<br> eg. root.sgcc<br> eg. root.*</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Path: (ROOT | &lt;LayerName&gt;) (DOT &lt;LayerName&gt;)* </span>
<span class="line">LayerName: Identifier | STAR</span>
<span class="line">eg. root.ln.wf01.wt01.status</span>
<span class="line">eg. root.*.wf01.wt01.status</span>
<span class="line">eg. root.ln.wf01.wt01.*</span>
<span class="line">eg. *.wt01.*</span>
<span class="line">eg. *</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,185)]))}const c=s(i,[["render",t],["__file","SQL-Reference.html.vue"]]),p=JSON.parse('{"path":"/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html","title":"","lang":"zh-CN","frontmatter":{"description":"SQL 参考文档 显示版本号 Schema 语句 设置存储组 删除存储组 创建时间序列语句 创建时间序列语句（简化版本，从v0.13起支持） 创建对齐时间序列语句 创建元数据模板语句 挂载元数据模板语句 根据元数据模板创建时间序列语句 卸载元数据模板语句 删除时间序列语句 修改时间序列标签属性语句 显示所有时间序列语句 显示特定时间序列语句 显示满足条...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V0.13.x/Reference/SQL-Reference.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V0.13.x/Reference/SQL-Reference.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:description","content":"SQL 参考文档 显示版本号 Schema 语句 设置存储组 删除存储组 创建时间序列语句 创建时间序列语句（简化版本，从v0.13起支持） 创建对齐时间序列语句 创建元数据模板语句 挂载元数据模板语句 根据元数据模板创建时间序列语句 卸载元数据模板语句 删除时间序列语句 修改时间序列标签属性语句 显示所有时间序列语句 显示特定时间序列语句 显示满足条..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"SQL 参考文档","slug":"sql-参考文档","link":"#sql-参考文档","children":[{"level":3,"title":"显示版本号","slug":"显示版本号","link":"#显示版本号","children":[]},{"level":3,"title":"Schema 语句","slug":"schema-语句","link":"#schema-语句","children":[]},{"level":3,"title":"数据管理语句","slug":"数据管理语句","link":"#数据管理语句","children":[]},{"level":3,"title":"数据库管理语句","slug":"数据库管理语句","link":"#数据库管理语句","children":[]},{"level":3,"title":"功能","slug":"功能","link":"#功能","children":[]}]},{"level":2,"title":"TTL","slug":"ttl","link":"#ttl","children":[{"level":3,"title":"中止查询","slug":"中止查询","link":"#中止查询","children":[]},{"level":3,"title":"设置系统为只读/可写入模式","slug":"设置系统为只读-可写入模式","link":"#设置系统为只读-可写入模式","children":[]},{"level":3,"title":"标识符列表","slug":"标识符列表","link":"#标识符列表","children":[]},{"level":3,"title":"常量列表","slug":"常量列表","link":"#常量列表","children":[]}]}],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":21.84,"words":6552},"filePathRelative":"zh/UserGuide/V0.13.x/Reference/SQL-Reference.md","localizedDate":"2023年7月10日","autoDesc":true}');export{c as comp,p as data};
