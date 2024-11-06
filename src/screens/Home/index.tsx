import { Header } from '@components/Header'
import { Container, Description, EmptyListComponent, Meal, MealHour, MealName, MealsContainer, MealStatus, MealTitle, 
    OpenStatisticsIcon, Percentage, PercentageContainer, Title } from './styles'
import { Button } from '@components/Button'
import { Alert, SectionList } from 'react-native'
import { useEffect, useState } from 'react'
import { getAllMeals } from '@storage/meal/getAllMeals'
import { getStats, StatsProps } from '@utils/getStats'
import { MealGroup } from '@storage/storage.config'
import { Loading } from '@components/Loading'
import React from 'react'


export function Home({ navigation }: any) {
    const [data, setData] = useState<MealGroup[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [stats, setStats] = useState<StatsProps>({
        numberOfMeals: 0,
        isDietPositive: false,
        numberOfMealsOutDiet: 0,
        percentageOfMealsInDiet: '',
        bestSequenceOfMealsInDiet: 0
    })

    const fetchMealGroups = async () => {
        try {
            setIsLoading(true);
            const data = await getAllMeals();
            const lastStats = await getStats();
            setData(data);
            setStats(lastStats);
        } catch (error) {
          Alert.alert("Refeições", "Não foi possível carregar as refeições!");
        } finally {
          setIsLoading(false);
        }
      };

    useEffect(() => {
        fetchMealGroups();
    }, []);

    return (
        <Container>
            <Header />
            {isLoading && !data.length ? <Loading /> :
            <>
                <PercentageContainer status={stats.isDietPositive ? 'SUCCESS' : 'DANGER'} onPress={() => navigation.navigate('Statistics')}>
                    <OpenStatisticsIcon status={stats.isDietPositive ? 'SUCCESS' : 'DANGER'} />
                    <Percentage>{ `${stats.percentageOfMealsInDiet}%` }</Percentage>
                    <Description>das refeições dentro da dieta</Description>
                </PercentageContainer>
                <MealsContainer>
                    <Title>Refeições</Title>
                    <Button icon="add" label="Nova refeição" onPress={() => navigation.navigate('Create')} />
                    <SectionList
                        fadingEdgeLength={350}
                        sections={data}
                        keyExtractor={(item) => item.id.toString()}
                        ListEmptyComponent={() => (
                            <EmptyListComponent>
                            Você ainda não cadastrou nenhuma refeição!
                            </EmptyListComponent>
                        )}
                        renderItem={({ item }) => (
                            <Meal onPress={() => navigation.navigate('Details', { mealData: item })}>
                                <MealHour>20:00</MealHour>
                                <MealName>{item.name}</MealName>
                                <MealStatus status={item.inDiet ? 'SUCCESS' : 'DANGER'} />
                            </Meal>
                        )}
                        showsVerticalScrollIndicator={false}
                        renderSectionHeader={({ section: { title } }) => <MealTitle>{title}</MealTitle>}
                        contentContainerStyle={{ gap: 8, paddingBottom: 30 }}
                    />
                </MealsContainer>
            </>
        } 
        </Container>
    )
}