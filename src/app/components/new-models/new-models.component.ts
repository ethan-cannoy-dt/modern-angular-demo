import {Component, effect, model} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-new-models',
  imports: [
    FormsModule
  ],
  templateUrl: './new-models.component.html',
  styleUrl: './new-models.component.css'
})
export class NewModelsComponent {
  /**
   * Models are mutable signals.
   * They function as both an input and an output.
   * You can bind to this one with [(name)], [name], and (nameChanged)
   */
  name = model('');
  nameCapital = '';

  constructor() {
    effect(() => {
      this.nameCapital = this.name().toUpperCase();
    });
  }

  /**
   * Other interesting features:
   * Deferred views
   * resource signals
   * Zoneless change detection
   * @if/@else/@switch
   * @for with track
   */
}
