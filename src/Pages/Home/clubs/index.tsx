import { Footer } from "../../../components/Footer";
import CompleteHeader from "../../../components/Header";
import { SideMenu } from "../../../components/SideMenu";
import { MainContainer } from "./style";
import SectionClubs from "../../../components/Clubs";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { RegisterComponent } from "../../../components/CreateClub";
import { ModalEditClub } from "../../../components/ModalEditClub";
import { ModalDeleteClub } from "../../../components/ModalDeleteClub";

const HomeClubs = () => {
  const { editClubModal, deleteClubModal } = useContext(GlobalContext);

  return (
    <div>
      <CompleteHeader />
      <MainContainer>
        <SideMenu />
        <SectionClubs />
        <RegisterComponent />
        {editClubModal && <ModalEditClub />}
        {deleteClubModal && <ModalDeleteClub />}
      </MainContainer>
      <Footer />
    </div>
  );
};

export default HomeClubs;
