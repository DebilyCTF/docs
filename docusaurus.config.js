// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CTF Cheatsheet',
  // TODO: deploy and set the link
  url: 'https://example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  favicon: 'img/favicon.ico',
  i18n: {
      defaultLocale: 'en',
      locales: ['en'],
  },
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'Debily',

  // TODO: add for deply purposes
  // projectName: '',
  // TODO: add for deply purposes
  // deploymentBranch: '',
  // TODO: add for deply purposes
  // githubHost: '',
  // TODO: add for deply purposes
  // githubPort: '',
  presets: [
      [
          '@docusaurus/preset-classic',
          /** @type {import('@docusaurus/preset-classic').Options} */
          ({
              docs: {
                  sidebarPath: require.resolve('./sidebars.js'),
                  // Please change this to your repo.
                  editUrl: 'https://github.com/boyney123/eventcatalog/edit/master/website/',
              },
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
                      docId: 'writeups/create-a-page',
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
