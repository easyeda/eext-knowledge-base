---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Schematic](./pro-api.dmt_schematic.md) &gt; [getCurrentSchematicPageInfo](./pro-api.dmt_schematic.getcurrentschematicpageinfo.md)

# DMT\_Schematic.getCurrentSchematicPageInfo() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取当前原理图图页的详细属性

## 签名

```typescript
getCurrentSchematicPageInfo(): Promise<IDMT_SchematicPageItem | undefined>;
```

## 返回值

Promise&lt;[IDMT\_SchematicPageItem](./pro-api.idmt_schematicpageitem.md) \| undefined&gt;

原理图图页的详细属性，如若为 `undefined` 则获取失败

## 备注

将会获取当前打开且拥有最后输入焦点的原理图图页的详细属性
