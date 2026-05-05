import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';

@Injectable()
export class LivrosService {
  //encapsulamento
  // Pilar POO: Encapsulamento, Herança e Polimorfismo (EHP)
  private livros:Livro[]=[];

  create(titulo:string,autor:string,qtd_paginas:number) {
    //Instanciar novo objeto livro
    const novoLivro = new Livro();
    novoLivro.id=this.livros.length++;
    novoLivro.titulo=titulo;
    novoLivro.autor=autor;
    novoLivro.qtd_paginas=qtd_paginas;
    this.livros.push(novoLivro)
    return novoLivro;
  }

  findAll() {
    return this.livros;
  }

  findOne(id: number) {
    return `This action returns a #${id} livro`;
  }

  update(id: number, dados:Partial<Livro>) {
    const index = this.livros.findIndex(livro => livro.id===id);
    if(index >=0){
      this.livros[index]={...this.livros[index],...dados};
    return `O livro #${id} foi encontrado.`;
  }
  return `O livro #${id} foi encontrado.`;
}

  remove(id: number) {
    const index = this.livros.findIndex(livro => livro.id===id);
    if(index >=0){
      this.livros.splice(index,1);
    return `O livro #${id} foi removido com sucesso.`;
    }
    return `O livro #${id} não foi encontrado.`;
  }
}
