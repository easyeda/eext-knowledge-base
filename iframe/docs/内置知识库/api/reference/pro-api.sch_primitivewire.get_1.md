---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveWire](./pro-api.sch_primitivewire.md) &gt; [get](./pro-api.sch_primitivewire.get_1.md)

# SCH\_PrimitiveWire.get() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取导线

## 签名

```typescript
get(primitiveIds: Array<string>): Promise<Array<ISCH_PrimitiveWire>>;
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

primitiveIds

</td><td>

Array&lt;string&gt;

</td><td>

导线的图元 ID，可以为字符串或字符串数组，如若为数组，则返回的也是数组

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[ISCH\_PrimitiveWire](./pro-api.isch_primitivewire.md)<!-- -->&gt;&gt;

导线图元对象，空数组表示获取失败

## 备注

如若传入多个图元 ID，任意图元 ID 未匹配到不影响其它图元的返回，即可能返回少于传入的图元 ID 数量的图元对象
