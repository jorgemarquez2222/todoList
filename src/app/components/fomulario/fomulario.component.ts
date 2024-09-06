import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ListaComponent } from '../lista/lista.component';
import { CommonModule } from '@angular/common';
import { ConectionsService } from '../../services/conections.service';
import { Tarea } from '../../interfaces';
import { ListadoComponent } from '../listado/listado.component';

@Component({
  selector: 'app-fomulario',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule, ListaComponent, ListadoComponent],
  templateUrl: './fomulario.component.html',
  styleUrl: './fomulario.component.css'
})

export class FomularioComponent {
  _listadoTareas = signal<Tarea[]>([]);
  formulario : FormGroup = new FormGroup({});

  constructor(private servideConnections: ConectionsService ){
    this._listadoTareas = this.servideConnections.listadoTareas;
    this.formulario = new FormGroup({
      tarea: new FormControl('')
    })
  }

  onSubmit(event: Event) {
    if (!this.formulario.value.tarea) return
    this.servideConnections.agregarTarea(this.formulario.value.tarea)
    this.formulario.get('tarea')?.reset()
  }

  reset(){
    this.servideConnections.reset();
  }
}

