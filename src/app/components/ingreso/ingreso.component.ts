import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoService } from './ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrl: './ingreso.component.css',
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];

  constructor(private ingresoService: IngresoService) {}

  ngOnInit() {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarIngreso(ingreso: Ingreso) {
    this.ingresoService.eliminar(ingreso);
  }
}
