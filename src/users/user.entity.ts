import { Role } from "./role.enum";

export class User {

    userId:number;
    name:String;
    password:string;

    roles: Role[];
}