import { useState } from 'react';

export default function SingleTodo({ todoTitle, todoComplete, onDelete, onDoneUndone }) {
  // const { todoTitle, todoComplete } = props;

  const [title, setTitle] = useState(todoTitle);

  function makeDone() {
    // setIsDone(!isDone);
    onDoneUndone();
  }

  function deleteSingleTodo() {
    // validacija
    onDelete();
  }

  return (
    <div className='flex between'>
      <h4>{title}</h4>
      <p>{todoComplete ? 'Complete' : 'Incomplete'} </p>
      <button onClick={makeDone}>{todoComplete ? 'Undo' : 'Make Complete'} </button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
