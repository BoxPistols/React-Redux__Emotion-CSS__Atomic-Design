# About Design

## Sizes

// Mainly for font size, and use for global sizes params

- global key/value
  - xxs: 10, // Minimu font size.
  - xs: 11, // Mainly for font size, Basically, Don't use anything else
  - ss: 12, // Mainly for small font size
  - sm: 14, // Mainly for default font size
  - md: 16, // Originally the basic size that the browser has
  - ml: 18, // icon base size
  - mx: 20, // General-purpose size such as icons/types
  - lg: 22, // General-purpose size such as icons/types
  - xl: 24, // General-purpose size such as icons/types
  - xxl: 28, // Large general-purpose size
  - xxxl: 32 // Large general-purpose size

or 明示的な名前

- size-20: 20,
- size-22: 22,
- size-24: 24,
- size-28: 28,
- size-32: 32

For larger sizes, consider display-size-sm: 40 etc.
それより大きなサイズは、display-size-sm: 40 などを検討しています

## issue

- トリガーをwebpackのenv出し分けでなく、darkかlightに収束したい
　- webpackのenvはdark or lightの分岐にしたい
　- その他ブランカラーの分岐がさらに発生すれば、primaryカラーのみ変更が渡されるようにする
　　- さらにその際もdarkかlightかどちらに属するカラースキームなのか、明示的にする

## Log
