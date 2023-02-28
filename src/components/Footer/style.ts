import styled from "styled-components";

export const ContainerFooter = styled.div`
  display: flex;
  height: 8.75rem;

  max-width: 100vw;
  width: 100vw;
  background-color: #0b0d0d;

  .footer-div-main {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 3rem;
    color: #f1f1f1;

    img {
      border-radius: 13px;
      width: 176px;
    }

    p {
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
      width: 30%;
    }
  }

  .footer-div-btn {
    width: 2.5rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #212529;
    border: 1px;
    border-radius: 4px;
    cursor: pointer;

    button {
      background-color: transparent;
      appearance: none;
      border: none;

      svg {
        color: white;
      }
    }
  }
`;
