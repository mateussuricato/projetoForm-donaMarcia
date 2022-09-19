import styled from "styled-components";



export const RadioOverlay = styled.div`
  display: flex;
  height: 40px;
  width: 130px;
  background-color: #fff;
  border: 1px #00000020 solid;

  input {
    min-width: 15px;
    min-height: 15px;
    margin: auto 5px;
    cursor: pointer;
    transition: 0.3s;
  }

  span {
    font-size: 12px;
    background-color: #fff;
    text-align: center;
  }
`;

export const Aviso = styled.p`
  background-color: #fafafa;
  color: red;
`