import styled from "styled-components";

export const SelectOverlay = styled.div`
  display: flex;
  padding: 5px 10px;
  background-color: #6fd9e0;

  img {
    width: 30px;
    background-color: #6fd9e0;
  }
`;

export const Select = styled.select`
  width: 270px;
  height: 40px;
  background-color: #6fd9e0;
  border: none;
  padding-left: 10px;
  cursor: pointer;

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }
`;
