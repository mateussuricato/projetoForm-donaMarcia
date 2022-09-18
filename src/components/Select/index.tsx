import * as S from "./styles";
import { cargos } from "../../mocks";

interface SelectProps {
  img?: string;
  selected?: string;
  setSalario?: any;
  selectValue?: any;
  setSelectValue?: any;
}

const Select = ({ img, selectValue, setSelectValue, }: SelectProps) => {
  return (
    <S.SelectOverlay>
      <img src={img} alt="" />
      <S.Select value={selectValue} onChange={e => setSelectValue(e.target.value)}>
        <option value="" selected disabled>
          {selectValue}
        </option>
        {cargos.map((elem: any) => {
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
