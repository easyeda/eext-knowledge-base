---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Timer](./pro-api.sys_timer.md) &gt; [setTimeoutTimer](./pro-api.sys_timer.settimeouttimer.md)

# SYS\_Timer.setTimeoutTimer() method

设置单次定时器

## 签名

```typescript
setTimeoutTimer(id: string, timeout: number, callFn: (...args: any) => void, ...args: any): boolean;
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

id

</td><td>

string

</td><td>

定时器 ID

</td></tr>
<tr><td>

timeout

</td><td>

number

</td><td>

定时时间，单位 ms

</td></tr>
<tr><td>

callFn

</td><td>

(...args: any) =&gt; void

</td><td>

定时调用函数

</td></tr>
<tr><td>

args

</td><td>

any

</td><td>

传给定时调用函数的参数

</td></tr>
</tbody></table>

## 返回值

boolean

定时器是否设置成功

## 备注

如果遇到 ID 重复的定时器，则之前设置的定时器将被清除
