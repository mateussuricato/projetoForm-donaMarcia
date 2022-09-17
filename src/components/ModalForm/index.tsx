import { useEffect, useState } from "react";
import InputCheckbox from "../InputCheckbox";
import InputText from "../InputNumber";
import Select from "../Select";
import * as S from "./styles";
import {
  salario,
  atividades,
  habilidades,
  experiencia,
  tempoexperiencia,
  auxiliarlimpeza,
  confeiteiro,
} from "../../mocks";
import SelectEtapas from "../SelectEtapas";

const ModalForm = () => {
  const [selectValue, setSelectValue] = useState("Selecione o cargo...");
  const [habilidadesState, setHabilidadesState] = useState(habilidades);
  const [desmarcado, setDesmarcado] = useState(false);

  let salarioValue = "";

  useEffect(() => {
    if (selectValue === "Auxiliar de limpeza") {
      salarioValue = Number(salarioValue + salario[0].value).toFixed(2);
      setHabilidadesState(auxiliarlimpeza);
      setDesmarcado(true);
    } else if (selectValue === "Confeiteiro(a)") {
      salarioValue = Number(salarioValue + salario[1].value).toFixed(2);
      setHabilidadesState(confeiteiro);
      setDesmarcado(true);
    } else if (selectValue === "Gerente") {
      salarioValue = Number(salarioValue + salario[2].value).toFixed(2);
    } else if (selectValue === "Nutricionista") {
      salarioValue = Number(salarioValue + salario[3].value).toFixed(2);
    } else if (selectValue === "Recepcionista") {
      salarioValue = Number(salarioValue + salario[4].value).toFixed(2);
    }
  }, [selectValue]);

  return (
    <div>
      <S.FormOverlay>
        <img className="logo" src="https://i.imgur.com/tQrHHbf.png" alt="" />
        <S.InputContainer>
          <Select
            img={"https://i.imgur.com/LNAjnQH.png"}
            selectValue={selectValue}
            setSelectValue={setSelectValue}
          ></Select>
          <InputText
            salario={salarioValue}
            value={"1.000,00"}
            placeholder={"Salário..."}
            img={"https://i.imgur.com/LNAjnQH.png"}
          ></InputText>
          <SelectEtapas img={"https://i.imgur.com/LNAjnQH.png"}></SelectEtapas>
        </S.InputContainer>
        <S.Titulo>Atividades que o cargo exerce</S.Titulo>
        <S.CheckboxContainer activescroll>
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
          {habilidadesState.map((elem) => {
            return (
              <InputCheckbox
                habilidadesState={habilidadesState}
                desmarcado={desmarcado}
                selectValue={selectValue}
                category={elem.category}
                atividades={elem.name}
              />
            );
          })}
        </S.CheckboxContainer>
        <S.Titulo>Experiência necessária</S.Titulo>
        <S.CheckboxContainer>
          <h3>Tempo de experiência</h3>
          <div className="experienciacontainer">
            {tempoexperiencia.map((elem) => {
              return (
                <InputCheckbox
                  selectValue={selectValue}
                  category={elem.category}
                  atividades={elem.name}
                />
              );
            })}
          </div>
          <h3>Grau acadêmico</h3>
          <div className="experienciacontainer">
            {experiencia.map((elem) => {
              return (
                <InputCheckbox
                  selectValue={selectValue}
                  category={elem.category}
                  atividades={elem.name}
                />
              );
            })}
          </div>
        </S.CheckboxContainer>
      </S.FormOverlay>
    </div>
  );
};

export default ModalForm;
