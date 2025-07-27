import "./styles.css";
import Status from "./enums/status.js";
import Priority from "./enums/priority.js";
import createToDo from "./objects/todo-object.js";
import createProject from "./objects/project-object.js";
import createProjectDisplay from "./ui/createProjectDisplay.js";
import createTodoDisplay from "./ui/createTodoDisplay.js";

let firstProject = createProject({
    title: "Household Errands",
})

console.log(firstProject.getTodos())

let firstTask = createToDo({
    title: "Take out the garbage",
    description: "Place the garbage bag into the bin",
    notes: "Don't drop it!",
    dueDate: new Date("2025-07-21"),
    priority: Priority.HIGH,
    status: Status.INCOMPLETE,
})

firstProject.addTodo(firstTask);

console.log(firstProject.getTodos())

createProjectDisplay(firstProject);
createTodoDisplay(firstTask, firstProject);