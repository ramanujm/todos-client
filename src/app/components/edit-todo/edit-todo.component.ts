import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { TodoService } from 'src/app/service/todo.service';
import { Todo } from 'src/app/core/todo';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.scss']
})
export class EditTodoComponent implements OnInit {
  editTodoControl = new FormControl('');

  constructor(public dialogRef: MatDialogRef<EditTodoComponent>,
    @Inject(MAT_DIALOG_DATA) public todoData: Todo,
    private todoService: TodoService) { }

  ngOnInit() {

  }

  onCancel(): void {
    this.dialogRef.close();
  }


  onUpdate(formData: any) {
      if (formData.title != null && formData.title.trim().length > 0) {
      // tslint:disable-next-line:prefer-const
      let editedTodo: any = { id: this.todoData.id, title: formData.title};
      this.todoService.updateTodo(editedTodo)
        .subscribe(
          (data: Todo) => {
            return location.reload();
          },
          (error) => console.log(error)
        );
      this.dialogRef.close();
    } else {
      this.editTodoControl.setErrors({ invalid: true });
    }
  }

}
