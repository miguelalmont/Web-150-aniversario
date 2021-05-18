export interface ActoData {
    title: string;
    description: string;
    category: string;
    date: string;
    medios: [];
    enUso: number;
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