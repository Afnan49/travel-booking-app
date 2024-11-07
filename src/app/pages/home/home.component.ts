import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  slidersBaners = [
    {
      id: 1,
      image: 'images/slider/hotel-1.jpg',
      p1: 'Finest Luxury',
      p2: 'in  Moritz!',
      span: 'Hotels',
      features: [
        {
          id: 1,
          icon: 'fa-solid fa-hotel',
          p: 'Over 1000 Hotels',
        },
        {
          id: 2,
          icon: 'fa-solid fa-location-dot',
          p: 'More than 500,000 places',
        },
        {
          id: 3,
          icon: 'fa-solid fa-dollar-sign',
          p: 'Best Price Hotels',
        },
        {
          id: 4,
          icon: 'fa-solid fa-comments',
          p: 'Customer Care 24 hours',
        },
      ],
      button: 'Find Out More',
    },
    {
      id: 2,
      image: 'images/slider/flight-2.jpg',
      p1: "Let's Discover the",
      p2: ' together!',
      span: 'world',
      features: [
        {
          id: 1,
          icon: 'fa-solid fa-plane',
          p: 'Over 500 Airlines',
        },
        {
          id: 2,
          icon: 'fa-solid fa-location-dot',
          p: 'More than 13,000 places',
        },
        {
          id: 3,
          icon: 'fa-solid fa-dollar-sign',
          p: 'Best Price Guarantee',
        },
        {
          id: 4,
          icon: 'fa-solid fa-comments',
          p: 'Customer Care',
        },
      ],
      button: 'Find Out More',
    },
    {
      id: 3,
      image: 'images/slider/car-1.jpg',
      p1: 'Upto 25% off on first booking',
      p2: 'through your app!',
      span: 'Car',
      features: [
        {
          id: 1,
          icon: 'fa-solid fa-dollar-sign',
          p: 'Best Price Guaranteed',
        },
        {
          id: 2,
          icon: 'fa-solid fa-car',
          p: 'Home Pickups',
        },
        {
          id: 3,
          icon: 'fa-solid fa-laptop',
          p: 'Easy Bookings',
        },
        {
          id: 4,
          icon: 'fa-solid fa-headphones-simple',
          p: '24/7 Customer Care',
        },
      ],
      button: 'Find Out More',
    },
  ];
}
