import GridItem from "../GridItem";
import * as S from "./styles";

export default function Grid({ item, setItem }) {
  const onDelete = (ID) => {
    const ArrayTransactions = item.filter(
      (transaction) => transaction.id !== ID
    );
    setItem(ArrayTransactions);
    localStorage.setItens("transactions", JSON.stringify(ArrayTransactions));
  };

  return (
    <S.Table>
      <S.Thead>
        <S.Tr>
          <S.Th width={40}> DESCRIPTION </S.Th>
          <S.Th width={40}> VALUE </S.Th>
          <S.Th width={10} alignCenter>
            TYPE
          </S.Th>
          <S.Th width={10}></S.Th>
        </S.Tr>
      </S.Thead>
      <S.Tbody>
        {item?.map((item, index) => (
          <GridItem key={index} item={item} onDelete={onDelete}/>
        ))}
      </S.Tbody>
    </S.Table>
  );
}
