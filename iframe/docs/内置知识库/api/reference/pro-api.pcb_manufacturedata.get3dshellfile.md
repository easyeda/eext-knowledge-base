---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [get3DShellFile](./pro-api.pcb_manufacturedata.get3dshellfile.md)

# PCB\_ManufactureData.get3DShellFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 3D 外壳文件

## 签名

```typescript
get3DShellFile(fileName?: string, fileType?: 'stl' | 'step' | 'obj'): Promise<File | undefined>;
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

fileType

</td><td>

'stl' \| 'step' \| 'obj'

</td><td>

_（可选）_ 文件类型

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

3D 外壳文件数据

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

## 示例

```javascript
// 导出 STL 格式 3D 外壳
const stlFile = await eda.pcb_ManufactureData.get3DShellFile('Board_Shell', 'stl');
if (stlFile) {
	await eda.sys_FileSystem.saveFile(stlFile);
}

// 导出 STEP 格式 3D 外壳
const stepShellFile = await eda.pcb_ManufactureData.get3DShellFile('Board_Shell_STEP', 'step');
if (stepShellFile) {
	await eda.sys_FileSystem.saveFile(stepShellFile);
}
```
