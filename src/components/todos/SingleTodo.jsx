import { useState } from 'react';

export default function SingleTodo({ todoTitle, todoComplete, onDelete, tId }) {
  // const { todoTitle, todoComplete } = props;

  const [isDone, setIsDone] = useState(todoComplete);

  const [title, setTitle] = useState(todoTitle);

  function makeDone() {
    setIsDone(!isDone);
  }

  function deleteSingleTodo() {
    // validacija
    onDelete(tId);
  }

  return (
    <div className='flex'>
      <h4>{title}</h4>
      <p>{isDone ? 'Complete' : 'Incomplete'} </p>
      <button onClick={makeDone}>{isDone ? 'Undo' : 'Make Complete'} </button>
      <button onClick={deleteSingleTodo}>Delete</button>
    </div>
  );
}
