[Home](./pro-api.md) &gt; [SYS\_Window](./pro-api.sys_window.md)

# SYS\_Window class

系统 / 窗口类

## 签名

```typescript
declare class SYS_Window
```

## 备注

为了保证安全性，仅提供有限的窗口跳转与监听支持，更多操作请使用内联框架窗口 [SYS\_IFrame](./pro-api.sys_iframe.md)

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[addEventListener(type, listener, options)](./pro-api.sys_window.addeventlistener.md)

</td><td>

</td><td>

新增事件监听

</td></tr>
<tr><td>

[getCurrentTheme()](./pro-api.sys_window.getcurrenttheme.md)

</td><td>

</td><td>

获取当前主题

</td></tr>
<tr><td>

[getUrlAnchor()](./pro-api.sys_window.geturlanchor.md)

</td><td>

</td><td>

获取 URL 锚点

</td></tr>
<tr><td>

[getUrlParam(key)](./pro-api.sys_window.geturlparam.md)

</td><td>

</td><td>

获取 URL 参数

</td></tr>
<tr><td>

[open(url, target)](./pro-api.sys_window.open.md)

</td><td>

</td><td>

打开资源窗口

</td></tr>
<tr><td>

[openUI(uiName, args)](./pro-api.sys_window.openui.md)

</td><td>

</td><td>

打开 UI 窗口

</td></tr>
<tr><td>

[removeEventListener(removableObject)](./pro-api.sys_window.removeeventlistener.md)

</td><td>

</td><td>

移除事件监听

</td></tr>
<tr><td>

[urlPushState(url)](./pro-api.sys_window.urlpushstate.md)

</td><td>

</td><td>

追加新的 URL 历史记录栈信息

</td></tr>
<tr><td>

[urlReplaceState(url)](./pro-api.sys_window.urlreplacestate.md)

</td><td>

</td><td>

修改当前的 URL 历史记录栈信息

</td></tr>
</tbody></table>
