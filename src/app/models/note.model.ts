export class Note {
    public description: string;
    public title: string;
    public id: string;

    constructor(title: string, desc: string) {
        this.title = title;
        this.description = desc
    }
}