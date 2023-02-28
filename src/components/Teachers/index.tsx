import { SectionContainer } from "./style";
import { UserCard } from "../UsersCards";
import { IUser } from "../../context/GlobalInterface";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const SectionTeachers = () => {
  const { teachers } = useContext(GlobalContext);

  return (
    <SectionContainer>
      <section className="container-contatos">
        <div className="wrap-contatos">
          <span className="title-customers">Lista de Professores</span>

          {teachers &&
            teachers.map((user: IUser) => (
              <UserCard user={user} key={user.id} />
            ))}
        </div>
      </section>
    </SectionContainer>
  );
};

export default SectionTeachers;
