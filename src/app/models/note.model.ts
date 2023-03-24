export class Note {
    public description: string;
    public title: string;
    public id: string;
    public isFavorite: boolean;

    constructor(title: string, desc: string) {
        this.title = title;
        this.description = desc;
        this.isFavorite = false;
        this.id = ''
    }
}