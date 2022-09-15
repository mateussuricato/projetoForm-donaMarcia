import * as S from "./styles";
import { cargos } from "../../mocks"

interface SelectProps {
  img?: string;
  selected?: string;
}

const Select = ({ img, selected }: SelectProps) => {
  return (
    <S.SelectOverlay>
      <img src={img} alt="" />
      <S.Select>
        <option disabled selected>
          {selected}
        </option>
        {cargos.map((elem) => {
          return <option value={elem.name}>{elem.name}</option>;
        })}
      </S.Select>
    </S.SelectOverlay>
  );
};

export default Select;
