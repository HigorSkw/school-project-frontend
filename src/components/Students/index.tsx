import { SectionContainer } from "./style";
import { UserCard } from "../UsersCards";
import { IUser } from "../../context/GlobalInterface";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const SectionStudents = () => {
  const { students } = useContext(GlobalContext);

  return (
    <SectionContainer>
      <section className="container-contatos">
        <div className="wrap-contatos">
          <span className="title-customers">Lista de Alunos</span>

          {students &&
            students.map((user: IUser) => (
              <UserCard user={user} key={user.id} />
            ))}
        </div>
      </section>
    </SectionContainer>
  );
};

export default SectionStudents;
