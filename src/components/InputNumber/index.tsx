import { useEffect, useState } from "react";
import * as S from "./styles";

interface InputProps {
  placeholder?: string
  img?: string
  salario?: any
  onChange?: any
  setSalario: any
}

const InputNumber = ({placeholder, img, salario, onChange, setSalario}: InputProps) => {


  return (
    <S.InputOverlay>
      <img src={img} alt="" />
      <p>R$</p>
      <S.Input onChange={(e) => setSalario(e.target.value)} name="salariodocargo" type="number" placeholder={placeholder} defaultValue={`${salario}`}></S.Input>
    </S.InputOverlay>
  )
}

export default InputNumber