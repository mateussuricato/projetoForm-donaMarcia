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

const InputCheckbox = ({
  atividades,
  habilidadesState,
  name,
  inputName,
  onChange,
  type,
  setTempoExperiencia,
  desmarcado

}: InputPros) => {
  if (habilidadesState == habilidades) {
    return (
      <S.Aviso>
        Selecione um cargo para as respectivas habilidades aparecerem *
      </S.Aviso>
    );
  } else {
    return (
      <S.RadioOverlay>
        <input
          onChange={(e) => {
            setTempoExperiencia(e.target.value)
          }}
          defaultChecked={desmarcado}
          onChangeCapture={onChange}
          name={inputName}
          value={name}
          type={type}
        />
        <span>{atividades}</span>
      </S.RadioOverlay>
    );
  }
};

export default InputCheckbox;
