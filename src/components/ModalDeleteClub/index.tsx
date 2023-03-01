import { useContext } from "react";

import { DivModal, DivInter, Divheader } from "./styles";
import { GlobalContext } from "../../context/GlobalContext";

export const ModalDeleteClub = () => {
  const { deleteClub, setDeleteClubModal } = useContext(GlobalContext);

  const handleClick = () => {
    deleteClub();
    setDeleteClubModal(false);
  };

  return (
    <DivModal>
      <DivInter>
        <Divheader>
          <h2>Deletar Classe</h2>
          <button
            type="button"
            onClick={() => {
              setDeleteClubModal(false);
            }}
          >
            X
          </button>
        </Divheader>

        <div className="div_text">
          <h4>Deseja deletar esta Classe?</h4>

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
              onClick={() => setDeleteClubModal(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      </DivInter>
    </DivModal>
  );
};
