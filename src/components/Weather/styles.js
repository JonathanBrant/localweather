import styled from "styled-components";

export const Li = styled.li`
  list-style: none;
  font-size: 1.5rem;
  line-height: 3rem;
  font-weight: 400;

  @media screen and (max-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const H3 = styled.h3`
  padding: 0;
  margin: 0;
  text-transform: uppercase;
  display: flex;
  text-align: center;

  @media screen and (max-width: 1024px) {
    font-size: 1rem;
  }
`;

export const Div = styled.div`
  width: 45%;
  height: auto;
  background: rgba(50, 191, 217, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -60%);
  border-radius: 0.5rem;

  @media screen and (max-width: 1024px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);

    width: 55%;
  }

  @media screen and (max-width: 830px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 55%;
  }

  @media screen and (max-width: 771px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);

    width: 60%;
  }

  @media screen and (max-width: 476px) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -10%);

    width: 80%;
  }
`;

export const Div2 = styled.div`
  background: red;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 45%;
  margin: auto;
  margin-top: 3rem;
  padding: 2rem 0rem;
  background: rgba(50, 191, 217, 0.2);
  border-radius: 0.5rem;

  @media screen and (max-width: 1024px) {
    width: 55%;
  }

  @media screen and (max-width: 830px) {
    width: 55%;
  }

  @media screen and (max-width: 771px) {
    width: 60%;
  }

  @media screen and (max-width: 476px) {
    width: 80%;  
  }
`;
