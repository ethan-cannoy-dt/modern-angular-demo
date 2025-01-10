import {Component, model, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OldInputsComponent} from './components/old-inputs/old-inputs.component';
import {NewInputsComponent} from './components/new-inputs/new-inputs.component';
import {NewModelsComponent} from './components/new-models/new-models.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, OldInputsComponent, NewInputsComponent, NewModelsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public oldName = 'The Old Way';
  public newName = 'The New Way';
  public nameModel = signal('The Better New Way');

  onOldNameChange(event: string) {
    this.oldName = event;
  }

  onNewNameChange(event: string) {
    this.newName = event;
  }
}
