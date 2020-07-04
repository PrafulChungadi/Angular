

import { homeComponent } from './app.homecomponent'
import { EmployeeLoginePageComponent } from './app.LoginPage';
import { SecurityLogic } from '../Utilities/Utility.AuthGuard';



export const mainrouting=[
    {path:'',component: homeComponent ,canActivate : [SecurityLogic]},
    {path:'home', component:homeComponent ,canActivate : [SecurityLogic]},
    {path:'Login',component:EmployeeLoginePageComponent},
    {path:'employee', loadChildren:'../employee/app.employeemodule#employeeModule',canActivate : [SecurityLogic]},
    {path:'serach', loadChildren:'../EmployeeSearch/app.searchmodule#searchModule',canActivate : [SecurityLogic]},

  

];