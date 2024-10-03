import theme from '@theme/index'
import { BackToHomeButton, BackToHomeIcon, Container, CreatingContainer, MainTitle } from './styles'
import { View } from 'react-native'
import { Input } from '@components/Input'
import { Label } from '@components/Input/styles'
import { Select } from '@components/Select'
import { Button } from '@components/Button'

export function Create({ navigation }: { navigation: any}) {

    function handlePress() {
        navigation.navigate('Feedback', { inDiet: false })
    }

    return (
        <Container>
            <BackToHomeButton onPress={() => navigation.navigate('Home')}>
                <BackToHomeIcon />
            </BackToHomeButton>
            <MainTitle>Nova Refeição</MainTitle>
            <CreatingContainer>
                <View>
                    <Input selectionColor={theme.COLORS.GRAY_1} label="Nome" />
                </View>
                <View>
                    <Input label="Descrição" selectionColor={theme.COLORS.GRAY_1} multiline numberOfLines={5} style={{ textAlignVertical: 'top' }}/>
                </View>
                <View style={{ flexDirection: 'row', gap: 20 }}>
                    <View style={{ flex: 1}}>
                        <Input label="Data" selectionColor={theme.COLORS.GRAY_1} />
                    </View>
                    <View style={{ flex: 1}}>
                        <Input label="Hora" selectionColor={theme.COLORS.GRAY_1} />
                    </View>
                </View>
                <View>
                    <Label>Está dentro da dieta?</Label>
                    <View style={{ flexDirection: 'row', gap: 10 }}>
                        <Select label="Sim" status='SUCCESS' isActive={false}/>
                        <Select label="Não" status='DANGER' isActive={false}/>
                    </View>
                </View>
                <Button label="Cadastrar refeição" onPress={handlePress} style={{ marginTop: 70 }} />
            </CreatingContainer>
        </Container>
    )
}