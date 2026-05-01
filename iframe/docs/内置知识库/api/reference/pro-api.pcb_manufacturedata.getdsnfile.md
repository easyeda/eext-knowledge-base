---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [getDsnFile](./pro-api.pcb_manufacturedata.getdsnfile.md)

# PCB\_ManufactureData.getDsnFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取自动布线文件（DSN）

## 签名

```typescript
getDsnFile(fileName?: string): Promise<File | undefined>;
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

自动布线 DSN 文件数据

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

## 示例

```javascript
const dsnFile = await eda.pcb_ManufactureData.getDsnFile('AutoRoute_DSN');
if (dsnFile) {
	await eda.sys_FileSystem.saveFile(dsnFile);
}
```
