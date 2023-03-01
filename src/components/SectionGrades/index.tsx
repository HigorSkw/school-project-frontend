import { SectionContainer } from "./style";
import { IClub, IGrade } from "../../context/GlobalInterface";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ClubCard } from "../ClubsCards";
import { GradeCard } from "../GradesCards";

const SectionGrades = () => {
  const { grades } = useContext(GlobalContext);

  return (
    <SectionContainer>
      <section className="container-contatos">
        <div className="wrap-contatos">
          <span className="title-customers">Lista de Avaliações</span>

          {grades &&
            grades.map((grade: IGrade) => (
              <GradeCard grade={grade} key={grade.id} />
            ))}
        </div>
      </section>
    </SectionContainer>
  );
};

export default SectionGrades;
