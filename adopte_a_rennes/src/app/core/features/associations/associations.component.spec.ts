import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationsComponent } from './associations.component';

describe('AssociationsComponent', () => {
  let component: AssociationsComponent;
  let fixture: ComponentFixture<AssociationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssociationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
