---
title: justify-content [row]
tags: [css, flexbox]
order: 12
section: Parent Properties
createdAt: 2020-02-20
---

Here comes the fun part. This is the property that sets alignment along the main axis. In this example, the main axis lies horizontally. In other words, the flex-direction is set to row.

This is probably my most used parent property. You just choose the layout you like and BAM Flexbox automatically does it for you. And it's absolutely responsive. As you grow or shrink the window width, Flexbox will do the behind-the-scene calculation and ensure that your chosen layout is maintained. It's like one of those kitchen appliances where "you set it and forget it" 🍗

<!-- prettier-ignore -->
```css
.parent {
  justify-content: flex-start /* default */
                or flex-end
                or center
                or space-around
                or space-between
                or space-evenly
}
```
