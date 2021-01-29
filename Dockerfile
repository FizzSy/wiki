# 设置基础镜像
FROM nginx:latest
#RUN mkdir -p /usr/share/nginx/html
#WORKDIR /usr/share/nginx/html
# 将wiki文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY wiki/ /usr/share/nginx/html/
# 用本地的 nginx.conf 配置来替换nginx镜像里的默认配置
COPY nginx.conf /etc/nginx/conf.d/default.conf