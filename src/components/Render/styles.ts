import styled from "styled-components";

export const RenderContainer = styled.div`
  display: flex;
  flex-direction: column;

  .button {
    margin-top: 5px;
    border-radius: 7px;
    background-color: #970605;
    cursor: pointer;
    display: flex;

    img {
      width: 30px;
      background-color: #970605;
      padding: 5px;
      border-radius: 7px;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
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
  }
`;

export const RenderOverlay = styled.div`
  padding: 4px;
  margin-top: 10px;
  min-width: 587px;
  max-width: 587px;
  min-height: 820px;
  max-height: 820px;
  background-color: white;
  box-shadow: 5px 5px 11px 5px rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

export const Larissa = styled.div`
  padding: 30px 30px 10px 30px;
  display: flex;
  background-color: #e75174;
  gap: 10px;

  h2 {
    text-align: right;
    font-weight: 400;
    background-color: transparent;
  }

  p {
    text-align: left;
    font-family: Roboto;
    font-weight: 500;
    font-size: 30px;
    background-color: transparent;
  }
`;

export const Label = styled.h3`
  padding-bottom: 20px;
  font-weight: 500;
  background-color: transparent;

  b {
    background-color: transparent;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #e75174;
  color: white;
`;

export const Body = styled.div`
  background-color: transparent;
  padding: 20px 20px 0 50px;
`;
export const Paula = styled.span`
  background-color: transparent;
  font-weight: 400;
`;

export const Footer = styled.div`
  display: flex;
  background-color: transparent;

  img {
    margin-top: 50px;
    background-color: transparent;
    width: 150px;
  }
`;
