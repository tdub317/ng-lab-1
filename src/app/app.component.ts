import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nglab1';
  toDo: Task[] = [
    {
      task: "Walk the dog.",
      completed: false
    },
    {
      task: "Go to the store",
      completed: true
    },
    {
      task: "Get gas.",
      completed: false
    },
    {
      task: "Wash the car.",
      completed: false
    }
  ];

}
