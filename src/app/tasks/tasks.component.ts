import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../store/auth.reducer';

interface Task {
  description: string;
  completed: boolean;
}
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  username$: Observable<string>;

  constructor(private store: Store<{ auth: AuthState }>) { 
    this.username$ = store.select('auth', 'username');
  }

  ngOnInit(): void {
  }
  username: string = '';
  newTask: string = '';
  tasks: Task[] = [];

  addTask() {
    const trimmedTask = this.newTask.trim()
    if (trimmedTask !== '') {
      const newTask: Task = { description: trimmedTask, completed: false };
      this.tasks.push(newTask);
      this.newTask = '';
    } else {
      alert('Por favor, ingresa una tarea antes de agregarla.');
    }
  }

  deleteTask(task: Task): void {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }

}
