---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Schematic](./pro-api.dmt_schematic.md) &gt; [getAllSchematicsInfo](./pro-api.dmt_schematic.getallschematicsinfo.md)

# DMT\_Schematic.getAllSchematicsInfo() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取工程内所有原理图的详细属性

## 签名

```typescript
getAllSchematicsInfo(): Promise<Array<IDMT_SchematicItem>>;
```

## 返回值

Promise&lt;Array&lt;[IDMT\_SchematicItem](./pro-api.idmt_schematicitem.md)<!-- -->&gt;&gt;

所有原理图的详细属性的数组
