import { useEffect, useState } from 'react'
import { BackToHomeButton, BackToHomeIcon, Container, CreatingContainer, 
    MainTitle, MealDescription, MealName, LabelDate, MealDate, MealStatsContainer, 
    MealStatsTitle, MealStatus, 
    ButtonsContainer} from './styles'
import { Meal } from '@storage/storage.config'
import { Button } from '@components/Button'
import { removeMeal } from '@storage/meal/removeMeal'
import { Alert } from 'react-native'

export function Details({ navigation, route }: any) {
    const [meal, setMeal] = useState<Meal>({
        name: '',
        description: '',
        date: '',
        hour: '',
        inDiet: true,
        id: 0
    })

    useEffect(() => {
        const routeParams = route.params 
        setMeal(routeParams.mealData)
    },[])

    function openDeleteModal(){
        Alert.alert('Deseja realmente excluir essa refeição?', '', [
            {
                text: 'Cancelar',
                style: 'cancel'
            },
            {
                text: 'Excluir',
                style: 'destructive',
                onPress: async () => {
                    try {
                        await removeMeal(meal)
                        navigation.push('Home')
                    } catch (error) {
                        Alert.alert('Refeições', 'Não foi possível excluir a refeição!')
                    }
                }
            }
        ])
    }


    return (
        <Container inDiet={meal.inDiet}>
            <BackToHomeButton onPress={() => navigation.push('Home')}>
                <BackToHomeIcon />
            </BackToHomeButton>
            <MainTitle>Refeição</MainTitle>
            <CreatingContainer>
                <MealName>{meal.name}</MealName>
                <MealDescription>{meal.description}</MealDescription>
                <LabelDate>Data e hora</LabelDate>
                <MealDate>{`${meal.date} ás ${meal.hour}`}</MealDate>
                <MealStatsContainer>
                    <MealStatus status={meal.inDiet ? 'SUCCESS' : 'DANGER'}/>
                    <MealStatsTitle>dentro da dieta</MealStatsTitle>
                </MealStatsContainer>
                <ButtonsContainer>
                    <Button icon="edit" label="Editar" onPress={() => navigation.navigate('Create', { editMealData: meal })} />
                    <Button icon="delete" outline label="Excluir" onPress={() => openDeleteModal()} />
                </ButtonsContainer>
            </CreatingContainer>
        </Container>
    )
}