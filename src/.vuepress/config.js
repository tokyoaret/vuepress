module.exports = {
  title: 'this is title in config.js',
  description: 'this is desc in config.js',
  base: '/vuepress/',  
  dest: 'docs/',
  locales: {
    '/': {
        lang: 'ja',
        title: 'はじめてのVuePress',
        description: 'description jp',
    },
    '/en/': {
        lang: 'en',
        title: 'hello VuePress',
        description: 'this site generated from VuePress.',
    }
  },
  head: [
    ['meta', {'http-equiv': 'X-UA-Compatible', content: 'IE=edge'}],
    ['meta', {name: 'google-site-verification', content: 'VKeUkYfsK9JpkKHjzvKu0fcTn7SdQO1DSrAhSHskzsc'}],
    ['script', { type: 'text/javascript' }, `alert("welcome");`]
  ],
  plugins: {
        '@vuepress/google-analytics': {
            'ga': 'UA-212117744-1'
        }
    },
}
