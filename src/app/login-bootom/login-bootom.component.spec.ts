import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginBootomComponent } from './login-bootom.component';

describe('LoginBootomComponent', () => {
  let component: LoginBootomComponent;
  let fixture: ComponentFixture<LoginBootomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginBootomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginBootomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
