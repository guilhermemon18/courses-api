import { DataSource } from 'typeorm';
import { dataSourceOptions } from './database.module';
import { CreateCoursesTable1734999591459 } from 'src/migrations/1734999591459-CreateCoursesTable';
import { CreateTagsTable1735001638568 } from 'src/migrations/1735001638568-CreateTagsTable';
import { CreateCoursesTagsTable1735007886636 } from 'src/migrations/1735007886636-CreateCoursesTagsTable';
import { AddCoursesIdToCoursesTagsTable1735016667012 } from 'src/migrations/1735016667012-AddCoursesIdToCoursesTagsTable';
import { AddTagsIdToCoursesTagsTable1735020091856 } from 'src/migrations/1735020091856-AddTagsIdToCoursesTagsTable';

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
