---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [ILIB\_ExtendLibraryDeviceFunctions](./pro-api.ilib_extendlibrarydevicefunctions.md) &gt; [getList](./pro-api.ilib_extendlibrarydevicefunctions.getlist.md)

# ILIB\_ExtendLibraryDeviceFunctions.getList property

## 签名

```typescript
getList: (props: ILIB_ExtendLibrarySearchProperty<{
	attributes?: {
		[key: string]: string;
	};
	symbolType?: ELIB_SymbolType;
}>) => Promise<ILIB_ExtendLibrarySearchResult<ILIB_ExtendLibraryItemIndex & {
	classification?: ILIB_ExtendLibraryClassificationIndex | Array<string>;
	symbol?: ILIB_ExtendLibraryItem & {
		symbolType: ELIB_SymbolType;
	};
	footprint?: ILIB_ExtendLibraryItem;
	model3d?: ILIB_ExtendLibraryItemIndex & {
		adjustment?: {
			size?: {
				x: number;
				y: number;
				z: number;
			};
			rotation?: {
				x: number;
				y: number;
				z: number;
			};
			offset?: {
				x: number;
				y: number;
				z: number;
			};
		};
	};
	value?: string;
	supplierPart?: string;
	manufacturer?: string;
	description?: string;
	updateTime?: number;
	createTime?: number;
	attributes?: {
		[key: string]: string;
	};
}>>;
```
