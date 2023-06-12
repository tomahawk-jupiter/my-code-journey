# Notes

Some notes.

## Contents

- [Project Structure](#project-structure)
  - [Blog Data: Utils](#blog-data-utils)
  - [Layout](#layout)
  - [Global Styles - my defaults for html tags](#global-styles---my-defaults-for-html-tags)
- [gray-matter](#gray-matter)
- [Fonts with NextJS](#fonts-with-nextjs)
- [Active Link Style](#active-link-style)
- [Style List Bullet Points](#style-list-bullet-points)
- [Prism syntax highlighting limitations](#prism-syntax-highlighting-limitations)
- [Footer position](#footer-position)
- [Form Submit](#form-submit)

## Project Structure

### Blog Data: Utils

`utils/posts.js` has three functions for getting blog data:

1. `getSortedPostsData`: returns all the blog post meta data.
2. `getAllPostIds`: returns all the posts titles as use as ids.
3. `getPostData`: return the id, data and content for a single blog post.

### Layout

I use a single layout component to wrap all pages by applying it in the `_app.js`. This is where I will put the navbar/header and footer sections.

This is where the `SITE_TITLE` is set.

[Page Top](#contents)

### Global Styles - my defaults for html tags

This seems to be the easiest place to set some default html tag styles that will apply to blog posts. They may be overwritten by modules.css styles that wrap around the blog post content, either accidently or intentionally.

## gray-matter

Gray Matter is for seperating the front-matter and content of a string or passed in file contents. I use it in `utils/posts.js`.

You can get an excerpt of the content with `result.excerpt`.

```javaScript
const matterResult = matter(fileContents, {excerpt: true});
matterResult.data // front matter data
matterResult.content // contents
matterResult.excerpt // excerpt
```

You can set excerpt as a function to control how its extracted:

```javascript
// returns the first 4 lines of the contents
function firstFourLines(file, options) {
  file.excerpt = file.content.split("\n").slice(0, 4).join(" ");
}
const matterResult = matter(fileContents, { excerpt: firstFourLines });
```

[Page Top](#contents)

## Fonts with NextJS

Import the font you want from next and use it like below by applying the classname. I dont this in `layout.jsx` which is used to wrap all my pages.

There are other ways to use the next fonts.

```javascript
// layout.jsx
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children, home }) {
  return <div className={inter.className}>{children}</div>;
}
```

[Page Top](#contents)

## Active Link Style

The `useRouter` can be used to get the route name.

```javascript
import { useRouter } from "next/router";

export default function Component() {
  const router = useRouter();
  const currentRoute = router.pathname;

  return (
    <Link className={currentRoute === "/" ? "active-style-class" : ""} href="/">
      Home
    </Link>
  );
}
```

[Page Top](#contents)

## Style List Bullet Points

```css
ul {
  list-style: none; /* Remove default bullets */
}

ul li::before {
  content: "\2022"; /* Add content: \2022 is the CSS Code/unicode for a bullet */
  color: var(--accent-color); /* Change the color */
  font-weight: bold; /* If you want it to be bold */
  display: inline-block; /* Needed to add space between the bullet and the text */
  width: 1em; /* Also needed for space (tweak if needed) */
  margin-left: -1em; /* Also needed for space (tweak if needed) */
}
```

## Prism syntax highlighting limitations

There doesn't seem to be a way to do inline code with certain characters like `<` or `>`.

Quotes used inside inline code markdown (backticks) will be replaced with html entities. Using `<code>` tags will allow the use of quotes.

[Page Top](#contents)

## Footer position

The footer should always be at the bottom of the page, even if the content above it doesn't take up much space.

```css
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Grow page content to push footer to the bottom */
.pageContent {
  flex-grow: 1;
}
```

[Page Top](#contents)

## Links to previous posts

This seems to be simple. It works in dev mode. Just do the link like this:

```md
[A previous post](/blog/post-title)
```

## Light theme toggle

You can style css based on an attribute that is set in the javascript. In this example, the "default" is dark. The light color variables are only used when the `data-theme` attribute is set to light. Setting it to dark will go back to using the default because there is no specific rule for it.

```css
:root {
  --bg-color: black;
  --fg-color: white;
}
[data-theme="light"] {
  --bg-color: white;
  --fg-color: black;
}
```

```javascript
const toggleTheme = () => {
  if (darkTheme) {
    document.documentElement.setAttribute("data-theme", "light");
    setDarkTheme(false);
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    setDarkTheme(true);
  }
};
```

## Form Submit

[Form Submit](https://formsubmit.co/). This is for connecting your html form to your email without exposing your email address.

Each form needs activating from the URL its sent from. Send the form and you will get an email with an activation button, click it and you'll get a string of random-like characters to put as the value for the form action attribute.

Example:

```html
<form
  action="https://formsubmit.co/8bab09675a3e92545540666f4bb4a000"
  method="POST"
></form>
```

I will need to do this after deploying my blog site.

[Page Top](#contents)
