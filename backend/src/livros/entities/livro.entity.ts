export class Livro {
    //Atributos
    id:number;
    titulo:string; //texto
    autor:string;
    ano:number;
    qtd_pagina:number;
    disponivel:boolean; //true ou false
    //Métodos (ações)
    //Construtor
    constructor(){
        this.disponivel=true;
    }    
}