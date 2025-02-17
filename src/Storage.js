const STORAGE_KEY = 'todoListData';

const Storage = {
    saveData(projectsArray) {
        try {
            const data = {
                projects: projectsArray.map(project => ({
                    name: project.name,
                    tasks: project.tasks.map(task => ({
                        title: task.title,
                        description: task.description,
                        dueDate: task.dueDate,
                        priority: task.priority,
                        completed: task.completed
                    }))
                }))
            };
            localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
            return true;
        } catch (error) {
            console.error('Error saving data:', error);
            return false;
        }
    },

    loadData() {
        try {
            const data = localStorage.getItem(STORAGE_KEY);
            if (!data) return { projects: [] };
            
            return JSON.parse(data);
        } catch (error) {
            console.error('Error loading data:', error);
            return { projects: [] };
        }
    },

    clearData() {
        localStorage.removeItem(STORAGE_KEY);
    }
};

export default Storage;