import styled, { css } from "styled-components";

interface ScrollProps {
  activescroll?: boolean
}

export const FormOverlay = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 2000px;
  background-color: #fafafa;
  border-radius: 10px;

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
  gap: 30px;
  padding: 40px;
  margin: 0;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fafafa;
  gap: 30px;
  padding: 10px 50px;
  height: 350px;
  margin: 0;

  ${({activescroll}: ScrollProps) =>
    activescroll &&
    css`
      overflow-y: scroll;
      min-height: 350px;
    `}

    h3 {
      background-color: #fafafa;
    }

    .experienciacontainer {
      display: flex;
      flex-wrap: wrap;
      max-width: 800px;
      gap: 30px;
      background-color: #fafafa;
    }
`;

export const Titulo = styled.h1`
  max-width: 920px;
  background-color: #fafafa;
  margin: 0;
  text-align: center;
  padding: 40px 40px 40px 40px;
`;
