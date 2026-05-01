---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [getBomTemplates](./pro-api.pcb_manufacturedata.getbomtemplates.md)

# PCB\_ManufactureData.getBomTemplates() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 BOM 模板列表

## 签名

```typescript
getBomTemplates(): Promise<Array<string>>;
```

## 返回值

Promise&lt;Array&lt;string&gt;&gt;

BOM 模板列表

## 示例

```javascript
// 获取所有可用的 BOM 模板
const templates = await eda.pcb_ManufactureData.getBomTemplates();
console.log('可用的 BOM 模板:', templates);
templates.forEach((template, index) => {
	console.log(`${index + 1}. ${template}`);
});
```
