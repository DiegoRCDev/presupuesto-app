import { Egreso } from './egreso.model';

export class EgresoService {
  egresos: Egreso[] = [new Egreso('Renta Depto', 900), new Egreso('Ropa', 200)];

  eliminar(engreso: Egreso) {
    const indice: number = this.egresos.indexOf(engreso);
    this.egresos.splice(indice, 1);
  }
}
