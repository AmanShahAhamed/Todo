import { useState } from "react";
import ModalPropsInterface from "../interface/modalProps.interface";

interface ModalProps {
  onClose: () => void;
  fieldConfigs: ModalPropsInterface[];
  title: string;
  onAdd: (args: any) => void;
}

const Modal = ({ onClose, fieldConfigs, title, onAdd }: ModalProps) => {
  const [formData, setFormData] = useState<{ [key: string]: string }>({});
  const setModalField = () =>
    fieldConfigs.map((_) => {
      return (
        <div className="form-group my-3">
          <label htmlFor={_.name} className="form-label text-start">
            {_.name}{" "}
          </label>
          <input
            type={_.type}
            className="form-control"
            id={_.name}
            placeholder={_.name}
            required={_.required}
            onChange={(e) =>
              setFormData({ ...formData, [_.name]: e.target.value })
            }
          />
        </div>
      );
    });

  const handleAdd = () => {
    onAdd(formData);
    setFormData({});
    onClose();
  };
  return (
    <>
      <div className="modal-wrapper"></div>
      <div className="modal-content">
        <h4>{title}</h4>
        <form>{setModalField()}</form>
        <div className="d-flex justify-content-end">
          <button className="btn btn-success mx-3 my-3" onClick={handleAdd}>
            Add
          </button>
          <button
            className="btn btn-danger mx-3 my-3"
            onClick={() => onClose()}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
