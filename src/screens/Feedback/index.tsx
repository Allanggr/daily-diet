import { Container, Description, Image, Title } from "./styles";
import { useMemo } from "react";
import { Button } from "@components/Button";

export function Feedback({ navigation, route }: any) {

    const { inDiet } = route.params;

    const feedbackData = useMemo(() => {
        return inDiet ? {
            title: "Continue assim!",
            message: "Você continua dentro da dieta. Muito bem!",
            imagem: require("@assets/diet-success.png")
        } : {
            title: "Que pena!",
            message: "Você saiu da dieta dessa vez, mas continue se esforçando e não desista!",
            imagem: require("@assets/diet-fail.png")
        };
    }, [inDiet]);

    return (
        <Container>
            <Title status={inDiet}>{feedbackData.title}</Title>
            <Description>{feedbackData.message}</Description>
            <Image source={feedbackData.imagem} />
            <Button label="Ir para a página inicial" onPress={() => navigation.push('Home')} />
        </Container>
    );
}