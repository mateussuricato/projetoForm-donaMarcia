import { useState } from "react";
import * as S from "./styles";
import { habilidades } from "../../mocks";

interface InputPros {
  atividades?: string;
  category?: string | any;
  selectValue?: any;
  desmarcado?: any;
  habilidadesState?: any;
  name?: string | undefined;
  inputName?: string;
  onChange?: any;
  verificar?: any;
  type?: any;
  setTempoExperiencia?: any;
  setGrauAcademico?: any;
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
