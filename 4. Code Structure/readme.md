

## Statements

Statements are syntax constructs and commands that perform actions. They can be written on separate lines or on the same line, separated by semicolons.

Example:
```javascript
alert('Hello'); // This shows an alert with "Hello"
alert('World'); // This shows an alert with "World"
```

Semicolons:
In most cases, you can omit semicolons when there is a line break. JavaScript automatically inserts semicolons in those cases. However, it's safer to use semicolons between statements, especially for beginners.

Example:
```javascript
alert('Hello')
alert('World')
```

## Example of Missing Semicolon Error

Consider the following code:

```javascript
alert("Hello")

[1, 2].forEach(alert);
```

The above code will only show the first "Hello" message and throw an error. To fix this, we need to add a semicolon after the first alert statement:

```javascript
alert("Hello");

[1, 2].forEach(alert);
```

Comments:

Comments are essential for explaining code and adding notes. They don't affect the code's execution and can be one-line or multiline.

Example:
```javascript
// This is a single-line comment
alert('Hello');

/* This is a multiline comment
It can span multiple lines
*/
alert('World');
```

Remember, comments can be useful for temporarily disabling parts of the code during debugging or development.

Code Quality:

Writing good comments is important for code maintainability and understanding. Use descriptive comments to explain complex code and improve code readability.

🚀 **Code Examples**

Here's an example of using forEach to loop through an array and display its elements:

```javascript
const numbers = [1, 2, 3];

numbers.forEach((number) => {
  alert(number); // This will show each number in the array
});
```

💡 **Important Points**

1. Always use semicolons to separate statements, even when they are on separate lines.
2. Comments play a crucial role in code understanding and should be used effectively.
3. Remember to use descriptive comments, especially for complex code.
4. Use code examples to illustrate concepts and improve understanding.


## **Quiz 1: Statements and Semicolons**

1. Which of the following is the correct way to write two separate alert statements in JavaScript?
   - a) `alert('Hello') alert('World')`
   - b) `alert('Hello'); alert('World')`
   - c) `alert('Hello') : alert('World')`
   - d) `alert('Hello') , alert('World')`

2. When can you omit semicolons between JavaScript statements?
   - a) Always, it is not required.
   - b) When there is a line break between statements.
   - c) When statements are on separate lines.
   - d) Only when using single-line comments.

## **Quiz 2: Comments in JavaScript**

1. Which type of comment in JavaScript can span multiple lines?
   - a) Single-line comments starting with `//`.
   - b) Multiline comments starting with `/*` and ending with `*/`.
   - c) Single-line comments starting with `#`.
   - d) Multiline comments starting with `<!--` and ending with `-->`.

2. What is the purpose of comments in JavaScript?
   - a) To execute specific blocks of code.
   - b) To improve code readability and understanding.
   - c) To create loops and conditional statements.
   - d) To declare variables and functions.

