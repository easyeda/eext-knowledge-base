[Home](./pro-api.md) &gt; [ISCH\_PrimitivePin](./pro-api.isch_primitivepin.md)

# ISCH\_PrimitivePin class

引脚图元

## 签名

```typescript
declare class ISCH_PrimitivePin implements ISCH_Primitive
```
**实现自：**[ISCH\_Primitive](./pro-api.isch_primitive.md)

## 备注

引脚图元仅符号编辑器可用，在原理图图页内，关联到符号的引脚被称为 [器件引脚图元](./pro-api.isch_primitivecomponentpin.md)

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

[async](./pro-api.isch_primitivepin.async.md)

</td><td>

`protected`

</td><td>

boolean

</td><td>

异步

</td></tr>
<tr><td>

[pinColor](./pro-api.isch_primitivepin.pincolor.md)

</td><td>

`protected`

</td><td>

string \| null

</td><td>

引脚颜色

</td></tr>
<tr><td>

[pinLength](./pro-api.isch_primitivepin.pinlength.md)

</td><td>

`protected`

</td><td>

number

</td><td>

引脚长度

</td></tr>
<tr><td>

[pinName](./pro-api.isch_primitivepin.pinname.md)

</td><td>

`protected`

</td><td>

string

</td><td>

引脚名称

</td></tr>
<tr><td>

[pinNumber](./pro-api.isch_primitivepin.pinnumber.md)

</td><td>

`protected`

</td><td>

string

</td><td>

引脚编号

</td></tr>
<tr><td>

[pinShape](./pro-api.isch_primitivepin.pinshape.md)

</td><td>

`protected`

</td><td>

[ESCH\_PrimitivePinShape](./pro-api.esch_primitivepinshape.md)

</td><td>

引脚形状

</td></tr>
<tr><td>

[pinType](./pro-api.isch_primitivepin.pintype.md)

</td><td>

`protected`

</td><td>

[ESCH\_PrimitivePinType](./pro-api.esch_primitivepintype.md)

</td><td>

引脚类型

</td></tr>
<tr><td>

[primitiveId?](./pro-api.isch_primitivepin.primitiveid.md)

</td><td>

`protected`

</td><td>

string

</td><td>

_（可选）_ 图元 ID

</td></tr>
<tr><td>

[primitiveType](./pro-api.isch_primitivepin.primitivetype.md)

</td><td>

`protected`

`readonly`

</td><td>

[ESCH\_PrimitiveType](./pro-api.esch_primitivetype.md)

</td><td>

图元类型

</td></tr>
<tr><td>

[rotation](./pro-api.isch_primitivepin.rotation.md)

</td><td>

`protected`

</td><td>

number

</td><td>

旋转角度

</td></tr>
<tr><td>

[x](./pro-api.isch_primitivepin.x.md)

</td><td>

`protected`

</td><td>

number

</td><td>

坐标 X

</td></tr>
<tr><td>

[y](./pro-api.isch_primitivepin.y.md)

</td><td>

`protected`

</td><td>

number

</td><td>

坐标 Y

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

[done()](./pro-api.isch_primitivepin.done.md)

</td><td>

</td><td>

**_(BETA)_** 将对图元的更改应用到画布

</td></tr>
<tr><td>

[getState\_OtherProperty()](./pro-api.isch_primitivepin.getstate_otherproperty.md)

</td><td>

</td><td>

获取属性状态：其它参数

</td></tr>
<tr><td>

[getState\_PinColor()](./pro-api.isch_primitivepin.getstate_pincolor.md)

</td><td>

</td><td>

获取属性状态：引脚颜色

</td></tr>
<tr><td>

[getState\_PinLength()](./pro-api.isch_primitivepin.getstate_pinlength.md)

</td><td>

</td><td>

获取属性状态：引脚长度

</td></tr>
<tr><td>

[getState\_PinName()](./pro-api.isch_primitivepin.getstate_pinname.md)

</td><td>

</td><td>

获取属性状态：引脚名称

</td></tr>
<tr><td>

[getState\_PinNumber()](./pro-api.isch_primitivepin.getstate_pinnumber.md)

</td><td>

</td><td>

获取属性状态：引脚编号

</td></tr>
<tr><td>

[getState\_PinShape()](./pro-api.isch_primitivepin.getstate_pinshape.md)

</td><td>

</td><td>

获取属性状态：引脚形状

</td></tr>
<tr><td>

[getState\_pinType()](./pro-api.isch_primitivepin.getstate_pintype.md)

</td><td>

</td><td>

获取属性状态：引脚类型

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./pro-api.isch_primitivepin.getstate_primitiveid.md)

</td><td>

</td><td>

获取属性状态：图元 ID

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./pro-api.isch_primitivepin.getstate_primitivetype.md)

</td><td>

</td><td>

获取属性状态：图元类型

</td></tr>
<tr><td>

[getState\_Rotation()](./pro-api.isch_primitivepin.getstate_rotation.md)

</td><td>

</td><td>

获取属性状态：旋转角度

</td></tr>
<tr><td>

[getState\_X()](./pro-api.isch_primitivepin.getstate_x.md)

</td><td>

</td><td>

获取属性状态：坐标 X

</td></tr>
<tr><td>

[getState\_Y()](./pro-api.isch_primitivepin.getstate_y.md)

</td><td>

</td><td>

获取属性状态：坐标 Y

</td></tr>
<tr><td>

[isAsync()](./pro-api.isch_primitivepin.isasync.md)

</td><td>

</td><td>

查询图元是否为异步图元

</td></tr>
<tr><td>

[reset()](./pro-api.isch_primitivepin.reset.md)

</td><td>

</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态

</td></tr>
<tr><td>

[setState\_OtherProperty(otherProperty)](./pro-api.isch_primitivepin.setstate_otherproperty.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：其它参数

</td></tr>
<tr><td>

[setState\_PinColor(pinColor)](./pro-api.isch_primitivepin.setstate_pincolor.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：引脚颜色

</td></tr>
<tr><td>

[setState\_PinLength(pinLength)](./pro-api.isch_primitivepin.setstate_pinlength.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：引脚长度

</td></tr>
<tr><td>

[setState\_PinName(pinName)](./pro-api.isch_primitivepin.setstate_pinname.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：引脚名称

</td></tr>
<tr><td>

[setState\_PinNumber(pinNumber)](./pro-api.isch_primitivepin.setstate_pinnumber.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：引脚编号

</td></tr>
<tr><td>

[setState\_PinShape(pinShape)](./pro-api.isch_primitivepin.setstate_pinshape.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：引脚形状

</td></tr>
<tr><td>

[setState\_PinType(pinType)](./pro-api.isch_primitivepin.setstate_pintype.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：引脚类型

</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./pro-api.isch_primitivepin.setstate_rotation.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：旋转角度

</td></tr>
<tr><td>

[setState\_X(x)](./pro-api.isch_primitivepin.setstate_x.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：坐标 X

</td></tr>
<tr><td>

[setState\_Y(y)](./pro-api.isch_primitivepin.setstate_y.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：坐标 Y

</td></tr>
<tr><td>

[toAsync()](./pro-api.isch_primitivepin.toasync.md)

</td><td>

</td><td>

将图元转换为异步图元

</td></tr>
<tr><td>

[toSync()](./pro-api.isch_primitivepin.tosync.md)

</td><td>

</td><td>

将图元转换为同步图元

</td></tr>
</tbody></table>
