import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoService } from './service/todo.service';
import { MaterialModule } from './core/mat-module';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { EditTodoComponent } from './components/edit-todo/edit-todo.component';
import { DetailTodoComponent } from './components/detail-todo/detail-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTodoComponent,
    ToolbarComponent,
    TodoListComponent,
    EditTodoComponent,
    DetailTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  entryComponents: [AddTodoComponent, EditTodoComponent, DetailTodoComponent],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
