---
comment: false
---

# git

## 1、常用命令

```
git clone                                               // 将存储库克隆到新目录中
git init                                                // 初始化一个空的git本地仓库
git config                                              // 获取并设置存储库或全局选项
git status                                              // 显示工作目录和暂存区的状
git diff                                                // 显示提交和工作树等之间的更改
git branch dev                                          // 创建一个dev分支
git branch dev -d                                       // 删除dev分支
git checkout dev                                        // 切换到dev分支
git checkout dev2 -b                                    // 创建并切换到dev2分支
git remote                                              // 查看远程库的信息
git remote -v                                           // 查看远程库的详细信息
git log                                                 // 显示git历史日志
git push origin master                                  // 推送到master分支
git push origin dev                                     // 推送到dev分支
git commit                                              // 将更改记录提交到存储库
git pull origin master                                  // 拉取主分支最新代码 到 当前分支
git push -u origin master                               // 推送上git
env                                                     // 查看环境变量
env |grep proxy                                         // 查看代理
git config -l                                           // 查看配置列表
git config --global https.proxy http://127.0.0.1:1080   // 设置http代理
git config --global https.proxy https://127.0.0.1:1080  // 设置https代理
git config --global --unset http.proxy                  // 取消http代理
git config --global --unset https.proxy                 // 取消https代理
export no_proxy=github.com                              // 取消对github.com代理
```

## 2、Git 全局设置

```
git config --global user.name  "luyuwen"
git config --global user.email "1369530215@qq.com"
```

## 3、创建一个新仓库

```
git clone https://github.com/FizzSy/documents.git
cd documents
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master
```

## 4、已存在文件夹或仓库

::: tip 将本地仓库和 github 仓库关联起来
git remote add origin https://github.com/FizzSy/documents.git 这里的网址就是仓库的网址  
第一次推送 master 分支时，加上了-u 参数，Git 不但会把本地的 master 分支内容推送的远程新的 master 分支，还会把本地的 master 分支和远程的 master 分支关联起来，在以后的推送或者拉取时就可以简化命令 如：git push origin master
:::

```
cd existing_folder
git init
git remote add origin https://github.com/FizzSy/documents.git
git add .
git commit -m "init"
git push -u origin master
```

## 5、解决分支冲突

```
//如本地dev分支合并到master分支有冲突
git pull
git commit -m 'update'  //dev分支提交修改文件
git push origin dev
git checkout master
git merge dev        //将dev分支代码合并到master
修改完冲突
git commit -m 'merge'
git push origin master
```

## 6、修改上传限制

```
git config --global http.postBuffer 157286400（代表设置上传上限大小为150M）
```

## 7、修改远程仓库地址

方法有三种：

1、修改命令

```
git remote set-url origin [url]
```

2、先删后加

```
git remote rm origin
git remote add origin [url]
```

3、直接修改 config 文件

## 8、代码回滚

```
git reset --hard [ID] //先通过 git log 查看提交版本 ID
```
