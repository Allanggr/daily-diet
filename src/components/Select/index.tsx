import { TouchableOpacityProps } from "react-native";
import { SelectIndicator, SelectText, StyledSelect } from "./styles";

export type SelectProps = TouchableOpacityProps & {
    label?: string;
    status: 'SUCCESS' | 'DANGER'
    isActive: boolean;
}

export function Select({ label, status, isActive = false , ...rest }: SelectProps) {
    return (
        <StyledSelect { ...rest } isActive={isActive} status={status}>
            <SelectIndicator color={status} />
            <SelectText>{ label }</SelectText>
        </StyledSelect>
    )
}