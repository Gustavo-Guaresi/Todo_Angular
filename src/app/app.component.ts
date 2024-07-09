import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from './components/todos/todos.component';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent, NgFor, FormsModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
