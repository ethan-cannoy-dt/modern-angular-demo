import {Component, effect, input, OnInit, output, signal} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-inputs',
  imports: [FormsModule],
  templateUrl: './new-inputs.component.html',
  styleUrl: './new-inputs.component.css'
})
export class NewInputsComponent implements OnInit {
  /**
   * This is the most direct translation from old @Input/@Output to new signal based inputs.
   * This moves away from using @ decorators, which have poor support in TypeScript.
   */
  readonly name = input(''); // Input signals are immutable.
  public internalName = signal(''); // We use a second signal to mutate the value.
  nameChanged = output<string>();

  ngOnInit() {
    this.internalName.set(this.name());
  }

  constructor() {
    effect(() => {
      this.nameChanged.emit(this.internalName());
    });
  }
}
