import{_ as s,c as n,b as a,o as i}from"./app-BHE9oQwv.js";const l={};function t(r,e){return i(),n("div",null,e[0]||(e[0]=[a(`<h1 id="sql-reference" tabindex="-1"><a class="header-anchor" href="#sql-reference"><span>SQL Reference</span></a></h1><p>In this part, we will introduce you IoTDB&#39;s Query Language. IoTDB offers you a SQL-like query language for interacting with IoTDB, the query language can be devided into 4 major parts:</p><ul><li>Schema Statement: statements about schema management are all listed in this section.</li><li>Data Management Statement: statements about data management (such as: data insertion, data query, etc.) are all listed in this section.</li><li>Database Management Statement: statements about database management and authentication are all listed in this section.</li><li>Functions: functions that IoTDB offers are all listed in this section.</li></ul><p>All of these statements are write in IoTDB&#39;s own syntax, for details about the syntax composition, please check the <code>Reference</code> section.</p><h2 id="show-version" tabindex="-1"><a class="header-anchor" href="#show-version"><span>Show Version</span></a></h2><div class="language-sql line-numbers-mode" data-highlighter="prismjs" data-ext="sql" data-title="sql"><pre><code><span class="line"><span class="token keyword">show</span> version</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">+---------------+</span>
<span class="line">|        version|</span>
<span class="line">+---------------+</span>
<span class="line">|1.0.0|</span>
<span class="line">+---------------+</span>
<span class="line">Total line number = 1</span>
<span class="line">It costs 0.417s</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="schema-statement" tabindex="-1"><a class="header-anchor" href="#schema-statement"><span>Schema Statement</span></a></h2><ul><li>Create Database</li></ul><div class="language-SQL line-numbers-mode" data-highlighter="prismjs" data-ext="SQL" data-title="SQL"><pre><code><span class="line">CREATE DATABASE &lt;FullPath&gt;</span>
<span class="line">Eg: IoTDB &gt; CREATE DATABASE root.ln.wf01.wt01</span>
<span class="line">Note: FullPath can not include wildcard \`*\` or \`**\`</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete database</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DELETE DATABASE &lt;PathPattern&gt; [COMMA &lt;PathPattern&gt;]*</span>
<span class="line">Eg: IoTDB &gt; DELETE DATABASE root.ln.wf01.wt01</span>
<span class="line">Eg: IoTDB &gt; DELETE DATABASE root.ln.wf01.wt01, root.ln.wf01.wt02</span>
<span class="line">Eg: IoTDB &gt; DELETE DATABASE root.ln.wf01.*</span>
<span class="line">Eg: IoTDB &gt; DELETE DATABASE root.**</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE TIMESERIES &lt;FullPath&gt; WITH &lt;AttributeClauses&gt;</span>
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
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, DEADBAND=SDT, COMPDEV=0.01</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, DEADBAND=SDT, COMPDEV=0.01, COMPMINTIME=3</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature WITH DATATYPE=FLOAT, ENCODING=RLE, DEADBAND=SDT, COMPDEV=0.01, COMPMINTIME=2, COMPMAXTIME=15</span>
<span class="line">Note: Datatype and encoding type must be corresponding. Please check Chapter 3 Encoding Section for details.</span>
<span class="line">Note: When propertyValue is SDT, it is required to set compression deviation COMPDEV, which is the maximum absolute difference between values.</span>
<span class="line">Note: For SDT, values withtin COMPDEV will be discarded.</span>
<span class="line">Note: For SDT, it is optional to set compression minimum COMPMINTIME, which is the minimum time difference between stored values for purpose of noise reduction.</span>
<span class="line">Note: For SDT, it is optional to set compression maximum COMPMAXTIME, which is the maximum time difference between stored values regardless of COMPDEV.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Timeseries Statement (Simplified version, from v0.13)</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE TIMESERIES &lt;FullPath&gt; &lt;SimplifiedAttributeClauses&gt;</span>
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
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE DEADBAND=SDT COMPDEV=0.01</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE DEADBAND=SDT COMPDEV=0.01 COMPMINTIME=3</span>
<span class="line">Eg: CREATE TIMESERIES root.ln.wf01.wt01.temperature FLOAT ENCODING=RLE DEADBAND=SDT COMPDEV=0.01 COMPMINTIME=2 COMPMAXTIME=15</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Aligned Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE ALIGNED TIMESERIES &lt;FullPath&gt; alignedMeasurements</span>
<span class="line">alignedMeasurements</span>
<span class="line">    : LR_BRACKET nodeNameWithoutWildcard attributeClauses</span>
<span class="line">    (COMMA nodeNameWithoutWildcard attributeClauses)+ RR_BRACKET</span>
<span class="line">    ;</span>
<span class="line">Eg: CREATE ALIGNED TIMESERIES root.ln.wf01.GPS(lat FLOAT ENCODING=GORILLA, lon FLOAT ENCODING=GORILLA COMPRESSOR=SNAPPY)</span>
<span class="line">Note: It is not supported to set different compression for a group of aligned timeseries.</span>
<span class="line">Note: It is not currently supported to set an alias, tag, and attribute for aligned timeseries.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Schema Template Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE SCHEMA TEMPLATE &lt;TemplateName&gt; LR_BRACKET &lt;TemplateMeasurementClause&gt; (COMMA plateMeasurementClause&gt;)* RR_BRACKET</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Set Schema Template Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SET SCHEMA TEMPLATE &lt;TemplateName&gt; TO &lt;PrefixPath&gt;</span>
<span class="line">Eg: SET SCHEMA TEMPLATE temp1 TO root.beijing</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Timeseries Of Schema Template Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE TIMESERIES OF SCHEMA TEMPLATE ON &lt;PrefixPath&gt;</span>
<span class="line">Eg: CREATE TIMESERIES OF SCHEMA TEMPLATE ON root.beijing</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Unset Schema Template Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">UNSET SCHEMA TEMPLATE &lt;TemplateName&gt; FROM &lt;PrefixPath&gt;</span>
<span class="line">Eg: UNSET SCHEMA TEMPLATE temp1 FROM root.beijing</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">(DELETE | DROP) TIMESERIES &lt;PathPattern&gt; [COMMA &lt;PathPattern&gt;]*</span>
<span class="line">Eg: IoTDB &gt; DELETE TIMESERIES root.ln.wf01.wt01.status</span>
<span class="line">Eg: IoTDB &gt; DELETE TIMESERIES root.ln.wf01.wt01.status, root.ln.wf01.wt01.temperature</span>
<span class="line">Eg: IoTDB &gt; DELETE TIMESERIES root.ln.wf01.wt01.*</span>
<span class="line">Eg: IoTDB &gt; DROP TIMESERIES root.ln.wf01.wt01.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Alter Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER TIMESERIES fullPath alterClause</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show All Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW TIMESERIES</span>
<span class="line">Eg: IoTDB &gt; SHOW TIMESERIES</span>
<span class="line">Note: This statement can only be used in IoTDB Client. If you need to show all timeseries in JDBC, please use \`DataBaseMetadata\` interface.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Specific Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW TIMESERIES &lt;Path&gt;</span>
<span class="line">Eg: IoTDB &gt; SHOW TIMESERIES root.**</span>
<span class="line">Eg: IoTDB &gt; SHOW TIMESERIES root.ln.**</span>
<span class="line">Eg: IoTDB &gt; SHOW TIMESERIES root.ln.*.*.status</span>
<span class="line">Eg: IoTDB &gt; SHOW TIMESERIES root.ln.wf01.wt01.status</span>
<span class="line">Note: The path can be timeseries path or path pattern.</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Specific Timeseries Statement with where clause</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW TIMESERIES pathPattern? showWhereClause?</span>
<span class="line">showWhereClause</span>
<span class="line">    : WHERE (property | containsExpression)</span>
<span class="line">    ;</span>
<span class="line">containsExpression</span>
<span class="line">    : name=ID OPERATOR_CONTAINS value=propertyValue</span>
<span class="line">    ;</span>
<span class="line"></span>
<span class="line">Eg: show timeseries root.ln.** where unit=&#39;c&#39;</span>
<span class="line">Eg: show timeseries root.ln.** where description contains &#39;test1&#39;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Specific Timeseries Statement with where clause start from offset and limit the total number of result</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW TIMESERIES pathPattern? showWhereClause? limitClause?</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Databases Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW DATABASES</span>
<span class="line">Eg: IoTDB &gt; SHOW DATABASES</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Specific database Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW DATABASES &lt;Path&gt;</span>
<span class="line">Eg: IoTDB &gt; SHOW DATABASES root.*</span>
<span class="line">Eg: IoTDB &gt; SHOW DATABASES root.ln</span>
<span class="line">Note: The path can be full path or path pattern.</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Merge Status Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW MERGE INFO</span>
<span class="line">Eg: IoTDB &gt; SHOW MERGE INFO</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Count Timeseries Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">COUNT TIMESERIES &lt;Path&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Count Nodes Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">COUNT NODES &lt;Path&gt; LEVEL=&lt;INTEGER&gt;</span>
<span class="line">Eg: IoTDB &gt; COUNT NODES root.** LEVEL=2</span>
<span class="line">Eg: IoTDB &gt; COUNT NODES root.ln.** LEVEL=2</span>
<span class="line">Eg: IoTDB &gt; COUNT NODES root.ln.* LEVEL=3</span>
<span class="line">Eg: IoTDB &gt; COUNT NODES root.ln.wf01 LEVEL=3</span>
<span class="line">Note: The path can be full path or path pattern.</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show All Devices Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW DEVICES (WITH DATABASE)? limitClause? </span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES</span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES WITH DATABASE</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Specific Devices Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW DEVICES &lt;PathPattern&gt; (WITH DATABASE)? limitClause?</span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES root.**</span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES root.ln.**</span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES root.*.wf01</span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES root.ln WITH DATABASE</span>
<span class="line">Eg: IoTDB &gt; SHOW DEVICES root.*.wf01 WITH DATABASE</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Child Paths of Root Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CHILD PATHS</span>
<span class="line">Eg: IoTDB &gt; SHOW CHILD PATHS</span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show Child Paths Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW CHILD PATHS &lt;PathPattern&gt;</span>
<span class="line">Eg: IoTDB &gt; SHOW CHILD PATHS root</span>
<span class="line">Eg: IoTDB &gt; SHOW CHILD PATHS root.ln</span>
<span class="line">Eg: IoTDB &gt; SHOW CHILD PATHS root.*.wf01</span>
<span class="line">Eg: IoTDB &gt; SHOW CHILD PATHS root.ln.wf* </span>
<span class="line">Note: This statement can be used in IoTDB Client and JDBC.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="data-management-statement" tabindex="-1"><a class="header-anchor" href="#data-management-statement"><span>Data Management Statement</span></a></h2><ul><li>Insert Record Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">INSERT INTO &lt;PrefixPath&gt; LPAREN TIMESTAMP COMMA &lt;Sensor&gt; [COMMA &lt;Sensor&gt;]* RPAREN VALUES LPAREN &lt;TimeValue&gt;, &lt;PointValue&gt; [COMMA &lt;PointValue&gt;]* RPAREN</span>
<span class="line">Sensor : Identifier</span>
<span class="line">Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) values(1509465600000,true)</span>
<span class="line">Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,status) VALUES(NOW(), false)</span>
<span class="line">Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,temperature) VALUES(2017-11-01T00:17:00.000+08:00,24.22028)</span>
<span class="line">Eg: IoTDB &gt; INSERT INTO root.ln.wf01.wt01(timestamp,status,temperature) VALUES (1509466680000,false,20.060787)</span>
<span class="line">Eg: IoTDB &gt; INSERT INTO root.sg.d1(timestamp,(s1,s2),(s3,s4)) VALUES (1509466680000,(1.0,2),(NULL,4))</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line">Note: The order of Sensor and PointValue need one-to-one correspondence</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete Record Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DELETE FROM &lt;PathPattern&gt; [COMMA &lt;PathPattern&gt;]* [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">WhereClause : &lt;Condition&gt; [(AND) &lt;Condition&gt;]*</span>
<span class="line">Condition  : &lt;TimeExpr&gt; [(AND) &lt;TimeExpr&gt;]*</span>
<span class="line">TimeExpr : TIME PrecedenceEqualOperator (&lt;TimeValue&gt; | &lt;RelativeTime&gt;)</span>
<span class="line">Eg: DELETE FROM root.ln.wf01.wt01.temperature WHERE time &gt; 2016-01-05T00:15:00+08:00 and time &lt; 2017-11-1T00:05:00+08:00</span>
<span class="line">Eg: DELETE FROM root.ln.wf01.wt01.status, root.ln.wf01.wt01.temperature WHERE time &lt; NOW()</span>
<span class="line">Eg: DELETE FROM root.ln.wf01.wt01.* WHERE time &gt;= 1509466140000</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Select Record Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
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
<span class="line">Eg: IoTDB &gt; SELECT status, temperature FROM root.ln.wf01.wt01 WHERE temperature &lt; 24 and time &gt; 2017-11-1 0:13:00</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Group By Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt; GROUP BY &lt;GroupByTimeClause&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Fill Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE &lt;WhereClause&gt; FILL &lt;FillClause&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Group By Fill Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt; GROUP BY &lt;GroupByClause&gt; (FILL &lt;GROUPBYFillClause&gt;)?</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Order by time Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt; GROUP BY &lt;GroupByClause&gt; (FILL &lt;GROUPBYFillClause&gt;)? orderByTimeClause?</span>
<span class="line">orderByTimeClause: order by time (asc | desc)?</span>
<span class="line"></span>
<span class="line">Eg: SELECT last_value(temperature) FROM root.ln.wf01.wt01 GROUP BY([20, 100), 5m) FILL (float[PREVIOUS]) order by time desc</span>
<span class="line">Eg: SELECT * from root.** order by time desc</span>
<span class="line">Eg: SELECT * from root.** order by time desc align by device </span>
<span class="line">Eg: SELECT * from root.** order by time desc disable align</span>
<span class="line">Eg: SELECT last * from root.** order by time desc</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Limit Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;] [&lt;LIMITClause&gt;] [&lt;SLIMITClause&gt;]</span>
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
<span class="line">Eg: IoTDB &gt; SELECT status, temperature FROM root.ln.wf01.wt01 WHERE temperature &lt; 24 and time &gt; 2017-11-1 0:13:00 LIMIT 3 OFFSET 2</span>
<span class="line">Eg. IoTDB &gt; SELECT COUNT (status), MAX_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE time &lt; 1509466500000 GROUP BY([1509465720000, 1509466380000], 5m) LIMIT 3</span>
<span class="line">Note: N, OFFSETValue, SN and SOFFSETValue must be greater than 0.</span>
<span class="line">Note: The order of &lt;LIMITClause&gt; and &lt;SLIMITClause&gt; does not affect the grammatical correctness.</span>
<span class="line">Note: &lt;FillClause&gt; can not use &lt;LIMITClause&gt; but not &lt;SLIMITClause&gt;.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Align By Device Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">AlignbyDeviceClause : ALIGN BY DEVICE</span>
<span class="line"></span>
<span class="line">Rules:  </span>
<span class="line">1. Both uppercase and lowercase are ok.  </span>
<span class="line">Correct example: select * from root.sg1.* align by device  </span>
<span class="line">Correct example: select * from root.sg1.* ALIGN BY DEVICE  </span>
<span class="line"></span>
<span class="line">2. AlignbyDeviceClause can only be used at the end of a query statement.  </span>
<span class="line">Correct example: select * from root.sg1.* where time &gt; 10 align by device  </span>
<span class="line">Wrong example: select * from root.sg1.* align by device where time &gt; 10  </span>
<span class="line"></span>
<span class="line">3. The paths of the SELECT clause can only be single level. In other words, the paths of the SELECT clause can only be measurements or STAR, without DOT.</span>
<span class="line">Correct example: select s0,s1 from root.sg1.* align by device  </span>
<span class="line">Correct example: select s0,s1 from root.sg1.d0, root.sg1.d1 align by device  </span>
<span class="line">Correct example: select * from root.sg1.* align by device  </span>
<span class="line">Correct example: select * from root.** align by device  </span>
<span class="line">Correct example: select s0,s1,* from root.*.* align by device  </span>
<span class="line">Wrong example: select d0.s1, d0.s2, d1.s0 from root.sg1 align by device  </span>
<span class="line">Wrong example: select *.s0, *.s1 from root.* align by device  </span>
<span class="line">Wrong example: select *.*.* from root align by device</span>
<span class="line"></span>
<span class="line">4. The data types of the same measurement column should be the same across devices. </span>
<span class="line">Note that when it comes to aggregated paths, the data type of the measurement column will reflect </span>
<span class="line">the aggregation function rather than the original timeseries.</span>
<span class="line"></span>
<span class="line">Correct example: select s0 from root.sg1.d0,root.sg1.d1 align by device   </span>
<span class="line">root.sg1.d0.s0 and root.sg1.d1.s0 are both INT32.  </span>
<span class="line"></span>
<span class="line">Correct example: select count(s0) from root.sg1.d0,root.sg1.d1 align by device   </span>
<span class="line">count(root.sg1.d0.s0) and count(root.sg1.d1.s0) are both INT64.  </span>
<span class="line"></span>
<span class="line">Wrong example: select s0 from root.sg1.d0, root.sg2.d3 align by device  </span>
<span class="line">root.sg1.d0.s0 is INT32 while root.sg2.d3.s0 is FLOAT. </span>
<span class="line"></span>
<span class="line">5. The display principle of the result table is that all the columns (no matther whther a column has has existing data) will be shown, with nonexistent cells being null. Besides, the select clause support const column (e.g., &#39;a&#39;, &#39;123&#39; etc..).  </span>
<span class="line">For example, &quot;select s0,s1,s2,&#39;abc&#39;,s1,s2 from root.sg.d0, root.sg.d1, root.sg.d2 align by device&quot;. Suppose that the actual existing timeseries are as follows:  </span>
<span class="line">- root.sg.d0.s0</span>
<span class="line">- root.sg.d0.s1</span>
<span class="line">- root.sg.d1.s0</span>
<span class="line"></span>
<span class="line">Then you could expect a table like:  </span>
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
<span class="line">Note that the cells of measurement &#39;s0&#39; and device &#39;root.sg.d1&#39; are all null.    </span>
<span class="line"></span>
<span class="line">6. The duplicated devices in the prefix paths are neglected.  </span>
<span class="line">For example, &quot;select s0,s1 from root.sg.d0,root.sg.d0,root.sg.d1 align by device&quot; is equal to &quot;select s0,s1 from root.sg.d0,root.sg.d1 align by device&quot;.  </span>
<span class="line">For example. &quot;select s0,s1 from root.sg.*,root.sg.d0 align by device&quot; is equal to &quot;select s0,s1 from root.sg.* align by device&quot;.  </span>
<span class="line"></span>
<span class="line">7. The duplicated measurements in the suffix paths are not neglected.  </span>
<span class="line">For example, &quot;select s0,s0,s1 from root.sg.* align by device&quot; is not equal to &quot;select s0,s1 from root.sg.* align by device&quot;.</span>
<span class="line"></span>
<span class="line">8. Both time predicates and value predicates are allowed in Where Clause. The paths of the value predicates can be the leaf node or full path started with ROOT. And wildcard is not allowed here. For example:</span>
<span class="line">- select * from root.sg.* where time = 1 align by device</span>
<span class="line">- select * from root.sg.* where s0 &lt; 100 align by device</span>
<span class="line">- select * from root.sg.* where time &lt; 20 AND s0 &gt; 50 align by device</span>
<span class="line">- select * from root.sg.d0 where root.sg.d0.s0 = 15 align by device</span>
<span class="line"></span>
<span class="line">9. More correct examples:</span>
<span class="line">   - select * from root.vehicle.* align by device</span>
<span class="line">   - select s0,s0,s1 from root.vehicle.* align by device</span>
<span class="line">   - select s0,s1 from root.vehicle.* limit 10 offset 1 align by device</span>
<span class="line">   - select * from root.vehicle.* slimit 10 soffset 2 align by device</span>
<span class="line">   - select * from root.vehicle.* where time &gt; 10 align by device</span>
<span class="line">   - select * from root.vehicle.* where time &lt; 10 AND s0 &gt; 25 align by device</span>
<span class="line">   - select * from root.vehicle.* where root.vehicle.d0.s0&gt;0 align by device</span>
<span class="line">   - select count(*) from root.vehicle align by device</span>
<span class="line">   - select sum(*) from root.vehicle.* GROUP BY (20ms,0,[2,50]) align by device</span>
<span class="line">   - select * from root.vehicle.* where time = 3 Fill(int32[previous, 5ms]) align by device</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Disable Align Statement</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Disable Align Clause: DISABLE ALIGN</span>
<span class="line"></span>
<span class="line">Rules:  </span>
<span class="line">1. Both uppercase and lowercase are ok.  </span>
<span class="line">Correct example: select * from root.sg1.* disable align  </span>
<span class="line">Correct example: select * from root.sg1.* DISABLE ALIGN  </span>
<span class="line"></span>
<span class="line">2. Disable Align Clause can only be used at the end of a query statement.  </span>
<span class="line">Correct example: select * from root.sg1.* where time &gt; 10 disable align </span>
<span class="line">Wrong example: select * from root.sg1.* disable align where time &gt; 10 </span>
<span class="line"></span>
<span class="line">3. Disable Align Clause cannot be used with Aggregation, Fill Statements, Group By or Group By Device Statements, but can with Limit Statements.</span>
<span class="line">Correct example: select * from root.sg1.* limit 3 offset 2 disable align</span>
<span class="line">Correct example: select * from root.sg1.* slimit 3 soffset 2 disable align</span>
<span class="line">Wrong example: select count(s0),count(s1) from root.sg1.d1 disable align</span>
<span class="line">Wrong example: select * from root.vehicle.* where root.vehicle.d0.s0&gt;0 disable align</span>
<span class="line">Wrong example: select * from root.vehicle.* align by device disable align</span>
<span class="line"></span>
<span class="line">4. The display principle of the result table is that only when the column (or row) has existing data will the column (or row) be shown, with nonexistent cells being empty.</span>
<span class="line"></span>
<span class="line">You could expect a table like:</span>
<span class="line">| Time | root.sg.d0.s1 | Time | root.sg.d0.s2 | Time | root.sg.d1.s1 |</span>
<span class="line">| ---  | ---           | ---  | ---           | ---  | ---           |</span>
<span class="line">|  1   | 100           | 20   | 300           | 400  | 600           |</span>
<span class="line">|  2   | 300           | 40   | 800           | 700  | 900           |</span>
<span class="line">|  4   | 500           |      |               | 800  | 1000          |</span>
<span class="line">|      |               |      |               | 900  | 8000          |</span>
<span class="line"></span>
<span class="line">5. More correct examples: </span>
<span class="line">   - select * from root.vehicle.* disable align</span>
<span class="line">   - select s0,s0,s1 from root.vehicle.* disable align</span>
<span class="line">   - select s0,s1 from root.vehicle.* limit 10 offset 1 disable align</span>
<span class="line">   - select * from root.vehicle.* slimit 10 soffset 2 disable align</span>
<span class="line">   - select * from root.vehicle.* where time &gt; 10 disable align</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Select Last Record Statement</li></ul><p>The LAST function returns the last time-value pair of the given timeseries. Currently filters are not supported in LAST queries.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT LAST &lt;SelectClause&gt; FROM &lt;FromClause&gt;</span>
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
<span class="line">Rules:</span>
<span class="line">1. the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span>
<span class="line">2. SELECT LAST only supports time filter that contains &#39;&gt;&#39; or &#39;&gt;=&#39; currently.</span>
<span class="line"></span>
<span class="line">3. The result set of last query will always be displayed in a fixed three column table format.</span>
<span class="line">For example, &quot;select last s1, s2 from root.sg.d1, root.sg.d2&quot;, the query result would be:</span>
<span class="line"></span>
<span class="line">| Time | Path          | Value | dataType |</span>
<span class="line">| ---  | ------------- |------ | -------- |</span>
<span class="line">|  5   | root.sg.d1.s1 | 100   | INT32    |</span>
<span class="line">|  2   | root.sg.d1.s2 | 400   | INT32    |</span>
<span class="line">|  4   | root.sg.d2.s1 | 250   | INT32    |</span>
<span class="line">|  9   | root.sg.d2.s2 | 600   | INT32    |</span>
<span class="line"></span>
<span class="line">4. It is not supported to use &quot;diable align&quot; in LAST query. </span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>As Statement</li></ul><p>As statement assigns an alias to time seires queried in SELECT statement</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">You can use as statement in all queries, but some rules are restricted about wildcard.</span>
<span class="line"></span>
<span class="line">1. Raw data query</span>
<span class="line">select s1 as speed, s2 as temperature from root.sg.d1</span>
<span class="line"></span>
<span class="line">The result set will be like：</span>
<span class="line">| Time | speed | temperature |</span>
<span class="line">|  ... |  ...  |     ....    |</span>
<span class="line"></span>
<span class="line">2. Aggregation query</span>
<span class="line">select count(s1) as s1_num, max_value(s2) as s2_max from root.sg.d1</span>
<span class="line"></span>
<span class="line">3. Down-frequence query</span>
<span class="line">select count(s1) as s1_num from root.sg.d1 group by ([100,500), 80ms)</span>
<span class="line"></span>
<span class="line">4. Align by device query</span>
<span class="line">select s1 as speed, s2 as temperature from root.sg.d1 align by device</span>
<span class="line"></span>
<span class="line">select count(s1) as s1_num, count(s2), count(s3) as s3_num from root.sg.d2 align by device</span>
<span class="line"></span>
<span class="line">5. Last Record query</span>
<span class="line">select last s1 as speed, s2 from root.sg.d1</span>
<span class="line"></span>
<span class="line">Rules：</span>
<span class="line">1. In addition to Align by device query，each AS statement has to corresponding to one time series exactly.</span>
<span class="line"></span>
<span class="line">E.g. select s1 as temperature from root.sg.*</span>
<span class="line"></span>
<span class="line">At this time if \`root.sg.*\` includes more than one device，then an exception will be thrown。</span>
<span class="line"></span>
<span class="line">2. In align by device query，the prefix path that each AS statement corresponding to can includes multiple device, but the suffix path can only be single sensor.</span>
<span class="line"></span>
<span class="line">E.g. select s1 as temperature from root.sg.*</span>
<span class="line"></span>
<span class="line">In this situation, it will be show correctly even if multiple devices are selected.</span>
<span class="line"></span>
<span class="line">E.g. select * as temperature from root.sg.d1</span>
<span class="line"></span>
<span class="line">In this situation, it will throws an exception if * corresponds to multiple sensors.</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Regexp Statement</li></ul><p>Regexp Statement only supports regular expressions with Java standard library style on timeseries which is TEXT data type</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Like Statement</li></ul><p>The usage of LIKE Statement similar with mysql, but only support timeseries which is TEXT data type</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT &lt;SelectClause&gt; FROM &lt;FromClause&gt; WHERE  &lt;WhereClause&gt;</span>
<span class="line">Select Clause : &lt;Path&gt; [COMMA &lt;Path&gt;]*</span>
<span class="line">FromClause : &lt; PrefixPath &gt; [COMMA &lt; PrefixPath &gt;]*</span>
<span class="line">WhereClause : andExpression (OPERATOR_OR andExpression)*</span>
<span class="line">andExpression : predicate (OPERATOR_AND predicate)*</span>
<span class="line">predicate : (suffixPath | fullPath) LIKE likeExpression</span>
<span class="line">likeExpression : string that may contains &quot;%&quot; or &quot;_&quot;, while &quot;%value&quot; means a string that ends with the value,  &quot;value%&quot; means a string starts with the value, &quot;%value%&quot; means string that contains values, and &quot;_&quot; represents any character.</span>
<span class="line"></span>
<span class="line">Eg. select s1 from root.sg.d1 where s1 like &#39;abc&#39;</span>
<span class="line">Eg. select s1, s2 from root.sg.d1 where s1 like &#39;a%bc&#39;</span>
<span class="line">Eg. select * from root.sg.d1 where s1 like &#39;abc_&#39;</span>
<span class="line">Eg. select * from root.sg.d1 where s1 like &#39;abc\\%&#39; and time &gt; 100</span>
<span class="line">In this situation, &#39;\\%&#39; means &#39;%&#39; will be escaped</span>
<span class="line">The result set will be like:</span>
<span class="line">| Time | Path         | Value |</span>
<span class="line">| ---  | ------------ | ----- |</span>
<span class="line">|  200 | root.sg.d1.s1| abc%  |</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="database-management-statement" tabindex="-1"><a class="header-anchor" href="#database-management-statement"><span>Database Management Statement</span></a></h2><ul><li>Create User</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE USER &lt;userName&gt; &lt;password&gt;;  </span>
<span class="line">userName:=identifier  </span>
<span class="line">password:=string</span>
<span class="line">Eg: IoTDB &gt; CREATE USER thulab &#39;pwd&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete User</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DROP USER &lt;userName&gt;;  </span>
<span class="line">userName:=identifier</span>
<span class="line">Eg: IoTDB &gt; DROP USER xiaoming;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Create Role</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">CREATE ROLE &lt;roleName&gt;;  </span>
<span class="line">roleName:=identifie</span>
<span class="line">Eg: IoTDB &gt; CREATE ROLE admin;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Delete Role</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DROP ROLE &lt;roleName&gt;;  </span>
<span class="line">roleName:=identifier</span>
<span class="line">Eg: IoTDB &gt; DROP ROLE admin;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Grant User Privileges</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GRANT USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  </span>
<span class="line">userName:=identifier  </span>
<span class="line">nodeName:=identifier (DOT identifier)*  </span>
<span class="line">privileges:= string (COMMA string)*</span>
<span class="line">Eg: IoTDB &gt; GRANT USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Grant Role Privileges</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GRANT ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  </span>
<span class="line">privileges:= string (COMMA string)*  </span>
<span class="line">roleName:=identifier  </span>
<span class="line">nodeName:=identifier (DOT identifier)*</span>
<span class="line">Eg: IoTDB &gt; GRANT ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Grant User Role</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">GRANT &lt;roleName&gt; TO &lt;userName&gt;;  </span>
<span class="line">roleName:=identifier  </span>
<span class="line">userName:=identifier</span>
<span class="line">Eg: IoTDB &gt; GRANT temprole TO tempuser;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Revoke User Privileges</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">REVOKE USER &lt;userName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;   </span>
<span class="line">privileges:= string (COMMA string)*  </span>
<span class="line">userName:=identifier  </span>
<span class="line">nodeName:=identifier (DOT identifier)*</span>
<span class="line">Eg: IoTDB &gt; REVOKE USER tempuser PRIVILEGES DELETE_TIMESERIES on root.ln;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Revoke Role Privileges</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">REVOKE ROLE &lt;roleName&gt; PRIVILEGES &lt;privileges&gt; ON &lt;nodeName&gt;;  </span>
<span class="line">privileges:= string (COMMA string)*  </span>
<span class="line">roleName:= identifier  </span>
<span class="line">nodeName:=identifier (DOT identifier)*</span>
<span class="line">Eg: IoTDB &gt; REVOKE ROLE temprole PRIVILEGES DELETE_TIMESERIES ON root.ln;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Revoke Role From User</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">REVOKE &lt;roleName&gt; FROM &lt;userName&gt;;</span>
<span class="line">roleName:=identifier</span>
<span class="line">userName:=identifier</span>
<span class="line">Eg: IoTDB &gt; REVOKE temprole FROM tempuser;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Users</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST USER</span>
<span class="line">Eg: IoTDB &gt; LIST USER</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Roles</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST ROLE</span>
<span class="line">Eg: IoTDB &gt; LIST ROLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST PRIVILEGES USER  &lt;username&gt; ON &lt;path&gt;;    </span>
<span class="line">username:=identifier    </span>
<span class="line">path=‘root’ (DOT identifier)*</span>
<span class="line">Eg: IoTDB &gt; LIST PRIVILEGES USER sgcc_wirte_user ON root.sgcc;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges of Roles</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST ROLE PRIVILEGES &lt;roleName&gt;</span>
<span class="line">roleName:=identifier</span>
<span class="line">Eg: IoTDB &gt; LIST ROLE PRIVILEGES actor;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges of Roles(On Specific Path)</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST PRIVILEGES ROLE &lt;roleName&gt; ON &lt;path&gt;;    </span>
<span class="line">roleName:=identifier  </span>
<span class="line">path=‘root’ (DOT identifier)*</span>
<span class="line">Eg: IoTDB &gt; LIST PRIVILEGES ROLE wirte_role ON root.sgcc;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Privileges of Users</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST USER PRIVILEGES &lt;username&gt; ;   </span>
<span class="line">username:=identifier  </span>
<span class="line">Eg: IoTDB &gt; LIST USER PRIVILEGES tempuser;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Roles of Users</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST ALL ROLE OF USER &lt;username&gt; ;  </span>
<span class="line">username:=identifier</span>
<span class="line">Eg: IoTDB &gt; LIST ALL ROLE OF USER tempuser;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>List Users of Role</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">LIST ALL USER OF ROLE &lt;roleName&gt;;</span>
<span class="line">roleName:=identifier</span>
<span class="line">Eg: IoTDB &gt; LIST ALL USER OF ROLE roleuser;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Alter Password</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ALTER USER &lt;username&gt; SET PASSWORD &lt;password&gt;;</span>
<span class="line">roleName:=identifier</span>
<span class="line">password:=identifier</span>
<span class="line">Eg: IoTDB &gt; ALTER USER tempuser SET PASSWORD &#39;newpwd&#39;;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="functions" tabindex="-1"><a class="header-anchor" href="#functions"><span>Functions</span></a></h2><ul><li>COUNT</li></ul><p>The COUNT function returns the value number of timeseries(one or more) non-null values selected by the SELECT statement. The result is a signed 64-bit integer. If there are no matching rows, COUNT () returns 0.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT COUNT(Path) (COMMA COUNT(Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT COUNT(status), COUNT(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>FIRST_VALUE(Rename from <code>FIRST</code> at <code>V0.10.0</code>)</li></ul><p>The FIRST_VALUE function returns the first point value of the choosen timeseries(one or more).</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT FIRST_VALUE (Path) (COMMA FIRST_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT FIRST_VALUE (status), FIRST_VALUE (temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>LAST_VALUE</li></ul><p>The LAST_VALUE function returns the last point value of the choosen timeseries(one or more).</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT LAST_VALUE (Path) (COMMA LAST_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT LAST_VALUE (status), LAST_VALUE (temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MAX_TIME</li></ul><p>The MAX_TIME function returns the maximum timestamp of the choosen timeseries(one or more). The result is a signed 64-bit integer, greater than 0.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT MAX_TIME (Path) (COMMA MAX_TIME (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT MAX_TIME(status), MAX_TIME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MAX_VALUE</li></ul><p>The MAX_VALUE function returns the maximum value(lexicographically ordered) of the choosen timeseries (one or more).</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT MAX_VALUE (Path) (COMMA MAX_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT MAX_VALUE(status), MAX_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>EXTREME</li></ul><p>The EXTREME function returns the extreme value(lexicographically ordered) of the choosen timeseries (one or more).<br> extreme value: The value that has the maximum absolute value.<br> If the maximum absolute value of a positive value and a negative value is equal, return the positive value.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT EXTREME (Path) (COMMA EXT (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT EXTREME(status), EXTREME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>AVG(Rename from <code>MEAN</code> at <code>V0.9.0</code>)</li></ul><p>The AVG function returns the arithmetic mean value of the choosen timeseries over a specified period of time. The timeseries must be int32, int64, float, double type, and the other types are not to be calculated. The result is a double type number.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT AVG (Path) (COMMA AVG (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT AVG (temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MIN_TIME</li></ul><p>The MIN_TIME function returns the minimum timestamp of the choosen timeseries(one or more). The result is a signed 64-bit integer, greater than 0.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT MIN_TIME (Path) (COMMA MIN_TIME (Path))*FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT MIN_TIME(status), MIN_TIME(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>MIN_VALUE</li></ul><p>The MIN_VALUE function returns the minimum value(lexicographically ordered) of the choosen timeseries (one or more).</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT MIN_VALUE (Path) (COMMA MIN_VALUE (Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT MIN_VALUE(status),MIN_VALUE(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>NOW</li></ul><p>The NOW function returns the current timestamp. This function can be used in the data operation statement to represent time. The result is a signed 64-bit integer, greater than 0.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">NOW()</span>
<span class="line">Eg. INSERT INTO root.ln.wf01.wt01(timestamp,status) VALUES(NOW(), false)</span>
<span class="line">Eg. DELETE FROM root.ln.wf01.wt01.status, root.ln.wf01.wt01.temperature WHERE time &lt; NOW()</span>
<span class="line">Eg. SELECT * FROM root.** WHERE time &lt; NOW()</span>
<span class="line">Eg. SELECT COUNT(temperature) FROM root.ln.wf01.wt01 WHERE time &lt; NOW()</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>SUM</li></ul><p>The SUM function returns the sum of the choosen timeseries (one or more) over a specified period of time. The timeseries must be int32, int64, float, double type, and the other types are not to be calculated. The result is a double type number.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SELECT SUM(Path) (COMMA SUM(Path))* FROM &lt;FromClause&gt; [WHERE &lt;WhereClause&gt;]?</span>
<span class="line">Eg. SELECT SUM(temperature) FROM root.ln.wf01.wt01 WHERE root.ln.wf01.wt01.temperature &lt; 24</span>
<span class="line">Note: the statement needs to satisfy this constraint: &lt;PrefixPath&gt; + &lt;Path&gt; = &lt;Timeseries&gt;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ttl" tabindex="-1"><a class="header-anchor" href="#ttl"><span>TTL</span></a></h2><p>IoTDB supports storage-level TTL settings, which means it is able to delete old data<br> automatically and periodically. The benefit of using TTL is that hopefully you can control the<br> total disk space usage and prevent the machine from running out of disks. Moreover, the query<br> performance may downgrade as the total number of files goes up and the memory usage also increase<br> as there are more files. Timely removing such files helps to keep at a high query performance<br> level and reduce memory usage. The TTL operations in IoTDB are supported by the following three<br> statements:</p><ul><li>Set TTL</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SET TTL TO StorageGroupName TTLTime</span>
<span class="line">Eg. SET TTL TO root.group1 3600000</span>
<span class="line">This example means that for data in root.group1, only that of the latest 1 hour will remain, the</span>
<span class="line">older one is removed or made invisible. </span>
<span class="line">Note: TTLTime should be millisecond timestamp. When TTL is set, insertions that fall</span>
<span class="line">out of TTL will be rejected.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Unset TTL</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">UNSET TTL TO StorageGroupName</span>
<span class="line">Eg. UNSET TTL TO root.group1</span>
<span class="line">This example means that data of all time will be accepted in this group. </span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Show TTL</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW ALL TTL</span>
<span class="line">SHOW TTL ON StorageGroupNames</span>
<span class="line">Eg.1 SHOW ALL TTL</span>
<span class="line">This example will show TTLs of all databases.</span>
<span class="line">Eg.2 SHOW TTL ON root.group1,root.group2,root.group3</span>
<span class="line">This example will show TTLs of the specified 3 groups.</span>
<span class="line">Notice: databases without TTL will show a &quot;null&quot;</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Notice: When you set TTL to some databases, data out of the TTL will be made invisible<br> immediately, but because the data files may contain both out-dated and living data or the data files may<br> be being used by queries, the physical removal of data is stale. If you increase or unset TTL<br> just after setting it previously, some previously invisible data may be seen again, but the<br> physically removed one is lost forever. In other words, different from delete statement, the<br> atomicity of data deletion is not guaranteed for efficiency concerns. So we recommend that you do<br> not change the TTL once it is set or at least do not reset it frequently, unless you are determined<br> to suffer the unpredictability.</p><ul><li>Delete Partition (experimental)</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">DELETE PARTITION StorageGroupName INT(COMMA INT)*</span>
<span class="line">Eg DELETE PARTITION root.sg1 0,1,2</span>
<span class="line">This example will delete the first 3 time partitions of database root.sg1.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The partitionId can be found in data folders or converted using <code>timestamp / partitionInterval</code>.</p><h2 id="kill-query" tabindex="-1"><a class="header-anchor" href="#kill-query"><span>Kill query</span></a></h2><ul><li>Show the list of queries in progress</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">SHOW QUERY PROCESSLIST</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Kill query</li></ul><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">KILL QUERY INT?</span>
<span class="line">E.g. KILL QUERY</span>
<span class="line">E.g. KILL QUERY 2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="set-system-to-readonly-writable" tabindex="-1"><a class="header-anchor" href="#set-system-to-readonly-writable"><span>SET SYSTEM TO READONLY / WRITABLE</span></a></h2><p>Set IoTDB system to read-only or writable mode.</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">IoTDB&gt; SET SYSTEM TO READONLY</span>
<span class="line">IoTDB&gt; SET SYSTEM TO WRITABLE</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="identifiers" tabindex="-1"><a class="header-anchor" href="#identifiers"><span>Identifiers</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">QUOTE := &#39;\\&#39;&#39;;</span>
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
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="literals" tabindex="-1"><a class="header-anchor" href="#literals"><span>Literals</span></a></h2><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PointValue : Integer | Float | StringLiteral | Boolean</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">TimeValue : Integer | DateTime | ISO8601 | NOW()</span>
<span class="line">Note: Integer means timestamp type.</span>
<span class="line"></span>
<span class="line">DateTime : </span>
<span class="line">eg. 2016-11-16T16:22:33+08:00</span>
<span class="line">eg. 2016-11-16 16:22:33+08:00</span>
<span class="line">eg. 2016-11-16T16:22:33.000+08:00</span>
<span class="line">eg. 2016-11-16 16:22:33.000+08:00</span>
<span class="line">Note: DateTime Type can support several types, see Chapter 3 Datetime section for details.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PrecedenceEqualOperator : EQUAL | NOTEQUAL | LESSTHANOREQUALTO | LESSTHAN | GREATERTHANOREQUALTO | GREATERTHAN</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Timeseries : ROOT [DOT \\&lt;LayerName\\&gt;]* DOT \\&lt;SensorName\\&gt;</span>
<span class="line">LayerName : Identifier</span>
<span class="line">SensorName : Identifier</span>
<span class="line">eg. root.ln.wf01.wt01.status</span>
<span class="line">eg. root.sgcc.wf03.wt01.temperature</span>
<span class="line">Note: Timeseries must be start with \`root\`(case insensitive) and end with sensor name.</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">PrefixPath : ROOT (DOT \\&lt;LayerName\\&gt;)*</span>
<span class="line">LayerName : Identifier | STAR</span>
<span class="line">eg. root.sgcc</span>
<span class="line">eg. root.*</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">Path: (ROOT | &lt;LayerName&gt;) (DOT &lt;LayerName&gt;)* </span>
<span class="line">LayerName: Identifier | STAR</span>
<span class="line">eg. root.ln.wf01.wt01.status</span>
<span class="line">eg. root.*.wf01.wt01.status</span>
<span class="line">eg. root.ln.wf01.wt01.*</span>
<span class="line">eg. *.wt01.*</span>
<span class="line">eg. *</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,196)]))}const c=s(l,[["render",t],["__file","SQL-Reference.html.vue"]]),p=JSON.parse(`{"path":"/UserGuide/V1.1.x/Reference/SQL-Reference.html","title":"SQL Reference","lang":"en-US","frontmatter":{"description":"SQL Reference In this part, we will introduce you IoTDB's Query Language. IoTDB offers you a SQL-like query language for interacting with IoTDB, the query language can be devide...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://iotdb.apache.org/zh/UserGuide/V1.1.x/Reference/SQL-Reference.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/UserGuide/V1.1.x/Reference/SQL-Reference.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"SQL Reference"}],["meta",{"property":"og:description","content":"SQL Reference In this part, we will introduce you IoTDB's Query Language. IoTDB offers you a SQL-like query language for interacting with IoTDB, the query language can be devide..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-07T08:05:06.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-07T08:05:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SQL Reference\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-11-07T08:05:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Show Version","slug":"show-version","link":"#show-version","children":[]},{"level":2,"title":"Schema Statement","slug":"schema-statement","link":"#schema-statement","children":[]},{"level":2,"title":"Data Management Statement","slug":"data-management-statement","link":"#data-management-statement","children":[]},{"level":2,"title":"Database Management Statement","slug":"database-management-statement","link":"#database-management-statement","children":[]},{"level":2,"title":"Functions","slug":"functions","link":"#functions","children":[]},{"level":2,"title":"TTL","slug":"ttl","link":"#ttl","children":[]},{"level":2,"title":"Kill query","slug":"kill-query","link":"#kill-query","children":[]},{"level":2,"title":"SET SYSTEM TO READONLY / WRITABLE","slug":"set-system-to-readonly-writable","link":"#set-system-to-readonly-writable","children":[]},{"level":2,"title":"Identifiers","slug":"identifiers","link":"#identifiers","children":[]},{"level":2,"title":"Literals","slug":"literals","link":"#literals","children":[]}],"git":{"createdTime":1688958677000,"updatedTime":1699344306000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1},{"name":"Itami Sho","email":"42286868+MiniSho@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":20.94,"words":6281},"filePathRelative":"UserGuide/V1.1.x/Reference/SQL-Reference.md","localizedDate":"July 10, 2023","autoDesc":true}`);export{c as comp,p as data};
