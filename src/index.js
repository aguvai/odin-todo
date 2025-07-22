import "./styles.css";
import createToDo from "./todo-object";

let firstTask = createToDo({
    title: "Take out the garbage",
    description: "Place the garbage bag into the bin",
    dueDate: "tomorrow",
    priority: "high",
    notes: "Don't drop it!",
})

console.log("DONE")

console.log(firstTask);

console.log(firstTask.getTitle());
console.log(firstTask.getNotes());