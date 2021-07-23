import { Databases, Sources } from './value';

export const SOURCES: Sources[] = [
  {source: "default", databases: ['medicare_demographic', 'db2', 'db3']},
  {source: "source2", databases: ['db1', 'db2', 'db3']},
  {source: "source3", databases: ['db1', 'db2', 'db3']},
  {source: "source4", databases: ['db1', 'db2', 'db3']},
];

export const DATABASES: Databases[] = [
  {database: "medicare_demographic", columns: ['name', 'id', 'county']},
  {database: 'db1', columns : ['col1', 'col2', 'col3']},
  {database: 'db2', columns : ['col1', 'col2', 'col3']},
  {database: 'db3', columns : ['col1', 'col2', 'col3']},
]