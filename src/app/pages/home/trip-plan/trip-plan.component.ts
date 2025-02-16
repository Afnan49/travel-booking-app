import { Component, OnInit } from '@angular/core';
import { location, plans } from '../../model/home';

@Component({
  selector: 'app-trip-plan',
  templateUrl: './trip-plan.component.html',
  styleUrls: ['./trip-plan.component.css'],
})
export class TripPlanComponent implements OnInit {
  locations: location[] = [
    {
      id: 1,
      image: 'images/icons/location.svg',
      text: 'City Walks Tour',
      class: 'image_1',
    },
    {
      id: 2,
      image: 'images/icons/pyramids.svg',
      text: 'Electric Bikes',
      class: 'image_2',
    },
    {
      id: 3,
      image: 'images/icons/Section → c-icon-visual-03.gif.svg',
      text: 'Skyscrapers View',
      class: 'image_3',
    },
  ];

  plans: plans[] = [
    {
      id: 1,
      class: 'first_card',
      image: 'images/home/trip-plan/plan1.png',
      Timeperiod: '1 Week',
      name: 'Chiang Mai',
      text: '  Visit the temples and the Chiang Mai Night Bazaar, a huge hugemarket located on Chiang Klan Road.',
      price: 490,
    },
    {
      id: 2,
      class: 'second_card',
      image: 'images/home/trip-plan/plan2.png',
      Timeperiod: '5 Days',
      name: 'Chao Phraya',
      text: '  Boat tour in the capital of Thailand, Bangkok, to see the beautiful palaces and monuments from the water.',
      price: 134,
      descound: 98,
    },
    {
      id: 3,
      class: 'third_card',
      image: 'images/home/trip-plan/plan3.png',
      Timeperiod: '10 Days',
      name: 'Bangkok',
      text: '  Marvelous culinary and cultural trip to the Thai capital with its wonderful monuments and Buddha statues.',
      price: 1023,
      descound: 1000,
    },
  ];

  constructor() {}

  ngOnInit() {}
}
