import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from '../../interfaces';
import { ConnectionsService } from '../../services/connections.service';
import { FormsModule } from '@angular/forms';
import { ConnectionsServiceBehaviorService } from '../../services/connections-service-behavior.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  _tasks = signal<Task[]>([]);
  _tasksOb$ =  new Observable<Task[]>();
  _tasksObjNormal : Task[] = [];

  constructor(
    private _connectionsService: ConnectionsService,
    private _connectionsServiceBH: ConnectionsServiceBehaviorService
  ) {
    this._tasks = this._connectionsService.tasks;
    this._tasksOb$ = this._connectionsServiceBH.tasksBS;
    this._tasksOb$.subscribe((tasks) =>{
      this._tasksObjNormal = tasks;
    });
    
  }

  /////////////////////////////SINALS/////////////////////

  updateTask(id: string, name: string) {
    this._connectionsService.updateTask(id, name)
  }

  deleteTask(id: string) { 
    this._connectionsService.deleteTask(id)
  }

  saveTask(id: string, name: string ){
    this._connectionsService.saveTask(id)
  }

///////////////////////////BEHAVIOURSUBJECT/////////////////

  updateTaskBS(id: string, name: string) {
    this._connectionsServiceBH.updateTaskBS(id, name)
  }

  deleteTaskBS(id: string) { 
    this._connectionsServiceBH.deleteTaskBS(id)
  }

  saveTaskBS(id: string, name: string ){
    this._connectionsServiceBH.saveTaskBS(id)
  }

}
