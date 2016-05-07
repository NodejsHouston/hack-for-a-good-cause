# JS WAT

## Overloaded '+' and type coercion

* It is not the overloading that is so wrong, it is the type coercion
* The '+' operator does different things depending on the left operand
```
> 1 + 1
2

> "1" + "1"
"11"

> "1" + 1
"11"

> 1 + "1"
2

> let i="1"
> i += 1
"11"

> let i="1"
> ++i
2
```
