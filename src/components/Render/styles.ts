import styled from "styled-components";

export const RenderContainer = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    background-color: white;
  }

  h3 {
    background-color: white;
  }

  .button {
    margin-top: 5px;
    border-radius: 7px;
    background-color: #970605;
    cursor: pointer;
    display: flex;
  }

  img {
    width: 30px;
    background-color: #970605;
    padding: 5px;
    border-radius: 7px;
  }

  button {
    padding-right: 20px;
    width: 150px;
    height: 50px;
    background-color: #970605;
    cursor: pointer;
    border-radius: 7px;
    border: none;
    color: white;
    font-weight: 500;
    font-family: Roboto;
    font-size: 15px;
    text-transform: uppercase;
  }
`;

export const RenderOverlay = styled.div`
  padding: 4px;
  margin-top: 10px;
  min-width: 587px;
  max-width: 587px;
  min-height: 834px;
  max-height: 834px;
  background-color: white;
  box-shadow: 5px 5px 11px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;
