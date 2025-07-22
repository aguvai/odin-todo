import "./styles.css";
import Status from "./status.js";
import Priority from "./priority.js";
import createToDo from "./todo-object";
import createProject from "./project-object.js";

let firstProject = createProject({
    title: "First Project",
})

console.log(firstProject.getTodos())

let firstTask = createToDo({
    title: "Take out the garbage",
    description: "Place the garbage bag into the bin",
    dueDate: "tomorrow",
    notes: "Don't drop it!",
    priority: Priority.HIGH,
    status: Status.INCOMPLETE,
})

firstProject.addTodo(firstTask);

console.log(firstProject.getTodos())