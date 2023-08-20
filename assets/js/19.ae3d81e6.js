(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{380:function(s,t,a){"use strict";a.r(t);var e=a(27),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"在linux服务器上使用linux-service部署java服务或其他服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在linux服务器上使用linux-service部署java服务或其他服务"}},[s._v("#")]),s._v(" 在linux服务器上使用Linux Service部署java服务或其他服务")]),s._v(" "),a("p",[s._v("我们以部署一个名为"),a("code",[s._v("intellect-chart-v1.0.0.jar")]),s._v("的Java Spring Boot项目为例，\n来演示如何创建一个Linux服务。演示的服务器为一台x86_64架构的Centos8系统，\n此处我们使用"),a("code",[s._v("root")]),s._v("用户，实际应尽量避免使用"),a("code",[s._v("root")]),s._v("用户去操作linux系统！")]),s._v(" "),a("h2",{attrs:{id:"安装步骤如下"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装步骤如下"}},[s._v("#")]),s._v(" 安装步骤如下：")]),s._v(" "),a("h3",{attrs:{id:"_1-在用户目录下创建应用程序目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-在用户目录下创建应用程序目录"}},[s._v("#")]),s._v(" 1. 在用户目录下创建应用程序目录")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" intellect-chart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"_2-创建service文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建service文件"}},[s._v("#")]),s._v(" 2. 创建service文件")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /root/intellect-chart\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" intellect-chart.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("intellect-chart.service内容如下：")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Unit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Description")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("java intellect-chart server\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Service"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ExecStart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin/java -jar /root/intellect-chart/intellect-chart-v1.0.0.jar\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Restart")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("always\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("Environment")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("PATH")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/bin:/usr/local/bin\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WorkingDirectory")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/root/intellect-chart\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Install"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("WantedBy")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("multi-user.target\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("此处只介绍本服务用到的基础属性，更多Service文件配置属性请自行Google")]),s._v(" "),a("p",[a("strong",[s._v("[Unit] 定义该服务作为Unit角色时相关的属性")])]),s._v(" "),a("p",[s._v("Description 属性是指服务的描述，使用"),a("code",[s._v("systemctl status intellect-chart")]),s._v("查看服务信息时，该描述将显示在第一行"),a("br"),s._v("\n可以使用 "),a("code",[s._v("Wants、Requires、After、Before")]),s._v("等属性来定义本服务的依赖关系和启动顺序等行为")]),s._v(" "),a("p",[a("strong",[s._v("[Service] 定义服务自身相关的属性")])]),s._v(" "),a("p",[s._v("ExecStart 属性后跟服务的启动命令，例如我们的java服务使用java -jar命令启动"),a("br"),s._v("\nRestart 顾名思义，服务重启相关配置"),a("br"),s._v("\nEnvironment 服务使用到的环境变量配置"),a("br"),s._v("\nWorkingDirectory 服务的工作目录")]),s._v(" "),a("p",[a("strong",[s._v("[Install] 定义服务在设置开机自启时相关的属性")])]),s._v(" "),a("p",[s._v("WantedBy=multi-user.target 本服务设置开机自启动时，将在/etc/systemd/multi-user.target.wants目录下创建本服务的软链接。")]),s._v(" "),a("h3",{attrs:{id:"_3-建立软连接到-etc-systemd-system"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-建立软连接到-etc-systemd-system"}},[s._v("#")]),s._v(" 3. 建立软连接到 "),a("code",[s._v("/etc/systemd/system")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /root/intellect-chart/intellect-chart.service /etc/systemd/system/intellect-chart.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_4-重载系统服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-重载系统服务"}},[s._v("#")]),s._v(" 4. 重载系统服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl daemon-reload\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_5-启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-启动服务"}},[s._v("#")]),s._v(" 5. 启动服务")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("systemctl start intellect-chart.service\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("至此Linux服务安装完成，后续可使用"),a("code",[s._v("systemctl")]),s._v("或者"),a("code",[s._v("service")]),s._v("命令来启动、停止、重启该服务。")])])}),[],!1,null,null,null);t.default=r.exports}}]);