---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveText](./pro-api.sch_primitivetext.md) &gt; [create](./pro-api.sch_primitivetext.create.md)

# SCH\_PrimitiveText.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建文本

## 签名

```typescript
create(x: number, y: number, content: string, rotation?: number, textColor?: string | null, fontName?: string | null, fontSize?: number | null, bold?: boolean, italic?: boolean, underLine?: boolean, alignMode?: ESCH_PrimitiveTextAlignMode): Promise<ISCH_PrimitiveText | undefined>;
```

## 参数名

<table><thead><tr><th>

参数

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

x

</td><td>

number

</td><td>

坐标 X

</td></tr>
<tr><td>

y

</td><td>

number

</td><td>

坐标 Y

</td></tr>
<tr><td>

content

</td><td>

string

</td><td>

文本内容

</td></tr>
<tr><td>

rotation

</td><td>

number

</td><td>

_（可选）_ 旋转角度，可选 `0` `90` `180` `270`

</td></tr>
<tr><td>

textColor

</td><td>

string \| null

</td><td>

_（可选）_ 文本颜色，`null` 表示默认

</td></tr>
<tr><td>

fontName

</td><td>

string \| null

</td><td>

_（可选）_ 字体名称，`null` 表示默认

</td></tr>
<tr><td>

fontSize

</td><td>

number \| null

</td><td>

_（可选）_ 字体大小，`null` 表示默认

</td></tr>
<tr><td>

bold

</td><td>

boolean

</td><td>

_（可选）_ 是否加粗

</td></tr>
<tr><td>

italic

</td><td>

boolean

</td><td>

_（可选）_ 是否斜体

</td></tr>
<tr><td>

underLine

</td><td>

boolean

</td><td>

_（可选）_ 是否加下划线

</td></tr>
<tr><td>

alignMode

</td><td>

[ESCH\_PrimitiveTextAlignMode](./pro-api.esch_primitivetextalignmode.md)

</td><td>

_（可选）_ 对齐模式，`0` 左顶，`1` 中顶，`2` 右顶，`3` 左中，`4` 中中，`5` 右中，`6` 左底，`7` 中底，`8` 右底

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ISCH\_PrimitiveText](./pro-api.isch_primitivetext.md) \| undefined&gt;

文本图元对象
