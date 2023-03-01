import { SectionContainer, SectionNull } from "./style";
import { IGrade } from "../../context/GlobalInterface";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { GradeCard } from "../GradesCards";

const SectionGrades = () => {
  const { grades } = useContext(GlobalContext);

  return (
    <SectionContainer>
      <section className="container-contatos">
        <div className="wrap-contatos">
          <span className="title-customers">Lista de Avaliações</span>

          {grades ? (
            grades.map((grade: IGrade) => (
              <GradeCard grade={grade} key={grade.id} />
            ))
          ) : (
            <SectionNull>
              <div>
                <h2>Não há avaliações cadastradas!</h2>
              </div>
            </SectionNull>
          )}
        </div>
      </section>
    </SectionContainer>
  );
};

export default SectionGrades;
