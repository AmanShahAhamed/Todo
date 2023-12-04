import { useState } from "react";
import Modal from "./Modal";
import ModalPropsInterface from "../interface/modalProps.interface";
import { TodosInterface } from "../interface/Todos.interface";
import { Todos } from "../Constant/Todos";
import { List } from "./List";
import { ModalTitle } from "../Constant/ModalAdd.enum";

const Filter = () => {
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => setShowModal(false);

  const onAdd = (todo: TodosInterface) => Todos.push(todo);

  const addTodoFields: ModalPropsInterface[] = [
    {
      name: "Tittle",
      type: "text",
      required: true,
    },
    {
      name: "Description",
      type: "text",
      required: true,
    },
    {
      name: "Completion Time",
      type: "date",
      required: true,
    },
  ];

  return (
    <>
      <div className="row justify-content-around">
        <div className="col-4">
          <button className="btn btn-danger">Filter</button>
        </div>
        <div className="col-4 d-flex">
          <input
            type="text"
            className="form-control"
            placeholder="Search"
            style={{ height: "40px" }}
          />
          <div className="mx-3">
            <button
              className="btn btn-success"
              style={{ width: "100px" }}
              onClick={() => setShowModal(true)}
            >
              Add Todo
            </button>
          </div>
        </div>
        {showModal && (
          <Modal
            onClose={closeModal}
            fieldConfigs={addTodoFields}
            title={ModalTitle.TODO}
            onAdd={onAdd}
          />
        )}
      </div>
      <div className="row">
        <List></List>
      </div>
    </>
  );
};

export default Filter;
