import {Project} from "./project.js"

export class Storage {
    constructor() {
        this.myProjects = [];
        this.text = "";
    }

    addProject(project) {
        this.myProjects.push(project);
    }

    removeProject(id) {
        let newProjects = this.myProjects.filter(project => project.getID() !== id)
        this.myProjects = newProjects;
        displayProjects();
    }
}