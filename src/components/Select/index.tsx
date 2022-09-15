import * as S from "./styles";
import { option } from "../ModalForm"

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
        {option.map((elem) => {
          return <option value={elem.name}>{elem.name}</option>;
        })}
      </S.Select>
    </S.SelectOverlay>
  );
};

export default Select;
