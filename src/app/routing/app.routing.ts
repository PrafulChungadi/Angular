
import { customerComponent } from '../customer/app.component'
import { supplierComponent } from '../supplier/app.suppliercomponent'
import { homeComponent } from '../home/app.homecomponent'


export const mainrouting=[
    {path:'',component: homeComponent},
    {path:'home', component:homeComponent},
    {path:'customer',component:customerComponent},
    {path:'supplier',component:supplierComponent}

];