import Vue from 'vue'
import VueRouter from 'vue-router'
import LayoutMenu from '../components/Layout'
import ContainerMenu from '../components/ContainerMenu'
import ColorMont from '../components/ColorMont'
import IconContent from '../components/IconContent'
import ButtonCompont from '../components/ButtonCompont'
import FormRadio from '../components/FormRadio'
import FormCheckbox from '../components/FormCheckbox'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[
        { path:"/", component:LayoutMenu },
        { path:"/layout", component:LayoutMenu },
        { path:"/container", component:ContainerMenu },
        { path:'/colorSel', component:ColorMont },
        { path:'/icon', component:IconContent },
        { path:'/button', component:ButtonCompont },
        { path:'/radio', component:FormRadio },
        { path:'/checkbox', component:FormCheckbox },
    ]
})

export default router