import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1734999591459 } from 'src/migrations/1734999591459-CreateCoursesTable';
import { CreateTagsTable1735001638568 } from 'src/migrations/1735001638568-CreateTagsTable';

export const dataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [CreateCoursesTable1734999591459, CreateTagsTable1735001638568],
});
