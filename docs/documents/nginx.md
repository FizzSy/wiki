---
comment: false
---

# Nginx

::: tip 简介
Nginx("engine x")是一款是由俄罗斯的程序设计师 Igor Sysoev 所开发高性能的 Web 和 反向代理 服务器，也是一个 IMAP/POP3/SMTP 代理服务器。

在高连接并发的情况下，Nginx 是 Apache 服务器不错的替代品。
:::

## 常用命令

```
start nginx             // 启动
nginx -s stop           // 快速关闭Nginx，可能不保存相关信息，并迅速终止web服务。
nginx -s quit           // 平稳关闭Nginx，保存相关信息，有安排的结束web服务。
nginx -s reload         // 修改配置后重新加载生效。
nginx -s reopen         // 重新打开日志文件。
nginx -c filename       // 为 Nginx 指定一个配置文件，来代替缺省的。
nginx -t                // 配置文件检测是否正确
nginx -v                // 显示 nginx 的版本。
nginx -V                // 显示 nginx 的版本，编译器版本和配置参数。
service nginx stop      // 停止
service nginx start     // 启动
service nginx restart   // 重启
```

## nginx 无法重启解决方案

```
snginx -c /usr/local/etc/nginx/nginx.conf
```

## 403 Forbidden

```
autoindex off       //鉴于安全考虑，建议关闭当前页面目录结构
```

## 反向代理

::: tip
路由访问 80 端口但实际会访问 8080 端口
:::

```
server {
    listen 80;
    server_name www.xxx.com;
    location / {
        index index.html index.htm;
        proxy_pass  http://127.0.0.1:8080
    }
}
```

## 配置 https 协议

在云上下载 https 协议证书

```
server {
    listen 443;
    server_name www.xxx.com;                        // 你的域名
    root /var/www/public;                           // 前台文件存放文件夹，可改成别的
    index index.html index.htm;                     // 上面配置的文件夹里面的index.html

    ssl on;
    ssl_certificate  xxx.pem;                       // 改成你的证书的名字
    ssl_certificate_key xxx.key;                    // 你的证书的名字
    ssl_session_timeout 5m;
    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:ECDHE:ECDH:AES:HIGH:!NULL:!aNULL:!MD5:!ADH:!RC4;
    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;
    ssl_prefer_server_ciphers on;

    location / {
        index index.html index.htm;
    }
}
```

## 配置 http 跳 https

```
rewrite ^(.*) https://$server_name$1 permanent;
```

## vue history 模式下刷新 404

```
location / {
  try_files $uri $uri/ /index.html;         //根目录
  try_files $uri $uri/ /test/index.html;    //二级目录
}
```

## 二级目录反向代理

[Nginx 通过二级目录（路径）映射不同的反向代理，规避 IP+端口访问](https://zhang.ge/5054.html "Nginx 通过二级目录（路径）映射不同的反向代理，规避 IP+端口访问")

```
server {
    listen 80;
    server_name www.xxx.com;
    root /var/www/public;
    location /test {
        proxy_pass  http://127.0.0.1:8080
    }
}
```
