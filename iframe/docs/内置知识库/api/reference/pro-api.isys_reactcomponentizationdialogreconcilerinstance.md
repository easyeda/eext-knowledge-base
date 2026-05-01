[Home](./pro-api.md) &gt; [ISYS\_ReactComponentizationDialogReconcilerInstance](./pro-api.isys_reactcomponentizationdialogreconcilerinstance.md)

# ISYS\_ReactComponentizationDialogReconcilerInstance interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

React Reconciler 实例接口 用于接收扩展的 react-reconciler 实例

## 签名

```typescript
interface ISYS_ReactComponentizationDialogReconcilerInstance
```

## 备注

此接口定义了从扩展传递的 react-reconciler 实例。 react-reconciler 是 React 的自定义渲染器，用于实现虚拟 DOM 渲染。

## 示例

```typescript
const ReconcilerInstance = {
	default: Reconciler,
	constants: {
		ContinuousEventPriority,
		DiscreteEventPriority,
		DefaultEventPriority,
		ConcurrentRoot,
	},
};
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

[constants](./pro-api.isys_reactcomponentizationdialogreconcilerinstance.constants.md)

</td><td>

</td><td>

\{ ContinuousEventPriority: number; DiscreteEventPriority: number; DefaultEventPriority: number; ConcurrentRoot: number; \}

</td><td>

**_(ALPHA)_** Reconciler 常量

</td></tr>
<tr><td>

[default](./pro-api.isys_reactcomponentizationdialogreconcilerinstance.default.md)

</td><td>

</td><td>

any

</td><td>

**_(ALPHA)_** Reconciler 构造函数

</td></tr>
</tbody></table>
