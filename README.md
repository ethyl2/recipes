# favorite recipes

Current Deployment: https://recipes-heathernuffer.vercel.app/

Originally Deployed at https://heathers-recipes.herokuapp.com/


<img
  src="https://raw.githubusercontent.com/ethyl2/recipes/main/static/images/fork-and-spoon.png"
  alt="logo"
  style="width: 150px;"
/>

## The Why

I decided to build this site because I'm fed up with recipe sites that have so much extra, annoying things.

All I really want to know:

- the ingredients
- the steps
- why the recipe is worth making, what makes it special (written in a concise way, not a billion paragraphs)

What I don't need:

- ads
- a ton of text before getting to the actual recipe
- pop ups
- brand names in the ingredients list (unless it actually makes a difference in how the recipe turns out)
- signups for newsletters
- videos unrelated to the recipe
- the feeling that the page is more about the person than the recipe

So here is my ongoing project to make a less stressful recipe site.

These recipe pages have

- the ingredients
- the instructions
- a button for displaying a brief message about the recipe
- a button to print a nice, concise black & white version of the recipe
- pills the user can click to see other recipes that are in the same categories

This site also has a page for others to submit recipes for inclusion in this site.

## The Dev Details

I've built this with Nuxt.js

The recipes are stored in a javascript file.

In the future, I might consider building an backend api for storing and accessing them.

Contributions to the code (and recipes, too) are very welcome. Read more [here](./CONTRIBUTING.md).

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

---

Deploying Nuxt on Heroku: [docs](https://nuxtjs.org/docs/2.x/deployment/heroku-deployment)

---

QR Code Generation API: https://goqr.me/api/doc/create-qr-code/
