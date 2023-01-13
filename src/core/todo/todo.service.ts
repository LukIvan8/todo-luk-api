import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateTodoDto } from "./dto/create-todo.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { TodoEntity } from "./todo.entity";
import { Repository } from "typeorm";

@Injectable()
export class TodoService{
  constructor(@InjectRepository(TodoEntity) private todoRepository:Repository<TodoEntity>) {
  }

  listAll(){
    return this.todoRepository.find();
  }

  delete(todoId : number){
    return this.todoRepository.delete(todoId);
  }

  create(todo: CreateTodoDto){
    return this.todoRepository.save(todo);
  }

  async changeStatus(todoId: number) {
    const taskToUpdate = await this.todoRepository.findOneBy({ id: todoId })
    if(taskToUpdate === null){
      throw new NotFoundException('No such task')
    }
    taskToUpdate.complete = !taskToUpdate.complete
    return await this.todoRepository.save(taskToUpdate)
  }
}