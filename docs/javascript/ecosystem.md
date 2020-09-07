# Ecosystem

This page lists the JavaScript tools and libraries created and actively maintained by the ISMM team.

[[toc]]

## `soundworks`

`soundworks` is a full-stack JavaScript framework for developing distributed WebAudio and multimedia applications. The framework can be extended with plugins to add new functionalities.

- [Documentation](https://collective-soundworks.github.io/introduction.html)
- [Github](https://github.com/collective-soundworks/)
- [Available Plugins](https://collective-soundworks.github.io/ecosystem.html)

> License: BSD-3-Clause

## `CoMo`

`CoMo` is a full-stack JavaScript framework for developing collective gesture-based interactive Sound/Music applications. It makes use of Interactive Machine Learning approaches. The framework is built on top of the `soundworks` framework and currently under heavy development.

- [Github](https://github.com/ircam-ismm/como)

> License: BSD-3-Clause


## `waves-masters`

`waves-masters` is a low-level library dedicated at precise scheduling and transport. While primarily created for audio applications, it can be used with any arbitrary clock making it a good and robust solution for many use-cases. The library has been initially developed in, and later abstracted from, the `waves-audio` library

- [Github](https://github.com/wavesjs/waves-masters)
- [Documentation](https://wavesjs.github.io/waves-masters/)

```sh
npm install --save waves-masters
```

> License: BSD-3-Clause

## `waves-audio`

`waves-audio` provides low-level audio engines for buffer based synthesis techniques such as granular or concatenative synthesis.

- [Github](https://github.com/wavesjs/waves-masters)
- [Documentation](https://wavesjs.github.io/waves-masters/)

```sh
npm install --save waves-audio
```

> License: BSD-3-Clause

## `node-libpd`

`node-libpd` is a Node.js binding for the _libpd_ library. It allows to instantiate and orchestrate _PureData_ patches inside the Node.js environment.

- [Github](https://github.com/ircam-jstools/node-libpd)

```sh
npm install --save node-libpd
```

> License: BSD-3-Clause

## `@ircam/devicemotion`

`@ircam/devicemotion` is a low-level library dedicated at offering a unified interface, and providing specification compliant data across browser for the W3C devicemotion specifications.

- [Github](https://github.com/ircam-jstools/devicemotion)

```sh
npm install --save @ircam/devicemotion
```

> License: BSD-3-Clause

## `@ircam/simple-components`

Set of Web components dedicated at prototyping audio oriented GUI interfaces. The library is built on top of the [`lit-element`](https://lit-element.polymer-project.org/) library.

- [Github](https://github.com/ircam-ismm/simple-components)
- [Documentation](https://ircam-ismm.github.io/simple-components/)

```sh
npm install --save @ircam/simple-components
```

> License: BSD-3-Clause

## `@ircam/sync`

Low-level library dedicated at synchronizing fleet of devices on a common clock.

- [Github](https://github.com/collective-soundworks/sync)
- [Documentation](http://collective-soundworks.github.io/sync/)

> License: BSD-3-Clause

```sh
npm install --save @ircam/sync
```
