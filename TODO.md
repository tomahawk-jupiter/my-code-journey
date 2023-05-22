# Notes

TODOS:

- ✅ Create new project boilerplate.
- ✅ Got the dynamic routes setup - I just copied it from the tutorial example.
- ✅ next font usage (Inter font).
- ✅ changed to using a single layout, applied in `_app.js`.
- ✅ Navbar & header/logo - this can go in the `layout` file.
- ✅ Footer - can also go in the `layout` file.
- Basic css layout styling.
  - Position footer so it stays at bottom of page. See `NOTES.md`
- Fixed navbar
- Logo
- Color & typography css - make it look nice.
  - The html tags will have to be styled in `globals.css`, this will be the simplest way to style the blog posts.
- Front-matter
  - what meta data do I want to include, eg. categories, tags.
  - excerpt
- Tweak code examples style, particularly font-size.
- remark-gfm - use this to include some github flavoured markdown features like tables and checklist. Add it to remark in `utils/posts.js` like so: `remark().use(remarkGfm)`.
- Internal links between blog posts.
- Dynamic html meta tags for individual posts (to help with SEO).
- Clickable categorie/tags, list all posts containing the relevant tag. Add another function in `utils/posts.js`.

- PAGE: Home page - short intro & recent posts.
- PAGE: About page - about me & the site. Maybe contact form can go here?
- PAGE: Cheatsheets / quick reference - git commands, bash commands.
- PAGE: Contact form.

EXTRAS

- Copy button for code/command examples.
- Only necessary when there are lots of posts:
  - Limit posts per page with pagination or load more button.
  - Category/tag dropdown select or button of some kind.
  - Search. Changes displayed posts as user types.
- Comments / message board.
