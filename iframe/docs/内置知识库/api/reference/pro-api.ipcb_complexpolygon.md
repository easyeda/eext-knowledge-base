[Home](./pro-api.md) &gt; [IPCB\_ComplexPolygon](./pro-api.ipcb_complexpolygon.md)

# IPCB\_ComplexPolygon class

复杂多边形

## 签名

```typescript
declare class IPCB_ComplexPolygon
```

## 备注

复杂多边形可以包含多个单多边形，通过 [fill-rule](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule) 将其组合，以实现多边形的布尔运算。 目前嘉立创 EDA 专业版固定使用 [nonzero](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Attribute/fill-rule#nonzero) 这个 fill-rule。

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[addSource(complexPolygon)](./pro-api.ipcb_complexpolygon.addsource.md)

</td><td>

</td><td>

添加多边形数据

</td></tr>
<tr><td>

[getSource()](./pro-api.ipcb_complexpolygon.getsource.md)

</td><td>

</td><td>

获取多边形数据

</td></tr>
<tr><td>

[getSourceStrictComplex()](./pro-api.ipcb_complexpolygon.getsourcestrictcomplex.md)

</td><td>

</td><td>

获取复杂多边形数据

</td></tr>
</tbody></table>
