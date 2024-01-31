// @ts-check

/**
 * @type {import('@docusaurus/plugin-content-docs/src/sidebars/types').SidebarConfig}
 */
const hostingSidebar = [
  {
    type: 'category',
    label: 'Install',
    collapsed: true,
    items: [{ type: 'autogenerated', dirName: 'hosting/install' }],
  },
  {
    type: 'category',
    label: 'Update',
    collapsed: true,
    link: { type: 'generated-index', slug: 'hosting/update' },
    items: [{ type: 'autogenerated', dirName: 'hosting/update' }],
  },
  {
    type: 'category',
    label: 'Backup',
    collapsed: true,
    link: { type: 'generated-index', slug: 'hosting/backup' },
    items: [{ type: 'autogenerated', dirName: 'hosting/backup' }],
  },
];
module.exports = hostingSidebar;
