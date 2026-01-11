import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h1>Hello world</h1>
    <p>Welcome to {{ title }}</p>
  `,
  styles: [
    `
      p {
        background-color: red;
      }
    `,
  ],
  // templateUrl: './app.html',
  // styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('first-sanskar-app');
}
