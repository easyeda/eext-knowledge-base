[Home](./pro-api.md) &gt; [PCB\_Document](./pro-api.pcb_document.md)

# PCB\_Document class

PCB &amp; 封装 / 文档操作类

## 签名

```typescript
declare class PCB_Document
```

## 备注

对设计文档总体进行的操作

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[convertCanvasOriginToDataOrigin(x, y)](./pro-api.pcb_document.convertcanvasorigintodataorigin.md)

</td><td>

</td><td>

输入画布坐标返回该坐标对应的数据坐标

</td></tr>
<tr><td>

[convertDataOriginToCanvasOrigin(x, y)](./pro-api.pcb_document.convertdataorigintocanvasorigin.md)

</td><td>

</td><td>

输入数据坐标返回该坐标对应的画布坐标

</td></tr>
<tr><td>

[getCalculatingRatlineStatus()](./pro-api.pcb_document.getcalculatingratlinestatus.md)

</td><td>

</td><td>

获取当前飞线计算功能状态

</td></tr>
<tr><td>

[getCanvasOrigin()](./pro-api.pcb_document.getcanvasorigin.md)

</td><td>

</td><td>

获取画布原点相对于数据原点的偏移坐标

</td></tr>
<tr><td>

[getCurrentFilterConfiguration()](./pro-api.pcb_document.getcurrentfilterconfiguration.md)

</td><td>

</td><td>

**_(BETA)_** 获取当前画布过滤器配置

</td></tr>
<tr><td>

[getPrimitiveAtPoint(x, y)](./pro-api.pcb_document.getprimitiveatpoint.md)

</td><td>

</td><td>

**_(BETA)_** 获取坐标点的图元

</td></tr>
<tr><td>

[getPrimitivesInRegion(left, right, top, bottom, leftToRight)](./pro-api.pcb_document.getprimitivesinregion.md)

</td><td>

</td><td>

**_(BETA)_** 获取区域内所有图元

</td></tr>
<tr><td>

[importAutoLayoutJsonFile(autoLayoutFile)](./pro-api.pcb_document.importautolayoutjsonfile.md)

</td><td>

</td><td>

**_(BETA)_** 导入自动布局文件（JSON）

</td></tr>
<tr><td>

[importAutoRouteJsonFile(autoRouteFile)](./pro-api.pcb_document.importautoroutejsonfile.md)

</td><td>

</td><td>

**_(BETA)_** 导入自动布线文件（JSON）

</td></tr>
<tr><td>

[importAutoRouteSesFile(autoRouteFile)](./pro-api.pcb_document.importautoroutesesfile.md)

</td><td>

</td><td>

**_(BETA)_** 导入自动布线文件（SES）

</td></tr>
<tr><td>

[importChanges(uuid)](./pro-api.pcb_document.importchanges.md)

</td><td>

</td><td>

从原理图导入变更

</td></tr>
<tr><td>

[navigateToCoordinates(x, y)](./pro-api.pcb_document.navigatetocoordinates.md)

</td><td>

</td><td>

定位到画布坐标

</td></tr>
<tr><td>

[navigateToRegion(left, right, top, bottom)](./pro-api.pcb_document.navigatetoregion.md)

</td><td>

</td><td>

**_(BETA)_** 定位到画布区域

</td></tr>
<tr><td>

[save(uuid)](./pro-api.pcb_document.save.md)

</td><td>

</td><td>

保存文档

</td></tr>
<tr><td>

[setCanvasOrigin(offsetX, offsetY)](./pro-api.pcb_document.setcanvasorigin.md)

</td><td>

</td><td>

设置画布原点相对于数据原点的偏移坐标

</td></tr>
<tr><td>

[startCalculatingRatline()](./pro-api.pcb_document.startcalculatingratline.md)

</td><td>

</td><td>

启动飞线计算功能

</td></tr>
<tr><td>

[stopCalculatingRatline()](./pro-api.pcb_document.stopcalculatingratline.md)

</td><td>

</td><td>

停止飞线计算功能

</td></tr>
<tr><td>

[zoomToBoardOutline()](./pro-api.pcb_document.zoomtoboardoutline.md)

</td><td>

</td><td>

**_(BETA)_** 缩放到板框（适应板框）

</td></tr>
</tbody></table>
