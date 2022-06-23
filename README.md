# `ircam-ismm.github.io`

> repository for the [https://ircam-ismm.github.io](https://ircam-ismm.github.io) website.

## Contributing

- the website is created using [VuePress](https://vuepress.vuejs.org/)
- source files are located in branch `sources`
- a github action will build and deploy the website on the `master` branch


### Install ###

1. Clone repo and go to `sources` branch where the source files are located

```sh
git clone git@github.com:ircam-ismm/ircam-ismm.github.io.git
cd ircam-ismm.github.io
git checkout sources
npm install
```

### Run Development Mode ###

Get remote changes

```sh
git pull origin sources
```

Start the development server

```sh
npm run dev
```

Go to [http://127.0.0.1:8080](http://127.0.0.1:8080) in your favorite browser (which shall not be Safari) to see the development preview and edit some content (cf. [examples](#examples)).

### Publish ###

Push your changes on the source branch

```sh
git add -A
git commit -m 'your message'
git push origin sources
```

## License

BSD-3-Clause
