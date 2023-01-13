export const TaskList = ({ taskList }: { taskList: string[] }) => (
  <ol>
    {taskList.map((task, index) => (
      <li key={index}>{task}</li>
    ))}
  </ol>
);
