import { Component, OnInit } from '@angular/core';
import {
  faFacebookSquare,
  faTwitterSquare,
  faGooglePlusSquare,
  faLinkedin,
  faPinterestSquare,
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  public faFacebookSquare = faFacebookSquare;
  public faTwitterSquare = faTwitterSquare;
  public faLinkedin = faLinkedin;
  public faPinterestSquare = faPinterestSquare;
  constructor() {}

  ngOnInit(): void {}
}
