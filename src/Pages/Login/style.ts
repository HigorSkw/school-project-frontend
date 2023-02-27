import styled from "styled-components";

export const ContainerLogin = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  background-color: var(--purple);
  overflow: hidden;

  .box {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 90%;
    border-radius: 5px;
    background: #fff4dba3;
  }

  .container_form {
    width: 50%;
    background-color: var(--purple);
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 3px solid #fff4dba3;
    box-shadow: -18px 20px 12px rgb(0 0 0 / 25%);
  }

  form {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: stretch;
    height: 85%;
  }

  h2 {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
  }

  label {
    font-size: 1.1rem;
  }

  input {
    width: 260px;
    height: 35px;
    border-radius: 10px;
    outline: none;
    border: none;
    font-size: 1rem;
    padding-left: 15px;
  }

  button {
    margin-top: 10px;
    background: #333333;
    border-radius: 100px;
    height: 41px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    border: none;
  }

  .register {
    display: flex;
    flex-direction: row;
    height: 10px;
    justify-content: center;
    align-items: center;

    a {
      text-decoration: none;
      margin-left: 5px;
    }
  }

  .container_image {
    width: 50%;
    background-color: var(--purple);
    height: 450px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 3px solid #fff4dba3;
    box-shadow: 20px -8px 12px rgb(0 0 0 / 25%);

    img {
      width: 300px;
    }
  }
`;
