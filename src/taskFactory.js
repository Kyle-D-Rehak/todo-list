const createCounter = () => {
    return () => {
        let count = localStorage.getItem('count');
        count ++;
        localStorage.setItem('count', count);
        return count;
    };
};

const counter = createCounter();

export default function createTask(title, description = '', dueDate = '', priority = '', completed = false) {
    return {id: counter(), title, description, dueDate, priority, completed};
};

