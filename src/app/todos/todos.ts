import { catchError } from 'rxjs';
import { Todo } from '../model/todos.type';
import { TodoService } from './../services/todos';
import { Component, inject, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
// OnInit lets you run code when a component is created and initialized.
export class Todos implements OnInit {
  // injected the todo service
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);

  ngOnInit(): void {
    // console.log(this.todoService.todoItems);
    // this.todoItems.set(this.todoService.todoItems);

    this.todoService
      .getTodosFromApi()
      .pipe(
        catchError((err) => {
          console.log(err);
          throw err;
        })
      )
      .subscribe((todos) => {
        this.todoItems.set(todos);
      });
  }
}
