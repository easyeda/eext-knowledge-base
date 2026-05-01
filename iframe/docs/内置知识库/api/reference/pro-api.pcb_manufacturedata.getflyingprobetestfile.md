---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [getFlyingProbeTestFile](./pro-api.pcb_manufacturedata.getflyingprobetestfile.md)

# PCB\_ManufactureData.getFlyingProbeTestFile() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取飞针测试文件

## 签名

```typescript
getFlyingProbeTestFile(fileName?: string): Promise<File | undefined>;
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
</tbody></table>

## 返回值

Promise&lt;File \| undefined&gt;

飞针测试文件数据

## 示例

```javascript
// 保存飞针测试文件到本地
const flyingProbeFile = await eda.pcb_ManufactureData.getFlyingProbeTestFile('FlyingProbe_Test');
if (flyingProbeFile) {
	await eda.sys_FileSystem.saveFile(flyingProbeFile);
}
```
