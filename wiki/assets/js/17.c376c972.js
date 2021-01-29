(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{415:function(s,t,a){"use strict";a.r(t);var n=a(17),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git"}},[s._v("#")]),s._v(" git")]),s._v(" "),a("h2",{attrs:{id:"_1、常用命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、常用命令"}},[s._v("#")]),s._v(" 1、常用命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git clone                                               // 将存储库克隆到新目录中\ngit init                                                // 初始化一个空的git本地仓库\ngit config                                              // 获取并设置存储库或全局选项\ngit status                                              // 显示工作目录和暂存区的状\ngit diff                                                // 显示提交和工作树等之间的更改\ngit branch dev                                          // 创建一个dev分支\ngit branch dev -d                                       // 删除dev分支\ngit checkout dev                                        // 切换到dev分支\ngit checkout dev2 -b                                    // 创建并切换到dev2分支\ngit remote                                              // 查看远程库的信息\ngit remote -v                                           // 查看远程库的详细信息\ngit log                                                 // 显示git历史日志\ngit push origin master                                  // 推送到master分支\ngit push origin dev                                     // 推送到dev分支\ngit commit                                              // 将更改记录提交到存储库\ngit pull origin master                                  // 拉取主分支最新代码 到 当前分支\ngit push -u origin master                               // 推送上git\nenv                                                     // 查看环境变量\nenv |grep proxy                                         // 查看代理\ngit config -l                                           // 查看配置列表\ngit config --global https.proxy http://127.0.0.1:1080   // 设置http代理\ngit config --global https.proxy https://127.0.0.1:1080  // 设置https代理\ngit config --global --unset http.proxy                  // 取消http代理\ngit config --global --unset https.proxy                 // 取消https代理\nexport no_proxy=github.com                              // 取消对github.com代理\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br")])]),a("h2",{attrs:{id:"_2、git-全局设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、git-全局设置"}},[s._v("#")]),s._v(" 2、Git 全局设置")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('git config --global user.name  "luyuwen"\ngit config --global user.email "1369530215@qq.com"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"_3、创建一个新仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、创建一个新仓库"}},[s._v("#")]),s._v(" 3、创建一个新仓库")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('git clone https://github.com/FizzSy/documents.git\ncd documents\ntouch README.md\ngit add README.md\ngit commit -m "add README"\ngit push -u origin master\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_4、已存在文件夹或仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4、已存在文件夹或仓库"}},[s._v("#")]),s._v(" 4、已存在文件夹或仓库")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("将本地仓库和 github 仓库关联起来")]),s._v(" "),a("p",[s._v("git remote add origin https://github.com/FizzSy/documents.git 这里的网址就是仓库的网址"),a("br"),s._v("\n第一次推送 master 分支时，加上了-u 参数，Git 不但会把本地的 master 分支内容推送的远程新的 master 分支，还会把本地的 master 分支和远程的 master 分支关联起来，在以后的推送或者拉取时就可以简化命令 如：git push origin master")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('cd existing_folder\ngit init\ngit remote add origin https://github.com/FizzSy/documents.git\ngit add .\ngit commit -m "init"\ngit push -u origin master\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"_5、解决分支冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5、解决分支冲突"}},[s._v("#")]),s._v(" 5、解决分支冲突")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("//如本地dev分支合并到master分支有冲突\ngit pull\ngit commit -m 'update'  //dev分支提交修改文件\ngit push origin dev\ngit checkout master\ngit merge dev        //将dev分支代码合并到master\n修改完冲突\ngit commit -m 'merge'\ngit push origin master\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h2",{attrs:{id:"_6、修改上传限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6、修改上传限制"}},[s._v("#")]),s._v(" 6、修改上传限制")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git config --global http.postBuffer 157286400（代表设置上传上限大小为150M）\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"_7、修改远程仓库地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_7、修改远程仓库地址"}},[s._v("#")]),s._v(" 7、修改远程仓库地址")]),s._v(" "),a("p",[s._v("方法有三种：")]),s._v(" "),a("p",[s._v("1、修改命令")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git remote set-url origin [url]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("2、先删后加")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git remote rm origin\ngit remote add origin [url]\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("3、直接修改 config 文件")]),s._v(" "),a("h2",{attrs:{id:"_8、代码回滚"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_8、代码回滚"}},[s._v("#")]),s._v(" 8、代码回滚")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("git reset --hard [ID] //先通过 git log 查看提交版本 ID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);