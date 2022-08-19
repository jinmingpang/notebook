const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

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
  organizationName: 'CareyToboo', // Usually your GitHub org/user name.
  projectName: 'notebook', // Usually your repo name.
  deploymentBranch: 'gh-pages',

  plugins: [
    'docusaurus-plugin-less',
    ['@docusaurus/plugin-content-pages', {}],
    [
      '@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/app.css'),
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs',
        sidebarPath: 'sidebars.js',
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ],
  ],

  scripts: [],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themes: [
    '@docusaurus/theme-live-codeblock',
    [
      // https://github.com/easyops-cn/docusaurus-search-local
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['zh'],
        docsRouteBasePath: '/notebook',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],
  themeConfig: {
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    liveCodeBlock: {
      playgroundPosition: 'bottom',
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
        {
          type: 'doc',
          position: 'left',
          docId: 'development/intro',
          label: '程序开发',
        },
        {
          type: 'doc',
          position: 'left',
          docId: 'tools/intro',
          label: '常用工具',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} CareyToboo, Inc.`,
    },
  },
};

module.exports = config;
