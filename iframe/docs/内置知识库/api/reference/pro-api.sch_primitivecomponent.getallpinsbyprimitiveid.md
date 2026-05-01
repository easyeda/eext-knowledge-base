---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveComponent](./pro-api.sch_primitivecomponent.md) &gt; [getAllPinsByPrimitiveId](./pro-api.sch_primitivecomponent.getallpinsbyprimitiveid.md)

# SCH\_PrimitiveComponent.getAllPinsByPrimitiveId() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取器件关联的所有引脚

## 签名

```typescript
getAllPinsByPrimitiveId(primitiveId: string): Promise<Array<ISCH_PrimitiveComponentPin> | undefined>;
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

primitiveId

</td><td>

string

</td><td>

器件图元 ID

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitiveComponentPin](./pro-api.isch_primitivecomponentpin.md)<!-- -->&gt; \| undefined&gt;

器件引脚图元数组
