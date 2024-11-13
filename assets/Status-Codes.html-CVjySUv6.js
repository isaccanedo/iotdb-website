import{_ as e,c as l,b as d,o as a}from"./app-BHE9oQwv.js";const s={};function n(i,t){return a(),l("div",null,t[0]||(t[0]=[d(`<h1 id="状态码" tabindex="-1"><a class="header-anchor" href="#状态码"><span>状态码</span></a></h1><p>IoTDB 引入了<strong>状态码</strong>这一概念。例如，因为 IoTDB 需要在写入数据之前首先注册时间序列，一种可能的解决方案是：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">try {</span>
<span class="line">    writeData();</span>
<span class="line">} catch (SQLException e) {</span>
<span class="line">  // the most case is that the time series does not exist</span>
<span class="line">  if (e.getMessage().contains(&quot;exist&quot;)) {</span>
<span class="line">      //However, using the content of the error message is not so efficient</span>
<span class="line">      registerTimeSeries();</span>
<span class="line">      //write data once again</span>
<span class="line">      writeData();</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>利用状态码，我们就可以不必写诸如<code>if (e.getErrorMessage().contains(&quot;exist&quot;))</code>的代码，<br> 只需要使用<code>e.getStatusType().getCode() == TSStatusCode.TIME_SERIES_NOT_EXIST_ERROR.getStatusCode()</code>。</p><p>这里是状态码和相对应信息的列表：</p><table><thead><tr><th style="text-align:left;">状态码</th><th style="text-align:left;">状态类型</th><th style="text-align:left;">状态信息</th></tr></thead><tbody><tr><td style="text-align:left;">200</td><td style="text-align:left;">SUCCESS_STATUS</td><td style="text-align:left;">成功状态</td></tr><tr><td style="text-align:left;">201</td><td style="text-align:left;">INCOMPATIBLE_VERSION</td><td style="text-align:left;">版本不兼容</td></tr><tr><td style="text-align:left;">202</td><td style="text-align:left;">CONFIGURATION_ERROR</td><td style="text-align:left;">配置文件有错误项</td></tr><tr><td style="text-align:left;">203</td><td style="text-align:left;">START_UP_ERROR</td><td style="text-align:left;">启动错误</td></tr><tr><td style="text-align:left;">204</td><td style="text-align:left;">SHUT_DOWN_ERROR</td><td style="text-align:left;">关机错误</td></tr><tr><td style="text-align:left;">300</td><td style="text-align:left;">UNSUPPORTED_OPERATION</td><td style="text-align:left;">不支持的操作</td></tr><tr><td style="text-align:left;">301</td><td style="text-align:left;">EXECUTE_STATEMENT_ERROR</td><td style="text-align:left;">执行语句错误</td></tr><tr><td style="text-align:left;">302</td><td style="text-align:left;">MULTIPLE_ERROR</td><td style="text-align:left;">多行语句执行错误</td></tr><tr><td style="text-align:left;">303</td><td style="text-align:left;">ILLEGAL_PARAMETER</td><td style="text-align:left;">参数错误</td></tr><tr><td style="text-align:left;">304</td><td style="text-align:left;">OVERLAP_WITH_EXISTING_TASK</td><td style="text-align:left;">与正在执行的其他操作冲突</td></tr><tr><td style="text-align:left;">305</td><td style="text-align:left;">INTERNAL_SERVER_ERROR</td><td style="text-align:left;">服务器内部错误</td></tr><tr><td style="text-align:left;">306</td><td style="text-align:left;">DISPATCH_ERROR</td><td style="text-align:left;">分发错误</td></tr><tr><td style="text-align:left;">400</td><td style="text-align:left;">REDIRECTION_RECOMMEND</td><td style="text-align:left;">推荐客户端重定向</td></tr><tr><td style="text-align:left;">500</td><td style="text-align:left;">DATABASE_NOT_EXIST</td><td style="text-align:left;">数据库不存在</td></tr><tr><td style="text-align:left;">501</td><td style="text-align:left;">DATABASE_ALREADY_EXISTS</td><td style="text-align:left;">数据库已存在</td></tr><tr><td style="text-align:left;">502</td><td style="text-align:left;">SERIES_OVERFLOW</td><td style="text-align:left;">序列数量超过阈值</td></tr><tr><td style="text-align:left;">503</td><td style="text-align:left;">TIMESERIES_ALREADY_EXIST</td><td style="text-align:left;">时间序列已存在</td></tr><tr><td style="text-align:left;">504</td><td style="text-align:left;">TIMESERIES_IN_BLACK_LIST</td><td style="text-align:left;">时间序列正在删除</td></tr><tr><td style="text-align:left;">505</td><td style="text-align:left;">ALIAS_ALREADY_EXIST</td><td style="text-align:left;">路径别名已经存在</td></tr><tr><td style="text-align:left;">506</td><td style="text-align:left;">PATH_ALREADY_EXIST</td><td style="text-align:left;">路径已经存在</td></tr><tr><td style="text-align:left;">507</td><td style="text-align:left;">METADATA_ERROR</td><td style="text-align:left;">处理元数据错误</td></tr><tr><td style="text-align:left;">508</td><td style="text-align:left;">PATH_NOT_EXIST</td><td style="text-align:left;">路径不存在</td></tr><tr><td style="text-align:left;">509</td><td style="text-align:left;">ILLEGAL_PATH</td><td style="text-align:left;">路径不合法</td></tr><tr><td style="text-align:left;">510</td><td style="text-align:left;">CREATE_TEMPLATE_ERROR</td><td style="text-align:left;">创建物理量模板失败</td></tr><tr><td style="text-align:left;">511</td><td style="text-align:left;">DUPLICATED_TEMPLATE</td><td style="text-align:left;">元数据模板重复</td></tr><tr><td style="text-align:left;">512</td><td style="text-align:left;">UNDEFINED_TEMPLATE</td><td style="text-align:left;">元数据模板未定义</td></tr><tr><td style="text-align:left;">513</td><td style="text-align:left;">TEMPLATE_NOT_SET</td><td style="text-align:left;">元数据模板未设置</td></tr><tr><td style="text-align:left;">514</td><td style="text-align:left;">DIFFERENT_TEMPLATE</td><td style="text-align:left;">元数据模板不一致</td></tr><tr><td style="text-align:left;">515</td><td style="text-align:left;">TEMPLATE_IS_IN_USE</td><td style="text-align:left;">元数据模板正在使用</td></tr><tr><td style="text-align:left;">516</td><td style="text-align:left;">TEMPLATE_INCOMPATIBLE</td><td style="text-align:left;">元数据模板不兼容</td></tr><tr><td style="text-align:left;">517</td><td style="text-align:left;">SEGMENT_NOT_FOUND</td><td style="text-align:left;">未找到 Segment</td></tr><tr><td style="text-align:left;">518</td><td style="text-align:left;">PAGE_OUT_OF_SPACE</td><td style="text-align:left;">SchemaFile 中 Page 空间不够</td></tr><tr><td style="text-align:left;">519</td><td style="text-align:left;">RECORD_DUPLICATED</td><td style="text-align:left;">记录重复</td></tr><tr><td style="text-align:left;">520</td><td style="text-align:left;">SEGMENT_OUT_OF_SPACE</td><td style="text-align:left;">SchemaFile 中 segment 空间不够</td></tr><tr><td style="text-align:left;">521</td><td style="text-align:left;">SCHEMA_FILE_NOT_EXISTS</td><td style="text-align:left;">SchemaFile 不存在</td></tr><tr><td style="text-align:left;">522</td><td style="text-align:left;">OVERSIZE_RECORD</td><td style="text-align:left;">记录大小超过元数据文件页面大小</td></tr><tr><td style="text-align:left;">523</td><td style="text-align:left;">SCHEMA_FILE_REDO_LOG_BROKEN</td><td style="text-align:left;">SchemaFile 的 redo 日志损坏</td></tr><tr><td style="text-align:left;">524</td><td style="text-align:left;">TEMPLATE_NOT_ACTIVATED</td><td style="text-align:left;">元数据模板未激活</td></tr><tr><td style="text-align:left;">600</td><td style="text-align:left;">SYSTEM_READ_ONLY</td><td style="text-align:left;">IoTDB 系统只读</td></tr><tr><td style="text-align:left;">601</td><td style="text-align:left;">STORAGE_ENGINE_ERROR</td><td style="text-align:left;">存储引擎相关错误</td></tr><tr><td style="text-align:left;">602</td><td style="text-align:left;">STORAGE_ENGINE_NOT_READY</td><td style="text-align:left;">存储引擎还在恢复中，还不能接受读写操作</td></tr><tr><td style="text-align:left;">603</td><td style="text-align:left;">DATAREGION_PROCESS_ERROR</td><td style="text-align:left;">DataRegion 相关错误</td></tr><tr><td style="text-align:left;">604</td><td style="text-align:left;">TSFILE_PROCESSOR_ERROR</td><td style="text-align:left;">TsFile 处理器相关错误</td></tr><tr><td style="text-align:left;">605</td><td style="text-align:left;">WRITE_PROCESS_ERROR</td><td style="text-align:left;">写入相关错误</td></tr><tr><td style="text-align:left;">606</td><td style="text-align:left;">WRITE_PROCESS_REJECT</td><td style="text-align:left;">写入拒绝错误</td></tr><tr><td style="text-align:left;">607</td><td style="text-align:left;">OUT_OF_TTL</td><td style="text-align:left;">插入时间少于 TTL 时间边界</td></tr><tr><td style="text-align:left;">608</td><td style="text-align:left;">COMPACTION_ERROR</td><td style="text-align:left;">合并错误</td></tr><tr><td style="text-align:left;">609</td><td style="text-align:left;">ALIGNED_TIMESERIES_ERROR</td><td style="text-align:left;">对齐时间序列错误</td></tr><tr><td style="text-align:left;">610</td><td style="text-align:left;">WAL_ERROR</td><td style="text-align:left;">WAL 异常</td></tr><tr><td style="text-align:left;">611</td><td style="text-align:left;">DISK_SPACE_INSUFFICIENT</td><td style="text-align:left;">磁盘空间不足</td></tr><tr><td style="text-align:left;">700</td><td style="text-align:left;">SQL_PARSE_ERROR</td><td style="text-align:left;">SQL 语句分析错误</td></tr><tr><td style="text-align:left;">701</td><td style="text-align:left;">SEMANTIC_ERROR</td><td style="text-align:left;">SQL 语义错误</td></tr><tr><td style="text-align:left;">702</td><td style="text-align:left;">GENERATE_TIME_ZONE_ERROR</td><td style="text-align:left;">生成时区错误</td></tr><tr><td style="text-align:left;">703</td><td style="text-align:left;">SET_TIME_ZONE_ERROR</td><td style="text-align:left;">设置时区错误</td></tr><tr><td style="text-align:left;">704</td><td style="text-align:left;">QUERY_NOT_ALLOWED</td><td style="text-align:left;">查询语句不允许</td></tr><tr><td style="text-align:left;">705</td><td style="text-align:left;">LOGICAL_OPERATOR_ERROR</td><td style="text-align:left;">逻辑符相关错误</td></tr><tr><td style="text-align:left;">706</td><td style="text-align:left;">LOGICAL_OPTIMIZE_ERROR</td><td style="text-align:left;">逻辑优化相关错误</td></tr><tr><td style="text-align:left;">707</td><td style="text-align:left;">UNSUPPORTED_FILL_TYPE</td><td style="text-align:left;">不支持的填充类型</td></tr><tr><td style="text-align:left;">708</td><td style="text-align:left;">QUERY_PROCESS_ERROR</td><td style="text-align:left;">查询处理相关错误</td></tr><tr><td style="text-align:left;">709</td><td style="text-align:left;">MPP_MEMORY_NOT_ENOUGH</td><td style="text-align:left;">MPP 框架中任务执行内存不足</td></tr><tr><td style="text-align:left;">710</td><td style="text-align:left;">CLOSE_OPERATION_ERROR</td><td style="text-align:left;">关闭操作错误</td></tr><tr><td style="text-align:left;">711</td><td style="text-align:left;">TSBLOCK_SERIALIZE_ERROR</td><td style="text-align:left;">TsBlock 序列化错误</td></tr><tr><td style="text-align:left;">712</td><td style="text-align:left;">INTERNAL_REQUEST_TIME_OUT</td><td style="text-align:left;">MPP 操作超时</td></tr><tr><td style="text-align:left;">713</td><td style="text-align:left;">INTERNAL_REQUEST_RETRY_ERROR</td><td style="text-align:left;">内部操作重试失败</td></tr><tr><td style="text-align:left;">800</td><td style="text-align:left;">UNINITIALIZED_AUTH_ERROR</td><td style="text-align:left;">授权模块未初始化</td></tr><tr><td style="text-align:left;">801</td><td style="text-align:left;">WRONG_LOGIN_PASSWORD</td><td style="text-align:left;">用户名或密码错误</td></tr><tr><td style="text-align:left;">802</td><td style="text-align:left;">NOT_LOGIN</td><td style="text-align:left;">没有登录</td></tr><tr><td style="text-align:left;">803</td><td style="text-align:left;">NO_PERMISSION</td><td style="text-align:left;">没有操作权限</td></tr><tr><td style="text-align:left;">804</td><td style="text-align:left;">USER_NOT_EXIST</td><td style="text-align:left;">用户不存在</td></tr><tr><td style="text-align:left;">805</td><td style="text-align:left;">USER_ALREADY_EXIST</td><td style="text-align:left;">用户已存在</td></tr><tr><td style="text-align:left;">806</td><td style="text-align:left;">USER_ALREADY_HAS_ROLE</td><td style="text-align:left;">用户拥有对应角色</td></tr><tr><td style="text-align:left;">807</td><td style="text-align:left;">USER_NOT_HAS_ROLE</td><td style="text-align:left;">用户未拥有对应角色</td></tr><tr><td style="text-align:left;">900</td><td style="text-align:left;">MIGRATE_REGION_ERROR</td><td style="text-align:left;">Region 迁移失败</td></tr><tr><td style="text-align:left;">901</td><td style="text-align:left;">CREATE_REGION_ERROR</td><td style="text-align:left;">创建 region 失败</td></tr><tr><td style="text-align:left;">902</td><td style="text-align:left;">DELETE_REGION_ERROR</td><td style="text-align:left;">删除 region 失败</td></tr><tr><td style="text-align:left;">903</td><td style="text-align:left;">PARTITION_CACHE_UPDATE_ERROR</td><td style="text-align:left;">更新分区缓存失败</td></tr><tr><td style="text-align:left;">904</td><td style="text-align:left;">CONSENSUS_NOT_INITIALIZED</td><td style="text-align:left;">共识层未初始化，不能提供服务</td></tr><tr><td style="text-align:left;">905</td><td style="text-align:left;">REGION_LEADER_CHANGE_ERROR</td><td style="text-align:left;">Region leader 迁移失败</td></tr><tr><td style="text-align:left;">906</td><td style="text-align:left;">NO_AVAILABLE_REGION_GROUP</td><td style="text-align:left;">无法找到可用的 Region 副本组</td></tr><tr><td style="text-align:left;">1000</td><td style="text-align:left;">DATANODE_ALREADY_REGISTERED</td><td style="text-align:left;">DataNode 在集群中已经注册</td></tr><tr><td style="text-align:left;">1001</td><td style="text-align:left;">NO_ENOUGH_DATANODE</td><td style="text-align:left;">DataNode 数量不足，无法移除节点或创建副本</td></tr><tr><td style="text-align:left;">1002</td><td style="text-align:left;">ADD_CONFIGNODE_ERROR</td><td style="text-align:left;">新增 ConfigNode 失败</td></tr><tr><td style="text-align:left;">1003</td><td style="text-align:left;">REMOVE_CONFIGNODE_ERROR</td><td style="text-align:left;">移除 ConfigNode 失败</td></tr><tr><td style="text-align:left;">1004</td><td style="text-align:left;">DATANODE_NOT_EXIST</td><td style="text-align:left;">此 DataNode 不存在</td></tr><tr><td style="text-align:left;">1005</td><td style="text-align:left;">DATANODE_STOP_ERROR</td><td style="text-align:left;">DataNode 关闭失败</td></tr><tr><td style="text-align:left;">1006</td><td style="text-align:left;">REMOVE_DATANODE_ERROR</td><td style="text-align:left;">移除 datanode 失败</td></tr><tr><td style="text-align:left;">1007</td><td style="text-align:left;">REGISTER_DATANODE_WITH_WRONG_ID</td><td style="text-align:left;">注册的 DataNode 中有错误的注册id</td></tr><tr><td style="text-align:left;">1008</td><td style="text-align:left;">CAN_NOT_CONNECT_DATANODE</td><td style="text-align:left;">连接 DataNode 失败</td></tr><tr><td style="text-align:left;">1100</td><td style="text-align:left;">LOAD_FILE_ERROR</td><td style="text-align:left;">加载文件错误</td></tr><tr><td style="text-align:left;">1101</td><td style="text-align:left;">LOAD_PIECE_OF_TSFILE_ERROR</td><td style="text-align:left;">加载 TsFile 片段异常</td></tr><tr><td style="text-align:left;">1102</td><td style="text-align:left;">DESERIALIZE_PIECE_OF_TSFILE_ERROR</td><td style="text-align:left;">反序列化 TsFile 片段异常</td></tr><tr><td style="text-align:left;">1103</td><td style="text-align:left;">SYNC_CONNECTION_ERROR</td><td style="text-align:left;">同步连接错误</td></tr><tr><td style="text-align:left;">1104</td><td style="text-align:left;">SYNC_FILE_REDIRECTION_ERROR</td><td style="text-align:left;">同步文件时重定向异常</td></tr><tr><td style="text-align:left;">1105</td><td style="text-align:left;">SYNC_FILE_ERROR</td><td style="text-align:left;">同步文件异常</td></tr><tr><td style="text-align:left;">1106</td><td style="text-align:left;">CREATE_PIPE_SINK_ERROR</td><td style="text-align:left;">创建 PIPE Sink 失败</td></tr><tr><td style="text-align:left;">1107</td><td style="text-align:left;">PIPE_ERROR</td><td style="text-align:left;">PIPE 异常</td></tr><tr><td style="text-align:left;">1108</td><td style="text-align:left;">PIPESERVER_ERROR</td><td style="text-align:left;">PIPE server 异常</td></tr><tr><td style="text-align:left;">1109</td><td style="text-align:left;">VERIFY_METADATA_ERROR</td><td style="text-align:left;">校验元数据失败</td></tr><tr><td style="text-align:left;">1200</td><td style="text-align:left;">UDF_LOAD_CLASS_ERROR</td><td style="text-align:left;">UDF 加载类异常</td></tr><tr><td style="text-align:left;">1201</td><td style="text-align:left;">UDF_DOWNLOAD_ERROR</td><td style="text-align:left;">无法从 ConfigNode 下载 UDF</td></tr><tr><td style="text-align:left;">1202</td><td style="text-align:left;">CREATE_UDF_ON_DATANODE_ERROR</td><td style="text-align:left;">在 DataNode 创建 UDF 失败</td></tr><tr><td style="text-align:left;">1203</td><td style="text-align:left;">DROP_UDF_ON_DATANODE_ERROR</td><td style="text-align:left;">在 DataNode 卸载 UDF 失败</td></tr><tr><td style="text-align:left;">1300</td><td style="text-align:left;">CREATE_TRIGGER_ERROR</td><td style="text-align:left;">ConfigNode 创建 Trigger 失败</td></tr><tr><td style="text-align:left;">1301</td><td style="text-align:left;">DROP_TRIGGER_ERROR</td><td style="text-align:left;">ConfigNode 删除 Trigger 失败</td></tr><tr><td style="text-align:left;">1302</td><td style="text-align:left;">TRIGGER_FIRE_ERROR</td><td style="text-align:left;">触发器执行错误</td></tr><tr><td style="text-align:left;">1303</td><td style="text-align:left;">TRIGGER_LOAD_CLASS_ERROR</td><td style="text-align:left;">触发器加载类异常</td></tr><tr><td style="text-align:left;">1304</td><td style="text-align:left;">TRIGGER_DOWNLOAD_ERROR</td><td style="text-align:left;">从 ConfigNode 下载触发器异常</td></tr><tr><td style="text-align:left;">1305</td><td style="text-align:left;">CREATE_TRIGGER_INSTANCE_ERROR</td><td style="text-align:left;">创建触发器实例异常</td></tr><tr><td style="text-align:left;">1306</td><td style="text-align:left;">ACTIVE_TRIGGER_INSTANCE_ERROR</td><td style="text-align:left;">激活触发器实例异常</td></tr><tr><td style="text-align:left;">1307</td><td style="text-align:left;">DROP_TRIGGER_INSTANCE_ERROR</td><td style="text-align:left;">删除触发器实例异常</td></tr><tr><td style="text-align:left;">1308</td><td style="text-align:left;">UPDATE_TRIGGER_LOCATION_ERROR</td><td style="text-align:left;">更新有状态的触发器所在 DataNode 异常</td></tr><tr><td style="text-align:left;">1400</td><td style="text-align:left;">NO_SUCH_CQ</td><td style="text-align:left;">CQ 任务不存在</td></tr><tr><td style="text-align:left;">1401</td><td style="text-align:left;">CQ_ALREADY_ACTIVE</td><td style="text-align:left;">CQ 任务已激活</td></tr><tr><td style="text-align:left;">1402</td><td style="text-align:left;">CQ_AlREADY_EXIST</td><td style="text-align:left;">CQ 任务已存在</td></tr><tr><td style="text-align:left;">1403</td><td style="text-align:left;">CQ_UPDATE_LAST_EXEC_TIME_ERROR</td><td style="text-align:left;">CQ 更新上一次执行时间失败</td></tr></tbody></table><blockquote><p>在最新版本中，我们重构了 IoTDB 的异常类。通过将错误信息统一提取到异常类中，并为所有异常添加不同的错误代码，从而当捕获到异常并引发更高级别的异常时，错误代码将保留并传递，以便用户了解详细的错误原因。<br> 除此之外，我们添加了一个基础异常类“ProcessException”，由所有异常扩展。</p></blockquote>`,7)]))}const f=e(s,[["render",n],["__file","Status-Codes.html.vue"]]),x=JSON.parse('{"path":"/zh/UserGuide/V1.0.x/Reference/Status-Codes.html","title":"状态码","lang":"zh-CN","frontmatter":{"description":"状态码 IoTDB 引入了状态码这一概念。例如，因为 IoTDB 需要在写入数据之前首先注册时间序列，一种可能的解决方案是： 利用状态码，我们就可以不必写诸如if (e.getErrorMessage().contains(\\"exist\\"))的代码， 只需要使用e.getStatusType().getCode() == TSStatusCode.TI...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.0.x/Reference/Status-Codes.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.0.x/Reference/Status-Codes.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"状态码"}],["meta",{"property":"og:description","content":"状态码 IoTDB 引入了状态码这一概念。例如，因为 IoTDB 需要在写入数据之前首先注册时间序列，一种可能的解决方案是： 利用状态码，我们就可以不必写诸如if (e.getErrorMessage().contains(\\"exist\\"))的代码， 只需要使用e.getStatusType().getCode() == TSStatusCode.TI..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-07-10T03:11:17.000Z"}],["meta",{"property":"article:modified_time","content":"2023-07-10T03:11:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"状态码\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-10T03:11:17.000Z\\",\\"author\\":[]}"]]},"headers":[],"git":{"createdTime":1688958677000,"updatedTime":1688958677000,"contributors":[{"name":"CritasWang","email":"critas@outlook.com","commits":1}]},"readingTime":{"minutes":4.72,"words":1415},"filePathRelative":"zh/UserGuide/V1.0.x/Reference/Status-Codes.md","localizedDate":"2023年7月10日","autoDesc":true}');export{f as comp,x as data};
