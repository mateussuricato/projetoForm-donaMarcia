import { useState } from "react";
import * as S from "./styles";

interface InputPros {
  atividades?: string;
  category?: string[] | string;
  selectValue?: any;
  desmarcado?: any
}

const InputCheckbox = ({ atividades, category, selectValue, desmarcado }: InputPros) => {
  if (
    category === "bad47155-b140-40b3-ad7b-2207019dced8" &&
    selectValue === "Auxiliar de limpeza"
  ) {
    return (
      <S.RadioOverlay>
        <input defaultChecked type="checkbox" />
        <span>{atividades}</span>
      </S.RadioOverlay>
    );
  } else if (
    category === "30120997-36cc-496a-9237-72c467e99924" &&
    selectValue === "Confeiteiro(a)"
  ) {
    return (
      <S.RadioOverlay>
        <input defaultChecked type="checkbox" />
        <span>{atividades}</span>
      </S.RadioOverlay>
    );
  } else if (
    category === "833b81f0-bf9b-44ac-b4ac-de4a99958b0c" &&
    selectValue === "Gerente"
  ) {
    return (
      <S.RadioOverlay>
        <input defaultChecked type="checkbox" />
        <span>{atividades}</span>
      </S.RadioOverlay>
    );
  } else if (
    category === "1b9201d9-9ec9-4c81-8d19-987abc67ecc6" &&
    selectValue === "Nutricionista"
  ) {
    return (
      <S.RadioOverlay>
        <input defaultChecked type="checkbox" />
        <span>{atividades}</span>
      </S.RadioOverlay>
    );
  } else if (
    selectValue === "Recepcionista" &&
    category === "494ea8c2-743d-43d4-ab60-159bd93cb80e"
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
          {desmarcado ? <input defaultChecked type="checkbox" /> :<input type="checkbox" />}
          <span>{atividades}</span>
        </S.RadioOverlay>
      </div>
    );
  }
};

export default InputCheckbox;
