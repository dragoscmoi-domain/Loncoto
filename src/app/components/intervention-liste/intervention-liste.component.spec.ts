import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionListeComponent } from './intervention-liste.component';

describe('InterventionListeComponent', () => {
  let component: InterventionListeComponent;
  let fixture: ComponentFixture<InterventionListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
