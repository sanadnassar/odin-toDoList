import {Storage} from "./storage.js"
import {Project} from "./project.js"
import "./styles.css";


class Web {
    displayProjects() {
    text = "";
    for (let i = 0; i < this.myProjects.length; i++) {
        currentProject = this.myProjects[i];
        text += "<div>"
        text += `<p> ${currentProject.getID()}</p>`;
        text += `<p> ${currentProject.getTitle()}</p>`;
        text += `<p> ${currentProject.getDescription()}</p>`;
        text += `<p> ${currentProject.getDueDate()}</p>`;
        text += `<p> ${currentProject.getPriority()}</p>`;
        text += "</div>"
    }
}
}

const mode = document.getElementById("mode");

mode.addEventListener("click", ()=> {
    layout.classList.toggle("active");
})