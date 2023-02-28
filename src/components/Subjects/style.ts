import styled from "styled-components";

export const SectionContainer = styled.section`
  width: 35%;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 0.5rem;

  overflow: hidden;
  padding-bottom: 30px;

  .title-customers {
    display: block;
    font-size: 30px;
    color: azure;

    line-height: 1.2;
    text-align: center;
  }

  .container-contatos {
    width: 100%;
    min-height: 70vh;

    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
  }

  .wrap-contatos {
    width: 35rem;

    display: flex;
    overflow: hidden;
    flex-direction: column;
    align-items: center;

    background-color: var(--gray);
    border-radius: 15px;
    padding: 20px 15px;
    box-shadow: 6px 9px 10px black;
    gap: 1rem;
  }
`;
