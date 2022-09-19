import { useEffect, useState } from "react";
import InputCheckbox from "../InputCheckbox";
import InputNumber from "../InputNumber";
import jsPDF from "jspdf";
import Select from "../Select";
import * as S from "./styles";
import {
  salario,
  atividades,
  atividades2,
  habilidades,
  experiencia,
  tempoexperiencia,
  auxiliarlimpeza,
  confeiteiro,
  gerente,
  nutricionista,
  recepcionista,
  beneficios,
} from "../../mocks";
import SelectEtapas from "../SelectEtapas";
import InputRadio from "../InputRadio";

interface ModalProps {
  setSelectValue: any;
  selectValue: any;
  onChange: any;
  setSalario: any;
  setSelectEtapas: any;
  handleCheckAtividades: any;
  handleCheckHabilidades: any;
  handleCheckBeneficios: any;
  setTempoExperiencia: any;
  setGrauAcademico: any;
}

const ModalForm = ({
  setSelectValue,
  selectValue,
  onChange,
  setSalario,
  setSelectEtapas,
  handleCheckAtividades,
  handleCheckHabilidades,
  handleCheckBeneficios,
  setTempoExperiencia,
  setGrauAcademico,
}: ModalProps) => {
  const [habilidadesState, setHabilidadesState] = useState<any>(habilidades);
  const [desmarcado, setDesmarcado] = useState(false);

  let salarioValue = "";

  if (selectValue === "Auxiliar de limpeza") {
    salarioValue = Number(salarioValue + salario[0].value).toFixed(2);
  } else if (selectValue === "Confeiteiro(a)") {
    salarioValue = Number(salarioValue + salario[1].value).toFixed(2);
  } else if (selectValue === "Gerente") {
    salarioValue = Number(salarioValue + salario[2].value).toFixed(2);
  } else if (selectValue === "Nutricionista") {
    salarioValue = Number(salarioValue + salario[3].value).toFixed(2);
  } else if (selectValue === "Recepcionista") {
    salarioValue = Number(salarioValue + salario[4].value).toFixed(2);
  }

  useEffect(() => {
    if (selectValue === "Auxiliar de limpeza") {
      setHabilidadesState(auxiliarlimpeza);
      setDesmarcado(true);
    } else if (selectValue === "Confeiteiro(a)") {
      salarioValue = Number(salarioValue + salario[1].value).toFixed(2);
      setHabilidadesState(confeiteiro);
      setDesmarcado(true);
    } else if (selectValue === "Gerente") {
      salarioValue = Number(salarioValue + salario[2].value).toFixed(2);
      setHabilidadesState(gerente);
      setDesmarcado(true);
    } else if (selectValue === "Nutricionista") {
      salarioValue = Number(salarioValue + salario[3].value).toFixed(2);
      setHabilidadesState(nutricionista);
      setDesmarcado(true);
    } else if (selectValue === "Recepcionista") {
      salarioValue = Number(salarioValue + salario[4].value).toFixed(2);
      setHabilidadesState(recepcionista);
      setDesmarcado(true);
    }
  }, [selectValue]);

  return (
    <div>
      <S.FormOverlay id="form">
        <img className="logo" src="https://i.imgur.com/tQrHHbf.png" alt="" />
        <S.InputContainer>
          <Select
            onChange={onChange}
            img={"https://i.imgur.com/tWe7dCJ.png"}
            setSelectValue={setSelectValue}
          ></Select>
          <SelectEtapas
            setSelectEtapas={setSelectEtapas}
            onChange={onChange}
            img={"https://i.imgur.com/NRC9cvn.png"}
          ></SelectEtapas>
        </S.InputContainer>
        <InputNumber
          selectValue={selectValue}
          setSalario={setSalario}
          onChange={onChange}
          salario={salarioValue}
          placeholder={"Salário..."}
          img={"https://i.imgur.com/Iuzso5g.png"}
        ></InputNumber>
        <S.Titulo>Atividades que o cargo exerce</S.Titulo>
        <S.CheckboxContainer>
          {atividades2.map((elem, index) => {
            return (
              <InputCheckbox
                type={"checkbox"}
                name={elem}
                key={index}
                atividades={elem}
                onChange={handleCheckAtividades}
                inputName={"atividadesdocargo"}
                selectValue={selectValue}
              />
            );
          })}
        </S.CheckboxContainer>
        <S.Titulo>Habilidades necessárias</S.Titulo>
        <S.CheckboxContainer>
          {habilidadesState.map((elem: { name: string | undefined }) => {
            return (
              <InputCheckbox
                type={"checkbox"}
                key={elem.name}
                onChange={handleCheckHabilidades}
                verificar={onChange}
                inputName={"habilidadesdocargo"}
                name={elem.name}
                habilidadesState={habilidadesState}
                selectValue={selectValue}
                atividades={elem.name}
              />
            );
          })}
        </S.CheckboxContainer>
        <S.Titulo>Experiência necessária</S.Titulo>
        <S.CheckboxContainer>
          <S.ExperienciaContainer>
            <h4>Tempo de experiência</h4>
            <div className="experienciacontainer">
              {tempoexperiencia.map((elem) => {
                return (
                  <InputCheckbox
                    setTempoExperiencia={setTempoExperiencia}
                    type={"radio"}
                    key={elem.name}
                    verificar={onChange}
                    inputName={"tempoexperiencia"}
                    name={elem.name}
                    selectValue={selectValue}
                    category={elem.categoryCargo}
                    atividades={elem.name}
                  />
                );
              })}
            </div>
          </S.ExperienciaContainer>
          <S.ExperienciaContainer>
            <h4>Grau acadêmico</h4>
            <div className="experienciacontainer">
              {experiencia.map((elem) => {
                return (
                  <InputRadio
                    setGrauAcademico={setGrauAcademico}
                    key={elem.name}
                    inputName={"grauexperiencia"}
                    name={elem.name}
                    atividades={elem.name}
                  />
                );
              })}
            </div>
          </S.ExperienciaContainer>
        </S.CheckboxContainer>
        <S.Titulo>Benefícios do cargo</S.Titulo>
        <S.CheckboxContainer active>
          {beneficios.map((elem) => {
            return (
              <InputCheckbox
                type={"checkbox"}
                key={elem.name}
                onChange={handleCheckBeneficios}
                verificar={onChange}
                name={elem.name}
                inputName={"beneficioscargo"}
                selectValue={selectValue}
                atividades={elem.name}
              />
            );
          })}
        </S.CheckboxContainer>
      </S.FormOverlay>
    </div>
  );
};

export default ModalForm;
