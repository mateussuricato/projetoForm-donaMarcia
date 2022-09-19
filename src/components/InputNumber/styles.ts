import styled from "styled-components";

export const InputOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px #00000020 solid;
  transition: 0.3s;
  border-radius: 17px;
  max-width: 230px;
  :hover {
    border: 1px solid #ea4f75;
    box-shadow: 0px 0px 5px 1px #ea4f75;
  }

  img {
    width: 30px;
    background-color: #fff;
  }

  p {
    background-color: white;
    width: 20px;
    font-size: 18px;
  }
`;

export const Input = styled.input`
  width: 130px;
  height: 40px;
  background-color: #fff;
  border: none;
  padding-left: 10px;
  cursor: text;
  font-size: 16px;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
