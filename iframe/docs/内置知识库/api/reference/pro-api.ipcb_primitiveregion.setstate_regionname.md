---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [IPCB\_PrimitiveRegion](./pro-api.ipcb_primitiveregion.md) &gt; [setState\_RegionName](./pro-api.ipcb_primitiveregion.setstate_regionname.md)

# IPCB\_PrimitiveRegion.setState\_RegionName() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置属性状态：区域名称

## 签名

```typescript
setState_RegionName(regionName?: string): IPCB_PrimitiveRegion;
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

regionName

</td><td>

string

</td><td>

_（可选）_ 区域名称

</td></tr>
</tbody></table>

## 返回值

[IPCB\_PrimitiveRegion](./pro-api.ipcb_primitiveregion.md)

区域图元对象

## 备注

仅当 `ruleType` 为 [EPCB\_PrimitiveRegionRuleType.FOLLOW\_REGION\_RULE](./pro-api.epcb_primitiveregionruletype.md) 时有效，用于匹配区域 DRC 规则

如若 `ruleType` 为 [EPCB\_PrimitiveRegionRuleType.FOLLOW\_REGION\_RULE](./pro-api.epcb_primitiveregionruletype.md) 但 `regionName` 为空，则系统将会自动分配名称
