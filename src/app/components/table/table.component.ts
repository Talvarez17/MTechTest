import { Component } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  employees: any = [
  ];

  constructor(private conexion: ConexionService) {
    this.getEmployees();

    this.employees.sort((a: any, b: any) => {
      const dateA = new Date(a.BornDate);
      const dateB = new Date(b.BornDate);
      return dateA.getTime() - dateB.getTime();
    });
  }

  getEmployees() {
    this.conexion.get().subscribe((info: any) => {
      this.employees = info;
    })
  }

}
