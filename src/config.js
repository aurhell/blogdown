import RESSOURCE_TYPES from './constants/ressourceTypes'

const config = {
  dateOptions: {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
  preferedRessource: RESSOURCE_TYPES.FILE,
}

Object.freeze(config)

export default config
