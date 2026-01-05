console.log("ToDo App");
let taskArray = [];
let exit = 0;
do {
  let choice = parseInt(prompt("Choose an option:\n1) Add task\n2) Remove task\n3) View tasks\n4) Exit"));

  switch (choice) {
    case 1:
      let task = prompt("Enter task: ");
      let status = prompt("Enter task status: ");
      let objTask = { task: task, status: status };
      taskArray.push(objTask);
      console.log("Task Added");
      break;

    case 2:
      let removeIndex = parseInt(prompt("Enter task index to remove: "));
      taskArray.splice(removeIndex, 1);
      console.log("Task Removed");
      break;

    case 3:
      console.log("Tasks:");
      taskArray.forEach((taskObj, index) => {
        console.log(`Index: ${index}`);
        console.log(`Task: ${taskObj.task}`);
        console.log(`Status: ${taskObj.status}`);
      });
      break;

    case 4:
      console.log("Exiting ToDo.");
      exit = 4;
      break;

    default:
      console.log("Invalid Choice");
  }
} while (exit !== 4);
