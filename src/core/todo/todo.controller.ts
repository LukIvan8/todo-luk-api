import { Body, Controller, Get, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Controller("todo")
export class TodoController {
  constructor(private todoService: TodoService) {
  }

  @Get("hi")
  todoHi() {
    return "Todo Connected";
  }

  @Post("create")
  createTodo(@Body() todo: CreateTodoDto) {
    return this.todoService.create(todo);
  }
}