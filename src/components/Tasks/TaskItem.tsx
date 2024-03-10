import React from 'react';

interface TaskItemProps {
  name: string;
  completed: boolean;
  id: string;
  toggleActive: (id: string, completed: boolean) => void;
  handleDelete: (id: string) => void;
}

const TaskItem = ({ name, completed, id, toggleActive, handleDelete }: TaskItemProps) => {
    
  return (
    <div className="container py-2">
    <div className="row bg-light justify-content-center ">
      <div className="col-1 align-self-center">
       <input type='checkbox' checked={completed} onChange={()=>toggleActive(id,!completed)}/>
      </div>
      <div className="col-6 align-self-center">
       {name}
      </div>
      <div className="col-2 p-1 align-self-center">
        <button
         className='btn btn-sm btn btn-outline-danger'
         onClick={()=>handleDelete(id)}>Delete</button>
      </div>
    </div>
  </div>
  );
}

export default TaskItem;

