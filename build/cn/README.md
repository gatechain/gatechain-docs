# 如何构建文档HTML文件 
# How to build HTML version using mkdocs

## 0. 安装mkdocs
> sudo apt-get install python
> sudo apt-get install python-pip
> sudo python -m pip install mkdocs  

## 1. 创建工程目录
> mkdir gatechain-doc
> mkdir gatechain-doc/docs  

## 2. 准备源文档
> 将tobepub下的文档到拷贝至gatechain-doc/docs下  

## 3. 生成HTML
> 在工程目录gatechain-doc下
> mkdocs build  

## 4. 部署HTML
> cn和en目录中的中英文需要单独做mkdocs build
> 中文版网站目标目录是 /docs/cn
> 英文版网站目标目录是 /docs/en 