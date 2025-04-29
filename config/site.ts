export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Brezee Coffee',
  description: 'A landing page for a brezee coffee cafe.',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'about',
      href: '/docs',
    },
    {
      label: 'menu',
      href: '/pricing',
    },
    {
      label: 'location',
      href: '/blog',
    },
  ],
};
