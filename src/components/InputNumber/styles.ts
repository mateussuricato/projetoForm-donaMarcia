import styled, { css } from "styled-components";
import InputMask from 'react-input-mask'

interface InputProps {
  active?: boolean;

}


export const InputContainer = styled.div`
  background-color: #fafafa;
`

export const InputOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  background-color: #fff;
  border: 1px #00000020 solid;
  transition: 0.3s;
  border-radius: 17px;
  max-width: 500px;
  gap: 3px;
  margin-bottom: 5px;
  transition: 0.5s;

  ${({ active }: InputProps) =>
    active &&
    css`
      max-width: 230px;
    `}

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
  width: 350px;
  height: 40px;
  background-color: #fff;
  border: none;
  padding-left: 10px;
  cursor: text;
  font-size: 16px;
  transition: 0.5s;

  ${({ active }: InputProps) =>
    active &&
    css`
      width: 150px;
    `}

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
