import { useEffect, useState } from "react";
import InputRadio from "../InputRadio";
import InputText from "../InputNumber";
import Select from "../Select";
import * as S from "./styles";

const ModalForm = () => {
  const [selectValue, setSelectValue] = useState("");

  let salario = "";

  if (selectValue === "Balconista") {
    salario = Number(salario + 1400).toFixed(2);
  }

  return (
    <div>
      <S.FormOverlay>
        <S.InputContainer>
          <Select
            selected={"Cargo..."}
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
