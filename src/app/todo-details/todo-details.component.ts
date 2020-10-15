import { Component, OnInit } from '@angular/core';

export interface Todos {
  id: number;
  date: string;
  title: string;
  description: string;
}

const TODO_DATA: Todos[] = [
  { id: 1, date: '12/10/2020', title: 'Shopping', description: 'Get apples 🍎'},
  { id: 2, date: '13/10/2020', title: 'Laundry', description: 'Wash judo uniform 🥋' },
  { id: 3, date: '14/10/2020', title: 'Reading', description: 'Read "A Little Life" 📗' }
];

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})
export class TodoDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['id','date','title','description'];
  dataSource = TODO_DATA;
}
