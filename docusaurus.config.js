const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

require('dotenv').config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Notebook',
  tagline: 'one notebook for everything.',
  url: 'https://careyToboo.github.io',
  baseUrl: '/notebook/',
  favicon: 'images/logo-xs.ico',

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'CareyToboo', // Usually your GitHub org/user name.
  projectName: 'notebook', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: 'sidebars.js',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/app.css'),
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    mermaid: {
      theme: {
        light: 'dark',
        dark: 'forest',
      },
      config: {
        // Mermaid config
      },
    },
    navbar: {
      title: 'Notebook',
      logo: {
        alt: 'logo',
        src: 'images/logo-md.png',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'computer/intro',
          label: '计算机技术',
        },
        // { to: '/blog', label: 'Blog', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} CareyToboo, Inc.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};

module.exports = config;
