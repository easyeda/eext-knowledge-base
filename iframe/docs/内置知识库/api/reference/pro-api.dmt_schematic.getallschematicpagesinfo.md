---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Schematic](./pro-api.dmt_schematic.md) &gt; [getAllSchematicPagesInfo](./pro-api.dmt_schematic.getallschematicpagesinfo.md)

# DMT\_Schematic.getAllSchematicPagesInfo() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取工程内所有原理图图页的详细属性

## 签名

```typescript
getAllSchematicPagesInfo(): Promise<Array<IDMT_SchematicPageItem>>;
```

## 返回值

Promise&lt;Array&lt;[IDMT\_SchematicPageItem](./pro-api.idmt_schematicpageitem.md)<!-- -->&gt;&gt;

所有原理图图页的详细属性的数组
