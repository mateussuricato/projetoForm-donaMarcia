import * as S from "./styles";
import jsPDF from "jspdf";

interface RenderProps {
  selectValue: any;
  salario: any;
  selectEtapas: any;
  checkedItems: any;
  checkedItensHabilidades: any;
  checkedItensBeneficios: any;
  tempoExperiencia: any;
  grauAcademico: any;
}

const Render = ({
  selectValue,
  salario,
  selectEtapas,
  checkedItems,
  checkedItensHabilidades,
  checkedItensBeneficios,
  tempoExperiencia,
  grauAcademico,
}: RenderProps) => {
  const generatePDF = () => {
    const doc: any = new jsPDF("p", "pt", "a4");
    doc.html(document.querySelector("#pdf"), {
      callback: function (pdf: {
        deletePage(pageCount: any): unknown;
        save: (arg0: string) => void;
      }) {
        const pageCount = doc.internal.getNumberOfPages();
        pdf.deletePage(pageCount);
        pdf.save("mypdf.pdf");
      },
    });
  };

  return (
    <S.RenderContainer>
      <S.RenderOverlay  onClick={generatePDF} id="pdf">
        <div>
          <h1>Cargo: {selectValue}</h1>
          <h3>Salario: {salario},00</h3>
        </div>
        <h3>Etapas do Processo: {selectEtapas}</h3>
        <h3>Atividades do cargo: {checkedItems}</h3>
        <h3>Habilidades Necessarias: {checkedItensHabilidades}</h3>
        <h3>Tempo de Experiência: {tempoExperiencia}</h3>
        <h3>Grau Acadêmico: {grauAcademico}</h3>
        <h3>Beneficios do Cargo: {checkedItensBeneficios}</h3>
      </S.RenderOverlay>
        <div className="button">
          <img src="https://i.imgur.com/ws8SR34.png" alt="" />
          <button onClick={generatePDF} type="button">
            Gerar Pdf
          </button>
        </div>
    </S.RenderContainer>
  );
};

export default Render;
