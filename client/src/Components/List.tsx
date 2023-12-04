import { useEffect, useState } from "react";
import { Todos } from "../Constant/Todos";
import { TodosInterface } from "../interface/Todos.interface";

export const List = () => {
  const [todoList, setTodosList] = useState<TodosInterface[] | []>([]);
  useEffect(() => {
    setTodosList(Todos);
  }, Todos);
  const setTableTitle = () => {
    if (todoList.length > 0)
      return Object.keys(todoList[0]).map((_) => <th scope="col">{_}</th>);
  };

  const setTableData = () =>
    todoList.map((_) => (
      <tr>
        <th scope="row">1</th>
        {_.createdAt && <td>{_.createdAt?.toISOString()}</td>}
        <td>{_.name}</td>
        <td>{_.description}</td>
        {_.completionDate && <td>{_.completionDate?.toISOString()}</td>}
      </tr>
    ));
  return (
    <table className="table my-3 mx-3">
      <thead className="thead-dark">
        <tr>{setTableTitle()}</tr>
      </thead>
      <tbody>{setTableData()}</tbody>
    </table>
  );
};
