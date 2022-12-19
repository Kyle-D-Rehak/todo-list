import createTask from "./taskFactory";
import { StorageInterface } from "./storageInterface";

export const DisplayController = (() => {
    const pageLoad = () => {
        const page = document.getElementById('content');

        const header = document.createElement('div');
        header.id = 'header';
        page.appendChild(header);
        header.innerHTML = '<h1>Todo List</h1>'

        const sidebar = document.createElement('div');
        sidebar.id = 'sidebar';
        page.appendChild(sidebar);

        const day = document.createElement('button');
        day.id = 'day';
        sidebar.appendChild(day);
        day.textContent = 'Today';

        const all = document.createElement('button');
        all.id = 'all';
        sidebar.appendChild(all);
        all.textContent = 'All tasks';

        const projects = document.createElement('h2');
        sidebar.appendChild(projects);
        projects.textContent = 'Projects';

        renderProjectButtons();

        const addProjectButton = document.createElement('button');
        addProjectButton.id = 'addProjectButton';
        sidebar.appendChild(addProjectButton);
        addProjectButton.textContent = '+ add project';

        const mainContainer = document.createElement('div');
        mainContainer.id = 'mainContainer';
        page.appendChild(mainContainer);
    };

    const renderTask = (task, project = 'default') => {
        if (task !== null) {
            const element = document.createElement('div');
            element.id = task.id;
            element.classList.add('task');

            const flexContainer = document.createElement('div');
            flexContainer.classList.add('flexContainer');

            const titleContainer = document.createElement('div');
            titleContainer.classList.add('titleContainer');
            
            const title = document.createElement('h3');
            title.textContent = task.title;
            title.addEventListener('click', () => toggleDescription(task));

            const dueDate = document.createElement('p');
            dueDate.textContent = `Due date: ${task.dueDate}`;

            const buttonContainer = document.createElement('div');
            buttonContainer.classList.add('buttonContainer');
            
            const complete = document.createElement('button');
            complete.textContent = 'Mark Complete';
            complete.addEventListener('click', () => {
                StorageInterface.toggleComplete(task.id, project);

                if (StorageInterface.checkCompleted(task.id, project)) {
                    title.classList.add('completed');
                    dueDate.classList.add('completed');
                    complete.classList.add('completed');
                } else {
                    title.classList.remove('completed');
                    dueDate.classList.remove('completed');
                    complete.classList.remove('completed');
                };
            
            });
            
            const remove = document.createElement('button');
            remove.textContent = 'X';
            remove.addEventListener('click', () => {
                const id = task.id;
                StorageInterface.removeTask(id, project);
                document.getElementById(task.id).remove();
            })

            if (task.completed) {
                title.classList.add('completed');
                dueDate.classList.add('completed');
                complete.classList.add('completed');
            }
            
            document.getElementById('mainContainer').appendChild(element);
            element.appendChild(flexContainer);
            flexContainer.appendChild(titleContainer);
            titleContainer.appendChild(title);
            titleContainer.appendChild(dueDate);
            flexContainer.appendChild(buttonContainer);
            buttonContainer.appendChild(complete);
            buttonContainer.appendChild(remove);
        };
    };

    const removeTask = () => {

    };

    const toggleDescription = (task) => {
        const taskDiv = document.getElementById(task.id);
        const disc = document.getElementById(`${task.id}Disc`);

        if (disc !== null) {
            disc.remove();
        } else {
            const element = document.createElement('p');
            element.id = `${task.id}Disc`;
            element.textContent = task.description;
            taskDiv.appendChild(element);
        }

    }

    const renderDay = () => {
        const container = document.getElementById('mainContainer');
        container.innerHTML = '';

        const heading = document.createElement('h2');
        heading.textContent = 'Today';
        container.appendChild(heading);

        const date = new Date();
        const today = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

        Object.keys(localStorage).forEach(project => {
            if (localStorage.getItem(project) !== '' && localStorage.getItem(project) !== undefined && project !== 'count') {
                let temp = JSON.parse(localStorage.getItem(project));
                Object.keys(temp).forEach( key => {
                    if (temp[key].dueDate === today) {
                        renderTask(temp[key], project);
                    };
                });
             };
        });

        createAddTaskButton();
    };

    const renderAll = () => {
        const container = document.getElementById('mainContainer');
        container.innerHTML = '';

        const heading = document.createElement('h2');
        heading.textContent = 'All Tasks';
        container.appendChild(heading);

        Object.keys(localStorage).forEach(project => {
            if (localStorage.getItem(project) !== '' && localStorage.getItem(project) !== undefined && localStorage.getItem(project) !== 'count') {
                let temp = JSON.parse(localStorage.getItem(project));
                Object.keys(temp).forEach( key => {
                    renderTask(temp[key], project);
                });
             };
        });

        createAddTaskButton();
    };

    const renderProject = (project) => {
        const container = document.getElementById('mainContainer');
        container.innerHTML = '';

        const heading = document.createElement('h2');
        heading.textContent = project;
        container.appendChild(heading);

        if (localStorage.getItem(project) !== '') {
            let temp = JSON.parse(localStorage.getItem(project));
            Object.keys(temp).forEach( key => {
                renderTask(temp[key], project);
            });
        };

        createAddTaskButton(project);
    };

    const removeProject = () => {

    };

    const createAddTaskButton = (project = 'default') => {
        const button = document.createElement('button');
        button.id = 'addTask';
        document.getElementById('mainContainer').appendChild(button);
        button.innerHTML = '+ add task';
        button.addEventListener('click', () => taskForm(project));
    }

    const renderProjectButtons = () => {
        const sidebar = document.getElementById('sidebar');

        Object.keys(localStorage).forEach(project => {
            if (project !== 'default' && project !== 'count') {
                const element = document.createElement('button');
                element.id = project;
                element.textContent = project;
                element.addEventListener('click', () => renderProject(project));
                sidebar.appendChild(element);
             };
        });
    };

    const taskForm = (project) => {
        const container = document.getElementById('mainContainer');
        const form = document.createElement('form');
        form.id = 'taskForm';

        const title = document.createElement('input');
        title.id = 'taskTitleInput';
        title.setAttribute('type', 'text');
        title.setAttribute('size', 50 );
        title.required = true;
        title.setAttribute('name', 'title');
        title.setAttribute('placeholder', 'Title');

        const list = document.createElement('ul');
        const item1 = document.createElement('li');
        const item2 = document.createElement('li');
        const item3 = document.createElement('li');

        const submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Create task');

        const dateLabel = document.createElement('label');
        dateLabel.setAttribute('for', 'dateInput');
        dateLabel.textContent = 'Due date: ';

        const date = document.createElement('input');
        date.id = 'dateInput';
        date.setAttribute('type', 'date');
        title.required = true;
        title.setAttribute('name', 'date');

        const description = document.createElement('textarea');
        description.setAttribute('placeholder', 'Description...');

        submit.addEventListener('click', (e) => {
            e.preventDefault();
            if (title.value !== '' && date.value.length !== 0) {
                const temp = createTask(title.value, description.value , date.value);
                StorageInterface.addTask(temp, project);
                container.removeChild(form);
                renderTask(temp, project);
                createAddTaskButton();
            };
        });

        form.appendChild(list);
        list.appendChild(item1);
        item1.appendChild(title);
        list.appendChild(item2);
        item2.appendChild(description);
        list.appendChild(item3);
        item3.appendChild(dateLabel);
        item3.appendChild(date);
        form.appendChild(submit);

        container.removeChild(document.getElementById('addTask'));
        container.appendChild(form);
        title.focus();
    };

    const projectForm = () => {
        const sidebar = document.getElementById('sidebar');
        const addButton = document.getElementById('addProjectButton');

        const form = document.createElement('form');

        const project = document.createElement('input');
        project.setAttribute('type', 'text');
        project.required = true;
        project.setAttribute('name', 'project');
        project.setAttribute('placeholder', 'Project name');

        const submit = document.createElement('input');
        submit.setAttribute('type', 'submit');
        submit.setAttribute('value', 'Create');

        submit.addEventListener('click', (e) => {
            if (project.value !== '') {
                e.preventDefault();
                StorageInterface.addProject(project.value.trim());

                const element = document.createElement('button');
                element.id = project.value.trim();
                element.textContent = project.value.trim();
                element.addEventListener('click', () => renderProject(project.value.trim()));
                form.remove();
                sidebar.insertBefore(element, addButton);
            };
        });

        form.appendChild(project);
        form.appendChild(submit);
        sidebar.insertBefore(form, addButton);
        project.focus();



    };

    return {
        pageLoad,
        renderTask,
        removeTask,
        renderDay,
        renderAll,
        renderProject,
        removeProject,
        taskForm,
        projectForm
    };

})();