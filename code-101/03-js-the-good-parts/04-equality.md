# JS WAT

## == and !=

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
