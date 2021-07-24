export const process = {
    dev: true, 
}

export const site = {
    home: process.dev ? '/' : 'https://wwwpage.ru/'
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
