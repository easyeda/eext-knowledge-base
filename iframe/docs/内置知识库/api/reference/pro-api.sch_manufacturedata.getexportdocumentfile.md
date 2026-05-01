---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_ManufactureData](./pro-api.sch_manufacturedata.md) &gt; [getExportDocumentFile](./pro-api.sch_manufacturedata.getexportdocumentfile.md)

# SCH\_ManufactureData.getExportDocumentFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取导出文档文件

## 签名

```typescript
getExportDocumentFile(fileName?: string, fileType?: ESCH_ExportDocumentFileType, typeSpecificParams?: {
        theme?: 'Default' | 'White on Black' | 'Black on White';
        lineWidth?: 'Default' | 'Always 1px' | 'Follow the Zoom Change';
        displayAttributesAsMenu?: boolean;
        size?: 'Original Size' | string | {
            width: number;
            height: number;
            unit: ESYS_Unit.INCH | ESYS_Unit.MILLIMETER;
        };
    }, object?: 'All Schematic' | 'Current Schematic' | 'Current Schematic Page' | string, objectSpecificParams?: {
        range?: 'All' | [number, number];
        outputMethod?: 'Merged sheet' | 'Separated sheet';
    }): Promise<File | undefined>;
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

[ESCH\_ExportDocumentFileType](./pro-api.esch_exportdocumentfiletype.md)

</td><td>

_（可选）_ 文件类型

</td></tr>
<tr><td>

typeSpecificParams

</td><td>

{ theme?: 'Default' \| 'White on Black' \| 'Black on White'; lineWidth?: 'Default' \| 'Always 1px' \| 'Follow the Zoom Change'; displayAttributesAsMenu?: boolean; size?: 'Original Size' \| string \| { width: number; height: number; unit: [ESYS\_Unit.INCH](./pro-api.esys_unit.md) \| [ESYS\_Unit.MILLIMETER](./pro-api.esys_unit.md)<!-- -->; }; }

</td><td>

_（可选）_ 类型特定参数

</td></tr>
<tr><td>

object

</td><td>

'All Schematic' \| 'Current Schematic' \| 'Current Schematic Page' \| string

</td><td>

_（可选）_ 对象

</td></tr>
<tr><td>

objectSpecificParams

</td><td>

{ range?: 'All' \| \[number, number\]; outputMethod?: 'Merged sheet' \| 'Separated sheet'; }

</td><td>

_（可选）_ 对象特定参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

导出文档文件数据（或压缩包）

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统
