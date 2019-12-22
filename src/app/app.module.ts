import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoService } from './service/todo.service';
import { MaterialModule } from './core/mat-module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ToolbarComponent,
    TodoListComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule
  ],
  entryComponents: [AddTodoComponent],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
