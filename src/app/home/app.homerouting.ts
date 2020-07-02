

import { homeComponent } from './app.homecomponent'
import { EmployeeLoginePageComponent } from '../Login/app.LoginPage';



export const mainrouting=[
    {path:'',component: homeComponent},
    {path:'home', component:homeComponent},
    {path:'Login',loadChildren:'../Login/app.LoginModule#loginModule'},
    {path:'employee', loadChildren:'../employee/app.employeemodule#employeeModule'},
    {path:'serach', loadChildren:'../EmployeeSearch/app.searchmodule#searchModule'},

  

];