[Home](./pro-api.md) &gt; [ISCH\_PrimitiveComponentPin](./pro-api.isch_primitivecomponentpin.md)

# ISCH\_PrimitiveComponentPin class

器件引脚图元

## 签名

```typescript
declare class ISCH_PrimitiveComponentPin extends ISCH_PrimitivePin
```
**扩展自：**[ISCH\_PrimitivePin](./pro-api.isch_primitivepin.md)

## 备注

器件引脚图元是一个特殊的图元，它指的是在原理图画布上关联到符号的引脚

器件引脚图元仅可更改 `pinNumber`<!-- -->、`noConnected` 属性，其它所有属性均为只读， 并且你只能通过 [器件类的 getAllPinsByPrimitiveId 方法](./pro-api.sch_primitivecomponent.getallpinsbyprimitiveid.md) 或  获取到器件引脚图元

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

[primitiveType](./pro-api.isch_primitivecomponentpin.primitivetype.md)

</td><td>

`protected`

`readonly`

</td><td>

[ESCH\_PrimitiveType.COMPONENT\_PIN](./pro-api.esch_primitivetype.md)

</td><td>

图元类型

</td></tr>
</tbody></table>

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[getState\_NoConnected()](./pro-api.isch_primitivecomponentpin.getstate_noconnected.md)

</td><td>

</td><td>

获取属性状态：是否存在非连接标识

</td></tr>
<tr><td>

[setState\_NoConnected(noConnected)](./pro-api.isch_primitivecomponentpin.setstate_noconnected.md)

</td><td>

</td><td>

设置属性状态：是否存在非连接标识

</td></tr>
</tbody></table>
