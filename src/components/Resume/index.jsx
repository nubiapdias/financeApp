import Cards from "../Cards";
import * as S from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";
export default function Resume({expense, income, total}) {
  return (
    <S.Container>
      <Cards title="CREDIT" Icon={FaRegArrowAltCircleUp} value={income}/>
      <Cards title="DEBIT" Icon={FaRegArrowAltCircleDown} value={expense}/>
      <Cards title="AMOUNT" Icon={FaDollarSign} value={total}/>
    </S.Container>
  );
}
