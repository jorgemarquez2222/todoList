import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { Tarea } from '../../interfaces';
import { ConectionsService } from '../../services/conections.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  _listadoTareas = signal<Tarea[]>([]);

  constructor(private serviceConnections: ConectionsService ){
    this._listadoTareas = this.serviceConnections.listadoTareas;
  }

  eliminar(tarea: Tarea){
    this.serviceConnections.eliminarTarea(tarea.id)
  }

  editar(id: string){
    this.serviceConnections.editarTarea(id)
  }

  guardarTarea(id: string, nombre: string){
    this.serviceConnections.guardarTarea(id, nombre)
  }

}
