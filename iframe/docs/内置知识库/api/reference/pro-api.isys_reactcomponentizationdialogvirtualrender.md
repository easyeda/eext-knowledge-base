[Home](./pro-api.md) &gt; [ISYS\_ReactComponentizationDialogVirtualRender](./pro-api.isys_reactcomponentizationdialogvirtualrender.md)

# ISYS\_ReactComponentizationDialogVirtualRender interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

VirtualRender 类接口 用于在虚拟环境中渲染 React 组件

## 签名

```typescript
interface ISYS_ReactComponentizationDialogVirtualRender
```

## 备注

VirtualRender 使用 react-reconciler 实现虚拟 DOM 渲染， 不直接操作真实 DOM，而是通过消息机制与 EditorDesignPortal 通信。

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

[render](./pro-api.isys_reactcomponentizationdialogvirtualrender.render.md)

</td><td>

</td><td>

(element: React.ReactNode) =&gt; void

</td><td>

**_(ALPHA)_** 渲染 React 元素

</td></tr>
</tbody></table>
