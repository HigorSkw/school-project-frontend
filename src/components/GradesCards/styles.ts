import styled from "styled-components";

export const ContainerCustomer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 0.4rem;

  min-width: 100%;

  border: 2px solid var(--dark-purple);
  border-radius: 0.8rem;

  box-shadow: 0 3px 5px #00000080;

  overflow: hidden;
`;

export const NameCustomer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  box-shadow: 0 2px 3px #00000080;

  @media (max-width: 500px) {
    font-size: 0.75rem;
  }
`;

export const InfoCustomer = styled.div`
  width: 100%;
  height: 100px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  font-size: 0.7rem;

  color: var(--blue-grey);

  div {
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .info_customer_text {
    width: 85%;
    margin-left: 10px;
    gap: 10px;
  }

  .info_customer_icons {
    width: 10%;
  }

  svg {
    font-size: 1rem;

    cursor: pointer;

    transition: 0.8s;

    :hover {
      color: var(--blue-dark);
      transition: 0.8s;
    }
  }

  @media (max-width: 500px) {
    font-size: 0.7rem;
  }
`;
