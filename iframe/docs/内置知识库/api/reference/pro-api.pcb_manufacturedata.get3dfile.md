---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [get3DFile](./pro-api.pcb_manufacturedata.get3dfile.md)

# PCB\_ManufactureData.get3DFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 3D 模型文件

## 签名

```typescript
get3DFile(fileName?: string, fileType?: 'step' | 'obj', element?: Array<'Component Model' | 'Via' | 'Silkscreen' | 'Wire In Signal Layer'>, modelMode?: 'Outfit' | 'Parts', autoGenerateModels?: boolean): Promise<File | undefined>;
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

'step' \| 'obj'

</td><td>

_（可选）_ 文件类型

</td></tr>
<tr><td>

element

</td><td>

Array&lt;'Component Model' \| 'Via' \| 'Silkscreen' \| 'Wire In Signal Layer'&gt;

</td><td>

_（可选）_ 导出对象

</td></tr>
<tr><td>

modelMode

</td><td>

'Outfit' \| 'Parts'

</td><td>

_（可选）_ 导出模式，`Outfit` = 装配体，`Parts` = 零件

</td></tr>
<tr><td>

autoGenerateModels

</td><td>

boolean

</td><td>

_（可选）_ 是否为未绑定 3D 模型的元件自动生成 3D 模型（根据元件的"高度"属性）

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

3D 模型文件数据

## 备注

请注意：只有以 STEP 格式导入的元件模型，才能在导出的 STEP 文件中体现

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

## 示例

```javascript
// 导出装配体模式的 STEP 文件（包含元件模型）
const stepFile = await eda.pcb_ManufactureData.get3DFile(
	'MyBoard_3D',
	'step',
	['Component Model'],
	'Outfit',
	true
);
if (stepFile) {
	await eda.sys_FileSystem.saveFile(stepFile);
}

// 导出包含多种对象的完整 3D 模型
const full3DFile = await eda.pcb_ManufactureData.get3DFile(
	'Complete_3D_Model',
	'step',
	['Component Model', 'Via', 'Silkscreen', 'Wire In Signal Layer'],
	'Outfit',
	true
);

// 导出零件模式 OBJ 文件
const objFile = await eda.pcb_ManufactureData.get3DFile(
	'MyBoard_OBJ',
	'obj',
	['Component Model'],
	'Parts',
	false
);
```
