import * as S from "./styles";

export default function Cards({title, Icon, value}) {
  return (
    <S.Container>
        <S.Header>
        <S.headerTitle> {title} </S.headerTitle>
        <Icon />
        </S.Header>
        <S.Total>{value}</S.Total>
    </S.Container>
  )
}
