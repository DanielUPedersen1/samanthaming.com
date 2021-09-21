---
title: flex-wrap
tags: [css, flexbox]
order: 10
section: Parent Properties
createdAt: 2020-02-20
---

By default, flex items will try to shrink itself to fit onto one line, in other words, no wrap. However if you want the flex items to maintain its size and have the overflow spread on multiple lines in the containers, then you can turn on wrap.

This property is what will allow flex items in your container to occupy more than one line.

<!-- prettier-ignore -->
```css
.parent {
  flex-wrap: nowrap /* default */
          or wrap
          or wrap-reverse
}
```
