import { Component, OnInit } from '@angular/core';
import { destinationCards } from '../../model/home';

@Component({
  selector: 'app-destinations',
  templateUrl: './destinations.component.html',
  styleUrls: ['./destinations.component.css'],
})
export class DestinationsComponent implements OnInit {
  destinationCards: destinationCards[] = [
    {
      id: 1,
      image: 'images/home/destinations/dest1.png',
      title: 'Greece',
      text: 'Experience the ancient history & beaches',
    },
    {
      id: 2,
      image: 'images/home/destinations/dest2.png',
      title: 'France',
      text: 'Discover the land of pharaohs & pyramids',
    },
    {
      id: 3,
      image: 'images/home/destinations/dest3.png',
      title: 'China',
      text: 'Embark on a journey for your lifetime',
    },
    {
      id: 4,
      image: 'images/home/destinations/dest4.png',
      title: 'Africa',
      text: 'Indulge in the art, culture, and cuisine',
    },
  ];
  constructor() {}

  ngOnInit() {}
}
