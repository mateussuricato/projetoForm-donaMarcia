import { useState } from "react";
import * as S from "./styles";

interface InputPros {
  atividades?: string;
  category?: string | number;
  selectValue?: any;
}

const InputCheckbox = ({ atividades, category, selectValue }: InputPros) => {
  if (
    category === "Balconista" &&
    selectValue === "Balconista"
  ) {
    return (
      <S.RadioOverlay>
        <input defaultChecked type="checkbox" />
        <span>{atividades}</span>
      </S.RadioOverlay>
    );
  } else if (
    category === "a6e86fe9-ca7f-40a3-9b95-331e749038f1" &&
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
