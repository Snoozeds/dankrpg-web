// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DankRPG',
  tagline: 'The open source Discord economy & RPG bot.',
  url: 'https://docs.dankrpg.xyz',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  organizationName: 'Snoozeds',
  projectName: 'dankrpg-docs',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
      {name: 'keywords', content: 'bot, discord, economy bot, rpg bot, dankrpg, dank rpg'},
      {name: 'og:image', content: 'https://dankrpg.xyz/assets/dankrpg.png'}, 
      {name: 'theme-color', content: '#24b8ff'},],
      algolia: {
        appId: 'WY8FLWV5YJ',
  
        apiKey: 'd7bdc6af252da8a79f56d8eaa9daaf1c',
  
        indexName: 'dankrpg',
  
        contextualSearch: true,
  
        externalUrlRegex: 'external\\.com|domain\\.com',
  
        searchParameters: {},
  
        searchPagePath: 'search',
      },
      navbar: {
        title: 'DankRPG',
        logo: {
          alt: 'Logo',
          src: 'img/dankrpg.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Intro/welcome',
            position: 'left',
            label: 'Bot Docs',
          },
          {
            href: 'https://github.com/Snoozeds/dankrpg-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Docs',
                to: '/docs/Intro/welcome',
              },
              {
                label: 'Privacy',
                to: '/privacy/',
              },
              {
                label: 'Terms',
                to: '/tos/',
              },
            ],
          },
          {
            title: 'Websites',
            items: [
              {
                label: 'Snoozeds',
                href: 'https://snoozeds.com',
              },
              {
                label: 'Nekos.rest API',
                href: 'https://nekos.rest',
              },
              {
                label: 'DankRPG API (Discontinued)',
                href: 'https://apidocs.dankrpg.xyz',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Snoozeds/DankRPG',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/Cc3xBSpWeB',
              }
            ],
          },

        ],
        copyright: `Copyright © ${new Date().getFullYear()} DankRPG, built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
