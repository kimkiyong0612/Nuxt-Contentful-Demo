const environment = process.env.NODE_ENV || 'development';
let envSet ={};

if(environment ==='production'){
  envSet ={
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: process.env.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: process.env.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: process.env.CTF_BLOG_POST_TYPE_ID
  }
}else{
  const config = require('./.contentful.json')
  envSet ={
      CTF_SPACE_ID: config.CTF_SPACE_ID,
      CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
      CTF_PERSON_ID: config.CTF_PERSON_ID,
      CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  }
}

module.exports = {
  env: envSet,
  target:'static',
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtcontetful',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js + contentful JAMStackApp' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
    buildModules: [
      '@nuxtjs/tailwindcss',
      '@nuxt/components'
    ],
    components:true,
}

