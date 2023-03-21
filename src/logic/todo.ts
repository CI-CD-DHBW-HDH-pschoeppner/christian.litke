import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

export class TodoItem {
  id = "";
  value = "";
  done = false;
}

// this function must return a unique ID every time it is called
export function generateID(): string {
    // TODO: implement
    return uuidv4();
}

// make sure, that
// the value isn't longer than 255 characters
// the value isn' empty
// the todo isn't contained in the todos array (case insensitive)
export function validateTodo(todo: TodoItem, todos: TodoItem[]): boolean {
  // TODO: implement
  return false;
}

// capitalize the first letter of the todo
export function formatTodo(todo: TodoItem): TodoItem {
  // TODO: implement
  return {
    id: "",
    value: "",
    done: false
  }
}

// generate a random rgb color
// each value (r,g,b) should be between 50 and 150
export function generateColor(): string {
  // TODO: implement
  return ""
}

export const todoList = writable<TodoItem[]>([]);
