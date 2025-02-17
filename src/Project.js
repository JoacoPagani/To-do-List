import Task from './task'; // Importar la clase Task 

export default class Project {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTask(title, description, dueDate, priority) {
    const task = new Task(title, description, dueDate, priority);
    this.tasks.push(task);
  }

  deleteTask(index) {
    this.tasks.splice(index, 1);
  }
}

