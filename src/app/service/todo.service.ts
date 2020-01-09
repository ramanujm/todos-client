import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Todo } from '../core/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  // tslint:disable-next-line:no-inferrable-types
  baseUrl: string = 'http://localhost:8080/todos';
headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Fetch all Todos.
  getAllTodo() {
    return this.http.get(`${this.baseUrl}/getAllTodos`)
      .pipe(catchError(this.errorMgmt));
  }


  // Create Todo
createTodo(data): Observable<any> {
  return this.http.post(`${this.baseUrl}/createTodo`, data, {
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .pipe(
      catchError(this.errorMgmt)
    );
}

// Get Todo
getTodo(id): Observable<any> {
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
updateTodo(todo: Todo): Observable<any> {
  // tslint:disable-next-line:prefer-const
  let url = `${this.baseUrl}/updateTodo/${todo.id}`;
  return this.http.put(url, todo, { headers: this.headers }).pipe(
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
