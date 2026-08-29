import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
interface Language {
    label: string;
    value: string;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
}
