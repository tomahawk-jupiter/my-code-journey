---
title: "Code Example Blog Post"
date: "2023-05-06"
tags:
  - example
  - javascript
description: "This is an example blog post, it includes some code examples."
---

This example is to try out how code is displayed. How to get syntax highlighting working. Example [of a link](#h2-header) links to header below. And an external [NextJS](https://nextjs.org/) link.

This is an inline code example: <code class="inline-code">let word = "hello";</code>. It uses html code tags with the class **inline-code**.

Link to previous post [ssg-ssr](/blog/ssg-ssr)

## H2 Header

Another inline code `$ yarn dev` example. This one uses single backticks, markdown style.

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
