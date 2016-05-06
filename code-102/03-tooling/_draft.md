<!--
Tooling:
  - Tool overview
    - Build tools & Task Runners
    - Linters
    - Test runners
    - Minifiers
    - Polyfills & Transpilers
  - Specific tools needed for our project & usage
-->

# Tooling

## You mean like a hammer?

Yea, pretty much. Really anything that helps you as a programmer create, debug, maintain, develop applications. Or, anything that just generally makes a developers life easier.

The key here is what is your specific problem? And, how well does the tool solve the problem, preferably with as little complexity/headaches.

### Build Tools & Task Runners

Problem: I want to do some task repeatedly.

Solution: We'll delegate these tasks to a separate program that can watch our code for changes.

### Linters

Problem: Developers are error prone and have terrible taste.

Solution: We'll have a separate program statically analyze our code to find bugs or stylistic errors before we need to run our app and hunt them down later.

### Test Runners

Problem: Extending complex applications can be difficult to do with confidence. Do these new additions expose any new edge cases in other parts of the application?

Solution: We can write things called unit tests or integration tests to ensure particular components or features in the application are robust to change.

### Minifiers, Compressors & Obfuscators

Problem: We have a lot of code and need to deliver the smallest footprint to users.

Solution: We'll have a program look at our code and remove unnecessary characters without changing functionality.

### Polyfills & Transpilers

Problem: There are powerful language features that aren't widely in use yet, but they make our job easier (sometimes highly debatable).

Solution: We'll add a compilation step that can add code to replicate these features and we'll bundle that the code we ship.

## Tools For Today

`¯\_(ツ)_/¯`



