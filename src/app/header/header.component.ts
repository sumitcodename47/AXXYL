import {
  Component,
  ElementRef,
  OnInit,
  AfterViewInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, AfterViewInit {
  public isMenuCollapsed = true;
  @ViewChild('nav', { static: false }) nav!: ElementRef;
  constructor(private renderer: Renderer2) {}

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
}
