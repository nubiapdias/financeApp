import * as S from "./styles";
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

export default function GridItem({ item, onDelete }) {
  return (
    <S.Tr>
      <S.Td>{item.desc}</S.Td>
      <S.Td>{item.amount}</S.Td>
      <S.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </S.Td>
      <S.Td alignCenter>
        <FaTrash onClick={() => onDelete(item.id)} />
      </S.Td>
    </S.Tr>
  );
}
