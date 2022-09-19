import { Dispatch, SetStateAction } from "react";
import * as S from "./styles";

interface InputProps {
  img: string;
  salario: string;
  setSalario: Dispatch<SetStateAction<string>>;
  selectValue: string | undefined;
}

const InputNumber = ({
  selectValue,
  img,
  salario,
  setSalario,
}: InputProps) => {

  const numero = 5

  return (
    <S.InputContainer>
      {!selectValue ? (
        <S.InputOverlay>
          <img src={img} alt="" />
          <p>R$</p>
          <S.Input
          maxLength={numero}
            id="salario"
            onChange={(e) => setSalario(e.target.value)}
            name="salariodocargo"
            type="number"
            placeholder="Selecione um cargo para o salario ser sugerido..."
          ></S.Input>
        </S.InputOverlay>
      ) : (
        <S.InputOverlay active>
          <img src={img} alt="" />
          <p>R$</p>
          <S.Input
            maxLength={numero}
            id="salario"
            active
            onChange={(e) => setSalario(e.target.value)}
            name="salariodocargo"
            type="number"
            placeholder={salario}
          ></S.Input>
        </S.InputOverlay>
      )}
    </S.InputContainer>
  );
};

export default InputNumber;
