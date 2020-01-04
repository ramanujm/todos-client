import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/core/todo';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public todoData: Todo,
    private myData: TodoService) { }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }


  onUpdate(formData: any) {
    // tslint:disable-next-line:prefer-const
    let editedTodo: any = { _id: formData._id, title: formData.title};
    this.myData.updateTodo(formData.id, editedTodo)
      .subscribe(
        (data: Todo) => {
          return location.reload();
        },
        (error) => console.log(error)
      );
    this.dialogRef.close();
  }

}
