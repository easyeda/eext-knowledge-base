---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [getGerberFile](./pro-api.pcb_manufacturedata.getgerberfile.md)

# PCB\_ManufactureData.getGerberFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 PCB 制版文件（Gerber）

## 签名

```typescript
getGerberFile(fileName?: string, colorSilkscreen?: boolean, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.INCH, digitalFormat?: {
        integerNumber: number;
        decimalNumber: number;
    }, other?: {
        metallicDrillingInformation: boolean;
        nonMetallicDrillingInformation: boolean;
        drillTable: boolean;
        flyingProbeTestingFile: boolean;
    }, layers?: Array<{
        layerId: number;
        isMirror: boolean;
    }>, objects?: Array<'Pad' | 'Via' | 'Track' | 'Text' | 'Image' | 'Dimension' | 'BoardOutline' | 'BoardCutout' | 'CopperFilled' | 'SolidRegion' | 'FPCStiffener' | 'Line' | 'PlaneZone' | 'ComponentProperty' | 'ComponentSilkscreen' | 'TearDrop'>): Promise<File | undefined>;
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

colorSilkscreen

</td><td>

boolean

</td><td>

_（可选）_ 是否生成彩色丝印制造文件（嘉立创专用文件）

</td></tr>
<tr><td>

unit

</td><td>

[ESYS\_Unit.MILLIMETER](./pro-api.esys_unit.md) \| [ESYS\_Unit.INCH](./pro-api.esys_unit.md)

</td><td>

_（可选）_ 单位

</td></tr>
<tr><td>

digitalFormat

</td><td>

\{ integerNumber: number; decimalNumber: number; \}

</td><td>

_（可选）_ 数字格式

</td></tr>
<tr><td>

other

</td><td>

\{ metallicDrillingInformation: boolean; nonMetallicDrillingInformation: boolean; drillTable: boolean; flyingProbeTestingFile: boolean; \}

</td><td>

_（可选）_ 其它

</td></tr>
<tr><td>

layers

</td><td>

Array&lt;{ layerId: number; isMirror: boolean; }&gt;

</td><td>

_（可选）_ 导出层，默认则按照嘉立创生产需求导出

</td></tr>
<tr><td>

objects

</td><td>

Array&lt;'Pad' \| 'Via' \| 'Track' \| 'Text' \| 'Image' \| 'Dimension' \| 'BoardOutline' \| 'BoardCutout' \| 'CopperFilled' \| 'SolidRegion' \| 'FPCStiffener' \| 'Line' \| 'PlaneZone' \| 'ComponentProperty' \| 'ComponentSilkscreen' \| 'TearDrop'&gt;

</td><td>

_（可选）_ 导出对象，默认则按照嘉立创生产需求导出

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

PCB 制版文件数据

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

## 示例

```javascript
// 导出默认的 Gerber 文件
const gerberFile = await eda.pcb_ManufactureData.getGerberFile('MyBoard_Gerber');
if (gerberFile) {
    console.log('Gerber 文件已生成:', gerberFile);
}

// 导出并保存到本地
const gerberFile = await eda.pcb_ManufactureData.getGerberFile(
    'MyBoard_Gerber',
    false,
    ESYS_Unit.MILLIMETER,
    { integerNumber: 2, decimalNumber: 6 }
);
if (gerberFile) {
    await eda.sys_FileSystem.saveFile(gerberFile,'Gerber.zip');
}

// 自定义导出层和对象
const gerberFile = await eda.pcb_ManufactureData.getGerberFile(
    'Custom_Gerber',
    false,
    ESYS_Unit.INCH,
    { integerNumber: 3, decimalNumber: 5 },
    { metallicDrillingInformation: true, nonMetallicDrillingInformation: true, drillTable: false, flyingProbeTestingFile: false },
    [{ layerId: 1, isMirror: false }, { layerId: 2, isMirror: false }, { layerId: 11, isMirror: false }],
    ['Pad', 'Via', 'Track', 'BoardOutline']
);
```
