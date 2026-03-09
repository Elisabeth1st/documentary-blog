# Astro Starter Kit: Minimal

```sh
npm create astro@latest -- --template minimal
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal: 

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
# documentary-blog

artikelen als .md in src/content/posts
favicon in public/favicon.svg
globale styles in src/styles/global.css
artikeltemplate in src/pages/[slug].astro 

Future post:
1. write article
2. set future publishDate
3. npm run build
4. git add .
5. git commit -m "Add scheduled post"
6. git push
7. wait for scheduled deploy

Immediate post:
1. set publishDate to today
2. npm run build
3. git add .
4. git commit -m "Publish post"
5. git push


En voor je `README.md` zou ik alleen een korte verwijzing toevoegen, bijvoorbeeld:

```md
## Publishing

See `PUBLISHING_WORKFLOW.md` for:

- immediate publishing
- scheduled publishing
- GitHub Actions + Cloudflare deploy flow
- MDX rules
- build and git workflow