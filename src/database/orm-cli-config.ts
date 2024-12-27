import { DataSource, DataSourceOptions } from 'typeorm';
import { CreateCoursesTable1734999591459 } from 'src/migrations/1734999591459-CreateCoursesTable';
import { CreateTagsTable1735001638568 } from 'src/migrations/1735001638568-CreateTagsTable';
import { CreateCoursesTagsTable1735007886636 } from 'src/migrations/1735007886636-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1735016667012 } from 'src/migrations/1735016667012-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1735020091856 } from 'src/migrations/1735020091856-AddTagsIdToCoursesTagsTable';
import { Course } from 'src/courses/entities/courses.entity';
import { Tag } from 'src/courses/entities/tags.entity';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [Course, Tag],
  synchronize: false, //reflete as alterações nas tabelas correspondentes com o código quando true, deve ser utilizado apenas em ambiente de desenvolvimento!
  //Deve-se utilizar migrações para garantir consistencias e robustez em ambientes de produção.
};

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [
    CreateCoursesTable1734999591459,
    CreateTagsTable1735001638568,
    CreateCoursesTagsTable1735007886636,
    AddCoursesIdToCoursesTagsTable1735016667012,
    AddTagsIdToCoursesTagsTable1735020091856,
  ],
});
