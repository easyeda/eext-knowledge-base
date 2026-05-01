---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_SelectControl](./pro-api.sch_selectcontrol.md) &gt; [getAllSelectedPrimitives\_PrimitiveId](./pro-api.sch_selectcontrol.getallselectedprimitives_primitiveid.md)

# SCH\_SelectControl.getAllSelectedPrimitives\_PrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

查询所有已选中图元的图元 ID

## 签名

```typescript
getAllSelectedPrimitives_PrimitiveId(): Promise<Array<string>>;
```

## 返回值

Promise&lt;Array&lt;string&gt;&gt;

所有已选中图元的图元 ID
