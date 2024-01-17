import React from 'react';

const initTodos = [
  { id: 1, text: 'Complete task 1', completed: false },
  { id: 2, text: 'Finish task 2', completed: true },
  { id: 3, text: 'Submit task 3', completed: true },
  { id: 4, text: 'Review task 4', completed: false },
  { id: 5, text: 'Implement task 5', completed: false },
];

export default function TodoSection() {
  // useState

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {/* map per state ir make todos */}
        <li>Complete task 1 - not done</li>
        <li>Finish task 2 - done</li>
      </ul>
    </div>
  );
}
