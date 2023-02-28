import { FaHome, FaUserGraduate, FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { TbNotes, TbLogout } from "react-icons/tb";
import { BsNewspaper } from "react-icons/bs";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { MenuSide } from "./style";
import { GlobalContext } from "../../context/GlobalContext";

export const SideMenu = () => {
  const { logoutUser, setActiveIndex, activeIndex } = useContext(GlobalContext);

  function handleClick(
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) {
    setActiveIndex(index);
  }

  return (
    <MenuSide>
      <ul>
        <li
          className={`list ${activeIndex === 0 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 0)}
        >
          <Link to="/home">
            <span className="icon">
              <FaHome />
            </span>
            <span className="title">Home</span>
          </Link>
        </li>
        <li
          className={`list ${activeIndex === 1 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 1)}
        >
          <Link to="/home/teachers">
            <span className="icon">
              <GiTeacher />
            </span>
            <span className="title">Professores</span>
          </Link>
        </li>
        <li
          className={`list ${activeIndex === 2 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 2)}
        >
          {" "}
          <Link to="/home/students">
            <span className="icon">
              <FaUserGraduate />
            </span>
            <span className="title">Alunos</span>
          </Link>
        </li>
        <li
          className={`list ${activeIndex === 3 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 3)}
        >
          <Link to="/home/clubs">
            <span className="icon">
              <FaUsers />
            </span>
            <span className="title">Salas</span>
          </Link>
        </li>
        <li
          className={`list ${activeIndex === 4 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 4)}
        >
          <Link to="/home/grades">
            <span className="icon">
              <TbNotes />
            </span>
            <span className="title">Avaliações</span>
          </Link>
        </li>
        <li
          className={`list ${activeIndex === 5 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 5)}
        >
          {" "}
          <Link to="/home/subjects">
            <span className="icon">
              <BsNewspaper />
            </span>
            <span className="title">Matérias</span>
          </Link>
        </li>
        <li
          className={`list ${activeIndex === 6 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 6)}
        >
          <a onClick={() => logoutUser()}>
            <span className="icon">
              <TbLogout />
            </span>
            <span className="title">Logout</span>
          </a>
        </li>
      </ul>
    </MenuSide>
  );
};
