import { Injectable } from '@angular/core';
import { Todo } from '../model/todos.type';

// Angular services are basically helper classes used to handle business logic, data sharing, and reusable functionality outside of components.

// can be injectable in any component
@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todoItems: Todo[] = [
    {
      title: 'groceries',
      id: 0,
      userId: 1,
      completed: true,
    },
    {
      title: 'car wash',
      id: 1,
      userId: 1,
      completed: false,
    },
  ];
}
