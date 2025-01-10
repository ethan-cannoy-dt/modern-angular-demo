import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldInputsComponent } from './old-inputs.component';

describe('OldInputsComponent', () => {
  let component: OldInputsComponent;
  let fixture: ComponentFixture<OldInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OldInputsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should respond to changes', () => {
    let spy = spyOn(component.nameChanged, 'emit');
    component.name = 'test';
    expect(spy).toHaveBeenCalled();
  });
});
