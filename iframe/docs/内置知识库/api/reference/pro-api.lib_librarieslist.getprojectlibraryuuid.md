---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) &gt; [getProjectLibraryUuid](./pro-api.lib_librarieslist.getprojectlibraryuuid.md)

# LIB\_LibrariesList.getProjectLibraryUuid() method

获取工程库的 UUID

## 签名

```typescript
getProjectLibraryUuid(): Promise<string | undefined>;
```

## 返回值

Promise&lt;string \| undefined&gt;

工程库的 UUID

## 备注

在未打开工程的情况下调用将返回 `undefined`
