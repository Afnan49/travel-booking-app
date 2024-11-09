import { Component } from '@angular/core';

@Component({
  selector: 'app-book-taps',
  templateUrl: './book-taps.component.html',
  styleUrl: './book-taps.component.css',
})
export class BookTapsComponent {
  roomOptions = [
    { label: '01', value: '1' },
    { label: '02', value: '2' },
    { label: '03', value: '3' },
    { label: '04', value: '4' },
    { label: '05', value: '5' },
    { label: '06', value: '6' },
    { label: '07', value: '7' },
    { label: '08', value: '8' },
    { label: '09', value: '9' },
    { label: '10', value: '10' },
  ];
  dayTime = [
    { label: 'Morning', value: '1' },
    { label: 'Afternoon', value: '2' },
    { label: 'Evening', value: '3' },
    { label: 'Anytime', value: '4' },
  ];
  cruiseLength = [
    { label: '1-2 Nights', value: '1' },
    { label: '3-4 Nights', value: '2' },
  ];
  cruiseLine = [
    { label: 'Azamara club cruises', value: '1' },
    { label: 'Carnival cruise line', value: '2' },
    { label: 'Celebrity cruises', value: '3' },
    { label: 'Costa cruises lines', value: '4' },
    { label: 'Cruise & maritime voyages', value: '5' },
    { label: 'Crystal cruises', value: '6' },
    { label: 'Cunard line L td', value: '7' },
    { label: 'Disney cruise line', value: '8' },
    { label: 'Holland America line', value: '9' },
    { label: 'Hurtigrute cruise line', value: '10' },
    { label: 'Msc cruises', value: '11' },
    { label: 'Norwegian cruise line', value: '12' },
    { label: 'Oceania cruises', value: '13' },
    { label: 'Orion expedition cruises', value: '14' },
    { label: 'P & O cruises', value: '15' },
    { label: 'Paul Gauguin cruises', value: '16' },
    { label: 'Peter Deilman cruises', value: '17' },
    { label: 'Princess cruises', value: '18' },
    { label: 'Regent Seven Seas  cruises', value: '19' },
    { label: 'Royal Caribbean international', value: '20' },
    { label: 'Seabourn cruise line', value: '21' },
    { label: 'Silversea cruises', value: '22' },
    { label: 'Star clippers', value: '23' },
    { label: 'Swan Hellenic cruises', value: '24' },
    { label: 'Thomson cruises', value: '25' },
    { label: 'Viking River cruises', value: '26' },
    { label: 'Windstar cruises', value: '27' },
  ];
  carType = [
    { label: 'Economy', value: '1' },
    { label: 'Compact', value: '2' },
  ];
}
