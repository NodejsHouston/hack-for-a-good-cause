# JS WAT

## Hoisting

```
> console.log(foo);
> var foo = 2;
> console.log(foo);
undefined
2
```

```
> foo();
> bar();
> function foo() {
>   console.log("foo");
> }
> var bar = function() {
>   console.log("bar");
> };
foo
TypeError: undefined is not a function
```
