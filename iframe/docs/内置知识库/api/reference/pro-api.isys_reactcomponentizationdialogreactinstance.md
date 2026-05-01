[Home](./pro-api.md) &gt; [ISYS\_ReactComponentizationDialogReactInstance](./pro-api.isys_reactcomponentizationdialogreactinstance.md)

# ISYS\_ReactComponentizationDialogReactInstance interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

React 实例接口 用于接收扩展的 React 实例

## 签名

```typescript
interface ISYS_ReactComponentizationDialogReactInstance
```

## 备注

此接口定义了从扩展传递的 React 实例的方法。 由于扩展和 pro-api 使用不同的 React 实例，需要通过此接口传递 React 方法。

## 示例

```typescript
const ReactInstance = {
	createContext: React.createContext,
	useContext: React.useContext,
	useRef: React.useRef,
	useEffect: React.useEffect,
	createElement: React.createElement,
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

[createContext](./pro-api.isys_reactcomponentizationdialogreactinstance.createcontext.md)

</td><td>

</td><td>

&lt;T&gt;(defaultValue: T) =&gt; React.Context&lt;T&gt;

</td><td>

**_(ALPHA)_** 创建 React Context

</td></tr>
<tr><td>

[createElement](./pro-api.isys_reactcomponentizationdialogreactinstance.createelement.md)

</td><td>

</td><td>

&lt;P extends Record&lt;string, unknown&gt;&gt;(type: React.ElementType&lt;P&gt;, props?: P \| null, ...children: React.ReactNode\[\]) =&gt; React.ReactElement&lt;P&gt;

</td><td>

**_(ALPHA)_** 创建并返回指定类型的新 React 元素

</td></tr>
<tr><td>

[useContext](./pro-api.isys_reactcomponentizationdialogreactinstance.usecontext.md)

</td><td>

</td><td>

&lt;T&gt;(context: React.Context&lt;T&gt;) =&gt; T

</td><td>

**_(ALPHA)_** 读取和订阅 Context 的值

</td></tr>
<tr><td>

[useEffect](./pro-api.isys_reactcomponentizationdialogreactinstance.useeffect.md)

</td><td>

</td><td>

(effect: () =&gt; undefined \| (() =&gt; undefined), deps?: React.DependencyList) =&gt; void

</td><td>

**_(ALPHA)_** 执行副作用操作

</td></tr>
<tr><td>

[useRef](./pro-api.isys_reactcomponentizationdialogreactinstance.useref.md)

</td><td>

</td><td>

&lt;T&gt;(initialValue: T) =&gt; React.MutableRefObject&lt;T&gt;

</td><td>

**_(ALPHA)_** 创建一个可变的 ref 对象

</td></tr>
</tbody></table>
