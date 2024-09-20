import React from 'react';
import { Todo } from '../../types/Todo';
import { User } from '../../types/User';
import { TodoItem} from '../TodoItem';

interface TodoListProps {
  todos: Todo[];
  users: User[];
  onTodoSelect: (todo: Todo) => void;
  selectedTodo: Todo | null;
}

export const TodoList: React.FC<TodoListProps> = ({
  todos,
  onTodoSelect,
  selectedTodo,
}) => (
  <table className="table is-narrow is-fullwidth">
    <thead>
      <tr>
        <th>#</th>
        <th>
          <span className="icon">
            <i className="fas fa-check" />
          </span>
        </th>
        <th>Title</th>
        <th> </th>
      </tr>
    </thead>

    <tbody>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          data-cy="todo"
          onTodoSelect={onTodoSelect}
          selectedTodo={selectedTodo}
        />
      ))}
    </tbody>
  </table>
);
