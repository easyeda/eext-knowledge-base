---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FormatConversion](./pro-api.sys_formatconversion.md) &gt; [convertDisaLibrariesToEasyEDASingleFile](./pro-api.sys_formatconversion.convertdisalibrariestoeasyedasinglefile.md)

# SYS\_FormatConversion.convertDisaLibrariesToEasyEDASingleFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

转换 T/DISA 4001 库到单个嘉立创库文件

## 签名

```typescript
convertDisaLibrariesToEasyEDASingleFile(file: File | Array<File>): Promise<File | undefined>;
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

file

</td><td>

File \| Array&lt;File&gt;

</td><td>

T/DISA 4001 库文件

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

嘉立创库文件
