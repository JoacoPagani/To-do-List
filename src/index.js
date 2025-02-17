// index.js - Inicializa la app
import './styles.css'; // Si tienes estilos
import Project from './Project';

import Storage from './Storage';
import { initializeApp } from "./Dom.js";

document.addEventListener("DOMContentLoaded", () => {
    // Cargar proyectos guardados o crear uno por defecto
    const savedData = Storage.loadData();
    let initialProjects = [];

    if (savedData && savedData.projects && savedData.projects.length > 0) {
        initialProjects = savedData.projects.map(projectData => {
            const project = new Project(projectData.name);
            if (projectData.tasks) {
                projectData.tasks.forEach(taskData => {
                    project.addTask(
                        taskData.title,
                        taskData.description,
                        taskData.dueDate,
                        taskData.priority
                    );
                });
            }
            return project;
        });
    } else {
        initialProjects = [new Project("Mi Primer Proyecto")];
    }

    console.log('Initial projects:', initialProjects);
    console.log('Is array?', Array.isArray(initialProjects));

    initializeApp(initialProjects);
});
