export const navBarMenu = [
  {
    title: 'Home',
    href: '/',
    icon: 'home',
    isActive: (pathname: string) => pathname === '/',
  },
  {
    title: 'Items',
    href: '/items',
    icon: 'items',
    isActive: (pathname: string) => pathname.startsWith('/items'),
  },
  {
    title: 'About',
    href: '/about',
    icon: 'info',
    isActive: (pathname: string) => pathname === '/about',
  },
  {
    title: 'Contact',
    href: '/contact',
    icon: 'contact',
    isActive: (pathname: string) => pathname === '/contact',
  },
]

export const featureMenu = [
  { label: 'FREE TO EARN', icon: '/icons/free.svg' },
  { label: 'RANKING', icon: '/icons/ranking.svg' },
  { label: 'VIDEO NFT', icon: '/icons/video.svg' },
  { label: 'HOW TO BUY', icon: '/icons/how-to-buy.svg' },
  { label: 'NEW NFTS', icon: '/icons/new.svg', isNew: true },
  { label: 'ROADMAPS', icon: '/icons/roadmap.svg' },
]

export const footerLinks = [
  {
    title: 'About Us',
    items: [
      { label: 'Careers', href: '#' },
      { label: 'Company Details', href: '#' },
      { label: 'Terms & Conditions', href: '#' },
      { label: 'Help center', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Affiliate', href: '#' },
    ],
  },
  {
    title: 'Products',
    items: [
      { label: 'NFT Marketplace', href: '#' },
      { label: 'Slingshot', href: '#' },
      { label: 'Swaps', href: '#' },
      { label: 'NFT Launchpad', href: '#' },
      { label: 'Runes Platform', href: '#' },
      { label: 'Creator Dashboard', href: '#' },
    ],
  },
  {
    title: 'Resources',
    items: [
      { label: 'Support', href: '#' },
      { label: 'API', href: '#' },
      { label: 'Feature Requests', href: '#' },
      { label: 'Trust & Safety', href: '#' },
      { label: 'Sitemap', href: '#' },
    ],
  },
];

export const contactInfo = {
  title: 'Contact Us',
  emails: ['support@tech.email', 'affiliate@tech.com'],
  buttonLabel: 'Install App',
  buttonIcon: '/icons/app-icon.svg',
};