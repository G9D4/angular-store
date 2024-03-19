import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input ({required: true}) duration: number = 0;
  @Input ({required: true}) message: string = '';

}
