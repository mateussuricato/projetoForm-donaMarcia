import { useState } from "react";
import * as S from "./styles";

interface InputPros {
  atividades?: string;
  categoryId?: string | number;
  selectValue?: any;
}

const InputCheckbox = ({ atividades, categoryId, selectValue }: InputPros) => {
  if (
    categoryId === "Balconista" &&
    selectValue === "Balconista"
  ) {
    return (
      <S.RadioOverlay>
        <input defaultChecked type="checkbox" />
        <span>{atividades}</span>
      </S.RadioOverlay>
    );
  } else if (
    categoryId === "a6e86fe9-ca7f-40a3-9b95-331e749038f1" &&
    selectValue === "Confeiteiro(a)"
  ) {
    return (
      <S.RadioOverlay>
        <input defaultChecked type="checkbox" />
        <span>{atividades}</span>
      </S.RadioOverlay>
    );
  } else {
    return (
      <div>
        <S.RadioOverlay>
          <input type="checkbox" />
          <span>{atividades}</span>
        </S.RadioOverlay>
      </div>
    );
  }
};

export default InputCheckbox;
