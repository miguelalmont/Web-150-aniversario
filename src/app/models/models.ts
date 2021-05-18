// import { url } from "node:inspector";

export interface ActoData {
    title: string;
    description: string;
    category: string;
    date: string;
    image: string;
}

export interface Historia {
    titulo: string;
    subtitulo: string;
    descripcion: string;
    medios: [];
    enUso: number;
}  

export interface Token {
    token:string
}


export interface User {
    name:string,
    email: string,
    password: string,
    admin: boolean
}

export interface UserLogin {
    username: string;
    password: string;
}

export interface Saludos {
    // title: string;
    // content: string;
    // imageUrl: string;
    // description: string;
    // videoUrl?: string;
    id: number;
    titulo: string;
    texto: string;
    descripcion: string;
    enUso: number;
    medios: [];
}