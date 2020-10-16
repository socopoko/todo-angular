import { Injectable } from '@angular/core';

export interface Todos {
  id: number;
  date: string;
  title: string;
  description: string;
}

const TODO_DATA: Todos[] = [
  { id: 1, date: '12/10/2020', title: 'Shopping', description: 'Get apples 🍎' },
  { id: 2, date: '13/10/2020', title: 'Laundry', description: 'Wash judo uniform 🥋' },
  { id: 3, date: '14/10/2020', title: 'Reading', description: 'Read "A Little Life" 📗' },
  { id: 4, date: '14/10/2020', title: 'Project', description: 'Make todo app using Angular 😛' },
  { id: 5, date: '14/10/2020', title: 'Homework', description: 'Mathematics homework ➕➖➗' }
  
];

@Injectable({
  providedIn: 'root'
})

export class TodosService {

  constructor() { }

  getData() {
    return TODO_DATA;
  }
}
