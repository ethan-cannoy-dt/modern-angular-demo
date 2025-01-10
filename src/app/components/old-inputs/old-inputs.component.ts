import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-old-inputs',
  imports: [
    FormsModule
  ],
  templateUrl: './old-inputs.component.html',
  styleUrl: './old-inputs.component.css'
})
export class OldInputsComponent {
  /**
   * Mutable value passed down from parent.
   * Changes to value are not passed back to parent.
   */
  @Input() name: string = "";
  @Output() nameChanged: EventEmitter<string> = new EventEmitter<string>();

  onValueChange(event: any) {
    this.name = event.target.value;
    /**
     * Without this line, the parent component will not be notified of the change.
     * That means the child, not the parent, determines whether it cares about updates.
     */
    this.nameChanged.emit(this.name);
  }
}
