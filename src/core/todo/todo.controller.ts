import { Body, Controller, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { CreateTodoDto } from "./dto/create-todo.dto";

@Controller("todo")
export class TodoController {
  constructor(private todoService: TodoService) {
  }

  @Post("create")
  createTodo(@Body() todo: CreateTodoDto) {
    return this.todoService.create(todo);
  }
}