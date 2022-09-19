import * as S from "./styles";
import { habilidades } from "../../mocks";

interface InputPros {
  atividades?: string;
  selectValue: string | undefined;
  desmarcado?: boolean;
  atividadeState?: object;
  name: string | undefined;
  inputName: string;
  onChange?: any;
  type: string;
  setTempoExperiencia?: any;
}

const InputCheckbox = ({
  atividadeState,
  atividades,
  name,
  inputName,
  onChange,
  type,
  setTempoExperiencia,
  desmarcado,
}: InputPros) => {
  if (atividadeState == habilidades) {
    return (
      <S.Aviso>
        Selecione um cargo para as respectivas atividades aparecerem *
      </S.Aviso>
    );
  } else {
    return (
      <S.RadioOverlay>
        <input
          onChange={(e) => {
            setTempoExperiencia(e.target.value);
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
