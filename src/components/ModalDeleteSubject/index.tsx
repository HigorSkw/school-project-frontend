import { useContext } from "react";

import { DivModal, DivInter, Divheader } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";

export const ModalDeleteSubject = () => {
  const { deleteSubject, setDeleteSubjectModal, subject } =
    useContext(GlobalContext);

  const handleClick = () => {
    deleteSubject();
    setDeleteSubjectModal(false);
  };

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Deletar Matéria</h2>
          <button
            type="button"
            onClick={() => {
              setDeleteSubjectModal(false);
            }}
          >
            X
          </button>
        </Divheader>

        <div className="div_text">
          <h4>Deseja deletar esta matéria?</h4>

          <div className="div_btns">
            <button
              className="btn_confirm"
              type="button"
              onClick={() => handleClick()}
            >
              Deleter
            </button>
            <button
              className="btn_cancel"
              onClick={() => setDeleteSubjectModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </DivInter>
    </DivModal>
  );
};
