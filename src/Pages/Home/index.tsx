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

const Home = () => {
  const { editUserModal, deleteUserModal } = useContext(GlobalContext);

  return (
    <div>
      <CompleteHeader />
      <MainContainer>
        <SideMenu />
        <SectionTeachers />
        <SectionClubs />
        {editUserModal && <ModalEditUser />}
        {deleteUserModal && <ModalDeleteUser />}
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Home;
