import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'classes_assign',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  synchronize: true, // ¡No usar en producción!
};
