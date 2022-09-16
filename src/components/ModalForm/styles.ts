import styled from "styled-components";

export const FormOverlay = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1500px;
  background-color: #fafafa;
  border-radius: 10px;

  .logo {
    width: 200px;
    background-color: #fafafa;
    padding: 30px 0 0 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fafafa;
  gap: 30px;
  padding: 40px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: #fafafa;
  gap: 30px;
  padding: 10px 50px;
`;

export const Titulo = styled.h1`
  max-width: 920px;
  background-color: #fafafa;
  margin: auto;
  text-align: center;
  padding: 40px 40px 40px 40px;
`