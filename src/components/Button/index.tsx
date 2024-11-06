import { TouchableOpacityProps } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { BtnIcon, BtnLabel, Container } from "./styles";

type Props = TouchableOpacityProps & {
    icon?: keyof typeof MaterialIcons.glyphMap;
    outline?: boolean;
    label: string;
}

export function Button({ icon, outline = false, label, ...rest}: Props) {
    return (
        <Container outline={outline} {...rest}>
            { icon && <BtnIcon name={icon} outline={outline} />}
            <BtnLabel outline={outline}>{ label }</BtnLabel>
        </Container>
    )
}