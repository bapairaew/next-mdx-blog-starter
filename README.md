# next-mdx-blog-starter

Simple [Next.js](https://nextjs.org) + MDX based blog starter template.

[Demo](https://next-mdx-blog-starter-lac.vercel.app/)

## Instruction

1. clone this repository and run `yarn install`
2. Start writing your blog in MDX in `/pages/blogs`
3. Each MDX file will automatically turn into a new page like normal Next.js page

## Theming

This project uses [Theme UI](https://theme-ui.com) so please follow Theme UI documentation
to customise your theme. There is a base theme defined in `/theme-ui/theme.js`

## Layout

Thanks to [next-mdx-enhanced](https://github.com/hashicorp/next-mdx-enhanced) you can define
a layout for your blog. There is an example in `/layouts/BlogLayout.js`

## MDX Component

You can define your own MDX component or override it in `/theme-ui/mdxComponents.js`

## SEO

You may define your document title, description or metadatas by using [Front Matter](https://jekyllrb.com/docs/front-matter/)
format in your MDX file. You may also want to edit your layout file to map more metadata there.
