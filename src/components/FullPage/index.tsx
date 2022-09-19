import * as S from "./styles";
import ModalForm from "../ModalForm";
import { useState } from "react";
import Render from "../Render";

const FullPage = () => {


  const [selectValue, setSelectValue] = useState();
  const [selectEtapas, setSelectEtapas] = useState();
  const [checkedAtividades, setCheckedAtividades] = useState<any>([]);
  const [tempoExperiencia, setTempoExperiencia] = useState();
  const [grauAcademico, setGrauAcademico] = useState();

  const checkedItems = checkedAtividades.length
    ? checkedAtividades.reduce((total: string, item: string) => {
        return total + ", " + item;
      })
    : "";

  const handleCheckAtividades = (event: {
    target: { checked: any; value: any };
  }) => {
    let updatedList = [...checkedAtividades];
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
    let updatedList = [...checkedHabilidades];
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
    let updatedList = [...checkedBeneficios];
    if (event.target.checked) {
      updatedList = [...checkedBeneficios, event.target.value];
    } else {
      updatedList.splice(checkedBeneficios.indexOf(event.target.value), 1);
    }
    setCheckedBeneficios(updatedList);

  };

  const [salario, setSalario] = useState("0");



  return (
    <div>
      <S.FullPage>
        <ModalForm
        setCheckedHabilidades={setCheckedHabilidades}
          setGrauAcademico={setGrauAcademico}
          handleCheckBeneficios={handleCheckBeneficios}
          handleCheckHabilidades={handleCheckHabilidades}
          handleCheckAtividades={handleCheckAtividades}
          setSelectEtapas={setSelectEtapas}
          setSalario={setSalario}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          setTempoExperiencia={setTempoExperiencia}
        />
        <Render
          grauAcademico={grauAcademico}
          tempoExperiencia={tempoExperiencia}
          checkedItensBeneficios={checkedItensBeneficios}
          checkedItensHabilidades={checkedItensHabilidades}
          checkedItems={checkedItems}
          selectEtapas={selectEtapas}
          salario={salario}
          selectValue={selectValue}
        />
      </S.FullPage>
    </div>
  );
};

export default FullPage;
