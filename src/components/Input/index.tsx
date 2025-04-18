import { TextInputProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './styles'

export function Input({ ...props }: TextInputProps) {
  const {
    COLORS: { GRAY_300 },
  } = useTheme()

  return <Container placeholderTextColor={GRAY_300} {...props} />
}
