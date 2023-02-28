import { Footer } from "../../components/Footer";
import SectionTeachers from "../../components/Teachers";
import CompleteHeader from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { MainContainer } from "./style";
import SectionClubs from "../../components/Clubs";

const Home = () => {
  return (
    <div>
      <CompleteHeader />
      <MainContainer>
        <SideMenu />
        <SectionTeachers />
        <SectionClubs />
      </MainContainer>
      <Footer />
    </div>
  );
};

export default Home;
