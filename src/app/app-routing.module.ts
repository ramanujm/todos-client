import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';

const routes: Routes = [
  { path: '', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
