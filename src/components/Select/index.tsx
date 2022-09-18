import * as S from "./styles";
import { cargos } from "../../mocks";

interface SelectProps {
  img?: string;
  selected?: string;
  setSalario?: any;
  selectValue?: any;
  setSelectValue?: any;
  onChange?: any
}

const Select = ({ img, selectValue, setSelectValue, onChange }: SelectProps) => {
  return (
    <S.SelectOverlay>
      <img src={img} alt="" />
      <S.Select
        name="cargo"
        value={selectValue}
        onChangeCapture={onChange}
        onChange={(e) => setSelectValue(e.target.value)}
      >
        <option disabled>
        Selecione o cargo...
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
