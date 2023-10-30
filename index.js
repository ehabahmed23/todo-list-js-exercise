// // Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescription = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete

//here we got rid of all the arrays and used an object to keep track of the state- introduced task object
function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function () {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function () {
      this.complete = true;
    },
  };
  return task;
};




// DRIVER CODE BELOW

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1



//Driver code
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

logState(task1); // Clean Cat Litter has not been completed
markCompleted();
logState(task1); // Clean Cat Litter has been completed

console.log(tasks);

// task1.title
// task1.markCompleted();