---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [LIB\_LibrariesList](./pro-api.lib_librarieslist.md) &gt; [getPersonalLibraryUuid](./pro-api.lib_librarieslist.getpersonallibraryuuid.md)

# LIB\_LibrariesList.getPersonalLibraryUuid() method

获取个人库的 UUID

## 签名

```typescript
getPersonalLibraryUuid(): Promise<string | undefined>;
```

## 返回值

Promise&lt;string \| undefined&gt;

个人库的 UUID

## 备注

将会获取当前编辑器工作区下的个人库的 UUID，在私有部署环境下不存在个人库，此接口将永远返回 `undefined`
