export interface ActoData {
    title: string;
    description: string;
    category: string;
    date: string;
    medios: [];
    enUso: number;
}

export interface Saludo {
    titulo: string;
    contenido: string;
    descripcion: string;
    medios: [];
    enUso: number;
}

export interface Visita {
    titulo: string;
    medios: [];
    enUso: number;
}

export interface Historia {
    id?: number;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    medios: [];
    enUso: number;
    token?: string;
}

export interface Oracion {
    titulo: string;
    oracion: string;
    enUso: number;
}

export interface Material {
    titulo: string;
    contenido: string;
    medios: [];
    enUso: number;
}

export interface Ambiente {
    titulo: string;
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

export interface ambientesPj {
    id: number,
    titulo: string,
    descripcion: string,
    enUso: number,
    medios: [];
}