export const StorageInterface = (() => {

    const initStorage = () => {
        if (localStorage.getItem('default') === null) {
            localStorage.setItem('default', '');
            localStorage.setItem('count', '0');
        } else {
            console.log('Error: localStorage has already been initialized');
        };
    };
    
    const clearStorage = () => {
        localStorage.clear();
    };
    
    const addTask = (task, project = 'default') => {
        let temp = {};
        if (localStorage.getItem(project) !== '') {
            temp = JSON.parse(localStorage.getItem(project));
        };
        temp[task.id] = task;
        temp = JSON.stringify(temp);
        localStorage.setItem(project, temp);
    };
    
    const updateTask = (task, project = 'default') => {
        let temp = {};
        if (localStorage.getItem(project) !== '') {
            temp = JSON.parse(localStorage.getItem(project));
        };
        temp[task.id] = task;
        temp = JSON.stringify(temp);
        localStorage.setItem(project, temp);
    };
    
    const removeTask = (id, project = 'default') => {
        let temp = JSON.parse(localStorage.getItem(project));
        delete temp[id];
        temp = JSON.stringify(temp);
        localStorage.setItem(project, temp);
    };
    
    const getTask = (id, project = 'default') => {
        let temp = JSON.parse(localStorage.getItem(project));
        return temp.id;
    };
    
    const addProject = (project) => {
        if (localStorage.getItem(project) === null) {
            localStorage.setItem(project, '');
            return 'success';
        } else {
            console.log(`Error: a project named ${project} already exists`);
            return 'error';
        }
    };
    
    const removeProject = (project) => {
        localStorage.removeItem(project);
    };
    
    const getProject = (project = 'default') => {
        return JSON.parse(localStorage.getItem(project));
    };

    const toggleComplete = (id, project = 'default') => {
        let temp = JSON.parse(localStorage.getItem(project));

        if (temp[id].completed) {
            temp[id].completed = false;
        } else {
            temp[id].completed = true;
        };
        temp = JSON.stringify(temp);
        localStorage.setItem(project, temp);
    };

    const checkCompleted = (id, project = 'default') => {
        let temp = JSON.parse(localStorage.getItem(project));

        return temp[id].completed
    };


    return {
        initStorage, 
        clearStorage, 
        addTask, 
        updateTask, 
        removeTask, 
        getTask, 
        addProject, 
        removeProject, 
        getProject,
        toggleComplete,
        checkCompleted
    };
})();

