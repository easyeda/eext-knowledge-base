---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Window](./pro-api.sys_window.md) &gt; [addEventListener](./pro-api.sys_window.addeventlistener.md)

# SYS\_Window.addEventListener() method

新增事件监听

## 签名

```typescript
addEventListener(type: ESYS_WindowEventType, listener: (ev: any) => any, options?: {
        capture?: boolean;
        once?: boolean;
        passive?: boolean;
        signal?: AbortSignal;
    }): ISYS_WindowEventListenerRemovableObject | undefined;
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

type

</td><td>

[ESYS\_WindowEventType](./pro-api.esys_windoweventtype.md)

</td><td>

事件类型，当前支持 `blur` `focus`

</td></tr>
<tr><td>

listener

</td><td>

(ev: any) =&gt; any

</td><td>

事件监听回调

</td></tr>
<tr><td>

options

</td><td>

\{ capture?: boolean; once?: boolean; passive?: boolean; signal?: AbortSignal; \}

</td><td>

_（可选）_ 可选参数

</td></tr>
</tbody></table>

## 返回值

[ISYS\_WindowEventListenerRemovableObject](./pro-api.isys_windoweventlistenerremovableobject.md) \| undefined

事件监听方法，用于移除事件监听，如若为 `undefined` 则表示创建事件监听失败
