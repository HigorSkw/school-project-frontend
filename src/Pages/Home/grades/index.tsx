import { Footer } from "../../../components/Footer";
import CompleteHeader from "../../../components/Header";
import { SideMenu } from "../../../components/SideMenu";
import { MainContainer } from "./style";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { RegisterComponent } from "../../../components/CreateGrade";
import { ModalEditClub } from "../../../components/ModalEditClub";
import { ModalDeleteClub } from "../../../components/ModalDeleteClub";
import SectionGrades from "../../../components/SectionGrades";
import { ModalDeleteGrade } from "../../../components/ModalDeleteGrade";
import { ModalEditGrade } from "../../../components/ModalEditGrade";

const HomeGrades = () => {
  const { editGradeModal, deleteGradeModal } = useContext(GlobalContext);

  return (
    <div>
      <CompleteHeader />
      <MainContainer>
        <SideMenu />
        <SectionGrades />
        <RegisterComponent />
        {editGradeModal && <ModalEditGrade />}
        {deleteGradeModal && <ModalDeleteGrade />}
      </MainContainer>
      <Footer />
    </div>
  );
};

export default HomeGrades;
