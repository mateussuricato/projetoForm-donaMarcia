import { useState } from "react";
import * as S from "./styles";
import { habilidades } from "../../mocks";

interface InputPros {
  atividades: string;
  name: string | undefined;
  inputName: string;
  setGrauAcademico: any;
}

const InputRadio = ({
  atividades,
  name,
  inputName,
  setGrauAcademico

}: InputPros) => {

    return (
      <S.RadioOverlay>
        <input
          onChange={(e) => {
            setGrauAcademico(e.target.value)
          }}
          name={inputName}
          value={name}
          type="radio"
        />
        <span>{atividades}</span>
      </S.RadioOverlay>
    );
  }

export default InputRadio;
