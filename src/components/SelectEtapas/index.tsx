import * as S from "./styles";
import { etapas } from "../../mocks";

interface SelectProps {
  img?: string;
  selected?: string;
  setSalario?: any;
  selectValue?: any;
  setSelectValue?: any;
}

const Select = ({ img, selectValue, setSelectValue }: SelectProps) => {
  return (
    <S.SelectOverlay>
      <img src={img} alt="" />
      <S.Select
        name="etapas"
        value={selectValue}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option selected disabled>
          Etapas do processo
        </option>
        {etapas.map((elem) => {
          return (
            <option key={elem.id} value={elem.name}>
              {elem.name}
            </option>
          );
        })}
      </S.Select>
    </S.SelectOverlay>
  );
};

export default Select;
