import styled, { css } from "styled-components";

interface ScrollProps {
  activescroll?: boolean;
}

export const FormOverlay = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  max-height: 80vh;
  background-color: #fafafa;
  border-radius: 10px;
  overflow-y: scroll;

  .logo {
    width: 200px;
    background-color: #fafafa;
    padding: 30px 0 0 0;
    margin: 0 auto;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fafafa;
  padding: 20px;
  margin: 0;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fafafa;
  gap: 5px;
  padding: 10px 50px;
  margin: 0;

  ${({ activescroll }: ScrollProps) =>
    activescroll &&
    css`
      overflow-y: scroll;
      max-height: 350px;
    `}

  .experienciacontainer {
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    gap: 10px;
    background-color: #fafafa;
  }

  p {
    margin: 0 auto;
  }
`;

export const Titulo = styled.h2`
  max-width: 920px;
  background-color: #fafafa;
  margin: 0;
  text-align: center;
  padding: 10px;
`;

export const Paragrafo = styled.p`
  max-width: 920px;
  background-color: #fafafa;
  margin: 0;
  text-align: center;
  padding: 20px;
`;

export const ExperienciaContainer = styled.div`
  display: block;

  h4 {
    text-align: center;
    background-color: #fafafa;
  }
`;
