# Publishing workflow for elsedes.com / documentary-blog

This blog supports both immediate publishing and scheduled publishing.

## How scheduled publishing works

Posts are controlled by their `publishDate` in the frontmatter.

Future posts are filtered in:

- `src/pages/index.astro`
- `src/pages/[slug].astro`

This means:

- a post with a future `publishDate` does **not** appear on the homepage yet
- a post with a future `publishDate` does **not** get its own route yet
- the post only becomes visible after a new build/deploy runs on or after that date

Important: GitHub and Cloudflare do **not** understand publish dates themselves.  
The logic lives in the Astro code.

## Deploy system

This project now has two ways to deploy:

### 1. Normal deploy by push
A normal push to `main` triggers a Cloudflare deploy.

Use this for:
- immediate fixes
- articles that should go live right away
- layout/content changes that should appear immediately

### 2. Scheduled deploy
A GitHub Actions workflow triggers a Cloudflare Pages Deploy Hook on a schedule.

This is used for:
- future-dated posts
- making scheduled content visible without manual deployment on the publication day

The workflow file is:

`.github/workflows/scheduled-deploy.yml`

The Cloudflare Deploy Hook URL is stored as a GitHub Actions secret:

`CLOUDFLARE_DEPLOY_HOOK`

## Immediate publishing workflow

Use this when a post should go live now.

1. Set `publishDate` to today
2. Run:

```bash
npm run build

If build succeeds:

git add .
git commit -m "Publish post"
git push

Cloudflare should deploy automatically

Scheduled publishing workflow

Use this when a post should go live later.

Write the article in VS Code

Set a future publishDate in the frontmatter

Run:

npm run build

If build succeeds:

git add .
git commit -m "Add scheduled post"
git push

The post stays hidden until a deploy happens on or after the publishDate

The scheduled GitHub workflow triggers those deploys automatically

If push is rejected

Sometimes GitHub is ahead of the local branch, for example after editing something directly on GitHub.

Then use:

git pull --rebase origin main
git push
Testing scheduled publishing

To test scheduled publishing:

Create a test post with a future publishDate

Push it

Confirm that it is not visible on the live site

Run the scheduled workflow manually in GitHub Actions

Confirm that it is still not visible before the publication date

Change the date to today

Push again

Run the workflow again

Confirm that the post is now visible

Manual workflow run

The scheduled workflow can also be triggered manually.

In GitHub:

Open the repository

Go to Actions

Click Scheduled Cloudflare Deploy

Click Run workflow

Choose branch main

Run it

This should trigger a Cloudflare deployment.

MDX rules for this blog

This project uses .mdx files for posts.

MDX is stricter than Markdown. Keep files clean and simple.

Do

keep imports at the top, directly below frontmatter

use regular Markdown for normal text

close tags properly, especially <img ... />

keep HTML blocks clean and separated by blank lines

run npm run build before pushing

Avoid

scripts inside content files

random HTML clutter

unclosed tags

stray --- inside article bodies unless truly needed

mixing multiple approaches for one feature

Minimum frontmatter requirements

Posts must satisfy the content schema.

Required fields currently include:

title

director

producer

releaseYear

author

publishDate

drawing

description

Optional fields include:

distributor

updateDate

seenAt

If a field required by the schema is missing, npm run build will fail.

General rule

Before every push:

npm run build

That catches most problems earlier than Cloudflare does.

Scheduled Cloudflare Deploy