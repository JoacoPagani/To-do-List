// Dom.js mejorado
import Storage from "./Storage.js";
import Project from "./Project.js";

// Variables globales para mantener el estado
let projectsArray = [];
let currentProject = null;

// Mover las referencias del DOM dentro de una función de inicialización
let projectList, taskList, addProjectBtn, addTaskBtn, viewAllTasksBtn, allTasksList, taskSection, allTasksSection;

function initializeDOMElements() {
    projectList = document.getElementById("project-list");
    taskList = document.getElementById("task-list");
    addProjectBtn = document.getElementById("add-project");
    addTaskBtn = document.getElementById("add-task");
    viewAllTasksBtn = document.getElementById("view-all-tasks");
    allTasksList = document.getElementById("all-tasks-list");
    taskSection = document.getElementById("task-section");
    allTasksSection = document.getElementById("all-tasks-section");

    console.log('DOM Elements initialized:', {
        projectList,
        taskList,
        addProjectBtn,
        addTaskBtn,
        viewAllTasksBtn,
        allTasksList,
        taskSection,
        allTasksSection
    });
}

export const initializeApp = (initialProjects) => {
    // Asegurar que tenemos un array de proyectos
    projectsArray = Array.isArray(initialProjects) ? initialProjects : [];
    console.log('Initial projects:', projectsArray);

    // Inicializar elementos del DOM
    initializeDOMElements();

    // Configurar event listeners
    setupEventListeners();

    // Renderizar proyectos iniciales
    renderProjects(projectsArray);

    // Si hay proyectos, mostrar el primero
    if (projectsArray.length > 0) {
        currentProject = projectsArray[0];
        showTaskSection(currentProject);
        renderTasks(currentProject);
    }
};

function setupEventListeners() {
    const projectModal = document.getElementById("project-modal");
    const projectForm = document.getElementById("project-form");
    const cancelProjectBtn = document.getElementById("cancel-project");
    const createProjectBtn = document.querySelector("#project-form button[type='submit']");

    // Función para cerrar el modal
    const closeModal = () => {
        console.log('Closing modal'); // Debug
        projectModal.classList.add("hidden");
        projectForm.reset();
    };

    if (addProjectBtn) {
        addProjectBtn.addEventListener("click", () => {
            console.log('Opening modal'); // Debug
            projectModal.classList.remove("hidden");
        });
    }

    if (cancelProjectBtn) {
        cancelProjectBtn.addEventListener("click", (e) => {
            console.log('Cancel clicked'); // Debug
            e.preventDefault();
            e.stopPropagation();
            closeModal();
        });
    }

    if (projectForm) {
        projectForm.addEventListener("submit", (e) => {
            console.log('Form submitted'); // Debug
            e.preventDefault();
            const projectName = document.getElementById("new-project-name").value.trim();
            
            if (projectName) {
                try {
                    const newProject = new Project(projectName);
                    projectsArray.push(newProject);
                    renderProjects(projectsArray);
                    Storage.saveData(projectsArray);
                    closeModal();
                    console.log('New project added:', newProject);
                } catch (error) {
                    console.error("Error creating project:", error);
                }
            }
        });
    }

    // Cerrar modal al hacer clic fuera
    if (projectModal) {
        projectModal.addEventListener("click", (e) => {
            if (e.target === projectModal) {
                console.log('Clicked outside modal'); // Debug
                closeModal();
            }
        });
    }

    // Prevenir que los clics dentro del modal lo cierren
    const modalContent = document.querySelector(".modal-content");
    if (modalContent) {
        modalContent.addEventListener("click", (e) => {
            e.stopPropagation();
        });
    }

    if (addTaskBtn) {
        addTaskBtn.addEventListener("click", addTask);
    }

    if (viewAllTasksBtn) {
        viewAllTasksBtn.addEventListener("click", () => {
            allTasksSection.classList.remove("hidden");
            taskSection.classList.add("hidden");
            renderAllTasks(projectsArray);
        });
    }

    // Añadir event listeners para los botones "Back to Projects"
    const backToProjectsBtn = document.getElementById("back-to-projects");
    const backToProjectsFromAllBtn = document.getElementById("back-to-projects-from-all");

    if (backToProjectsBtn) {
        backToProjectsBtn.addEventListener("click", () => {
            taskSection.classList.add("hidden");
            allTasksSection.classList.add("hidden");
        });
    }

    if (backToProjectsFromAllBtn) {
        backToProjectsFromAllBtn.addEventListener("click", () => {
            allTasksSection.classList.add("hidden");
            taskSection.classList.add("hidden");
        });
    }
}

