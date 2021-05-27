import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  formSubmitted = false;
  fieldPattern = new RegExp(/^[^ ]+(?: +[^ ]+)*$/);
  emailPattern = new RegExp(
    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  goTo(url: any) {
    window.open(url, '_blank');
  }
  driverregistration() {
    this.formSubmitted = true;
  }

  checkPassword(pwd: any, cpwd: any) {
    return pwd !== cpwd;
  }
}
