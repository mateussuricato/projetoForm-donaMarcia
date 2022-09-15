import { useEffect, useState } from "react";
import * as S from "./styles";

interface InputProps {
  placeholder?: string
  img?: string
  value?: string
  salario?: any
  mudar?: any
}

const InputNumber = ({placeholder, img, value, salario, mudar}: InputProps) => {


  return (
    <S.InputOverlay>
      <img src={img} alt="" />
      <p>R$</p>
      <S.Input type="number" placeholder={placeholder} defaultValue={`${salario}`}></S.Input>
    </S.InputOverlay>
  )
}

export default InputNumber