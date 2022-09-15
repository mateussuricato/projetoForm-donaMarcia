import * as S from "./styles";
import { option } from "../ModalForm"

interface SelectProps {
  img?: string;
  selected?: string;
  optiontest?: string
}

const Select = ({ img, selected, optiontest }: SelectProps) => {
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
