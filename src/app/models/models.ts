export interface ActoData {
    id?: number;
    titulo: string;
    descripcion: string;
    categoria: string;
    ubicacion: string;
    fecha: string;
    medios: Array<any>;
    enUso: number;
    token?: string;
}

export interface Saludo {
    id?: number;
    titulo: string;
    texto: string;
    descripcion: string;
    medios: Array<any>;
    enUso: number;
    token?: string;
}

export interface Visita {
    id?: number;
    titulo: string;
    descripcion: string;
    medios: Array<any>;
    enUso: number;
    token?: string;
}

export interface Historia {
    id?: number;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    medios: Array<any>;
    enUso: number;
    token?: string;
}

export interface Oracion {
    id?: number;
    titulo: string;
    oracion: string;
    enUso: number;
    token?: string;
}

export interface Material {
    id?: number;
    titulo: string;
    contenido: string;
    medios: Array<any>;
    enUso: number;
    token?: string;
}


export interface Token {
    token:string;
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
    password: string;
    token?: string;
}

export interface ambientesPj {
    id: number,
    titulo: string,
    descripcion: string,
    enUso: number,
    medios: Array<any>,
    token?: string
}
