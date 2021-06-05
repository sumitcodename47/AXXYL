import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  formSubmitted = false;
  fieldPattern = new RegExp(/^[^ ]+(?: +[^ ]+)*$/);
  emailPattern = new RegExp(
    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );
  successMessage: string = '';
  errorMessage: string = '';
  successMessageFlag: boolean = false;
  errorMessageFlag: boolean = false;
  constructor(private registerService: RegisterService) {}

  ngOnInit(): void {}
  sendEmail(form: NgForm) {
    this.formSubmitted = true;
    if (form.invalid) {
      return;
    }

    let value = form.value;
    let postBody = {
      fullname: value.contact_names,
      email: value.contact_email,
      phone: value.contact_phone,
      message: value.contact_message,
    };

    this.registerService.postContactUs(postBody).subscribe(
      (data) => {
        if (data.status == 'Success') {
          this.successMessageFlag = true;
          this.successMessage = data.msg;
          setTimeout(() => {
            this.successMessageFlag = false;
            this.successMessage = '';
          }, 8000);
        } else if (data.status == 'Fail') {
          this.errorMessageFlag = true;
          this.errorMessage = data.msg;
          setTimeout(() => {
            this.errorMessageFlag = false;
            this.errorMessage = '';
          }, 8000);
        }
      },
      (error) => {
        this.errorMessageFlag = true;
        this.errorMessage = 'Error occurred. Please try again.';
        setTimeout(() => {
          this.errorMessageFlag = false;
          this.errorMessage = '';
        }, 8000);
      }
    );
  }
}
