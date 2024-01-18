import { useState } from 'react';

export default function SingleTodo({ todoTitle, todoComplete, onDelete, onDoneUndone }) {
  // const { todoTitle, todoComplete } = props;

  const [title, setTitle] = useState(todoTitle);

  const [isEditOn, setIsEditOn] = useState(false);

  function makeDone() {
    // setIsDone(!isDone);
    onDoneUndone();
  }

  function deleteSingleTodo() {
    // validacija
    onDelete();
  }

  return (
    <div className='todo-item-grid'>
      {/* rodom kai isEditOn yra false */}
      <h4>{title}</h4>
      {/* rodom kai isEditOn yra true */}
      <input type='text' placeholder='edit todo title' />
      <p>{todoComplete ? 'Complete' : 'Incomplete'} </p>
      <button onClick={makeDone}>{todoComplete ? 'Undo' : 'Make Complete'} </button>
      <button onClick={onDelete}>Delete</button>
      {/* keiciam is isEditOn i priesinga */}
      <button onClick={() => {}}>Edit</button>
    </div>
  );
}
