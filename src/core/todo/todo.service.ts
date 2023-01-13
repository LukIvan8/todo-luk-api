import { Injectable } from "@nestjs/common";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "./todo.entity";
import { Repository } from "typeorm";

@Injectable()
export class TodoService{
  constructor(@InjectRepository(TodoEntity) private todoRepository:Repository<TodoEntity>) {
  }

  create(todo: CreateTodoDto){
    return this.todoRepository.save(todo);
  }
}