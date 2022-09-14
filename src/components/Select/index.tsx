import * as S from "./styles";

interface SelectProps {
  img?: string;
  selected?: string
}

const Select = ({ img, selected }: SelectProps) => {
  return (
    <S.SelectOverlay>
      <img src={img} alt="" />
      <S.Select>
        <option disabled selected>
          {selected}
        </option>
        <option>2</option>
        <option>punheteiro</option>
      </S.Select>
    </S.SelectOverlay>
  );
};

export default Select;
