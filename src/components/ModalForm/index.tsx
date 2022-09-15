import { useState } from "react";
import InputCheckbox from "../InputCheckbox";
import InputText from "../InputNumber";
import Select from "../Select";
import * as S from "./styles";
import { atividades, habilidades, experiencia } from "../../mocks";

const ModalForm = () => {
  const [selectValue, setSelectValue] = useState("Selecione o cargo...");


  let salario = "";

  if (selectValue === "Balconista") {
    salario = Number(salario + 1400).toFixed(2);
  } else if (selectValue === "Confeiteiro(a)") {
    salario = Number(salario + 2200).toFixed(2);
  }


  return (
    <div>
      <S.FormOverlay>
        <S.InputContainer>
          <Select
            img={"https://i.imgur.com/LNAjnQH.png"}
            selectValue={selectValue}
            setSelectValue={setSelectValue}
          ></Select>
          <InputText
            salario={salario}
            value={"1.000,00"}
            placeholder={"Salário..."}
            img={"https://i.imgur.com/LNAjnQH.png"}
          ></InputText>
        </S.InputContainer>
        <S.Titulo>Atividades que o cargo exerce</S.Titulo>
        <S.CheckboxContainer>
          {atividades.map((elem) => {
            return (
              <InputCheckbox
                selectValue={selectValue}
                category={elem.category}
                atividades={elem.name}
              />
            );
          })}
        </S.CheckboxContainer>
        <S.Titulo>Habilidades necessárias</S.Titulo>
        <S.CheckboxContainer>
          {habilidades.map((elem) => {
            return (
              <InputCheckbox
                selectValue={selectValue}
                category={elem.category}
                atividades={elem.name}
              />
            );
          })}
        </S.CheckboxContainer>
        <S.Titulo>Experiência necessária</S.Titulo>
        <S.CheckboxContainer>
          {experiencia.map((elem) => {
            return (
              <InputCheckbox
                selectValue={selectValue}
                category={elem.category}
                atividades={elem.name}
              />
            );
          })}
        </S.CheckboxContainer>
        {/* <S.CheckboxContainer>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
          <InputCheckbox></InputCheckbox>
        </S.CheckboxContainer> */}
      </S.FormOverlay>
    </div>
  );
};

export default ModalForm;
