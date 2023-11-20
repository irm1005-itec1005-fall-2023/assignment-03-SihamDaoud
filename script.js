/* Assignment 03: Starting a Todo List App
 *
 * You are going to build the brains of a simple Todo List application
 * in JavaScript. You don't have to worry about the look of the app for now.
 * We will make it look awesome in Assignment 04.
 *
 * For now, we'll focus on giving the application the following features:
 * 1. Add a new todo item
 * 2. Delete a todo item
 * 3. Mark a todo item as completed
 * 4. Delete a todo item
 * 5. Clear all completed todos
 *
 * The following code is the starting point for this assignment.
 *
 * You will have to write the code to initialise the todoItems array and
 * for the functions below.
 *
 * 1. addToDoItem(text)
 * 2. removeToDoItem(todoId)
 * 3. markToDoItemAsCompleted(todoId)
 * 4. deleteToDoItem(todoId)
 * 5. clearCompletedTasks()
 *
 * YOU MUST NOT CHANGE ANY OF THE FUNCTION NAMES OR THE AUTOMATED TESTS WILL FAIL
 *
 * As you write each function, press on the "Run Tests" button in the browser
 * to run the automated tests and check your work.
 *
 * You can also add your own tests and debug statements at the bottom of this file.
 *
 */


// Data storage - Initialize the array of To Do items
//
// NOTE:
//
// - You must use the following object literal structure when creating new todo items
// - The ID (id) of each todo item must be unique (you can use the length of the array as the ID or generate a random number)
//
// {
//   id: 0,
//   text: "This is a todo item",
//   completed: false,
// }

// Initialise an empty array with the variable name todoItems

// Function to add a todo to the list
// It should accept a string as a parameter (text of the todo item)
// and it should add a new todo item to the todoItems array
// The todo item should have the structure shown above
// It's really important that you have a unique ID for each todo item that you push onto the array
// the function does not need to return anything

//initialise empty array
let todoItems = [];
// Function to add a todo to the list
function addToDoItem(text) {

const id = todoItems.length;
const newTodo = {
  id: id,
  text: text,
  completed: false,
};
todoItems.push(newTodo);

//correct console.log to add newTodo
console.log("added:", newTodo);
}

//adding todo items
addToDoItem("buy groceries");
addToDoItem("read a book");
addToDoItem("go to the gym");
addToDoItem("finish assignment");
addToDoItem("make food");
addToDoItem("watch a movie");
addToDoItem("clean room");
addToDoItem("fold clothes");
addToDoItem("pet the dog");
addToDoItem("pick my mail");
addToDoItem("go to work");

//display list of todo items
console.log (todoItems);



// Function to remove a todo to the list
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything
function removeToDoItem(todoId) {
  // Implement the logic to add a task here
  // use findindex to get index of the todo with the id
const indexToRemove = todoItems.findIndex(todo => todo.id === todoId);
//check if the todo item with right id was found
if (indexToRemove !== -1){
  //use splice to remove the todo item from array
  todoItems.splice(indexToRemove, 1);
console.log(`Removed todo with id ${todoId}`);
} else {

  console.log(`Todo with id ${todoId} not found`);
   
}
}

//removing a todo item with id 1
removeToDoItem (1);
//the updated list of tofo items after removal
console.log(todoItems);




// Function to mark a task as completed
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, set its completed property to true
// the function does not need to return anything
function markToDoItemAsCompleted(todoId) {
  // Implement the logic to mark a task as completed here
  //use find method 
const todoToMarkCompleted = todoItems.find(todo => todo.id === todoId);

// check if todo item with the right id was found
if (todoToMarkCompleted){
  //set the completed to true
  todoToMarkCompleted.completed = true;
  console.log(`Marked todo with id ${todoId} as completed`);

} else {
  console.log(`todo with id ${todoId} not found`);
}
}
//Mark todo item with id 2 as completed
markToDoItemAsCompleted(2);
// Display the updated list of todo items after marking as completed
console.log(todoItems);



// Function to delete a task from the array
// It should accept a number as a parameter (id of the todo item)
// Loop through the array of todos, and when you find the todo item with the id
// that matches the id passed to the function, remove it from the array
// the function does not need to return anything, though you can return
// true or false depending on whether the item was successfully deleted
function deleteToDoItem(todoId) {
  // Implement the logic to remove a task here
const indexToDelete = todoItems.findIndex(todo => todo.id === todoId);
//check if the todo item with the right id was found
if (indexToDelete !== -1) {

  //use splice to remove the todo item from the array
  todoItems.splice(indexToDelete, 1);
  console.log(`Deleted todo with id ${todoId}`);
}else {
  console.log(`Todo with id ${todoId}not found`);
}

}

// Function to clear all completed tasks
// Loop through the array of todos, and when you find a todo item that is marked
// as completed, remove it completely from the array
function clearCompletedTasks() {
  //use filter to create a new array without completed task
  const incompleteTasks = todoItems.filter(todo =>! todo.completed);
  //update the todoItems array with the new array of incomplete tasks
  todoItems.splice(0, todoItems.length);
  
 
}
deleteToDoItem(3)
console.log (todoItems);
clearCompletedTasks();
console.log(todoItems);
// You can write your own tests here if you would like to test
// your code before using the automated tests
// For example, you could run:
//  addToDoItem("Test ToDo"); // This should add a new todo item to the array
//  console.log(todoItems); // This should show the todo item you added
//  removeToDoItem(0); // This should remove the todo item with ID 0 from the array
//  markToDoItemAsCompleted(0); // This should mark the todo item with ID 0 as completed


//reference: chat gpt https://chat.openai.com/
// youtube:https://www.youtube.com/watch?v=fS2F3QLrIY0&list=PL82C6-O4XrHeQQPw8J8-f2XHuXsuMFc-T&index=11