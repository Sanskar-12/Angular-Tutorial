import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  // Signal is like useState in which we can store the values and call them to render it on the page
  title = signal('My first angular app through signal');
}
