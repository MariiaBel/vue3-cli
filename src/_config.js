export const process = {
    prod: true,
}

export const site = {
    home: process.prod ? '/vue3-cli/dist/' : '/'
}

export const links= [
  {
    title: 'home',
    alias: 'home',
    // url: site.home //I take url from routes.js
  },
  {
    title: 'about',
    alias: 'about',
    // url: `${site.home}about`
  }
]
