import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from '@expo/vector-icons'

type Props = {
    outline: boolean
}

export const Container = styled(TouchableOpacity)<Props>`
    background-color: ${({ theme, outline }) => outline ? 'transparent' : theme.COLORS.GRAY_2};
    color: 'red';
    padding: 16px;
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const BtnIcon = styled(MaterialIcons).attrs<Props>(({ theme, outline }) => ({
    size: 18,
    color: outline ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE
}))`
    margin-right: 8px;
`


export const BtnLabel = styled.Text<Props>`
    color: ${({ theme, outline }) => outline ? theme.COLORS.GRAY_2 : theme.COLORS.WHITE};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`