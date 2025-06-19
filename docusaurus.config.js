// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';
import {GitHub, Mail, Globe} from 'iconoir-react';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NEOMINT-RESEARCH',
  tagline: 'Open-source research division of NeoMINT GmbH',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://research.neomint.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'neomint-research', // Usually your GitHub org/user name.
  projectName: 'research-portal', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/favicon.ico',
      navbar: {
        title: 'NEOMINT-RESEARCH',
        items: [
          {to: '/docs/whitepapers/2024/ai-ethics-framework', label: 'Portal', position: 'left'},
          {
            href: 'https://github.com/neomint-research/research-portal',
            html: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2C6.47715 2 2 6.47715 2 12C2 16.4183 4.86523 20.1657 8.83877 21.4893C9.33908 21.5807 9.52141 21.2719 9.52141 21.0074C9.52141 20.7693 9.51227 20.0266 9.50782 19.0314C6.72638 19.6353 6.13948 17.6372 6.13948 17.6372C5.68459 16.4774 5.02895 16.1686 5.02895 16.1686C4.121 15.5536 5.09771 15.5658 5.09771 15.5658C6.10122 15.6355 6.62936 16.5966 6.62936 16.5966C7.52135 18.1003 8.97014 17.6842 9.53956 17.4282C9.63069 16.7808 9.88914 16.3402 10.1747 16.4204C7.95415 16.4967 5.61952 15.6384 5.61952 11.8039C5.61952 10.7106 6.00934 9.81293 6.64875 9.10808C6.54663 8.88562 6.20273 7.86777 6.74723 6.48787C6.74723 6.48787 7.58643 6.25041 9.49686 7.51351C10.2943 7.29105 11.1497 7.17972 12 7.17534C12.8503 7.17972 13.7063 7.29105 14.5048 7.51351C16.4136 6.25041 17.2517 6.48787 17.2517 6.48787C17.7973 7.86777 17.4534 8.88562 17.3513 9.10808C17.9923 9.81293 18.3805 10.7106 18.3805 11.8039C18.3805 15.6482 16.0419 16.4941 13.8133 16.4126C14.1717 16.7142 14.4914 17.3094 14.4914 18.2204C14.4914 19.5343 14.4792 20.5925 14.4792 21.0074C14.4792 21.2744 14.6599 21.5857 15.1668 21.4883C19.1374 20.1622 22 16.4173 22 12C22 6.47715 17.5228 2 12 2Z" fill="currentColor"/></svg>',
            position: 'right',
            className: 'navbar__icon',
          },
          {
            href: 'mailto:research@neomint.com',
            html: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 9L12 12.5L17 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z" stroke="currentColor" stroke-width="1.5"/></svg>',
            position: 'right',
            className: 'navbar__icon',
          },
          {
            href: 'https://neomint.com', // TODO: Replace with actual website
            html: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999C16 17.9999 13 21.9506 13 21.9506" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.62964 15.5H21.3704" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M2.62964 8.5H21.3704" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>',
            position: 'right',
            className: 'navbar__icon',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} NeoMINT GmbH. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
