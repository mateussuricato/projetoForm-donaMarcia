import Select from "../Select";
import * as S from "./styles";
import cargo2 from "../../assets/images/cargo.png"


const ModalForm = () => {
  return (
    <div>
      <S.Form>
        <Select selected={"Cargo..."} img={"https://i.imgur.com/LNAjnQH.png"}></Select>
        <Select selected={"Salário..."}></Select>
        <Select selected={"Atividades que o cargo exerce"}></Select>
        <Select ></Select>
        <Select ></Select>
        <Select selected={"Habilidades necessárias"}></Select>
        <Select ></Select>
      </S.Form>
    </div>
  );
};

export default ModalForm;
