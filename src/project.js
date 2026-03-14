export class Project {
    constructor(title, description, dueDate, priority) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }
    setTitle(e) {
        this.title = e;
    }
    setDescription(e) {
        this.description = e;
    }
    setDueDate(e) {
        this.dueDate = e;
    }
    setPriority(e) {
        this.priority = e;
    }

    getID() {
        return this.id;
    }
    getTitle() {
        return this.title;
    }
    getDescription() {
        return this.description;
    }
    getDueDate() {
        return this.dueDate;
    }
    getPriority() {
        return this.priority;
    }
}