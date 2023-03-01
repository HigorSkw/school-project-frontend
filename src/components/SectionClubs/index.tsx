import { SectionContainer, SectionNull } from "./style";
import { IClub } from "../../context/GlobalInterface";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { ClubCard } from "../ClubsCards";

const SectionClubs = () => {
  const { clubs } = useContext(GlobalContext);

  return (
    <SectionContainer>
      <section className="container-contatos">
        <div className="wrap-contatos">
          <span className="title-customers">Lista de Salas</span>

          {clubs ? (
            clubs.map((club: IClub) => <ClubCard club={club} key={club.id} />)
          ) : (
            <SectionNull>
              <div>
                <h2>Não há salas cadastradas!</h2>
              </div>
            </SectionNull>
          )}
        </div>
      </section>
    </SectionContainer>
  );
};

export default SectionClubs;
