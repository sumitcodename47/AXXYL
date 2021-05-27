import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}

  goTo(url: any) {
    window.open(url, '_blank');
  }

  simpleregistration(form: NgForm) {
    this.formSubmitted = true;
    console.log(form.value);
    if (form.invalid) {
      return;
    }
  }

  checkPassword(pwd: any, cpwd: any) {
    return pwd !== cpwd;
  }

  ngAfterViewInit() {
    this.focusInputPassenger.nativeElement.focus();
  }
}
