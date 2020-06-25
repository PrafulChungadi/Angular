

import { homeComponent } from './app.homecomponent'



export const mainrouting=[
    {path:'',component: homeComponent},
    {path:'home', component:homeComponent},
    {path:'employee', loadChildren:'../employee/app.employeemodule#employeeModule'},
    {path:'serach', loadChildren:'../EmployeeSearch/app.searchmodule#searchModule'},

  

];