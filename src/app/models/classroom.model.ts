import { School } from "./school.model";

export class Classroom {
    public id?: number;
    public grade: string;
    public year: string;
    public class: string;
    public id_school: number;
    public school?: School;
}