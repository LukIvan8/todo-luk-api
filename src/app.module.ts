import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from "./core/todo/todo.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeOrmConfig } from "./lib/ormconfig";

@Module({
  imports: [TodoModule, TypeOrmModule.forRoot(typeOrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
