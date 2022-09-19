import * as S from "./styles";
import { etapas } from "../../mocks";

interface SelectProps {
  img: string;
  setSelectEtapas: any;
}

const Select = ({ img, setSelectEtapas }: SelectProps) => {
  return (
    <S.SelectOverlay>
      <img src={img} alt="" />
      <S.Select name="etapas" onChange={(e) => setSelectEtapas(e.target.value)}>
        <option selected disabled>
          Selecione a(s) etapa(s)...
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
