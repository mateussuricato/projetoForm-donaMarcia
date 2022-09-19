import * as S from "./styles";
import jsPDF from "jspdf";

interface RenderProps {
  selectValue: string | undefined;
  salario: string;
  selectEtapas: string | undefined;
  checkedItems: any;
  checkedItensHabilidades: any;
  checkedItensBeneficios: any;
  tempoExperiencia: string | undefined;
  grauAcademico: string | undefined;
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
      <S.RenderOverlay id="pdf">
        <S.Header>
          <S.Larissa>
            <h2>Cargo:</h2>
            <p>{selectValue}</p>
          </S.Larissa>
        <S.Label>Salário: {salario},00</S.Label>
        </S.Header>
        <S.Body>
          <S.Label><b>Etapas do Processo :</b> <S.Paula>{selectEtapas}</S.Paula></S.Label>
          <S.Label><b>Atividades do cargo:</b> <S.Paula>{checkedItems}</S.Paula></S.Label>
          <S.Label><b>Habilidades Necessarias :</b> <S.Paula>{checkedItensHabilidades}</S.Paula></S.Label>
          <S.Label><b>Tempo de Experiência:</b> <S.Paula>{tempoExperiencia}</S.Paula></S.Label>
          <S.Label><b>Grau Acadêmico:</b> <S.Paula>{grauAcademico}</S.Paula></S.Label>
          <S.Label><b>Beneficios do Cargo:</b> <S.Paula>{checkedItensBeneficios}</S.Paula></S.Label>
        </S.Body>
        <S.Footer>
          <img src="https://i.imgur.com/tQrHHbf.png" alt="" />
        </S.Footer>
      </S.RenderOverlay>
      <div className="button">
        <img src="https://i.imgur.com/ws8SR34.png" alt="" />
        <div onClick={generatePDF} >
          Gerar Pdf
        </div>
      </div>
    </S.RenderContainer>
  );
};

export default Render;
