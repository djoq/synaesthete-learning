import Entry from '@/components/Entry'
// import OverVue from '@/components/OverVue'
import Pitch from '@/components/Pitch'
// importAdditions

const menu = [{
  title: process.env.META.routeTitle,
  menu: [{
    path: '/home',
    title: 'Home',
    component: Entry,
    sourceUrl: 'components/Entry.vue'
  }, {
  //   path: '/over-vue',
  //   title: 'Overview',
  //   component: OverVue,
  //   sourceUrl: 'components/OverVue.vue'
  // }, {
    path: '/pitch-vue',
    title: 'Pitch',
    component: Pitch,
    sourceUrl: 'components/PitchVue.vue'
  }
// routeAdditions
  ]
}]






// Generate a Vue Router compatible routes map from the menu
const routes = menu.reduce((paths, section) => {
  const sectionPaths = section.menu.map(menuItem => {
    return {
      path: menuItem.path,
      component: menuItem.component,
      meta: {
        section: section.title,
        title: menuItem.title,
        sourceUrl: menuItem.sourceUrl
      }
    }
  })
  return paths.concat(sectionPaths)
}, [])

// Add the default route at the beginning of the routes array
routes.unshift({
  path: '/',
  redirect: '/home'
})

// Add the catch all route to redirect 404s
routes.push({
  path: '*',
  redirect: '/over-vue'
})

export { menu, routes }


