---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [deleteBomTemplate](./pro-api.pcb_manufacturedata.deletebomtemplate.md)

# PCB\_ManufactureData.deleteBomTemplate() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

删除 BOM 模板

## 签名

```typescript
deleteBomTemplate(template: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

操作是否成功

## 示例

```javascript
// 删除指定的 BOM 模板
const success = await eda.pcb_ManufactureData.deleteBomTemplate('MyCustomTemplate');
if (success) {
	console.log('BOM 模板删除成功');
}
else {
	console.log('删除失败，可能是默认模板或模板不存在');
}
```
