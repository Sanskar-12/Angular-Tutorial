import { Component, signal } from '@angular/core';
import { Greeting } from '../components/greeting/greeting';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [Greeting],
  templateUrl: './home.html',
  // styleUrl: './home.scss',
})
export class Home {
  homeMessage = signal('This is a message to greeting');
}
