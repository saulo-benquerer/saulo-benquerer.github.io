import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // This is the main application component.
  // It serves as the root component for the Angular application.
  // The templateUrl points to the HTML file that defines the layout,
  // and styleUrl points to the CSS file for styling.
}
