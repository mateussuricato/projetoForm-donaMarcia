import { useEffect, useState } from "react";
import InputCheckbox from "../InputCheckbox";
import InputNumber from "../InputNumber";
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
import axios from "axios";
import { Toaster } from "react-hot-toast";

const initialValue = {
  cargo: "",
  salariodocargo: "",
  etapas: "",
  atividadesdocargo: "",
  habilidadesdocargo: "",
  tempoexperiencia: "",
  grauexperiencia: "",
  beneficioscargo: "",
};

const ModalForm = () => {
  const [selectValue, setSelectValue] = useState<any>("");
  const [habilidadesState, setHabilidadesState] = useState<any>(habilidades);
  const [desmarcado, setDesmarcado] = useState(false);
  const [values, setValues] = useState(initialValue);

  console.log(values);

  function onChange(ev: { target: { name: any; value: any } }) {
    const { name, value } = ev.target;

    console.log({ name, value });

    setValues({ ...values, [name]: value });
  }

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

  function onSubmit(ev: any) {
    ev.preventDefalut();

    axios.post("http://localhost:3004/create", values).then((res) => {
      console.log("Deu certo")
    });
  }

  return (
    <div>
      <S.FormOverlay onSubmit={onSubmit}>
        <img className="logo" src="https://i.imgur.com/tQrHHbf.png" alt="" />
        <S.InputContainer>
          <Select
            onChange={onChange}
            img={"https://i.imgur.com/LNAjnQH.png"}
            setSelectValue={setSelectValue}
          ></Select>
          <InputNumber
            onChange={onChange}
            salario={salarioValue}
            placeholder={"Salário..."}
            img={"https://i.imgur.com/LNAjnQH.png"}
          ></InputNumber>
          <SelectEtapas
            onChange={onChange}
            img={"https://i.imgur.com/LNAjnQH.png"}
          ></SelectEtapas>
        </S.InputContainer>
        <S.Titulo>Atividades que o cargo exerce</S.Titulo>
        <S.CheckboxContainer activescroll>
          {atividades.map((elem) => {
            return (
              <InputCheckbox
                onChange={onChange}
                inputName={"atividadesdocargo"}
                name={elem.name}
                selectValue={selectValue}
                category={elem.categoryCargo}
                atividades={elem.name}
              />
            );
          })}
        </S.CheckboxContainer>
        <S.Titulo>Habilidades necessárias</S.Titulo>
        <S.CheckboxContainer>
          {habilidadesState.map((elem: { name: string | undefined }) => {
            return (
              <InputCheckbox
                onChange={onChange}
                inputName={"habilidadesdocargo"}
                name={elem.name}
                habilidadesState={habilidadesState}
                desmarcado={desmarcado}
                selectValue={selectValue}
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
                  onChange={onChange}
                  inputName={"tempoexperiencia"}
                  name={elem.name}
                  selectValue={selectValue}
                  category={elem.categoryCargo}
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
                  onChange={onChange}
                  inputName={"grauexperiencia"}
                  name={elem.name}
                  selectValue={selectValue}
                  category={elem.categoryCargo}
                  atividades={elem.name}
                />
              );
            })}
          </div>
        </S.CheckboxContainer>
        <S.Titulo>Benefícios do cargo</S.Titulo>
        <S.CheckboxContainer>
          {beneficios.map((elem) => {
            return (
              <InputCheckbox
                onChange={onChange}
                name={elem.name}
                inputName={"beneficioscargo"}
                selectValue={selectValue}
                atividades={elem.name}
              />
            );
          })}
        </S.CheckboxContainer>
        <button type="submit">VAMOS TESTAR</button>
      </S.FormOverlay>
    </div>
  );
};

export default ModalForm;
