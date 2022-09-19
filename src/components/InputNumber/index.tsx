import { useEffect, useState } from "react";
import { updateExpressionWithTypeArguments } from "typescript";
import * as S from "./styles";

interface InputProps {
  placeholder?: string;
  img?: string;
  salario?: any;
  onChange?: any;
  setSalario: any;
  selectValue?: any;
}

const InputNumber = ({
  selectValue,
  img,
  salario,
  onChange,
  setSalario,
}: InputProps) => {

  return (
    <S.InputContainer>
      {!selectValue ? (
        <S.InputOverlay>
          <img src={img} alt="" />
          <p>R$</p>
          <S.Input
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
