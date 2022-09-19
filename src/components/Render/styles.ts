import styled from "styled-components";

export const RenderContainer = styled.div`

  display: flex;
  flex-direction: column;
  transform: scale(0.7);

  .button {
    margin-top: 5px;
    border-radius: 7px;
    background-color: #E75174;
    cursor: pointer;
    display: flex;
    transition: 0.2s;

    :hover {
      background-color: #67d8f8;
    }

    img {
      width: 40px;
      background-color: transparent;
      padding: 10px;
      border-radius: 7px;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-right: 20px;
      width: 200px;
      height: 70px;
      background-color: transparent;
      cursor: pointer;
      border-radius: 7px;
      border: none;
      color: white;
      font-weight: 500;
      font-family: Roboto;
      font-size: 30px;
      text-transform: uppercase;
    }
  }
`;

export const RenderOverlay = styled.div`
  padding: 4px;
  min-width: 587px;
  max-width: 587px;
  min-height: 842px;
  max-height: 842px;
  background-color: white;
  box-shadow: 5px 5px 11px 5px rgba(0, 0, 0, 0.5);
  cursor: default;
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
