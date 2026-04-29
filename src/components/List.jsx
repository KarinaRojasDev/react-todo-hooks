import Item from "./Item";

function List({ list, handleDelete, handleUpdate, handleCompleted }) {
  return (
    <ul>
      {list.map((l) => {
        return (
          <Item
            key={l.id}
            task={l}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            handleCompleted={handleCompleted}
          />
        );
      })}
    </ul>
  );
}

export default List;