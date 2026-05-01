[Home](./pro-api.md) &gt; [ISCH\_PrimitiveAPI](./pro-api.isch_primitiveapi.md)

# ISCH\_PrimitiveAPI interface

原理图图元接口

## 签名

```typescript
interface ISCH_PrimitiveAPI
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

[create](./pro-api.isch_primitiveapi.create.md)

</td><td>

</td><td>

(...args: any\[\]) =&gt; [ISCH\_Primitive](./pro-api.isch_primitive.md) \| undefined \| Promise&lt;[ISCH\_Primitive](./pro-api.isch_primitive.md)<!-- -->&gt; \| Promise&lt;[ISCH\_Primitive](./pro-api.isch_primitive.md) \| undefined&gt;

</td><td>

</td></tr>
<tr><td>

[delete](./pro-api.isch_primitiveapi.delete.md)

</td><td>

</td><td>

(primitiveIds: string \| any \| Array&lt;string&gt; \| Array&lt;any&gt;) =&gt; boolean \| Promise&lt;boolean&gt;

</td><td>

</td></tr>
<tr><td>

[get](./pro-api.isch_primitiveapi.get.md)

</td><td>

</td><td>

{ (primitiveIds: string): [ISCH\_Primitive](./pro-api.isch_primitive.md) \| undefined \| Promise&lt;[ISCH\_Primitive](./pro-api.isch_primitive.md) \| undefined&gt;; (primitiveIds: Array&lt;string&gt;): Array&lt;[ISCH\_Primitive](./pro-api.isch_primitive.md)<!-- -->&gt; \| Promise&lt;Array&lt;[ISCH\_Primitive](./pro-api.isch_primitive.md)<!-- -->&gt;&gt;; }

</td><td>

</td></tr>
<tr><td>

[getAll](./pro-api.isch_primitiveapi.getall.md)

</td><td>

</td><td>

(...args: any\[\]) =&gt; Array&lt;[ISCH\_Primitive](./pro-api.isch_primitive.md)<!-- -->&gt; \| Promise&lt;Array&lt;[ISCH\_Primitive](./pro-api.isch_primitive.md)<!-- -->&gt;&gt;

</td><td>

</td></tr>
<tr><td>

[getAllPrimitiveId](./pro-api.isch_primitiveapi.getallprimitiveid.md)

</td><td>

</td><td>

(...args: any\[\]) =&gt; Array&lt;string&gt; \| Promise&lt;Array&lt;string&gt;&gt;

</td><td>

</td></tr>
<tr><td>

[modify](./pro-api.isch_primitiveapi.modify.md)

</td><td>

</td><td>

(primitiveId: string \| any, ...args: any\[\]) =&gt; [ISCH\_Primitive](./pro-api.isch_primitive.md) \| undefined \| Promise&lt;[ISCH\_Primitive](./pro-api.isch_primitive.md)<!-- -->&gt; \| Promise&lt;[ISCH\_Primitive](./pro-api.isch_primitive.md) \| undefined&gt;

</td><td>

</td></tr>
</tbody></table>
