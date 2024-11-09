import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTapsComponent } from './book-taps.component';

describe('BookTapsComponent', () => {
  let component: BookTapsComponent;
  let fixture: ComponentFixture<BookTapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BookTapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookTapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
