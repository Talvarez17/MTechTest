import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  Form: FormGroup = this.fb.group({
    Name: [, [Validators.required, Validators.maxLength(50)]],
    LastName: [, [Validators.required, Validators.maxLength(255)]],
    RFC: [, [Validators.required, Validators.pattern(/^[A-Z&Ñ]{3,4}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[A-Z\d]{3}$/)]],
    BornDate: [, Validators.required],
    Status: [, Validators.required]
  });

  tareas: any[] = [];
  tareasDB: any;

  constructor(private fb: FormBuilder, private router: Router, private conexion: ConexionService) {
  }

  valid(field: string) {
    return this.Form.controls[field].errors && this.Form.controls[field].touched;
  }

  add() {
    console.log(this.Form.value);
    

    // this.conexion.post(this.Form.value).subscribe((dato: any) => {

    setTimeout(() => {
      this.Form.reset;
      this.router.navigate(['/table']);
    }, 2000);

    // })

  }


}
