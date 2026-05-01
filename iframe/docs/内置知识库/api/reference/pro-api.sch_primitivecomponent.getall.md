---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveComponent](./pro-api.sch_primitivecomponent.md) &gt; [getAll](./pro-api.sch_primitivecomponent.getall.md)

# SCH\_PrimitiveComponent.getAll() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有器件

## 签名

```typescript
getAll(componentType?: ESCH_PrimitiveComponentType$1, allSchematicPages?: boolean): Promise<Array<ISCH_PrimitiveComponent$1>>;
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

componentType

</td><td>

[ESCH\_PrimitiveComponentType$1](./pro-api.esch_primitivecomponenttype.md)

</td><td>

_（可选）_ 器件类型

</td></tr>
<tr><td>

allSchematicPages

</td><td>

boolean

</td><td>

_（可选）_ 是否获取所有原理图图页的器件

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;ISCH\_PrimitiveComponent$1&gt;&gt;

器件图元对象数组
