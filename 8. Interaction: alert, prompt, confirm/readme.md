
# User Interaction: Alert, Prompt, Confirm

In this demo, we'll explore three browser-specific functions to interact with users: `alert`, `prompt`, and `confirm`. These functions allow us to display messages, ask for user input, and get user confirmation.

## Table of Contents
- [Alert](#alert)
- [Prompt](#prompt)
- [Confirm](#confirm)
- [Tasks](#tasks)

## Alert

The `alert` function displays a message in a modal window and waits for the user to press "OK". It's a simple way to convey information to the user.

Example:
```javascript
alert("Hello");
```

## Prompt

The `prompt` function shows a modal window with a text message and an input field for the user. It can accept a default value and returns the text from the input field or `null` if canceled.

Example:
```javascript
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`);
```

## Confirm

The `confirm` function displays a modal window with a question and two buttons: OK and Cancel. It returns `true` if OK is pressed and `false` otherwise.

Example:
```javascript
let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed
```

## Tasks

### A Simple Page

Create a web page that asks for a name and outputs it.

```html
<!DOCTYPE html>
<html>
<body>

  <script>
    'use strict';

    let name = prompt("What is your name?", "");
    alert(`Hello, ${name}!`);
  </script>

</body>
</html>
```

## Important Questions

1. What is the purpose of the `alert` function?
2. How does the `prompt` function work? What values does it return?
3. Explain the behavior of the `confirm` function.
4. What are the limitations of using modal windows for user interaction?
5. Why is providing a default value important in the `prompt` function for Internet Explorer?

## Code Examples

Here are some additional code examples for practice:

1. Using `alert` to display a message:
```javascript
alert("Welcome to our website! 🎉");
```

2. Using `prompt` to ask for user input:
```javascript
let favoriteColor = prompt("What's your favorite color?", "Blue");
alert(`Your favorite color is ${favoriteColor}!`);
```

3. Using `confirm` to get user confirmation:
```javascript
let proceed = confirm("Do you want to continue?");
if (proceed) {
  alert("Let's move forward!");
} else {
  alert("Maybe next time!");
}
```

Feel free to experiment with these examples to enhance your understanding!



1. What is the purpose of the `alert` function?
   - The `alert` function is used to display a message in a modal window. It's a simple way to provide information to the user, and it waits for the user to press the "OK" button before the script execution continues.

2. How does the `prompt` function work? What values does it return?
   - The `prompt` function shows a modal window with a text message and an input field for the user to enter some text. It can also accept an optional default value as its second argument. The function returns the text entered by the user in the input field as a string. If the user cancels the input by pressing "Cancel" or the "Esc" key, the function returns `null`.

3. Explain the behavior of the `confirm` function.
   - The `confirm` function displays a modal window with a question and two buttons: "OK" and "Cancel". It's used to get user confirmation for an action. If the user clicks "OK," the function returns `true`; if the user clicks "Cancel" or presses the "Esc" key, the function returns `false`.

4. What are the limitations of using modal windows for user interaction?
   - Modal windows block the interaction with the rest of the page until they are dismissed. Users must respond to the modal window before they can interact with other elements on the page. Additionally, the appearance and positioning of modal windows are determined by the browser, and developers can't customize them beyond the provided functionality.

5. Why is providing a default value important in the `prompt` function for Internet Explorer?
   - In Internet Explorer (IE), if you don't provide a default value as the second argument in the `prompt` function, IE will insert the text "undefined" into the prompt's input field. To prevent this unexpected behavior and to ensure consistency across different browsers, it's recommended to always provide a default value when using the `prompt` function in IE.

Feel free to incorporate these answers into your README.md file for learners' reference and understanding.
