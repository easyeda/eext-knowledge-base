---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_FormatConversion](./pro-api.sys_formatconversion.md) &gt; [convertAltiumDesignerLibrariesToEasyEDAMultiFiles](./pro-api.sys_formatconversion.convertaltiumdesignerlibrariestoeasyedamultifiles.md)

# SYS\_FormatConversion.convertAltiumDesignerLibrariesToEasyEDAMultiFiles() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

转换 Altium Designer 库到多个嘉立创库文件（每个器件一个文件）

## 签名

```typescript
convertAltiumDesignerLibrariesToEasyEDAMultiFiles(file: File | Array<File>): Promise<Array<File>>;
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

Altium Designer 库文件

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;File&gt;&gt;

多个嘉立创库文件
