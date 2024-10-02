import { Header } from '@components/Header'
import { Container, Description, Meal, MealHour, MealName, MealsContainer, MealStatus, MealTitle, 
    OpenStatisticsIcon, Percentage, PercentageContainer, StatusProp, Title } from './styles'
import { Button } from '@components/Button'
import { SectionList } from 'react-native'
import { useState } from 'react'


export function Home({ navigation }: any) {
    const [data, setData] = useState([
        {
            title: '26.09.24',
            data: [
                {
                    id: 1,
                    name: 'Vitamina de banana com aveia e whey',
                    date: '2024-09-26T08:00:00.752-03:00',
                    description: 'Café da manhã',
                    status: 'SUCCESS' as StatusProp['status']
                },
                {
                    id: 2,
                    name: 'Almoço',
                    date: '2024-09-26T12:00:00.752-03:00',
                    description: 'Almoço',
                    status: 'SUCCESS' as StatusProp['status']
                },
                {
                    id: 3,
                    name: 'Bolinho',
                    date: '2024-09-26T16:00:00.752-03:00',
                    description: 'Bolinho de chuva',
                    status: 'DANGER' as StatusProp['status']
                },
                {
                    id: 4,
                    name: 'Jantar',
                    date: '2024-09-26T20:00:00.752-03:00',
                    description: 'Jantar',
                    status: 'SUCCESS' as StatusProp['status']
                }
            ]
        }, 
        {
            title: '26.09.25',
            data: [
                {
                    id: 4,
                    name: 'Vitamina de banana com aveia e whey',
                    date: '2024-09-26T08:00:00.752-03:00',
                    description: 'Café da manhã',
                    status: 'SUCCESS' as StatusProp['status']
                },
                {
                    id: 5,
                    name: 'Almoço',
                    date: '2024-09-26T12:00:00.752-03:00',
                    description: 'Almoço',
                    status: 'SUCCESS' as StatusProp['status']
                },
                {
                    id: 6,
                    name: 'Bolinho',
                    date: '2024-09-26T16:00:00.752-03:00',
                    description: 'Bolinho de chuva',
                    status: 'DANGER' as StatusProp['status']
                }
            ]
        }
    ])
    return (
        <Container>
            <Header />
            <PercentageContainer status={'SUCCESS'} onPress={() => navigation.navigate('Statistics')}>
                <OpenStatisticsIcon status={'SUCCESS'} />
                <Percentage>90,86%</Percentage>
                <Description>das refeições dentro da dieta</Description>
            </PercentageContainer>
            <MealsContainer>
                <Title>Refeições</Title>
                <Button icon="add" label="Nova refeição" />
                <SectionList
                    fadingEdgeLength={350}
                    sections={data}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Meal>
                            <MealHour>20:00</MealHour>
                            <MealName>{item.name}</MealName>
                            <MealStatus status={item.status} />
                        </Meal>
                    )}
                    renderSectionHeader={({ section: { title } }) => <MealTitle>{title}</MealTitle>}
                    contentContainerStyle={{ gap: 8, paddingBottom: 30 }}
                />
            </MealsContainer>
        </Container>
    )
}