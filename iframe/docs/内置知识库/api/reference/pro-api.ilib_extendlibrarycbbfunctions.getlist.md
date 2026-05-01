---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [ILIB\_ExtendLibraryCbbFunctions](./pro-api.ilib_extendlibrarycbbfunctions.md) &gt; [getList](./pro-api.ilib_extendlibrarycbbfunctions.getlist.md)

# ILIB\_ExtendLibraryCbbFunctions.getList property

## 签名

```typescript
getList: (props: any) => Promise<ILIB_ExtendLibrarySearchResult<ILIB_ExtendLibraryItem & ILIB_ExtendLibrarySearchResultDataLine & {
	schematics?: Array<{
		uuid: string;
		name: string;
		updateTime: string;
		description?: string;
	}>;
	pcbs?: Array<{
		uuid: string;
		name: string;
		updateTime: number;
		thumb?: string;
		createTime?: number;
		creator?: ILIB_ExtendLibraryUserIndex;
		modifier?: ILIB_ExtendLibraryUserIndex;
		description?: string;
	}>;
	boards?: Array<{
		pcbUuid: string;
		schUuid: string;
		name: string;
	}>;
	sheets?: Array<{
		uuid: string;
		name: string;
		belongSchematicUuid: string;
		updateTime: number;
		thumb?: string;
		createTime?: number;
		creator?: ILIB_ExtendLibraryUserIndex;
		modifier?: ILIB_ExtendLibraryUserIndex;
		description?: string;
	}>;
}>>;
```
