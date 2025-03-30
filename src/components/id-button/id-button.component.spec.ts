import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdButtonComponent } from './id-button.component';

describe('IdButtonComponent', () => {
  let component: IdButtonComponent;
  let fixture: ComponentFixture<IdButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IdButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
