[Home](./pro-api.md) &gt; [ISYS\_ReactComponentizationDialogWorkerPortal](./pro-api.isys_reactcomponentizationdialogworkerportal.md)

# ISYS\_ReactComponentizationDialogWorkerPortal interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

WorkerPortal 类接口 用于管理组件的生命周期和事件处理

## 签名

```typescript
interface ISYS_ReactComponentizationDialogWorkerPortal
```

## 备注

WorkerPortal 负责在虚拟环境中创建、更新和销毁组件， 并通过消息机制与 EditorDesignPortal 通信。

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

[bindEvent](./pro-api.isys_reactcomponentizationdialogworkerportal.bindevent.md)

</td><td>

</td><td>

(handle: string, callback: (event: unknown) =&gt; void) =&gt; void

</td><td>

**_(ALPHA)_** 绑定事件处理器

</td></tr>
<tr><td>

[createComponent](./pro-api.isys_reactcomponentizationdialogworkerportal.createcomponent.md)

</td><td>

</td><td>

(handle: string, type: string, props: Record&lt;string, unknown&gt;, parent: string) =&gt; void

</td><td>

**_(ALPHA)_** 创建组件

</td></tr>
<tr><td>

[detachComponent](./pro-api.isys_reactcomponentizationdialogworkerportal.detachcomponent.md)

</td><td>

</td><td>

(handle: string) =&gt; void

</td><td>

**_(ALPHA)_** 销毁组件

</td></tr>
<tr><td>

[dispatchEvent](./pro-api.isys_reactcomponentizationdialogworkerportal.dispatchevent.md)

</td><td>

</td><td>

(handle: string, event: unknown) =&gt; void

</td><td>

**_(ALPHA)_** 触发事件

</td></tr>
<tr><td>

[Provider](./pro-api.isys_reactcomponentizationdialogworkerportal.provider.md)

</td><td>

</td><td>

React.ComponentType&lt;React.PropsWithChildren&lt;unknown&gt;&gt;

</td><td>

**_(ALPHA)_** Provider 组件 用于提供 PortalContext 给子组件

</td></tr>
<tr><td>

[updateComponent](./pro-api.isys_reactcomponentizationdialogworkerportal.updatecomponent.md)

</td><td>

</td><td>

(handle: string, props: Record&lt;string, unknown&gt;) =&gt; void

</td><td>

**_(ALPHA)_** 更新组件

</td></tr>
</tbody></table>
