import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RehberComponent } from './rehber.component';

describe('RehberComponent', () => {
  let component: RehberComponent;
  let fixture: ComponentFixture<RehberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RehberComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RehberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
