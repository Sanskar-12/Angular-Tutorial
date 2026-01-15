import { catchError } from 'rxjs';
import { Todo } from '../model/todos.type';
import { TodoService } from './../services/todos';
import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '../components/todo-item/todo-item';
import { FormsModule } from '@angular/forms';
import { FilterTodoPipe } from '../pipes/filter-todo-pipe';

@Component({
  selector: 'app-todos',
  imports: [CommonModule, TodoItem, FormsModule, FilterTodoPipe],
  templateUrl: './todos.html',
  styleUrl: './todos.scss',
})
// OnInit lets you run code when a component is created and initialized.
export class Todos implements OnInit {
  // injected the todo service
  todoService = inject(TodoService);
  todoItems = signal<Array<Todo>>([]);
  searchTerm = signal('');

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

  updateTodoItem(todoItem: Todo) {
    this.todoItems.update((todos) => {
      return todos.map((todo) => {
        if (todo.id === todoItem.id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
    });
  }
}
