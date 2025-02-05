import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrl: './home-header.component.css',
  standalone: false,
})
export class HomeHeaderComponent implements OnInit {
  ngOnInit(): void {
    this.slider = [
      { image: 'images/home/header/header1.png' },
      { image: 'images/home/header/header2.png' },
      { image: 'images/home/header/header3.png' },
      { image: 'images/home/header/header4.png' },
      { image: 'images/home/header/header5.png' },
      { image: 'images/home/header/header6.png' },
      { image: 'images/home/header/header7.png' },
      { image: 'images/home/header/header8.png' },
      { image: 'images/home/header/header9.png' },
    ];
  }
  slider: any[] = [];
}
