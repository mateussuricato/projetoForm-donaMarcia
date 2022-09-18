import { useEffect, useState } from "react";
import * as S from "./styles";

interface InputProps {
  placeholder?: string
  img?: string
  salario?: any
}

const InputNumber = ({placeholder, img, salario}: InputProps) => {


  return (
    <S.InputOverlay>
      <img src={img} alt="" />
      <p>R$</p>
      <S.Input name="salariodocargo" type="number" placeholder={placeholder} defaultValue={`${salario}`}></S.Input>
    </S.InputOverlay>
  )
}

export default InputNumber