import { IColumn, ITask } from '@/types/Task';
import TaskCard from './TaskCard';
import { useDroppable } from '@dnd-kit/core';

interface ColumnProps {
  column: IColumn;
  tasks: ITask[];
  key?: string;
}

const Column = (props: ColumnProps) => {
  const { column, tasks, key } = props;
  const { setNodeRef } = useDroppable({
    id: column.id,
  });
  return (
    <div
      key={key}
      className="flex flex-1 w-80 flex-col rounded-lg bg-neutral-100 p-4"
    >
      <h2 className="mb-4 font-semibold text-neutral-700">{column.title}</h2>
      <div ref={setNodeRef} className="flex flex-col flex-1 gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default Column;
