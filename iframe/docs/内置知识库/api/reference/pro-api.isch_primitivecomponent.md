[Home](./pro-api.md) &gt; [ISCH\_PrimitiveComponent](./pro-api.isch_primitivecomponent.md)

# ISCH\_PrimitiveComponent class

器件图元

## 签名

```typescript
declare class ISCH_PrimitiveComponent implements ISCH_Primitive
```
**实现自：**[ISCH\_Primitive](./pro-api.isch_primitive.md)

## 备注

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

[async](./pro-api.isch_primitivecomponent.async.md)

</td><td>

`protected`

</td><td>

boolean

</td><td>

异步

</td></tr>
<tr><td>

[designator?](./pro-api.isch_primitivecomponent.designator.md)

</td><td>

`protected`

</td><td>

string

</td><td>

_（可选）_ Component 属性：位号

</td></tr>
<tr><td>

[mirror](./pro-api.isch_primitivecomponent.mirror.md)

</td><td>

`protected`

</td><td>

boolean

</td><td>

是否镜像

</td></tr>
<tr><td>

[name?](./pro-api.isch_primitivecomponent.name.md)

</td><td>

`protected`

</td><td>

string

</td><td>

_（可选）_ Component 属性：名称

</td></tr>
<tr><td>

[otherProperty?](./pro-api.isch_primitivecomponent.otherproperty.md)

</td><td>

`protected`

</td><td>

\{ \[key: string\]: string \| number \| boolean; \}

</td><td>

_（可选）_ 其它参数

</td></tr>
<tr><td>

[primitiveId?](./pro-api.isch_primitivecomponent.primitiveid.md)

</td><td>

`protected`

</td><td>

string

</td><td>

_（可选）_ 图元 ID

</td></tr>
<tr><td>

[rotation](./pro-api.isch_primitivecomponent.rotation.md)

</td><td>

`protected`

</td><td>

number

</td><td>

旋转角度

</td></tr>
<tr><td>

[x](./pro-api.isch_primitivecomponent.x.md)

</td><td>

`protected`

</td><td>

number

</td><td>

坐标 X

</td></tr>
<tr><td>

[y](./pro-api.isch_primitivecomponent.y.md)

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

[done()](./pro-api.isch_primitivecomponent.done.md)

</td><td>

</td><td>

**_(BETA)_** 将对图元的更改应用到画布

</td></tr>
<tr><td>

[getState\_AddIntoBom()](./pro-api.isch_primitivecomponent.getstate_addintobom.md)

</td><td>

</td><td>

获取属性状态：是否加入 BOM

</td></tr>
<tr><td>

[getState\_AddIntoPcb()](./pro-api.isch_primitivecomponent.getstate_addintopcb.md)

</td><td>

</td><td>

获取属性状态：是否转到 PCB

</td></tr>
<tr><td>

[getState\_Component()](./pro-api.isch_primitivecomponent.getstate_component.md)

</td><td>

</td><td>

获取属性状态：关联库器件

</td></tr>
<tr><td>

[getState\_ComponentType()](./pro-api.isch_primitivecomponent.getstate_componenttype.md)

</td><td>

</td><td>

获取属性状态：器件类型

</td></tr>
<tr><td>

[getState\_Designator()](./pro-api.isch_primitivecomponent.getstate_designator.md)

</td><td>

</td><td>

获取属性状态：位号

</td></tr>
<tr><td>

[getState\_Footprint()](./pro-api.isch_primitivecomponent.getstate_footprint.md)

</td><td>

</td><td>

获取属性状态：关联库封装

</td></tr>
<tr><td>

[getState\_Manufacturer()](./pro-api.isch_primitivecomponent.getstate_manufacturer.md)

</td><td>

</td><td>

获取属性状态：制造商

</td></tr>
<tr><td>

[getState\_ManufacturerId()](./pro-api.isch_primitivecomponent.getstate_manufacturerid.md)

</td><td>

</td><td>

获取属性状态：制造商编号

</td></tr>
<tr><td>

[getState\_Mirror()](./pro-api.isch_primitivecomponent.getstate_mirror.md)

</td><td>

</td><td>

获取属性状态：是否镜像

</td></tr>
<tr><td>

[getState\_Name()](./pro-api.isch_primitivecomponent.getstate_name.md)

</td><td>

</td><td>

获取属性状态：名称

</td></tr>
<tr><td>

[getState\_Net()](./pro-api.isch_primitivecomponent.getstate_net.md)

</td><td>

</td><td>

获取属性状态：网络名称

</td></tr>
<tr><td>

[getState\_OtherProperty()](./pro-api.isch_primitivecomponent.getstate_otherproperty.md)

</td><td>

</td><td>

获取属性状态：其它参数

</td></tr>
<tr><td>

[getState\_PrimitiveId()](./pro-api.isch_primitivecomponent.getstate_primitiveid.md)

</td><td>

</td><td>

获取属性状态：图元 ID

</td></tr>
<tr><td>

