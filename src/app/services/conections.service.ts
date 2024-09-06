import { Injectable, signal } from '@angular/core';
import { Tarea } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class ConectionsService {

  private _listadoTareas = signal<Tarea[]>([]);

  constructor() { }

  get listadoTareas() {
    return this._listadoTareas;
  }

  agregarTarea(tareaNombre: string) {
    this._listadoTareas.update(tareas =>
      [...tareas, {
        id: crypto.randomUUID(),
        nombre: tareaNombre,
        editando: false
      }
      ])
  }

  editarTarea(id: string) {
    this._listadoTareas.update((ts: Tarea[]) => ts.map(t => t.id === id ? { ...t, editando: true } : t))
  }

  guardarTarea(id: string, nombre: string) {
    this._listadoTareas.update((ts: Tarea[]) => ts.map(t => t.id === id ? { ...t, nombre, editando: false } : t))
  }

  eliminarTarea(id: string) {
    this._listadoTareas.update((ts: Tarea[]) => ts.filter(t => t.id !== id))
  }

  reset(){
    this._listadoTareas.set([])
  }
}
