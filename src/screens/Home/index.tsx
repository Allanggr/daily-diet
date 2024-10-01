import { Header } from '@components/Header'
import { Container, MealsContainer, Title } from './styles'
import { Percent } from '@components/Percent'
import { Button } from '@components/Button'

export function Home() {
    return (
        <Container>
            <Header />
            <Percent />
            <MealsContainer>
                <Title>Refeições</Title>
                <Button icon="add" label="Nova refeição" />
            </MealsContainer>
        </Container>
    )
}