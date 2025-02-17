export default class Task {
  constructor(title, description, dueDate, priority) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }

  getTaskDetails() {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate,
      priority: this.priority,
      completed: this.completed
    };
  }
}