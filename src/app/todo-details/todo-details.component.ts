import { TodosService } from './../todos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {
  dataSource = [];

  constructor(private todos: TodosService) { 
    this.dataSource = this.todos.getData();
  }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id', 'date', 'title', 'description'];
  
}
