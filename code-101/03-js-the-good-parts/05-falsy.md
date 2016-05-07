# JS WAT

## false, null, undefined, undefined, NaN

* Yes, undefined is listed twice. Not being defined can be different than being `== undefined`:
  MDN: `Since undefined is not a reserved word, it can be used as an identifier (variable name) in any scope other than the global scope.`
* Empty array loosely equals false ([] == false)
* But empty array in an if-statement is true `if ([]) {} // this executes!`
* Empty string both loosely equals false and also is false in an if statement
* Anything compared to NaN is always false, including NaN `NaN != NaN`
    * NaN being a number type is part of IEEE 754
