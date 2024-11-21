const fs = require("fs");
const path = require("path");
const readline = require("readline");

const filePath = path.join(__dirname, "tasks.json");

if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify([]));
}

function readTasks() {
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
}

function writeTasks(tasks) {
  fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function displayMenu() {
  console.log(`
Choose an option:
1. Add a new task
2. View a list of tasks
3. Mark a task as complete
4. Remove a task
5. Exit
`);
}

function addTask() {
  rl.question("Enter the task description: ", (description) => {
    const tasks = readTasks();
    tasks.push({ description, completed: false });
    writeTasks(tasks);
    console.log("Task added successfully!");
    mainMenu();
  });
}

function viewTasks() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log("No tasks available.");
  } else {
    console.log("Tasks:");
    tasks.forEach((task, index) => {
      console.log(
        `${index + 1}. ${task.description} [${task.completed ? "✔" : "✘"}]`
      );
    });
  }
  mainMenu();
}

function markComplete() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log("No tasks available to mark as complete.");
    mainMenu();
    return;
  }

  viewTasks();
  rl.question("Enter the task number to mark as complete: ", (number) => {
    const index = parseInt(number) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks[index].completed = true;
      writeTasks(tasks);
      console.log("Task marked as complete!");
    } else {
      console.log("Invalid task number.");
    }
    mainMenu();
  });
}

function removeTask() {
  const tasks = readTasks();
  if (tasks.length === 0) {
    console.log("No tasks available to remove.");
    mainMenu();
    return;
  }

  viewTasks();
  rl.question("Enter the task number to remove: ", (number) => {
    const index = parseInt(number) - 1;
    if (index >= 0 && index < tasks.length) {
      tasks.splice(index, 1);
      writeTasks(tasks);
      console.log("Task removed successfully!");
    } else {
      console.log("Invalid task number.");
    }
    mainMenu();
  });
}

function mainMenu() {
  displayMenu();
  rl.question("Enter your choice: ", (choice) => {
    switch (choice) {
      case "1":
        addTask();
        break;
      case "2":
        viewTasks();
        break;
      case "3":
        markComplete();
        break;
      case "4":
        removeTask();
        break;
      case "5":
        console.log("Goodbye!");
        rl.close();
        break;
      default:
        console.log("Invalid choice. Please try again.");
        mainMenu();
    }
  });
}

mainMenu();
