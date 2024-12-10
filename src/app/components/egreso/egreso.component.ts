import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from './egreso.model';
import { EgresoService } from './egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrl: './egreso.component.css',
})
export class EgresoComponent implements OnInit {
  @Input() ingresoTotal!: number;

  egresos: Egreso[] = [];

  constructor(private egresoService: EgresoService) {}

  ngOnInit() {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoService.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.ingresoTotal;
  }
}
