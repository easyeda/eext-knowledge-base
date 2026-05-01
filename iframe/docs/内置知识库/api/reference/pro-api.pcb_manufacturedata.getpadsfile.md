---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [getPadsFile](./pro-api.pcb_manufacturedata.getpadsfile.md)

# PCB\_ManufactureData.getPadsFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 PADS 文件

## 签名

```typescript
getPadsFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

PADS 文件数据

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

## 示例

```javascript
// 获取 PADS 格式文件
const padsFile = await eda.pcb_ManufactureData.getPadsFile('Converted_To_PADS');
if (padsFile) {
	await eda.sys_FileSystem.saveFile(padsFile);
}
```
