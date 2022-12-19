import './style.css';
import { StorageInterface } from "./storageInterface";
import createTask from "./taskFactory";
import { DisplayController } from "./displayController";

StorageInterface.initStorage();
DisplayController.pageLoad();
DisplayController.renderDay();


const today = document.getElementById('day');
const all = document.getElementById('all');
const addProjectButton = document.getElementById('addProjectButton');


today.addEventListener('click', () => DisplayController.renderDay());

all.addEventListener('click', () => DisplayController.renderAll());

addProjectButton.addEventListener('click', () => {
    DisplayController.projectForm();
    console.log('project form triggered');
});