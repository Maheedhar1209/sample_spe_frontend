import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupmoviedetailsComponent } from './popupmoviedetails.component';

describe('PopupmoviedetailsComponent', () => {
  let component: PopupmoviedetailsComponent;
  let fixture: ComponentFixture<PopupmoviedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupmoviedetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupmoviedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
