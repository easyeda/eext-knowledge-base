---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [getBomTemplateFile](./pro-api.pcb_manufacturedata.getbomtemplatefile.md)

# PCB\_ManufactureData.getBomTemplateFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 BOM 模板文件

## 签名

```typescript
getBomTemplateFile(template: string): Promise<File | undefined>;
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

template

</td><td>

string

</td><td>

BOM 模板名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

BOM 模板文件

## 示例

```javascript
// 获取指定模板的文件
const templateFile = await eda.pcb_ManufactureData.getBomTemplateFile('MyCustomTemplate');
if (templateFile) {
	await eda.sys_FileSystem.saveFile(templateFile);
}
```
