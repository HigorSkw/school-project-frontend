import { FaHome, FaUserGraduate, FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { TbNotes, TbLogout } from "react-icons/tb";
import { BsNewspaper } from "react-icons/bs";
import { useContext, useState } from "react";

import { MenuSide } from "./style";
import { GlobalContext } from "../../context/GlobalContext";

export const SideMenu = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { logoutUser } = useContext(GlobalContext);

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
          <a href="#">
            <span className="icon">
              <FaHome />
            </span>
            <span className="title">Home</span>
          </a>
        </li>
        <li
          className={`list ${activeIndex === 1 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 1)}
        >
          <a href="#teachers">
            <span className="icon">
              <GiTeacher />
            </span>
            <span className="title">Teachers</span>
          </a>
        </li>
        <li
          className={`list ${activeIndex === 2 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 2)}
        >
          {" "}
          <a href="#students">
            <span className="icon">
              <FaUserGraduate />
            </span>
            <span className="title">Students</span>
          </a>
        </li>
        <li
          className={`list ${activeIndex === 3 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 3)}
        >
          <a href="#clubs">
            <span className="icon">
              <FaUsers />
            </span>
            <span className="title">Clubs</span>
          </a>
        </li>
        <li
          className={`list ${activeIndex === 4 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 4)}
        >
          <a href="#grades">
            <span className="icon">
              <TbNotes />
            </span>
            <span className="title">Grades</span>
          </a>
        </li>
        <li
          className={`list ${activeIndex === 5 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 5)}
        >
          {" "}
          <a href="#subjects">
            <span className="icon">
              <BsNewspaper />
            </span>
            <span className="title">Subjects</span>
          </a>
        </li>
        <li
          className={`list ${activeIndex === 6 ? "active" : ""}`}
          onClick={(event) => handleClick(event, 6)}
        >
          <a href="#" onClick={() => logoutUser()}>
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
