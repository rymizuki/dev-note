module.exports = {
  mode: 'spa',

  /**
   * Headers of the page
   */
  head: {
    title: 'dev-note',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },

  /**
   * Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /**
   * modules
   */
  modules: ['@nuxtjs/markdownit'],
  markdownit: {
    injected: true,
    use: [['markdown-it-plantuml']]
  },

  /**
   * Plugins
   */
  plugins: ['~/plugins/contentful'],

  /**
   * Env
   */
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  }
}
