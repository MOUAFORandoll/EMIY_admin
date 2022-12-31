 

module.exports = {
  mode: 'universal',
  // ...
  head: {
    title: 'Devoo Gessiia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'ssssssSMS GESSIIA est une plateforme SMS Marketing professionnel.Elle est simple, complete et facile à utiliser pour satisfaire tous types de besoins. Démarrez votre campagne marketing en 2 étapes seulement' },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'keywords', name: 'keywords', content: 'SSII, revendeur,Informatique, GESSIIA,  CEO, Public, Service, , ?, !, advers, web, Identité, marketing, reseau, audit, management, SMS, court, numero, phone, shot, number, MMS, API, computer, mysql, promo, clients, generateur, solutions, message, logiciel,developpement, application, commerce, campagne, how, tutoriel, SMS,cameroun,Douala,yaoundé,yaounde,Bafoussam,stratégie,' },
      { hid: 'og:url', name: 'og:url', content: process.env.WEBSITE_URL },
      { hid: 'og:title', name: 'og:title', content: 'smsgessiia' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'smsgessiia' },
      { hid: 'og:locale', name: 'og:locale', content: 'fr_FR' },
      { hid: 'format-detection', name: 'format-detection', content: 'no' },

      { hid: 'msapplication-tap-highlight', name: 'msapplication-tap-highlight', content: 'fr_FR' },
      { hid: 'viewport', name: 'viewport', content: 'user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width<% if (ctx.mode.cordova || ctx.mode.capacitor) { %>, viewport-fit=cover<% } %>' },



      { hid: 'og:image', name: 'og:image', content: `${process.env.WEBSITE_URL}/Logo_Red_BG_512px.png` },
      { hid: 'google-site-verification', name: 'google-site-verification',  content: process.env.GOOGLE_SITE_VERIFICATION_TOKEN },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'theme-color', content: '#fdf8f0' }
    ],
  },
  modules: [
     '@nuxtjs/sitemap',
    '@nuxtjs/robots'
  ],
 robots: {
   UserAgent: '*',
    Disallow: [
      '/dashboard-default',
      '/signin',
    ],
    Sitemap: `https://dashboard.pubx.cm/sitemap.xml`
  }
  // sitemap: {
  //   path: '/sitemap.xml', // L'emplacement de votre fichier sitemap.
  //   hostname: process.env.WEBSITE_URL, // L'adresse de votre site, que vous pouvez placer comme ici dans une variable d'environnement.
  //   cacheTime: 1000 * 60 * 15, // La durée avant que le sitemap soit regénéré. Ici 15mn.
  //   gzip: true,
  //   generate: false, // Génère une version statique du sitemap quand activé. À utiliser avec nuxt generate.
  //   exclude: [ // Les pages qu'on a pas trop envie de voir atterrir sur Google.
  //     '/login',
  //     '/admin/**'
  //   ],
    

  //     routes: [
  //     '/page/1',
  //     '/page/2',
  //     {
  //       url: '/page/3',
  //       changefreq: 'daily',
  //       priority: 1,
  //       lastmod: '2017-06-30T13:30:00.000Z'
  //     }
  //   ]
  // }
};