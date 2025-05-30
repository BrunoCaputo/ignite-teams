import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'
import { useTheme } from 'styled-components/native'

import { AppRoutes } from './app.routes'

export function Routes() {
  const {
    COLORS: { GRAY_600 },
  } = useTheme()

  return (
    <View style={{ flex: 1, backgroundColor: GRAY_600 }}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </View>
  )
}
