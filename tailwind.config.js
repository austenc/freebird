let defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
  theme: {
    colors: {
      ...defaultConfig.theme.colors,
      primary: defaultConfig.theme.colors.purple,
    },
  },
}
