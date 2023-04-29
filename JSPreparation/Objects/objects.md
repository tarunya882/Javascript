**Objects:**
Objects are used to store keyed collections of various data and more complex entities.

An empty object (“empty cabinet”) can be created using one of two syntaxes:
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax

**This in Arrow functions:**
\*\*Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.

**Constructors**:
Usually, constructors do not have a return statement. Their task is to write all necessary stuff into this, and it automatically becomes the result.

But if there is a return statement, then the rule is simple:

If return is called with an object, then the object is returned instead of this.
If return is called with a primitive, it’s ignored.
In other words, return with an object returns that object, in all other cases this is returned.

Empty return/ primitive return from constructors return this;

Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.
Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.

**Important**

- When a function is declared, it may use **this**, but that this has no value until the function is called.
- A function can be copied between objects.
- Functions that are stored in object properties are called “methods”.
- When a function is called in the “method” syntax: object.method(), the value of this during the call is object.
- Calling without an object: this == undefined
- **Primitives like string,boolean,number can be duplicated when copied, but not objects**.
- Objects when copied store address of the object.
- If there’s this inside a function, it expects to be called in an object context.
- this is runtime evaluated.
- isNaN(true) || isNaN(false) => returns false (isNaN(true) or isNan(false) gives undefined)
- __proto__. We can’t set it to a non-object value:
- Symbol is a primitive type for unique identifiers.
- Symbols are created with Symbol() call with an optional description (name).
- object.valuOf() is same object
- Garbage collection - https://javascript.info/garbage-collection

**Computed Properties:**
We can use square brackets in an object literal, when creating an object. That’s called computed properties.
For instance:

let fruit = prompt("Which fruit to buy?", "apple");

let bag = {
[fruit]: 5, // the name of the property is taken from the variable fruit
};
alert( bag.apple ); // 5 if fruit="apple"
The meaning of a computed property is simple: [fruit] means that the property name should be taken from fruit.

**Cloning:**
Object.assign, spread operator clones or copies all enumerable own properties from one or more source
objects to a target object. It returns the modified target object.
Object.assign performs a simple object cloning:

But in case of nested properties even after cloning they point to same ref because nested properties are references to other objects

To overcome this we use structured clone.

**StructuredClone** 
clones object with all nested properties. clones objects ,arrays and primitives
                    supports circular references
                    doesnot support/clone functional property

                      __.cloneDeep(obj); // present in loadash library


Useful links:
https://javascript.info/object-methods
https://javascript.info/garbage-collection