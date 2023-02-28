import { useContext, useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { Header, DivLogo } from "./style";
import logo from "../../assets/logo.png";
import { GlobalContext } from "../../context/GlobalContext";
import foto from "../../assets/userImg.png";

const CompleteHeader = () => {
  // const { user, setEditUserModal, editUserModal } = useContext(GlobalContext);
  const token = localStorage.getItem("@school-token") || "";

  return (
    <Header>
      <DivLogo>
        <div className="divLogo">
          <img src={logo} alt="Logo" />
          <h1>School Skowronski</h1>
        </div>
        <div className="divOptions">
          <div className="menu-container">
            <img src={foto} alt="logo" />
          </div>
        </div>
      </DivLogo>
    </Header>
  );
};
export default CompleteHeader;
