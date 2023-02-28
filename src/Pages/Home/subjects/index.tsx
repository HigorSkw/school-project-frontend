import { Footer } from "../../../components/Footer";
import SectionTeachers from "../../../components/Teachers";
import CompleteHeader from "../../../components/Header";
import { SideMenu } from "../../../components/SideMenu";
import { MainContainer } from "./style";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { ModalEditUser } from "../../../components/ModalEditUser";
import { ModalDeleteUser } from "../../../components/ModalDeleteUser";
import { RegisterComponent } from "../../../components/CreateSubject";
import SectionSubjects from "../../../components/Subjects";

const HomeSubjects = () => {
  const { editUserModal, deleteUserModal } = useContext(GlobalContext);

  return (
    <div>
      <CompleteHeader />
      <MainContainer>
        <SideMenu />
        <SectionSubjects />
        <RegisterComponent />
        {editUserModal && <ModalEditUser />}
        {deleteUserModal && <ModalDeleteUser />}
      </MainContainer>
      <Footer />
    </div>
  );
};

export default HomeSubjects;
