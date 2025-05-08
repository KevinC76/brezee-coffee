export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Brezee Coffee',
  description: 'A landing page for a brezee coffee cafe.',
  navItems: [
    {
      label: 'Home',
      href: '#hero',
    },
    {
      label: 'About',
      href: '#about',
    },
    {
      label: 'Menu',
      href: '#menu',
    },
    {
      label: 'Location',
      href: '#location',
    },
  ],
};
