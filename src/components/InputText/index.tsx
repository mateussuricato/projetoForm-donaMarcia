import * as S from "./styles";

interface InputProps {
  placeholder?: string
  img?: string
}

const InputText = ({placeholder, img}: InputProps) => {



  return (
    <S.InputOverlay>
      <img src={img} alt="" />
      <S.Input placeholder={placeholder} defaultValue=""></S.Input>
    </S.InputOverlay>
  )
}

export default InputText