# angular-tour-of-books
这是一个参照 Angular 官方教程所写的小例子，实现了官方教程的所有功能

# ng build
最后编译后的源码在 dist 目录下

# 简要说明 github 与本地协作流程
#### 1、在 github 中新建代码库，复制地址，如：git@github.com:jinlixing/angular-tour-of-books
#### 2、本地 ng new angular-tour-of-books && cd angular-tour-of-books
#### 3、初始化本地代码库 git init
#### 4、首先将 github 上的readme、.gitignore、LICENSE 文件拉取到本地
     git pull origin master --allow-unrelated-histories
#### 5、手动合并冲突文件后，进行 commit 操作，并 git push -u origin master 首次推送到 github 代码库中
#### 6、随后正常开发流程即可
