import { Button } from '@components/Button'
import { Header } from '@components/Header'
import { Highlight } from '@components/Highlight'
import { Input } from '@components/Input'
import { useTheme } from 'styled-components/native'

import { Container, Content, Icon } from './styles'

export function NewGroup() {
  const theme = useTheme()

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input
          placeholder="Nome da turma"
          placeholderTextColor={theme.COLORS.GRAY_300}
        />

        <Button title="Criar" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  )
}
