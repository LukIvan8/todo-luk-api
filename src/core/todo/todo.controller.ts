import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Controller("todo")
export class TodoController {
  constructor(private todoService: TodoService) {
  }

  @Get("/list")
  getAll(){
    return this.todoService.listAll();
  }

  @Post("create")
  create(@Body() todo: CreateTodoDto) {
    return this.todoService.create(todo);
  }

  @Delete("delete/:id")
  delete(@Param('id') id:number){
    return this.todoService.delete(id)
  }

  @Patch("check/:id")
  changeStatus(@Param('id') id:number){
    return this.todoService.changeStatus(id);
  }
}