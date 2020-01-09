export class Todo {
    id: number;
    title: string = null;
    // tslint:disable-next-line: no-inferrable-types
    completed: boolean = false;
    createdOn: Date;
}