function addTask() {
    if (!currentProject) {
        alert("Please select a project first");
        return;
    }

    const title = document.getElementById("task").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    if (title && dueDate) {
        try {
            currentProject.addTask(title, description, dueDate, priority);
            renderTasks(currentProject);
            Storage.saveData(projectsArray);

            // Limpiar los campos
            document.getElementById("task").value = "";
            document.getElementById("description").value = "";
            document.getElementById("due-date").value = "";
            document.getElementById("priority").value = "low";

            console.log('Task added:', { title, description, dueDate, priority });
        } catch (error) {
            console.error("Error adding task:", error);
        }
    } else {
        alert("Please complete at least the title and due date");
    }
}

function renderProjects(projects) {
    console.log('Rendering projects:', projects);
    if (!projectList) {
        console.error("Project list element not found");
        return;
    }

    projectList.innerHTML = "";
    projects.forEach((project, index) => {
        const projectItem = document.createElement("li");
        projectItem.classList.add("project-item");

        // Contenedor para el nombre del proyecto y botones
        const projectContent = document.createElement("div");
        projectContent.classList.add("project-content");

        // Nombre del proyecto (ahora es clickeable)
        const projectName = document.createElement("span");
        projectName.textContent = project.name;
        projectName.classList.add("project-name");
        projectName.addEventListener("click", () => {
            currentProject = project;
            showTaskSection(project);
            renderTasks(project);
        });

        // Botón de eliminar
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "×"; // Usar × como símbolo de eliminar
        deleteBtn.classList.add("delete-project-btn");
        deleteBtn.setAttribute("data-tooltip", "Delete Project");

        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (confirm(`Are you sure you want to delete the project "${project.name}"?`)) {
                projectsArray.splice(index, 1);
                renderProjects(projectsArray);
                Storage.saveData(projectsArray);

                // Si el proyecto eliminado era el actual, ocultar la sección de tareas
                if (currentProject === project) {
                    taskSection.classList.add("hidden");
                    allTasksSection.classList.add("hidden");
                }
            }
        });

        // Añadir elementos al contenedor
        projectContent.appendChild(projectName);
        projectContent.appendChild(deleteBtn);
        projectItem.appendChild(projectContent);
        projectList.appendChild(projectItem);
    });
}

function renderTasks(project) {
    if (!taskList) return;
    
    taskList.innerHTML = "";
    project.tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        
        // Crear contenedor para la información de la tarea
        const taskInfo = document.createElement("div");
        taskInfo.classList.add("task-info");
        taskInfo.textContent = `${task.title} - ${task.description || ''} - Vence: ${task.dueDate} - Prioridad: ${task.priority}`;
        
        // Crear contenedor para los controles (checkbox y botón)
        const taskControls = document.createElement("div");
        taskControls.classList.add("task-controls");

        // Checkbox para marcar como completada
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", () => {
            task.toggleCompleted();
            renderTasks(project);
            Storage.saveData(projectsArray);
        });

        // Botón de eliminar
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Eliminar";
        deleteBtn.classList.add("delete-btn"); // Asegurarnos de añadir la clase
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            project.deleteTask(index);
            renderTasks(project);
            Storage.saveData(projectsArray);
        });

        // Añadir elementos a sus contenedores
        taskControls.appendChild(checkbox);
        taskControls.appendChild(deleteBtn);
        
        taskItem.appendChild(taskInfo);
        taskItem.appendChild(taskControls);
        
        if (task.completed) {
            taskItem.classList.add("completed");
        }
        
        taskList.appendChild(taskItem);
    });
}

function renderAllTasks(projects) {
    if (!allTasksList) return;
    
    allTasksList.innerHTML = "";
    projects.forEach(project => {
        project.tasks.forEach(task => {
            const taskItem = document.createElement("li");
            taskItem.textContent = `${project.name} - ${task.title} - ${task.dueDate}`;
            allTasksList.appendChild(taskItem);
        });
    });
}

function showTaskSection(project) {
    if (!taskSection || !allTasksSection) return;
    
    taskSection.classList.remove("hidden");
    allTasksSection.classList.add("hidden");
    const projectTitle = document.getElementById("project-title");
    if (projectTitle) {
        projectTitle.textContent = project.name;
    }
}

export { showTaskSection };
