[Home](./pro-api.md) &gt; [IPCB\_PrimitiveAPI](./pro-api.ipcb_primitiveapi.md)

# IPCB\_PrimitiveAPI interface

PCB 图元接口

## 签名

```typescript
interface IPCB_PrimitiveAPI
```

## 属性

<table><thead><tr><th>

属性名

</th><th>

修饰符

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[create](./pro-api.ipcb_primitiveapi.create.md)

</td><td>

</td><td>

(...args: any\[\]) =&gt; [IPCB\_Primitive](./pro-api.ipcb_primitive.md) \| undefined \| Promise&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md)<!-- -->&gt; \| Promise&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md) \| undefined&gt;

</td><td>

</td></tr>
<tr><td>

[delete](./pro-api.ipcb_primitiveapi.delete.md)

</td><td>

</td><td>

(primitiveIds: string \| any \| Array&lt;string&gt; \| Array&lt;any&gt;) =&gt; boolean \| Promise&lt;boolean&gt;

</td><td>

</td></tr>
<tr><td>

[get](./pro-api.ipcb_primitiveapi.get.md)

</td><td>

</td><td>

{ (primitiveIds: string): [IPCB\_Primitive](./pro-api.ipcb_primitive.md) \| undefined \| Promise&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md) \| undefined&gt;; (primitiveIds: Array&lt;string&gt;): Array&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md)<!-- -->&gt; \| Promise&lt;Array&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md)<!-- -->&gt;&gt;; }

</td><td>

</td></tr>
<tr><td>

[getAll](./pro-api.ipcb_primitiveapi.getall.md)

</td><td>

</td><td>

(...args: any\[\]) =&gt; Array&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md)<!-- -->&gt; \| Promise&lt;Array&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md)<!-- -->&gt;&gt;

</td><td>

</td></tr>
<tr><td>

[getAllPrimitiveId](./pro-api.ipcb_primitiveapi.getallprimitiveid.md)

</td><td>

</td><td>

(...args: any\[\]) =&gt; Array&lt;string&gt; \| Promise&lt;Array&lt;string&gt;&gt;

</td><td>

</td></tr>
<tr><td>

[modify](./pro-api.ipcb_primitiveapi.modify.md)

</td><td>

</td><td>

(primitiveId: string \| any, ...args: any\[\]) =&gt; [IPCB\_Primitive](./pro-api.ipcb_primitive.md) \| undefined \| Promise&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md)<!-- -->&gt; \| Promise&lt;[IPCB\_Primitive](./pro-api.ipcb_primitive.md) \| undefined&gt;

</td><td>

</td></tr>
</tbody></table>
