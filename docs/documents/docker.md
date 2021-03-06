# docker

## 1、常用命令

```
sudo reboot                                         // 重启

docker search image_name                            // 搜索镜像
docker images                                       // 查看本地镜像
docker rmi image_name                               // 删除镜像

docker run -itd --name="container_name" nginx       // 创建一个新容器
docker start [OPTIONS] container [CONTAINER...]     // 启动一个或多个已经被停止的容器 docker start test
docker stop [OPTIONS] container [CONTAINER...]      // 停止一个运行中的容器 docker stop
docker restart [OPTIONS] container [CONTAINER...]   // 重启容器

docker exec [OPTIONS] CONTAINER COMMAND [ARG...]    // 进入容器执行bash docker exec -it 9df70f9a0714 /bin/bash
```

## 2、基础操作

### 容器操作

1. 创建容器： `docker run -itd --name="container_name" nginx`
    > -i (interactive) 交互模式运行容器
    > -t (tty) 后台运行容器，并返回容器 ID
    > -d (detach) 为容器重新分配一个伪输入终端
    > --name 为容器指定名称
2. 查看容器（运行中的）： `docker ps`
3. 查看容器（包括已停止的）： `docker ps -a`
4. 停止容器：`docker stop container/container_id`
5. 重启容器：`docker restart container/container_id`
6. 删除容器：`docker rm container/container_id`

### 容器的修改及保存

1. 进入容器： `docker exec -it container_id/container_name /bin/bash`
2. 退出容器： `exit`
3. 提交修改： `docker commit -a "author" -m "message" container_id/container_name image_name:tag_name`
   ::: tip 参数说明
    > -a: 可选，用于指定作者  
    > -m: 可选，提交信息  
    > container_id: 被修改的容器 id  
    > image_name: 新镜像名字，可以自定义  
    > tag_name: 新镜像的标签，可不写，默认为 latest
    > :::

### 容器进阶操作

1. 端口映射  
   `docker run -itd -p 宿主机端口号:容器端口号 image_name`

2. 文件挂载  
   `docker run -itd -v /宿主机/文件目录/文件:/容器/目录/文件 image_name`

3. 容器文件复制到本地  
   `docker cp 容器名:/目录/文件 /宿主机目录/文件`

4. 本地文件复制到容器  
   `docker cp /宿主机目录/文件 容器名:/目录/文件`

修改 mysql  
`docker run -itd --name=mysql -p 33066:3306 -v /course/mysql:/var/lib/mysql/ -e MYSQL_ROOT_PASSWORD=root mysql`
修改 mysql 密码 为 root
`ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'root'`

## 3、Dockerfile

::: 介绍
文件中包含 Linux 命令，`docker`通过读取文件中的命令来组件镜像  
一般四部分： `基础镜像信息、维护者信息、镜像操作指令、容器启动时执行指令`

:::

> `FROM`: 指定基础镜像，必须为第一个命令

```
格式：
    FROM <image>
    FROM <image>:<tag>
    FROM <image>@<digest>

示例：
    FROM centos:7.0
```

## 4、英文缩写

### 容器命令详解

-i (interactive)  
-t (tty)  
-d (detach)  
-p (port)  
exec (execute)

## 5、Docker 命令大全

<a href="https://www.runoob.com/docker/docker-command-manual.html" target="_blank">Docker 命令大全</a>

## 6、docker 拉取镜像特别慢的解决办法

<img src="https://img-blog.csdnimg.cn/20200130143259716.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl8zNjU2MjgwNA==,size_16,color_FFFFFF,t_70" />.

添加
`"registry-mirrors":["https://f3lu6ju1.mirror.aliyuncs.com"]`

## 7、本地连接 docker 虚拟机

使用`ssh docker@<ip>`
默认账号密码在顶部有写
