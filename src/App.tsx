import { ThemeProvider } from 'styled-components'
import { Issues } from './pages/Issues'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Issues />
    </ThemeProvider>
  )
}

export default App
