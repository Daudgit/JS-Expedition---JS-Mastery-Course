🚀 **Core JavaScript Concepts** 🚀

The core JavaScript concepts covered in this section include:

1️⃣ **<script> tag**: The <script> tag is used to embed JavaScript code into an HTML document. It can be placed in the <head> or <body> section. Scripts are automatically executed when the browser processes the tag.

2️⃣ **External scripts**: JavaScript code can be placed in separate files and linked to HTML using the "src" attribute in the <script> tag. External scripts are beneficial for caching, reducing traffic, and making pages faster.

3️⃣ **Type and Language attributes**: The "type" attribute in the <script> tag specifies the MIME type of the script. It's not required for modern JavaScript. The "language" attribute is obsolete and no longer makes sense because JavaScript is the default language.

4️⃣ **Comment inside <script> tags**: In the past, comments like "<!-- ... //-->" were used to hide JavaScript code from old browsers. This is not used in modern JavaScript as it's no longer necessary for current browsers.

📝 **Quiz** 📝

1️⃣ Why do we use the <script> tag in HTML documents?
- a) To include CSS styles.
- b) To insert JavaScript code into the document.
- c) To define HTML attributes.
- d) To specify the character encoding of the page.

Answer: b) To insert JavaScript code into the document.

2️⃣ What is the purpose of using an external script file in HTML?
- a) It makes the page load faster.
- b) It helps reduce browser compatibility issues.
- c) It allows caching of the script, making other pages load faster.
- d) It improves the security of the website.

Answer: c) It allows caching of the script, making other pages load faster.

3️⃣ Is the "type" attribute required for the <script> tag in modern JavaScript?
- a) Yes, it's required for all scripts.
- b) Yes, but it is used to specify the version of JavaScript.
- c) No, it's not required for modern JavaScript.
- d) No, it's only used for CSS files.

Answer: c) No, it's not required for modern JavaScript.

4️⃣ Which attribute can't be used with the <script> tag if the "src" attribute is also used?
- a) "type"
- b) "language"
- c) "src"
- d) "async"

Answer: a) "type"

5️⃣ What's the purpose of external scripts in terms of reducing website traffic?
- a) They prevent users from downloading scripts.
- b) They allow caching, so the script is downloaded only once.
- c) They make scripts load asynchronously.
- d) They block other scripts from being downloaded.

Answer: b) They allow caching, so the script is downloaded only once.

🚀 **Code Examples** 🚀

**Inline Script:**

```html
<!DOCTYPE HTML>
<html>

<body>

  <p>Before the script...</p>

  <script>
    alert('Hello, world!');
  </script>

  <p>...After the script.</p>

</body>

</html>
```

**External Script:**

HTML code:
```html
<!DOCTYPE html>
<html>

<body>

  <script src="alert.js"></script>

</body>

</html>
```

JavaScript code in alert.js:
```javascript
alert("I'm JavaScript!");
```

Now, you have a better understanding of attaching JavaScript code to an HTML page and using external scripts! 🎉 🚀😊
