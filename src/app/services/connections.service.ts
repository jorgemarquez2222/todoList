import { Injectable, signal } from '@angular/core';
import { Task } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class ConnectionsService {

  private _tasks = signal<Task[]>([]);

  constructor() { }

  get tasks() {
    return this._tasks;
  }
  
  addTask(task: string){
    this._tasks.update((tasks:Task[]) => [...tasks, { name: task, editando: false, id: crypto.randomUUID()  }] )
  }

  updateTask(id: string, name: string){
    this._tasks.update((tasks: Task[])=> tasks.map(t => t.id === id ? { ...t, name, editando: true } : t ))
  }

  deleteTask(id: string){
    this._tasks.update((tasks: Task[])=> tasks.filter(t => t.id !== id  ))
  }

  saveTask(id: string){
    this._tasks.update((tasks: Task[])=> tasks.map(t => t.id === id ? { ...t, editando: false } : t ))
  }

  reset(){
    this._tasks.set([]);
  }

}
