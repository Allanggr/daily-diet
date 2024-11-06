import theme from '@theme/index'
import { BackToHomeButton, BackToHomeIcon, Container, CreatingContainer, MainTitle } from './styles'
import { Alert, View } from 'react-native'
import { Input } from '@components/Input'
import { Label } from '@components/Input/styles'
import { Select } from '@components/Select'
import { Button } from '@components/Button'
import { useEffect, useState } from 'react'
import { Meal } from '@storage/storage.config'
import { addNewMeal } from '@storage/meal/createNewMeal'
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { editMeal } from '@storage/meal/editMeal'



export function Create({ navigation, route }: any) {
    const [meal, setMeal] = useState<Meal>({
        name: '',
        description: '',
        date: '',
        hour: '',
        inDiet: true,
        id: 0
    })
    const [isInDiet, setIsInDiet] = useState(true)
    const dataParams = route.params;

    useEffect(() => {
        setMeal({ ...meal, inDiet: isInDiet })
    },[isInDiet])

    useEffect(() => {
        if(dataParams) {
            setMeal(dataParams.editMealData)
            setIsInDiet(dataParams.editMealData.inDiet)
        }
    }, [dataParams])

    function somethingIsBlank() {
        return !meal.name || !meal.description || !meal.date || !meal.hour
    }

    async function handlePressCreate() {
        try {
            if(somethingIsBlank()) {
                throw new Error('Preencha todos os campos')
            } else {
                if (dataParams) {
                    await editMeal(dataParams.editMealData, meal)
                } else {
                    await addNewMeal({
                        ...meal,
                        id: uuidv4()
                    })
                }
            }
            navigation.navigate('Feedback', { inDiet: meal.inDiet })
        }catch (error) {
            if(error instanceof Error) {
                Alert.alert('Nova refeição', error.message)
            } else {
                Alert.alert('Nova refeição', 'Erro ao cadastrar refeição')
            }
        }
    }

    function handleNameChange(name: string) {
        setMeal({ ...meal, name })
    }

    function handleDescriptionChange(description: string) {
        setMeal({ ...meal, description })
    }

    function handleDateChange(date: string) {
        setMeal({ ...meal, date })
    }

    function handleHourChange(hour: string) {
        setMeal({ ...meal, hour })
    }

    return (
        <Container>
            <BackToHomeButton onPress={() => navigation.navigate('Home')}>
                <BackToHomeIcon />
            </BackToHomeButton>
            <MainTitle>{ dataParams ? "Editar Refeição" : "Nova Refeição"}</MainTitle>
            <CreatingContainer>
                <View>
                    <Input value={meal.name} selectionColor={theme.COLORS.GRAY_1} label="Nome" onChangeText={handleNameChange} />
                </View>
                <View>
                    <Input value={meal.description} label="Descrição" selectionColor={theme.COLORS.GRAY_1} multiline numberOfLines={5} style={{ textAlignVertical: 'top' }} onChangeText={handleDescriptionChange}/>
                </View>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <View style={{ flex: 1}}>
                        <Input value={meal.date} label="Data" selectionColor={theme.COLORS.GRAY_1} onChangeText={handleDateChange} />
                    </View>
                    <View style={{ flex: 1}}>
                        <Input value={meal.hour} label="Hora" selectionColor={theme.COLORS.GRAY_1} onChangeText={handleHourChange}/>
                    </View>
                </View>
                <View>
                    <Label>Está dentro da dieta?</Label>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Select label="Sim" status='SUCCESS' isActive={isInDiet} onPress={() => setIsInDiet(true)}/>
                        <Select label="Não" status='DANGER' isActive={!isInDiet} onPress={() => setIsInDiet(false)}/>
                    </View>
                </View>
                <Button label={dataParams ? "Salvar alterações" : "Cadastrar refeição"} onPress={handlePressCreate} style={{ marginTop: 70 }} />
            </CreatingContainer>
        </Container>
    )
}