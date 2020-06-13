
import { employeeComponent } from '../employee/app.employeecomponent'
import { supplierComponent } from '../supplier/app.suppliercomponent'
import { homeComponent } from '../home/app.homecomponent'


export const mainrouting=[
    {path:'',component: homeComponent},
    {path:'home', component:homeComponent},
    {path:'employee',component:employeeComponent},
    {path:'supplier',component:supplierComponent}

];