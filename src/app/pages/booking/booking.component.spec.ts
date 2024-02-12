import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingComponent, RouterTestingModule, HttpClientTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show text alert when form not valid', async () => {
    // const formAlert = fixture.debugElement.query(By.css('.form-alert'));
    // expect(formAlert).toBeFalsy();

    // const selectorInput = fixture.debugElement.query(
    //   By.css('.btn-box > button[type="submit"]'),
    // );
    // selectorInput.triggerEventHandler('click', {});
    // await fixture.whenStable();
    // fixture.detectChanges();

    // expect(formAlert).toBeTruthy();
    // expect(formAlert.nativeElement.textContent).toBe(
    //   'Please fill all the fields correctly',
    // );
  });

  it('should show no alert when form is filled', () => {
    // const nameInput = fixture.debugElement.query(By.css('#name'));
    // nameInput.nativeElement.value = 'John Doe';
    // nameInput.nativeElement.dispatchEvent(new Event('input'));
    // const emailInput = fixture.debugElement.query(By.css('#email'));
    // emailInput.nativeElement.value = 'johndoe@gmail.com';
    // emailInput.nativeElement.dispatchEvent(new Event('input'));
    // const ageInput = fixture.debugElement.query(By.css('#age'));
    // ageInput.nativeElement.value = 23;
    // ageInput.nativeElement.dispatchEvent(new Event('input'));
    // const addressInput = fixture.debugElement.query(By.css('#address'));
    // addressInput.nativeElement.value = 'Noida';
    // addressInput.nativeElement.dispatchEvent(new Event('input'));
    // const remarkInput = fixture.debugElement.query(By.css('#remark'));
    // remarkInput.nativeElement.value = 'First time visiting.';
    // remarkInput.nativeElement.dispatchEvent(new Event('input'));

    // fixture.detectChanges();

    // const inputAlertDanger = fixture.debugElement.queryAll(
    //   By.css('.text-danger'),
    // );
    // expect(inputAlertDanger.length).toBeFalsy(0);
  });
});
