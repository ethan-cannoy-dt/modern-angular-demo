import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewModelsComponent } from './new-models.component';

describe('NewModelsComponent', () => {
  let component: NewModelsComponent;
  let fixture: ComponentFixture<NewModelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewModelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewModelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should respond to changes', () => {
    component.name.set('test');
    fixture.detectChanges();
    expect(component.nameCapital).toBe('TEST');
  });
});
