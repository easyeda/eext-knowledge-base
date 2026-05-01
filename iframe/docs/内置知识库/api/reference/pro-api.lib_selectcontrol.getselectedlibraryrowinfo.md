---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_SelectControl](./pro-api.lib_selectcontrol.md) &gt; [getSelectedLibraryRowInfo](./pro-api.lib_selectcontrol.getselectedlibraryrowinfo.md)

# LIB\_SelectControl.getSelectedLibraryRowInfo() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取当前底部库选中行的信息

## 签名

```typescript
getSelectedLibraryRowInfo(): Promise<ILIB_LibraryItem | undefined>;
```

## 返回值

Promise&lt;[ILIB\_LibraryItem](./pro-api.ilib_libraryitem.md) \| undefined&gt;

库属性对象，如若为 `undefined` 则获取失败

## 备注

将会获取当前底部库选中行的库类型、UUID、所属库 UUID
