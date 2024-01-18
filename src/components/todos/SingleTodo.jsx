import { useState } from 'react';

export default function SingleTodo({
  todoTitle,
  todoComplete,
  onDelete,
  onDoneUndone,
  onTodoEditTitle,
  todoId,
}) {
  // const { todoTitle, todoComplete } = props;

  const [title, setTitle] = useState(todoTitle);

  const [isEditOn, setIsEditOn] = useState(false);

  function makeDone() {
    // setIsDone(!isDone);
    onDoneUndone();
  }

  // console.log('isEditOn reikme ===', isEditOn);

  function handleSingleEdit() {
    // console.log('isEditOn pries ===', isEditOn);
    setIsEditOn(!isEditOn);
    // console.log('isEditOn po ===', isEditOn);
    if (isEditOn) {
      onTodoEditTitle(todoId, title);
    }
  }

  return (
    <div className='todo-item-grid'>
      {/* rodom kai isEditOn yra false */}
      {!isEditOn && <h4>{title}</h4>}
      {/* rodom kai isEditOn yra true */}
      {isEditOn && (
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type='text'
          placeholder='edit todo title'
        />
      )}
      <p>{todoComplete ? 'Complete' : 'Incomplete'} </p>
      <button onClick={makeDone}>{todoComplete ? 'Undo' : 'Make Complete'} </button>
      <button onClick={onDelete}>Delete</button>
      {/* keiciam is isEditOn i priesinga */}
      <button onClick={handleSingleEdit}>{isEditOn ? 'Confirm' : 'Edit'}</button>
    </div>
  );
}
