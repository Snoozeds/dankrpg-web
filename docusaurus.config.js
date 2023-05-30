// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DankRPG',
  tagline: 'The Discord economy & RPG bot',
  url: 'https://dankrpg.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

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
      navbar: {
        title: 'DankRPG',
        logo: {
          alt: 'DankRPG Logo',
          src: 'img/dankrpg.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'Welcome',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://dankrpg.xyz/invite',
            label: 'Invite',
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
                to: '/docs/Welcome',
              },
              {
                label: 'Privacy Policy',
                to: '/privacy',
              }
            ],
          },
          {
            title: 'Other Websites',
            items: [
              {
                label: 'Snoozeds (Creator)',
                href: 'https://snoozeds.com',
              },
              {
                label: 'Nekos.rest (API)',
                href: 'https://nekos.rest',
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
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DankRPG. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
