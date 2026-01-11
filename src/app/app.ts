import { Component, signal } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Header } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  // Here you have to register your component you are using
  imports: [
    // RouterOutlet,
    Home,
    Header,
  ],
  // In template you can give your component's html structure
  template: `
    <app-header />
    <main>
      <app-home />
    </main>
  `,

  // In Styles you can give your styles css
  styles: [
    `
      main {
        padding: 16px;
      }
    `,
  ],

  // In templateUrl you can give your html folder path
  // templateUrl: './app.html',

  // In styleUrl you can give your css folder path
  // styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('first-sanskar-app');
}
