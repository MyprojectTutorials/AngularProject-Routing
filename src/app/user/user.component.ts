import { Component} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
ReactiveFormsModule
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  AddMore:boolean=true;
visible:boolean=false;
userForm:FormGroup
  on(){
    this.AddMore=!this.AddMore;
    this.visible=!this.visible
  }
  
  listData:any;
  constructor(private fb:FormBuilder){
    this.listData = [];

  this.userForm=this.fb.group({
    // rno:['',Validators.required],
    firstName:['',Validators.required],
    lastName :['',Validators.required],
    email:['',Validators.required],
    contact:['',Validators.required]
  })

  }
  addItem(data :any){


    console.log(data);
    this.listData.push(data);
  }
  reset(){
    this.userForm.reset();
  }
  
}





