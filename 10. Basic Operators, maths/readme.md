
# JavaScript Operators and Type Conversions

## Operators

### Unary, Binary, Operand

- **Operand:** The value an operator is applied to.
- **Unary Operator:** An operator with a single operand.
- **Binary Operator:** An operator with two operands.

Example:
```javascript
let x = 1;
x = -x; // Unary negation applied
```

### Common Math Operations

- **Addition (+)**
- **Subtraction (-)**
- **Multiplication (*)**
- **Division (/)**
- **Remainder (%)**
- **Exponentiation (**)**

Example:
```javascript
let result = 5 % 2; // Remainder of 5 divided by 2 is 1
let square = 2 ** 2; // 2 raised to the power of 2 is 4
```

### String Concatenation

The `+` operator can be used for addition and string concatenation.

Example:
```javascript
let s = "my" + "string"; // Concatenates strings
console.log(s); // Output: mystring
```

## Type Conversions

### String Conversion

- Occurs when displaying values.
- Can be performed with `String(value)`.

Example:
```javascript
let num = 42;
let str = String(num); // Convert number to string
console.log(str); // Output: "42"
```

### Numeric Conversion

- Occurs in mathematical operations.
- Can be performed with `Number(value)`.

Example:
```javascript
let str = "3.14";
let num = Number(str); // Convert string to number
console.log(num); // Output: 3.14
```

### Boolean Conversion

- Occurs in logical operations.
- Can be performed with `Boolean(value)`.

Example:
```javascript
let age = 18;
let isAdult = Boolean(age); // Convert value to boolean
console.log(isAdult); // Output: true
```

### Increment and Decrement

- Increment (++): Increases a variable by 1.
- Decrement (--): Decreases a variable by 1.

Example:
```javascript
let counter = 1;
counter++; // Increases counter by 1
console.log(counter); // Output: 2
```

### Operator Precedence

Operators have different precedence levels. Use parentheses to control evaluation order.

Example:
```javascript
let result = 2 * ++counter; // Increment first, then multiply
console.log(result); // Output: 4
```

## Example Question-Answer Code

### Q1: What does the `%` operator do in JavaScript?

**Answer:** The `%` operator calculates the remainder of the integer division between two numbers.

### Q2: How can you convert a value to a boolean?

**Answer:** You can use the `Boolean()` function to explicitly convert a value to a boolean.

```javascript
let value = 0;
let booleanValue = Boolean(value); // Converts 0 to false
```

### Q3: Explain the difference between prefix and postfix increment operators.

**Answer:** The prefix increment operator (`++variable`) increments the variable first and then returns the new value. The postfix increment operator (`variable++`) returns the current value of the variable and then increments it.

### Q4: What is the purpose of operator precedence in JavaScript?

**Answer:** Operator precedence defines the order in which operators are evaluated in an expression. Parentheses can be used to override default precedence and control the order of evaluation.

### Q5: How can you concatenate strings in JavaScript?

**Answer:** Strings can be concatenated using the `+` operator. If one operand is a string, the other operand is automatically converted to a string.

```javascript
let str = "Hello, " + "world!";
console.log(str); // Output: Hello, world!
```

