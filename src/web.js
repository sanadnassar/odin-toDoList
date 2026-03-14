import {Storage} from "./storage.js"
import {Project} from "./project.js"
import "./styles.css";

const mode = document.getElementById("mode");
const add = document.getElementById("add");
const info = document.getElementById("info")
const modal = document.querySelector("#project-modal");
const projectForm = modal.querySelector("form");
const layout = document.getElementById("layout");
const cancel = document.getElementById("cancel-btn");

class Web {
    displayProjects(projectsArray) {
        let text = "";
        for (let i = 0; i < projectsArray.length; i++) {
            let currentProject = projectsArray[i]; 
            text += "<div>"
            text += `<p> ${currentProject.getID()}</p>`;
            text += `<p> ${currentProject.getTitle()}</p>`;
            text += `<p> ${currentProject.getDescription()}</p>`;
            text += `<p> ${currentProject.getDueDate()}</p>`;
            text += `<p> ${currentProject.getPriority()}</p>`;
            text += "</div>"
        }
        info.innerHTML = text;
    }
}

const myWeb = new Web();
const myStorage = new Storage();

const defaultProject = new Project("My First Task", "Description here", "2026-03-14", "Low");
myStorage.addProject(defaultProject);
myWeb.displayProjects(myStorage.myProjects);

mode.addEventListener("click", ()=> {
    layout.classList.toggle("active");
})

projectForm.addEventListener("submit", (e) => {
    const title = document.querySelector("#title-input").value;
    const desc = document.querySelector("#desc-input").value;
    const due = document.querySelector("#date-input").value;
    const priority = document.querySelector("#priority-input").value;
    const newProject = new Project(title, desc, due, priority);
    myStorage.addProject(newProject);
    projectForm.reset();
    myWeb.displayProjects(myStorage.myProjects);
});

add.addEventListener("click", () => {
    modal.showModal();
});

cancel.addEventListener("click", () => {
    projectForm.reset();
    modal.close();
})