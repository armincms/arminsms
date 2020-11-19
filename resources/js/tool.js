Nova.booting((Vue, router, store) => {
  router.addRoutes([
    {
      name: 'arminsms',
      path: '/arminsms',
      component: require('./components/Tool'),
    },
  ])
})
