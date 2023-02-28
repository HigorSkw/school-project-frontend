import styled from "styled-components";

export const MenuSide = styled.div`
  position: relative;
  height: 100vh;
  background: #424242;
  width: 20%;
  box-shadow: 10px 0 0 #3c4172;
  border-left: 10px solid #424242;
  overflow-x: hidden;
  transition: 0.5s;

  ul {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 5px;
    padding-top: 40px;

    li {
      position: relative;
      list-style: none;
      width: 100%;
      border-top-left-radius: 20px;
      border-bottom-left-radius: 20px;

      a {
        position: relative;
        display: flex;
        width: 100%;
        text-decoration: none;
        color: #f1f1f1;

        .icon {
          position: relative;
          display: block;
          min-width: 60px;
          height: 60px;
          text-align: center;
          line-height: 70px;

          svg {
            position: relative;
            font-size: 1.5rem;
            z-index: 1;
          }
        }

        .title {
          position: relative;
          display: block;
          padding-left: 10px;
          height: 60px;
          line-height: 60px;
          white-space: nowrap;
        }
      }
    }

    .active {
      background: #3c4172;
    }
  }
`;
