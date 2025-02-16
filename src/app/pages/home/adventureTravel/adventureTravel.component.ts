import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adventureTravel',
  templateUrl: './adventureTravel.component.html',
  styleUrls: ['./adventureTravel.component.css'],
})
export class AdventureTravelComponent implements OnInit {
  travels: string[] = [
    'images/home/carousal/caru1.png',
    'images/home/carousal/caru2.png',
    'images/home/carousal/caru3.png',
    'images/home/carousal/caru4.png',
    'images/home/carousal/caru5.png',
    'images/home/carousal/caru6.png',
  ];
  constructor() {}

  ngOnInit() {}
}
