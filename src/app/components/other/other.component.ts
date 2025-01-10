import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-other',
  imports: [],
  templateUrl: './other.component.html',
  styleUrl: './other.component.css'
})
export class OtherComponent {
  list = signal(['one', 'two', 'three']);
  flag = signal(true);
}
