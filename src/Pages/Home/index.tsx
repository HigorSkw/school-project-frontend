import { Footer } from "../../components/Footer";
import SectionTeachers from "../../components/Teachers";
import CompleteHeader from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { MainContainer } from "./style";
import SectionClubs from "../../components/SectionClubs";
import { ModalEditUser } from "../../components/ModalEditUser";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ModalDeleteUser } from "../../components/ModalDeleteUser";
import { ModalEditClub } from "../../components/ModalEditClub";
import { ModalDeleteClub } from "../../components/ModalDeleteClub";

const Home = () => {
  const { editUserModal, deleteUserModal, editClubModal, deleteClubModal } =
    useContext(GlobalContext);

  return (
    <div>
      <CompleteHeader />
      <MainContainer>
        <SideMenu />
        <SectionTeachers />
        <SectionClubs />
        {editUserModal && <ModalEditUser />}
        {deleteUserModal && <ModalDeleteUser />}
        {editClubModal && <ModalEditClub />}
        {deleteClubModal && <ModalDeleteClub />}
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Home;
