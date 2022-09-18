import { useEffect, useState } from "react";
import InputCheckbox from "../InputCheckbox";
import InputNumber from "../InputNumber";
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
import axios from "axios";

const ModalForm = () => {
  const [selectValue, setSelectValue] = useState<any>("Selecione ");
  const [habilidadesState, setHabilidadesState] = useState<any>(habilidades);
  const [desmarcado, setDesmarcado] = useState(false);
  const [checkedAtividades, setCheckedAtividades] = useState<any>([]);

  const checkedItems = checkedAtividades.length
    ? checkedAtividades.reduce((total: string, item: string) => {
        return total + ", " + item;
      })
    : "";

  const handleCheckAtividades = (event: {
    target: { checked: any; value: any };
  }) => {
    var updatedList = [...checkedAtividades];
    if (event.target.checked) {
      updatedList = [...checkedAtividades, event.target.value];
    } else {
      updatedList.splice(checkedAtividades.indexOf(event.target.value), 1);
    }
    setCheckedAtividades(updatedList);
  };

  const [checkedHabilidades, setCheckedHabilidades] = useState<any>([]);

  const checkedItensHabilidades = checkedHabilidades.length
    ? checkedHabilidades.reduce((total: string, item: string) => {
        return total + ", " + item;
      })
    : "";

  const handleCheckHabilidades = (event: {
    target: { checked: any; value: any };
  }) => {
    var updatedList = [...checkedHabilidades];
    if (event.target.checked) {
      updatedList = [...checkedHabilidades, event.target.value];
    } else {
      updatedList.splice(checkedHabilidades.indexOf(event.target.value), 1);
    }
    setCheckedHabilidades(updatedList);
  };

  const [checkedBeneficios, setCheckedBeneficios] = useState<any>([]);

  const checkedItensBeneficios = checkedBeneficios.length
    ? checkedBeneficios.reduce((total: string, item: string) => {
        return total + ", " + item;
      })
    : "";

  const handleCheckBeneficios = (event: {
    target: { checked: any; value: any };
  }) => {
    var updatedList = [...checkedBeneficios];
    if (event.target.checked) {
      updatedList = [...checkedBeneficios, event.target.value];
    } else {
      updatedList.splice(checkedBeneficios.indexOf(event.target.value), 1);
    }
    setCheckedBeneficios(updatedList);
  };

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

  const [values, setValues] = useState(initialValue);

  console.log(values);

  function onChange(ev: { target: { name: any; value: any } }) {
    const { name, value } = ev.target;

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
    axios.post("http://localhost:3004/create", values).then((res) => {
      console.log("Deu certo");
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
        {checkedItems && (
          <S.Paragrafo>{`Atividades selecionadas: ${checkedItems}`}</S.Paragrafo>
        )}
        <S.CheckboxContainer activescroll>
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
        {checkedItensHabilidades && (
          <S.Paragrafo>{`Habilidades selecionadas: ${checkedItensHabilidades}`}</S.Paragrafo>
        )}
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
          <h3>Tempo de experiência</h3>
          <div className="experienciacontainer">
            {tempoexperiencia.map((elem) => {
              return (
                <InputCheckbox
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
          <h3>Grau acadêmico</h3>
          <div className="experienciacontainer">
            {experiencia.map((elem) => {
              return (
                <InputCheckbox
                  type={"radio"}
                  key={elem.name}
                  verificar={onChange}
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
        {checkedItensBeneficios && (
          <S.Paragrafo>{`Habilidades selecionadas: ${checkedItensBeneficios}`}</S.Paragrafo>
        )}
        <S.CheckboxContainer>
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
        <button type="submit">VAMOS TESTAR</button>
      </S.FormOverlay>
    </div>
  );
};

export default ModalForm;
