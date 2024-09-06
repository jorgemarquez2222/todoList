import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../interfaces';

@Injectable({
  providedIn: 'root'
})

export class ConnectionsServiceBehaviorService {
  private _tasks: Task[] = [];
  private _tasksBS: BehaviorSubject<Task[]> = new BehaviorSubject<Task[]>([]);

  get tasksBS() {
    return this._tasksBS.asObservable();
  }

  addTaskBS(task: string) {
    this._tasks.push({ name: task, id: crypto.randomUUID(), editando: false });
    this._tasksBS.next(this._tasks)
  }

  updateTaskBS(id: string, name: string) {
    this._tasks = this._tasks.map((t) => t.id === id ? { ...t, name, editando: true } : t)
    this._tasksBS.next(this._tasks);
  }

  deleteTaskBS(id: string) {
    this._tasks = this._tasks.filter((t) => t.id !== id)
    this._tasksBS.next(this._tasks);
  }

  saveTaskBS(id: string) {
    this._tasks = this._tasks.map((t) => t.id === id ? { ...t, editando: false } : t)
    this._tasksBS.next(this._tasks);
  }

}
