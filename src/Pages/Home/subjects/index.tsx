import { Footer } from "../../../components/Footer";
import CompleteHeader from "../../../components/Header";
import { SideMenu } from "../../../components/SideMenu";
import { MainContainer } from "./style";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { RegisterComponent } from "../../../components/CreateSubject";
import SectionSubjects from "../../../components/Subjects";
import { ModalEditSubject } from "../../../components/ModalEditSubject";
import { ModalDeleteSubject } from "../../../components/ModalDeleteSubject";

const HomeSubjects = () => {
  const { editSubjectModal, deleteSubjectModal } = useContext(GlobalContext);

  return (
    <div>
      <CompleteHeader />
      <MainContainer>
        <SideMenu />
        <SectionSubjects />
        <RegisterComponent />
        {editSubjectModal && <ModalEditSubject />}
        {deleteSubjectModal && <ModalDeleteSubject />}
      </MainContainer>
      <Footer />
    </div>
  );
};

export default HomeSubjects;
