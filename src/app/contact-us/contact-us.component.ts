import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
})
export class ContactUsComponent implements OnInit {
  formSubmitted = false;
  fieldPattern = new RegExp(/^[^ ]+(?: +[^ ]+)*$/);
  constructor() {}

  ngOnInit(): void {}
  sendEmail(form: NgForm) {
    this.formSubmitted = true;
    console.log(form);
  }
}
