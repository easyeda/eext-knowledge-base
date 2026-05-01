---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [ILIB\_ExtendLibraryFunctions](./pro-api.ilib_extendlibraryfunctions.md) &gt; [getClassificationTree](./pro-api.ilib_extendlibraryfunctions.getclassificationtree.md)

# ILIB\_ExtendLibraryFunctions.getClassificationTree property

获取分类树

## 签名

```typescript
getClassificationTree: () => Promise<Array<{
	name: string;
	uuid?: string;
	children?: Array<{
		name: string;
		uuid?: string;
	}> | undefined;
}>>;
```
