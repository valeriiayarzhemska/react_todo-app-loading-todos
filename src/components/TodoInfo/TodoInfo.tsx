import { FC } from 'react';
import classNames from 'classnames';

import { Todo } from '../../types/Todo';

type Props = {
  todo: Todo,
};

export const TodoInfo: FC<Props> = ({ todo }) => {
  const {
    id,
    title,
    completed,
  } = todo;

  return (
    <div
      key={id}
      className={classNames(
        'todo',
        { completed },
      )}
    >
      <label className="todo__status-label">
        <input
          type="checkbox"
          className="todo__status"
          checked={completed}
        />
      </label>

      <span className="todo__title">
        {title}
      </span>

      <button type="button" className="todo__remove">
        ×
      </button>

      <div className="modal overlay">
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};