[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md)

# DMT\_EditorControl class

文档树 / 编辑器控制类

## 签名

```typescript
declare class DMT_EditorControl
```

## 备注

此处编辑器控制基于当前已打开的工程设计下的图页，其它任何 `documentUuid` 都将被认为是不存在的文档页

## 方法

<table><thead><tr><th>

方法名

</th><th>

修饰符

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

[activateDocument(tabId)](./pro-api.dmt_editorcontrol.activatedocument.md)

</td><td>

</td><td>

激活文档

</td></tr>
<tr><td>

[activateSplitScreen(splitScreenId)](./pro-api.dmt_editorcontrol.activatesplitscreen.md)

</td><td>

</td><td>

激活分屏

</td></tr>
<tr><td>

[closeDocument(tabId)](./pro-api.dmt_editorcontrol.closedocument.md)

</td><td>

</td><td>

关闭文档

</td></tr>
<tr><td>

[createSplitScreen(splitScreenType, tabId)](./pro-api.dmt_editorcontrol.createsplitscreen.md)

</td><td>

</td><td>

创建分屏

</td></tr>
<tr><td>

[generateIndicatorMarkers(markers, color, lineWidth, zoom, tabId)](./pro-api.dmt_editorcontrol.generateindicatormarkers.md)

</td><td>

</td><td>

**_(BETA)_** 生成指示标记

</td></tr>
<tr><td>

[getCurrentRenderedAreaImage(tabId)](./pro-api.dmt_editorcontrol.getcurrentrenderedareaimage.md)

</td><td>

</td><td>

**_(BETA)_** 获取画布渲染区域图像

</td></tr>
<tr><td>

[getSplitScreenIdByTabId(tabId)](./pro-api.dmt_editorcontrol.getsplitscreenidbytabid.md)

</td><td>

</td><td>

使用标签页 ID 获取分屏 ID

</td></tr>
<tr><td>

[getSplitScreenTree()](./pro-api.dmt_editorcontrol.getsplitscreentree.md)

</td><td>

</td><td>

获取编辑器分屏属性树

</td></tr>
<tr><td>

[getTabsBySplitScreenId(splitScreenId)](./pro-api.dmt_editorcontrol.gettabsbysplitscreenid.md)

</td><td>

</td><td>

获取指定分屏 ID 下的所有标签页

</td></tr>
<tr><td>

[mergeAllDocumentFromSplitScreen()](./pro-api.dmt_editorcontrol.mergealldocumentfromsplitscreen.md)

</td><td>

</td><td>

合并所有分屏

</td></tr>
<tr><td>

[moveDocumentToSplitScreen(tabId, splitScreenId)](./pro-api.dmt_editorcontrol.movedocumenttosplitscreen.md)

</td><td>

</td><td>

将文档移动到指定分屏

</td></tr>
<tr><td>

[openDocument(documentUuid, splitScreenId)](./pro-api.dmt_editorcontrol.opendocument.md)

</td><td>

</td><td>

打开文档

</td></tr>
<tr><td>

[openLibraryDocument(libraryUuid, libraryType, uuid, splitScreenId)](./pro-api.dmt_editorcontrol.openlibrarydocument.md)

</td><td>

</td><td>

**_(BETA)_** 打开库符号、封装文档

</td></tr>
<tr><td>

[removeIndicatorMarkers(tabId)](./pro-api.dmt_editorcontrol.removeindicatormarkers.md)

</td><td>

</td><td>

**_(BETA)_** 移除指示标记

</td></tr>
<tr><td>

[tileAllDocumentToSplitScreen()](./pro-api.dmt_editorcontrol.tilealldocumenttosplitscreen.md)

</td><td>

</td><td>

平铺所有文档

</td></tr>
<tr><td>

[zoomTo(x, y, scaleRatio, tabId)](./pro-api.dmt_editorcontrol.zoomto.md)

</td><td>

</td><td>

**_(BETA)_** 缩放到坐标

</td></tr>
<tr><td>

[zoomToAllPrimitives(tabId)](./pro-api.dmt_editorcontrol.zoomtoallprimitives.md)

</td><td>

</td><td>

**_(BETA)_** 缩放到所有图元（适应全部）

</td></tr>
<tr><td>

[zoomToRegion(left, right, top, bottom, tabId)](./pro-api.dmt_editorcontrol.zoomtoregion.md)

</td><td>

</td><td>

**_(BETA)_** 缩放到区域

</td></tr>
<tr><td>

[zoomToSelectedPrimitives(tabId)](./pro-api.dmt_editorcontrol.zoomtoselectedprimitives.md)

</td><td>

</td><td>

**_(BETA)_** 缩放到已选中图元（适应选中）

</td></tr>
</tbody></table>
