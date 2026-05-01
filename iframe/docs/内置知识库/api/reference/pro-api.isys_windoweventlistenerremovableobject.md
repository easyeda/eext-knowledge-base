[Home](./pro-api.md) &gt; [ISYS\_WindowEventListenerRemovableObject](./pro-api.isys_windoweventlistenerremovableobject.md)

# ISYS\_WindowEventListenerRemovableObject interface

窗口事件监听可移除对象

## 签名

```typescript
interface ISYS_WindowEventListenerRemovableObject
```

## 备注

本对象从 [addEventListener](./pro-api.sys_window.addeventlistener.md) 获取，并可用于移除创建的事件监听，仅需将其传入 [removeEventListener](./pro-api.sys_window.removeeventlistener.md)

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

[listener](./pro-api.isys_windoweventlistenerremovableobject.listener.md)

</td><td>

</td><td>

(ev: any) =&gt; any

</td><td>

</td></tr>
<tr><td>

[options?](./pro-api.isys_windoweventlistenerremovableobject.options.md)

</td><td>

</td><td>

\{ capture?: boolean; \}

</td><td>

_(Optional)_

</td></tr>
<tr><td>

[type](./pro-api.isys_windoweventlistenerremovableobject.type.md)

</td><td>

</td><td>

[ESYS\_WindowEventType](./pro-api.esys_windoweventtype.md)

</td><td>

</td></tr>
</tbody></table>
