import { useState } from 'react';

export default function AddTodo({ onNewTodo }) {
  const [newTodoVal, setNewTodoVal] = useState('');

  function handleNewTodoTitleVal(event) {
    setNewTodoVal(event.target.value);
  }

  function sendValueUp() {
    console.log('sendValueUp ===', newTodoVal);
    onNewTodo(newTodoVal);
  }

  return (
    <div>
      {/* <form> */}
      <fieldset>
        <legend>Add todo</legend>
        {/* susieti su state */}
        <h3>{newTodoVal}</h3>
        <input
          value={newTodoVal}
          onChange={handleNewTodoTitleVal}
          type='text'
          placeholder='add new todo'
        />
        <button onClick={sendValueUp}>Add</button>
      </fieldset>
      {/* </form> */}
    </div>
  );
}
