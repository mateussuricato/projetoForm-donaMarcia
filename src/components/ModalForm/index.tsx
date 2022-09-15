import InputRadio from "../InputRadio";
import InputText from "../InputText";
import Select from "../Select";
import * as S from "./styles";

export const option = [
  {
    id: "e7e77543-2515-4a5c-99f6-c8495ac45f0d",
    name: "Confeitero(a)",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "265c2b49-564a-4a5a-a758-ef7263eb2e9e",
    name: "Balconista",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const ModalForm = () => {

  return (
    <div>
      <S.FormOverlay>
        <S.InputContainer>
          <Select
            selected={"Cargo..."}
            img={"https://i.imgur.com/LNAjnQH.png"}

          ></Select>
          <InputText
            placeholder={"Salário..."}
            img={"https://i.imgur.com/LNAjnQH.png"}
          ></InputText>
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
