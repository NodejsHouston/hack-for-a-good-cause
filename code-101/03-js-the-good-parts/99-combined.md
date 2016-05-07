# JS WAT

## What could go wrong?

* Javascript is a language "designed in 10 days" for enhacing websites.
* The language has evolved over many years, but also brings a lot of legacy baggage.

## What's so bad?

* overloaded '+' both adds and concatenates with type coercion
* == and !=
* false, null, undefined, undefined, NaN
* wat moments ([] + [], {} + {}, ...)

### Overloaded '+' and type coercion

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


### == and !=

* Javascript has a strict (`===`) comparison and a loose comparison (`==`)
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
* The existence of this complex table should show how easy one can get `==` wrong

|               | **Undef** | **Null**  |  **Number**  |    **String**     |    **Boolean**    |     **Object**    |
| ------------- | --------- | --------- | ------------ | ----------------- | ----------------- | ----------------- |
| **Undefined** | true      | true      | false        | false             | false             | false             |
| **Null**      | true      | true      | false        | false             | false             | false             |
| **Number**    | false     | false     | A === B      | A === int(B)      | A === int(B)      | A == prim(B)      |
| **String**    | false     | false     | int(A) === B | A === B           | int(A) === int(B) | A == prim(B)      |
| **Boolean**   | false     | false     | int(A) === B | int(A) === int(B) | A === B           | int(A) == prim(B) |
| **Object**    | false     | false     | prim(A) == B | prim(A) == B      | prim(A) == int(B) | A === B           |

* note: int => cast to integer; prim => cast to a primitive

### false, null, undefined, undefined, NaN

* Yes, undefined is listed twice. Not being defined can be different than being `== undefined`:
  MDN: `Since undefined is not a reserved word, it can be used as an identifier (variable name) in any scope other than the global scope.`
* Empty array loosely equals false ([] == false)
* But empty array in an if-statement is true `if ([]) {} // this executes!`
* Empty string both loosely equals false and also is false in an if statement
* Anything compared to NaN is always false, including NaN `NaN != NaN`
    * NaN being a number type is part of IEEE 754

### wat

https://www.destroyallsoftware.com/talks/wat
```
> [] + []
""

> [] + {}
{}

> {} + []
0

> {} + {}
NaN

> Array(5)
,,,,

> Array(5).join('wat' + 1)
"wat1wat1wat1wat1"

> Array(5).join('wat' - 1) + ' Batman!'
"NaNNaNNaNNaN Batman!"
```

### Semicolons

Going to play a game of: Guess The Output

Before each statement, assume we set:
```
var a = 5;
var b = 4;
var c = 3;
var d = 2;
var e = 1;
```

**Note**: these are difficult to do in a REPL, but "work" in normal code
```
> a = b
> ++c
a == 4
c == 4

> a = b + c
> (d + e).toString()
TypeError: c is not a function

> var name = {"Goodbye": [1, 2, 3]}
> ["Hello", "Goodbye"].forEach(function(value) {
>  document.write(value + " " + name + "<br>")
> })
1 undefined
2 undefined
3 undefined

(modules concat'd together could produce the next one)
> var foo = function() {
>   console.log("bar")
> }
> (function() {
>   return "world"
> })()
bar
TypeError: (intermediate value)(...) is not a function
```

### Hoisting

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

## Want to be more confused?

* things that are not what they seem (arguments is not an array)
* `this` context: the same function call could have different `this` values
* Functional scope vs block scope
* ES6: const is a const variable (pointer), not a const object
* typeof may not return what you expect: `typeof [] === 'object'` not Array!

## Is there any hope?

* There are two types of languages: those everyone hates and those no one uses
* Yes, there is hope. Stick to a common set of rules
* Use tools (JSLint, JSHint, ESLint, or others) to help enforce these rules

* Javascript: The Good Parts by Douglas Crockford
* The Good Parts defines a subset of the better features to build better Javascript apps.
* Douglas Crockford created JSLint and JSMin.
* He also has been involved in the evolution of the language.
* http://shop.oreilly.com/product/9780596517748.do
