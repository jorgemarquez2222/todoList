import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Task } from '../../interfaces';
import { ConnectionsService } from '../../services/connections.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  _tasks = signal<Task[]>([]);

  constructor(private _connectionsService: ConnectionsService) {
    this._tasks = this._connectionsService.tasks;
  }

  updateTask(id: string, name: string) {
    this._connectionsService.updateTask(id, name)
  }

  deleteTask(id: string) { 
    this._connectionsService.deleteTask(id)
  }

  saveTask(id: string, name: string ){
    this._connectionsService.saveTask(id)
  }

}
