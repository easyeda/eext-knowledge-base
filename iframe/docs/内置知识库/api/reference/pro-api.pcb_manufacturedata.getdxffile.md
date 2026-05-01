---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [getDxfFile](./pro-api.pcb_manufacturedata.getdxffile.md)

# PCB\_ManufactureData.getDxfFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 DXF 文件

## 签名

```typescript
getDxfFile(fileName?: string, layers?: Array<{
        layerId: number;
        mirror: boolean;
    }>, objects?: Array<string>): Promise<File | undefined>;
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

fileName

</td><td>

string

</td><td>

_（可选）_ 文件名

</td></tr>
<tr><td>

layers

</td><td>

Array&lt;{ layerId: number; mirror: boolean; }&gt;

</td><td>

_（可选）_ 导出层

</td></tr>
<tr><td>

objects

</td><td>

Array&lt;string&gt;

</td><td>

_（可选）_ 导出对象

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

DXF 文件数据

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统
