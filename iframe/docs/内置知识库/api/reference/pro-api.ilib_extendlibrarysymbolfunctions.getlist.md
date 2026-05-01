---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [ILIB\_ExtendLibrarySymbolFunctions](./pro-api.ilib_extendlibrarysymbolfunctions.md) &gt; [getList](./pro-api.ilib_extendlibrarysymbolfunctions.getlist.md)

# ILIB\_ExtendLibrarySymbolFunctions.getList property

## 签名

```typescript
getList: (props: ILIB_ExtendLibrarySearchProperty<{
	symbolType?: ELIB_SymbolType;
}>) => Promise<ILIB_ExtendLibrarySearchResult<ILIB_ExtendLibraryItem & ILIB_ExtendLibrarySearchResultDataLine & {
	symbolType: ELIB_SymbolType;
}>>;
```
