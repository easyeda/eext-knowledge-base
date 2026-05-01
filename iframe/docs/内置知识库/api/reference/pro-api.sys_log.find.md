---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Log](./pro-api.sys_log.md) &gt; [find](./pro-api.sys_log.find.md)

# SYS\_Log.find() method

查找条目

## 签名

```typescript
find(message: string | Array<string | {
        text: string;
        attr?: {
            id?: string;
            path?: string;
            sheet?: string;
            pcbid?: string;
            type?: string;
        };
    }>, types?: ESYS_LogType | Array<ESYS_LogType>): Promise<Array<ISYS_LogLine>>;
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

message

</td><td>

string \| Array&lt;string \| { text: string; attr?: { id?: string; path?: string; sheet?: string; pcbid?: string; type?: string; }; }&gt;

</td><td>

查找内容

</td></tr>
<tr><td>

types

</td><td>

[ESYS\_LogType](./pro-api.esys_logtype.md) \| Array&lt;[ESYS\_LogType](./pro-api.esys_logtype.md)<!-- -->&gt;

</td><td>

_（可选）_ 日志类型数组，可以在指定的日志类型内查找

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;[ISYS\_LogLine](./pro-api.isys_logline.md)<!-- -->&gt;&gt;

符合查找条件的日志条目数组

## 备注

如果日志面板处于打开状态，查找操作会同时在前端展现
