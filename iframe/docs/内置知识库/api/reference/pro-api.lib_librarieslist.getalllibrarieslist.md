---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) &gt; [getAllLibrariesList](./pro-api.lib_librarieslist.getalllibrarieslist.md)

# LIB\_LibrariesList.getAllLibrariesList() method

获取所有库的列表

## 签名

```typescript
getAllLibrariesList(): Promise<Array<ILIB_LibraryInfo>>;
```

## 返回值

Promise&lt;Array&lt;[ILIB\_LibraryInfo](./pro-api.ilib_libraryinfo.md)<!-- -->&gt;&gt;

库信息列表

## 备注

此处不会获取到系统库、个人库、工程库、收藏库的信息，如需获取它们的信息，请使用 [getSystemLibraryUuid](./pro-api.lib_librarieslist.getsystemlibraryuuid.md)<!-- -->、[getPersonalLibraryUuid](./pro-api.lib_librarieslist.getpersonallibraryuuid.md)<!-- -->、[getProjectLibraryUuid](./pro-api.lib_librarieslist.getprojectlibraryuuid.md)<!-- -->、[getFavoriteLibraryUuid](./pro-api.lib_librarieslist.getfavoritelibraryuuid.md) 接口
