import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, DestroyRef, inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
  animations: [
    trigger('slidFade', [
      transition('void=>*', [animate('1s')]),
      transition('*=>void', [animate('500ms')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  @Input({ required: true }) sliderItems!: any;
  curentIndex: number = 0;

  private destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const interval = setInterval(() => {
      if (this.sliderItems) {
        this.curentIndex = (this.curentIndex + 1) % this.sliderItems.length;
      }
    }, 10000);
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }
}
