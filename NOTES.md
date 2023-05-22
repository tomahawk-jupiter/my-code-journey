# Notes

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

- [Article](https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/)

The example below is a **work-in-proress**. The width of the footer was spilling out of the parent container when screen got narrower.

```css
.footer-parent-container {
  position: relative; /* because footer is absolute */
  min-height: 100vh; /* keep footer at bottom of page */
  padding-bottom: 10rem; /* this should match the footer height, but what about responsiveness? */
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
```

[Page Top](#contents)
