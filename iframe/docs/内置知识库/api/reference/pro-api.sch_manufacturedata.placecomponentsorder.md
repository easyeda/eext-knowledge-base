---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_ManufactureData](./pro-api.sch_manufacturedata.md) &gt; [placeComponentsOrder](./pro-api.sch_manufacturedata.placecomponentsorder.md)

# SCH\_ManufactureData.placeComponentsOrder() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

元件下单

## 签名

```typescript
placeComponentsOrder(interactive?: boolean, ignoreWarning?: boolean): Promise<boolean>;
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

interactive

</td><td>

boolean

</td><td>

_（可选）_ 是否启用交互式检查

如若启用，则会存在弹窗等待用户进行交互，且无法使用 `ignoreWarning` 参数忽略警告， 即 `ignoreWarning` 参数将被忽略；

如若禁用，则在调用后不会有任何 EDA 内部弹窗，程序执行静默检查， 如若达成下单条件，将返回 `true` 并在新标签页打开下单页面

</td></tr>
<tr><td>

ignoreWarning

</td><td>

boolean

</td><td>

_（可选）_ 在非交互式检查时忽略警告

如果设置为 `true`<!-- -->，将会忽略所有检查警告项并尽可能生成下单资料；

如果设置为 `false`<!-- -->，存在任意警告将中断执行并返回 `false` 的结果

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

是否通过下单检查
