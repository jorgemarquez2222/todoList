import { Component, signal } from '@angular/core';
import { Tarea } from '../../interfaces';
import { ConectionsService } from '../../services/conections.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})
export class ListadoComponent {
  _listadoTareas = signal<Tarea[]>([]);
  
  constructor(private servideConnections: ConectionsService ){
    this._listadoTareas = this.servideConnections.listadoTareas;
  }
}
