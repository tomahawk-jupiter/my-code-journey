# Notes

## Contents

- [Project Structure](#project-structure)
  - [Blog Data: Utils](#blog-data-utils)
  - [Layout](#layout)
- [gray-matter](#gray-matter)
- [Fonts with NextJS](#fonts-with-nextjs)

## Project Structure

### Blog Data: Utils

`utils/posts.js` has three functions for getting blog data:

1. `getSortedPostsData`: returns all the blog post meta data.
2. `getAllPostIds`: returns all the posts titles as use as ids.
3. `getPostData`: return the id, data and content for a single blog post.

### Layout

I use a single layout component to wrap all pages by applying it in the `_app.js`. This is where I will put the navbar/header and footer sections.

[Page Top](#contents)

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
