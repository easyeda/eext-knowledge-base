---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [getPdfFile](./pro-api.pcb_manufacturedata.getpdffile.md)

# PCB\_ManufactureData.getPdfFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 PDF 文件

## 签名

```typescript
getPdfFile(fileName?: string, outputMethod?: EPCB_PdfOutputMethod, contentConfig?: {
        displayAttributesAsMenu: boolean;
        showOutlineOnly: boolean;
    }, watermark?: {
        show?: boolean;
        content?: string;
        styleConfig?: {
            color: string;
            transparency: 'Opaque' | '75%' | '50%' | '25%';
            font: string;
            fontSize: string;
            style: {
                blood: boolean;
                italic: boolean;
                underline: boolean;
            };
            slope: 0 | 45 | 90;
            denseness: 'Single' | 'Sparse' | 'Std' | 'Dense';
        };
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

outputMethod

</td><td>

[EPCB\_PdfOutputMethod](./pro-api.epcb_pdfoutputmethod.md)

</td><td>

_（可选）_ 输出方式

</td></tr>
<tr><td>

contentConfig

</td><td>

\{ displayAttributesAsMenu: boolean; showOutlineOnly: boolean; \}

</td><td>

_（可选）_ 内容配置

</td></tr>
<tr><td>

watermark

</td><td>

{ show?: boolean; content?: string; styleConfig?: { color: string; transparency: 'Opaque' \| '75%' \| '50%' \| '25%'; font: string; fontSize: string; style: { blood: boolean; italic: boolean; underline: boolean; }; slope: 0 \| 45 \| 90; denseness: 'Single' \| 'Sparse' \| 'Std' \| 'Dense'; }; }

</td><td>

_（可选）_ 水印

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

PDF 文件数据（或压缩包）

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统

`outputMethod`<!-- -->、`contentConfig`<!-- -->、`watermark` 参数暂不可用，等待后期规划

## 示例

```javascript
// 导出多页 PDF（包含所有图层）
const pdfFile = await eda.pcb_ManufactureData.getPdfFile(
	'PCB_Documentation',
	EPCB_PdfOutputMethod.MULTI_PAGE_PDF
);
if (pdfFile) {
	await eda.sys_FileSystem.saveFile(pdfFile);
}
```
