import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {
  loginForm: FormGroup;
  genders= ['male', 'female'];
  biddenName = ['hack', 'sex', 'killer'];

  constructor() { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, this.forBiddenName.bind(this)]),
      'userData': new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email], this.forBiddenEmail.bind(this)),
        'password': new FormControl(null),        
      }),
      'policy': new FormControl(null),
      'gender': new FormControl('male'),
      'hobies': new FormArray([])
    })
  }

  onSubmit() {
    console.log(this.loginForm);
  }

  onAddHobies() {
    const elControl = new FormControl(null, Validators.required);
    (<FormArray>this.loginForm.get('hobies')).push(elControl);
  }

  forBiddenName(control: FormControl) {
    if (this.biddenName.indexOf(control.value) !== -1) {
      return {
        'nameIsForbidden': true
      }
    }

    return null;
  }


  forBiddenEmail(control: FormControl) {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@gmail.com') {
          resolve({'emailForBidden': true})
        } else {
          resolve(null);
        }
      }, 1500);
    })

    return promise;
  }

}
