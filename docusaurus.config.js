/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

module.exports = {
  title: "Plug’n'Play stack for testing of speed and monitoring your web application from user perspective.",
  tagline: "Your browser is a small infrastructure and we know a lot of information that browser hides.",
  url: 'https://canarytrace.com/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Canarytrace', // Usually your GitHub org/user name.
  projectName: 'Smoke', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
    },
    navbar: {
      title: 'Canarytrace',
      logo: {
        alt: 'Canarytrace',
        src: 'img/log-canary.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'features/overview',
          label: 'Features',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'features/dashboards',
          label: 'Dashboards',
          position: 'left',
        },
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'references/releases',
          label: 'Release notes',
          position: 'right',
        },
        {
          href: 'https://canarytrace.medium.com/',
          label: 'Blog',
          position: 'right'
        },
        {
          type: 'doc',
          docId: 'support/contactus',
          label: 'Support',
          position: 'right'
        },
        {
          href: 'https://twitter.com/canarytrace',
          position: 'right',
          className: 'header-twitter-link',
          'aria-label': 'Twitter profile',
        },
        {
          href: 'https://bit.ly/tt-discord',
          position: 'right',
          className: 'header-chat-link',
          'aria-label': 'Discord chat server',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Why Canarytrace?',
              to: 'docs/',
            },
            {
              label: 'Get started',
              to: 'docs/canary/start',
            },
            {
              label: 'Webinars',
              to: 'docs/media/webinars',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Issues',
              href: 'https://github.com/canarytrace/documentation/issues/new/choose',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/canarytrace',
            },
            {
              label: 'Discord',
              href: 'https://bit.ly/tt-discord',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              href: 'https://canarytrace.medium.com/',
            }
          ],
        },
        {
          title: 'About Us',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Our team',
              to: 'people',
            },
            {
              label: 'Events',
              href: 'https://www.meetup.com/ProfessionalTesting/',
            },
            {
              label: 'Subscribe',
              to: 'docs/support/subscribe'
            }
          ],
        },
      ],
      logo: {
        alt: 'Canarytrace',
        src: 'img/logo-canary-footer.png',
        href: 'https://canarytrace.com/',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Canarytrace.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ]
};
