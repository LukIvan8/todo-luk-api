import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 49153,
  // Где хранить секретные данные?
  username: 'postgres',
  password: 'postgrespw',
  database: 'postgres',
  entities: [__dirname + '/../core/**/*.entity.{js,ts}'],
  synchronize: true,
};
