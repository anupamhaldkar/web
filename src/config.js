module.exports = {
  siteTitle: 'Anupam Haldkar | Software Engineer',
  siteDescription:
    'I am a software developer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.',
  siteKeywords:
    'Anupam Haldkar, Anupam, Haldkar, anupamhaldkar, software engineer, front-end engineer, web developer, javascript, bhopal, smartup',
  siteUrl: 'https://github.com',
  siteLanguage: 'en_US',
  googleAnalyticsID: '',
  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Anupam Haldkar',
  location: 'Bhopal, MP',
  email: 'ahdev2020@outlook.com',
  github: 'https://github.com/anupamhaldkar',
  twitterHandle: '@AnupamHaldkar',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/anupamhaldkar',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/anupam-haldkar-a54777131/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/__procli/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/AnupamHaldkar',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 300) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
