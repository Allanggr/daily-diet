
import { Container, Description, OpenStatisticsIcon, Percentage, PercentageContainer, StatisticsContainer } from './styles'
import { Text } from 'react-native'


export function Statistics({ navigation }: { navigation: any }) {
    return (
        <Container status={'SUCCESS'}>
            <PercentageContainer status={'SUCCESS'} onPress={() => navigation.navigate('Home')}>
                <OpenStatisticsIcon status={'SUCCESS'} />
                <Percentage>90,86%</Percentage>
                <Description>das refeições dentro da dieta</Description>
            </PercentageContainer>
            <StatisticsContainer>
                <Text>Statistics</Text>
            </StatisticsContainer>
        </Container>
    )
}