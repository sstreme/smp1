import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoamingComponent } from './foaming.component';

describe('FoamingComponent', () => {
  let component: FoamingComponent;
  let fixture: ComponentFixture<FoamingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoamingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
