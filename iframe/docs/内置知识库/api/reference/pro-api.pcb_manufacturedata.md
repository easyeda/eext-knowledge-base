[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md)

# PCB\_ManufactureData class

PCB &amp; 封装 / 生产资料类

## 签名

```typescript
declare class PCB_ManufactureData
```

## 备注

获取当前 PCB 的生产资料文件及快捷下单

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[deleteBomTemplate(template)](./pro-api.pcb_manufacturedata.deletebomtemplate.md)

</td><td>

</td><td>

**_(BETA)_** 删除 BOM 模板

</td></tr>
<tr><td>

[get3DFile(fileName, fileType, element, modelMode, autoGenerateModels)](./pro-api.pcb_manufacturedata.get3dfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 3D 模型文件

</td></tr>
<tr><td>

[get3DShellFile(fileName, fileType)](./pro-api.pcb_manufacturedata.get3dshellfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 3D 外壳文件

</td></tr>
<tr><td>

[getAltiumDesignerFile(fileName)](./pro-api.pcb_manufacturedata.getaltiumdesignerfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 Altium Designer 文件

</td></tr>
<tr><td>

[getAutoLayoutJsonFile(fileName)](./pro-api.pcb_manufacturedata.getautolayoutjsonfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取自动布局文件（JSON）

</td></tr>
<tr><td>

[getAutoRouteJsonFile(fileName)](./pro-api.pcb_manufacturedata.getautoroutejsonfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取自动布线文件（JSON）

</td></tr>
<tr><td>

[getAutoRouteJsonFileForJRouter(fileName)](./pro-api.pcb_manufacturedata.getautoroutejsonfileforjrouter.md)

</td><td>

</td><td>

**_(BETA)_** 获取 JRouter 专用自动布线文件（JSON）

</td></tr>
<tr><td>

[getBomFile(fileName, fileType, template, filterOptions, statistics, property, columns)](./pro-api.pcb_manufacturedata.getbomfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 BOM 文件

</td></tr>
<tr><td>

[getBomTemplateFile(template)](./pro-api.pcb_manufacturedata.getbomtemplatefile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 BOM 模板文件

</td></tr>
<tr><td>

[getBomTemplates()](./pro-api.pcb_manufacturedata.getbomtemplates.md)

</td><td>

</td><td>

**_(BETA)_** 获取 BOM 模板列表

</td></tr>
<tr><td>

[getDsnFile(fileName)](./pro-api.pcb_manufacturedata.getdsnfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取自动布线文件（DSN）

</td></tr>
<tr><td>

[getDxfFile(fileName, layers, objects)](./pro-api.pcb_manufacturedata.getdxffile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 DXF 文件

</td></tr>
<tr><td>

[getFlyingProbeTestFile(fileName)](./pro-api.pcb_manufacturedata.getflyingprobetestfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取飞针测试文件

</td></tr>
<tr><td>

[getGerberFile(fileName, colorSilkscreen, unit, digitalFormat, other, layers, objects)](./pro-api.pcb_manufacturedata.getgerberfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 PCB 制版文件（Gerber）

</td></tr>
<tr><td>

[getIdxFile(fileName)](./pro-api.pcb_manufacturedata.getidxfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 IDX 文件

</td></tr>
<tr><td>

[getIpcD356AFile(fileName)](./pro-api.pcb_manufacturedata.getipcd356afile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 IPC-D-356A 文件

</td></tr>
<tr><td>

[getManufactureData()](./pro-api.pcb_manufacturedata.getmanufacturedata.md)

</td><td>

</td><td>

**_(BETA)_** 导出制造文件

</td></tr>
<tr><td>

[getNetlistFile(fileName, netlistType)](./pro-api.pcb_manufacturedata.getnetlistfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取网表文件（Netlist）

</td></tr>
<tr><td>

[getOpenDatabaseDoublePlusFile(fileName, unit, otherData, layers, objects)](./pro-api.pcb_manufacturedata.getopendatabasedoubleplusfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 ODB++ 文件

</td></tr>
<tr><td>

[getPadsFile(fileName)](./pro-api.pcb_manufacturedata.getpadsfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 PADS 文件

</td></tr>
<tr><td>

[getPcbInfoFile(fileName)](./pro-api.pcb_manufacturedata.getpcbinfofile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 PCB 信息文件

</td></tr>
<tr><td>

[getPdfFile(fileName, outputMethod, contentConfig, watermark)](./pro-api.pcb_manufacturedata.getpdffile.md)

</td><td>

</td><td>

**_(BETA)_** 获取 PDF 文件

</td></tr>
<tr><td>

[getPickAndPlaceFile(fileName, fileType, unit)](./pro-api.pcb_manufacturedata.getpickandplacefile.md)

</td><td>

</td><td>

**_(BETA)_** 获取坐标文件（PickAndPlace）

</td></tr>
<tr><td>

[getTestPointFile(fileName, fileType)](./pro-api.pcb_manufacturedata.gettestpointfile.md)

</td><td>

</td><td>

**_(BETA)_** 获取测试点报告文件

</td></tr>
<tr><td>

[place3DShellOrder(interactive, ignoreWarning)](./pro-api.pcb_manufacturedata.place3dshellorder.md)

</td><td>

</td><td>

**_(BETA)_** 3D 外壳下单

</td></tr>
<tr><td>

[placeComponentsOrder(interactive, ignoreWarning)](./pro-api.pcb_manufacturedata.placecomponentsorder.md)

</td><td>

</td><td>

**_(BETA)_** 元件下单

</td></tr>
<tr><td>

[placePcbOrder(interactive, ignoreWarning)](./pro-api.pcb_manufacturedata.placepcborder.md)

</td><td>

</td><td>

**_(BETA)_** PCB 下单

</td></tr>
<tr><td>

[placeSmtComponentsOrder(interactive, ignoreWarning)](./pro-api.pcb_manufacturedata.placesmtcomponentsorder.md)

</td><td>

</td><td>

**_(BETA)_** SMT 元件下单

</td></tr>
<tr><td>

[uploadBomTemplateFile(templateFile, template)](./pro-api.pcb_manufacturedata.uploadbomtemplatefile.md)

</td><td>

</td><td>

**_(BETA)_** 上传 BOM 模板文件

</td></tr>
</tbody></table>
