import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerCustomer, NameCustomer, InfoCustomer } from "./styles";

import { ISubject } from "../../context/GlobalInterface";
interface IUserProps {
  subject: ISubject;
}

export const SubjectCard = ({ subject }: IUserProps) => {
  const { setUserEdit, setEditUserModal, setDeleteUserModal } =
    useContext(GlobalContext);

  // const handleClickUpdate = () => {
  //   setUserEdit(user);
  //   setEditUserModal(true);
  // };

  // const handleClickDelete = () => {
  //   setUserEdit(user);
  //   setDeleteUserModal(true);
  // };

  return (
    <ContainerCustomer>
      <NameCustomer>
        <h3>Matéria: {subject.name}</h3>
      </NameCustomer>

      <InfoCustomer>
        <div className="info_customer_text">
          <div>
            <h3>Professor: {subject.teacher?.name}</h3>
            <h3>Email: {subject.teacher?.email}</h3>
          </div>
        </div>
        <div className="info_customer_icons">
          <FaUserEdit onClick={() => console.log("a")} />
          <FaTrashAlt onClick={() => console.log("b")} />
        </div>
      </InfoCustomer>
    </ContainerCustomer>
  );
};
