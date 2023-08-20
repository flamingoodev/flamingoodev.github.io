(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{379:function(s,a,e){"use strict";e.r(a);var t=e(27),n=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"centos8开发环境"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#centos8开发环境"}},[s._v("#")]),s._v(" centos8开发环境")]),s._v(" "),e("h2",{attrs:{id:"java8"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#java8"}},[s._v("#")]),s._v(" JAVA8")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# JRE")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" java-1.8.0-openjdk\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# JDK")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" java-1.8.0-openjdk-devel\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Alternatives")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" alternatives --config java\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# JAVA_HOME")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/etc/alternatives/java\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# For all user")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v(" -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"echo export JAVA_HOME=/etc/alternatives/java >> /etc/environment"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br")])]),e("h2",{attrs:{id:"postgresql"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#postgresql"}},[s._v("#")]),s._v(" PostgreSQL")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("dnf module list postgresql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @postgresql:10\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("可能还需要安装 contrib 包，它们给 PostgreSQL 数据库提供一些额外的特性")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dnf "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postgresql-contrib\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("安装完成后，使用以下命令初始化"),e("br"),s._v("\n输出：Initializing database ... OK")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" postgresql-setup initdb\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("启动 PostgreSQL 服务，并且启用开机启动 PostgreSQL 服务。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" --now postgresql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用psql工具连接 PostgreSQL 数据库服务器并且打印它的版本号，以验证安装过程。")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" -u postgres psql -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"SELECT version();"')]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("为了允许远程访问你的 PostgreSQL 服务器，修改配置文件")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vim")]),s._v(" /var/lib/pgsql/data/postgresql.conf\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#------------------------------------------------------------------------------")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CONNECTIONS AND AUTHENTICATION")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#------------------------------------------------------------------------------")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# - Connection Settings -")]),s._v("\n\nlisten_addresses "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'*'")]),s._v("     "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# what IP address(es) to listen on;")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("p",[s._v("保存文件，并且使用下面的命令重启 PostgreSQL 服务")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart postgresql\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("使用ss工具来验证这个修改")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("ss -nlt "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5432")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[s._v("LISTEN   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:5432    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0:*\nLISTEN   "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("128")]),s._v("    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":5432      "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("::"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(":*\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("编辑pg_hba.conf文件，配置服务器接受远程连接")]),s._v(" "),e("div",{staticClass:"language-shell line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# TYPE  DATABASE        USER            ADDRESS                 METHOD")]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("    all             postgres            "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0/0                md5\n\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("持续补充中...")])])}),[],!1,null,null,null);a.default=n.exports}}]);