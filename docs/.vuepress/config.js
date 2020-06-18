module.exports = {
  title: 'ISMM',
  description: 'Sound Music Movement Team - Ircam STMS',
  themeConfig: {
    logo: '/logo-ismm-200x200.png',
    lastUpdated: 'Last Updated',

    // Edit on github confiuration
    // cf. https://vuepress.vuejs.org/theme/default-theme-config.html#git-repository-and-edit-links
    repo: 'ircam-ismm/ircam-ismm.github.io',
    // options for generating "Edit this page" link
    docsDir: 'docs',
    docsBranch: 'sources',
    editLinks: true,


    // header navigation configuration
    nav: [
      { text: 'Youtube Channel', link: 'https://www.youtube.com/ircamismm' },
      { text: 'Institutional Website', link: 'https://www.stms-lab.fr/team/interaction-son-musique-mouvement/' },
    ],

    // side bar configuration
    sidebar: [
      ['', ' '], // dirty hack to have the "next" arrow on the homepage...

      '/research-areas',
      // '/software',

      {
        title: 'Max / MSP',      // required
        path: '/max-msp/',     // optional, which should be a absolute path.
        collapsable: false,  // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: [
          '/max-msp/test',
        ]
      },

      {
        title: 'Javascript',      // required
        path: '/javascript/',     // optional, which should be a absolute path.
        collapsable: false,  // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: [
          '/javascript/good-practices-for-libraries',
        ]
      },

      '/hardware',

      {
        title: 'Misc',      // required
        path: '/misc/',     // optional, which should be a absolute path.
        collapsable: false,  // optional, defaults to true
        sidebarDepth: 2,    // optional, defaults to 1
        children: [
          '/misc/contributing-to-this-site',
        ]
      },
    ],
  },
};
