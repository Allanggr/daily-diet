import { Container, Description, Percentage, OpenStatisticsIcon } from "./styles";

export function Percent() {
    return (
        <Container status={'SUCCESS'}>
            <OpenStatisticsIcon status={'SUCCESS'} />
            <Percentage>90,86%</Percentage>
            <Description>das refeições dentro da dieta</Description>
        </Container>
    )
}   