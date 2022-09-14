import InputRadio from "../InputRadio";
import Select from "../Select";
import * as S from "./styles";

const ModalForm = () => {
  return (
    <div>
      <S.FormOverlay>
        <S.InputContainer>
          <Select
            selected={"Cargo..."}
            img={"https://i.imgur.com/LNAjnQH.png"}
          ></Select>
          <Select selected={"Salário..."}></Select>
          <Select selected={"Atividades que o cargo exerce"}></Select>
          <Select></Select>
          <Select selected={"Habilidades necessárias"}></Select>
          <Select></Select>
        </S.InputContainer>
        <S.RadioContainer>
          <InputRadio></InputRadio>
          <InputRadio></InputRadio>
          <InputRadio></InputRadio>
          <InputRadio></InputRadio>
          <InputRadio></InputRadio>
          <InputRadio></InputRadio>
          <InputRadio></InputRadio>
          <InputRadio></InputRadio>
          <InputRadio></InputRadio>
          <InputRadio></InputRadio>
          <InputRadio></InputRadio>
          <InputRadio></InputRadio>
        </S.RadioContainer>
      </S.FormOverlay>
    </div>
  );
};

export default ModalForm;
