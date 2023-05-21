---
title: "Code Example Blog Post"
date: "2023-05-06"
---

This example is to try out how code is displayed. How to get syntax highlighting working.

This is an inline code example: <code class="inline-code">let word = "hello";</code>.

```javascript
// hello.js
let word = "hello";

const hello = () => {
  console.log(word);
  return;
};
hello();
// https://prismjs.com/plugins/
```

```css
h1 {
  color: red;
}
```

<div class="line-numbers">

```python
# hello.py
def say_hello():
  print("hello")

say_hello()
```

```java
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello World");
  }
}
```

</div>

<h2>Embedded html in markdown test</h2>

<p>The heading and this paragraph are written using html inside the markdown file.</p>
