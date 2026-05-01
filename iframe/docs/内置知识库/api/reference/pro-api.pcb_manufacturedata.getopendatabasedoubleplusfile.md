---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [getOpenDatabaseDoublePlusFile](./pro-api.pcb_manufacturedata.getopendatabasedoubleplusfile.md)

# PCB\_ManufactureData.getOpenDatabaseDoublePlusFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 ODB++ 文件

## 签名

```typescript
getOpenDatabaseDoublePlusFile(fileName?: string, unit?: ESYS_Unit.INCH, otherData?: {
        metallizedDrilledHoles?: boolean;
        nonMetallizedDrilledHoles?: boolean;
        drillTable?: boolean;
        flyingProbeTestFile?: boolean;
    }, layers?: Array<{
        layerId: number;
        mirror: boolean;
    }>, objects?: Array<{
        objectName: string;
    }>): Promise<File | undefined>;
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

unit

</td><td>

[ESYS\_Unit.INCH](./pro-api.esys_unit.md)

</td><td>

_（可选）_ 单位

</td></tr>
<tr><td>

otherData

</td><td>

\{ metallizedDrilledHoles?: boolean; nonMetallizedDrilledHoles?: boolean; drillTable?: boolean; flyingProbeTestFile?: boolean; \}

</td><td>

_（可选）_ 其它

</td></tr>
<tr><td>

layers

</td><td>

Array&lt;{ layerId: number; mirror: boolean; }&gt;

</td><td>

_（可选）_ 导出层，默认则按照嘉立创生产需求导出

</td></tr>
<tr><td>

objects

</td><td>

Array&lt;{ objectName: string; }&gt;

</td><td>

_（可选）_ 导出对象，默认则按照嘉立创生产需求导出

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

ODB++ 文件数据

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

## 示例

```javascript
// 导出 ODB++ 文件，自定义单位和选项
const odbFile = await eda.pcb_ManufactureData.getOpenDatabaseDoublePlusFile(
	'MyBoard_ODB',
	ESYS_Unit.INCH,
	{
		metallizedDrilledHoles: true,
		nonMetallizedDrilledHoles: true,
		drillTable: true,
		flyingProbeTestFile: false
	}
);
if (odbFile) {
	await eda.sys_FileSystem.saveFile(odbFile);
}
```
