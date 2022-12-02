import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { DialogComponent } from './dialog/dialog.component';
import { DialogPassengerComponent } from './dialog-passenger/dialog-passenger.component';

import { faCheck } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public faCheck = faCheck;
  constructor(private modalService: NgbModal) {}

  ngOnInit(): void {}

  openDriver() {
    const modalRef = this.modalService.open(DialogComponent, { size: 'lg' });
  }

  openPassenger() {
    const modalRef = this.modalService.open(DialogPassengerComponent, {
      size: 'lg',
    });
  }
}
