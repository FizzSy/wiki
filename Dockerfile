# 设置基础镜像
FROM nginx:latest
#RUN mkdir -p /usr/share/nginx/html
#WORKDIR /usr/share/nginx/html
#COPY wiki2 /root/nginx
# 用本地的 nginx.conf 配置来替换nginx镜像里的默认配置
COPY nginx.conf /root/nginx