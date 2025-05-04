import { RefObject } from 'react'
import { TextInput, TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './styles'

interface InputProps extends TextInputProps {
  inputRef?: RefObject<TextInput>
}

export function Input({ inputRef, ...props }: InputProps) {
  const {
    COLORS: { GRAY_300 },
  } = useTheme()

  return <Container ref={inputRef} placeholderTextColor={GRAY_300} {...props} />
}
