import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogPassengerComponent } from '../register/dialog-passenger/dialog-passenger.component';
import { DialogComponent } from '../register/dialog/dialog.component';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css'],
})
export class Header1Component implements OnInit, AfterViewInit {
  public isMenuCollapsed = true;
  @ViewChild('nav', { static: false }) nav!: ElementRef;
  constructor(private renderer: Renderer2, private modalService: NgbModal) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    if (window.location.href.indexOf('pages') > -1) {
      this.renderer.addClass(this.nav.nativeElement, 'iner-head');
    } else {
      this.renderer.listen(window, 'scroll', ($event) => {
        if (window.scrollY > 353) {
          this.renderer.addClass(this.nav.nativeElement, 'opaque');
        } else {
          this.renderer.removeClass(this.nav.nativeElement, 'opaque');
        }
      });
    }
  }

  openDriver() {
    const modalRef = this.modalService.open(DialogComponent, { size: 'xl' });
  }

  openPassenger() {
    const modalRef = this.modalService.open(DialogPassengerComponent, {
      size: 'xl',
    });
  }
}
