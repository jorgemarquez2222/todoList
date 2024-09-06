import { Component, signal } from '@angular/core';
import { ConnectionsService } from '../../services/connections.service';
import { Task } from '../../interfaces';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {

  _tasks = signal<Task[]>([]);

  form : FormGroup = new FormGroup({});

  constructor(private _connectionsService: ConnectionsService){
    this._tasks = this._connectionsService.tasks;
    this.form = new FormGroup({
      tarea: new FormControl('')
    })
  }
  
  addTask(event: Event){ 
    event?.preventDefault()
    console.log('this.form.value: ', this.form.get('tarea')?.value)
    if(!this.form.get('tarea')?.value) return;
    this._connectionsService.addTask(this.form.get('tarea')?.value)
    this.form.get('tarea')?.reset()
  }

  reset(){
    this._connectionsService.reset()
  } 
  
}
