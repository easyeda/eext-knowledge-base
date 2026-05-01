---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [uploadBomTemplateFile](./pro-api.pcb_manufacturedata.uploadbomtemplatefile.md)

# PCB\_ManufactureData.uploadBomTemplateFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

上传 BOM 模板文件

## 签名

```typescript
uploadBomTemplateFile(templateFile: File, template?: string): Promise<string | undefined>;
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

templateFile

</td><td>

File

</td><td>

BOM 模板文件

</td></tr>
<tr><td>

template

</td><td>

string

</td><td>

_（可选）_ BOM 模板名称，如若为 `undefined` 则自动从 `templateFile` 中取值

</td></tr>
</tbody></table>

## 返回值

Promise&lt;string \| undefined&gt;

BOM 模板名称

## 示例

```javascript
// 从文件选择器读取模板文件
const templateFile = await eda.sys_FileSystem.openReadFileDialog('.xlsx');
if (templateFile) {
	const templateName = await eda.pcb_ManufactureData.uploadBomTemplateFile(
		templateFile,
		'MyCustomTemplate'
	);
	if (templateName) {
		console.log('模板上传成功:', templateName);
	}
}
```
