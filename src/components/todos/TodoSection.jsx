import { useState } from 'react';
import SingleTodo from './SingleTodo';

const initTodos = [
  { id: 1, text: 'Complete task 1', completed: false },
  { id: 2, text: 'Finish task 2', completed: true },
  { id: 3, text: 'Submit task 3', completed: true },
  { id: 4, text: 'Review task 4', completed: true },
  { id: 5, text: 'Implement task 5', completed: false },
];

/*
versija po istrynimo 
[
    { id: 1, text: 'Complete task 1', completed: false },
    { id: 2, text: 'Finish task 2', completed: true },
    { id: 3, text: 'Submit task 3', completed: true },
    { id: 5, text: 'Implement task 5', completed: false },
]
*/

export default function TodoSection() {
  // useState
  const [mainTodoArr, setMainTodoArr] = useState(initTodos);

  console.table(mainTodoArr);

  function deleteNr4() {
    // grazinti i mainTodoArr versija masyvo kuriame nera todo su id 4
    const arrAfterDelete = mainTodoArr.filter((tObj) => tObj.id !== 4);
    // nemodifikuodami mainTodoArr
    // arrAfterDelete[0].text = 'Kazkas';
    console.table(arrAfterDelete);
    setMainTodoArr(arrAfterDelete);
  }

  console.log('initTodos ===', initTodos);
  return (
    <div>
      <h2>Todos</h2>
      <h3>TotalDone Todos: {mainTodoArr.filter((tObj) => tObj.completed).length}</h3>
      <button onClick={deleteNr4}>Delete todo with id 4</button>
      <ul>
        {mainTodoArr.map((tObj) => (
          <li key={tObj.id}>
            <SingleTodo todoTitle={tObj.text} todoComplete={tObj.completed} />
          </li>
        ))}
      </ul>

      <h3>init todos</h3>
      <ul>
        {/* map per state ir make todos */}
        {initTodos.map((tObj) => (
          <li key={tObj.id}>
            id:{tObj.id} {tObj.text} - {tObj.completed ? 'Complete' : 'Incomplete'}
          </li>
        ))}
      </ul>
    </div>
  );
}
