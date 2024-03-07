import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  employees: any = [{
    ID: 1,
    Name: "Juan",
    LastName: "Perez",
    RFC: "PERJ890101",
    BornDate: "1990-01-01",
    Status: "Activo"
},
{
    ID: 2,
    Name: "María",
    LastName: "González",
    RFC: "GONM900202",
    BornDate: "1990-02-02",
    Status: "Inactivo"
}];


  constructor(private fb: FormBuilder, private conexion: ConexionService) {
    this.getEmployees();
  }


  getEmployees() {
    this.conexion.get().subscribe((info: any) => {
      this.employees = info.reverse();
      console.log(this.employees);
    })
  }

}
