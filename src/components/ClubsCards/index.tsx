import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerCustomer, NameCustomer, InfoCustomer } from "./styles";

import { IClub, ISubject } from "../../context/GlobalInterface";
interface IClubProps {
  club: IClub;
}

export const ClubCard = ({ club }: IClubProps) => {
  console.log(club.subjects);
  const { subjects } = useContext(GlobalContext);

  const filterSubjects = (data: IClub) => {
    let subjectsArr: ISubject[] = [];

    data.subjects.forEach((elem) => {
      subjects?.forEach((sub) => {
        if (sub.id === elem) {
          subjectsArr.push(sub);
        }
      });
    });

    return subjectsArr; // Adicionando o retorno da função
  };

  const findShift = (data: IClub) => {
    if (data.shift === "morning") {
      return "Manhã";
    } else if (data.shift === "afternoon") {
      return "Tarde";
    } else {
      return "Noite";
    }
  };

  const subjectsFind = filterSubjects(club);
  const shiftFind = findShift(club);

  return (
    <ContainerCustomer>
      <NameCustomer>
        <h3>Nome da turma: {club.name}</h3>
      </NameCustomer>

      <InfoCustomer>
        <div className="info_customer_text">
          <div>
            <h3>Turno: {shiftFind}</h3>
          </div>
          <div>
            <h3> Matérias:</h3>
            {subjectsFind?.map((elem) => (
              <li>{elem.name}</li>
            ))}
          </div>
        </div>
        <div className="info_customer_icons">
          <FaUserEdit onClick={() => console.log()} />
          <FaTrashAlt onClick={() => console.log()} />
        </div>
      </InfoCustomer>
    </ContainerCustomer>
  );
};
