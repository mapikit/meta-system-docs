/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Meta-System',
  tagline: 'A sytem to be any system.',
  url: 'https://mapikit.github.io',
  baseUrl: '/meta-system-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  staticDirectories: ['static'],
  favicon: 'img/favicon.ico',
  organizationName: 'mapikit', // Usually your GitHub org/user name.
  projectName: 'meta-system-docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    navbar: {
      title: 'Meta-System',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_metasystem.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'api-docs/getting-started',
          position: 'left',
          label: 'Docs',
        },
        {
          type: 'doc',
          docId: 'guides/guides-introduction',
          position: 'left',
          label: 'Guides',
        },
        {
          type: 'doc',
          docId: 'tutorials/tutorials',
          position: 'left',
          label: 'Tutorials',
        },
        {
          type: 'search',
          position: 'right'
        },
        {
          href: 'https://github.com/mapikit/meta-system',
          className: 'header-github header-icon',
          'aria-label': 'GitHub Repository',
          position: 'right',
        },
        {
          href: 'https://discord.gg/ndGsnbTW7V',
          className: 'header-discord header-icon',
          'aria-label': 'Discord Server',
          position: 'right'
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/mapikit/meta-system',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/ndGsnbTW7V'
            }
          ],
        },
      ],
      copyright: `Meta-System was built by Mapikit and follows the GPL-3.0 License. Documentation page built with Docusaurus.`,
    }
  },
  presets: [],
  plugins: [
    [ require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexBlog: false,
        indexPages: true
      }
    ],
    ['@docusaurus/plugin-content-docs',
      {
        path: 'docs',
        breadcrumbs: true,
        sidebarPath: require.resolve('./sidebars.js'),
        editUrl:
          'https://github.com/mapikit/meta-system-docs/edit/main/',
      }
    ],
    ['@docusaurus/theme-classic',
      {
        customCss: require.resolve('./src/css/custom.css'),
      },
    ],
    ['@docusaurus/plugin-content-pages', {}]
  ]
};
