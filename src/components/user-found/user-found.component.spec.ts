import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFoundComponent } from './user-found.component';

describe('UserFoundComponent', () => {
  let component: UserFoundComponent;
  let fixture: ComponentFixture<UserFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFoundComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
