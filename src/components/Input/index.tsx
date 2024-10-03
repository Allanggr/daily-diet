import { TextInputProps } from "react-native";
import { Label, StyledInput } from "./styles";
import React from "react";

type InputProps = TextInputProps & {
    label?: string;
}

export function Input(props: InputProps) {
  return (
    <>
        {props.label && <Label>{ props.label }</Label>}
        <StyledInput {...props} />
    </>
  );
}