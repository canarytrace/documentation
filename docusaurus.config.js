// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Canarytrace',
  tagline: 'Guardians of your web business',
  favicon: 'img/favicon.ico',
  // Set the production url of your site here
  url: 'https://canarytrace.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'canarytrace', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
      sidebar: {
        collapsible: true, 
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        hideOnScroll: true,
        title: 'Canarytrace',
        logo: {
          alt: 'Canarytrace',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'dropdown',
            label: 'Support',
            position: 'left',
            items: [
              {
                label: 'Forum',
                href: 'https://github.com/canarytrace/documentation/discussions',
              },
              {
                type: 'doc',
                label: 'Contact us',
                docId: 'rum/rumServer',
              },
              // ... more items
            ],
          },
          {
            type: 'search',
            position: 'right',
            //className: ''
          },
          /*
          {to: '/blog', label: 'Blog', position: 'left'},
          */
          /*
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },
          */
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Canarytrace toolset',
                to: 'docs/introduction/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://github.com/canarytrace/documentation/discussions',
              },
              {
                label: 'Discord',
                href: '#',
              },
              {
                label: 'Twitter',
                href: '#',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/canarytrace/documentation/discussions',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Canarytrace, developed by RDPANEK LABS, s.r.o.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        magicComments: [
          // Remember to extend the default highlight class name as well!
          {
            className: 'theme-code-block-highlighted-line',
            line: 'highlight-next-line',
            block: {start: 'highlight-start', end: 'highlight-end'},
          },
          {
            className: 'code-block-error-line',
            line: 'highlight',
          },
        ],
      },
      /*
      announcementBar: {
        id: 'support_us',
        content:
          'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      },
      */
    }),
    plugins: [
      async function myPlugin(context, options) {
        return {
          name: "docusaurus-tailwindcss",
          configurePostCss(postcssOptions) {
            // Appends TailwindCSS and AutoPrefixer.
            postcssOptions.plugins.push(require("tailwindcss"));
            postcssOptions.plugins.push(require("autoprefixer"));
            return postcssOptions;
          },
        };
      },
      [
        require.resolve("@cmfcmf/docusaurus-search-local"),
        {
          indexDocs: true,
          maxSearchResults: 8,
        },
      ],
    ],
    scripts:[
      {
        src: 'https://rum.canarytrace.com/rum',
        async: true,
        id: 'CRUM'
      },
    ],
};

module.exports = config;
