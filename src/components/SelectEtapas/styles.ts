import styled from "styled-components";

export const SelectOverlay = styled.div`
  display: flex;
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
`;

export const Select = styled.select`
  width: 150px;
  height: 40px;
  background-color: #fff;
  border: none;
  padding-left: 10px;
  cursor: pointer;
  font-size: 13px;

  option {
  padding: 10px;
  color: black;

}

  :focus {
    box-shadow: 0 0 0 0;
    outline: 0;
  }


`;
