import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit, AfterViewInit {
  formSubmitted = false;
  fieldPattern = new RegExp(/^[^ ]+(?: +[^ ]+)*$/);
  emailPattern = new RegExp(
    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );
  @ViewChild('focusInputDriver', { static: false })
  focusInputDriver!: ElementRef;

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  goTo(url: any) {
    window.open(url, '_blank');
  }
  driverregistration(form: NgForm) {
    this.formSubmitted = true;
    console.log(form.value);
    if (form.invalid) {
      return;
    }
    let value = form.value;
    let postBody = {
      fname: value.DFname,
      lname: value.DLname,
      emailId: value.Demail,
      phone: value.Dphone,
      password: value.Dpassword,
      category_id: value.car_type,
      car_number: value.VehicleNumber,
    };
    console.log(postBody);
  }

  checkPassword(pwd: any, cpwd: any) {
    return pwd !== cpwd;
  }

  ngAfterViewInit() {
    this.focusInputDriver.nativeElement.focus();
  }
}
