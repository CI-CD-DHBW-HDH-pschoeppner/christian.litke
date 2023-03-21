import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

export class TodoItem {
  id = "";
  value = "";
  done = false;
}

// this function must return a unique ID every time it is called
export function generateID(): string {
  return uuidv4();
}

// make sure, that
// the value isn't longer than 255 characters
// the value isn' empty
// the todo isn't contained in the todos array (case insensitive)
export function validateTodo(todo: TodoItem, todos: TodoItem[]): boolean {
  if (
    !todo.id ||
    todo.value.length > 255 ||
    !todo.value.replaceAll(/\s+/g, "") || //remove whitespace to make sure "empty" todos that are only spaces don't get accepted
    todos.some((item) => item.value.toLowerCase() === todo.value.toLowerCase())
  ) {
    return false;
  }
  return true;
}

// capitalize the first letter of the todo
export function formatTodo(todo: TodoItem): TodoItem {
  const firstChar = todo.value[0];
  const capitalizedValue = todo.value.replace(firstChar, firstChar.toUpperCase());
  return {
    id: todo.id,
    value: capitalizedValue,
    done: todo.done,
  };
}

// generate a random rgb color
// each value (r,g,b) should be between 50 and 150
export function generateColor(): string {
  let r = Math.floor(Math.random() * 101);
  r = r + 50;
  let g = Math.floor(Math.random() * 101);
  g = g + 50;
  let b = Math.floor(Math.random() * 101);
  b = b + 50;
  return `rgb(${r},${g},${b})`;
}

export const todoList = writable<TodoItem[]>([]);
