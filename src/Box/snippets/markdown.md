---
category: Box
created: 1682559517699
date: '2023-04-27 09:38:37'
desc: ''
id: ko2nhu3xd4ocfdlp4hbcmlh
title: markdown
updated: 1682652980856
---

``` json 
{
  "container": {
    "prefix": "container",
    "body": ["::: ${1|tip,warning,danger,details|}  ", "$2  ", ":::"],
    "description": "自定义容器"
  },
  "code": {
    "prefix": "code",
    "body": [
      "``` ${1|bash,python,cpp,javascript,json,yaml,ini|} ",
      "$2",
      "```"
    ],
    "description": "多行代码块"
  },
  "image": {
    "prefix": "image",
    "body": ["![${2:image.png}](${1:https://xxx.png})"],
    "description": "插入图片"
  },
  "link": {
    "prefix": "link",
    "body": ["[${2:link}](${1:https://xxx.png})"],
    "description": "插入链接"
  },
  "table": {
    "prefix": "table",
    "body": ["| ${1: xx} | ${2: xx} |", "| --- | --- |", "|     |     |"],
    "description": "插入表格"
  },
  "more": {
    "prefix": "more",
    "body": ["<!-- more -->"],
    "description": "插入more"
  }
}

```