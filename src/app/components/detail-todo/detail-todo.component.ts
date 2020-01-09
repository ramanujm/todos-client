import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Todo } from 'src/app/core/todo';

@Component({
  selector: 'app-detail-todo',
  templateUrl: './detail-todo.component.html',
  styleUrls: ['./detail-todo.component.scss']
})
export class DetailTodoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DetailTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public todoData: Todo,
    private todoService: TodoService) { }

  ngOnInit() {
  }

  onOkay(): void {
    this.dialogRef.close();
  }

}
