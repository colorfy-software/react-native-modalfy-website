
const repoUrl = 'https://github.com/colorfy-software/react-native-modalfy'
const examplesUrl = `${repoUrl}/tree/master/examples`

const siteConfig = {
  title: 'React Native Modalfy',
  tagline: 'Modal citizen of React Native',
  url: 'https://colorfy-software.github.io',
  baseUrl: '/',
  organizationName: 'colorfy-software',
  projectName: 'react-native-modalfy-website',
  headerLinks: [
    { doc: 'getting-started', label: 'Docs' },
    { doc: 'api-reference', label: 'API' },
    { href: examplesUrl, label: 'Examples' },
    { blog: true, label: 'Blog' },
    { href: repoUrl, label: 'GitHub'}
  ],
  headerIcon: 'img/favicon.png',
  footerIcon: 'img/favicon.png',
  favicon: 'img/favicon.png',
  colors: {
    primaryColor: '#ffca7d',
    secondaryColor: '#333ddd',
  },
  copyright: `Copyright © ${new Date().getFullYear()} · Colorfy GmbH`,
  highlight: {
    theme: 'atom-one-dark',
  },
  usePrism: ['jsx'],
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
  enableUpdateBy: true,
  enableUpdateTime: true,
};

module.exports = siteConfig;
