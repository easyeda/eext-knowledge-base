---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [getPickAndPlaceFile](./pro-api.pcb_manufacturedata.getpickandplacefile.md)

# PCB\_ManufactureData.getPickAndPlaceFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取坐标文件（PickAndPlace）

## 签名

```typescript
getPickAndPlaceFile(fileName?: string, fileType?: 'xlsx' | 'csv', unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.MIL): Promise<File | undefined>;
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

'xlsx' \| 'csv'

</td><td>

_（可选）_ 文件类型

</td></tr>
<tr><td>

unit

</td><td>

[ESYS\_Unit.MILLIMETER](./pro-api.esys_unit.md) \| [ESYS\_Unit.MIL](./pro-api.esys_unit.md)

</td><td>

_（可选）_ 单位

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

坐标文件数据

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

## 示例

```javascript
// 导出毫米单位的 Excel 格式坐标文件
const pnpFile = await eda.pcb_ManufactureData.getPickAndPlaceFile(
	'PickAndPlace',
	'xlsx',
	ESYS_Unit.MILLIMETER
);
if (pnpFile) {
	await eda.sys_FileSystem.saveFile(pnpFile);
}
```
