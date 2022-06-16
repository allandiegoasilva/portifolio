

const page = (pageName) => import(`../pages/${pageName}`);

const routes = [
    {
      path: '/',
      name: 'HomePortifolio',
      component: page("portifolio/HomePortifolio.vue")
    },
    {
      path: '/blog',
      name: 'HomePortifolio',
      component: page("blog/HomePage.vue")
    }
]

console.log(routes);

export default routes; 