import styled from "styled-components";

export const DivModal = styled.div`
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;

  width: 100vw;
  height: 100vh;
  left: 0;
  top: 0;
  z-index: 1;

  background-color: rgba(0, 0, 0, 0.8);
`;

export const DivInter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 18rem;
  height: 10rem;

  background: #fefefe;
  border: 3px solid var(--purple);
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.25);
  border-radius: 15px;

  .div_text {
    height: 100%;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-around;
    flex-direction: column;

    button {
      align-self: center;
      border: none;
      width: 10rem;
      height: 2rem;

      margin-top: 20px;
      background: #333333;
      border-radius: 100px;

      color: white;
      font-size: 14px;
    }
  }

  h4 {
    color: #000;
  }

  .div_btns {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 15px;

    .btn_confirm {
      width: 40%;
      color: #000;

      :hover {
        background-color: red;
      }
    }
    .btn_cancel {
      width: 40%;
      color: #000;

      :hover {
        background-color: var(--purple);
      }
    }
  }
`;

export const Divheader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 3rem;

  border-radius: 12px 12px 0px 0px;
  background: rgba(0, 0, 0, 0.88);
  border-bottom: solid 6px var(--purple);
  margin-bottom: 1rem;
  h2 {
    font-weight: 400;
    font-size: 20px;
    line-height: 38px;
    color: #ffffff;
  }
  button {
    border: none;
    background: none;
    color: white;
    font-size: 16px;
  }
`;
