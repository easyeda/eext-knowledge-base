---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Log](./pro-api.sys_log.md) &gt; [sort](./pro-api.sys_log.sort.md)

# SYS\_Log.sort() method

筛选并获取日志条目

## 签名

```typescript
sort(types?: ESYS_LogType | Array<ESYS_LogType>): Promise<Array<ISYS_LogLine>>;
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

types

</td><td>

[ESYS\_LogType](./pro-api.esys_logtype.md) \| Array&lt;[ESYS\_LogType](./pro-api.esys_logtype.md)<!-- -->&gt;

</td><td>

_（可选）_ 日志类型数组，可以同时指定多种日志类型，如若不指定则为全部类型

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[ISYS\_LogLine](./pro-api.isys_logline.md)<!-- -->&gt;&gt;

符合筛选条件的日志条目数组

## 备注

如果日志面板处于打开状态，筛选操作会同时在前端展现
