// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: '拉勾教育',
  siteDescription: '大前端',
  templates: {
    StrapiPost: [
      {
        path: '/post/:id',
        component: './src/templates/StrapiPost.vue'
      }
    ],
    Post: [
      {
        path: '/posts/:id',
        component: './src/templates/Post.vue'
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'BlogPostList',
        path: './content/blog/**/*.md',
      }
    },
    // {
    //   use: '@gridsome/source-strapi',
    //   options: {
    //     apiURL: `http://localhost:1337`,
    //     queryLimit: 1000, // Defaults to 100
    //     contentTypes: [`post`],
    //   },
    // }
    {
      use: '@gridsome/source-strapi',
      options: {
        // apiURL: 'http://localhost:1337',
        apiURL: `${process.env.GRIDSOME_API_URL}/api`,
        // apiURL: 'http://localhost:1337/api',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag', 'general'],
        // typeName: 'Strapi',
        // singleTypes: ['general'],
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '463094217@qq.com',
        //   password: '1q2w3e$R22'
        // }
      }
    }
  ]
}
