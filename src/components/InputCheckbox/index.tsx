import * as S from "./styles";

interface InputPros {
  atividades?: string
}

const InputCheckbox = ({atividades}: InputPros) => {
  return (
    <S.RadioOverlay>
      <input type="checkbox" /><span>{atividades}</span>
    </S.RadioOverlay>
  );
};

export default InputCheckbox;
