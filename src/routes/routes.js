

const page = (path, name, pageName) => {
  return {
    path, 
    name,
   component: import(`../pages/${pageName}`)
  }
}

const routes = [
    page('/', 'HomePortifolio', "portifolio/HomePortifolio.vue"),
    page('/blog', 'HomeBlog', "blog/HomePage.vue"),
]

export default routes; 