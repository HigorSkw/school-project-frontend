import { useContext } from "react";

import { DivModal, DivInter, Divheader } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";

export const ModalDeleteUser = () => {
  const { deleteUser, setDeleteUserModal, userEdit } =
    useContext(GlobalContext);

  const handleClick = () => {
    deleteUser();
    setDeleteUserModal(false);
  };

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Deletar Usuario</h2>
          <button
            type="button"
            onClick={() => {
              setDeleteUserModal(false);
            }}
          >
            X
          </button>
        </Divheader>

        <div className="div_text">
          <h4>Deseja deletar este usuário?</h4>

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
              onClick={() => setDeleteUserModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </DivInter>
    </DivModal>
  );
};
