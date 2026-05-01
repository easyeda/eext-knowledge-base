[Home](./pro-api.md) &gt; [LC\_DESIGN\_COMPONENTS](./pro-api.lc_design_components.md)

# LC\_DESIGN\_COMPONENTS type

## 签名

```typescript
type LC_DESIGN_COMPONENTS = {
	[K in KComponentsIndex]: (props: ReactComponentProps<K>) => React.ReactElement;
};
```
