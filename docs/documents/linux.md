---
comment: false
---

# Linux

## 1、常用命令

```
cd [dir]                    //进入目录
ls -l                       //查看当前目录的详细信息
cat [doc]                   //读取文件内容
rm [dir/doc] -rf            //删除文件夹/文件 -rf是强制删除不需要确认
mkdir [dir]                 //创建文件夹
touch [doc]                 //创建文件
cp [doc] [url/doc]          //复制文件到某目录下
mv [doc] [url/doc]          //重命名文件
mv [doc] [url]              //移动文件
```

## 2、VIM 基本操作

```
vi/vim [doc]                //启动vi/vim，进入命令模式
ESC                         //返回基本命令模式
:i                          //切换输入模式
:x                          //删除当前光标所在处的字符
:wq !                       //保存并退出 !是强制
:q !                        //退出 !是强制
:u                          //撤销上一次操作
:set number                 //显示文件行数
ctrl+v                      //进入可视化模式  I插入 d删除
```

## 3、解压压缩文件

```
yum install xxx.tar.gz
tar -zxvf xxx.tar.gz
```

## 4、设置系统快捷软连接

```
ln -s /usr/local/nginx/sbin/nginx nginx     //讲sbin文件下的niginx命令设置为nginx即可启动
```

## 5、设置环境变量 (以 node.js 为例)

1、编辑环境变量文件

```
vim /etc/profile
```

2、在文件中添加

```
#set for nodejs
export NODE_HOME=/usr/local/tool/nodejs/node
export PATH=$NODE_HOME/bin:$PATH
```

3、保存退出后重启文件

```
source /etc/profile
```

2、检测 node 是否生效

```
node -v
v8.0.0
```
