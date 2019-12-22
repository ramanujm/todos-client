import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { TodoService } from 'src/app/service/todo.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { Todo } from 'src/app/core/todo';
import { EditTodoComponent } from '../edit-todo/edit-todo.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  Todo: any = [];

  constructor(public dialog: MatDialog, private http: HttpClient, private todoService: TodoService) { }

  ngOnInit() {
    this.reloadAllTodos();
  }

  reloadAllTodos() {
    this.getAllTodo();
  }

  // Fetch all Todos.
  getAllTodo() {
    this.todoService.getAllTodo().subscribe((data) => {
      this.Todo = data;
    });
  }

 // open the edit dialog
 openEditDialog(_id): void {
  this.todoService.getTodo(_id)
      .subscribe(
        (resp: Todo) => {
          const dialogConfig = new MatDialogConfig();
          dialogConfig.width = '500px';
          dialogConfig.data = resp;
          const dialogRef = this.dialog.open(EditTodoComponent, dialogConfig);

          dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
          });
        },
        (error: any) => console.log(error),
        () => console.log('complete')
      );
}

// Delete Todo
deleteTodo(todo, index) {
  if (window.confirm('Are you sure to delete the task?')) {
    this.todoService.deleteTodo(todo.id).subscribe((data) => {
      this.Todo.splice(index, 1);
      // console.log('removeTodo...', data);
      this.reloadAllTodos();
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
