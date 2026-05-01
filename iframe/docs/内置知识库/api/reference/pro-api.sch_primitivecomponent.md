[Home](./pro-api.md) &gt; [SCH\_PrimitiveComponent](./pro-api.sch_primitivecomponent.md)

# SCH\_PrimitiveComponent class

原理图 &amp; 符号 / 器件图元类

## 签名

```typescript
declare class SCH_PrimitiveComponent implements ISCH_PrimitiveAPI
```
**实现自：**[ISCH\_PrimitiveAPI](./pro-api.isch_primitiveapi.md)

## 备注

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[create(component, x, y, subPartName, rotation, mirror, addIntoBom, addIntoPcb)](./pro-api.sch_primitivecomponent.create.md)

</td><td>

</td><td>

**_(BETA)_** 创建器件

</td></tr>
<tr><td>

[createNetFlag(identification, net, x, y, rotation, mirror)](./pro-api.sch_primitivecomponent.createnetflag.md)

</td><td>

</td><td>

**_(BETA)_** 创建网络标识

</td></tr>
<tr><td>

[createNetPort(direction, net, x, y, rotation, mirror)](./pro-api.sch_primitivecomponent.createnetport.md)

</td><td>

</td><td>

**_(BETA)_** 创建网络端口

</td></tr>
<tr><td>

[createShortCircuitFlag(x, y, rotation, mirror)](./pro-api.sch_primitivecomponent.createshortcircuitflag.md)

</td><td>

</td><td>

**_(BETA)_** 创建短接标识

</td></tr>
<tr><td>

[delete(primitiveIds)](./pro-api.sch_primitivecomponent.delete.md)

</td><td>

</td><td>

**_(BETA)_** 删除器件

</td></tr>
<tr><td>

[get(primitiveIds)](./pro-api.sch_primitivecomponent.get.md)

</td><td>

</td><td>

**_(BETA)_** 获取器件

</td></tr>
<tr><td>

[get(primitiveIds)](./pro-api.sch_primitivecomponent.get_1.md)

</td><td>

</td><td>

**_(BETA)_** 获取器件

</td></tr>
<tr><td>

[getAll(componentType, allSchematicPages)](./pro-api.sch_primitivecomponent.getall.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有器件

</td></tr>
<tr><td>

[getAllPinsByPrimitiveId(primitiveId)](./pro-api.sch_primitivecomponent.getallpinsbyprimitiveid.md)

</td><td>

</td><td>

**_(BETA)_** 获取器件关联的所有引脚

</td></tr>
<tr><td>

[getAllPrimitiveId(componentType, allSchematicPages)](./pro-api.sch_primitivecomponent.getallprimitiveid.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有器件的图元 ID

</td></tr>
<tr><td>

[getAllPropertyNames()](./pro-api.sch_primitivecomponent.getallpropertynames.md)

</td><td>

</td><td>

**_(BETA)_** 获取所有器件的所有属性名称集合

</td></tr>
<tr><td>

[modify(primitiveId, property)](./pro-api.sch_primitivecomponent.modify.md)

</td><td>

</td><td>

**_(BETA)_** 修改器件

</td></tr>
<tr><td>

[placeComponentWithMouse(component, subPartName)](./pro-api.sch_primitivecomponent.placecomponentwithmouse.md)

</td><td>

</td><td>

**_(BETA)_** 使用鼠标放置器件

</td></tr>
<tr><td>

[setNetFlagComponentUuid\_AnalogGround(component)](./pro-api.sch_primitivecomponent.setnetflagcomponentuuid_analogground.md)

</td><td>

</td><td>

**_(BETA)_** 设置在扩展 API 中 AnalogGround 网络标识关联的器件 UUID

</td></tr>
<tr><td>

[setNetFlagComponentUuid\_Ground(component)](./pro-api.sch_primitivecomponent.setnetflagcomponentuuid_ground.md)

</td><td>

</td><td>

**_(BETA)_** 设置在扩展 API 中 Ground 网络标识关联的器件 UUID

</td></tr>
<tr><td>

[setNetFlagComponentUuid\_Power(component)](./pro-api.sch_primitivecomponent.setnetflagcomponentuuid_power.md)

</td><td>

</td><td>

**_(BETA)_** 设置在扩展 API 中 Power 网络标识关联的器件 UUID

</td></tr>
<tr><td>

[setNetFlagComponentUuid\_ProtectGround(component)](./pro-api.sch_primitivecomponent.setnetflagcomponentuuid_protectground.md)

</td><td>

</td><td>

**_(BETA)_** 设置在扩展 API 中 ProtectGround 网络标识关联的器件 UUID

</td></tr>
<tr><td>

[setNetPortComponentUuid\_BI(component)](./pro-api.sch_primitivecomponent.setnetportcomponentuuid_bi.md)

</td><td>

</td><td>

**_(BETA)_** 设置在扩展 API 中 BI 网络端口关联的器件 UUID

</td></tr>
<tr><td>

[setNetPortComponentUuid\_IN(component)](./pro-api.sch_primitivecomponent.setnetportcomponentuuid_in.md)

</td><td>

</td><td>

**_(BETA)_** 设置在扩展 API 中 IN 网络端口关联的器件 UUID

</td></tr>
<tr><td>

[setNetPortComponentUuid\_OUT(component)](./pro-api.sch_primitivecomponent.setnetportcomponentuuid_out.md)

</td><td>

</td><td>

**_(BETA)_** 设置在扩展 API 中 OUT 网络端口关联的器件 UUID

</td></tr>
</tbody></table>
