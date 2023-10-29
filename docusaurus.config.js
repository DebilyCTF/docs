// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

const organizationName = 'DebilyCTF';
const projectName = 'docs';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CTF Cheatsheet',
  url: `https://${organizationName}.github.io`,
  baseUrl: `/${projectName}/`,

  favicon: 'img/favicon.ico',
  i18n: {
      defaultLocale: 'en',
      locales: ['en'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName,
  projectName,

  presets: [
      [
          '@docusaurus/preset-classic',
          /** @type {import('@docusaurus/preset-classic').Options} */
          ({
              docs: {
                  sidebarPath: require.resolve('./sidebars.js'),
                  breadcrumbs: false,
                  showLastUpdateAuthor: true,
                  // Please change this to your repo.
                  editUrl: 'https://github.com/boyney123/eventcatalog/edit/master/website/',
              },
              theme: {
                  customCss: [
                      require.resolve('./src/css/custom.css'),
                      require.resolve('./node_modules/prismjs/themes/prism-tomorrow.css')
                  ]
              }
          }),
      ],
  ],
  themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
          colorMode: {
              respectPrefersColorScheme: true,
          },
          navbar: {
              title: 'CTF Cheatsheet',
              logo: {
                  alt: 'flag icon',
                  src: 'img/logo.svg',
              },
              items: [
                  {
                      type: 'doc',
                      position: 'left',
                      docId: 'cheatsheet/kek',
                      label: 'Cheatsheet',
                  },
                  {
                      type: 'doc',
                      position: 'left',
                      docId: 'writeups/index',
                      label: 'Writeups',
                  },
              ],
              hideOnScroll: false,
          },
          prism: {
              theme: lightCodeTheme,
              darkTheme: darkCodeTheme,
          },
          footer: {
              copyright: 'Developed and designed by team Debily',
              style: 'dark',
              links: [
                  {
                      title: 'Socials',
                      items: [
                          {
                              label: 'CTFtime',
                              href: 'https://ctftime.org/team/138085',
                          },
                      ],
                  },
              ],
          },
      }),
};

module.exports = config;
