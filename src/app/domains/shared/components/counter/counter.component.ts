import { Component, Input, SimpleChanges, signal } from '@angular/core';
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
  counter = signal(0);
  counterRef: number | undefined;

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
    const duration = changes['duration'];
    console.log(duration);
    if (duration && duration.currentValue !== duration.previousValue) {
      this.doSomething();
    }
  }
  
  ngOnInit() {
    // Corre luego del render, 1 sola vez
    // Aqui se pueden llamar promesas, peticiones, fetch a API, cosas async
    // Para hacer operaciones iniciales con los valores asignados
    console.log('ngOnInit');
    console.log('-'.repeat(10));
    console.log('duration =>', this.duration);
    console.log('message =>', this.message);
    this.counterRef = window.setInterval(() => {
      console.log('run interval')
      this.counter.update(statePrev => statePrev + 1);
    }, 1000);
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
    window.clearInterval(this.counterRef);
  }

  doSomething() {
    console.log('change duration');
    // Aqui podrian ir procesos async
  }
}
