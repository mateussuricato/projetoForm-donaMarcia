import * as S from "./styles";
import cargo from "../../assets/images/cargo.png";

const Select = () => {
  return (
    <S.SelectOverlay>
      <img src={cargo} alt="" />
      <S.Select>
        <option disabled selected>
          Cargo...
        </option>
      </S.Select>
    </S.SelectOverlay>
  );
};

export default Select;
