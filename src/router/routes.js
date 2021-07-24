import AboutPage from '../pages/About.vue'
import HomePage from '../pages/Home.vue'
import PersonPage from '../pages/Person.vue'
import Err404Page from '../pages/404.vue'
import {site} from '@/_config'

export const routes = [
    {
        path: site.home,
        name: 'home',
        component: HomePage
    },
    {
        path: `${site.home}about`,
        name: 'about',
        component: AboutPage
    },
    {
        path: `${site.home}:personAlias`,
        name: 'personAlias',
        component: PersonPage
    },
    {
        path: `${site.home}:CatchAll(.*)`,
        name: 'error404',
        component: Err404Page
    }
]