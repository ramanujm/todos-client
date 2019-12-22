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

  // Fetch all Todos.
  getAllTodo() {
    this.todoService.getAllTodo().subscribe((data) => {
      this.Todo = data;
    });
  }


  // Create Todo
createTodo(data): Observable<any> {
  // let url = `${this.baseUrl}/createEmployee`;
  return this.http.post(`${this.baseUrl}/createTodo`, data)
    .pipe(
      catchError(this.errorMgmt)
    );
}

// Get Todo
getTodo(id): Observable<any> {
  console.log('getTodo # id => ', id);
  // tslint:disable-next-line:prefer-const
  let url = `${this.baseUrl}/getTodoById/${id}`;
  return this.http.get(url, {headers: this.headers}).pipe(
    map((res: Response) => {
      return res || {};
    }),
    catchError(this.errorMgmt)
  );
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
deleteTodo(id): Observable<any> {
  // tslint:disable-next-line:prefer-const
  let url = `${this.baseUrl}/deleteTodo/${id}`;
  return this.http.delete(url, { headers: this.headers }).pipe(
    catchError(this.errorMgmt)
  );
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
