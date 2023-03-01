import { SectionContainer, SectionNull } from "./style";
import { UserCard } from "../UsersCards";
import { ISubject, IUser } from "../../context/GlobalInterface";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { SubjectCard } from "../SubjectCard";

const SectionSubjects = () => {
  const { subjects } = useContext(GlobalContext);

  return (
    <SectionContainer>
      <section className="container-contatos">
        <div className="wrap-contatos">
          <span className="title-customers">Lista de Matérias</span>

          {subjects ? (
            subjects.map((subject: ISubject) => (
              <SubjectCard subject={subject} key={subject.id} />
            ))
          ) : (
            <SectionNull>
              <div>
                <h2>Não há matérias cadastrados!</h2>
              </div>
            </SectionNull>
          )}
        </div>
      </section>
    </SectionContainer>
  );
};

export default SectionSubjects;
