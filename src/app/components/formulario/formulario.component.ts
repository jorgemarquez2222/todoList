import { Component, signal } from '@angular/core';
import { ConnectionsService } from '../../services/connections.service';
import { Task } from '../../interfaces';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { ConnectionsServiceBehaviorService } from '../../services/connections-service-behavior.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})

export class FormularioComponent {

  _tasks = signal<Task[]>([]);
  _tasksOb$ =  new Observable<Task[]>();

  form : FormGroup = new FormGroup({});

  constructor(
    private _connectionsService: ConnectionsService,
    private _connectionsServiceBH: ConnectionsServiceBehaviorService
  ){
    this._tasks = this._connectionsService.tasks;
    this._tasksOb$ = this._connectionsServiceBH.tasksBS;
    this.form = new FormGroup({
      tarea: new FormControl('')
    })
  }
  
  addTask(event: Event){ 
    event?.preventDefault();
    const tarea = this.form.get('tarea')?.value;
    if(!tarea) return;
    this._connectionsService.addTask(tarea)
    this._connectionsServiceBH.addTaskBS(tarea)
    this.form.get('tarea')?.reset()
  }

  reset(){
    this._connectionsService.reset()
  } 

}
