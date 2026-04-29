function Item({ task, handleDelete, handleUpdate, handleCompleted }) {
  return (
    <li className={task.isDone ? "done" : ""}>
      {task.title}

      <div className="actions">
        <button onClick={() => handleDelete(task.id)}>DELETE</button>
        <button onClick={() => handleUpdate(task)}>UPDATE</button>
        <button onClick={() => handleCompleted(task)}>COMPLETED</button>
      </div>
    </li>
  );
}

export default Item;