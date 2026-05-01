---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_ManufactureData](./pro-api.sch_manufacturedata.md) &gt; [getNetlistFile](./pro-api.sch_manufacturedata.getnetlistfile.md)

# SCH\_ManufactureData.getNetlistFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取网表文件（Netlist）

## 签名

```typescript
getNetlistFile(fileName?: string, netlistType?: ESYS_NetlistType): Promise<File | undefined>;
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

fileName

</td><td>

string

</td><td>

_（可选）_ 文件名

</td></tr>
<tr><td>

netlistType

</td><td>

[ESYS\_NetlistType](./pro-api.esys_netlisttype.md)

</td><td>

_（可选）_ 网表类型

</td></tr>
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

网表文件数据

## 备注

可以使用 [SYS\_FileSystem.saveFile()](./pro-api.sys_filesystem.savefile.md) 接口将文件导出到本地文件系统
