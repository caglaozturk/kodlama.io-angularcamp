import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userAddForm:FormGroup
  user:User=new User()

  constructor(private formBuilder:FormBuilder,private authService:AuthService,private messageService:MessageService) { }

  ngOnInit(): void {
    this.createProductAddForm();
  }

  createProductAddForm(){
    this.userAddForm=this.formBuilder.group({
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  addUser(){
    if(this.userAddForm.valid){
      this.user=Object.assign({},this.userAddForm.value)
    }
    this.authService.addUser(this.user).subscribe(data=>{
      this.messageService.add({
        severity: 'success',
        summary: 'Product Successfully Added',
        detail: data.firstName + " " +data.lastName,
      })
      setTimeout(() => {
        window.location.href = "/login"
      }, 1000);
    })
  }

}
