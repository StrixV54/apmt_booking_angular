import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show app name "HEALTHCARE ANGULAR"', () => {
    const h1 = fixture.debugElement.query(By.css('header > h1'));
    expect(h1.nativeElement.textContent).toBe('HEALTHCARE ANGULAR');
  });

  it('should show list of professionals that are stored in filterlist when no speciality selected', () => {
    const selectorInput = fixture.debugElement.query(By.css('header select'));
    selectorInput.triggerEventHandler('change', {
      target: { value: 'None' },
    });
    fixture.detectChanges();

    const liFromComp = component.filterList.length;
    const liFromHTML = fixture.debugElement.queryAll(By.css('.card-box > li'));
    expect(liFromHTML.length).toBe(liFromComp);
  });

  it('should show list of professionals that are stored in filterlist when changing speciality to "Cardiologist"', () => {
    const selectorInput = fixture.debugElement.query(By.css('header select'));
    selectorInput.triggerEventHandler('change', {
      target: { value: 'Cardiologist' },
    });
    fixture.detectChanges();

    const liFromComp = component.filterList.length;
    const liFromHTML = fixture.debugElement.queryAll(By.css('.card-box > li'));
    expect(liFromHTML.length).toBe(liFromComp);
  });
});
