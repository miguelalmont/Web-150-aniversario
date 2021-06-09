export interface ActoData {
    id?: number;
    titulo: string;
    descripcion: string;
    categoria: string;
    ubicacion: string;
    fecha: string;
    medios: [];
    enUso: number;
}

export interface Saludo {
    id?: number;
    titulo: string;
    contenido: string;
    descripcion: string;
    medios: [];
    enUso: number;
}

export interface Visita {
    id?: number;
    titulo: string;
    descripcion: string;
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
    id?: number;
    titulo: string;
    oracion: string;
    enUso: number;
}

export interface Material {
    id?: number;
    tipo: number;
    url: string;
    enUso: number;
}


export interface Token {
    token:string
}


export interface User {
    id?: number,
    username: string,
    password: string,
    mail: string,
    rolName: string,
    token?: string
}

export interface UserLogin {
    username: string;
    password: string,
}

export interface ambientesPj {
    id: number,
    titulo: string,
    descripcion: string,
    enUso: number,
    medios: [],
    token?: string
}