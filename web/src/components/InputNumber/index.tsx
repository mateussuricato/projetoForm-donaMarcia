import { useEffect, useState } from "react";
import * as S from "./styles";

interface InputProps {
  placeholder?: string
  img?: string
  salario?: any
  onChange?: any
}

const InputNumber = ({placeholder, img, salario, onChange}: InputProps) => {


  return (
    <S.InputOverlay>
      <img src={img} alt="" />
      <p>R$</p>
      <S.Input onChange={onChange} name="salariodocargo" type="number" placeholder={placeholder} defaultValue={`${salario}`}></S.Input>
    </S.InputOverlay>
  )
}

export default InputNumber