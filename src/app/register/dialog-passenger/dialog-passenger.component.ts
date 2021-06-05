import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-dialog-passenger',
  templateUrl: './dialog-passenger.component.html',
  styleUrls: ['./dialog-passenger.component.css'],
})
export class DialogPassengerComponent implements OnInit, AfterViewInit {
  formSubmitted = false;
  fieldPattern = new RegExp(/^[^ ]+(?: +[^ ]+)*$/);
  emailPattern = new RegExp(
    /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
  );

  @ViewChild('focusInputPassenger', { static: false })
  focusInputPassenger!: ElementRef;
  errorMessage: string = '';
  successMessage: string = '';
  successMessageFlag: boolean = false;
  errorMessageFlag: boolean = false;

  constructor(
    public modal: NgbActiveModal,
    private registerService: RegisterService
  ) {}

  ngOnInit(): void {}

  goTo(url: any) {
    window.open(url, '_blank');
  }

  simpleregistration(form: NgForm) {
    this.formSubmitted = true;
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
    this.registerService.registerDriver(postBody).subscribe(
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

  checkPassword(pwd: any, cpwd: any) {
    return pwd !== cpwd;
  }

  ngAfterViewInit() {
    this.focusInputPassenger.nativeElement.focus();
  }
}
