#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'deploys'

git push -f git@github.com:FizzSy/documents.git master

cd -