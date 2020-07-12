import {NgForm,
     FormGroup,
        FormControl,
            Validators,
FormBuilder
} from '@angular/forms';  
export class EmployeeModel
{
    id :number ;
    name :string = "";
     
    //  address: string="";
    employeeAddresses:Array<EmployeeAddress>= new Array<EmployeeAddress>();
   
    //step 1
     formEmployeeGroup:FormGroup= null;
     constructor(){
         //tree structor
         var _builder =new FormBuilder();
         //use hte builder and create tree structor
         this.formEmployeeGroup=_builder.group({});
        //add Validation to formgroup
        this.formEmployeeGroup.addControl("namecontrol",
        new FormControl('',Validators.required));
        //add id
        // this.formEmployeeGroup.addControl("idcontrol",
        // new FormControl('',Validators.required));

         var validationcollection=[];
          validationcollection.push(Validators.required);
         validationcollection.push(Validators.pattern("^[0-9]{4,4}$"))
          this.formEmployeeGroup.addControl("idcontrol",new FormControl('',Validators.compose(validationcollection)));

          this.formEmployeeGroup.addControl("addresscontrol",
         new FormControl('',Validators.required));   
         }

}

export class EmployeeAddress{
    id :number ;
    address: string="";
}