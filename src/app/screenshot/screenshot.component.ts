import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-screenshot',
  templateUrl: './screenshot.component.html',
  styleUrls: ['./screenshot.component.css'],
})
export class ScreenshotComponent implements OnInit {
  slidesStore = [
    {
      src: './assets/showcase1.jpeg',
      alt: 'alt1',
      title: 'title1',
    },
    {
      src: './assets/showcase2.jpeg',
      alt: 'alt2',
      title: 'title2',
    },
    {
      src: './assets/showcase3.jpeg',
      alt: 'alt3',
      title: 'title1',
    },
    {
      src: './assets/showcase4.jpeg',
      alt: 'alt4',
      title: 'title1',
    },
    {
      src: './assets/showcase5.jpeg',
      alt: 'alt5',
      title: 'title1',
    },
    {
      src: './assets/showcase6.jpeg',
      alt: 'alt6',
      title: 'title1',
    },
  ];
  responsiveOptions: {
    breakpoint: string;
    numVisible: number;
    numScroll: number;
  }[];

  testimony = [
    {
      src: './assets/testimonial/1479905563-testi-03.jpg',
      name: 'Alex Rezvova',
      city: '',
      comment: 'Very excellent application and the fares are accurate',
    },
    {
      src: './assets/testimonial/1479989558-test-04.jpg',
      name: 'Albin Erlend',
      city: '',
      comment: 'At starting it was good and when I started using AXXYL',
    },
    {
      src: './assets/testimonial/1479905440-testi-02.jpg',
      name: 'Jacob Kai',
      city: 'Indiana, USA',
      comment: 'Best app for booking one way cab. Nice billing system.',
    },
    {
      src: './assets/testimonial/1479989575-testi-01.jpg',
      name: 'Alex Rezvova',
      city: 'New York, USA',
      comment: 'this is very easy to make book the cab so i like this app',
    },
  ];
  constructor() {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3,
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2,
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  ngOnInit(): void {}
}
