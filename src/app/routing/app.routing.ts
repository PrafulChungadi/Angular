
import { employeeComponent } from '../employee/app.employeecomponent'
import { supplierComponent } from '../supplier/app.suppliercomponent'
import { homeComponent } from '../home/app.homecomponent'
import { employeesearchcomponent } from '../employee/app.employeesearchcomponent';


export const mainrouting=[
    {path:'',component: homeComponent},
    {path:'home', component:homeComponent},
    {path:'employee',component:employeeComponent},
    {path:'supplier',component:supplierComponent},
   {path:'serach',component:employeesearchcomponent},

];