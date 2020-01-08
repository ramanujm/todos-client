import { TodoService } from 'src/app/service/todo.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { Todo } from 'src/app/core/todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todo: Todo = new Todo();
  Todo: any = [];

  constructor(public dialogRef: MatDialogRef<AddTodoComponent>, private todoService: TodoService) { }

  ngOnInit() {
    this.todoService.getAllTodo()
        .subscribe(
          (data: Todo[]) =>  this.Todo = data,
          (error: any)   => console.log(error),
          ()             => console.log('all todos gets')
        );
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(formData: any) {
    console.log('formdata... ', formData);
    let newTodo: any = {title: formData.title };
      this.todoService.createTodo(newTodo)
        .subscribe(
          (data: Todo) => location.reload(),
          (error) => console.log(error)
        );
      this.dialogRef.close();
    }
  }
