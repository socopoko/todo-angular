import { TodosService } from './../todos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  dataSource = [];

  constructor(private todos: TodosService) { 
    this.dataSource = this.todos.getData();
  }

  ngOnInit(): void {
  }

  
}