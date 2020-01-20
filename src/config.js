import RESSOURCE_TYPES from './constants/ressourceTypes'

const config = {
  dateOptions: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  preferedRessource: RESSOURCE_TYPES.FILE,
  addHomePage: true,
  addAboutPage: true,
  yourName: 'Aurélien Girault',
  social: [
    {
      name: 'github',
      url: 'https://github.com/aurhell',
    },
    {
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/a-girault',
    },
    {
      name: 'twitter',
      url: 'https://twitter.com/aurhell_',
    },
    {
      name: 'youtube',
      url: null,
    },
  ],
}

Object.freeze(config)

export default config
