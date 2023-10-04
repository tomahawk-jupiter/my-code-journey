# Notes

TODOS:

- ✅ Create new project boilerplate.
- ✅ Got the dynamic routes setup - I just copied it from the tutorial example.
- ✅ next font usage (Inter font).
- ✅ changed to using a single layout, applied in `_app.js`.
- ✅ Navbar & header/logo - this can go in the `layout` file.
- ✅ Footer - can also go in the `layout` file.
- ✅ Position footer so it stays at bottom of page. See `NOTES.md`
- ✅ Fixed navbar
- ✅ remark-gfm - use this to include some github flavoured markdown features like tables and checklist. Add it to remark in `utils/posts.js` like so: `remark().use(remarkGfm)`.
- ✅ Color theme toggle.
- Dynamic html meta tags for individual posts (to help with SEO).
  - ✅ title
  - TODO: keywords
  - TODO: description
- CSS for content rendered from markdown
  - ✅ Block quote
- TODO: Add some real blog posts. Look at various notes for ideas.
- TODO: Clickable categorie/tags, list all posts containing the relevant tag. Add another function in `utils/posts.js` to returned the filtered posts.
- TODO: Contact form.
  - ✅ html
  - ✅ CSS
  - TODO: connect form to formSubmit (need to deploy site first)

EXTRAS

- Copy button for code/command examples.
- Only necessary when there are lots of posts:
  - Limit posts per page with pagination or load more button.
  - Category/tag dropdown select or button of some kind.
  - Search. Changes displayed posts as user types.
- Comments / message board.
- PAGE: my projects.
- PAGE: Cheatsheets / quick reference - git commands, bash commands, things like that.
