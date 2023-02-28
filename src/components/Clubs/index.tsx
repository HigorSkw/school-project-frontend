import { SectionContainer } from "./style";
import { UserCard } from "../UsersCards";
import { IClub, ISubject, IUser } from "../../context/GlobalInterface";
import { useContext, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ClubCard } from "../ClubsCards";

const SectionClubs = () => {
  const { clubs } = useContext(GlobalContext);

  return (
    <SectionContainer>
      <section className="container-contatos">
        <div className="wrap-contatos">
          <span className="title-customers">Lista de Salas</span>

          {clubs &&
            clubs.map((club: IClub) => <ClubCard club={club} key={club.id} />)}
        </div>
      </section>
    </SectionContainer>
  );
};

export default SectionClubs;
