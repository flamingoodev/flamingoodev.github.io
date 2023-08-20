(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{374:function(s,t,a){"use strict";a.r(t);var n=a(27),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"postgresql性能瓶颈排查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postgresql性能瓶颈排查"}},[s._v("#")]),s._v(" Postgresql性能瓶颈排查")]),s._v(" "),a("h2",{attrs:{id:"慢查询管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#慢查询管理"}},[s._v("#")]),s._v(" 慢查询管理")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看当前长时间执行，一直不结束的SQL")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" datname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" usename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" client_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" application_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" backend_start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" xact_start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" xact_stay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" query_start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" query_stay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" chr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" query "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("datname "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" datname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("usename "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" usename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("client_addr client_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("application_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" application_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backend_start "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" backend_start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xact_start "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" xact_start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" extract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("epoch "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("xact_start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" xact_stay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query_start "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" query_start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" extract"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("epoch "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query_start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" query_stay "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("query "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" query "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pg_stat_activity "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" pgsa "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'idle'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'idle in transaction'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" pgsa"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("state "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'idle in transaction (aborted)'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" idleconnections "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" query_stay "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询扫描最多的表")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pg_stat_user_tables "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" n_live_tup "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" seq_scan "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" seq_tup_read "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("limit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询当前正在运行的访问到上述表的慢查询")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pg_stat_activity "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" query ilike "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%pv_variable_107_value%'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" query_start "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("interval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'10 seconds'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 上面的方法查出来的慢SQL，首先需要做的可能是Cancel或Kill掉他们，使业务先恢复")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" pg_cancel_backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pg_stat_activity "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v("  query "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%<query text>%'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" pg_backend_pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" pg_terminate_backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pg_stat_activity "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v("  query "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("like")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'%<query text>%'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" pid "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!=")]),s._v(" pg_backend_pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"连接管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#连接管理"}},[s._v("#")]),s._v(" 连接管理")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查看当前数据库连接信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("client_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("application_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("backend_start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("state"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" xact_start "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" 事务时间"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" query_start "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" 查询时间"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("query  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pg_stat_activity  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" datname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'数据库名称'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("order")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("by")]),s._v(" client_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("application_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 结束指定数据库连接（指定pid）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" pg_terminate_backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 杀死所有数据库连接")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" pg_terminate_backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pg_stat_activity"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" pg_stat_activity\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" datname"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'数据库名称'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" pid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v("pg_backend_pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("--  通过top cpu飙高的进程定位pg操作")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" procpid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" lap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" current_query  \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" backendid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" pg_stat_get_backend_pid "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backendid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" procpid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\npg_stat_get_backend_activity_start "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backendid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("START")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("pg_stat_get_backend_activity "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("backendid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" current_query  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\npg_stat_get_backend_idset "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" backendid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" S"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" S "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" current_query "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<IDLE>'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" procpid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("进程ID  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" lap "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h2",{attrs:{id:"磁盘管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#磁盘管理"}},[s._v("#")]),s._v(" 磁盘管理")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 数据库大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" pg_size_pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pg_database_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'数据名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询当前database，每张表占用磁盘空间并降序排列")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\ntable_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'.'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" table_full_name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\npg_size_pretty"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("pg_total_relation_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" table_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\".\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("AS")]),s._v(" size\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" information_schema"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("\npg_total_relation_size"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" table_schema "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\".\"'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" table_name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("||")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'\"'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 表磁盘位置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v("  pg_relation_filepath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'oc0_chart_type'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"数据库锁管理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据库锁管理"}},[s._v("#")]),s._v(" 数据库锁管理")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查询数据表是否被锁")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("locktype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("database")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("pid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("mode")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("relation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("relname\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pg_locks a "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" pg_class b "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("relation "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("oid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" upper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("relname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'表名'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 再根据上面查出来的pid去表pg_stat_activity查询一下该锁对应的SQL语句：")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" usename，current_query ，query_start，procpid，client_addr "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" pg_stat_activity "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" procpid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17509")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 结束该进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" pg_cancel_backend"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("17509")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"设置自增长从当前最大值开始"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置自增长从当前最大值开始"}},[s._v("#")]),s._v(" 设置自增长从当前最大值开始")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" setval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tablename_id_seq'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" tablename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"重置自增序列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重置自增序列"}},[s._v("#")]),s._v(" 重置自增序列")]),s._v(" "),a("div",{staticClass:"language-sql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重置t_user_id_seq 从1开始")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ALTER")]),s._v(" SEQUENCE t_user_id_seq restart "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("with")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);