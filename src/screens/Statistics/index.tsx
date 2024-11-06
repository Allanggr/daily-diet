
import { useEffect, useState } from 'react'
import { Container, Description, BackToHomeIcon, BackToHomeButton, Percentage, PercentageContainer, StatisticsContainer, StatisticsSquare, 
    StatisticsSquareDescription, StatistisSquareTitle, Title } from './styles'
import { View } from 'react-native'
import { getStats, StatsProps } from '@utils/getStats'


export function Statistics({ navigation }: { navigation: any }) {
    const [stats, setStats] = useState<StatsProps>({
        numberOfMeals: 0,
        isDietPositive: false,
        numberOfMealsOutDiet: 0,
        percentageOfMealsInDiet: '',
        bestSequenceOfMealsInDiet: 0
    })

    useEffect(() => {
        async function fetchStats() {
            const lastStats = await getStats();
            setStats(lastStats);
        }
        fetchStats();
    },[])

    const statsType = stats.isDietPositive ? 'SUCCESS' : 'DANGER';


    return (
        <Container status={'SUCCESS'}>
            <BackToHomeButton onPress={() => navigation.navigate('Home')}>
                <BackToHomeIcon status={statsType} />
            </BackToHomeButton>
            <PercentageContainer status={statsType}>
                <Percentage>{`${stats.percentageOfMealsInDiet}%`}</Percentage>
                <Description>das refeições dentro da dieta</Description>
            </PercentageContainer>
            <StatisticsContainer>
                <Title>Estatísticas Gerais</Title>
                <View style={{ gap: 10 }}>
                    <StatisticsSquare background='NEUTRAL'>
                        <StatistisSquareTitle>{stats.bestSequenceOfMealsInDiet}</StatistisSquareTitle>
                        <StatisticsSquareDescription>melhor sequência de pratos dentro da dieta</StatisticsSquareDescription>
                    </StatisticsSquare>
                    <StatisticsSquare background='NEUTRAL'>
                        <StatistisSquareTitle>{stats.numberOfMeals}</StatistisSquareTitle>
                        <StatisticsSquareDescription>refeições registradas</StatisticsSquareDescription>
                    </StatisticsSquare>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <StatisticsSquare background='SUCCESS' style={{ width: '50%' }}>
                            <StatistisSquareTitle>{stats.bestSequenceOfMealsInDiet}</StatistisSquareTitle>
                            <StatisticsSquareDescription>refeições dentro da dieta</StatisticsSquareDescription>
                        </StatisticsSquare>
                        <StatisticsSquare background='DANGER' style={{ width: '50%' }}>
                            <StatistisSquareTitle>{stats.numberOfMealsOutDiet}</StatistisSquareTitle>
                            <StatisticsSquareDescription>refeições fora da dieta</StatisticsSquareDescription>
                        </StatisticsSquare>
                    </View>
                </View>
            </StatisticsContainer>
        </Container>
    )
}