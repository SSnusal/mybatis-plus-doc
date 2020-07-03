(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{275:function(t,a,s){"use strict";s.r(a);var n=s(16),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",{attrs:{align:"center"}},[s("img",{attrs:{src:"https://images.gitee.com/uploads/images/2019/0626/231046_f44892b9_709883.png",border:"0"}})]),t._v(" "),s("p",{attrs:{align:"center"}},[s("strong",[t._v("一个基于springboot的快速集成多数据源的启动器")])]),t._v(" "),s("p",{attrs:{align:"center"}},[s("a",{attrs:{href:"https://www.travis-ci.org/baomidou/dynamic-datasource-spring-boot-starter",target:"_blank"}},[s("img",{attrs:{src:"https://www.travis-ci.org/baomidou/dynamic-datasource-spring-boot-starter.svg?branch=master"}}),t._v(" "),s("a",{attrs:{href:"http://mvnrepository.com/artifact/com.baomidou/dynamic-datasource-spring-boot-starter",target:"_blank"}},[s("img",{attrs:{src:"https://img.shields.io/maven-central/v/com.baomidou/dynamic-datasource-spring-boot-starter.svg"}})]),t._v(" "),s("a",{attrs:{href:"http://www.apache.org/licenses/LICENSE-2.0.html",target:"_blank"}},[s("img",{attrs:{src:"http://img.shields.io/:license-apache-brightgreen.svg"}})]),t._v(" "),s("a",[s("img",{attrs:{src:"https://img.shields.io/badge/JDK-1.7+-green.svg"}})]),t._v(" "),s("a",[s("img",{attrs:{src:"https://img.shields.io/badge/springBoot-1.4+_1.5+_2.0+-green.svg"}})]),t._v(" "),s("a",{attrs:{target:"_blank",href:"//shang.qq.com/wpa/qunwpa?idkey=ded31006508b57d2d732c81266dd2c26e33283f84464e2c294309d90b9674992"}},[s("img",{attrs:{border:"0",src:"//pub.idqqimg.com/wpa/images/group.png",alt:"dynamic-sring-boot-starter",title:"dynamic-sring-boot-starter"}})])])]),t._v(" "),s("h1",{attrs:{id:"简介"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[t._v("#")]),t._v(" 简介")]),t._v(" "),s("p",[t._v("dynamic-datasource-spring-boot-starter 是一个基于springboot的快速集成多数据源的启动器。")]),t._v(" "),s("p",[t._v("其支持 "),s("strong",[t._v("Jdk 1.7+,    SpringBoot 1.4.x  1.5.x   2.0.x")]),t._v("。")]),t._v(" "),s("p",[s("strong",[t._v("示例项目")]),t._v(" 可参考项目下的samples目录。")]),t._v(" "),s("h1",{attrs:{id:"特性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#特性","aria-hidden":"true"}},[t._v("#")]),t._v(" 特性")]),t._v(" "),s("ol",[s("li",[t._v("数据源分组，适用于多种场景 纯粹多库  读写分离  一主多从  混合模式。")]),t._v(" "),s("li",[t._v("内置敏感参数加密和启动初始化表结构schema数据库database。")]),t._v(" "),s("li",[t._v("提供对Druid，Mybatis-Plus，P6sy，Jndi的快速集成。")]),t._v(" "),s("li",[t._v("简化Druid和HikariCp配置，提供全局参数配置。")]),t._v(" "),s("li",[t._v("提供自定义数据源来源接口(默认使用yml或properties配置)。")]),t._v(" "),s("li",[t._v("提供项目启动后增减数据源方案。")]),t._v(" "),s("li",[t._v("提供Mybatis环境下的  "),s("strong",[t._v("纯读写分离")]),t._v(" 方案。")]),t._v(" "),s("li",[t._v("使用spel动态参数解析数据源，如从session，header或参数中获取数据源。（多租户架构神器）")]),t._v(" "),s("li",[t._v("提供多层数据源嵌套切换。（ServiceA >>>  ServiceB >>> ServiceC，每个Service都是不同的数据源）")]),t._v(" "),s("li",[t._v("提供 "),s("strong",[t._v("不使用注解")]),t._v("  而   "),s("strong",[t._v("使用 正则 或 spel")]),t._v("    来切换数据源方案（实验性功能）。")]),t._v(" "),s("li",[s("strong",[t._v("基于seata的分布式事务支持。")])])]),t._v(" "),s("h1",{attrs:{id:"约定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#约定","aria-hidden":"true"}},[t._v("#")]),t._v(" 约定")]),t._v(" "),s("ol",[s("li",[t._v("本框架只做 "),s("strong",[t._v("切换数据源")]),t._v(" 这件核心的事情，并"),s("strong",[t._v("不限制你的具体操作")]),t._v("，切换了数据源可以做任何CRUD。")]),t._v(" "),s("li",[t._v("配置文件所有以下划线 "),s("code",[t._v("_")]),t._v(" 分割的数据源 "),s("strong",[t._v("首部")]),t._v(" 即为组的名称，相同组名称的数据源会放在一个组下。")]),t._v(" "),s("li",[t._v("切换数据源可以是组名，也可以是具体数据源名称。组名则切换时采用负载均衡算法切换。")]),t._v(" "),s("li",[t._v("默认的数据源名称为  "),s("strong",[t._v("master")]),t._v(" ，你可以通过 "),s("code",[t._v("spring.datasource.dynamic.primary")]),t._v(" 修改。")]),t._v(" "),s("li",[t._v("方法上的注解优先于类上注解。")])]),t._v(" "),s("h1",{attrs:{id:"使用方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方法","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),s("ol",[s("li",[t._v("引入dynamic-datasource-spring-boot-starter。")])]),t._v(" "),s("div",{staticClass:"language-xml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-xml"}},[s("code",[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.baomidou"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("dynamic-datasource-spring-boot-starter"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("${version}"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token tag"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("配置数据源。")])]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("dynamic")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("primary")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" master "),s("span",{attrs:{class:"token comment"}},[t._v("#设置默认的数据源或者数据源组,默认值即为master")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("strict")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("false ")]),s("span",{attrs:{class:"token comment"}},[t._v("#设置严格模式,默认false不启动. 启动后在未匹配到指定数据源时候回抛出异常,不启动会使用默认数据源.")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("master")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//xx.xx.xx.xx"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3306/dynamic\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("123456")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("driver-class-name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.jdbc.Driver\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("slave_1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" jdbc"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("mysql"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//xx.xx.xx.xx"),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("3307/dynamic\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" root\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token number"}},[t._v("123456")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("driver-class-name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.jdbc.Driver\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("slave_2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("url")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ENC(xxxxx) "),s("span",{attrs:{class:"token comment"}},[t._v("# 内置加密,使用请查看详细文档")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ENC(xxxxx)\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ENC(xxxxx)\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("driver-class-name")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" com.mysql.jdbc.Driver\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("schema")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" db/schema.sql "),s("span",{attrs:{class:"token comment"}},[t._v("# 配置则生效,自动初始化表结构")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("data")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" db/data.sql "),s("span",{attrs:{class:"token comment"}},[t._v("# 配置则生效,自动初始化数据")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("continue-on-error")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{attrs:{class:"token boolean important"}},[t._v("true ")]),s("span",{attrs:{class:"token comment"}},[t._v("# 默认true,初始化失败是否继续")]),t._v("\n          "),s("span",{attrs:{class:"token key atrule"}},[t._v("separator")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(' ";" '),s("span",{attrs:{class:"token comment"}},[t._v("# sql默认分号分隔符")]),t._v("\n          \n       "),s("span",{attrs:{class:"token comment"}},[t._v("#......省略")]),t._v("\n       "),s("span",{attrs:{class:"token comment"}},[t._v("#以上会配置一个默认库master，一个组slave下有两个子库slave_1,slave_2")]),t._v("\n")])])]),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("# 多主多从                      纯粹多库（记得设置primary）                   混合配置")]),t._v("\n"),s("span",{attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                               "),s("span",{attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                               "),s("span",{attrs:{class:"token key atrule"}},[t._v("spring")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),s("span",{attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),s("span",{attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{attrs:{class:"token key atrule"}},[t._v("dynamic")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),s("span",{attrs:{class:"token key atrule"}},[t._v("dynamic")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),s("span",{attrs:{class:"token key atrule"}},[t._v("dynamic")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n      "),s("span",{attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),s("span",{attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),s("span",{attrs:{class:"token key atrule"}},[t._v("datasource")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("master_1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                             "),s("span",{attrs:{class:"token key atrule"}},[t._v("mysql")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                                "),s("span",{attrs:{class:"token key atrule"}},[t._v("master")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("master_2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                             "),s("span",{attrs:{class:"token key atrule"}},[t._v("oracle")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                               "),s("span",{attrs:{class:"token key atrule"}},[t._v("slave_1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("slave_1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),s("span",{attrs:{class:"token key atrule"}},[t._v("sqlserver")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                            "),s("span",{attrs:{class:"token key atrule"}},[t._v("slave_2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("slave_2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),s("span",{attrs:{class:"token key atrule"}},[t._v("postgresql")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                           "),s("span",{attrs:{class:"token key atrule"}},[t._v("oracle_1")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{attrs:{class:"token key atrule"}},[t._v("slave_3")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                              "),s("span",{attrs:{class:"token key atrule"}},[t._v("h2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("                                   "),s("span",{attrs:{class:"token key atrule"}},[t._v("oracle_2")]),s("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("使用  "),s("strong",[t._v("@DS")]),t._v("  切换数据源。")])]),t._v(" "),s("p",[s("strong",[t._v("@DS")]),t._v(" 可以注解在方法上和类上，"),s("strong",[t._v("同时存在方法注解优先于类上注解")]),t._v("。")]),t._v(" "),s("p",[t._v("强烈建议只注解在service实现上。")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"center"}},[t._v("注解")]),t._v(" "),s("th",{staticStyle:{"text-align":"center"}},[t._v("结果")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v("没有@DS")]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("默认数据源")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"center"}},[t._v('@DS("dsName")')]),t._v(" "),s("td",{staticStyle:{"text-align":"center"}},[t._v("dsName可以为组名也可以为具体某个库的名称")])])])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Service")]),t._v("\n"),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@DS")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"slave"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("UserServiceImpl")]),t._v(" "),s("span",{attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{attrs:{class:"token class-name"}},[t._v("UserService")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("private")]),t._v(" JdbcTemplate jdbcTemplate"),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Map"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("selectAll")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("  jdbcTemplate"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("queryForList")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"select * from user"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n  "),s("span",{attrs:{class:"token annotation punctuation"}},[t._v("@DS")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"slave_1"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{attrs:{class:"token keyword"}},[t._v("public")]),t._v(" List"),s("span",{attrs:{class:"token operator"}},[t._v("<")]),t._v("Map"),s("span",{attrs:{class:"token generics function"}},[s("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("String"),s("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Object"),s("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("selectByCondition")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v("  jdbcTemplate"),s("span",{attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{attrs:{class:"token function"}},[t._v("queryForList")]),s("span",{attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{attrs:{class:"token string"}},[t._v('"select * from user where age >10"')]),s("span",{attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("hr"),t._v(" "),s("h4",{attrs:{id:"赶紧集成体验一下吧！-如果需要更多功能请点击下面链接查看详细文档！"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#赶紧集成体验一下吧！-如果需要更多功能请点击下面链接查看详细文档！","aria-hidden":"true"}},[t._v("#")]),t._v(" 赶紧集成体验一下吧！ 如果需要更多功能请点击下面链接查看详细文档！")]),t._v(" "),s("hr"),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/baomidou/dynamic-datasource-spring-boot-starter/wiki",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式事务，加密,Druid集成，MybatisPlus集成，动态增减数据源，自定义切换规则,纯读写分离插件等等更多更细致的文档在这里"),s("OutboundLink")],1)]),t._v(" "),s("h3",{attrs:{id:"支持一下"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#支持一下","aria-hidden":"true"}},[t._v("#")]),t._v(" 支持一下")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://images.gitee.com/uploads/images/2019/0921/225754_ef8c21e8_709883.png",alt:"uSA83t.png"}}),t._v(" "),s("img",{attrs:{src:"https://images.gitee.com/uploads/images/2019/0921/230525_be693c65_709883.png",alt:"uSVpFJ.png"}})])])},[],!1,null,null,null);e.options.__file="dynamic-datasource.md";a.default=e.exports}}]);