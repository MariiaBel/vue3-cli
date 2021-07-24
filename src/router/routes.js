import AboutPage from '../pages/About.vue'
import HomePage from '../pages/Home.vue'
import PersonPage from '../pages/Person.vue'
import Err404Page from '../pages/404.vue'

export const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    },
    {
        path: '/:personAlias',
        name: 'personAlias',
        component: PersonPage
    },
    {
        path: '/:CatchAll(.*)',
        name: 'error404',
        component: Err404Page
    }
]