// src/Todo.js
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const priorities = ['Low', 'Moderate', 'High'];

const Todo = () => {
  const { handleSubmit, register, control, reset } = useForm();
  const [tasks, setTasks] = useState([]);
  const [columns, setColumns] = useState({
    todo: { id: 'todo', title: 'To-Do', taskIds: [] },
    ongoing: { id: 'ongoing', title: 'Ongoing', taskIds: [] },
    completed: { id: 'completed', title: 'Completed', taskIds: [] },
  });

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;

    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      // Reordering within the same list
      const column = columns[source.droppableId];
      const newTaskIds = Array.from(column.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...column, taskIds: newTaskIds };
      setColumns({ ...columns, [newColumn.id]: newColumn });
    } else {
      // Moving between lists
      const sourceColumn = columns[source.droppableId];
      const destinationColumn = columns[destination.droppableId];

      const sourceTaskIds = Array.from(sourceColumn.taskIds);
      sourceTaskIds.splice(source.index, 1);
      const newSourceColumn = { ...sourceColumn, taskIds: sourceTaskIds };

      const destinationTaskIds = Array.from(destinationColumn.taskIds);
      destinationTaskIds.splice(destination.index, 0, draggableId);
      const newDestinationColumn = { ...destinationColumn, taskIds: destinationTaskIds };

      setColumns({
        ...columns,
        [newSourceColumn.id]: newSourceColumn,
        [newDestinationColumn.id]: newDestinationColumn,
      });
    }
  };

  const onSubmit = (data) => {
    const newTask = {
      id: `task-${tasks.length + 1}`,
      title: data.title,
      description: data.description,
      deadline: data.deadline,
      priority: data.priority,
    };

    setTasks([...tasks, newTask]);

    // Reset the form after submitting
    reset();
  };

  const onDelete = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Management</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Title:
          <input {...register('title', { required: true })} />
        </label>
        <label>
          Description:
          <input {...register('description')} />
        </label>
        <label>
          Deadline:
          <input type="date" {...register('deadline')} />
        </label>
        <label>
          Priority:
          <select {...register('priority')}>
            {priorities.map((priority) => (
              <option key={priority} value={priority}>
                {priority}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Add Task</button>
      </form>

      <DragDropContext onDragEnd={onDragEnd}>
        {Object.values(columns).map((column) => (
          <div key={column.id} style={{ margin: '8px', padding: '8px', border: '1px solid lightgray' }}>
            <h2>{column.title}</h2>
            <Droppable droppableId={column.id}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                  {column.taskIds.map((taskId, index) => {
                    const task = tasks.find((t) => t.id === taskId);
                    return (
                      <Draggable key={taskId} draggableId={taskId} index={index}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <div>
                              <strong>{task.title}</strong> - {task.priority}
                              <button onClick={() => onDelete(task.id)}>Delete</button>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ))}
      </DragDropContext>
    </div>
  );
};

export default Todo;

// // Components
// import { useState } from 'react';
// import Form from './Form';
// import TasksContainer from './TasksContainer';


// const Todo = () => {
//   const [state, setState] = useState({
//     TODO: {
//       name: 'Todo',
//       items: []
//     },
//     IN_PROGRESS: {
//       name: 'In Progress',
//       items: []
//     },
//     COMPLETED: {
//       name: 'Done',
//       items: []
//     }
//   });

//   const [error, setError] = useState(null);

//   return (
//     <div className="w-full min-h-screen box-border relative">
//       {error && (
//         <div className="absolute top-0 right-0 mt-10 mr-10 px-6 py-3 bg-red-500 rounded-md">
//           <p className="text-lg text-white font-bold">{error}</p>
//         </div>
//       )}
//       <header className="bg-green-500 pt-12 pb-32">
//         <div className="container mx-auto h-64 flex flex-col justify-center items-center">
//           <h1 className="text-5xl text-white font-bold mb-3">Task Manager</h1>
//           <Form state={state} setState={setState} setError={setError} />
//         </div>
//       </header>
//       <div className="-m-24 container mx-auto px-8 md:px-16 lg:px-0">
//         <TasksContainer state={state} setState={setState} />
//       </div>
//     </div>
//   );
// };

// export default Todo;
