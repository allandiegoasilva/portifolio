

const page = (pageName) => import(`../pages/${pageName}`);

const routes = [
    {
      path: '/',
      name: 'HomePortifolio',
      component: page("portifolio/HomePortifolio.vue")
    }
]

console.log(routes);

export default routes; 