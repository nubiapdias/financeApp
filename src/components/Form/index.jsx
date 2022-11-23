import { useState } from "react";
import * as S from "./styles";
import Grid from "../Grid"

export default function Form({handleAdd, transList, setTransList}) {
  const generateId = () => Math.round(Math.random() * 1000);

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  const handleSave = () => {
    if (!desc || !amount) {
      return alert("value description is missing");
    } else if (amount < 1) {
      return alert("value cannot be negative");
    }

    const transaction = {
      id: generateId(),
      desc: desc,
      amount: amount,
      expense: isExpense,
    };

    handleAdd(transaction);

    setDesc("");
    setAmount("");
  };

  return (
    <>
      <S.Container>
        <S.inputContent>
          <S.Label>DESCRIPTION</S.Label>
          <S.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
        </S.inputContent>
        <S.inputContent>
          <S.Label>VALUE</S.Label>
          <S.Input
            value={amount}
            type="number"
            onChange={(e) => setAmount(e.target.value)}
          />
        </S.inputContent>
        <S.radioGroup>
          <S.Input
            type="radio"
            id="rIncome"
            defaultChecked
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <S.Label htmlFor="rIncome"> CREDIT </S.Label>
          <S.Input
            type="radio"
            id="rExpense"
            name="group1"
            onChange={() => setExpense(!isExpense)}
          />
          <S.Label htmlFor="rExpense"> DEBIT </S.Label>
        </S.radioGroup>
        <S.Button onClick={handleSave}> TOTALIZE </S.Button>
      </S.Container>
      <Grid item={transList} setItem={setTransList}/> 
    </>
  );
}
