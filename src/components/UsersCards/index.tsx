import { FaUserEdit, FaTrashAlt } from "react-icons/fa";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ContainerCustomer, NameCustomer, InfoCustomer } from "./styles";

import { IUser } from "../../context/GlobalInterface";
interface IUserProps {
  user: IUser;
}

export const UserCard = ({ user }: IUserProps) => {
  // const { setCustomer, setDelCustomerModal, setEditCustomerModal } =
  //   useContext(GlobalContext);

  // const handleClickDel = () => {
  //   setCustomer(customer);
  //   setDelCustomerModal(true);
  // };

  // const handleClickUpdate = () => {
  //   setCustomer(customer);
  //   setEditCustomerModal(true);
  // };

  return (
    <ContainerCustomer>
      <NameCustomer>
        <h3>Nome: {user.name}</h3>
      </NameCustomer>

      <InfoCustomer>
        <div className="info_customer_text">
          <div>
            <h3>Email: {user.email}</h3>
          </div>
          <div>
            <h3>Tipo de Conta: {user.type_account}</h3>
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
