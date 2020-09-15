# Contributing to this Website

You wrote some documentation about some stuff that could be useful to others, or you would like to fix or even improve existing content (which might be a great challenge)? Please contribute!

::: tip Note
This site is generated using `vuepress`, full documentation can be found at [https://vuepress.vuejs.org/](https://vuepress.vuejs.org/)
:::

## Install

1. Clone repo and go to `sources` branch where the source files are located

```sh
git clone git@github.com:ircam-ismm/ircam-ismm.github.io.git
cd ircam-ismm.github.io
git checkout sources
npm install
```

## Run Development Mode

Get remote changes

```sh
git pull origin sources
```

Start the development server

```sh
npm run dev
```

Go to [http://127.0.0.1:8080](http://127.0.0.1:8080) in your favorite browser (which shall not be Safari) to see the development preview and edit some content (cf. [examples](#examples)).

## Publish

Push your changes on the source branch

```sh
git add -A
git commit -m 'your message'
git push origin sources
```

## Examples

### Adding a Page

1. Add your markdown file in the directory you are interested in (e.g. `/misc`)

::: tip Note
If your file is quite long, it can be nice to put a "table of content" on top of it using the `[[toc]]` macro:

```md
# My Awesome Document

[[toc]]

## subsection 1

Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
consequat. 

## subsection 2

Duis aute irure dolor in reprehenderit in voluptate velit esse
cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

cf. [https://vuepress.vuejs.org/guide/markdown.html#table-of-contents](https://vuepress.vuejs.org/guide/markdown.html#table-of-contents)
::: 

2. Add your page to the sidebar menu

- Open the `.vuepress/config.js`
- Add the path to your markdown file in `children` entry of the section you are interested in:

```js
{
  title: 'Misc',      // required
  path: '/misc/',     // optional, which should be a absolute path.
  collapsable: false,  // optional, defaults to true
  sidebarDepth: 2,    // optional, defaults to 1
  children: [
    '/misc/setting-up-environment',
    '/misc/local-deployment',
    '/misc/contributing-to-this-site',
    // add your file here
  ]
},
```

3. [Publish](#publish)

