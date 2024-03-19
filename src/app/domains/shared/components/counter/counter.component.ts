import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input ({required: true}) duration: number = 0;
  @Input ({required: true}) message: string = '';

  // El constructor es lo primero que se ejecuta
  // Corre antes del render
  constructor() {
    // No podemos poner cosas asincronas (no promesas, async, suscribe o items que dependan de tiempo/demora)
    console.log('constructor');
    console.log('-'.repeat(10));
  }

  ngOnChanges(changes: SimpleChanges) {
    // Corre despues y durante el render
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }
}
