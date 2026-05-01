---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_LoadingAndProgressBar](./pro-api.sys_loadingandprogressbar.md) &gt; [showProgressBar](./pro-api.sys_loadingandprogressbar.showprogressbar.md)

# SYS\_LoadingAndProgressBar.showProgressBar() method

显示进度条或设置进度条进度

## 签名

```typescript
showProgressBar(progress?: number, title?: string): void;
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

progress

</td><td>

number

</td><td>

_（可选）_ 进度值，取值范围 `0-100`

</td></tr>
<tr><td>

title

</td><td>

string

</td><td>

_（可选）_ 进度条标题

</td></tr>
</tbody></table>

## 返回值

void

## 备注

当进度达到 `100` 时，进度条将自动销毁
