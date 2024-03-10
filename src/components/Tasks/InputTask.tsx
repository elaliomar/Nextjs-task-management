import React, { useState, FormEvent,useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { addTask, selectTasks,toggleTask,deleteTask ,Task } from '../../redux/slice/taskSlice';
import TaskItem from './TaskItem';
import SyncLoader from "react-spinners/SyncLoader"
import { useRouter } from 'next/router';

const InputTask = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const [newTask, setNewTask] = useState('');
  const [isLoading,setIsLoading] = useState(false)
  const router = useRouter();
  const isActive = router.pathname === '/tasks/task-list/active';

  useEffect(()=>{
    setIsLoading(true);
    setTimeout(()=>{
      setIsLoading(false)
    },1000)
  },[isActive])

  const handlSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();
    const newTask: Task = {
      id: uuidv4(),
      name: value,
      completed: false,
    };
    dispatch(addTask(newTask));
  };

  const toggleActiveTask = (id: string, completed: boolean) => {
    dispatch(toggleTask(id));
  };

  const handleDeleteTask = (id: string) => {
    dispatch(deleteTask(id));
  };

  const activeTasks = tasks.filter((task) => !task.completed && isActive);
  const completedTasks = tasks.filter((task) => task.completed && !isActive);

  return (
    <>
       {isActive && (
             <form
             onSubmit={(e) => {
               if (newTask.length > 0) {
                 handlSubmit(e, newTask);
                 setNewTask('');
               }
             }}
             className="container py-2"
           >
             <div className="col-md-12 d-grid col-12 gap-2">
               <label>Enter your task name:</label>
               <input
                 type="text"
                 value={newTask}
                 onChange={(e) => setNewTask(e.target.value)}
               />
               <button type="submit" className={`btn btn-success btn-sm ${newTask.length == 0 && 'disabled'}`}>
                 Create
               </button>
             </div>
           </form>
       )}
      <div>
      {isLoading ? (
        <SyncLoader  color="rgba(0, 0, 0, 1)" className="d-flex justify-content-center mt-3 container" />
      ):
      (
          <div className='pt-2'>
          {isActive && activeTasks.length ? (
            activeTasks.map((t) => (
              <TaskItem
                key={t.id}
                name={t.name}
                completed={t.completed}
                id={t.id}
                toggleActive={toggleActiveTask}
                handleDelete={handleDeleteTask}
              />
            ))
          ) : !isActive && completedTasks.length > 0 ? (
            completedTasks.map((t) => (
              <TaskItem
                key={t.id}
                name={t.name}
                completed={t.completed}
                id={t.id}
                toggleActive={toggleActiveTask}
                handleDelete={handleDeleteTask}
              />
            ))
          ) : isActive && activeTasks.length == 0 ? (
            <div className="text-center fw-bold">No Active Tasks</div>
          ) : (
            !isActive && completedTasks.length == 0 && <div className="text-center fw-bold">No Completed Tasks</div>
          )}
        </div> 
      )}
      </div>
    </>
  );
};

export default InputTask;
