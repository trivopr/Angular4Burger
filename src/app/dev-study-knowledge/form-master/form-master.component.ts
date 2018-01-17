import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-master',
  templateUrl: './form-master.component.html',
  styleUrls: ['./form-master.component.css']
})
export class FormMasterComponent implements OnInit {
  submitted = false;

  @ViewChild('elRef') singUpForm;
  defaultSecret = 'Choice your question ?';
  desContent = '';
  genders = ['male', 'female', 'gay'];

  formData = {
    username: '',
    email: '',
    password: '',
    secretQuestion: '',
    description: '',
    gender: '',
    policy: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.submitted = true;
    
    this.formData = {
      username: this.singUpForm.value.userData.username,
      email: this.singUpForm.value.userData.email,
      password: this.singUpForm.value.password,
      secretQuestion: this.singUpForm.value.secretQuestion,
      description: this.singUpForm.value.description,
      gender: this.singUpForm.value.gender,
      policy: this.singUpForm.value.policy      
    }
    
    // Reset Form
    this.singUpForm.reset();
  }
  

}
