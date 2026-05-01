[Home](./pro-api.md) &gt; [ISYS\_ReactComponentizationDialogInterface](./pro-api.isys_reactcomponentizationdialoginterface.md)

# ISYS\_ReactComponentizationDialogInterface interface

> This API is provided as an alpha preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

React 组件化弹出窗口接口

## 签名

```typescript
interface ISYS_ReactComponentizationDialogInterface
```

## 备注

此接口提供了创建 React 组件化弹出窗口所需的所有功能。 通过此接口，用户可以使用 lc-editor-design 提供的预制组件创建自定义弹窗。

## 示例

```typescript
const { Components, WorkerPortal, VirtualRender } = await eda.sys_Dialog.createReactComponentizationDialogInterface(
  {
    createContext: React.createContext,
    useContext: React.useContext,
    useRef: React.useRef,
    useEffect: React.useEffect,
    createElement: React.createElement,
  },
  {
    default: Reconciler,
    constants: {
      ContinuousEventPriority,
      DiscreteEventPriority,
      DefaultEventPriority,
      ConcurrentRoot,
    },
  },
);

const portal = new WorkerPortal();
const root = new VirtualRender();

function MyDialog() {
  return (
    <Modal defaultTop={100} defaultLeft={100} defaultWidth={800} defaultHeight={600}>
      <Dialog title="My Dialog">
        <Input placeholder="Enter text" />
      </Dialog>
    </Modal>
  );
}

root.render(
  <portal.Provider>
    <MyDialog />
  </portal.Provider>,
);
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

[Components](./pro-api.isys_reactcomponentizationdialoginterface.components.md)

</td><td>

</td><td>

[LC\_DESIGN\_COMPONENTS](./pro-api.lc_design_components.md)

</td><td>

**_(ALPHA)_** 预制组件

</td></tr>
<tr><td>

[LC\_DESIGN\_COMPONENTS\_NAMES](./pro-api.isys_reactcomponentizationdialoginterface.lc_design_components_names.md)

</td><td>

</td><td>

typeof [LC\_DESIGN\_COMPONENTS\_NAMES](./pro-api.lc_design_components_names.md)

</td><td>

**_(ALPHA)_** 组件名称常量

</td></tr>
<tr><td>

[VirtualRender](./pro-api.isys_reactcomponentizationdialoginterface.virtualrender.md)

</td><td>

</td><td>

new () =&gt; [ISYS\_ReactComponentizationDialogVirtualRender](./pro-api.isys_reactcomponentizationdialogvirtualrender.md)

</td><td>

**_(ALPHA)_** VirtualRender 类

</td></tr>
<tr><td>

[WorkerPortal](./pro-api.isys_reactcomponentizationdialoginterface.workerportal.md)

</td><td>

</td><td>

new () =&gt; [ISYS\_ReactComponentizationDialogWorkerPortal](./pro-api.isys_reactcomponentizationdialogworkerportal.md)

</td><td>

**_(ALPHA)_** WorkerPortal 类

</td></tr>
</tbody></table>
