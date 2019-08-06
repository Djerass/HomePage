import nanoid from "nanoid";

export default class Todo {
  constructor(todo, isDone = false, id = nanoid()) {
    this.id = id;
    this.todo = todo;
    this.isDone = isDone;
  }
}
