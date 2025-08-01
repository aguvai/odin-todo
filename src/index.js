import "./styles.css";
import Status from "./enums/Status.js";
import Priority from "./enums/Priority.js";
import createTask from "./objects/Task.js";
import createProject from "./objects/Project.js";
import createProjectDisplay from "./ui/createProjectDisplay.js";
import createTodoDisplay from "./ui/createTodoDisplay.js";

let firstProject = createProject({
    title: "Household Errands",
})

let firstTask = createTask({
    title: "Take out the garbage",
    description: "Place the garbage bag into the bin",
    notes: "Don't drop it!",
    dueDate: new Date("2025-07-21"),
    priority: Priority.HIGH,
    status: Status.INCOMPLETE,
})

firstProject.addTodo(firstTask);


let secondTask = createTask({
    title: "Don't take out the garbage",
    description: "Place the garbage bag into the bin",
    notes: "Don't drop it!",
    dueDate: new Date("2025-07-28"),
    priority: Priority.HIGH,
    status: Status.INCOMPLETE,
})

firstProject.addTodo(secondTask)

createProjectDisplay(firstProject);

let thirdTask = createTask({
    title: "Maybe take out the garbage",
    description: "Place the garbage bag into the bin",
    notes: "Don't drop it!",
    dueDate: new Date("2025-07-29"),
    priority: Priority.HIGH,
    status: Status.INCOMPLETE,
})

firstProject.addTodo(thirdTask)

createTodoDisplay(thirdTask, firstProject)