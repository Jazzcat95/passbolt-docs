// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarConfig}
 */
const userSidebar = [
  {
    type: 'category',
    label: 'Introduction',
    collapsed: false,
    link: { type: 'doc', id: 'user/index' },
    items: [{ type: 'autogenerated', dirName: 'user/introduction' }],
  },
  {
    type: 'category',
    label: 'Quickstart',
    collapsed: true,
    link: { type: 'generated-index', slug: 'user/quickstart' },
    items: [{ type: 'autogenerated', dirName: 'user/quickstart' }],
  },
  {
    type: 'category',
    label: 'Basic Features',
    collapsed: true,
    link: {type: 'doc', id: 'user/basic-features/index'},
    items: [{ type: 'autogenerated', dirName: 'user/basic-features' }],
  },
  {
    type: 'category',
    label: 'Advanced features',
    collapsed: true,
    link: { type: 'generated-index', slug: 'user/advanced-features' },
    items: [{ type: 'autogenerated', dirName: 'user/advanced-features' }],
  },
  {
    type: 'category',
    label: 'Settings',
    collapsed: true,
    link: { type: 'generated-index', slug: 'user/settings' },
    items: [{ type: 'autogenerated', dirName: 'user/settings' }],
  },
  {
    type: 'category',
    label: 'FAQ',
    collapsed: true,
    link: { type: 'generated-index', slug: 'user/faq' },
    items: [{ type: 'autogenerated', dirName: 'user/faq' }],
  },
];
module.exports = userSidebar;
