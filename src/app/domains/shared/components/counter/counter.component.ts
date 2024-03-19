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
    // Asigna valores por primera vez
    // Corre despues y durante el render, PERO antes del init
    console.log('ngOnChanges');
    console.log('-'.repeat(10));
    console.log(changes);
  }
  
  ngOnInit() {
    // Corre luego del render, 1 sola vez
    // Aqui se pueden llamar promesas, peticiones, fetch a API, cosas async
    // Para hacer operaciones iniciales con los valores asignados
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
  }

  ngAfterViewInit() {
    // Corre luego del render
    // Corre luego de que los hijos ya fueron renderizados
    console.log('ngAfterViewInit');
    console.log('-'.repeat(10));
  }

  ngOnDestroy() {
    // Cuando el componente se destruye
    // Cuando el componente se recupera luego de ser destruido se vuelve a correr todo el ciclo desde el constructor
    console.log('ngOnDestroy');
    console.log('-'.repeat(10));
  }
}
