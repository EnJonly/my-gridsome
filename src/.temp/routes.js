const c1 = () => import(/* webpackChunkName: "page--src-templates-strapi-post-vue" */ "D:\\woke\\my-gridsome\\src\\templates\\StrapiPost.vue")
const c2 = () => import(/* webpackChunkName: "page--src-templates-post-vue" */ "D:\\woke\\my-gridsome\\src\\templates\\Post.vue")
const c3 = () => import(/* webpackChunkName: "page--src-pages-post-vue" */ "D:\\woke\\my-gridsome\\src\\pages\\Post.vue")
const c4 = () => import(/* webpackChunkName: "page--src-templates-my-page-vue" */ "D:\\woke\\my-gridsome\\src\\templates\\MyPage.vue")
const c5 = () => import(/* webpackChunkName: "page--src-pages-contact-vue" */ "D:\\woke\\my-gridsome\\src\\pages\\Contact.vue")
const c6 = () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\woke\\my-gridsome\\src\\pages\\About.vue")
const c7 = () => import(/* webpackChunkName: "page--node-modules-gridsome-0-7-23-gridsome-app-pages-404-vue" */ "D:\\woke\\my-gridsome\\node_modules\\_gridsome@0.7.23@gridsome\\app\\pages\\404.vue")
const c8 = () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\woke\\my-gridsome\\src\\pages\\Index.vue")

export default [
  {
    path: "/post/:id/",
    component: c1
  },
  {
    path: "/posts/:id/",
    component: c2
  },
  {
    path: "/post/",
    component: c3
  },
  {
    path: "/my-page/",
    component: c4
  },
  {
    path: "/contact/",
    component: c5
  },
  {
    path: "/about/",
    component: c6
  },
  {
    name: "404",
    path: "/404/",
    component: c7
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c8
  },
  {
    name: "*",
    path: "*",
    component: c7
  }
]
