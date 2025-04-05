import { IColumn, ITask } from '@/types/Task';

const COLUMNS: IColumn[] = [
  {
    id: 'TODO',
    title: 'To Do',
  },
  {
    id: 'IN_PROGRESS',
    title: 'In Progress',
  },
  {
    id: 'DONE',
    title: 'Done',
  },
];

const INITIAL_TASKS: ITask[] = [
  {
    id: '1',
    title: 'Research',
    description: 'Gather requirements for project.',
    status: 'DONE',
  },
  {
    id: '2',
    title: 'Design System',
    description: 'Create UI and Component Library.',
    status: 'IN_PROGRESS',
  },
  {
    id: '3',
    title: 'API Development',
    description: 'Build RESTful API for the application.',
    status: 'TODO',
  },
];

export { COLUMNS, INITIAL_TASKS };
