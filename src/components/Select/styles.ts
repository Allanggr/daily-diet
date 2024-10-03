import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";
import styled, { css } from "styled-components/native";

type IndicatorProps = {
    color: 'SUCCESS' | 'DANGER';
}

type SelectProps = TouchableOpacityProps & {
    isActive: boolean;
    status: 'SUCCESS' | 'DANGER';
}

export const StyledSelect = styled(TouchableOpacity)<SelectProps>`
    padding: 16px;
    background-color: ${({ theme, isActive, status }) => {
        if( isActive) {
            return status === 'SUCCESS' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT;
        }
        return theme.COLORS.GRAY_6;
    } };
    border-radius: 8px;
    border: ${({ theme, isActive, status }) => {
        if( isActive) {
            return status === 'SUCCESS' ? `1px solid ${theme.COLORS.GREEN_DARK}` : `1px solid ${theme.COLORS.RED_DARK}`;
        }
        return '1px solid transparent';
    }};
    margin-bottom: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex: 1;
`

export const SelectText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.FONT_FAMILY.BOLD};
        font-size: ${theme.FONT_SIZE.MD}px;
        color: ${theme.COLORS.GRAY_2};
    `}
    text-align: left;
`

export const SelectIndicator = styled(View)<IndicatorProps>`
    width: 8px;
    height: 8px;
    background-color: ${({ theme, color }) => color === 'SUCCESS' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    border-radius: 50px;
`