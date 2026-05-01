---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_SelectControl](./pro-api.sch_selectcontrol.md) &gt; [refactorGetAllSelectedPrimitives](./pro-api.sch_selectcontrol.refactorgetallselectedprimitives.md)

# SCH\_SelectControl.refactorGetAllSelectedPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

3.0版：查询所有已选中图元的图元对象

## 签名

```typescript
refactorGetAllSelectedPrimitives(): Promise<Array<ISCH_Primitive>>;
```

## 返回值

Promise&lt;Array&lt;[ISCH\_Primitive](./pro-api.isch_primitive.md)<!-- -->&gt;&gt;

所有已选中图元的图元对象
