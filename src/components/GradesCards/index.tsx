import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerCustomer, NameCustomer, InfoCustomer } from "./styles";

import { IGrade, ISubject, IClub } from "../../context/GlobalInterface";
interface IGradeProps {
  grade: IGrade;
}

export const GradeCard = ({ grade }: IGradeProps) => {
  const { setDeleteGradeModal, setGrade, setEditGradeModal } =
    useContext(GlobalContext);

  const findShift = (data: IClub) => {
    if (data.shift === "morning") {
      return "Manhã";
    } else if (data.shift === "afternoon") {
      return "Tarde";
    } else {
      return "Noite";
    }
  };

  const handleClickEdit = (grade: IGrade) => {
    setGrade(grade);
    setEditGradeModal(true);
  };

  const handleClickDelete = (grade: IGrade) => {
    setGrade(grade);
    setDeleteGradeModal(true);
  };

  return (
    <ContainerCustomer>
      <NameCustomer>
        <h3>Nome do aluno(a): {grade.student.name}</h3>
      </NameCustomer>

      <InfoCustomer>
        <div className="info_customer_text">
          <div>
            <h3>
              Matéria: {grade.subject.name} | Professor:{" "}
              {grade.subject.teacher?.name}
            </h3>
          </div>
          <div>
            <h3> Nota: {grade.note}</h3>
          </div>
        </div>
        <div className="info_customer_icons">
          <FaUserEdit onClick={() => handleClickEdit(grade)} />
          <FaTrashAlt onClick={() => handleClickDelete(grade)} />
        </div>
      </InfoCustomer>
    </ContainerCustomer>
  );
};
