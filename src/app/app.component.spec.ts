import {ComponentFixture, TestBed} from '@angular/core/testing';
import { AppComponent } from './app.component';
import {NewInputsComponent} from './components/new-inputs/new-inputs.component';

describe('AppComponent', () => {
  let component: NewInputsComponent;
  let fixture: ComponentFixture<NewInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
