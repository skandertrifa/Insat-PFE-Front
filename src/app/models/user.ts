import { TimeStamp } from './timeStamp';


export class User extends TimeStamp{
    id: number;
    nom: string
    prenom: string
    email: string;
    role: string

}
