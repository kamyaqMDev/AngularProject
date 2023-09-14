import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMailingListFormComponent } from './user-mailing-list-form.component';

describe('UserMailingListFormComponent', () => {
  let component: UserMailingListFormComponent;
  let fixture: ComponentFixture<UserMailingListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMailingListFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMailingListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
