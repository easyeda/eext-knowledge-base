---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [getBomFile](./pro-api.pcb_manufacturedata.getbomfile.md)

# PCB\_ManufactureData.getBomFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 BOM 文件

## 签名

```typescript
getBomFile(fileName?: string, fileType?: 'xlsx' | 'csv', template?: string, filterOptions?: Array<{
        property: string;
        includeValue: boolean | string;
    }>, statistics?: Array<string>, property?: Array<string>, columns?: Array<IPCB_BomPropertiesTableColumns>): Promise<File | undefined>;
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

template

</td><td>

string

</td><td>

_（可选）_ 模板名称

</td></tr>
<tr><td>

filterOptions

</td><td>

Array&lt;{ property: string; includeValue: boolean \| string; }&gt;

</td><td>

_（可选）_ 过滤规则，仅应包含需要启用的规则，`property` 为规则名称，`includeValue` 为匹配的值

</td></tr>
<tr><td>

statistics

</td><td>

Array&lt;string&gt;

</td><td>

_（可选）_ 统计，包含所有需要启用的统计项的名称

</td></tr>
<tr><td>

property

</td><td>

Array&lt;string&gt;

</td><td>

_（可选）_ 属性，包含所有需要启用的属性的名称

</td></tr>
<tr><td>

columns

</td><td>

Array&lt;[IPCB\_BomPropertiesTableColumns](./pro-api.ipcb_bompropertiestablecolumns.md)<!-- -->&gt;

</td><td>

_（可选）_ 列的属性及排序，`title`<!-- -->、`sort`<!-- -->、`group`<!-- -->、`orderWeight` 不传入则取默认值，`null` 代表 \*\*无\*\* 或 \*\*空\*\*

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

BOM 文件数据

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

## 示例

```javascript
// 使用默认配置导出 BOM
const bomFile = await eda.pcb_ManufactureData.getBomFile('MyBOM', 'xlsx');
if (bomFile) {
    await eda.sys_FileSystem.saveFile(bomFile);
}

// 自定义 BOM 过滤和列配置
const bomFile = await eda.pcb_ManufactureData.getBomFile(
    'Custom_Production_BOM',
    'xlsx',
    undefined,
    [
        { property: 'Add into BOM', includeValue: 'yes' },
        { property: 'Convert to PCB', includeValue: 'yes' }
    ],
    ['No.', 'Quantity', 'Comment'],
    ['Name', 'Device', 'Designator', 'Supplier'],
    [
        { property: 'Designator', title: '位号', sort: 'asc', group: 'No', orderWeight: 10 },
        { property: 'Quantity', title: '数量', sort: 'desc', group: 'Yes', orderWeight: 9 }
    ]
);

// 导出 CSV 格式 BOM
const csvBomFile = await eda.pcb_ManufactureData.getBomFile(
    'Simple_BOM',
    'csv',
    undefined,
    [{ property: 'Add into BOM', includeValue: 'yes' }],
    ['No.', 'Quantity'],
    ['Designator', 'Footprint', 'Value']
);
```
