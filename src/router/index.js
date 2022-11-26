const routes = [{
  path: '/home',
  name: 'Home',
  component: Home,
}
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
