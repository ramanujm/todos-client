import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { TodoService } from 'src/app/service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  Todo: any = [];

  constructor(private http: HttpClient, private todoService: TodoService) { }

  ngOnInit() {
    this.getAllTodo();
  }

  reloadAllEmployees() {
    this.getAllTodo();
  }

  // Fetch all Todos.
  getAllTodo() {
    this.todoService.getAllTodo().subscribe((data) => {
      this.Todo = data;
    });
  }

// Update Todo
updateTodo(id, data): Observable<any> {
  // tslint:disable-next-line:prefer-const
  let url = `${this.baseUrl}/update/${id}`;
  return this.http.put(url, data, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  );
}

// Delete Todo
deleteTodo(todo, index){
  if (window.confirm('Are you sure to delete the task?')) {
    this.todoService.deleteTodo(todo.id).subscribe((data) => {
      this.Todo.splice(index, 1);
      // console.log('removeTodo...', data);
      this.reloadAllEmployees();
    },
    error => console.log(error));

}
}

// Error handling
 errorMgmt(error: HttpErrorResponse) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  console.log(errorMessage);
  return throwError(errorMessage);
}

}
