import { Dispatch, SetStateAction, useEffect, useState } from "react";
import InputCheckbox from "../InputCheckbox";
import InputNumber from "../InputNumber";
import jsPDF from "jspdf";
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
  gerente,
  nutricionista,
  recepcionista,
  beneficios,
} from "../../mocks";
import SelectEtapas from "../SelectEtapas";
import InputRadio from "../InputRadio";

interface ModalProps {
  setSelectValue: React.Dispatch<React.SetStateAction<undefined>>;
  selectValue: string | undefined;
  setSalario: Dispatch<SetStateAction<string>>;
  setSelectEtapas: React.Dispatch<React.SetStateAction<undefined>>;
  handleCheckAtividades: (event: {
    target: { checked: any; value: any };
  }) => void;
  handleCheckHabilidades: (event: {
    target: { checked: any; value: any };
  }) => void;
  handleCheckBeneficios: (event: {
    target: { checked: any; value: any };
  }) => void;
  setTempoExperiencia: React.Dispatch<React.SetStateAction<undefined>>;
  setGrauAcademico: React.Dispatch<React.SetStateAction<undefined>>;
  setCheckedHabilidades: any;
}

const ModalForm = ({
  setCheckedHabilidades,
  setSelectValue,
  selectValue,
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
      setCheckedHabilidades("");
      setDesmarcado(false);
    } else if (selectValue === "Confeiteiro(a)") {
      salarioValue = Number(salarioValue + salario[1].value).toFixed(2);
      setHabilidadesState(confeiteiro);
      setCheckedHabilidades("");
      setDesmarcado(false);
    } else if (selectValue === "Gerente") {
      salarioValue = Number(salarioValue + salario[2].value).toFixed(2);
      setHabilidadesState(gerente);
      setCheckedHabilidades("");
      setDesmarcado(false);
    } else if (selectValue === "Nutricionista") {
      salarioValue = Number(salarioValue + salario[3].value).toFixed(2);
      setHabilidadesState(nutricionista);
      setCheckedHabilidades("");
      setDesmarcado(false);
    } else if (selectValue === "Recepcionista") {
      salarioValue = Number(salarioValue + salario[4].value).toFixed(2);
      setHabilidadesState(recepcionista);
      setCheckedHabilidades("");
      setDesmarcado(false);
    }
  }, [selectValue]);

  return (
    <div>
      <S.FormOverlay id="form">
        <img className="logo" src="https://i.imgur.com/tQrHHbf.png" alt="" />
        <S.InputContainer>
          <Select
            img={"https://i.imgur.com/tWe7dCJ.png"}
            setSelectValue={setSelectValue}
          ></Select>
          <SelectEtapas
            setSelectEtapas={setSelectEtapas}
            img={"https://i.imgur.com/NRC9cvn.png"}
          ></SelectEtapas>
        </S.InputContainer>
        <InputNumber
          selectValue={selectValue}
          setSalario={setSalario}
          salario={salarioValue}
          img={"https://i.imgur.com/Iuzso5g.png"}
        ></InputNumber>
        <S.Titulo>Atividades que o cargo exerce</S.Titulo>
        <S.CheckboxContainer>
          {atividades.map((elem) => {
            return (
              <InputCheckbox
                type={"checkbox"}
                name={elem.name}
                key={elem.id}
                atividades={elem.name}
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
                desmarcado={desmarcado}
                type={"checkbox"}
                key={elem.name}
                onChange={handleCheckHabilidades}
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
                    inputName={"tempoexperiencia"}
                    name={elem.name}
                    selectValue={selectValue}
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
