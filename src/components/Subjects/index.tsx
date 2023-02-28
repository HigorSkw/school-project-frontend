import { SectionContainer } from "./style";
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

          {subjects &&
            subjects.map((subject: ISubject) => (
              <SubjectCard subject={subject} key={subject.id} />
            ))}
        </div>
      </section>
    </SectionContainer>
  );
};

export default SectionSubjects;
