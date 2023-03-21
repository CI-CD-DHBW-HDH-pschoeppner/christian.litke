import {
  generateID,
  validateTodo,
  formatTodo,
  generateColor,
  TodoItem,
} from "./todo";

describe("Generate ID", () => {
  it("Does an ID get generated?", () => {
    expect(generateID()).toBeTruthy();
  });
  it("Are seperate IDs different?", () => {
    expect(generateID()).not.toEqual(generateID());
  });
});
describe("Todo validation", () => {
  const testTodoItem = new TodoItem();
  testTodoItem.id = generateID();
  testTodoItem.value = "Item in List";
  const testTodoList = [testTodoItem];
  it("Are correct values allowed?", () => {
    const goodItem = new TodoItem();
    goodItem.id = generateID();
    goodItem.value = "Write a good test";
    expect(validateTodo(goodItem, testTodoList)).toBe(true);
  });
  it("Are too long values not allowed?", () => {
    const tooLong = new TodoItem();
    tooLong.id = generateID();
    tooLong.value = "x".repeat(256);
    expect(validateTodo(tooLong, testTodoList)).toBe(false);
  });
  it("Are empty values not allowed?", () => {
    const tooEmpty = new TodoItem();
    tooEmpty.id = generateID();
    expect(validateTodo(tooEmpty, testTodoList)).toBe(false);
  });
  it("Are duplicate values not allowed?", () => {
    const tooOften = new TodoItem();
    tooOften.id = generateID();
    tooOften.value = testTodoItem.value.toLowerCase(); // check with different case!
    expect(validateTodo(tooOften, testTodoList)).toBe(false);
  });
});
describe("Todo capitalisation", () => {
  it("Does an item get capitalized?", () => {
    const testTodoItem = new TodoItem();
    testTodoItem.id = generateID();
    testTodoItem.value = "item";
    const correctItem = formatTodo(testTodoItem);
    expect(correctItem.value).toMatch("Item");
  });
  it("Does a number stay the same?", () => {
    const testTodoItem = new TodoItem();
    testTodoItem.id = generateID();
    testTodoItem.value = "12 Different things";
    const correctItem = formatTodo(testTodoItem);
    expect(correctItem.value).toMatch("12 Different things");
  });
});
describe("Color generation", () => {
  it("Does a color get generated?", () => {
    expect(generateColor()).toMatch(/rgb\(\d+,\d+,\d+\)/);
  });
  it("Are colors different?", () => {
    expect(generateColor()).not.toMatch(generateColor());
  });
});
