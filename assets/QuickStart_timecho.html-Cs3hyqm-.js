import{_ as u,c as r,d as t,e as n,a as o,w as i,r as d,o as s}from"./app-BHE9oQwv.js";const m={},p={start:"5"};function a(D,l){const e=d("RouteLink");return s(),r("div",null,[l[60]||(l[60]=t("h1",{id:"快速上手",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#快速上手"},[t("span",null,"快速上手")])],-1)),l[61]||(l[61]=t("p",null,"本篇文档将帮助您了解快速入门 IoTDB 的方法。",-1)),l[62]||(l[62]=t("h2",{id:"如何安装部署",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#如何安装部署"},[t("span",null,"如何安装部署？")])],-1)),l[63]||(l[63]=t("p",null,"本篇文档将帮助您快速安装部署 IoTDB，您可以通过以下文档的链接快速定位到所需要查看的内容：",-1)),t("ol",null,[t("li",null,[t("p",null,[l[1]||(l[1]=n("准备所需机器资源：IoTDB 的部署和运行需要考虑多个方面的机器资源配置。具体资源配置可查看 ")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Database-Resources.html"},{default:i(()=>l[0]||(l[0]=[n("资源规划")])),_:1})])]),t("li",null,[t("p",null,[l[3]||(l[3]=n("完成系统配置准备：IoTDB 的系统配置涉及多个方面，关键的系统配置介绍可查看 ")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Environment-Requirements.html"},{default:i(()=>l[2]||(l[2]=[n("系统配置")])),_:1})])]),t("li",null,[t("p",null,[l[5]||(l[5]=n("获取安装包：您可以联系天谋商务获取 IoTDB 安装包，以确保下载的是最新且稳定的版本。具体安装包结构可查看：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/IoTDB-Package_timecho.html"},{default:i(()=>l[4]||(l[4]=[n("安装包获取")])),_:1})])]),t("li",null,[l[12]||(l[12]=t("p",null,"安装数据库并激活：您可以根据实际部署架构选择以下教程进行安装部署：",-1)),t("ul",null,[t("li",null,[t("p",null,[l[7]||(l[7]=n("单机版：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Stand-Alone-Deployment_timecho.html"},{default:i(()=>l[6]||(l[6]=[n("单机版")])),_:1})])]),t("li",null,[t("p",null,[l[9]||(l[9]=n("集群版：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Cluster-Deployment_timecho.html"},{default:i(()=>l[8]||(l[8]=[n("集群版")])),_:1})])]),t("li",null,[t("p",null,[l[11]||(l[11]=n("双活版：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Dual-Active-Deployment_timecho.html"},{default:i(()=>l[10]||(l[10]=[n("双活版")])),_:1})])])])])]),t("blockquote",null,[t("p",null,[l[14]||(l[14]=n("❗️注意：目前我们仍然推荐直接在物理机/虚拟机上安装部署，如需要 docker 部署，可参考：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Docker-Deployment_timecho.html"},{default:i(()=>l[13]||(l[13]=[n("Docker 部署")])),_:1})])]),t("ol",p,[t("li",null,[l[19]||(l[19]=t("p",null,"安装数据库配套工具：企业版数据库提供监控面板、可视化控制台等配套工具，建议在部署企业版时安装，可以帮助您更加便捷的使用 IoTDB：",-1)),t("ul",null,[t("li",null,[t("p",null,[l[16]||(l[16]=n("监控面板：提供了上百个数据库监控指标，用来对 IoTDB 及其所在操作系统进行细致监控，从而进行系统优化、性能优化、发现瓶颈等，安装步骤可查看 ")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/Monitoring-panel-deployment.html"},{default:i(()=>l[15]||(l[15]=[n("监控面板部署")])),_:1})])]),t("li",null,[t("p",null,[l[18]||(l[18]=n("可视化控制台：是 IoTDB 的可视化界面，支持通过界面交互的形式提供元数据管理、数据查询、数据可视化等功能的操作，帮助用户简单、高效的使用数据库，安装步骤可查看 ")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Deployment-and-Maintenance/workbench-deployment.html"},{default:i(()=>l[17]||(l[17]=[n("可视化控制台部署")])),_:1})])])])])]),l[64]||(l[64]=t("h2",{id:"如何使用",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#如何使用"},[t("span",null,"如何使用？")])],-1)),t("ol",null,[t("li",null,[l[26]||(l[26]=t("p",null,"数据库建模设计：数据库建模是创建数据库系统的重要步骤，它涉及到设计数据的结构和关系，以确保数据的组织方式能够满足特定应用的需求，下面的文档将会帮助您快速了解 IoTDB 的建模设计：",-1)),t("ul",null,[t("li",null,[t("p",null,[l[21]||(l[21]=n("时序概念介绍：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Basic-Concept/Navigating_Time_Series_Data.html"},{default:i(()=>l[20]||(l[20]=[n("走进时序数据")])),_:1})])]),t("li",null,[t("p",null,[l[23]||(l[23]=n("建模设计介绍：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Basic-Concept/Data-Model-and-Terminology.html"},{default:i(()=>l[22]||(l[22]=[n("数据模型介绍")])),_:1})])]),t("li",null,[t("p",null,[l[25]||(l[25]=n("SQL 语法介绍：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/User-Manual/Operate-Metadata_timecho.html"},{default:i(()=>l[24]||(l[24]=[n("SQL 语法介绍")])),_:1})])])])]),t("li",null,[t("p",null,[l[28]||(l[28]=n("数据写入：在数据写入方面，IoTDB 提供了多种方式来插入实时数据，基本的数据写入操作请查看 ")),o(e,{to:"/zh/UserGuide/V1.3.0-2/User-Manual/Write-Delete-Data.html"},{default:i(()=>l[27]||(l[27]=[n("数据写入")])),_:1})])]),t("li",null,[t("p",null,[l[30]||(l[30]=n("数据查询：IoTDB 提供了丰富的数据查询功能，数据查询的基本介绍请查看 ")),o(e,{to:"/zh/UserGuide/V1.3.0-2/User-Manual/Query-Data.html"},{default:i(()=>l[29]||(l[29]=[n("数据查询")])),_:1})])]),t("li",null,[l[41]||(l[41]=t("p",null,"其他进阶功能：除了数据库常见的写入、查询等功能外，IoTDB 还支持“数据同步、流处理框架、安全控制、权限管理、AI 分析”等功能，具体使用方法可参见具体文档：",-1)),t("ul",null,[t("li",null,[t("p",null,[l[32]||(l[32]=n("数据同步：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/User-Manual/Data-Sync_timecho.html"},{default:i(()=>l[31]||(l[31]=[n("数据同步")])),_:1})])]),t("li",null,[t("p",null,[l[34]||(l[34]=n("流处理框架：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/User-Manual/Streaming_timecho.html"},{default:i(()=>l[33]||(l[33]=[n("流处理框架")])),_:1})])]),t("li",null,[t("p",null,[l[36]||(l[36]=n("安全控制：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/User-Manual/Security-Management_timecho.html"},{default:i(()=>l[35]||(l[35]=[n("安全控制")])),_:1})])]),t("li",null,[t("p",null,[l[38]||(l[38]=n("权限管理：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/User-Manual/Authority-Management.html"},{default:i(()=>l[37]||(l[37]=[n("权限管理")])),_:1})])]),t("li",null,[t("p",null,[l[40]||(l[40]=n("AI 分析：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/User-Manual/AINode_timecho.html"},{default:i(()=>l[39]||(l[39]=[n("AI 能力")])),_:1})])])])]),t("li",null,[t("p",null,[l[46]||(l[46]=n("应用编程接口： IoTDB 提供了多种应用编程接口（API），以便于开发者在应用程序中与 IoTDB 进行交互，目前支持")),o(e,{to:"/zh/UserGuide/V1.3.0-2/API/Programming-Java-Native-API.html"},{default:i(()=>l[42]||(l[42]=[n(" Java 原生接口")])),_:1}),l[47]||(l[47]=n("、")),o(e,{to:"/zh/UserGuide/V1.3.0-2/API/Programming-Python-Native-API.html"},{default:i(()=>l[43]||(l[43]=[n("Python 原生接口")])),_:1}),l[48]||(l[48]=n("、")),o(e,{to:"/zh/UserGuide/V1.3.0-2/API/Programming-Cpp-Native-API.html"},{default:i(()=>l[44]||(l[44]=[n("C++原生接口")])),_:1}),l[49]||(l[49]=n("、")),o(e,{to:"/zh/UserGuide/V1.3.0-2/API/Programming-Go-Native-API.html"},{default:i(()=>l[45]||(l[45]=[n("Go 原生接口")])),_:1}),l[50]||(l[50]=n("等，更多编程接口可参见官网【应用编程接口】其他章节"))])])]),l[65]||(l[65]=t("h2",{id:"还有哪些便捷的周边工具",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#还有哪些便捷的周边工具"},[t("span",null,"还有哪些便捷的周边工具？")])],-1)),l[66]||(l[66]=t("p",null,"IoTDB 除了自身拥有丰富的功能外，其周边的工具体系包含的种类十分齐全。本篇文档将帮助您快速使用周边工具体系：",-1)),t("ul",null,[t("li",null,[t("p",null,[l[52]||(l[52]=n("测试工具：IoT-benchmark 是一个基于 Java 和大数据环境开发的时序数据库基准测试工具，由清华大学软件学院研发并开源。它支持多种写入和查询方式，能够存储测试信息和结果供进一步查询或分析，并支持与 Tableau 集成以可视化测试结果。具体使用介绍请查看：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Tools-System/Benchmark.html"},{default:i(()=>l[51]||(l[51]=[n("测试工具")])),_:1})])]),t("li",null,[t("p",null,[l[54]||(l[54]=n("数据导入导出脚本：用于实现 IoTDB 内部数据与外部文件的交互，适用于单个文件或目录文件批量操作，具体使用介绍请查看：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Tools-System/Data-Import-Export-Tool.html"},{default:i(()=>l[53]||(l[53]=[n("数据导入导出脚本")])),_:1})])]),t("li",null,[t("p",null,[l[56]||(l[56]=n("TsFile 导入导出脚本：针对于不同场景，IoTDB 为用户提供多种批量导入数据的操作方式，具体使用介绍请查看：")),o(e,{to:"/zh/UserGuide/V1.3.0-2/Tools-System/TsFile-Import-Export-Tool.html"},{default:i(()=>l[55]||(l[55]=[n("TsFile 导入导出脚本")])),_:1})])])]),l[67]||(l[67]=t("h2",{id:"使用过程中遇到问题",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#使用过程中遇到问题"},[t("span",null,"使用过程中遇到问题？")])],-1)),t("p",null,[l[58]||(l[58]=n("如果您在安装或使用过程中遇到困难，可以移步至 ")),o(e,{to:"/zh/UserGuide/V1.3.0-2/FAQ/Frequently-asked-questions.html"},{default:i(()=>l[57]||(l[57]=[n("常见问题")])),_:1}),l[59]||(l[59]=n(" 中进行查看"))])])}const f=u(m,[["render",a],["__file","QuickStart_timecho.html.vue"]]),I=JSON.parse('{"path":"/zh/UserGuide/V1.3.0-2/QuickStart/QuickStart_timecho.html","title":"快速上手","lang":"zh-CN","frontmatter":{"description":"快速上手 本篇文档将帮助您了解快速入门 IoTDB 的方法。 如何安装部署？ 本篇文档将帮助您快速安装部署 IoTDB，您可以通过以下文档的链接快速定位到所需要查看的内容： 准备所需机器资源：IoTDB 的部署和运行需要考虑多个方面的机器资源配置。具体资源配置可查看 完成系统配置准备：IoTDB 的系统配置涉及多个方面，关键的系统配置介绍可查看 获取安...","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://iotdb.apache.org/UserGuide/V1.3.0-2/QuickStart/QuickStart_timecho.html"}],["meta",{"property":"og:url","content":"https://iotdb.apache.org/zh/UserGuide/V1.3.0-2/QuickStart/QuickStart_timecho.html"}],["meta",{"property":"og:site_name","content":"IoTDB Website"}],["meta",{"property":"og:title","content":"快速上手"}],["meta",{"property":"og:description","content":"快速上手 本篇文档将帮助您了解快速入门 IoTDB 的方法。 如何安装部署？ 本篇文档将帮助您快速安装部署 IoTDB，您可以通过以下文档的链接快速定位到所需要查看的内容： 准备所需机器资源：IoTDB 的部署和运行需要考虑多个方面的机器资源配置。具体资源配置可查看 完成系统配置准备：IoTDB 的系统配置涉及多个方面，关键的系统配置介绍可查看 获取安..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-11-11T11:01:16.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-11T11:01:16.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"快速上手\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-11T11:01:16.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"如何安装部署？","slug":"如何安装部署","link":"#如何安装部署","children":[]},{"level":2,"title":"如何使用？","slug":"如何使用","link":"#如何使用","children":[]},{"level":2,"title":"还有哪些便捷的周边工具？","slug":"还有哪些便捷的周边工具","link":"#还有哪些便捷的周边工具","children":[]},{"level":2,"title":"使用过程中遇到问题？","slug":"使用过程中遇到问题","link":"#使用过程中遇到问题","children":[]}],"git":{"createdTime":1727078269000,"updatedTime":1731322876000,"contributors":[{"name":"W1y1r","email":"150988475+W1y1r@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":4.64,"words":1393},"filePathRelative":"zh/UserGuide/V1.3.0-2/QuickStart/QuickStart_timecho.md","localizedDate":"2024年9月23日","autoDesc":true}');export{f as comp,I as data};
