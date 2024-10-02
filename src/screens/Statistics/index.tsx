
import { Container, Description, OpenStatisticsIcon, Percentage, PercentageContainer, StatisticsContainer, StatisticsSquare, StatisticsSquareDescription, StatistisSquareTitle, Title } from './styles'
import { View } from 'react-native'


export function Statistics({ navigation }: { navigation: any }) {
    return (
        <Container status={'SUCCESS'}>
            <PercentageContainer status={'SUCCESS'} onPress={() => navigation.navigate('Home')}>
                <OpenStatisticsIcon status={'SUCCESS'} />
                <Percentage>90,86%</Percentage>
                <Description>das refeições dentro da dieta</Description>
            </PercentageContainer>
            <StatisticsContainer>
                <Title>Estatísticas Gerais</Title>
                <View style={{ gap: 10 }}>
                    <StatisticsSquare background='NEUTRAL'>
                        <StatistisSquareTitle>22</StatistisSquareTitle>
                        <StatisticsSquareDescription>melhor sequência de pratos dentro da dieta</StatisticsSquareDescription>
                    </StatisticsSquare>
                    <StatisticsSquare background='NEUTRAL'>
                        <StatistisSquareTitle>109</StatistisSquareTitle>
                        <StatisticsSquareDescription>refeições registradas</StatisticsSquareDescription>
                    </StatisticsSquare>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <StatisticsSquare background='SUCCESS' style={{ width: '50%' }}>
                            <StatistisSquareTitle>99</StatistisSquareTitle>
                            <StatisticsSquareDescription>refeições dentro da dieta</StatisticsSquareDescription>
                        </StatisticsSquare>
                        <StatisticsSquare background='DANGER' style={{ width: '50%' }}>
                            <StatistisSquareTitle>22</StatistisSquareTitle>
                            <StatisticsSquareDescription>refeições fora da dieta</StatisticsSquareDescription>
                        </StatisticsSquare>
                    </View>
                </View>
            </StatisticsContainer>
        </Container>
    )
}