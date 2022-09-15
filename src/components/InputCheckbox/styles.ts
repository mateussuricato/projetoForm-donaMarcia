import styled from "styled-components";

export const RadioOverlay = styled.div`
  display: flex;
  height: 50px;
  width: 200px;
  background-color: #fff;
  border: 1px #00000020 solid;
  max-width: 400px;

  input {
    width: 30px;
    height: 30px;
    margin: auto 5px;
    cursor: pointer;
    transition: 0.3s;

    :hover {
      border: 1px solid #ea4f75;
      box-shadow: 0px 0px 5px 1px #ea4f75;
    }
  }

  span {
    background-color: #fafafa;
    text-align: center;
  }
`;
