import { Header } from '@components/Header'
import { Container } from './styles'
import { Percent } from '@components/Percent'

export function Home() {
    return (
        <Container>
            <Header />
            <Percent />
        </Container>
    )
}