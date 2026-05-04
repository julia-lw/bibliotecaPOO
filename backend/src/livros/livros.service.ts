import { Injectable } from '@nestjs/common';
import { CreateLivroDto } from './dto/create-livro.dto';
import { UpdateLivroDto } from './dto/update-livro.dto';
import { Livro } from './entities/livro.entity';

@Injectable()
export class LivrosService {
  //encapsulamento
  // Pilar POO: Encapsulamento, Herança e Polimorfismo (EHP)
  private livros:Livro[]=[];


  create(titulo:string,autor:string,qtd_pagina:number) {
    return 'This action adds a new livro';
  }

  findAll() {
    return `This action returns all livros`;
  }

  findOne(id: number) {
    return `This action returns a #${id} livro`;
  }

  update(id: number, updateLivroDto: UpdateLivroDto) {
    return `This action updates a #${id} livro`;
  }

  remove(id: number) {
    return `This action removes a #${id} livro`;
  }
}