[getState\_PrimitiveType()](./pro-api.isch_primitivecomponent.getstate_primitivetype.md)

</td><td>

</td><td>

获取属性状态：图元类型

</td></tr>
<tr><td>

[getState\_Rotation()](./pro-api.isch_primitivecomponent.getstate_rotation.md)

</td><td>

</td><td>

获取属性状态：旋转角度

</td></tr>
<tr><td>

[getState\_SubPartName()](./pro-api.isch_primitivecomponent.getstate_subpartname.md)

</td><td>

</td><td>

获取属性状态：子部件名称

</td></tr>
<tr><td>

[getState\_Supplier()](./pro-api.isch_primitivecomponent.getstate_supplier.md)

</td><td>

</td><td>

获取属性状态：供应商

</td></tr>
<tr><td>

[getState\_SupplierId()](./pro-api.isch_primitivecomponent.getstate_supplierid.md)

</td><td>

</td><td>

获取属性状态：供应商编号

</td></tr>
<tr><td>

[getState\_Symbol()](./pro-api.isch_primitivecomponent.getstate_symbol.md)

</td><td>

</td><td>

获取属性状态：关联库符号

</td></tr>
<tr><td>

[getState\_UniqueId()](./pro-api.isch_primitivecomponent.getstate_uniqueid.md)

</td><td>

</td><td>

获取属性状态：唯一 ID

</td></tr>
<tr><td>

[getState\_X()](./pro-api.isch_primitivecomponent.getstate_x.md)

</td><td>

</td><td>

获取属性状态：坐标 X

</td></tr>
<tr><td>

[getState\_Y()](./pro-api.isch_primitivecomponent.getstate_y.md)

</td><td>

</td><td>

获取属性状态：坐标 Y

</td></tr>
<tr><td>

[isAsync()](./pro-api.isch_primitivecomponent.isasync.md)

</td><td>

</td><td>

查询图元是否为异步图元

</td></tr>
<tr><td>

[reset()](./pro-api.isch_primitivecomponent.reset.md)

</td><td>

</td><td>

**_(BETA)_** 将异步图元重置为当前画布状态

</td></tr>
<tr><td>

[setState\_AddIntoBom(addIntoBom)](./pro-api.isch_primitivecomponent.setstate_addintobom.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：是否加入 BOM

</td></tr>
<tr><td>

[setState\_AddIntoPcb(addIntoPcb)](./pro-api.isch_primitivecomponent.setstate_addintopcb.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：是否转到 PCB

</td></tr>
<tr><td>

[setState\_Designator(designator)](./pro-api.isch_primitivecomponent.setstate_designator.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：位号

</td></tr>
<tr><td>

[setState\_Manufacturer(manufacturer)](./pro-api.isch_primitivecomponent.setstate_manufacturer.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：制造商

</td></tr>
<tr><td>

[setState\_ManufacturerId(manufacturerId)](./pro-api.isch_primitivecomponent.setstate_manufacturerid.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：制造商编号

</td></tr>
<tr><td>

[setState\_Mirror(mirror)](./pro-api.isch_primitivecomponent.setstate_mirror.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：是否镜像

</td></tr>
<tr><td>

[setState\_Name(name)](./pro-api.isch_primitivecomponent.setstate_name.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：名称

</td></tr>
<tr><td>

[setState\_Net(net)](./pro-api.isch_primitivecomponent.setstate_net.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：网络名称

</td></tr>
<tr><td>

[setState\_OtherProperty(otherProperty)](./pro-api.isch_primitivecomponent.setstate_otherproperty.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：其它参数

</td></tr>
<tr><td>

[setState\_Rotation(rotation)](./pro-api.isch_primitivecomponent.setstate_rotation.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：旋转角度

</td></tr>
<tr><td>

[setState\_Supplier(supplier)](./pro-api.isch_primitivecomponent.setstate_supplier.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：供应商

</td></tr>
<tr><td>

[setState\_SupplierId(supplierId)](./pro-api.isch_primitivecomponent.setstate_supplierid.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：供应商编号

</td></tr>
<tr><td>

[setState\_UniqueId(uniqueId)](./pro-api.isch_primitivecomponent.setstate_uniqueid.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：唯一 ID

</td></tr>
<tr><td>

[setState\_X(x)](./pro-api.isch_primitivecomponent.setstate_x.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：坐标 X

</td></tr>
<tr><td>

[setState\_Y(y)](./pro-api.isch_primitivecomponent.setstate_y.md)

</td><td>

</td><td>

**_(BETA)_** 设置属性状态：坐标 Y

</td></tr>
<tr><td>

[toAsync()](./pro-api.isch_primitivecomponent.toasync.md)

</td><td>

</td><td>

将图元转换为异步图元

</td></tr>
<tr><td>

[toSync()](./pro-api.isch_primitivecomponent.tosync.md)

</td><td>

</td><td>

将图元转换为同步图元

</td></tr>
</tbody></table>
