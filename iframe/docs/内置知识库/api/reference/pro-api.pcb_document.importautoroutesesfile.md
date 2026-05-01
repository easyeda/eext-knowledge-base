---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Document](./pro-api.pcb_document.md) &gt; [importAutoRouteSesFile](./pro-api.pcb_document.importautoroutesesfile.md)

# PCB\_Document.importAutoRouteSesFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

导入自动布线文件（SES）

## 签名

```typescript
importAutoRouteSesFile(autoRouteFile: File): Promise<boolean>;
```

## 参数名

<table><thead><tr><th>

参数

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

autoRouteFile

</td><td>

File

</td><td>

欲导入的 SES 文件

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

导入操作是否成功

## 备注

可以使用  读入文件
